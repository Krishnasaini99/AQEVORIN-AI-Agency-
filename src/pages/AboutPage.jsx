import { useEffect } from 'react'
import { useSection } from '../context/ContentContext.jsx'
import CTA from '../components/CTA.jsx'

const icons = {
  target: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1.4" />
    </svg>
  ),
  users: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 20v-1.5a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4V20" /><circle cx="9" cy="7.5" r="3.5" /><path d="M22 20v-1.5a4 4 0 0 0-3-3.87" /><path d="M16 4.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  eye: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" /><circle cx="12" cy="12" r="3" />
    </svg>
  ),
  zap: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8z" />
    </svg>
  ),
  shield: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 11 2.2 2.2L15.5 9" />
    </svg>
  ),
  heart: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.8 5.6a5.2 5.2 0 0 0-7.4 0L12 7l-1.4-1.4a5.2 5.2 0 1 0-7.4 7.4L12 21.4l8.8-8.4a5.2 5.2 0 0 0 0-7.4z" />
    </svg>
  ),
}

export default function AboutPage() {
  const about = useSection('about')
  const { hero, story, mission, vision, values, milestones, process, stats } = about

  useEffect(() => {
    document.title = 'About AQEVORIN | AI Agency Team, Mission & Values'
    const desc = document.querySelector('meta[name="description"]')
    const prev = desc ? desc.content : null
    if (desc) desc.content = 'Meet AQEVORIN — an AI-first agency uniting AI engineering, design, marketing, and video. Our story, mission, values, and the process behind 120+ delivered projects.'
    return () => {
      document.title = 'AQEVORIN AI Agency | AI Solutions, Graphic Design, Digital Marketing & Video Creation'
      if (desc && prev !== null) desc.content = prev
    }
  }, [])

  return (
    <main className="about-page">
      {/* Header */}
      <section className="contact-hero">
        <div className="hero-bg" aria-hidden="true">
          <div className="orb orb-1"></div>
          <div className="orb orb-2"></div>
          <div className="grid-overlay"></div>
        </div>
        <div className="container contact-hero-content">
          <span className="section-tag">{hero.tag}</span>
          <h1 className="section-title">{hero.title}<span className="gradient-text">{hero.titleAccent}</span></h1>
          <p className="section-sub">{hero.intro}</p>
          <div className="contact-pills">
            {hero.pills.map(p => <span className="contact-pill" key={p}>{p}</span>)}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section">
        <div className="container about-story">
          <div className="story-copy reveal">
            <span className="section-tag">{story.tag}</span>
            <h2 className="section-title">{story.title}<span className="gradient-text">{story.titleAccent}</span></h2>
            {story.paragraphs.map((p, i) => <p className="story-p" key={i}>{p}</p>)}
            <blockquote className="story-quote">
              <p>“{story.quote}”</p>
              <cite>— {story.quoteBy}</cite>
            </blockquote>
          </div>
          <div className="story-side">
            <div className="mv-card reveal">
              <span className="mv-tag">{mission.tag}</span>
              <h3>{mission.title}</h3>
              <p>{mission.desc}</p>
            </div>
            <div className="mv-card mv-card-accent reveal">
              <span className="mv-tag">{vision.tag}</span>
              <h3>{vision.title}</h3>
              <p>{vision.desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-head reveal">
            <span className="section-tag">What Drives Us</span>
            <h2 className="section-title">Values we <span className="gradient-text">refuse to compromise.</span></h2>
            <p className="section-sub">Six principles that shape every proposal, sprint, and shipped result.</p>
          </div>
          <div className="values-grid">
            {values.map(v => (
              <div className="value-card reveal" key={v.title}>
                <span className="value-icon">{icons[v.icon] || icons.target}</span>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="section">
        <div className="container">
          <div className="section-head reveal">
            <span className="section-tag">Our Journey</span>
            <h2 className="section-title">From studio to <span className="gradient-text">agent-powered agency.</span></h2>
            <p className="section-sub">Eight years of deliberate evolution — each step earning the next.</p>
          </div>
          <div className="timeline">
            {milestones.map(m => (
              <div className="timeline-item reveal" key={m.year}>
                <span className="timeline-year">{m.year}</span>
                <span className="timeline-dot" aria-hidden="true"></span>
                <div className="timeline-body">
                  <h3>{m.title}</h3>
                  <p>{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section section-alt">
        <div className="container">
          <div className="section-head reveal">
            <span className="section-tag">How We Work</span>
            <h2 className="section-title">A process built for <span className="gradient-text">momentum.</span></h2>
            <p className="section-sub">Transparent from kickoff to compounding results.</p>
          </div>
          <div className="process-grid">
            {process.map(s => (
              <div className="process-step reveal" key={s.num}>
                <span className="process-num">{s.num}</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="about-stats reveal">
            {stats.map(s => (
              <div className="stat" key={s.label}>
                <div className="stat-value">
                  <span className="stat-num">{s.target}</span>
                  {s.suffix && <span className="stat-suffix">{s.suffix}</span>}
                </div>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </main>
  )
}
