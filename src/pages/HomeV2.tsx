import { Link } from 'react-router-dom'

const resultCards = [
  { value: '20+', label: 'franchise locations touched by systems we built' },
  { value: '24/7', label: 'lead capture, reporting, and follow-up coverage' },
  { value: '<48h', label: 'average time to first working delivery' },
]

const outcomes = [
  {
    title: 'More captured leads',
    body: 'Missed calls, forms, and inbound messages stop leaking because every inquiry gets an immediate next step.',
  },
  {
    title: 'More operational visibility',
    body: 'Owners get a clean view of pipeline, activity, and issues without hunting through five systems.',
  },
  {
    title: 'More time back',
    body: 'Inbox triage, updates, admin handoffs, and repeatable reporting move out of your calendar and into automation.',
  },
]

const services = [
  {
    title: 'AI Automation Audit',
    body: 'We identify the exact workflows costing you time, missed revenue, and extra headcount.',
  },
  {
    title: 'System Build and Installation',
    body: 'We install the automation, dashboards, and operating logic inside the business.',
  },
  {
    title: 'Ongoing Optimization',
    body: 'We improve prompts, flows, and reporting after launch so the system keeps getting better.',
  },
]

const proof = [
  {
    stat: '20+',
    label: 'locations running inside the Command Center model',
  },
  {
    stat: '3',
    label: 'core systems live across operations, marketing, and analytics',
  },
  {
    stat: '1',
    label: 'shared operating view for owners who do not have time to babysit tools',
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
          <div className="mb-8 inline-flex items-center rounded-full border border-[#d9e8d5] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand-green shadow-[0_10px_30px_rgba(23,27,23,0.05)]">
            Better Today Than Yesterday
          </div>

          <div className="grid gap-14 md:grid-cols-[1.05fr_0.95fr] md:items-center">
            <div className="fade-up">
              <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-[-0.05em] text-text-900 md:text-7xl">
                Run your business
                <br />
                with the
                <span className="ml-3 text-brand-green">systems</span>
                <br />
                it should already have.
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-text-500 md:text-xl">
                We build AI automation, dashboards, and operating workflows for owners who are tired of running everything manually.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="https://calendly.com/tcase-wlej/revenue-system-install"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-brand-green px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-brand-green-light"
                >
                  Book a Free Demo
                </a>
                <a
                  href="#video"
                  className="rounded-full border border-[#d9e8d5] bg-white px-8 py-4 text-sm font-semibold text-text-700 transition-colors hover:border-brand-green hover:text-brand-green"
                >
                  Watch How It Works
                </a>
              </div>

              <div className="mt-12 flex flex-wrap items-center gap-4 text-sm text-text-500">
                <div className="rounded-full bg-[#edf7ed] px-4 py-2 font-semibold text-brand-green">Built by operators</div>
                <div className="rounded-full bg-[#f4f7f3] px-4 py-2">Franchise and service-business focused</div>
                <div className="rounded-full bg-[#f4f7f3] px-4 py-2">Systems installed fast</div>
              </div>
            </div>

            <div className="fade-up delay-2">
              <div className="rounded-[2rem] border border-[#dfe8db] bg-white p-4 shadow-[0_30px_90px_rgba(29,107,67,0.10)]">
                <div className="rounded-[1.5rem] bg-[linear-gradient(135deg,#1d6b43_0%,#5eb67d_100%)] p-5 text-white">
                  <div className="mb-4 flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">AI Ops Snapshot</p>
                      <p className="mt-1 text-2xl font-bold">See what needs attention before it becomes a fire.</p>
                    </div>
                    <div className="rounded-full bg-white/12 px-3 py-1 text-xs font-semibold">BTTY</div>
                  </div>

                  <div className="overflow-hidden rounded-[1.25rem] border border-white/15 bg-white/6">
                    <img src="/dashboard-portal.png" alt="BTTY command center dashboard" className="w-full" />
                  </div>
                </div>

                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  {resultCards.map(({ value, label }) => (
                    <div key={label} className="rounded-[1.3rem] border border-[#e4ece1] bg-[#f7fbf5] p-4">
                      <div className="text-3xl font-black tracking-[-0.04em] text-text-900">{value}</div>
                      <p className="mt-2 text-xs leading-relaxed text-text-500">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#e4ece1] bg-white py-16">
        <div className="mx-auto max-w-6xl px-6">
          <p className="mb-8 text-center text-xs font-semibold uppercase tracking-[0.18em] text-brand-green">
            Grow with systems like these owners
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            {proof.map(({ stat, label }) => (
              <div key={label} className="rounded-[1.6rem] border border-[#e4ece1] bg-[#f9fcf8] px-6 py-7 text-center">
                <div className="text-4xl font-black tracking-[-0.04em] text-text-900">{stat}</div>
                <p className="mt-3 text-sm leading-relaxed text-text-500">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="video" className="border-b border-[#e4ece1] bg-[#f7fbf5] py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-green">See what is possible</p>
            <h2 className="mt-5 text-4xl font-black tracking-[-0.04em] text-text-900 md:text-5xl">
              One message. Two delivery formats.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-text-500">
              Start with the original founder video, then see how the same message can be turned into an AI avatar asset you can reuse across the business.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="overflow-hidden rounded-[2rem] border border-[#dfe8db] bg-white p-4 shadow-[0_30px_90px_rgba(29,107,67,0.08)]">
              <div className="mb-4 flex items-center justify-between gap-4 px-2">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-green">Original</p>
                  <h3 className="mt-2 text-2xl font-bold tracking-[-0.03em] text-text-900">Recorded by Tony</h3>
                </div>
                <div className="rounded-full bg-[#edf7ed] px-3 py-1 text-xs font-semibold text-brand-green">Human-led</div>
              </div>
              <div className="relative w-full overflow-hidden rounded-[1.5rem]" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src="https://www.youtube.com/embed/tjU-c1d1Eb0?rel=0&modestbranding=1"
                  title="Original BTTY founder video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <p className="px-2 pb-2 pt-4 text-sm leading-relaxed text-text-500">
                Your original message, tone, and delivery. This is the source material that makes the AI version feel real instead of generic.
              </p>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-[#dfe8db] bg-white p-4 shadow-[0_30px_90px_rgba(29,107,67,0.08)]">
              <div className="mb-4 flex items-center justify-between gap-4 px-2">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-green">AI Avatar</p>
                  <h3 className="mt-2 text-2xl font-bold tracking-[-0.03em] text-text-900">Scaled for reuse</h3>
                </div>
                <div className="rounded-full bg-[#edf7ed] px-3 py-1 text-xs font-semibold text-brand-green">Repurposed</div>
              </div>
              <div className="relative w-full overflow-hidden rounded-[1.5rem]" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src="https://www.youtube.com/embed/AiUYOkTqeNw?rel=0&modestbranding=1"
                  title="BTTY AI avatar video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <p className="px-2 pb-2 pt-4 text-sm leading-relaxed text-text-500">
                The same core message turned into an AI-delivered asset you can reuse for sales, follow-up, onboarding, and content without re-recording every time.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#e4ece1] bg-white py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-14 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-green">What you get</p>
            <h2 className="mt-5 text-4xl font-black tracking-[-0.04em] text-text-900 md:text-5xl">
              More sales, more control, more time back.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {outcomes.map(({ title, body }) => (
              <div key={title} className="rounded-[1.8rem] border border-[#e4ece1] bg-[#f9fcf8] p-8">
                <h3 className="text-2xl font-bold leading-tight text-text-900">{title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-text-500">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="border-b border-[#e4ece1] bg-white py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-green">How we work</p>
              <h2 className="mt-5 text-4xl font-black tracking-[-0.04em] text-text-900 md:text-5xl">
                Three steps to a better operating system.
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-relaxed text-text-500">
              We keep this simple: identify the opportunity, install the system, then improve it based on what the business actually needs.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {services.map(({ title, body }, index) => (
              <div key={title} className="rounded-[1.8rem] border border-[#e4ece1] bg-[#f9fcf8] p-8">
                <div className="text-sm font-bold text-brand-green">0{index + 1}</div>
                <h3 className="mt-4 text-2xl font-bold leading-tight text-text-900">{title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-text-500">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[#e4ece1] bg-[linear-gradient(180deg,#ffffff_0%,#f7fbf5_100%)] py-24">
        <div className="mx-auto grid max-w-6xl gap-14 px-6 md:grid-cols-[0.95fr_1.05fr] md:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-green">Proof of work</p>
            <h2 className="mt-5 text-4xl font-black tracking-[-0.04em] text-text-900 md:text-5xl">
              Real systems built for real operators.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-text-500">
              We built the Roly Poly Command Center to manage multi-location operations, and we built supporting marketing and analytics systems around it. That is the standard we bring into client work.
            </p>
            <Link to="/work" className="mt-8 inline-block text-sm font-semibold text-brand-green transition-colors hover:text-brand-green-light">
              See the work
            </Link>
          </div>

          <div className="grid gap-4">
            <img
              src="/dashboard-screenshot.png"
              alt="Operations dashboard screenshot"
              className="rounded-[1.8rem] border border-[#dfe8db] bg-white shadow-[0_24px_80px_rgba(29,107,67,0.10)]"
            />
            <img
              src="/aglaze-dashboard-1.png"
              alt="Marketing website screenshot"
              className="rounded-[1.8rem] border border-[#dfe8db] bg-white shadow-[0_24px_80px_rgba(29,107,67,0.10)]"
            />
          </div>
        </div>
      </section>

      <section className="bg-[linear-gradient(135deg,#145233_0%,#1d6b43_45%,#5eb67d_100%)] py-24">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">Ready to stop running everything manually</p>
          <h2 className="mt-6 text-4xl font-black tracking-[-0.04em] text-white md:text-6xl">
            Let&apos;s design the system first.
            <br />
            Then we can package the offer.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
            We can tighten the homepage more, polish the supporting pages, and then turn it into a sharper client-facing offer.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://calendly.com/tcase-wlej/revenue-system-install"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white px-8 py-4 text-sm font-semibold text-brand-dark transition-colors hover:bg-surface-200"
            >
              Book a Free Demo
            </a>
            <Link
              to="/contact"
              className="rounded-full border border-white/20 px-8 py-4 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white/8"
            >
              Talk to Us
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
