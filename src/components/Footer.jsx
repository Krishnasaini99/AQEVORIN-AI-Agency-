import SocialLinks from './SocialLinks.jsx'
import { useSection } from '../context/ContentContext.jsx'

export default function Footer() {
  const contact = useSection('contact')
  const { services } = useSection('services')
  const footerServices = (services || []).slice(0, 5)
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#home" className="brand">
              <img src="/assets/logo-icon.svg" alt="AQEVORIN AI logo" className="brand-icon" />
              <span className="brand-text">AQEVORIN <span className="brand-accent">AI</span></span>
            </a>
            <p>Intelligence That Moves Business Forward. AI solutions, creative agents, and digital growth — all under one roof.</p>
            <SocialLinks />
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            {footerServices.map(s => (
              <a href="#services" key={s.slug}>{s.title}</a>
            ))}
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <a href="#home">Home</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#blog">Blog</a>
            <a href="#/about">About Us</a>
            <a href="#/contact">Contact</a>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <a href={'mailto:' + contact.email}>{contact.email}</a>
            <a href={'tel:' + contact.phone.replace(/\s/g, '')}>{contact.phone}</a>
            <span>India · Remote Worldwide</span>
            <a href="#/contact" className="footer-enquiry">Send a project enquiry →</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 AQEVORIN AI Agency. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
