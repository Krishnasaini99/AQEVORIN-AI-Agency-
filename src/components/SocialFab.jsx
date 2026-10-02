import { socialLinks } from '../data/social.js'
import { socialIcons } from './SocialLinks.jsx'

// Floating WhatsApp button — fixed bottom-right, visible on every page
export default function SocialFab() {
  return (
    <a
      className="whatsapp-fab"
      href={socialLinks.whatsapp.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      title="Chat on WhatsApp"
    >
      {socialIcons.whatsapp}
    </a>
  )
}
