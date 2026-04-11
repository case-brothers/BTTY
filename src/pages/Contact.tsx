import { useState } from 'react'

const services = [
  'AI Automation Audit',
  'Lead Capture & Follow-Up',
  'Missed Call Text-Back',
  'CRM & Customer Workflows',
  'Dashboards & Ops Visibility',
  'Invoice / Email Processing',
  'Ongoing Optimization',
  'Something Else',
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [selected, setSelected] = useState<string[]>([])

  function toggle(s: string) {
    setSelected(prev =>
      prev.includes(s) ? prev.filter(x => x !== s) : [...prev, s]
    )
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    data.set('services', selected.join(', '))
    data.set('subject', 'New BTTY inquiry')
    const customerName = String(data.get('name') ?? '')
    const customerEmail = String(data.get('email') ?? '')

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(data as unknown as Record<string, string>).toString(),
    })
      .then(async () => {
        try {
          await fetch('/api/thank-you', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: customerName, email: customerEmail }),
          })
        } catch {
          // ignore
        }
      })
      .finally(() => setSubmitted(true))
  }

  if (submitted) {
    return (
      <section className="min-h-screen flex items-center justify-center pt-16 bg-white">
        <div className="max-w-lg mx-auto px-6 text-center">
          <div className="text-5xl mb-8">✓</div>
          <h1 className="text-4xl font-black text-text-900 mb-4">
            Got it.
          </h1>
          <p className="text-text-500 leading-relaxed">
            We'll read through what you sent and get back to you within one business day. No form letters — you'll hear from Tony or Jared directly.
          </p>
        </div>
      </section>
    )
  }

  return (
    <>
      {/* ── Header ── */}
      <section className="pt-32 pb-20 border-b border-surface-300 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-semibold tracking-wide uppercase text-brand-green mb-6">
            Let's Talk
          </p>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight text-text-900 leading-[1.05] mb-8">
            Tell Us What's<br />
            <span className="text-brand-green">Broken.</span>
          </h1>
          <p className="text-text-500 text-lg leading-relaxed max-w-2xl">
            No sales calls. No NDAs before we talk. Tell us what you're dealing with and we'll give you a straight answer — whether we can help or not.
          </p>
        </div>
      </section>

      {/* ── Form ── */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            {/* Form */}
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
                <label className="text-xs font-semibold uppercase text-text-500">
                  Your Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Tony Case"
                  className="bg-surface-100 border border-surface-300 text-text-900 px-4 py-3 rounded-lg text-sm focus:outline-none focus:border-brand-green/50 placeholder:text-text-400 transition-colors"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold uppercase text-text-500">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="you@company.com"
                  className="bg-surface-100 border border-surface-300 text-text-900 px-4 py-3 rounded-lg text-sm focus:outline-none focus:border-brand-green/50 placeholder:text-text-400 transition-colors"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold uppercase text-text-500">
                  Company / Organization
                </label>
                <input
                  type="text"
                  name="company"
                  placeholder="Your Business Name"
                  className="bg-surface-100 border border-surface-300 text-text-900 px-4 py-3 rounded-lg text-sm focus:outline-none focus:border-brand-green/50 placeholder:text-text-400 transition-colors"
                />
              </div>

              <div className="flex flex-col gap-3">
                <label className="text-xs font-semibold uppercase text-text-500">
                  What do you need? (select all that apply)
                </label>
                <div className="flex flex-wrap gap-2">
                  {services.map(s => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => toggle(s)}
                      className={`text-xs font-medium px-4 py-2 border rounded-full transition-colors ${
                        selected.includes(s)
                          ? 'border-brand-green bg-brand-green-pale text-brand-green'
                          : 'border-surface-300 text-text-500 hover:border-text-400'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold uppercase text-text-500">
                  Tell us what you're dealing with *
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="We run 3 locations and lose leads because nobody answers the phone after hours..."
                  className="bg-surface-100 border border-surface-300 text-text-900 px-4 py-3 rounded-lg text-sm focus:outline-none focus:border-brand-green/50 placeholder:text-text-400 resize-none transition-colors"
                />
              </div>

              <button
                type="submit"
                className="text-sm font-semibold bg-brand-dark text-white px-8 py-4 rounded-lg hover:bg-brand-black transition-colors self-start"
              >
                Send It &rarr;
              </button>
            </form>

            {/* Info column */}
            <div className="flex flex-col gap-10">
              <div>
                <p className="text-xs font-semibold tracking-wide uppercase text-brand-green mb-4">
                  What Happens Next
                </p>
                <div className="flex flex-col gap-6">
                  {[
                    { step: '01', title: 'We Read It', body: 'Tony or Jared reads your submission the same day. No VA, no bot.' },
                    { step: '02', title: 'Straight Answer', body: "We'll tell you within 24 hours if we can help and what we'd recommend." },
                    { step: '03', title: '15-Minute Call', body: 'If it makes sense, we hop on a quick call to scope the work. No pitch deck.' },
                    { step: '04', title: 'We Get to Work', body: 'If we agree to move forward, we move fast. First delivery within 2 weeks.' },
                  ].map(({ step, title, body }) => (
                    <div key={step} className="flex gap-6">
                      <div className="text-xs text-brand-green pt-1 font-bold">{step}</div>
                      <div>
                        <div className="text-sm font-semibold text-text-900 mb-1">{title}</div>
                        <div className="text-text-500 text-sm leading-relaxed">{body}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-surface-300 pt-10">
                <p className="text-xs font-semibold tracking-wide uppercase text-brand-green mb-4">
                  Direct Contact
                </p>
                <p className="text-text-500 text-sm leading-relaxed mb-4">
                  Prefer email?
                </p>
                <a
                  href="mailto:tcase@btownrolypoly.com"
                  className="text-sm font-semibold text-text-900 hover:text-brand-green transition-colors"
                >
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
