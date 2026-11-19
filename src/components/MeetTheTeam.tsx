const members = [
  { name: 'Tony Case', role: 'Founder', detail: 'The person behind BTTY.' },
  { name: 'Buddy', role: 'AI team member', detail: 'The yellow character with sunglasses.' },
  { name: 'TuneUp', role: 'AI team member', detail: 'The character in the BTTY cap.' },
  { name: 'Startup', role: 'AI team member', detail: 'The green character with a headset.' },
]

const introductions = [
  { name: 'Buddy', file: 'buddy', transcript: 'Hi, I’m Buddy.' },
  { name: 'TuneUp', file: 'tuneup', transcript: 'Hi, I’m TuneUp.' },
]

export default function MeetTheTeam() {
  return (
    <section id="team" aria-labelledby="team-heading" className="scroll-mt-24 border-b border-[#e4ece1] bg-[#f7fbf5] py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-green">People first. AI alongside.</p>
          <h2 id="team-heading" className="mt-4 text-3xl font-black tracking-tight text-text-900 md:text-5xl">Meet the team.</h2>
          <p className="mt-6 text-lg leading-relaxed text-text-500">I’m Tony Case. I belong to Jesus Christ, and so does this business. I started BTTY to help busy people get their time back. Meet the AI team that helps me do it.</p>
        </div>

        <figure className="mt-10">
          <img src="/team/btty-team.webp" alt="Tony Case with the illustrated BTTY AI team: Startup in green, Buddy in yellow, and TuneUp in a BTTY cap." width="1920" height="1280" loading="lazy" className="h-auto w-full rounded-[1.8rem] border border-[#dfe8db]" />
          <figcaption className="mt-3 text-sm leading-relaxed text-text-500">Left to right: Startup, Buddy, Tony Case, and TuneUp. Tony is the founder. The three characters represent his AI team, not human employees.</figcaption>
        </figure>

        <ul className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4" aria-label="BTTY team members">
          {members.map(({ name, role, detail }) => (
            <li key={name} className="rounded-2xl border border-[#dfe8db] bg-white p-5">
              <h3 className="text-xl font-bold text-text-900">{name}</h3>
              <p className="mt-1 text-sm font-semibold text-brand-green">{role}</p>
              <p className="mt-3 text-sm leading-relaxed text-text-500">{detail}</p>
            </li>
          ))}
        </ul>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {introductions.map(({ name, file, transcript }) => (
            <div key={name} className="rounded-[1.8rem] border border-[#dfe8db] bg-white p-5 md:p-7">
              <h3 className="text-2xl font-bold text-text-900">Say hello to {name}.</h3>
              <p className="mt-2 text-sm text-text-500">AI character introduction · 10 seconds · Tap play</p>
              <video controls playsInline preload="none" poster={`/team/${file}-poster.jpg`} aria-label={`${name}, BTTY AI team member, introduction`} className="mt-5 aspect-square w-full rounded-2xl bg-brand-dark object-contain">
                <source src={`/team/${file}-intro.mp4`} type="video/mp4" />
                <track kind="captions" src={`/team/${file}-captions.vtt`} srcLang="en" label="English" />
                Your browser cannot play this video. <a href={`/team/${file}-intro.mp4`}>Open {name}’s introduction</a>.
              </video>
              <p className="mt-3 text-sm text-text-500">{name}: “{transcript}”</p>
              <a href={`/team/${file}-intro.mp4`} className="mt-3 inline-block text-sm font-semibold text-brand-green underline underline-offset-4">Open {name}’s video</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
