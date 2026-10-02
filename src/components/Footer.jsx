import SocialLinks from './SocialLinks.jsx'

export default function Footer() {
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
            <a href="#services">AI Consulting</a>
            <a href="#services">Machine Learning</a>
            <a href="#services">Graphic Design Agent</a>
            <a href="#services">Digital Marketing Agent</a>
            <a href="#services">Video Creation Agent</a>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <a href="#home">Home</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#blog">Blog</a>
            <a href="#why">About Us</a>
            <a href="#/contact">Contact</a>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <a href="mailto:hello@aqevorin.ai">hello@aqevorin.ai</a>
            <a href="tel:+919876543210">+91 98765 43210</a>
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
