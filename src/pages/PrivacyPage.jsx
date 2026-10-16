import { usePageSeo } from '../lib/seo.js'

export default function PrivacyPage() {
  usePageSeo({
    title: 'Privacy Policy | AQEVORIN AI Agency',
    description: 'How AQEVORIN AI Agency collects, uses, and protects your information.',
    path: '#/privacy',
  })
  return (
    <main className="detail-page">
      <section className="section">
        <div className="container legal-page reveal">
          <span className="section-tag">Legal</span>
          <h1 className="section-title">Privacy Policy</h1>
          <p className="section-sub">Last updated: October 2026</p>
          <div className="legal-body">
            <h2>1. What we collect</h2>
            <p>When you contact us, we collect the details you share — your name, email address, phone number, company, and project requirements. We also collect basic anonymous analytics (pages visited, device type) to improve the website.</p>
            <h2>2. How we use it</h2>
            <p>Your details are used only to respond to your enquiry, prepare quotes, and deliver projects. We never sell your data, and we never share it with third parties for marketing.</p>
            <h2>3. Data storage</h2>
            <p>Enquiries are stored securely in our private database with access restricted to the AQEVORIN team. You can ask us to view, correct, or delete your data at any time by writing to hello@aqevorin.ai.</p>
            <h2>4. Cookies</h2>
            <p>We use a minimal set of cookies for theme preferences and anonymous analytics. No advertising trackers.</p>
            <h2>5. Contact</h2>
            <p>Questions about this policy? Email <a href="mailto:hello@aqevorin.ai">hello@aqevorin.ai</a> — we reply within 24 hours.</p>
          </div>
        </div>
      </section>
    </main>
  )
}
