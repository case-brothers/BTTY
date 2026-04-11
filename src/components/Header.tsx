import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const nav = [
  { label: 'Services', to: '/#use-cases' },
  { label: 'About', to: '/about' },
  { label: 'Work', to: '/work' },
  { label: 'Contact', to: '/contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-surface-300 bg-white/90 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center group">
          <img src="/btty-logo-dark.png" alt="BTTY — Better Today Than Yesterday" className="h-12 md:h-14 w-auto max-w-[180px]" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {nav.map(({ label, to }) => (
            <Link
              key={to}
              to={to}
              className={`text-sm font-medium transition-colors ${
                pathname === to
                  ? 'text-brand-green'
                  : 'text-text-700 hover:text-text-900'
              }`}
            >
              {label}
            </Link>
          ))}
          <a
            href="https://calendly.com/tcase-wlej/revenue-system-install"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold bg-brand-dark text-white px-6 py-3 rounded-full hover:bg-brand-black transition-colors"
          >
            Get a Free Demo
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-text-500 hover:text-text-900"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-surface-300 bg-white px-6 py-6 flex flex-col gap-6">
          {nav.map(({ label, to }) => (
            <Link
              key={to}
              to={to}
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-text-700 hover:text-text-900"
            >
              {label}
            </Link>
          ))}
          <a
            href="https://calendly.com/tcase-wlej/revenue-system-install"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="text-sm font-semibold bg-brand-dark text-white px-6 py-3 rounded-full text-center hover:bg-brand-black transition-colors"
          >
            Get a Free Demo
          </a>
        </div>
      )}
    </header>
  )
}
