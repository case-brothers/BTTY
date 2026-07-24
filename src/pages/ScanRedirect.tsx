import { useEffect } from 'react'

/**
 * The grader lives on its own site at grademe.btty.ai.
 *
 * Production never reaches this component: netlify.toml redirects /scan at the
 * edge with force = true. It exists so local dev and any future hosting change
 * still land somewhere correct instead of rendering a blank route.
 */
export default function ScanRedirect() {
  useEffect(() => {
    window.location.replace('https://grademe.btty.ai')
  }, [])

  return (
    <section className="flex min-h-screen items-center justify-center px-6">
      <p className="text-text-500">
        Taking you to the{' '}
        <a href="https://grademe.btty.ai" className="font-semibold text-brand-green underline underline-offset-2">
          free business scan
        </a>
        …
      </p>
    </section>
  )
}
