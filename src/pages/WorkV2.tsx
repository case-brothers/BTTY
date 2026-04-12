const proofStats = [
  {
    value: '7',
    label: 'real product screens showing the operating system working across sales, scheduling, invoicing, and AI assistance',
  },
  {
    value: '330',
    label: 'catering accounts managed inside the system with revenue visibility attached',
  },
  {
    value: '$61K',
    label: 'year-to-date sales shown in the live reporting feed with growth across all stores',
  },
]

const spotlightScreens = [
  {
    title: 'Dashboard Portal',
    category: 'Command center',
    description:
      'A live owner view with KPIs, store awareness, and Coach Roly guidance so operators can see what matters without jumping between tools.',
    image: '/screenshots/dashboard-portal.png',
  },
  {
    title: 'Coach Roly',
    category: 'AI assistant',
    description:
      'An embedded AI operator assistant that surfaces what matters today, answers questions, and creates a stronger daily rhythm around the system.',
    image: '/screenshots/coach-roly.png',
  },
]

const galleryScreens = [
  {
    title: 'Catering Board',
    caption: 'Calendar visibility with active customer jobs and planning context.',
    image: '/screenshots/catering-board.png',
  },
  {
    title: 'Sales Feed',
    caption: 'Year-to-date sales visibility and location-level performance movement.',
    image: '/screenshots/sales-analytics.png',
  },
  {
    title: 'Catering Accounts',
    caption: 'Account tracking tied to revenue so follow-up stays connected to money.',
    image: '/screenshots/catering-accounts.png',
  },
  {
    title: 'Invoice Builder',
    caption: 'Structured product selection and invoice generation without manual re-entry.',
    image: '/screenshots/invoice-builder.png',
  },
  {
    title: 'Marketing Scheduler',
    caption: 'A multi-platform post planner that keeps publishing organized and visible.',
    image: '/screenshots/marketing-scheduler.png',
  },
]

export default function WorkV2() {
  return (
    <>
      <section className="border-b border-[#e4ece1] bg-[linear-gradient(180deg,#f7fbf5_0%,#ffffff_78%)] pb-18 pt-28">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-[1.05fr_0.95fr] md:items-end">
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-brand-green">Work</p>
            <h1 className="max-w-4xl text-4xl font-black leading-[1] tracking-[-0.05em] text-text-900 md:text-6xl">
              Real product screens.
              <br />
              Real operating proof.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-text-500 md:text-lg">
              These are not placeholder mockups. They are actual screenshots from the systems we built to manage locations, sales visibility, catering workflows, invoicing, publishing, and AI-guided operations.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 md:grid-cols-1">
            {proofStats.map(({ value, label }) => (
              <div key={label} className="rounded-[1.6rem] border border-[#e4ece1] bg-white p-5 shadow-[0_18px_50px_rgba(29,107,67,0.06)]">
                <div className="text-3xl font-black tracking-[-0.04em] text-text-900">{value}</div>
                <p className="mt-2 text-sm leading-relaxed text-text-500">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6">
          {spotlightScreens.map(({ title, category, description, image }) => (
            <div key={title} className="grid gap-8 rounded-[2rem] border border-[#e4ece1] bg-[#fbfdfb] p-8 shadow-[0_20px_70px_rgba(29,107,67,0.05)] md:grid-cols-[0.9fr_1.1fr] md:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-green">{category}</p>
                <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] text-text-900 md:text-4xl">{title}</h2>
                <p className="mt-5 max-w-2xl text-sm leading-relaxed text-text-500">{description}</p>
              </div>

              <div className="overflow-hidden rounded-[1.75rem] border border-[#dfe8db] bg-white shadow-[0_24px_80px_rgba(29,107,67,0.08)]">
                <img src={image} alt={title} className="w-full" />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-b border-[#e4ece1] bg-[linear-gradient(180deg,#ffffff_0%,#f7fbf5_100%)] py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-green">Inside the system</p>
            <h2 className="mt-5 text-4xl font-black tracking-[-0.04em] text-text-900 md:text-5xl">
              The operating stack, screen by screen.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-text-500">
              Each screen below shows a different part of the infrastructure: planning, reporting, account management, invoice creation, publishing, and AI-supported execution.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {galleryScreens.map(({ title, caption, image }) => (
              <div key={title} className="overflow-hidden rounded-[1.8rem] border border-[#e4ece1] bg-white shadow-[0_20px_70px_rgba(29,107,67,0.06)]">
                <img src={image} alt={title} className="w-full" />
                <div className="p-5">
                  <h3 className="text-xl font-bold tracking-[-0.03em] text-text-900">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-text-500">{caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[linear-gradient(135deg,#145233_0%,#1d6b43_45%,#5eb67d_100%)] py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">Your business could be next</p>
          <h2 className="mt-6 text-4xl font-black tracking-[-0.04em] text-white md:text-6xl">
            If the problem is real, we want to help solve it.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
            We are most useful when the business is growing, the systems are messy, and the owner knows the next level needs better infrastructure.
          </p>
          <a
            href="https://calendly.com/tcase-wlej/revenue-system-install"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-block rounded-full bg-white px-8 py-4 text-sm font-semibold text-brand-dark transition-colors hover:bg-surface-200"
          >
            Book a Call
          </a>
        </div>
      </section>
    </>
  )
}
