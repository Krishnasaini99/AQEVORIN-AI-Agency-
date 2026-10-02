import { useEffect } from 'react'

export default function DetailHero({ tag, title, intro, meta }) {
  useEffect(() => {
    document.title = `${title} | AQEVORIN AI Agency`
    return () => { document.title = 'AQEVORIN AI Agency | AI Solutions, Graphic Design, Digital Marketing & Video Creation' }
  }, [title])

  return (
    <section className="detail-hero">
      <div className="hero-bg" aria-hidden="true">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="grid-overlay"></div>
      </div>
      <div className="container detail-hero-content">
        <a href="#home" className="back-link">← Back to Home</a>
        <span className="section-tag">{tag}</span>
        <h1 className="detail-title">{title}</h1>
        <p className="detail-intro">{intro}</p>
        {meta && <div className="detail-meta">{meta.map((m, i) => <span key={i}>{m}</span>)}</div>}
      </div>
    </section>
  )
}
