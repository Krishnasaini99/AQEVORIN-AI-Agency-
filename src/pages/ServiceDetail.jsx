import DetailHero from '../components/DetailHero.jsx'
import DetailCTA from '../components/DetailCTA.jsx'
import { useSection } from '../context/ContentContext.jsx'

export default function ServiceDetail({ slug }) {
  const { services } = useSection('services')
  const contact = useSection('contact')
  const service = services.find(s => s.slug === slug)

  if (!service) {
    return (
      <main className="detail-page">
        <DetailHero tag="Not Found" title="Service not found" intro="This service page does not exist." />
        <DetailCTA text="Browse our services from the home page" />
      </main>
    )
  }

  const others = services.filter(s => s.slug !== slug).slice(0, 3)

  return (
    <main className="detail-page">
      <DetailHero
        tag="Our Service"
        title={service.title}
        intro={service.tagline}
        meta={['AQEVORIN AI Agency', 'Production-grade delivery', '24h response']}
      />

      {/* Service image */}
      <section className="section detail-media">
        <div className="container">
          <div className="detail-image reveal">
            <img src={service.img} alt={service.title} />
          </div>
        </div>
      </section>

      {/* Intro + features */}
      <section className="section section-alt">
        <div className="container detail-layout">
          <article className="detail-content">
            <p className="detail-lead">{service.intro}</p>

            <h2 className="detail-h2">What you get</h2>
            <ul className="feature-list">
              {service.features.map(f => (
                <li key={f}>
                  <span className="why-check" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
                  </span>
                  {f}
                </li>
              ))}
            </ul>

            {service.sections.map(sec => (
              <section key={sec.heading} className="detail-section">
                <h2 className="detail-h2">{sec.heading}</h2>
                <p>{sec.body}</p>
              </section>
            ))}

            <h2 className="detail-h2">Deliverables</h2>
            <div className="deliverable-chips">
              {service.deliverables.map(d => <span key={d}>{d}</span>)}
            </div>
          </article>

          <aside className="detail-sidebar">
            <div className="sidebar-card">
              <h3>Get started</h3>
              <p>Tell us what you need — we'll reply within 24 hours with scope and next steps.</p>
              <a href="#/contact" className="btn btn-primary btn-full">Request a Consultation</a>
              <a href={'mailto:' + contact.email} className="sidebar-link">{contact.email}</a>
              <a href={'tel:' + contact.phone.replace(/\s/g, '')} className="sidebar-link">{contact.phone}</a>
            </div>
            <div className="sidebar-card">
              <h3>Related services</h3>
              <div className="sidebar-links">
                {others.map(o => (
                  <a key={o.slug} href={`#/services/${o.slug}`}>{o.title} →</a>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      <DetailCTA />
    </main>
  )
}
