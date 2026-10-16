import { usePageSeo } from '../lib/seo.js'

export default function TermsPage() {
  usePageSeo({
    title: 'Terms of Service | AQEVORIN AI Agency',
    description: 'The terms governing projects and services delivered by AQEVORIN AI Agency.',
    path: '#/terms',
  })
  return (
    <main className="detail-page">
      <section className="section">
        <div className="container legal-page reveal">
          <span className="section-tag">Legal</span>
          <h1 className="section-title">Terms of Service</h1>
          <p className="section-sub">Last updated: October 2026</p>
          <div className="legal-body">
            <h2>1. Services</h2>
            <p>AQEVORIN AI Agency provides AI solutions, graphic design, digital marketing, and video creation services as agreed in each project proposal or quote.</p>
            <h2>2. Quotes &amp; payment</h2>
            <p>Every project begins with a fixed written quote. Work starts after written approval and any agreed advance. Invoices are payable within 7 days unless stated otherwise.</p>
            <h2>3. Ownership</h2>
            <p>On full payment, you own 100% of the deliverables — code, designs, models, and content — including source files and documentation.</p>
            <h2>4. Timelines</h2>
            <p>Timelines in a quote are good-faith estimates. Delays caused by pending client inputs extend delivery by the same period.</p>
            <h2>5. Confidentiality</h2>
            <p>Everything you share with us — data, ideas, documents — stays confidential and is never reused for other clients.</p>
            <h2>6. Contact</h2>
            <p>Questions about these terms? Email <a href="mailto:hello@aqevorin.ai">hello@aqevorin.ai</a>.</p>
          </div>
        </div>
      </section>
    </main>
  )
}
