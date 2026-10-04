import { useSection } from '../context/ContentContext.jsx'
import { socialIcons } from './SocialLinks.jsx'

// Floating WhatsApp button — fixed bottom-right, visible on every page
export default function SocialFab() {
  const { socialLinks } = useSection('social')
  return (
    <a
      className="whatsapp-fab"
      href={socialLinks.whatsapp?.url || '#/contact'}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      title="Chat on WhatsApp"
    >
      {socialIcons.whatsapp}
    </a>
  )
}
