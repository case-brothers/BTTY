import { useEffect, useRef, useState } from 'react'

const leadStory = [
  {
    title: 'A call gets missed',
    body: 'You are on the job. The customer may already be calling the next contractor.',
  },
  {
    title: 'Your website captures the estimate',
    body: 'A short, phone-friendly form turns interest into a real lead.',
  },
  {
    title: 'The system texts back right away',
    body: 'Missed callers get a fast reply before the opportunity cools.',
  },
  {
    title: 'Follow-up keeps the conversation moving',
    body: 'Automatic reminders help good leads avoid slipping away.',
  },
  {
    title: 'Every lead stays visible in one place',
    body: 'Calls, forms, replies, and next steps stay organized on one screen.',
  },
]

function LeadStory() {
  const storyRef = useRef<HTMLDivElement>(null)
  const [activeStep, setActiveStep] = useState(() =>
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
      ? leadStory.length - 1
      : -1,
  )

  useEffect(() => {
    const element = storyRef.current
    if (!element) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) return

    let timer: number | undefined
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return

        observer.disconnect()
        setActiveStep(0)
        let nextStep = 1
        timer = window.setInterval(() => {
          setActiveStep(nextStep)
          nextStep += 1
          if (nextStep >= leadStory.length && timer) window.clearInterval(timer)
        }, 520)
      },
      { threshold: 0.3 },
    )

    observer.observe(element)
    return () => {
      observer.disconnect()
      if (timer) window.clearInterval(timer)
    }
  }, [])

  const announcedStep = activeStep >= 0 ? leadStory[activeStep]?.title : ''

  return (
    <div ref={storyRef} className="mt-8 rounded-[1.5rem] border border-[#dfe8db] bg-[#f8fbf7] p-5 md:p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-green">From missed opportunity to clear next step</p>
      <h3 className="mt-2 text-xl font-black tracking-[-0.03em] text-text-900 md:text-2xl">
        A missed call does not have to become a lost job.
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-text-500">
        Here is how the website and follow-up system work together—without adding another task to your day.
      </p>

      <div className="sr-only" aria-live="polite" aria-atomic="true">
        {announcedStep}
      </div>

      <ol className="mt-5 grid gap-3" aria-label="How BTTY turns missed opportunities into organized leads">
        {leadStory.map(({ title, body }, index) => {
          const revealed = index <= activeStep
          return (
            <li
              key={title}
              className={`flex gap-3 rounded-2xl border px-4 py-3 transition-[opacity,transform,background-color,border-color] duration-500 motion-reduce:transform-none motion-reduce:transition-none ${
                revealed
                  ? 'translate-y-0 border-[#d6e7d2] bg-white opacity-100'
                  : 'translate-y-2 border-transparent bg-transparent opacity-35'
              }`}
            >
              <span
                className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-black transition-colors duration-500 motion-reduce:transition-none ${
                  revealed ? 'bg-brand-green text-white' : 'bg-[#e4eae2] text-text-400'
                }`}
                aria-hidden="true"
              >
                ✓
              </span>
              <div>
                <p className="text-sm font-bold text-text-900">{title}</p>
                <p className="mt-0.5 text-xs leading-relaxed text-text-500">{body}</p>
              </div>
            </li>
          )
        })}
      </ol>
    </div>
  )
}

const included = [
  {
    title: 'A website built for your trade',
    body: 'Your photos, your reviews, your service area. Built to make the phone ring, not to win design awards.',
  },
  {
    title: 'Missed-call text-back',
    body: 'On a roof or under a sink, your missed calls get a text back in seconds. The job stays yours.',
  },
  {
    title: 'Every lead texts your phone',
    body: 'Estimate requests do not sit in an inbox. They land on your phone the moment they come in.',
  },
  {
    title: 'Hosting, updates, and changes',
    body: 'New photos, new services, price changes. Text us what you need and it gets done.',
  },
  {
    title: 'Built to get found on Google',
    body: 'Set up the way Google expects, so when your town searches your trade, you are in the running.',
  },
  {
    title: 'No contract. Ever.',
    body: 'Month to month, and you own your domain. We keep your business by earning it.',
  },
]

export default function HomeV2() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-[#dfe8db] bg-[linear-gradient(180deg,#f7fbf5_0%,#ffffff_55%,#ffffff_100%)] pt-28">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-0 right-0 top-0 h-[420px] bg-[radial-gradient(circle_at_top,#dff3df_0%,rgba(223,243,223,0.55)_28%,rgba(255,255,255,0)_72%)]" />
          <div className="float-slow absolute right-[10%] top-24 h-60 w-60 rounded-full bg-brand-green/12 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 pb-18 pt-14 md:pb-24">
          <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-start md:gap-x-14 md:gap-y-0 lg:gap-x-16">
            <div className="fade-up md:col-start-1 md:row-start-1">
              <div className="mb-7 inline-flex items-center rounded-full border border-[#d9e8d5] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand-green shadow-[0_10px_30px_rgba(23,27,23,0.05)]">
                Better Today Than Yesterday
              </div>

              <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-[-0.05em] text-text-900 md:text-6xl lg:text-7xl">
                If Google can&apos;t find you,
                <br />
                <span className="text-brand-green">your customers can&apos;t either.</span>
              </h1>
            </div>

            <figure className="fade-up delay-2 md:sticky md:top-28 md:col-start-2 md:row-span-2 md:row-start-1">
              <img
                src="/mason-electric-website-phone.png"
                alt="Mason Electric mobile website with a branded service van, electrician, estimate button, electrical services, and local trust information"
                className="mx-auto w-full max-w-[620px] rounded-[2rem] shadow-[0_30px_90px_rgba(29,107,67,0.14)]"
              />
              <figcaption className="sr-only">A customer-facing website example for Mason Electric.</figcaption>
            </figure>

            <div className="md:col-start-1 md:row-start-2">
              <p className="max-w-2xl text-lg leading-relaxed text-text-500 md:mt-8 md:text-xl">
                {'Run the free 60-second scan and see how your business looks to the people searching for what you do. Then watch BTTY turn the findings into an improved website preview in about 35 seconds. If you want the complete system, it is $197 a month—and you see the preview before you pay a dime.'}
              </p>

              <LeadStory />

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="/scan"
                  className="rounded-full bg-brand-green px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-brand-green-light"
                >
                  Grade my business now
                </a>
                <a
                  href="#how"
                  className="rounded-full border border-[#d9e8d5] bg-white px-8 py-4 text-sm font-semibold text-text-700 transition-colors hover:border-brand-green hover:text-brand-green"
                >
                  See How It Works
                </a>
              </div>
              <p className="mt-4 text-sm text-text-400">Takes about a minute. No email required to see your score.</p>

              <div className="mt-12 flex flex-wrap items-center gap-4 text-sm text-text-500">
                <div className="rounded-full bg-[#edf7ed] px-4 py-2 font-semibold text-brand-green">No contract, ever</div>
                <div className="rounded-full bg-[#f4f7f3] px-4 py-2">See your site before you pay</div>
                <div className="rounded-full bg-[#f4f7f3] px-4 py-2">$197 a month, everything included</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="how" className="border-b border-[#e4ece1] bg-[#f7fbf5] py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-green">How It Works</p>
            <h2 className="mt-5 text-4xl font-black tracking-[-0.04em] text-text-900 md:text-5xl">
              Scan it. See it. Own it.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-text-500">
              Three steps from wondering why the phone is quiet to watching leads text you. You see everything before you pay anything.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-[2rem] border border-[#dfe8db] bg-white p-8 shadow-[0_30px_90px_rgba(29,107,67,0.08)]">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-brand-green text-lg font-black text-white">1</div>
              <h3 className="mb-3 text-2xl font-bold tracking-[-0.03em] text-text-900">Scan your business</h3>
              <p className="text-sm leading-relaxed text-text-500">
                Type your business name and get a free report in about a minute: your Google presence, website, and reviews, scored against your competition.
              </p>
              <a href="/scan" className="mt-5 inline-block text-sm font-semibold text-brand-green underline-offset-4 hover:underline">
                Grade my business now
              </a>
            </div>

            <div className="rounded-[2rem] border border-[#dfe8db] bg-white p-8 shadow-[0_30px_90px_rgba(29,107,67,0.08)]">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-brand-green text-lg font-black text-white">2</div>
              <h3 className="mb-3 text-2xl font-bold tracking-[-0.03em] text-text-900">Preview your new website free</h3>
              <p className="text-sm leading-relaxed text-text-500">
                After your grade, watch BTTY turn the findings into an improved website preview in about 35 seconds. No payment, no meeting, no pressure.
              </p>
              <a href="/scan" className="mt-5 inline-block text-sm font-semibold text-brand-green underline-offset-4 hover:underline">
                Grade my business now
              </a>
            </div>

            <div className="rounded-[2rem] border border-[#dfe8db] bg-white p-8 shadow-[0_30px_90px_rgba(29,107,67,0.08)]">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-brand-green text-lg font-black text-white">3</div>
              <h3 className="mb-3 text-2xl font-bold tracking-[-0.03em] text-text-900">Go live for $197 a month</h3>
              <p className="text-sm leading-relaxed text-text-500">
                Love it and we take it live: hosting, missed-call text-back, lead alerts, and unlimited small changes. No contract, cancel anytime.
              </p>
              <a href="/contractors" className="mt-5 inline-block text-sm font-semibold text-brand-green underline-offset-4 hover:underline">
                See everything included
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="border-b border-[#e4ece1] bg-white py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-14 grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-center md:gap-12">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-green">What $197 A Month Buys</p>
              <h2 className="mt-5 text-4xl font-black tracking-[-0.04em] text-text-900 md:text-5xl">
                <span className="block">The whole system.</span>
                <span className="block">One price.</span>
              </h2>
            </div>

            <div className="rounded-[1.8rem] border border-[#dfe8db] bg-[#f8fbf7] p-5 md:p-6" aria-label="Website and lead-system cost comparison">
              <div className="flex items-center gap-4 border-b border-[#dde6da] pb-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-text-300 text-text-400" aria-label="Not the BTTY option">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                    <circle cx="12" cy="12" r="8" />
                    <path d="m6.4 17.6 11.2-11.2" />
                  </svg>
                </span>
                <p className="text-sm text-text-600"><span className="font-bold text-text-900">Traditional agency</span> <span className="mx-1 text-text-300">·</span> typically <span className="font-bold">$2,000+/month</span></p>
              </div>

              <div className="flex items-center gap-4 border-b border-[#dde6da] py-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-text-300 text-text-400" aria-label="Not the BTTY option">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                    <circle cx="12" cy="12" r="8" />
                    <path d="m6.4 17.6 11.2-11.2" />
                  </svg>
                </span>
                <p className="text-sm text-text-600"><span className="font-bold text-text-900">Custom website build</span> <span className="mx-1 text-text-300">·</span> often <span className="font-bold">$6,000+</span></p>
              </div>

              <div className="flex items-start gap-4 pt-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-green text-sm font-black text-white" aria-label="BTTY option">✓</span>
                <div>
                  <p className="text-lg font-black text-text-900">BTTY.ai — $197/month</p>
                  <p className="mt-1 text-sm text-text-500">No commitment. No contract ever.</p>
                  <a
                    href="/scan"
                    className="mt-4 inline-flex rounded-full bg-brand-green px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-green-light"
                  >
                    Grade my business now
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {included.map(({ title, body }) => (
              <div key={title} className="rounded-[1.8rem] border border-[#e4ece1] bg-[#f9fcf8] p-8">
                <h3 className="text-xl font-bold leading-tight text-text-900">{title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-text-500">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[linear-gradient(135deg,#145233_0%,#1d6b43_45%,#5eb67d_100%)] py-24">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">Nothing to lose but the jobs you never hear about</p>
          <h2 className="mt-6 text-4xl font-black tracking-[-0.04em] text-white md:text-6xl">
            See your score.
            <br />
            Then see your new website. Free.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
            Run the free scan, and if you do not like what it says, we build your new website and show it to you before you pay a dime. $197 a month when you are ready. No contract, ever.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="/scan"
              className="rounded-full bg-white px-8 py-4 text-sm font-semibold text-brand-dark transition-colors hover:bg-surface-200"
            >
              Grade my business now
            </a>
            <a
              href="https://link.fastpaydirect.com/payment-link/6a620ab5a655fa0b802a5c31"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/20 px-8 py-4 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white/8"
            >
              Sign me up now
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
