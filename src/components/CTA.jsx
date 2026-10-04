import { useSection } from '../context/ContentContext.jsx'

export default function CTA() {
  const { cta } = useSection('home')
  return (
    <section className="cta-section" id="contact">
      <div className="container">
        <div className="cta-box reveal">
          <div className="cta-text">
            <h2>{cta.heading}</h2>
            <p>{cta.text}</p>
          </div>
          <div className="cta-actions">
            <a href={cta.primary?.href || '#/contact'} className="btn btn-primary btn-lg">{cta.primary?.label}</a>
            <a href={cta.secondary?.href || 'mailto:hello@aqevorin.ai'} className="btn btn-ghost btn-lg">{cta.secondary?.label}</a>
          </div>
        </div>
      </div>
    </section>
  )
}
