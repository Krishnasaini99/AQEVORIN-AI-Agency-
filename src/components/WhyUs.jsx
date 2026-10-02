const points = [
  { title: 'You own the IP', desc: 'We build it, you own the intellectual property — always.' },
  { title: 'Responsible & Ethical AI', desc: 'Built to ISO 27001 infosec standards with responsible AI frameworks.' },
  { title: 'Trusted at Scale', desc: 'Delivered with over 95% confidence, monitored in production.' },
  { title: 'End-to-End Ownership', desc: 'From strategy to delivery and beyond — we own what we ship.' },
]

export default function WhyUs() {
  return (
    <section className="section section-alt" id="why">
      <div className="container why-grid">
        <div className="why-content reveal">
          <span className="section-tag">Why AQEVORIN</span>
          <h2 className="section-title">Your Trusted Partner for <span className="gradient-text">Production-Grade AI</span></h2>
          <p className="section-sub">We don't just build — we deliver systems and creative work that survive contact with the real world.</p>
          <ul className="why-list">
            {points.map(p => (
              <li key={p.title}>
                <span className="why-check" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
                </span>
                <div><strong>{p.title}</strong><p>{p.desc}</p></div>
              </li>
            ))}
          </ul>
        </div>
        <div className="why-visual reveal">
          <div className="code-card">
            <div className="code-dots"><span></span><span></span><span></span></div>
            <pre><code><span className="c-k">const</span> <span className="c-f">growth</span> = <span className="c-k">await</span> aqevorin.<span className="c-f">launch</span>({'{'}
  ai: <span className="c-s">"production-grade"</span>,
  design: <span className="c-s">"all-types"</span>,
  marketing: <span className="c-s">"data-driven"</span>,
  video: <span className="c-s">"cinematic"</span>
{'}'});

growth.<span className="c-f">scale</span>({'{'} globally: <span className="c-k">true</span> {'}'});</code></pre>
          </div>
          <div className="float-chip chip-1">97.2% Accuracy</div>
          <div className="float-chip chip-2">Deployed to prod</div>
        </div>
      </div>
    </section>
  )
}
