import { startTransition, useEffect, useState } from 'react'

const trades = [
  'Roofing',
  'HVAC',
  'Plumbing',
  'Electrical',
  'Excavation / Concrete / Septic',
  'Tree Service',
  'Remodeling / Construction',
  'Lawn & Landscape',
  'Other Trade',
]

const websiteStatus = [
  'No website at all',
  'Facebook page only',
  'Have one, but it is outdated',
  'Have a good one, just curious',
]

const included = [
  {
    title: 'A website built for your trade',
    body: 'Not a template with your name pasted in. Your photos, your reviews, your service area, built to make the phone ring.',
  },
  {
    title: 'Missed-call text-back',
    body: 'On a roof? Under a sink? Your missed calls get an automatic text back in seconds, before the customer dials the next guy.',
  },
  {
    title: 'Every lead texts your phone',
    body: 'Estimate requests do not sit in an inbox. They land on your phone the moment they come in.',
  },
  {
    title: 'Hosting, updates, and changes',
    body: 'New photos, new services, price changes. Text us what you need and it gets done. No hourly invoices.',
  },
  {
    title: 'Built to get found',
    body: 'Set up the way Google expects, so when someone in your town searches your trade, you are in the running.',
  },
  {
    title: 'No contract. Ever.',
    body: 'Month to month, cancel anytime, and you own your domain. We keep your business by earning it.',
  },
]

const steps = [
  {
    number: '1',
    title: 'Tell us about your business',
    body: 'The form below takes about two minutes. Just the basics: your trade, your town, your phone.',
  },
  {
    number: '2',
    title: 'We build your draft free',
    body: 'Within 48 hours we text you a link to a real draft of your new homepage. Your name, your trade, your town. No payment, no meeting first.',
  },
  {
    number: '3',
    title: 'Love it or leave it',
    body: 'If it beats what you have, we finish it and go live for $197 a month, everything included. If not, you owe nothing and we part friends.',
  },
]

const faqs = [
  {
    q: 'What is the catch with the free draft?',
    a: 'No catch. Building the draft first is simply the easiest way to show you what we do. Some people walk away. Most do not.',
  },
  {
    q: 'Do I own my domain and my site?',
    a: 'Your domain is yours, period. If you ever leave, it goes with you.',
  },
  {
    q: 'Is there a contract or setup fee?',
    a: 'No setup fee and no contract. $197 a month, month to month, cancel anytime.',
  },
]

function toUrlEncoded(formData: FormData) {
  const params = new URLSearchParams()

  for (const [key, value] of formData.entries()) {
    params.append(key, typeof value === 'string' ? value : value.name)
  }

  return params.toString()
}

export default function ContractorsV2() {
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')

  useEffect(() => {
    document.title = 'BTTY | Websites For Contractors'
    return () => {
      document.title = 'BTTY | AI Automation For Operators'
    }
  }, [])

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitError('')
    setIsSubmitting(true)

    const form = event.currentTarget
    const data = new FormData(form)
    data.set('subject', 'New contractor draft request')
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

      // Best-effort auto-reply when an email was provided. Never blocks the UX.
      if (customerEmail) {
        try {
          const thankYouUrl = new URL('/api/thank-you', window.location.origin)
          thankYouUrl.searchParams.set('name', customerName)
          thankYouUrl.searchParams.set('email', customerEmail)

          await fetch(thankYouUrl.toString(), { method: 'POST' })
        } catch {
          // ignore
        }
      }

      startTransition(() => {
        setSubmitted(true)
      })
    } catch {
      setSubmitError('The form could not be submitted right now. Call or text (812) 636-1148 and we will still take care of you.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <section className="flex min-h-screen items-center justify-center bg-white pt-16">
        <div className="mx-auto max-w-lg px-6 text-center">
          <div className="mb-8 text-5xl text-brand-green">OK</div>
          <h1 className="mb-4 text-4xl font-black text-text-900">Your draft is in the queue.</h1>
          <p className="leading-relaxed text-text-500">
            Within 48 hours you will get a text with a link to your new homepage draft. A real person, not a robot, will follow up. If you want to talk sooner, call Betty any time at (812) 636-1148.
          </p>
        </div>
      </section>
    )
  }

  return (
    <>
      <section className="border-b border-surface-300 bg-white pb-20 pt-32">
        <div className="mx-auto max-w-6xl px-6">
          <p className="mb-6 text-xs font-semibold uppercase tracking-wide text-brand-green">Websites For Contractors &amp; Trades</p>
          <h1 className="mb-8 text-5xl font-black leading-[1.05] tracking-tight text-text-900 md:text-7xl">
            Your competitor isn&apos;t better than you.
            <br />
            <span className="text-brand-green">He&apos;s just easier to find.</span>
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-text-500">
            BTTY builds websites and lead systems for roofers, HVAC, plumbers, electricians, and every trade that lives by a ringing phone. $197 a month. Everything included. No contract. And you see your site before you pay a dime.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#draft"
              className="rounded-full bg-brand-green px-8 py-4 text-sm font-bold text-white transition-opacity hover:opacity-90"
            >
              Get My Free Draft
            </a>
            <a href="#how" className="text-sm font-semibold text-text-700 underline-offset-4 hover:underline">
              See how it works
            </a>
          </div>
        </div>
      </section>

      <section className="bg-surface-100 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-wide text-brand-green">One Price. The Whole System.</p>
              <h2 className="text-4xl font-black tracking-tight text-text-900 md:text-5xl">
                $197 a month.
                <br />
                That&apos;s the whole offer.
              </h2>
            </div>
            <p className="max-w-md text-base leading-relaxed text-text-500">
              No setup fee. No contract. No surprise invoices. Agencies charge $2,000 a month for less. Website builders leave you doing it yourself. This is the middle that actually works.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {included.map((item) => (
              <div key={item.title} className="rounded-2xl border border-surface-300 bg-white p-8">
                <h3 className="mb-3 text-lg font-bold text-text-900">{item.title}</h3>
                <p className="text-sm leading-relaxed text-text-500">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-2">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-wide text-brand-green">The Difference</p>
              <h2 className="mb-6 text-4xl font-black tracking-tight text-text-900 md:text-5xl">
                Most contractor websites just sit there. Ours answer the phone.
              </h2>
              <p className="mb-4 text-base leading-relaxed text-text-500">
                Here is what actually loses you jobs: a homeowner calls while you are on a job, you cannot pick up, and they call the next name on the list. That job was yours and you never even knew it existed.
              </p>
              <p className="text-base leading-relaxed text-text-500">
                Every BTTY site comes wired with missed-call text-back. The customer gets a text within seconds, the conversation starts without you, and the lead is saved by the time you are off the ladder. That one feature pays for the whole system.
              </p>
            </div>
            <div className="rounded-2xl border border-surface-300 bg-surface-100 p-10">
              <p className="mb-6 text-xs font-semibold uppercase tracking-wide text-text-500">What your customer sees</p>
              <div className="flex flex-col gap-4">
                <div className="max-w-[85%] self-start rounded-2xl rounded-bl-sm bg-white px-5 py-3 text-sm text-text-700 shadow-sm">
                  Missed call to your business, 2:14 PM
                </div>
                <div className="max-w-[85%] self-end rounded-2xl rounded-br-sm bg-brand-green px-5 py-3 text-sm text-white shadow-sm">
                  Sorry we missed you! This is Smith Roofing. What can we help with? Reply here and we will get right back to you.
                </div>
                <div className="max-w-[85%] self-start rounded-2xl rounded-bl-sm bg-white px-5 py-3 text-sm text-text-700 shadow-sm">
                  Hi, we have a leak over the garage. Can someone come look this week?
                </div>
              </div>
              <p className="mt-6 text-xs leading-relaxed text-text-400">Sent automatically, 9 seconds after the missed call.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="how" className="bg-surface-100 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <p className="mb-4 text-xs font-semibold uppercase tracking-wide text-brand-green">How It Works</p>
          <h2 className="mb-14 text-4xl font-black tracking-tight text-text-900 md:text-5xl">See it before you pay for it.</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {steps.map((step) => (
              <div key={step.number} className="rounded-2xl border border-surface-300 bg-white p-8">
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-brand-green-pale text-lg font-black text-brand-green">
                  {step.number}
                </div>
                <h3 className="mb-3 text-lg font-bold text-text-900">{step.title}</h3>
                <p className="text-sm leading-relaxed text-text-500">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-2xl border border-surface-300 bg-surface-100 p-10 md:p-14">
            <p className="mb-4 text-xs font-semibold uppercase tracking-wide text-brand-green">Built By An Operator, Not An Agency</p>
            <p className="max-w-3xl text-lg leading-relaxed text-text-700">
              BTTY is run by Tony Case. He spends his days at a car dealership finance desk and runs two restaurants, so he knows exactly what it is like to miss calls while doing the actual work. He built these systems for his own businesses first. They worked. Now he builds them for people like you, and every client gets a real person who answers, not a ticket queue in another time zone.
            </p>
          </div>
        </div>
      </section>

      <section id="draft" className="bg-surface-100 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-1 gap-20 md:grid-cols-2">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-wide text-brand-green">Free Draft. Real Offer.</p>
              <h2 className="mb-6 text-4xl font-black tracking-tight text-text-900 md:text-5xl">
                Get your homepage draft in 48 hours.
              </h2>
              <p className="mb-10 max-w-md text-base leading-relaxed text-text-500">
                Two minutes of your time now. A link on your phone within two days. Zero obligation either way. Prefer to talk instead? Call Betty, our 24/7 assistant, at (812) 636-1148.
              </p>

              <div className="flex flex-col gap-6">
                {faqs.map((faq) => (
                  <div key={faq.q}>
                    <h3 className="mb-1 text-sm font-bold text-text-900">{faq.q}</h3>
                    <p className="text-sm leading-relaxed text-text-500">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>

            <form
              name="contractor-draft"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="flex flex-col gap-6"
            >
              <input type="hidden" name="form-name" value="contractor-draft" />
              <input type="hidden" name="subject" value="New contractor draft request" />
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
                  placeholder="Mike Weller"
                  className="rounded-lg border border-surface-300 bg-white px-4 py-3 text-sm text-text-900 transition-colors placeholder:text-text-400 focus:border-brand-green/50 focus:outline-none"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold uppercase text-text-500">Business Name *</label>
                <input
                  type="text"
                  name="business"
                  required
                  placeholder="Weller Roofing"
                  className="rounded-lg border border-surface-300 bg-white px-4 py-3 text-sm text-text-900 transition-colors placeholder:text-text-400 focus:border-brand-green/50 focus:outline-none"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold uppercase text-text-500">Your Trade *</label>
                <select
                  name="trade"
                  required
                  defaultValue=""
                  className="rounded-lg border border-surface-300 bg-white px-4 py-3 text-sm text-text-900 transition-colors focus:border-brand-green/50 focus:outline-none"
                >
                  <option value="" disabled>
                    Pick your trade
                  </option>
                  {trades.map((trade) => (
                    <option key={trade} value={trade}>
                      {trade}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold uppercase text-text-500">Cell Phone (we text your draft here) *</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="(812) 555-0123"
                  className="rounded-lg border border-surface-300 bg-white px-4 py-3 text-sm text-text-900 transition-colors placeholder:text-text-400 focus:border-brand-green/50 focus:outline-none"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold uppercase text-text-500">Town &amp; State *</label>
                <input
                  type="text"
                  name="location"
                  required
                  placeholder="Seymour, IN"
                  className="rounded-lg border border-surface-300 bg-white px-4 py-3 text-sm text-text-900 transition-colors placeholder:text-text-400 focus:border-brand-green/50 focus:outline-none"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold uppercase text-text-500">Do you have a website today? *</label>
                <select
                  name="current-website"
                  required
                  defaultValue=""
                  className="rounded-lg border border-surface-300 bg-white px-4 py-3 text-sm text-text-900 transition-colors focus:border-brand-green/50 focus:outline-none"
                >
                  <option value="" disabled>
                    Pick one
                  </option>
                  {websiteStatus.map((status) => (
                    <option key={status} value={status}>
                      {status}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold uppercase text-text-500">Email (optional)</label>
                <input
                  type="email"
                  name="email"
                  placeholder="you@company.com"
                  className="rounded-lg border border-surface-300 bg-white px-4 py-3 text-sm text-text-900 transition-colors placeholder:text-text-400 focus:border-brand-green/50 focus:outline-none"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold uppercase text-text-500">Anything we should know? (optional)</label>
                <textarea
                  name="message"
                  rows={3}
                  placeholder="Busy season, what jobs you want more of, anything."
                  className="rounded-lg border border-surface-300 bg-white px-4 py-3 text-sm text-text-900 transition-colors placeholder:text-text-400 focus:border-brand-green/50 focus:outline-none"
                />
              </div>

              {submitError ? <p className="text-sm font-semibold text-red-600">{submitError}</p> : null}

              <button
                type="submit"
                disabled={isSubmitting}
                className="rounded-full bg-brand-green px-8 py-4 text-sm font-bold text-white transition-opacity hover:opacity-90 disabled:opacity-60"
              >
                {isSubmitting ? 'Sending...' : 'Build My Free Draft'}
              </button>
              <p className="text-xs leading-relaxed text-text-400">
                No spam, no call list, no obligation. You get one draft and one follow-up from a real person.
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
