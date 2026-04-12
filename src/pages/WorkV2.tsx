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
]

const coachRolyReview = {
  category: 'AI assistant',
  title: 'Coach Roly gives the Command Center a rave review.',
  review:
    'This is the kind of screen that makes the whole system feel alive. Instead of logging in and hunting for problems, the owner gets context, priorities, and guidance in one place. That is what the Command Center is supposed to do.',
  bullets: [
    'Surfaces what matters today instead of making the owner hunt for it',
    'Keeps the operating system conversational, fast, and easier to trust',
    'Turns the Command Center into something people actually want to check',
  ],
}

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

          <div className="grid gap-8 rounded-[2rem] border border-[#d8e8db] bg-[linear-gradient(135deg,#f7fbf5_0%,#edf7ed_100%)] p-8 shadow-[0_24px_80px_rgba(29,107,67,0.08)] md:grid-cols-[0.95fr_1.05fr] md:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-green">{coachRolyReview.category}</p>
              <h2 className="mt-4 max-w-3xl text-3xl font-black tracking-[-0.04em] text-text-900 md:text-4xl">
                {coachRolyReview.title}
              </h2>
              <div className="mt-6 rounded-[1.5rem] border border-[#dfe8db] bg-white px-6 py-6 shadow-[0_12px_35px_rgba(29,107,67,0.06)]">
                <p className="text-lg leading-relaxed text-text-700 md:text-xl">&ldquo;{coachRolyReview.review}&rdquo;</p>
              </div>

              <div className="mt-8 flex flex-col gap-3">
                {coachRolyReview.bullets.map((bullet) => (
                  <div key={bullet} className="flex items-start gap-3 text-sm text-text-600">
                    <span className="mt-0.5 text-brand-green">+</span>
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-[#dfe8db] bg-white p-5 shadow-[0_24px_80px_rgba(29,107,67,0.08)]">
              <div className="rounded-[1.5rem] border border-[#e4ece1] bg-[linear-gradient(180deg,#f9fcf8_0%,#ffffff_100%)] p-5">
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-green text-sm font-black text-white">CR</div>
                    <div>
                      <p className="text-sm font-bold text-text-900">Coach Roly</p>
                      <p className="text-xs text-text-500">Inside the Command Center</p>
                    </div>
                  </div>
                  <div className="rounded-full bg-[#edf7ed] px-3 py-1 text-xs font-semibold text-brand-green">AI Assistant</div>
                </div>

                <div className="space-y-4">
                  <div className="rounded-[1.3rem] rounded-bl-md bg-[#f2f7f1] px-4 py-3 text-sm leading-relaxed text-text-700">
                    Give me the quick version. Why does this Command Center matter?
                  </div>
                  <div className="ml-auto max-w-[92%] rounded-[1.3rem] rounded-br-md bg-brand-dark px-4 py-3 text-sm leading-relaxed text-white">
                    Because it turns scattered store activity into one operating view. Instead of checking five tools and guessing, the owner sees priorities, momentum, and next actions in one place.
                  </div>
                  <div className="rounded-[1.3rem] rounded-bl-md bg-[#f2f7f1] px-4 py-3 text-sm leading-relaxed text-text-700">
                    And why is that useful day to day?
                  </div>
                  <div className="ml-auto max-w-[92%] rounded-[1.3rem] rounded-br-md bg-brand-dark px-4 py-3 text-sm leading-relaxed text-white">
                    It saves time, reduces missed follow-up, and gives the team a cleaner rhythm. The Command Center makes the business easier to run because the important things stop hiding.
                  </div>
                </div>

                <div className="mt-5 rounded-[1.2rem] border border-[#e4ece1] bg-[#f8fbf7] px-4 py-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-green">Coach Roly summary</p>
                  <p className="mt-2 text-sm leading-relaxed text-text-500">
                    The Command Center gives owners context, priorities, and visibility in one place so they can act faster and spend less time hunting through disconnected tools.
                  </p>
                </div>
              </div>
            </div>
          </div>
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
