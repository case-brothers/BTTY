import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t border-surface-300 bg-surface-100 py-12 mt-auto">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div>
          <Link to="/">
            <img src="/btty-logo-dark.png" alt="BTTY" className="h-12 w-auto" />
          </Link>
        </div>

        <nav className="flex flex-wrap gap-8">
          {[
            { label: 'Services', to: '/#use-cases' },
            { label: 'Work', to: '/work' },
            { label: 'About', to: '/about' },
            { label: 'Contact', to: '/contact' },
          ].map(({ label, to }) => (
            <Link
              key={to}
              to={to}
              className="text-sm text-text-500 hover:text-brand-green transition-colors"
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="text-text-400 text-xs">
          &copy; {new Date().getFullYear()} Case Brothers Holdings. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
