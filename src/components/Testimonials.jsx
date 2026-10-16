import { useSection } from '../context/ContentContext.jsx'

function Stars() {
  return (
    <div className="t-stars" aria-label="5 out of 5 stars">
      {[0, 1, 2, 3, 4].map(i => (
        <svg key={i} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2l2.9 6.26 6.6.57-5 4.36 1.5 6.45L12 16.9 5.99 19.64l1.5-6.45-5-4.36 6.6-.57z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  const { testimonials = [] } = useSection('home')
  if (!testimonials.length) return null
  return (
    <section className="section testimonials-section" id="testimonials">
      <div className="container">
        <span className="section-tag reveal">Client Love</span>
        <h2 className="section-title reveal">
          Results our clients <span className="gradient-text">brag about.</span>
        </h2>
        <p className="section-sub reveal">Real partnerships, real numbers — in our clients' own words.</p>
        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <article className="testimonial-card reveal" key={i}>
              <Stars />
              <p className="testimonial-quote">“{t.quote}”</p>
              <div className="testimonial-author">
                <span className="testimonial-avatar" aria-hidden="true">
                  {(t.name || '?').trim().charAt(0).toUpperCase()}
                </span>
                <div>
                  <div className="testimonial-name">{t.name}</div>
                  <div className="testimonial-role">{t.role}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
