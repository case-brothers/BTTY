const values = [
  {
    title: 'Ship, Then Improve',
    body: 'Perfect is the enemy of shipped. We get things live, then we make them better — every single day.',
  },
  {
    title: 'Give First',
    body: "We lead with value, not proposals. If we can help you, you'll know it before you ever pay us a dollar.",
  },
  {
    title: 'Operator Mindset',
    body: "We've run restaurants, managed franchises, and built enterprise software. We know what real operational pressure feels like — because we live it every day.",
  },
  {
    title: 'No Theater',
    body: 'No decks full of buzzwords. No 12-week discovery phases. We talk straight, build fast, and stand behind our work.',
  },
]

const team = [
  {
    name: 'Tony Case',
    role: 'Founder & Operator',
    bio: `Tony runs three Roly Poly franchise locations, a holding company, and this agency — while working a full-time job. He built the AI-powered Command Center that automates catering operations across 20+ locations because the tools he needed didn't exist. 15+ years of business operations and automotive finance experience. BTTY exists because Tony kept solving his own problems and realized every operator he knew had the exact same ones.`,
    tags: ['Business Operations', 'Product Strategy', 'AI Systems', 'Franchise Ops'],
  },
  {
    name: 'Jared Drake',
    role: 'Senior Engineer',
    bio: `15 years of software engineering experience, IU Computer Science. Jared has built systems at enterprise scale and knows the difference between code that looks good in a demo and code that works at 2am on a Tuesday. He's the reason our systems don't break — and the reason they scale.`,
    tags: ['Full-Stack', 'System Architecture', 'TypeScript', 'Cloud Infrastructure'],
  },
]

export default function About() {
  return (
    <>
      {/* ── Header ── */}
      <section className="pt-32 pb-20 border-b border-surface-300 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-semibold tracking-wide uppercase text-brand-green mb-6">
            Who We Are
          </p>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight text-text-900 leading-[1.05] mb-8">
            Built Under<br />
            <span className="text-brand-green">Pressure</span>,<br />
            for Operators.
          </h1>
          <p className="text-text-500 text-lg leading-relaxed max-w-2xl">
            We didn't start as an agency. We started as operators who were tired of the tools available to us — so we built our own. Now we install those same systems for other businesses.
          </p>
        </div>
      </section>

      {/* ── Origin Story ── */}
      <section className="py-24 bg-surface-100 border-b border-surface-300">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-xs font-semibold tracking-wide uppercase text-brand-green mb-6">
                The Origin
              </p>
              <h2 className="text-3xl md:text-4xl font-black tracking-tight text-text-900 mb-6">
                Necessity, Not Innovation.
              </h2>
              <p className="text-text-500 leading-relaxed mb-6">
                We both run multiple businesses while working full-time jobs. Our availability is extremely limited — and there's zero room for waste. That constraint forced us to build systems that most operators only dream about.
              </p>
              <p className="text-text-500 leading-relaxed mb-6">
                Tony was duct-taping together spreadsheets, email threads, and disconnected POS data just to answer basic questions about his franchise locations. The software he needed didn't exist. So he built it — then kept building. AI-powered order processing. Automated CRM sequences. Real-time dashboards. Daily diagnostic reports. Systems that run 24/7 so he doesn't have to.
              </p>
              <p className="text-text-500 leading-relaxed mb-6">
                Jared brought the engineering depth to make these systems production-grade. Together, we built an operations stack that gives us a bird's-eye view of everything — without being on-site, without constant meetings, without manual check-ins.
              </p>
              <p className="text-text-900 leading-relaxed font-semibold">
                BTTY is what happens when operators who are stretched thin refuse to accept the status quo and build their way out of it.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              {[
                { year: '2024', event: 'Roly Poly Command Center launched — automated catering ops for 3 locations' },
                { year: '2024', event: 'AGlaze USA partnership formed, Double Tap product line launched' },
                { year: '2025', event: 'Command Center expanded to 20+ franchise locations with AI coaching' },
                { year: '2026', event: 'BTTY formalized as the AI automation consulting arm of Case Brothers Holdings' },
              ].map(({ year, event }) => (
                <div key={event} className="bg-white border border-surface-300 rounded-xl p-6 flex gap-6">
                  <div className="text-sm font-bold text-brand-green whitespace-nowrap pt-0.5">{year}</div>
                  <div className="text-text-500 text-sm leading-relaxed">{event}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section className="py-24 border-b border-surface-300 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-semibold tracking-wide uppercase text-brand-green mb-6">
            The Team
          </p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-text-900 mb-16">
            Two People.<br />No Filler.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {team.map(({ name, role, bio, tags }) => (
              <div key={name} className="bg-surface-100 border border-surface-300 rounded-xl p-10">
                <div className="w-14 h-14 bg-brand-green-pale border border-brand-green/20 rounded-lg flex items-center justify-center mb-6">
                  <span className="text-xl font-bold text-brand-green">{name.split(' ').map(n => n[0]).join('')}</span>
                </div>
                <h3 className="text-2xl font-bold text-text-900 mb-1">{name}</h3>
                <div className="text-xs font-semibold uppercase text-brand-green mb-6">{role}</div>
                <p className="text-text-500 text-sm leading-relaxed mb-6">{bio}</p>
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
        </div>
      </section>

      {/* ── Values ── */}
      <section className="py-24 bg-surface-100">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-semibold tracking-wide uppercase text-brand-green mb-6">
            How We Operate
          </p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-text-900 mb-16">
            The Standard
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map(({ title, body }) => (
              <div key={title} className="bg-white border border-surface-300 rounded-xl p-10 group hover:border-brand-green/30 hover:shadow-sm transition-all">
                <h3 className="text-xl font-bold text-text-900 mb-4 group-hover:text-brand-green transition-colors">
                  {title}
                </h3>
                <p className="text-text-500 text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 border-t border-surface-300 bg-brand-dark">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-6">
            Ready to Automate?
          </h2>
          <p className="text-text-400 leading-relaxed text-lg mb-10">
            Tell us what's eating your time and we'll tell you if we can fix it. 15 minutes, no pitch.
          </p>
          <a
            href="https://calendly.com/tcase-wlej/revenue-system-install"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold bg-white text-brand-dark px-10 py-4 rounded-lg hover:bg-surface-200 transition-colors inline-block"
          >
            Book a Call
          </a>
        </div>
      </section>
    </>
  )
}
