import type { Config } from '@netlify/functions'

type NetlifyGlobal = typeof globalThis & {
  Netlify?: {
    env?: {
      get?: (name: string) => string | undefined
    }
  }
}

function getEnv(name: string) {
  const netlifyValue = (globalThis as NetlifyGlobal).Netlify?.env?.get?.(name)
  if (netlifyValue) return netlifyValue
  return process.env[name]
}

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')
}

function isProbablyEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

function normalize(value: string) {
  return value.trim() || 'Not provided'
}

function splitName(value: string) {
  const [firstName = '', ...rest] = value.trim().split(/\s+/).filter(Boolean)
  return { firstName, lastName: rest.join(' ') }
}

async function sendLeadToHighLevel(lead: {
  name: string
  email: string
  company: string
}) {
  const token = getEnv('HIGHLEVEL_PRIVATE_INTEGRATION_TOKEN')
  const locationId = getEnv('HIGHLEVEL_LOCATION_ID')
  const workflowId = getEnv('HIGHLEVEL_SCAN_LEAD_WORKFLOW_ID')

  // This direct API route deliberately avoids HighLevel's paid inbound-webhook trigger.
  if (!token || !locationId || !workflowId) return { attempted: false, delivered: false }

  const { firstName, lastName } = splitName(lead.name)
  const contactResponse = await fetch('https://services.leadconnectorhq.com/contacts/upsert', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
      Version: '2021-07-28',
    },
    body: JSON.stringify({
      locationId,
      firstName,
      lastName,
      email: lead.email,
      companyName: lead.company || undefined,
      source: 'BTTY Website',
      tags: ['btty-website-lead'],
    }),
  })

  if (!contactResponse.ok) {
    console.error('HighLevel contact upsert failed:', contactResponse.status)
    return { attempted: true, delivered: false }
  }

  const contactPayload = (await contactResponse.json()) as {
    contact?: { id?: string }
    id?: string
  }
  const contactId = contactPayload.contact?.id ?? contactPayload.id
  if (!contactId) {
    console.error('HighLevel contact upsert returned no contact ID')
    return { attempted: true, delivered: false }
  }

  const workflowResponse = await fetch(
    `https://services.leadconnectorhq.com/contacts/${encodeURIComponent(contactId)}/workflow/${encodeURIComponent(workflowId)}`,
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
        Version: '2021-07-28',
      },
      body: JSON.stringify({}),
    },
  )

  if (!workflowResponse.ok) {
    console.error('HighLevel workflow enrollment failed:', workflowResponse.status)
    return { attempted: true, delivered: false }
  }

  return { attempted: true, delivered: true }
}

export default async (req: Request) => {
  if (req.method !== 'POST') return new Response('Method not allowed', { status: 405 })

  let email = ''
  let name = ''
  let company = ''
  let services = ''
  let message = ''
  try {
    const url = new URL(req.url)
    const contentType = req.headers.get('content-type') ?? ''
    const rawBody = await req.text()

    if (contentType.includes('application/json')) {
      const parsed = JSON.parse(rawBody) as {
        email?: unknown
        name?: unknown
        company?: unknown
        services?: unknown
        message?: unknown
      }
      email = typeof parsed.email === 'string' ? parsed.email.trim() : ''
      name = typeof parsed.name === 'string' ? parsed.name.trim() : ''
      company = typeof parsed.company === 'string' ? parsed.company.trim() : ''
      services = typeof parsed.services === 'string' ? parsed.services.trim() : ''
      message = typeof parsed.message === 'string' ? parsed.message.trim() : ''
    } else if (rawBody) {
      const params = new URLSearchParams(rawBody)
      email = (params.get('email') ?? '').trim()
      name = (params.get('name') ?? '').trim()
      company = (params.get('company') ?? '').trim()
      services = (params.get('services') ?? '').trim()
      message = (params.get('message') ?? '').trim()
    }

    if (!email) email = (url.searchParams.get('email') ?? '').trim()
    if (!name) name = (url.searchParams.get('name') ?? '').trim()
    if (!company) company = (url.searchParams.get('company') ?? '').trim()
    if (!services) services = (url.searchParams.get('services') ?? '').trim()
    if (!message) message = (url.searchParams.get('message') ?? '').trim()
  } catch {
    return new Response('Bad request', { status: 400 })
  }

  if (!email || !isProbablyEmail(email)) {
    return new Response('Missing or invalid email', { status: 400 })
  }

  const mailgunApiKey = getEnv('MAILGUN_API_KEY')
  const mailgunDomain = getEnv('MAILGUN_DOMAIN')
  const mailgunRegion = (getEnv('MAILGUN_REGION') ?? 'US').toUpperCase()

  try {
    const highLevelResult = await sendLeadToHighLevel({ name, email, company })
    if (highLevelResult.attempted && !highLevelResult.delivered)
      console.error('HighLevel direct lead handoff did not complete')
  } catch (error) {
    console.error('HighLevel direct lead handoff failed:', error)
  }

  if (!mailgunApiKey || !mailgunDomain) {
    return new Response('Missing Mailgun configuration', { status: 500 })
  }

  const apiBase = mailgunRegion === 'EU' ? 'https://api.eu.mailgun.net' : 'https://api.mailgun.net'

  const fromEmail = getEnv('BTTY_EMAIL_FROM') ?? 'thankyou@mg.btty.ai'
  const fromName = getEnv('BTTY_EMAIL_FROM_NAME') ?? 'BTTY'
  const replyTo = getEnv('BTTY_REPLY_TO_EMAIL') ?? 'tcase@btownrolypoly.com'
  const adminTo = getEnv('BTTY_ADMIN_EMAIL') ?? replyTo

  const customerName = name || 'there'
  const safeName = escapeHtml(customerName)
  const safeCompany = escapeHtml(normalize(company))
  const safeServices = escapeHtml(normalize(services))
  const safeMessage = escapeHtml(normalize(message))

  const auth = Buffer.from(`api:${mailgunApiKey}`).toString('base64')

  async function sendMail(params: URLSearchParams) {
    const response = await fetch(`${apiBase}/v3/${mailgunDomain}/messages`, {
      method: 'POST',
      headers: {
        Authorization: `Basic ${auth}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: params.toString(),
    })

    if (!response.ok) {
      const details = await response.text()
      console.error('Mailgun send failed:', details)
      throw new Error('Mailgun send failed')
    }
  }

  const thankYouParams = new URLSearchParams()
  thankYouParams.set('from', `${fromName} <${fromEmail}>`)
  thankYouParams.set('to', email)
  thankYouParams.set('h:Reply-To', replyTo)
  thankYouParams.set('subject', 'We got your inquiry')
  thankYouParams.set(
    'text',
    `Thanks for reaching out to BTTY, ${customerName}. We received your inquiry and Tony or the BTTY team will be in touch within one business day.`,
  )
  thankYouParams.set(
    'html',
    `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #1f2937;">
        <p>Hi ${safeName},</p>
        <p>Thanks for reaching out to BTTY. We received your inquiry and Tony or the BTTY team will review it shortly.</p>
        <p>We will be in touch within one business day.</p>
        <p>Thanks,<br />BTTY</p>
      </div>
    `,
  )

  const adminParams = new URLSearchParams()
  adminParams.set('from', `${fromName} <${fromEmail}>`)
  adminParams.set('to', adminTo)
  adminParams.set('h:Reply-To', replyTo)
  adminParams.set('subject', `New BTTY inquiry from ${name || email}`)
  adminParams.set(
    'text',
    [
      `Name: ${normalize(name)}`,
      `Email: ${email}`,
      `Company: ${normalize(company)}`,
      `Services: ${normalize(services)}`,
      '',
      `Message:`,
      normalize(message),
    ].join('\n'),
  )
  adminParams.set(
    'html',
    `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #1f2937;">
        <h2 style="margin-bottom: 16px;">New BTTY inquiry</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Company:</strong> ${safeCompany}</p>
        <p><strong>Services:</strong> ${safeServices}</p>
        <p><strong>Message:</strong></p>
        <p>${safeMessage.replaceAll('\n', '<br />')}</p>
      </div>
    `,
  )

  try {
    await sendMail(thankYouParams)
    await sendMail(adminParams)
  } catch {
    return new Response('Mailgun send failed', { status: 502 })
  }

  return new Response('OK', { status: 200 })
}

export const config: Config = {
  path: '/api/thank-you',
  method: ['POST'],
}
