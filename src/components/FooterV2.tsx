import { Link, useLocation, useNavigate } from 'react-router-dom'

export default function FooterV2() {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  function goToServices() {
    if (pathname === '/') {
      const section = document.getElementById('services')
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return
      }
    }

    navigate('/#services')
  }

  return (
    <footer className="mt-auto border-t border-[#e6ddcf] bg-[#f5efe4] py-14">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 md:flex-row md:items-end md:justify-between">
        <div className="max-w-sm">
          <Link to="/">
            <img src="/btty-logo-dark.png" alt="BTTY" className="h-12 w-auto" />
          </Link>
          <p className="mt-4 text-sm leading-relaxed text-text-500">
            Practical AI systems, sharper operations, and clearer visibility for teams that do not have time for fluff.
          </p>
        </div>

        <div className="flex flex-col gap-5">
          <nav className="flex flex-wrap gap-5 text-sm font-semibold text-text-700">
            <button type="button" onClick={goToServices} className="transition-colors hover:text-brand-green">
              Services
            </button>
            <Link to="/work" className="transition-colors hover:text-brand-green">
              Work
            </Link>
            <Link to="/about" className="transition-colors hover:text-brand-green">
              About
            </Link>
            <Link to="/contact" className="transition-colors hover:text-brand-green">
              Contact
            </Link>
          </nav>
          <div className="text-xs text-text-400">
            Copyright {new Date().getFullYear()} Case Brothers Holdings. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
