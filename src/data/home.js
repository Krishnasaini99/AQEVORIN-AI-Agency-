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
  testimonials: [
    {
      quote: 'AQEVORIN took our support load from chaos to autopilot. Resolution time dropped 63% in the first quarter — the ROI conversation took about ten seconds.',
      name: 'Rohan Mehta',
      role: 'Founder, SaaS Startup',
    },
    {
      quote: 'One team for our brand, website content, and launch film. It felt like hiring an entire creative department that already knew our business.',
      name: 'Sarah Williams',
      role: 'Marketing Head, D2C Brand',
    },
    {
      quote: 'Their demand-forecasting engine paid for itself in two months. Clear communication, honest timelines, zero surprises on the invoice.',
      name: 'Amit Sharma',
      role: 'Operations Director, Retail Chain',
    },
  ],
  faq: [
    {
      q: 'How much does a project cost?',
      a: 'Most projects start at $1,500 for focused sprints (design packs, landing pages, pilots) and scale with scope. After a free discovery call you get a fixed quote — no hourly surprises.',
    },
    {
      q: 'How fast can we start?',
      a: 'Discovery calls happen within 24 hours. Typical kickoff is 3–5 working days after approval, and first results land in week one or two.',
    },
    {
      q: 'Who owns the work and the data?',
      a: 'You do — 100%. All code, designs, models, and data stay yours, documented and handed over with training for your team.',
    },
    {
      q: 'Do you work with early-stage startups?',
      a: 'Yes — startups are our favourite clients. We scope lean MVPs and pilots that prove value before you commit big budgets.',
    },
    {
      q: 'How do we communicate during the project?',
      a: 'A shared channel with daily updates, a weekly demo, and one owner on our side who answers within hours, not days.',
    },
  ],
}

export default home
