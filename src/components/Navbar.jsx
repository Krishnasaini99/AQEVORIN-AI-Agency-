import { useState, useEffect } from 'react'
import { useTheme } from '../context/ThemeContext.jsx'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#services', label: 'Services' },
  { href: '#blog', label: 'Blog' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#/about', label: 'About' },
  { href: '#/contact', label: 'Contact' },
]

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('home')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    let raf = 0
    const compute = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const hash = window.location.hash
        // Detail / standalone routes — highlight the matching parent item
        if (hash.startsWith('#/')) {
          const parts = hash.slice(2).split('/')
          const seg = parts[0]
          if (seg === '' || seg === 'home') {
            // fall through to home scroll-spy below
          } else if (seg === 'about') { setActive('/about'); return }
          else if (seg === 'contact') { setActive('/contact'); return }
          else if (seg === 'services' && parts[1]) { setActive('services'); return }
          else if (seg === 'blog' && parts[1]) { setActive('blog'); return }
          else if (seg === 'portfolio' && parts[1]) { setActive('portfolio'); return }
          else if (seg === 'services' || seg === 'blog' || seg === 'portfolio') {
            // bare section slugs without detail — home page, use scroll-spy
          } else { setActive(''); return }
        }
        // Home page — scroll-spy by section positions (ignores the wrapping <main>)
        const ids = ['services', 'portfolio', 'blog', 'contact']
        const y = window.scrollY + 160
        let current = 'home'
        for (const id of ids) {
          const el = document.getElementById(id)
          if (el && el.offsetTop <= y) current = id
        }
        setActive(current)
      })
    }
    compute()
    window.addEventListener('scroll', compute, { passive: true })
    window.addEventListener('hashchange', compute)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', compute)
      window.removeEventListener('hashchange', compute)
    }
  }, [])

  return (
    <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container nav-inner">
        <a href="#home" className="brand">
          <img src="/assets/logo-icon.svg" alt="AQEVORIN AI logo" className="brand-icon" />
          <span className="brand-text">AQEVORIN <span className="brand-accent">AI</span></span>
        </a>

        <nav className={`nav-links ${menuOpen ? 'open' : ''}`} aria-label="Primary">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              className={`nav-link ${active === l.href.slice(1) ? 'active' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle dark and light theme" title="Toggle theme">
            {theme === 'dark' ? (
              <svg className="icon-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>
            ) : (
              <svg className="icon-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
            )}
          </button>
          <a href="#/admin" className="btn btn-outline">Login</a>
          <a href="#/contact" className="btn btn-primary nav-cta">Get Free Consultation</a>
          <button
            className={`hamburger ${menuOpen ? 'active' : ''}`}
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Open menu"
            aria-expanded={menuOpen}
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </header>
  )
}
