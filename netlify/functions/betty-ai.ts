import type { Config } from '@netlify/functions'

type ChatMessage = {
  role: 'user' | 'assistant'
  content: string
}

function getEnv(name: string) {
  const netlifyValue = (globalThis as any).Netlify?.env?.get?.(name)
  if (netlifyValue) return netlifyValue
  return process.env[name]
}

function isChatMessage(value: unknown): value is ChatMessage {
  if (!value || typeof value !== 'object') return false
  const maybe = value as Record<string, unknown>
  return (maybe.role === 'user' || maybe.role === 'assistant') && typeof maybe.content === 'string'
}

const systemPrompt = `You are Betty, the BTTY AI Assistant on btty.ai.

Your job is to help potential customers understand what BTTY does and guide them to the right next step.

Facts about BTTY:
- BTTY stands for Better Today Than Yesterday.
- BTTY builds AI automation, dashboards, reporting, operating workflows, and customer-response systems for owners and operators.
- BTTY is especially useful for multi-location businesses, service businesses, and owners who are tired of running too much manually.
- Common things BTTY builds include lead follow-up, missed-call text back, CRM workflows, dashboard visibility, reporting, invoicing support, publishing workflows, and AI assistants.
- BTTY was built by Tony Case and Jared Drake.
- The best next step for a qualified visitor is to book a free demo or use the contact page.
- Do not invent pricing, guarantees, technical integrations, or case-study numbers beyond what the site already states.

Behavior:
- Be warm, concise, and practical.
- Answer in 2-4 short paragraphs or a few short bullets.
- If the user asks something outside BTTY's scope, say so plainly and guide them back to booking a demo or contacting Tony and Jared.
- If the user asks how fast BTTY can help, say most engagements begin with a fast audit and an early working delivery, then improve from there.
- Always stay focused on BTTY, its systems, its use cases, and the next step.`

export default async (req: Request) => {
  if (req.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 })
  }

  let message = ''
  let history: ChatMessage[] = []

  try {
    const body = (await req.json()) as { message?: unknown; history?: unknown }
    message = typeof body.message === 'string' ? body.message.trim() : ''
    history = Array.isArray(body.history) ? body.history.filter(isChatMessage).slice(-6) : []
  } catch {
    return Response.json({ error: 'Bad request.' }, { status: 400 })
  }

  if (!message) {
    return Response.json({ error: 'Please send a message for Betty.' }, { status: 400 })
  }

  const apiKey = getEnv('OPENAI_API_KEY')
  const model = getEnv('OPENAI_MODEL') ?? 'gpt-4.1-mini'

  if (!apiKey) {
    return Response.json(
      {
        reply:
          'Betty is almost ready. Add the OpenAI API key in Netlify and I can answer questions live from the site.',
      },
      { status: 200 },
    )
  }

  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model,
      temperature: 0.7,
      max_tokens: 220,
      messages: [
        {
          role: 'system',
          content: systemPrompt,
        },
        ...history.map((item) => ({
          role: item.role,
          content: item.content,
        })),
        {
          role: 'user',
          content: message,
        },
      ],
    }),
  })

  if (!response.ok) {
    const details = await response.text()
    console.error('Betty AI request failed:', details)
    return Response.json(
      {
        error: `Betty debug: ${details}`,
      },
      { status: 502 },
    )
  }

  const payload = await response.json()
  const reply = payload?.choices?.[0]?.message?.content?.trim?.() ?? ''

  if (!reply) {
    return Response.json(
      {
        error: 'Betty could not generate a reply just now. Please try again or book a demo.',
      },
      { status: 502 },
    )
  }

  return Response.json({ reply }, { status: 200 })
}

export const config: Config = {
  path: '/api/betty-ai',
  method: ['POST'],
}
