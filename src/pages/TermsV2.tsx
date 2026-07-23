import { useEffect } from 'react'

export default function TermsV2() {
  useEffect(() => {
    document.title = 'BTTY | Terms of Service'
    return () => {
      document.title = 'BTTY | Websites That Get You Found'
    }
  }, [])

  return (
    <section className="bg-white pb-24 pt-32">
      <div className="mx-auto max-w-3xl px-6">
        <h1 className="mb-3 text-4xl font-black tracking-tight text-text-900 md:text-5xl">Terms of Service</h1>
        <p className="mb-10 text-sm text-text-400">Case Brothers Holdings LLC, doing business as BTTY. Last updated July 23, 2026.</p>

        <div className="flex flex-col gap-8 text-base leading-relaxed text-text-700">
          <div>
            <h2 className="mb-2 text-xl font-bold text-text-900">The service</h2>
            <p>
              BTTY provides websites and lead systems for small businesses: a free online business report, a free website preview, and a paid monthly subscription that includes a website, hosting, missed-call text-back, lead notifications, and ongoing small changes.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-bold text-text-900">Free preview</h2>
            <p>
              The website preview is free and carries no obligation. You only pay if you choose to take your website live with us.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-bold text-text-900">Subscription</h2>
            <p>
              The subscription is billed monthly at the price stated when you sign up, currently $197 per month, everything included. There is no setup fee and no long term contract. You can cancel at any time and your service continues through the end of the period you have paid for. Your domain name is yours: if you leave, it goes with you.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-bold text-text-900">Text messaging terms</h2>
            <p>
              If you opt in to text messages, we send messages about your report, website preview, appointments, and account. Message and data rates may apply and message frequency varies. Reply STOP to cancel at any time, or HELP for help. Consent is not a condition of purchase.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-bold text-text-900">Content you provide</h2>
            <p>
              You are responsible for the accuracy of the business information, photos, and content you give us to use on your website, and you confirm you have the right to use them.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-bold text-text-900">Limits</h2>
            <p>
              We work hard to keep your website online and your lead system running, but we do not guarantee uninterrupted service or specific business results. Our total liability for any claim is limited to the amount you paid us in the three months before the claim.
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
