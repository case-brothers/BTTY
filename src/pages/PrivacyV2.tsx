import { useEffect } from 'react'

export default function PrivacyV2() {
  useEffect(() => {
    document.title = 'BTTY | Privacy Policy'
    return () => {
      document.title = 'BTTY | Websites That Get You Found'
    }
  }, [])

  return (
    <section className="bg-white pb-24 pt-32">
      <div className="mx-auto max-w-3xl px-6">
        <h1 className="mb-3 text-4xl font-black tracking-tight text-text-900 md:text-5xl">Privacy Policy</h1>
        <p className="mb-10 text-sm text-text-400">Case Brothers Holdings LLC, doing business as BTTY. Last updated July 23, 2026.</p>

        <div className="flex flex-col gap-8 text-base leading-relaxed text-text-700">
          <div>
            <h2 className="mb-2 text-xl font-bold text-text-900">What we collect</h2>
            <p>
              When you request a business report, website preview, or contact us, we collect the information you give us: your name, business name, phone number, email address, location, and anything you write in a message field. Our website also collects standard technical information like pages visited.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-bold text-text-900">How we use it</h2>
            <p>
              We use your information to deliver what you asked for: generating your business report, building and sending your website preview, responding to your questions, and providing our services if you become a client. We contact you by phone, text message, or email using the contact details you provided.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-bold text-text-900">Text messaging</h2>
            <p>
              If you agree to receive text messages from us, we will text you about your report, your website preview, appointments, and your account. Message and data rates may apply and message frequency varies. Reply STOP at any time to stop receiving texts, or HELP for help. Consent to receive texts is not a condition of purchasing anything. No mobile information will be shared with third parties or affiliates for marketing or promotional purposes.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-bold text-text-900">What we do not do</h2>
            <p>
              We do not sell your personal information. We do not share your contact information with third parties except the service providers we use to operate our business (such as our website hosting, customer relationship, and messaging platforms), and only so they can provide those services to us.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-bold text-text-900">Your choices</h2>
            <p>
              You can ask us to correct or delete your information, or to stop contacting you, at any time. Email tcase@btownrolypoly.com or reply STOP to any text message.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-bold text-text-900">Contact</h2>
            <p>
              Case Brothers Holdings LLC
              <br />
              688 E 775 S, Nineveh, IN 46164
              <br />
              tcase@btownrolypoly.com
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
