import { useSection } from '../context/ContentContext.jsx'

const icons = {
  'ai-consulting': <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a7 7 0 0 1 7 7c0 2.4-1.2 4.5-3 5.7V17a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-2.3C6.2 13.5 5 11.4 5 9a7 7 0 0 1 7-7z"/><path d="M9 21h6"/></svg>,
  'machine-learning-engineering': <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M9 9h6v6H9z"/><path d="M9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3"/></svg>,
  'data-science-analytics': <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>,
  'generative-ai-llms': <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l8.5 4.5v9L12 20l-8.5-4.5v-9z"/><path d="M12 11l8.5-4.5M12 11v9M12 11L3.5 6.5"/></svg>,
  'ai-automation': <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>,
  'managed-ai-services': <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="M7 15l4-4 3 3 5-6"/></svg>,
  'graphic-design-agent': <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/></svg>,
  'digital-marketing-agent': <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 11l18-7-7 18-2.5-7.5z"/><path d="M11.5 12.5L21 4"/></svg>,
  'video-creation-agent': <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg>
}

const accentSlugs = new Set(['graphic-design-agent', 'digital-marketing-agent', 'video-creation-agent'])

export default function Services() {
  const { services } = useSection('services')
  return (
    <section className="section" id="services">
      <div className="container">
        <div className="section-head reveal">
          <span className="section-tag">What We Do</span>
          <h2 className="section-title">Everything Your Business Needs, <span className="gradient-text">All Types of Agents</span></h2>
          <p className="section-sub">AI solutions, creative design, digital marketing, and video creation — a full stack of expert agents for every need.</p>
        </div>
        <div className="services-grid">
          {services.map(s => (
            <a
              href={`#/services/${s.slug}`}
              className={`service-card reveal ${accentSlugs.has(s.slug) ? 'service-card-accent' : ''}`}
              key={s.slug}
              aria-label={`${s.title} - learn more`}
            >
              <div className="service-thumb"><img src={s.img} alt={s.title} loading="lazy" /></div>
              <div className="service-icon">{icons[s.slug]}</div>
              <h3>{s.title}</h3>
              <p>{s.tagline}</p>
              <span className="card-link">Learn more <span aria-hidden="true">&rarr;</span></span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
