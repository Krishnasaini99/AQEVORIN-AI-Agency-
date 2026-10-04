import DetailHero from '../components/DetailHero.jsx'
import DetailCTA from '../components/DetailCTA.jsx'
import { useSection } from '../context/ContentContext.jsx'
import { usePageSeo } from '../lib/seo.js'

export default function PortfolioDetail({ slug }) {
  const { projects } = useSection('portfolio')
  const contact = useSection('contact')
  const project = projects.find(p => p.slug === slug)
  usePageSeo({
    title: project ? `${project.title} | AQEVORIN AI Agency Work` : 'Project not found | AQEVORIN AI Agency',
    description: project?.excerpt,
    path: `#/portfolio/${slug}`,
  })

  if (!project) {
    return (
      <main className="detail-page">
        <DetailHero tag="Not Found" title="Project not found" intro="This portfolio page does not exist." />
        <DetailCTA text="See what we can build for you" />
      </main>
    )
  }

  const others = projects.filter(p => p.slug !== slug).slice(0, 4)

  return (
    <main className="detail-page">
      <DetailHero
        tag={project.cat}
        title={project.title}
        intro={project.excerpt}
        meta={[project.client, ...project.tags]}
      />

      {/* Project thumb + results */}
      <section className="section detail-media">
        <div className="container">
          <div className={`portfolio-thumb ${project.thumb} detail-project-thumb reveal`}>
            <img src={project.img} alt={project.title} loading="lazy" />
            <span className="portfolio-cat">{project.cat}</span>
          </div>
          <div className="result-grid reveal">
            {project.results.map(r => (
              <div className="result-card" key={r.label}>
                <span className="result-value">{r.value}</span>
                <span className="result-label">{r.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case study */}
      <section className="section section-alt">
        <div className="container detail-layout">
          <article className="detail-content">
            <section className="detail-section">
              <h2 className="detail-h2">The challenge</h2>
              <p>{project.challenge}</p>
            </section>
            <section className="detail-section">
              <h2 className="detail-h2">Our approach</h2>
              <p>{project.approach}</p>
            </section>
            <section className="detail-section">
              <h2 className="detail-h2">Results</h2>
              <ul className="feature-list">
                {project.results.map(r => (
                  <li key={r.label}>
                    <span className="why-check" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
                    </span>
                    <strong>{r.value}</strong>&nbsp;— {r.label}
                  </li>
                ))}
              </ul>
            </section>

            <div className="tech-chips">
              {project.tech.map(t => <span key={t}>{t}</span>)}
            </div>

            {project.quote && (
              <blockquote className="project-quote">
                <p>"{project.quote}"</p>
                <cite>— {project.client}</cite>
              </blockquote>
            )}
          </article>

          <aside className="detail-sidebar">
            <div className="sidebar-card">
              <h3>Want results like these?</h3>
              <p>Tell us your goal — we'll come back with a practical plan within 24 hours.</p>
              <a href="#/contact" className="btn btn-primary btn-full">Start a Project</a>
              <a href={'mailto:' + contact.email} className="sidebar-link">{contact.email}</a>
            </div>
            <div className="sidebar-card">
              <h3>More work</h3>
              <div className="sidebar-links">
                {others.map(o => (
                  <a key={o.slug} href={`#/portfolio/${o.slug}`}>{o.title} →</a>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      <DetailCTA text="Let's build your success story" />
    </main>
  )
}
