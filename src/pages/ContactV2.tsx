import { startTransition, useState } from 'react'

const services = [
  'AI Automation Audit',
  'Lead Capture and Follow-Up',
  'Missed Call Text-Back',
  'CRM and Customer Workflows',
  'Dashboards and Ops Visibility',
  'Invoice and Email Processing',
  'Ongoing Optimization',
  'Something Else',
]

function toUrlEncoded(formData: FormData) {
  const params = new URLSearchParams()

  for (const [key, value] of formData.entries()) {
    params.append(key, typeof value === 'string' ? value : value.name)
  }

  return params.toString()
}

export default function ContactV2() {
  const [submitted, setSubmitted] = useState(false)
  const [selected, setSelected] = useState<string[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')

  function toggle(service: string) {
    setSelected((prev) => (prev.includes(service) ? prev.filter((item) => item !== service) : [...prev, service]))
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitError('')
    setIsSubmitting(true)

    const form = event.currentTarget
    const data = new FormData(form)
    data.set('services', selected.join(', '))
    data.set('subject', 'New BTTY inquiry')
    const customerName = String(data.get('name') ?? '')
    const customerEmail = String(data.get('email') ?? '')

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: toUrlEncoded(data),
      })

      if (!response.ok) {
        throw new Error('Request failed')
      }

      // Best-effort: send the customer an auto-reply via server-side function.
      // We don't block the UX if this fails.
      try {
        const thankYouUrl = new URL('/api/thank-you', window.location.origin)
        thankYouUrl.searchParams.set('name', customerName)
        thankYouUrl.searchParams.set('email', customerEmail)

        await fetch(thankYouUrl.toString(), { method: 'POST' })
      } catch {
        // ignore
      }

      startTransition(() => {
        setSubmitted(true)
      })
    } catch {
      setSubmitError('The form could not be submitted right now. Email tcase@btownrolypoly.com and we will still take care of you.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <section className="flex min-h-screen items-center justify-center bg-white pt-16">
        <div className="mx-auto max-w-lg px-6 text-center">
          <div className="mb-8 text-5xl text-brand-green">OK</div>
          <h1 className="mb-4 text-4xl font-black text-text-900">Got it.</h1>
          <p className="leading-relaxed text-text-500">
            We will read through what you sent and get back to you within one business day. No form letters. You will hear from Tony or the BTTY team directly.
          </p>
        </div>
      </section>
    )
  }

  return (
    <>
      <section className="border-b border-surface-300 bg-white pb-20 pt-32">
        <div className="mx-auto max-w-6xl px-6">
          <p className="mb-6 text-xs font-semibold uppercase tracking-wide text-brand-green">Let&apos;s Talk</p>
          <h1 className="mb-8 text-5xl font-black leading-[1.05] tracking-tight text-text-900 md:text-7xl">
            Tell us what is
            <br />
            <span className="text-brand-green">breaking down.</span>
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-text-500">
            No sales calls. No NDAs before we talk. Tell us what you are dealing with and we will give you a straight answer about whether we can help.
          </p>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 gap-20 md:grid-cols-2">
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="flex flex-col gap-8"
            >
              <input type="hidden" name="form-name" value="contact" />
              <input type="hidden" name="subject" value="New BTTY inquiry" />
              <input type="hidden" name="services" value={selected.join(', ')} />
              <p className="hidden">
                <label>
                  Do not fill this out if you are human:
                  <input name="bot-field" />
                </label>
              </p>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold uppercase text-text-500">Your Name *</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Tony Case"
                  className="rounded-lg border border-surface-300 bg-surface-100 px-4 py-3 text-sm text-text-900 transition-colors placeholder:text-text-400 focus:border-brand-green/50 focus:outline-none"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold uppercase text-text-500">Email *</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="you@company.com"
                  className="rounded-lg border border-surface-300 bg-surface-100 px-4 py-3 text-sm text-text-900 transition-colors placeholder:text-text-400 focus:border-brand-green/50 focus:outline-none"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold uppercase text-text-500">Company / Organization</label>
                <input
                  type="text"
                  name="company"
                  placeholder="Your Business Name"
                  className="rounded-lg border border-surface-300 bg-surface-100 px-4 py-3 text-sm text-text-900 transition-colors placeholder:text-text-400 focus:border-brand-green/50 focus:outline-none"
                />
              </div>

              <div className="flex flex-col gap-3">
                <label className="text-xs font-semibold uppercase text-text-500">What do you need? Select all that apply</label>
                <div className="flex flex-wrap gap-2">
                  {services.map((service) => (
                    <button
                      key={service}
                      type="button"
                      onClick={() => toggle(service)}
                      className={`rounded-full border px-4 py-2 text-xs font-medium transition-colors ${
                        selected.includes(service)
                          ? 'border-brand-green bg-brand-green-pale text-brand-green'
                          : 'border-surface-300 text-text-500 hover:border-text-400'
                      }`}
                    >
                      {service}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold uppercase text-text-500">Tell us what you are dealing with *</label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="We run 3 locations and lose leads because nobody answers the phone after hours..."
                  className="resize-none rounded-lg border border-surface-300 bg-surface-100 px-4 py-3 text-sm text-text-900 transition-colors placeholder:text-text-400 focus:border-brand-green/50 focus:outline-none"
                />
              </div>

              {submitError ? (
                <p className="rounded-2xl border border-[#d7c9b8] bg-[#f7efe5] px-4 py-3 text-sm leading-relaxed text-text-700">
                  {submitError}
                </p>
              ) : null}

              <button
                type="submit"
                disabled={isSubmitting}
                className="self-start rounded-lg bg-brand-dark px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-brand-black disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? 'Sending...' : 'Send It'}
              </button>
            </form>

            <div className="flex flex-col gap-10">
              <div>
                <p className="mb-4 text-xs font-semibold uppercase tracking-wide text-brand-green">What Happens Next</p>
                <div className="flex flex-col gap-6">
                  {[
                    { step: '01', title: 'We Read It', body: 'Tony or the BTTY team reads your submission the same day. No VA. No bot.' },
                    { step: '02', title: 'Straight Answer', body: 'We will tell you within 24 hours if we can help and what we would recommend.' },
                    { step: '03', title: '15-Minute Call', body: 'If it makes sense, we hop on a quick call to scope the work. No pitch deck.' },
                    { step: '04', title: 'We Get to Work', body: 'If we agree to move forward, we move fast. First delivery within 2 weeks.' },
                  ].map(({ step, title, body }) => (
                    <div key={step} className="flex gap-6">
                      <div className="pt-1 text-xs font-bold text-brand-green">{step}</div>
                      <div>
                        <div className="mb-1 text-sm font-semibold text-text-900">{title}</div>
                        <div className="text-sm leading-relaxed text-text-500">{body}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-surface-300 pt-10">
                <p className="mb-4 text-xs font-semibold uppercase tracking-wide text-brand-green">Direct Contact</p>
                <p className="mb-4 text-sm leading-relaxed text-text-500">Prefer email?</p>
                <a href="mailto:tcase@btownrolypoly.com" className="text-sm font-semibold text-text-900 transition-colors hover:text-brand-green">
                  tcase@btownrolypoly.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
