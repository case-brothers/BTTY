import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Header from './components/HeaderV2'
import Footer from './components/FooterV2'
import BettyAssistant from './components/BettyAssistant'
import Home from './pages/HomeV2'
import About from './pages/AboutV2'
import Work from './pages/WorkV2'
import Contact from './pages/ContactV2'
import Blog from './pages/BlogV2'
import BlogPost from './pages/BlogPostV2'
import Contractors from './pages/ContractorsV2'
import Scan from './pages/ScanRedirect'
import Privacy from './pages/PrivacyV2'
import Terms from './pages/TermsV2'
import VideoPage from './pages/VideoPage'

function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = hash.slice(1)
      const element = document.getElementById(id)

      if (element) {
        requestAnimationFrame(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        })
        return
      }
    }

    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname, hash])

  return null
}

export default function App() {
  const { pathname } = useLocation()
  const isVideoPage = pathname === '/video' || pathname === '/intro'

  useEffect(() => {
    document.title = pathname === '/video'
      ? 'BTTY | See What We Build'
      : pathname === '/intro'
        ? 'BTTY | Before We Talk'
        : 'BTTY | Websites That Get You Found'
  }, [pathname])

  return (
    <div className="flex min-h-screen flex-col">
      <ScrollManager />
      {!isVideoPage ? <Header /> : null}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contractors" element={<Contractors />} />
          <Route path="/websites" element={<Contractors />} />
          <Route path="/scan" element={<Scan />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/video" element={<VideoPage booked={false} />} />
          <Route path="/intro" element={<VideoPage booked />} />
        </Routes>
      </main>
      {!isVideoPage ? <BettyAssistant /> : null}
      {!isVideoPage ? <Footer /> : null}
    </div>
  )
}
