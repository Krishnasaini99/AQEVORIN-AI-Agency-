import { projects } from '../data/portfolio.js'

export default function Portfolio() {
  return (
    <section className="section" id="portfolio">
      <div className="container">
        <div className="section-head reveal">
          <span className="section-tag">Portfolio</span>
          <h2 className="section-title">Work That <span className="gradient-text">Speaks for Itself</span></h2>
          <p className="section-sub">A selection of projects where we turned ambitious ideas into shipped products.</p>
        </div>
        <div className="portfolio-grid">
          {projects.map(p => (
            <a
              href={`#/portfolio/${p.slug}`}
              className="portfolio-card reveal"
              key={p.slug}
              aria-label={`View case study: ${p.title}`}
            >
              <div className={`portfolio-thumb ${p.thumb}`}>
                <img src={p.img} alt={p.title} loading="lazy" />
                <span className="portfolio-cat">{p.cat}</span>
              </div>
              <div className="portfolio-body">
                <h3>{p.title}</h3>
                <p>{p.excerpt}</p>
                <div className="portfolio-tags">{p.tags.map(t => <span key={t}>{t}</span>)}</div>
                <span className="card-link portfolio-link">View case study <span aria-hidden="true">&rarr;</span></span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
