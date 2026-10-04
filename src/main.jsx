import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx'
import { ContentProvider } from './context/ContentContext.jsx'
import './index.css'

// Global scroll-reveal observer — watches for .reveal elements
function setupRevealObserver() {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  )

  const observeAll = () => {
    document.querySelectorAll('.reveal:not(.visible)').forEach(el => observer.observe(el))
  }

  observeAll()

  // Watch for dynamically added .reveal elements
  const mutationObserver = new MutationObserver(observeAll)
  mutationObserver.observe(document.body, { childList: true, subtree: true })

  return () => {
    observer.disconnect()
    mutationObserver.disconnect()
  }
}

const cleanup = setupRevealObserver()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <ContentProvider>
        <App />
      </ContentProvider>
    </ThemeProvider>
  </React.StrictMode>,
)

// Re-setup observer after React mounts
requestAnimationFrame(setupRevealObserver)
