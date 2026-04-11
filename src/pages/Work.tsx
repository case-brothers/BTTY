const projects = [
  {
    name: 'Roly Poly Command Center',
    category: 'Franchise Ops Platform',
    client: 'Roly Poly Indiana',
    description:
      'A full-stack franchise operations dashboard serving 3 active locations with plans to scale to 20+. Real-time catering order management, Stripe invoicing, CRM with automated re-engagement emails, an AI operations coach, and lobby TV displays for each location.',
    outcomes: [
      'Eliminated 3+ hours/day of manual order tracking',
      'Automated catering CRM with 30/60/90-day re-engagement',
      'Live lobby displays at all locations via public URLs',
      'AI daily digest delivered every morning — no human required',
    ],
    tags: ['React', 'TypeScript', 'Express', 'Firebase', 'Stripe', 'Google Cloud Run', 'Gemini AI'],
  },
  {
    name: 'Double Tap by AGlaze',
    category: 'Marketing Website + Content Engine',
    client: 'AGlaze USA / Michael Dransfield',
    description:
      'A conversion-focused marketing site for Double Tap — an aerospace-grade firearm protection product with Boeing and Airbus heritage. Full SEO content strategy, tactical dark design, Ash & Iron podcast integration, and product pages with the full aerospace origin story.',
    outcomes: [
      'Full marketing site live within 2 weeks of project start',
      '5 publish-ready SEO blog posts targeting high-intent keywords',
      'Ash & Iron podcast section driving brand awareness',
      'Aerospace trust signals for the firearm protection market',
    ],
    tags: ['React', 'Tailwind', 'Netlify', 'SEO', 'Content Strategy'],
  },
  {
    name: 'AGlaze Analytics Dashboard',
    category: 'Internal Operations Dashboard',
    client: 'AGlaze USA',
    description:
      'An internal analytics and operations dashboard for AGlaze USA — giving Michael Dransfield visibility into product performance, distribution data, and sales metrics across the US market. Built on the same cloud infrastructure as the Command Center.',
    outcomes: [
      'Centralized product and distribution analytics',
      'Deployed to Google Cloud Run with zero-downtime updates',
      'Shared infrastructure keeps operational costs minimal',
    ],
    tags: ['React', 'TypeScript', 'Google Cloud Run', 'Firebase'],
  },
]

export default function Work() {
  return (
    <>
      {/* ── Header ── */}
      <section className="pt-32 pb-20 border-b border-surface-300 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-semibold tracking-wide uppercase text-brand-green mb-6">
            Proof of Work
          </p>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight text-text-900 leading-[1.05] mb-8">
            What We've<br />
            <span className="text-brand-green">Built.</span>
          </h1>
          <p className="text-text-500 text-lg leading-relaxed max-w-2xl">
            We don't do case studies with vanity metrics. Here's what we built, for whom, and what actually changed.
          </p>
        </div>
      </section>

      {/* ── Projects ── */}
      <section className="py-24 bg-surface-100">
        <div className="max-w-6xl mx-auto px-6 flex flex-col gap-6">
          {projects.map(({ name, category, client, description, outcomes, tags }) => (
            <div key={name} className="bg-white border border-surface-300 rounded-xl p-10 md:p-14 border-l-4 border-l-brand-green">
              <p className="text-xs font-semibold uppercase text-brand-green mb-2">
                {category}
              </p>
              <p className="text-text-400 text-xs mb-6 tracking-wider uppercase">
                Client: {client}
              </p>

              <h2 className="text-3xl md:text-4xl font-black tracking-tight text-text-900 mb-6">
                {name}
              </h2>

              <p className="text-text-500 leading-relaxed mb-8 max-w-3xl">
                {description}
              </p>

              <div className="mb-8">
                <p className="text-xs font-semibold uppercase text-text-400 mb-4">
                  Outcomes
                </p>
                <ul className="flex flex-col gap-2">
                  {outcomes.map(o => (
                    <li key={o} className="flex items-start gap-3 text-sm text-text-500">
                      <span className="text-brand-green mt-0.5 shrink-0">→</span>
                      {o}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2">
                {tags.map(t => (
                  <span key={t} className="text-xs font-medium px-3 py-1 border border-surface-300 rounded-full text-text-400">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 border-t border-surface-300 bg-brand-dark">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-6">
            Your Problem<br />
            <span className="text-brand-green-light">Could Be Next.</span>
          </h2>
          <p className="text-text-400 leading-relaxed mb-10 max-w-xl mx-auto">
            We're selective about what we take on. If it's the kind of problem we can solve, we'll tell you straight — and show you how.
          </p>
          <a
            href="https://calendly.com/tcase-wlej/revenue-system-install"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold bg-white text-brand-dark px-10 py-4 rounded-lg hover:bg-surface-200 transition-colors inline-block"
          >
            Book a 15-Minute Call
          </a>
        </div>
      </section>
    </>
  )
}
