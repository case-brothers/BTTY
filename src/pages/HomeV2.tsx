import { useState } from 'react'

const services = [
  { number: '01', title: 'Follow up. Win more work.', body: 'Help missed calls, estimate requests, and good conversations turn into next steps. Keep leads organized so people do not get forgotten.' },
  { number: '02', title: 'Take the repeat work off your plate.', body: 'Connect the forms, inboxes, paperwork, and reminders you use every day. Less copying things twice. More time for the work only you can do.' },
  { number: '03', title: 'Get that stuck project moving.', body: 'The useful idea you keep putting off might not need another app. It might need someone to listen, figure it out with you, and build it.' },
]

function IntroVideo() {
  const [playing, setPlaying] = useState(false)
  return (
    <figure className="mx-auto w-full max-w-[340px]">
      <div className="relative aspect-[9/16] overflow-hidden rounded-[2rem] border border-[#dfe8db] bg-brand-dark shadow-[0_24px_80px_rgba(29,107,67,0.15)]">
        {playing ? (
          <iframe className="absolute inset-0 h-full w-full" src="https://www.youtube-nocookie.com/embed/Yt0kXfPP-Cc?playsinline=1&rel=0" title="Tony Case introduces BTTY: Tell me what to get off your plate" allow="encrypted-media; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
        ) : (
          <button type="button" onClick={() => setPlaying(true)} className="group absolute inset-0 h-full w-full text-white focus-visible:outline-4 focus-visible:outline-offset-[-6px] focus-visible:outline-white" aria-label="Load Tony’s BTTY introduction video">
            <img src="https://i.ytimg.com/vi/Yt0kXfPP-Cc/hqdefault.jpg" alt="" className="absolute inset-0 h-full w-full object-cover" />
            <span className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
            <span className="relative inline-flex h-16 w-16 items-center justify-center rounded-full bg-white text-2xl text-brand-green shadow-xl group-hover:scale-105 motion-reduce:transform-none" aria-hidden="true">▶</span>
            <span className="absolute inset-x-5 bottom-8 text-center text-lg font-bold">Meet Tony. Meet BTTY.</span>
          </button>
        )}
      </div>
      <figcaption className="mt-4 text-center text-sm text-text-500">A quick introduction, in Tony’s words.<br /><a href="https://www.youtube.com/shorts/Yt0kXfPP-Cc" target="_blank" rel="noopener noreferrer" className="mt-2 inline-block font-semibold text-brand-green underline underline-offset-4">Watch on YouTube</a></figcaption>
    </figure>
  )
}

export default function HomeV2() {
  return (
    <>
      <section className="border-b border-[#dfe8db] bg-[linear-gradient(150deg,#edf7e9_0%,#ffffff_70%)] pb-16 pt-32 md:pb-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-[1.25fr_0.75fr]">
          <div>
            <p className="mb-6 text-sm font-bold uppercase tracking-[0.18em] text-brand-green">Faith First!</p>
            <h1 className="text-4xl font-black leading-[1.02] tracking-[-0.045em] text-text-900 sm:text-5xl lg:text-6xl">Get more customers.<br /><span className="text-brand-green">Take work off your plate.</span></h1>
            <blockquote className="mt-7 border-l-4 border-brand-green pl-5">
              <p className="text-xl font-semibold leading-relaxed text-text-900">“I belong to Jesus Christ, and so does this business.”</p>
              <footer className="mt-2 text-sm text-text-500">Tony Case, founder of BTTY</footer>
            </blockquote>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-text-500">You have enough to do. We help you follow up with customers, cut repetitive work, and finally finish the projects that keep getting pushed aside. Practical help, in person and remotely.</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="/contact" className="rounded-full bg-brand-green px-7 py-4 text-sm font-semibold text-white hover:bg-brand-green-light">Tell me what’s on your plate</a>
              <a href="#examples" className="rounded-full border border-[#d9e8d5] bg-white px-7 py-4 text-sm font-semibold text-text-700 hover:text-brand-green">See what we’ve built</a>
            </div>
          </div>
          <IntroVideo />
        </div>
      </section>

      <section id="services" className="scroll-mt-24 border-b border-[#e4ece1] bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-green">What we do</p>
          <h2 className="mt-4 max-w-3xl text-3xl font-black tracking-tight text-text-900 md:text-5xl">Start with the problem.<br />Build what actually helps.</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">{services.map(({ number, title, body }) => <article key={number} className="rounded-[1.8rem] border border-[#e4ece1] bg-[#f8fbf7] p-7"><span className="text-sm font-bold text-brand-green">{number}</span><h3 className="mt-5 text-2xl font-bold leading-tight text-text-900">{title}</h3><p className="mt-4 leading-relaxed text-text-500">{body}</p></article>)}</div>
        </div>
      </section>

      <section id="examples" className="scroll-mt-24 border-b border-[#e4ece1] bg-[#f7fbf5] py-20">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-green">Examples, not buzzwords</p>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-text-900 md:text-5xl">Here’s what that can look like.</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <article className="rounded-[1.8rem] border border-[#dfe8db] bg-white p-7"><p className="text-xs font-bold uppercase tracking-wider text-brand-green">A project we built</p><h3 className="mt-4 text-2xl font-bold text-text-900">Church bells, with a simpler way to run them.</h3><p className="mt-4 leading-relaxed text-text-500">For Trafalgar Community Church, we helped restore the bell system and built scheduling and remote controls. A practical project for a real community.</p><a href="https://www.youtube.com/watch?v=FAKrOf4Tjfk" target="_blank" rel="noopener noreferrer" className="mt-6 inline-block font-semibold text-brand-green underline underline-offset-4">Watch the bell project</a></article>
            <article className="rounded-[1.8rem] border border-[#dfe8db] bg-white p-7"><p className="text-xs font-bold uppercase tracking-wider text-brand-green">Built from real operations</p><h3 className="mt-4 text-2xl font-bold text-text-900">Less chasing paperwork.</h3><p className="mt-4 leading-relaxed text-text-500">Tools for catering orders, paperwork, and invoice handoffs came from Tony’s own experience running businesses. The goal: keep the details together and make the next step clear.</p></article>
            <article className="rounded-[1.8rem] border border-[#dfe8db] bg-white p-7"><p className="text-xs font-bold uppercase tracking-wider text-brand-green">An example workflow</p><h3 className="mt-4 text-2xl font-bold text-text-900">A missed call gets a next step.</h3><ol className="mt-4 list-decimal space-y-3 pl-5 leading-relaxed text-text-500"><li>A customer calls while you’re busy.</li><li>A text gives them a way to request an estimate.</li><li>The request and a reminder help you follow up.</li></ol><p className="mt-5 text-sm text-text-500">We fit the workflow to how your business works.</p></article>
          </div>
        </div>
      </section>

      <section id="how" className="scroll-mt-24 border-b border-[#e4ece1] bg-white py-16">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-6 md:grid-cols-[1.4fr_1fr]">
          <div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-green">Your online presence matters, too</p><h2 className="mt-4 text-3xl font-black tracking-tight text-text-900">Websites are part of the picture.</h2><p className="mt-4 leading-relaxed text-text-500">Need a clearer website or want to know how your business looks online? Start with our free business grader, or explore our website services. They’re part of what we do, not the whole story.</p></div>
          <div className="flex flex-wrap gap-4"><a href="/scan" className="rounded-full border border-[#d9e8d5] px-6 py-4 text-sm font-semibold text-brand-green hover:bg-[#f7fbf5]">Grade my business free</a><a href="/websites" className="rounded-full border border-[#d9e8d5] px-6 py-4 text-sm font-semibold text-text-700 hover:bg-[#f7fbf5]">Explore websites</a></div>
        </div>
      </section>

      <section className="bg-brand-dark py-20">
        <div className="mx-auto max-w-3xl px-6 text-center"><p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/70">Let’s start with one thing</p><h2 className="mt-5 text-3xl font-black leading-tight tracking-tight text-white md:text-5xl">What would you love to get off your plate?</h2><p className="mt-6 text-lg leading-relaxed text-white/85">Tell me the one thing you’d love to take off your plate, and that’s where we’ll start.</p><a href="/contact" className="mt-8 inline-block rounded-full bg-white px-8 py-4 text-sm font-semibold text-brand-dark hover:bg-surface-200">Talk with Tony</a></div>
      </section>
    </>
  )
}
