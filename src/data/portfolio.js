export const projects = [
  {
    slug: 'demand-forecasting-engine',
    cat: 'AI Platform',
    thumb: 'thumb-1',
    img: '/assets/photos/pf-forecasting.jpg',
    title: 'Demand Forecasting Engine',
    excerpt: 'ML-powered forecasting for a retail chain — 97% accuracy, 30% inventory cost reduction.',
    tags: ['Machine Learning', 'Retail'],
    client: 'Multi-store retail chain',
    challenge: 'The client managed inventory across 40+ stores using spreadsheet-based gut feel. Overstock tied up working capital while stockouts pushed customers to competitors. Seasonal demand spikes and promotions made manual forecasting unreliable — errors routinely exceeded 25%.',
    approach: 'We built a hierarchical forecasting pipeline ingesting 3 years of POS data, promotions calendar, weather feeds, and local events. Gradient-boosted models forecasted demand per SKU-store combination, with a constraint layer translating forecasts into order recommendations aligned with supplier lead times.',
    results: [
      { value: '97%', label: 'Forecast accuracy' },
      { value: '30%', label: 'Inventory cost reduction' },
      { value: '40+', label: 'Stores live' },
      { value: '6 weeks', label: 'To production' }
    ],
    tech: ['Python', 'XGBoost', 'Airflow', 'BigQuery', 'Looker'],
    quote: 'We stopped arguing about what to order and started deciding how to grow. The forecasts paid for themselves in the first quarter.'
  },
  {
    slug: 'nexora-brand-identity',
    cat: 'Brand & Design',
    thumb: 'thumb-2',
    img: '/assets/photos/pf-brand.jpg',
    title: 'Nexora Brand Identity',
    excerpt: 'Complete rebrand — logo, guidelines, and social creatives for a health-tech startup.',
    tags: ['Graphic Design', 'Branding'],
    client: 'Health-tech startup (Series A)',
    challenge: 'Nexora had outgrown its founder-made logo. With a funding round and enterprise sales push ahead, their brand looked inconsistent across the website, decks, app store, and events — undermining trust with hospital procurement teams.',
    approach: 'We ran a positioning workshop, then designed a full identity system: logomark, wordmark, color tokens with accessibility ratios, typography scale, iconography rules, and motion principles. Every asset class — from pitch decks to Instagram templates — was designed to the system and delivered with editable sources.',
    results: [
      { value: '2 weeks', label: 'Concept to final logo' },
      { value: '120+', label: 'Brand assets delivered' },
      { value: '40+', label: 'Template library' },
      { value: '100%', label: 'Team adoption' }
    ],
    tech: ['Figma', 'Illustrator', 'After Effects', 'Brand guidelines'],
    quote: 'For the first time, everything we publish looks like it came from the same company. Sales decks finally match the product.'
  },
  {
    slug: 'vertex-product-launch-film',
    cat: 'Video Production',
    thumb: 'thumb-3',
    img: '/assets/photos/pf-film.jpg',
    title: 'Vertex Product Launch Film',
    excerpt: 'Cinematic launch video with motion graphics — 2M+ views in the first month.',
    tags: ['Video', 'Motion Graphics'],
    client: 'B2B SaaS platform',
    challenge: 'Vertex was launching a major product update but had only dry feature-recording demos to show. The launch needed a film that made infrastructure software feel exciting without losing technical credibility with their developer audience.',
    approach: 'We wrote a narrative script around the customer pain, storyboarded a mix of live-action hooks and precise motion graphics explaining the architecture, then produced a hero film with cutdowns for paid social, website hero, and event screens — all from one shoot week.',
    results: [
      { value: '2M+', label: 'Views in month one' },
      { value: '3.2x', label: 'Launch sign-up lift' },
      { value: '14', label: 'Cutdowns delivered' },
      { value: '1 shoot', label: 'Full content system' }
    ],
    tech: ['Cinema camera', 'After Effects', 'DaVinci Resolve', 'Motion design'],
    quote: 'The film did what three months of feature announcements could not — developers actually shared it.'
  },
  {
    slug: 'quantiq-growth-campaign',
    cat: 'Marketing',
    thumb: 'thumb-4',
    img: '/assets/photos/pf-growth.jpg',
    title: 'QuantIQ Growth Campaign',
    excerpt: 'Full-funnel digital marketing — 4.2x ROAS across search and social channels.',
    tags: ['Digital Marketing', 'SEO & Ads'],
    client: 'Fintech analytics platform',
    challenge: 'QuantIQ\'s paid channels were flat: rising CPCs, weak attribution, and landing pages converting below 1.5%. Marketing spend was growing faster than pipeline, and the team could not tell which channel actually drove qualified demos.',
    approach: 'We rebuilt measurement first (server-side tracking, offline conversion import), then restructured campaigns around intent tiers. Creative testing frameworks fed winning messages into landing pages, while an SEO topic cluster captured non-branded demand that fed retargeting pools.',
    results: [
      { value: '4.2x', label: 'Blended ROAS' },
      { value: '-38%', label: 'Cost per qualified lead' },
      { value: '+156%', label: 'Organic traffic in 6 months' },
      { value: '2.8%', label: 'Landing page conversion' }
    ],
    tech: ['Google Ads', 'Meta Ads', 'GA4', 'HubSpot', 'Ahrefs'],
    quote: 'For the first time we know which rupee drives which deal. The quarterly budget conversation is easy now.'
  },
  {
    slug: 'helix-support-copilot',
    cat: 'AI Assistant',
    thumb: 'thumb-5',
    img: '/assets/photos/pf-copilot.jpg',
    title: 'Helix Support Copilot',
    excerpt: 'RAG-powered support assistant resolving 68% of queries automatically.',
    tags: ['GenAI', 'NLP'],
    client: 'E-commerce customer support org',
    challenge: 'A 60-person support team handled 8,000+ tickets weekly with rising handle times. Agents searched five systems to answer one question, and new hires took 6 weeks to reach full productivity.',
    approach: 'We built a RAG assistant over policies, order systems, and past resolved tickets — with tool access for order lookups and refund eligibility checks. Answers arrive with citations; uncertain cases route to humans with a drafted reply. An evaluation suite gates every knowledge update.',
    results: [
      { value: '68%', label: 'Queries auto-resolved' },
      { value: '-41%', label: 'Average handle time' },
      { value: '6 wks → 2 wks', label: 'New hire ramp time' },
      { value: '4.7/5', label: 'CSAT maintained' }
    ],
    tech: ['GPT-4 class LLM', 'Vector search', 'Python', 'Zendesk API', 'LangSmith'],
    quote: 'Agents stopped being search engines and started solving the hard cases. Morale and CSAT both went up.'
  },
  {
    slug: 'stratos-document-pipeline',
    cat: 'Automation',
    thumb: 'thumb-6',
    img: '/assets/photos/pf-pipeline.jpg',
    title: 'Stratos Document Pipeline',
    excerpt: 'Intelligent document processing — 72% less manual data entry for logistics ops.',
    tags: ['AI Automation', 'OCR'],
    client: 'Logistics & freight operations',
    challenge: 'Operations staff manually keyed data from bills of lading, invoices, and customs documents — 15,000+ pages monthly. Errors caused shipment delays, and peak season required expensive temporary staffing.',
    approach: 'We deployed an OCR + LLM extraction pipeline with document classification, field-level confidence scoring, and a review UI where humans only touched low-confidence fields. Clean data posts directly into the TMS with full audit trails per document.',
    results: [
      { value: '72%', label: 'Less manual entry' },
      { value: '99.1%', label: 'Field-level accuracy' },
      { value: '15k', label: 'Pages processed monthly' },
      { value: '0', label: 'Peak-season temps needed' }
    ],
    tech: ['Azure Document Intelligence', 'LLM extraction', 'React review UI', 'REST integrations'],
    quote: 'Peak season no longer means panic hiring. The pipeline just keeps up — and it is more accurate than we ever were.'
  }
]

export const getProjectBySlug = slug => projects.find(p => p.slug === slug)
