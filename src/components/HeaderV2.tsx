import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const nav = [
  { label: 'Services', to: '/#services' },
  { label: 'Blog', to: '/blog' },
  { label: 'About', to: '/about' },
  { label: 'Work', to: '/work' },
  { label: 'Contact', to: '/contact' },
]

export default function HeaderV2() {
  const [open, setOpen] = useState(false)
  const { pathname, hash } = useLocation()
  const navigate = useNavigate()

  function goToServices() {
    setOpen(false)

    if (pathname === '/') {
      const section = document.getElementById('services')
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return
      }
    }

    navigate('/#services')
  }

  function isActive(to: string) {
    if (to === '/#services') {
      return pathname === '/' && hash === '#services'
    }

    return pathname === to
  }

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-[#ece4d8]/80 bg-[rgba(250,247,241,0.92)] backdrop-blur-xl">
      <div className="mx-auto flex h-18 max-w-6xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-3">
          <img src="/btty-logo-green-arrow.png" alt="BTTY logo" className="h-10 w-auto md:h-11" />
          <div className="leading-none">
            <div className="mt-1 text-[11px] font-medium uppercase tracking-[0.16em] text-text-400">
              Better Today Than Yesterday
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 rounded-full border border-[#ece4d8] bg-white px-2 py-2 shadow-[0_10px_32px_rgba(33,29,22,0.06)] md:flex">
          {nav.map(({ label, to }) =>
            to === '/#services' ? (
              <button
                key={to}
                type="button"
                onClick={goToServices}
                className={`rounded-full px-4 py-2 text-[15px] font-semibold transition-colors ${
                  isActive(to) ? 'bg-brand-green text-white' : 'text-text-700 hover:bg-[#f7f3ed] hover:text-text-900'
                }`}
              >
                {label}
              </button>
            ) : (
              <Link
                key={to}
                to={to}
                className={`rounded-full px-4 py-2 text-[15px] font-semibold transition-colors ${
                  isActive(to) ? 'bg-brand-green text-white' : 'text-text-700 hover:bg-[#f7f3ed] hover:text-text-900'
                }`}
              >
                {label}
              </Link>
            ),
          )}

          <a
            href="https://calendly.com/tcase-wlej/revenue-system-install"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-brand-dark px-6 py-3 text-[15px] font-semibold text-white transition-colors hover:bg-brand-black"
          >
            Book a Call
          </a>
        </nav>

        <button
          className="text-text-500 hover:text-text-900 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18 18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-white/60 bg-[rgba(247,242,234,0.96)] px-6 py-6 md:hidden">
          <div className="flex flex-col gap-3 rounded-3xl border border-white/80 bg-white/75 p-4 shadow-[0_24px_80px_rgba(33,29,22,0.1)]">
            {nav.map(({ label, to }) =>
              to === '/#services' ? (
                <button
                  key={to}
                  type="button"
                  onClick={goToServices}
                  className="rounded-2xl px-4 py-3 text-left text-sm font-semibold text-text-700 transition-colors hover:bg-surface-100 hover:text-text-900"
                >
                  {label}
                </button>
              ) : (
                <Link
                  key={to}
                  to={to}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl px-4 py-3 text-sm font-semibold text-text-700 transition-colors hover:bg-surface-100 hover:text-text-900"
                >
                  {label}
                </Link>
              ),
            )}
            <a
              href="https://calendly.com/tcase-wlej/revenue-system-install"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="rounded-2xl bg-brand-dark px-6 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-brand-black"
            >
              Book a Call
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
