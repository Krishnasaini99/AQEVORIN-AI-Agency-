import { useSection } from '../context/ContentContext.jsx'

export default function Blog() {
  const { posts } = useSection('blog')
  return (
    <section className="section section-alt" id="blog">
      <div className="container">
        <div className="section-head reveal">
          <span className="section-tag">Insights</span>
          <h2 className="section-title">Latest From Our <span className="gradient-text">Blog</span></h2>
          <p className="section-sub">Thinking on AI, design, marketing, and building digital products that grow.</p>
        </div>
        <div className="blog-grid">
          {posts.map(p => (
            <a
              href={`#/blog/${p.slug}`}
              className="blog-card reveal"
              key={p.slug}
              aria-label={`Read article: ${p.title}`}
            >
              <div className={`blog-thumb ${p.thumb}`}>
                <img src={p.img} alt={p.title} loading="lazy" />
                <span className="blog-cat">{p.cat}</span>
              </div>
              <div className="blog-body">
                <div className="blog-meta"><span>{p.date}</span><span>{p.read}</span></div>
                <h3>{p.title}</h3>
                <p>{p.excerpt}</p>
                <span className="card-link">Read article <span aria-hidden="true">&rarr;</span></span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
