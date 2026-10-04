import DetailHero from '../components/DetailHero.jsx'
import DetailCTA from '../components/DetailCTA.jsx'
import { useSection } from '../context/ContentContext.jsx'

export default function BlogDetail({ slug }) {
  const { posts } = useSection('blog')
  const contact = useSection('contact')
  const post = posts.find(p => p.slug === slug)

  if (!post) {
    return (
      <main className="detail-page">
        <DetailHero tag="Not Found" title="Article not found" intro="This blog post does not exist." />
        <DetailCTA text="Read more from our blog" />
      </main>
    )
  }

  const others = posts.filter(p => p.slug !== slug)

  return (
    <main className="detail-page">
      <DetailHero
        tag={post.cat}
        title={post.title}
        intro={post.excerpt}
        meta={[post.date, post.read, 'AQEVORIN AI Agency']}
      />

      {/* Article thumb */}
      <section className="section detail-media">
        <div className="container">
          <div className={`blog-thumb ${post.thumb} detail-article-thumb reveal`}>
            <img src={post.img} alt={post.title} loading="lazy" />
            <span className="blog-cat">{post.cat}</span>
          </div>
        </div>
      </section>

      {/* Article body */}
      <section className="section section-alt">
        <div className="container detail-layout">
          <article className="detail-content">
            <p className="detail-lead">{post.intro}</p>

            <div className="takeaway-box">
              <h3>Key takeaways</h3>
              <ul>
                {post.takeaways.map(t => <li key={t}>{t}</li>)}
              </ul>
            </div>

            {post.sections.map(sec => (
              <section key={sec.heading} className="detail-section">
                <h2 className="detail-h2">{sec.heading}</h2>
                {sec.body.map((p, i) => <p key={i}>{p}</p>)}
              </section>
            ))}

            <div className="article-share">
              <span>Share this article:</span>
              <a href="#/contact">Talk to us about it →</a>
            </div>
          </article>

          <aside className="detail-sidebar">
            <div className="sidebar-card">
              <h3>Get started</h3>
              <p>Have a project inspired by this? Let's discuss it.</p>
              <a href="#/contact" className="btn btn-primary btn-full">Start a Project</a>
              <a href={'mailto:' + contact.email} className="sidebar-link">{contact.email}</a>
            </div>
            <div className="sidebar-card">
              <h3>More articles</h3>
              <div className="sidebar-links">
                {others.map(o => (
                  <a key={o.slug} href={`#/blog/${o.slug}`}>{o.title} →</a>
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
