const values = [
  {
    title: 'We build with operators in mind',
    body: 'Everything we make has to help a business run better in the real world, not just look good in a presentation.',
  },
  {
    title: 'We challenge each other',
    body: 'We push ideas, pressure-test decisions, and sharpen the work together so clients get the best of both perspectives.',
  },
  {
    title: 'We want to help the right people grow',
    body: 'We are looking for like-minded owners who know they are ready for the next step and want better systems behind the business.',
  },
]

const team = [
  {
    name: 'Tony Case',
    role: 'Co-founder CEO',
    bio: 'Tony was looking for help building a better website for Roly Poly Indiana, but what he really needed was a better system for growing and running the business. He brings the operator side of the partnership: real business pressure, real customer needs, and a constant eye for what actually moves the needle.',
    tags: ['Operations', 'Franchise Growth', 'Client Strategy', 'Business Systems'],
  },
  {
    name: 'Jared Drake',
    role: 'Co-founder CTO',
    bio: 'Jared came in through his local web company and built the original Roly Poly site. From the start, there was a strong working chemistry. Jared brings the technical side of the partnership: building systems that are stable, scalable, and good enough to depend on every day.',
    tags: ['Engineering', 'Web Systems', 'Architecture', 'Delivery'],
  },
]

export default function AboutV2() {
  return (
    <>
      <section className="border-b border-[#e4ece1] bg-[linear-gradient(180deg,#f7fbf5_0%,#ffffff_75%)] pb-20 pt-32">
        <div className="mx-auto max-w-6xl px-6">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.18em] text-brand-green">About BTTY</p>
          <h1 className="max-w-4xl text-5xl font-black leading-[0.98] tracking-[-0.05em] text-text-900 md:text-7xl">
            We started with a website.
            <br />
            We ended up building a real partnership.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-text-500">
            BTTY exists because the right operator met the right builder at the right time, and both of us knew there was more we could create together.
          </p>
        </div>
      </section>

      <section className="border-b border-[#e4ece1] bg-white py-24">
        <div className="mx-auto grid max-w-6xl gap-14 px-6 md:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-green">How we met</p>
            <h2 className="mt-5 text-4xl font-black tracking-[-0.04em] text-text-900 md:text-5xl">
              Roly Poly Indiana was the beginning.
            </h2>
            <div className="mt-8 overflow-hidden rounded-[1.8rem] border border-[#dfe8db] bg-[#f9fcf8] shadow-[0_24px_80px_rgba(29,107,67,0.08)]">
              <img src="/tony-jared-thumbnail.png" alt="Tony and Jared together" className="w-full" />
            </div>
          </div>

          <div className="space-y-6 text-base leading-relaxed text-text-500">
            <p>
              Tony was looking for someone to help with a website for Roly Poly Indiana. Jared had a local website company, and from the start they clicked. Jared built a strong site, but the bigger thing was how naturally the two of them worked together.
            </p>
            <p>
              While they were improving the site, Jared asked Tony if he would be interested in a partner. The answer became obvious pretty quickly. They feed off each other, challenge each other, and bring different strengths that make the work better.
            </p>
            <p>
              That is really where BTTY comes from. Not from trying to start an agency for the sake of it, but from realizing they make a great team and could use that partnership to help other businesses take their next step.
            </p>
            <p className="font-semibold text-text-900">
              We feel blessed to have found each other, and we are looking for more like-minded people who are ready to grow, improve, and build something better.
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
              Operator and builder.
              <br />
              That is the combination.
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
