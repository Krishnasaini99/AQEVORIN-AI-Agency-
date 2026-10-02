import { useEffect, useRef, useState } from 'react'
import { useTheme } from '../context/ThemeContext.jsx'

function Counter({ target }) {
  const [value, setValue] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true
          const duration = 1600
          const start = performance.now()
          const step = (now) => {
            const progress = Math.min((now - start) / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setValue(Math.round(eased * target))
            if (progress < 1) requestAnimationFrame(step)
          }
          requestAnimationFrame(step)
        }
      },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [target])

  return <span ref={ref}>{value}</span>
}

const stats = [
  { target: 120, suffix: '', label: 'Projects Delivered' },
  { target: 95, suffix: '%', label: 'Client Satisfaction' },
  { target: 40, suffix: '+', label: 'Expert Agents' },
  { target: 8, suffix: '+', label: 'Years Experience' },
]

export default function Hero() {
  const videoRef = useRef(null)
  const { theme } = useTheme()

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const apply = () => {
      const v = videoRef.current
      if (!v) return
      if (mq.matches) v.pause()
      else v.play().catch(() => {})
    }
    apply()
    mq.addEventListener('change', apply)
    return () => mq.removeEventListener('change', apply)
  }, [theme])

  return (
    <section className="hero">
      <div className="hero-video-wrap" aria-hidden="true">
        <video key={theme} ref={videoRef} className="hero-video" autoPlay muted loop playsInline preload="auto">
          <source src={theme === 'light' ? '/assets/hero-loop-light.mp4' : '/assets/hero-loop-dark.mp4'} type="video/mp4" />
        </video>
      </div>
      <div className="hero-bg" aria-hidden="true">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
        <div className="grid-overlay"></div>
      </div>
      <div className="container hero-content">
        <span className="badge reveal">AI Agency · Creative Agents · Digital Growth</span>
        <h1 className="hero-title reveal">Intelligence That<br /><span className="gradient-text">Moves Business Forward.</span></h1>
        <p className="hero-sub reveal">We build AI systems, creative agents, and digital growth engines — strategy, design, video, and marketing — everything your business needs to scale, under one roof.</p>
        <div className="hero-actions reveal">
          <a href="#contact" className="btn btn-primary btn-lg">Start Your Project</a>
          <a href="#services" className="btn btn-ghost btn-lg">Explore Services</a>
        </div>
        <div className="hero-stats reveal">
          {stats.map(s => (
            <div className="stat" key={s.label}>
              <div className="stat-value">
                <span className="stat-num"><Counter target={s.target} /></span>
                {s.suffix && <span className="stat-suffix">{s.suffix}</span>}
              </div>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="scroll-hint" aria-hidden="true"><span></span></div>
    </section>
  )
}
