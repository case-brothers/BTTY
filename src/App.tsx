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
  useEffect(() => {
    document.title = 'BTTY | AI Automation For Operators'
  }, [])

  return (
    <div className="flex min-h-screen flex-col">
      <ScrollManager />
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <BettyAssistant />
      <Footer />
    </div>
  )
}
