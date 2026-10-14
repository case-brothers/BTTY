import { useRef, useState } from 'react'
import './Evenings.css'

const bookingUrl = 'https://link.btty.ai/widget/booking/ANIqkqlsUOfycji0w2QZ'
const cta = 'Show me how it works for my business'
const faqs = [
  ['What happens when I miss a call?', 'BTTY sends a text back to the caller, including after hours. Missed-call text-back is part of the package. We’ll walk through the setup for your business when we talk.'],
  ['Does the included service answer calls with a voice?', 'The included service is missed-call text-back. AI Betty voice answering is an optional upgrade, which we can discuss separately.'],
  ['Can I use my existing business number?', 'Bring your current phone setup to the conversation. We’ll check compatibility and explain any setup changes before you decide.'],
  ['What information will I receive?', 'We’ll show you how caller information and replies are handled, where you can review them, and how you can follow up. The exact setup will be confirmed for your business.'],
  ['What does it cost, and what is included?', 'We’ll confirm the package, messaging usage, setup requirements, and any optional AI Betty costs with you. You’ll know what you’re choosing before you get started.'],
]

export default function Evenings() {
  const video = useRef<HTMLVideoElement>(null)
  const [started, setStarted] = useState(false)
  const [playError, setPlayError] = useState(false)
  async function play() {
    setStarted(true)
    try { await video.current?.play() } catch { setPlayError(true) }
  }
  return (
    <div className="evenings">
      <a className="ev-skip" href="#evenings-content">Skip to content</a>
      <header className="ev-header ev-wrap">
        <a href="/" aria-label="BTTY home"><img src="/btty-logo-green-arrow.png" alt="BTTY" width="145" height="58" /></a>
        <a className="ev-header-link" href="#how-it-works">How it works <span aria-hidden="true">↗</span></a>
      </header>
      <div id="evenings-content">
        <section className="ev-hero ev-wrap" aria-labelledby="evenings-title">
          <div className="ev-hero-copy">
            <p className="ev-eyebrow"><span /> 24/7 CALL MANAGEMENT · BUILT FOR CONTRACTORS</p>
            <h1 id="evenings-title">GET YOUR<br />EVENINGS<br /><em>BACK.</em></h1>
            <p className="ev-lead">Miss a call? BTTY texts back,<br className="ev-desktop-break" /> even after hours.</p>
            <p className="ev-description">Your business shouldn’t stop answering when you stop working. Give callers a response while you get back to the people waiting at home.</p>
            <a className="ev-button" href={bookingUrl}>{cta}<span aria-hidden="true">↗</span></a>
            <p className="ev-note">Missed-call text-back included. AI Betty voice answering available as an upgrade.</p>
          </div>
          <figure className="ev-film">
            <div className="ev-film-frame">
              <video ref={video} controls={started} playsInline preload="none" poster="/btty-family-poster.jpg" width="1080" height="1920" aria-label="BTTY: Get your evenings back" onEnded={() => setStarted(false)}>
                <source src="/btty-family-evenings.mp4" type="video/mp4" />
                Your browser does not support video. <a href="/btty-family-evenings.mp4">Watch the ad</a>.
              </video>
              {!started && <button className="ev-play" onClick={play} aria-label="Play the 19-second BTTY family ad with sound"><span aria-hidden="true">▶</span><span>WATCH THE STORY <small>19 SEC · SOUND ON</small></span></button>}
            </div>
            <figcaption>Your van’s parked. Your tools are down. You can be, too.</figcaption>
            {playError && <p role="status">Use the video controls to play, or <a href="/btty-family-evenings.mp4">open the video</a>.</p>}
            <details className="ev-transcript"><summary>Read the ad transcript</summary><p>“Your van’s parked. Your tools are down. Why are you still on the clock? Missed calls don’t stop at five. B-T-T-Y watches the phone and replies twenty-four seven, so you can put the phone down and get your evenings back!” Kids: “Daddy’s home! Daddy’s home!”</p></details>
          </figure>
        </section>
        <section className="ev-promise"><div className="ev-wrap"><p>ON THE JOB. AT THE TABLE. OFF THE CLOCK.</p><h2>A missed call doesn’t have to<br />be the end of the conversation.</h2></div></section>
        <section id="how-it-works" className="ev-how ev-wrap" aria-labelledby="how-title">
          <div className="ev-section-heading"><p className="ev-eyebrow">THE INCLUDED SERVICE</p><h2 id="how-title">A simple way to<br />keep the door open.</h2><p>Missed-call text-back works around the hours you work—and the hours you don’t.</p></div>
          <div className="ev-steps">
            <article><span className="ev-number">01</span><h3>A call comes in.</h3><p>You’re on a ladder, driving between jobs, or sitting down to dinner. You can’t always pick up.</p></article>
            <article><span className="ev-number">02</span><h3>BTTY texts back.</h3><p>When you miss the call, BTTY sends a text response. That includes calls outside your working hours.</p></article>
            <article><span className="ev-number">03</span><h3>You plan the follow-up.</h3><p>We’ll walk through how you see caller details and replies, and agree on a follow-up setup that fits your business.</p></article>
          </div>
          <div className="ev-sample"><div><p className="ev-eyebrow">ILLUSTRATIVE TEXT · NOT A CLIENT CONVERSATION</p><h3>A reply that starts<br />a conversation.</h3><p>We’ll review the wording with you during setup.</p></div><div className="ev-message"><span>YOUR BUSINESS</span><p>“Thanks for calling! Sorry we missed you. What can we help you with?”</p></div></div>
        </section>
        <section className="ev-upgrade ev-wrap" aria-labelledby="upgrade-title"><div><p className="ev-eyebrow">OPTIONAL UPGRADE</p><h2 id="upgrade-title">Want a voice<br />on the other end?</h2></div><div><p className="ev-upgrade-lead">Meet AI Betty.</p><p>AI Betty adds voice answering as an optional upgrade. Ask us to walk you through what it can handle for your business and what the upgrade includes.</p><p className="ev-upgrade-note">The base package includes missed-call text-back. Voice answering is separate.</p></div></section>
        <section className="ev-faq ev-wrap" aria-labelledby="faq-title"><div><p className="ev-eyebrow">GOOD QUESTIONS</p><h2 id="faq-title">Let’s clear<br />a few things up.</h2></div><div>{faqs.map(([q,a]) => <details key={q}><summary>{q}<span aria-hidden="true">+</span></summary><p>{a}</p></details>)}</div></section>
        <section className="ev-close"><div className="ev-wrap"><p className="ev-eyebrow">YOU BUILT A BUSINESS. MAKE ROOM FOR LIFE.</p><h2>Clock out.<br /><em>Be there.</em></h2><p>Let’s see how missed-call text-back fits your business.</p><a className="ev-button" href={bookingUrl}>{cta}<span aria-hidden="true">↗</span></a></div></section>
      </div>
      <footer className="ev-footer ev-wrap"><a href="/" aria-label="BTTY home"><img src="/btty-logo-green-arrow.png" alt="BTTY" width="110" height="44" /></a><p>Better than yesterday. More time for today.</p><nav aria-label="Legal"><a href="/privacy">Privacy</a><a href="/terms">Terms</a></nav></footer>
    </div>
  )
}
