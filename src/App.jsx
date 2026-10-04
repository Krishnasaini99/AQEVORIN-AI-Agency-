import { useState, useEffect } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import TrustedBy from './components/TrustedBy.jsx'
import Services from './components/Services.jsx'
import WhyUs from './components/WhyUs.jsx'
import Portfolio from './components/Portfolio.jsx'
import Blog from './components/Blog.jsx'
import CTA from './components/CTA.jsx'
import Footer from './components/Footer.jsx'
import SocialFab from './components/SocialFab.jsx'
import ContactPage from './pages/ContactPage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import ServiceDetail from './pages/ServiceDetail.jsx'
import BlogDetail from './pages/BlogDetail.jsx'
import PortfolioDetail from './pages/PortfolioDetail.jsx'
import AdminPage from './admin/AdminPage.jsx'
import './admin/admin.css'

function parseRoute() {
  const hash = window.location.hash
  if (!hash || hash === '#' || hash === '#home') return { name: 'home' }
  if (hash === '#/admin') return { name: 'admin' }
  if (hash === '#/contact') return { name: 'contact' }
  if (hash === '#/about') return { name: 'about' }

  let m = hash.match(/^#\/services\/([^/?#]+)/)
  if (m) return { name: 'service', slug: m[1] }

  m = hash.match(/^#\/blog\/([^/?#]+)/)
  if (m) return { name: 'blog', slug: m[1] }

  m = hash.match(/^#\/portfolio\/([^/?#]+)/)
  if (m) return { name: 'portfolio', slug: m[1] }

  // Home section anchors: #services, #portfolio, #blog, #why, #contact
  return { name: 'home', section: hash.slice(1) }
}

export default function App() {
  const [route, setRoute] = useState(parseRoute)

  useEffect(() => {
    const onHash = () => setRoute(parseRoute())
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  useEffect(() => {
    if (route.name === 'home') {
      if (route.section) {
        requestAnimationFrame(() => {
          document.getElementById(route.section)?.scrollIntoView()
        })
      } else {
        window.scrollTo({ top: 0 })
      }
    } else {
      window.scrollTo({ top: 0 })
    }
  }, [route])

  let page = null
  if (route.name === 'admin') {
    return <AdminPage />
  } else if (route.name === 'contact') {
    page = <ContactPage />
  } else if (route.name === 'about') {
    page = <AboutPage />
  } else if (route.name === 'service') {
    page = <ServiceDetail slug={route.slug} />
  } else if (route.name === 'blog') {
    page = <BlogDetail slug={route.slug} />
  } else if (route.name === 'portfolio') {
    page = <PortfolioDetail slug={route.slug} />
  } else {
    page = (
      <main id="home">
        <Hero />
        <TrustedBy />
        <Services />
        <WhyUs />
        <Portfolio />
        <Blog />
        <CTA />
      </main>
    )
  }

  return (
    <>
      <Navbar />
      {page}
      <Footer />
      <SocialFab />
    </>
  )
}
