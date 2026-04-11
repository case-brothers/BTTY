const projects = [
  {
    name: 'Roly Poly Command Center',
    category: 'Franchise operations system',
    description:
      'A custom command center built to help operators manage orders, visibility, follow-up, and daily decision-making across multiple locations.',
    outcomes: [
      'Clearer operating visibility across locations',
      'Less manual admin and order tracking',
      'Faster follow-up and better internal coordination',
    ],
    image: '/dashboard-screenshot.png',
  },
  {
    name: 'Double Tap by AGlaze',
    category: 'Marketing and demand capture',
    description:
      'A modern marketing site designed to communicate a premium product story, capture attention, and create a better path from traffic to inquiry.',
    outcomes: [
      'Sharper positioning and presentation',
      'Stronger digital credibility',
      'A better front door for the brand',
    ],
    image: '/aglaze-dashboard-1.png',
  },
  {
    name: 'AGlaze Analytics Dashboard',
    category: 'Internal visibility tool',
    description:
      'An internal dashboard for seeing product performance, sales activity, and business signals in one place so decisions can happen faster.',
    outcomes: [
      'Cleaner reporting for leadership',
      'One place to review business performance',
      'Less guesswork and better visibility',
    ],
    image: '/dashboard-portal.png',
  },
]

export default function WorkV2() {
  return (
    <>
      <section className="border-b border-[#e4ece1] bg-[linear-gradient(180deg,#f7fbf5_0%,#ffffff_78%)] pb-18 pt-28">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-[1.05fr_0.95fr] md:items-end">
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-brand-green">Work</p>
            <h1 className="max-w-3xl text-4xl font-black leading-[1] tracking-[-0.05em] text-text-900 md:text-6xl">
              Real systems.
              <br />
              Real proof.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-text-500 md:text-lg">
              We are not guessing at what businesses need. These are systems we have already built for operations, marketing, and visibility under real-world pressure.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 md:grid-cols-1">
            <div className="rounded-[1.6rem] border border-[#e4ece1] bg-white p-5 shadow-[0_18px_50px_rgba(29,107,67,0.06)]">
              <div className="text-3xl font-black tracking-[-0.04em] text-text-900">3</div>
              <p className="mt-2 text-sm leading-relaxed text-text-500">core systems shipped across operations, marketing, and reporting</p>
            </div>
            <div className="rounded-[1.6rem] border border-[#e4ece1] bg-white p-5 shadow-[0_18px_50px_rgba(29,107,67,0.06)]">
              <div className="text-3xl font-black tracking-[-0.04em] text-text-900">20+</div>
              <p className="mt-2 text-sm leading-relaxed text-text-500">locations influenced by the operating systems behind this work</p>
            </div>
            <div className="rounded-[1.6rem] border border-[#e4ece1] bg-white p-5 shadow-[0_18px_50px_rgba(29,107,67,0.06)]">
              <div className="text-3xl font-black tracking-[-0.04em] text-text-900">Fast</div>
              <p className="mt-2 text-sm leading-relaxed text-text-500">delivery built for owners who need momentum, not months of theory</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6">
          {projects.map(({ name, category, description, outcomes, image }) => (
            <div key={name} className="grid gap-8 rounded-[2rem] border border-[#e4ece1] bg-[#fbfdfb] p-8 shadow-[0_20px_70px_rgba(29,107,67,0.05)] md:grid-cols-[1fr_0.95fr] md:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-green">{category}</p>
                <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] text-text-900 md:text-4xl">{name}</h2>
                <p className="mt-5 max-w-2xl text-sm leading-relaxed text-text-500">{description}</p>

                <div className="mt-8">
                  <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-text-400">Outcomes</p>
                  <div className="flex flex-col gap-3">
                    {outcomes.map((outcome) => (
                      <div key={outcome} className="flex items-start gap-3 text-sm text-text-500">
                        <span className="mt-0.5 text-brand-green">+</span>
                        <span>{outcome}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="overflow-hidden rounded-[1.75rem] border border-[#dfe8db] bg-white shadow-[0_24px_80px_rgba(29,107,67,0.08)]">
                <img src={image} alt={name} className="w-full" />
              </div>
            </div>
          ))}
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
