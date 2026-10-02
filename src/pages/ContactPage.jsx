import { useState } from 'react'
import SocialLinks from '../components/SocialLinks.jsx'

const serviceOptions = [
  'AI Consulting',
  'Machine Learning Engineering',
  'Data Science & Analytics',
  'Generative AI & LLMs',
  'AI Automation',
  'Managed AI Services',
  'Graphic Design Agent (All Types)',
  'Digital Marketing Agent (All Types)',
  'Video Creation Agent (All Types)',
  "Not Sure? Need Guidance",
]

const stageOptions = [
  'New idea',
  'Existing business, no AI system',
  'Existing system needs improvement',
]

const budgetOptions = [
  '₹ Below 50,000',
  '₹ 50,000 – ₹ 1.5 lakh',
  '₹ 1.5 lakh – ₹ 5 lakh',
  '₹ 5 lakh+',
  'Not sure about the budget? Help me estimate.',
]

const timelineOptions = ['Within 1 month', '1 – 3 months', '3+ months', 'Flexible']

const nextSteps = [
  { num: '01', title: 'We review your requirement', desc: 'We review the information you share and understand the business context.' },
  { num: '02', title: 'We contact you for clarification', desc: 'When needed, we connect with you to clarify details and understand the goal better.' },
  { num: '03', title: 'You receive a recommended next step', desc: 'We suggest the most practical approach, delivery path, and initial estimated range.' },
]

function ChoiceGroup({ label, number, options, value, onChange }) {
  return (
    <div className="choice-group">
      <h3 className="choice-label"><span className="choice-num">{number}.</span> {label}</h3>
      <div className="choice-grid">
        {options.map(opt => (
          <button
            type="button"
            key={opt}
            className={`choice-chip ${value === opt ? 'selected' : ''}`}
            onClick={() => onChange(opt)}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  )
}

export default function ContactPage() {
  const [step, setStep] = useState(1)
  const [answers, setAnswers] = useState({ service: '', stage: '', budget: '', timeline: '' })
  const [details, setDetails] = useState({ name: '', email: '', phone: '', company: '', message: '' })
  const [note, setNote] = useState('')
  const [sent, setSent] = useState(false)

  const setAnswer = (key, val) => setAnswers(a => ({ ...a, [key]: val }))

  const handleContinue = () => {
    if (!answers.service || !answers.stage || !answers.budget || !answers.timeline) {
      setNote('Please select an option in all four sections.')
      return
    }
    setNote('')
    setStep(2)
    window.scrollTo({ top: 200, behavior: 'smooth' })
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (!details.name.trim() || !details.email.trim() || !details.message.trim()) {
      setNote('Please fill in name, email, and project details.')
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(details.email)) {
      setNote('Please enter a valid email address.')
      return
    }
    setNote('')
    setSent(true)
    window.scrollTo({ top: 200, behavior: 'smooth' })
  }

  return (
    <main className="contact-page">
      {/* Header */}
      <section className="contact-hero">
        <div className="hero-bg" aria-hidden="true">
          <div className="orb orb-1"></div>
          <div className="orb orb-2"></div>
          <div className="grid-overlay"></div>
        </div>
        <div className="container contact-hero-content">
          <span className="section-tag">Start a Project</span>
          <h1 className="section-title">Tell us what you want to <span className="gradient-text">build.</span></h1>
          <p className="section-sub">Share your business goal, current process, and approximate budget. We'll review the requirement and suggest the most practical next step.</p>
          <div className="contact-pills">
            <span className="contact-pill">AI, design, marketing &amp; video projects</span>
            <span className="contact-pill">No technical jargon</span>
            <span className="contact-pill">Response within 24 hours</span>
            <span className="contact-pill">Built for serious project discussions</span>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="section">
        <div className="container contact-grid">
          <div className="contact-form-panel">
            {/* Progress */}
            <div className="steps-progress">
              <button type="button" className={`step-tab ${step === 1 ? 'active' : ''}`} onClick={() => setStep(1)}>
                <span className="step-tab-num">1</span> Step 1: Project Overview
              </button>
              <button type="button" className={`step-tab ${step === 2 ? 'active' : ''}`} onClick={() => setStep(2)} disabled={!answers.service}>
                <span className="step-tab-num">2</span> Step 2: Contact &amp; Requirement
              </button>
            </div>

            {sent ? (
              <div className="contact-success">
                <div className="success-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
                </div>
                <h3>Thank you, {details.name.trim()}!</h3>
                <p>Your requirement has been received. We'll review it and get back to you within 24 hours with a clear next step.</p>
                <div className="success-summary">
                  <span><strong>Service:</strong> {answers.service}</span>
                  <span><strong>Budget:</strong> {answers.budget}</span>
                  <span><strong>Timeline:</strong> {answers.timeline}</span>
                </div>
              </div>
            ) : step === 1 ? (
              <div className="step-panel">
                <ChoiceGroup number="1" label="What are you looking for?" options={serviceOptions} value={answers.service} onChange={v => setAnswer('service', v)} />
                <ChoiceGroup number="2" label="Current stage" options={stageOptions} value={answers.stage} onChange={v => setAnswer('stage', v)} />
                <ChoiceGroup number="3" label="Approximate budget" options={budgetOptions} value={answers.budget} onChange={v => setAnswer('budget', v)} />
                <ChoiceGroup number="4" label="Expected timeline" options={timelineOptions} value={answers.timeline} onChange={v => setAnswer('timeline', v)} />
                {note && <p className="form-note form-note-error" role="alert">{note}</p>}
                <button type="button" className="btn btn-primary btn-lg btn-full" onClick={handleContinue}>
                  Continue to Project Details →
                </button>
              </div>
            ) : (
              <form className="step-panel" onSubmit={handleSubmit} noValidate>
                <h3 className="choice-label"><span className="choice-num">5.</span> Your contact details</h3>
                <div className="form-row">
                  <input type="text" placeholder="Your Name *" value={details.name} onChange={e => setDetails({ ...details, name: e.target.value })} aria-label="Your name" />
                  <input type="email" placeholder="Work Email *" value={details.email} onChange={e => setDetails({ ...details, email: e.target.value })} aria-label="Work email" />
                </div>
                <div className="form-row">
                  <input type="tel" placeholder="Phone (optional)" value={details.phone} onChange={e => setDetails({ ...details, phone: e.target.value })} aria-label="Phone" />
                  <input type="text" placeholder="Company (optional)" value={details.company} onChange={e => setDetails({ ...details, company: e.target.value })} aria-label="Company" />
                </div>
                <textarea rows="5" placeholder="Describe your project in simple words... *" value={details.message} onChange={e => setDetails({ ...details, message: e.target.value })} aria-label="Project details" />
                <div className="form-recap">
                  <span><strong>Looking for:</strong> {answers.service}</span>
                  <span><strong>Stage:</strong> {answers.stage}</span>
                  <span><strong>Budget:</strong> {answers.budget}</span>
                  <span><strong>Timeline:</strong> {answers.timeline}</span>
                </div>
                {note && <p className="form-note form-note-error" role="alert">{note}</p>}
                <div className="form-actions">
                  <button type="button" className="btn btn-ghost" onClick={() => setStep(1)}>← Back</button>
                  <button type="submit" className="btn btn-primary btn-lg btn-grow">Submit Requirement</button>
                </div>
              </form>
            )}
          </div>

          {/* What happens next */}
          <aside className="next-panel">
            <h3 className="next-title">What happens next</h3>
            <p className="next-sub">A clear next step after you submit</p>
            <div className="next-list">
              {nextSteps.map(s => (
                <div className="next-item" key={s.num}>
                  <span className="next-num">{s.num}</span>
                  <div>
                    <h4>{s.title}</h4>
                    <p>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="next-contact">
              <h4>Prefer direct contact?</h4>
              <a href="mailto:hello@aqevorin.ai">hello@aqevorin.ai</a>
              <a href="tel:+919876543210">+91 98765 43210</a>
              <span>India · Remote Worldwide</span>
              <div className="next-social">
                <h5>Connect on social</h5>
                <SocialLinks />
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Bottom note */}
      <section className="section section-alt contact-note">
        <div className="container contact-note-inner reveal">
          <div>
            <h2 className="section-title">Share your requirement in <span className="gradient-text">simple words.</span></h2>
            <p className="section-sub">We'll review it, contact you if anything needs clarification, and then suggest the right next step.</p>
          </div>
          <a href="#/contact" className="btn btn-primary btn-lg" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Start a Project</a>
        </div>
      </section>
    </main>
  )
}
