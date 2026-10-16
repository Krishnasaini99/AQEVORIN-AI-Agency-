import { useState } from 'react'
import { useSection } from '../context/ContentContext.jsx'

export default function Faq() {
  const { faq = [] } = useSection('home')
  const [open, setOpen] = useState(0)
  if (!faq.length) return null
  return (
    <section className="section faq-section" id="faq">
      <div className="container">
        <span className="section-tag reveal">FAQ</span>
        <h2 className="section-title reveal">
          Questions? <span className="gradient-text">Answered.</span>
        </h2>
        <p className="section-sub reveal">Everything founders usually ask before starting a project with us.</p>
        <div className="faq-list">
          {faq.map((item, i) => {
            const isOpen = open === i
            return (
              <div className={`faq-item reveal ${isOpen ? 'open' : ''}`} key={i}>
                <button
                  className="faq-question"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                >
                  <span>{item.q}</span>
                  <span className="faq-icon" aria-hidden="true">{isOpen ? '−' : '+'}</span>
                </button>
                {isOpen && <p className="faq-answer">{item.a}</p>}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
