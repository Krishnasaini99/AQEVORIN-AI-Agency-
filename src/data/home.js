// Home page content — editable from the admin panel (#/admin → Home)
export const home = {
  hero: {
    badge: 'AI Agency · Creative Agents · Digital Growth',
    title: 'Intelligence That',
    titleAccent: 'Moves Business Forward.',
    sub: 'We build AI systems, creative agents, and digital growth engines — strategy, design, video, and marketing — everything your business needs to scale, under one roof.',
    primary: { label: 'Start Your Project', href: '#contact' },
    secondary: { label: 'Explore Services', href: '#services' },
    video: '/assets/hero-loop.mp4',
    stats: [
      { target: 120, suffix: '', label: 'Projects Delivered' },
      { target: 95, suffix: '%', label: 'Client Satisfaction' },
      { target: 40, suffix: '+', label: 'Expert Agents' },
      { target: 8, suffix: '+', label: 'Years Experience' },
    ],
  },
  cta: {
    heading: 'Ready to Move Your Business Forward?',
    text: "Whether it's AI, design, marketing, or video — share your requirement in simple words and we'll suggest the most practical next step.",
    primary: { label: 'Start a Project →', href: '#/contact' },
    secondary: { label: 'Contact Sales', href: 'mailto:hello@aqevorin.ai' },
  },
}

export default home
