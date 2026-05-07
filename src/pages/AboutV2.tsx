const values = [
  {
    title: 'We build with operators in mind',
    body: 'Everything we make has to help a business run better in the real world, not just look good in a presentation.',
  },
  {
    title: 'We pressure-test every system',
    body: 'Ideas have to survive the real world: missed calls, staffing gaps, messy data, busy lunch rushes, and owners who do not have time for fragile tools.',
  },
  {
    title: 'We want to help the right people grow',
    body: 'We are looking for like-minded owners who know they are ready for the next step and want better systems behind the business.',
  },
]

const team = [
  {
    name: 'Tony Case',
    role: 'Founder / Operator',
    bio: 'Tony built BTTY from the pressure of running real businesses: growing catering, keeping teams aligned, answering customers faster, protecting margin, and turning daily chaos into systems an owner can trust.',
    tags: ['Operations', 'AI Systems', 'Revenue Leaks', 'Business Visibility'],
  },
]

export default function AboutV2() {
  return (
    <>
      <section className="border-b border-[#e4ece1] bg-[linear-gradient(180deg,#f7fbf5_0%,#ffffff_75%)] pb-20 pt-32">
        <div className="mx-auto max-w-6xl px-6">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.18em] text-brand-green">About BTTY</p>
          <h1 className="max-w-4xl text-5xl font-black leading-[0.98] tracking-[-0.05em] text-text-900 md:text-7xl">
            We started with real operator problems.
            <br />
            We turned them into practical systems.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-text-500">
            BTTY exists because owners need cleaner visibility, faster follow-up, and systems that keep working when the day gets chaotic.
          </p>
        </div>
      </section>

      <section className="border-b border-[#e4ece1] bg-white py-24">
        <div className="mx-auto grid max-w-6xl gap-14 px-6 md:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-green">Built in the business</p>
            <h2 className="mt-5 text-4xl font-black tracking-[-0.04em] text-text-900 md:text-5xl">
              Roly Poly Indiana was the proving ground.
            </h2>
            <div className="mt-8 overflow-hidden rounded-[1.8rem] border border-[#dfe8db] bg-[#f9fcf8] shadow-[0_24px_80px_rgba(29,107,67,0.08)]">
              <img src="/dashboard-portal.png" alt="BTTY systems dashboard built from real operations" className="w-full" />
            </div>
          </div>

          <div className="space-y-6 text-base leading-relaxed text-text-500">
            <p>
              BTTY started in the middle of real restaurant operations, not in a boardroom. The systems came from trying to run stores, answer calls, grow catering, keep teams aligned, and stop small misses from turning into expensive problems.
            </p>
            <p>
              Tony saw the same pattern over and over: owners were not short on effort. They were short on clean systems, clear visibility, and follow-up that happened even when the day got chaotic.
            </p>
            <p>
              That is where BTTY comes from: practical AI, dashboards, and workflows built for operators who want fewer leaks, better decisions, and a business that gets better every day.
            </p>
            <p className="font-semibold text-text-900">
              Better today than yesterday is not a slogan. It is the operating standard.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-[#e4ece1] bg-[#f7fbf5] py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-14 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-green">Why we do this</p>
            <h2 className="mt-5 text-4xl font-black tracking-[-0.04em] text-text-900 md:text-5xl">
              We believe good businesses deserve better systems.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {values.map(({ title, body }) => (
              <div key={title} className="rounded-[1.8rem] border border-[#e4ece1] bg-white p-8">
                <h3 className="text-2xl font-bold leading-tight text-text-900">{title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-text-500">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[#e4ece1] bg-white py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-14 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-green">The team</p>
            <h2 className="mt-5 text-4xl font-black tracking-[-0.04em] text-text-900 md:text-5xl">
              Operator-built systems.
              <br />
              That is the difference.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {team.map(({ name, role, bio, tags }) => (
              <div key={name} className="rounded-[1.8rem] border border-[#e4ece1] bg-[#f9fcf8] p-8">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#e7f4e7] text-xl font-bold text-brand-green">
                  {name.split(' ').map((part) => part[0]).join('')}
                </div>
                <h3 className="text-2xl font-bold text-text-900">{name}</h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand-green">{role}</p>
                <p className="mt-6 text-sm leading-relaxed text-text-500">{bio}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-[#d7e4d6] px-3 py-1 text-xs font-medium text-text-500">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[linear-gradient(135deg,#145233_0%,#1d6b43_45%,#5eb67d_100%)] py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">Looking for the next step</p>
          <h2 className="mt-6 text-4xl font-black tracking-[-0.04em] text-white md:text-6xl">
            If you know your business is ready for better systems, we should talk.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
            We want to work with people who care, move fast, and are serious about building something stronger.
          </p>
          <a
            href="tel:+18556422889"
            className="mt-10 inline-block rounded-full bg-white px-8 py-4 text-sm font-semibold text-brand-dark transition-colors hover:bg-surface-200"
          >
            Call Betty
          </a>
        </div>
      </section>
    </>
  )
}
