import { useEffect, useRef } from 'react'

// Filled in from HighLevel. When WIDGET_EMBED is empty the page shows the
// preview-form fallback instead of a broken scanner.
const WIDGET_EMBED =
  '<iframe src="https://services.leadconnectorhq.com/prospecting/widgets/public/6a624729e85cf6aa7b2ef901" title="Free business scan" style="width:100%;min-height:860px;border:0;display:block" loading="lazy"></iframe>'
const PAYMENT_LINK_URL = 'https://link.fastpaydirect.com/payment-link/6a620ab5a655fa0b802a5c31'

const scoreChecks = [
  {
    title: 'Can customers find you?',
    body: 'How you show up on Google when someone in your town searches your trade. Most owners have never actually looked.',
  },
  {
    title: 'Does your website work?',
    body: 'Speed, mobile, and whether a visitor can actually reach you. A slow site quietly sends jobs to the next name on the list.',
  },
  {
    title: 'Do your reviews sell for you?',
    body: 'Your rating, your review count, and how you stack up against the competitors your customers compare you to.',
  },
]

const steps = [
  {
    number: '1',
    title: 'Run your free scan',
    body: 'Type your business name and see your score in about 60 seconds. No email required to look.',
  },
  {
    number: '2',
    title: 'Preview your new website free',
    body: 'If your score is not what you hoped, we build your new site and text you a preview link within 48 hours. No payment, no meeting.',
  },
  {
    number: '3',
    title: 'Go live and watch the score climb',
    body: 'Love the preview? We take it live for $197 a month, everything included, no contract. Then we run the scan again and show you the difference.',
  },
]

function WidgetEmbed({ code }: { code: string }) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container || !code) return

    // Scripts inside innerHTML never execute, so rebuild each node manually.
    const template = document.createElement('div')
    template.innerHTML = code

    const appended: Node[] = []
    for (const node of Array.from(template.childNodes)) {
      if (node instanceof HTMLScriptElement) {
        const script = document.createElement('script')
        for (const attr of Array.from(node.attributes)) {
          script.setAttribute(attr.name, attr.value)
        }
        script.text = node.text
        container.appendChild(script)
        appended.push(script)
      } else {
        container.appendChild(node)
        appended.push(node)
      }
    }

    return () => {
      for (const node of appended) {
        if (container.contains(node)) container.removeChild(node)
      }
    }
  }, [code])

  return <div ref={containerRef} className="min-h-[480px] w-full" />
}

export default function ScanV2() {
  useEffect(() => {
    document.title = 'BTTY | Free Business Scan'
    return () => {
      document.title = 'BTTY | AI Automation For Operators'
    }
  }, [])

  return (
    <>
      <section className="border-b border-surface-300 bg-white pb-16 pt-32">
        <div className="mx-auto max-w-6xl px-6">
          <p className="mb-6 text-xs font-semibold uppercase tracking-wide text-brand-green">Free Business Scan</p>
          <h1 className="mb-4 max-w-4xl text-5xl font-black leading-[1.02] tracking-tight text-text-900 md:mb-6 md:text-7xl">
            How easy are you to find?
          </h1>
          <p className="mb-9 text-5xl font-black leading-[1.02] tracking-tight text-brand-green md:mb-10 md:text-7xl">
            Find out in 60 seconds.
          </p>
          <p className="max-w-2xl text-lg leading-relaxed text-text-500">
            {'Type in your business name and see exactly what your customers see: your Google presence, your website, your reviews, scored side by side against the competition. Free, instant, and honest.'}
          </p>
        </div>
      </section>

      <section id="scan" className="bg-surface-100 py-16">
        <div className="mx-auto max-w-4xl px-6">
          {WIDGET_EMBED ? (
            <div className="rounded-2xl border border-surface-300 bg-white p-4 md:p-8">
              <WidgetEmbed code={WIDGET_EMBED} />
            </div>
          ) : (
            <div className="rounded-2xl border border-surface-300 bg-white p-10 text-center">
              <h2 className="mb-3 text-2xl font-black text-text-900">The scanner is almost ready.</h2>
              <p className="mx-auto mb-8 max-w-md text-base leading-relaxed text-text-500">
                In the meantime, skip straight to the good part: tell us about your business and preview your new website free within 48 hours.
              </p>
              <a
                href="/contractors#preview"
                className="inline-block rounded-full bg-brand-green px-8 py-4 text-sm font-bold text-white transition-opacity hover:opacity-90"
              >
                Preview My New Website
              </a>
            </div>
          )}
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-6">
          <p className="mb-4 text-xs font-semibold uppercase tracking-wide text-brand-green">What The Scan Checks</p>
          <h2 className="mb-14 max-w-3xl text-4xl font-black tracking-tight text-text-900 md:text-5xl">
            Your customers already ran this test. They just did it with their wallet.
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {scoreChecks.map((item) => (
              <div key={item.title} className="rounded-2xl border border-surface-300 bg-surface-100 p-8">
                <h3 className="mb-3 text-lg font-bold text-text-900">{item.title}</h3>
                <p className="text-sm leading-relaxed text-text-500">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface-100 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <p className="mb-4 text-xs font-semibold uppercase tracking-wide text-brand-green">Bad Score? Good News.</p>
          <h2 className="mb-14 max-w-3xl text-4xl font-black tracking-tight text-text-900 md:text-5xl">
            A low score is the cheapest problem your business will ever fix.
          </h2>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            {steps.map((step) => (
              <div key={step.number}>
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-brand-green text-lg font-black text-white">
                  {step.number}
                </div>
                <h3 className="mb-3 text-xl font-bold text-text-900">{step.title}</h3>
                <p className="text-sm leading-relaxed text-text-500">{step.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-14 flex flex-wrap items-center gap-4">
            <a
              href="/contractors#preview"
              className="rounded-full bg-brand-green px-8 py-4 text-sm font-bold text-white transition-opacity hover:opacity-90"
            >
              Preview My New Website Free
            </a>
            {PAYMENT_LINK_URL ? (
              <a
                href={PAYMENT_LINK_URL}
                className="rounded-full border-2 border-brand-green px-8 py-4 text-sm font-bold text-brand-green transition-colors hover:bg-brand-green hover:text-white"
              >
                Ready Now? Start For $197/mo
              </a>
            ) : null}
          </div>
        </div>
      </section>
    </>
  )
}
