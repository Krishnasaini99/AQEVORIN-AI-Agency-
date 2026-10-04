import { useSection } from '../context/ContentContext.jsx'

export default function DetailCTA({ text = 'Ready to start a project like this?' }) {
  const contact = useSection('contact')
  return (
    <section className="detail-cta">
      <div className="container detail-cta-inner">
        <div>
          <h2>{text}</h2>
          <p>Share your requirement in simple words — we'll review it and suggest the most practical next step within 24 hours.</p>
        </div>
        <div className="detail-cta-actions">
          <a href="#/contact" className="btn btn-primary btn-lg">Start a Project ↗</a>
          <a href={'mailto:' + contact.email} className="btn btn-ghost btn-lg">Email Us</a>
        </div>
      </div>
    </section>
  )
}
