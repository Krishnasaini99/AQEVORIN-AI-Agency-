export const services = [
  {
    slug: 'ai-consulting',
    title: 'AI Consulting',
    tagline: 'Strategic guidance to identify high-impact AI opportunities and build a roadmap that delivers measurable ROI.',
    img: '/assets/photos/svc-ai-consulting.jpg',
    intro: 'Most AI initiatives fail not because of technology, but because of missing strategy. Our AI consulting service helps you decide where AI actually belongs in your business, what it will cost, what it will return, and how to get there without wasted pilots.',
    features: [
      'AI readiness assessment across data, teams, and processes',
      'Opportunity mapping with clear ROI estimates',
      'Build-vs-buy and vendor evaluation guidance',
      'Model and infrastructure selection strategy',
      'Risk, compliance, and responsible-AI framework',
      'Prioritized roadmap with timelines and budgets'
    ],
    sections: [
      {
        heading: 'Where AI creates real leverage',
        body: 'We start by understanding your workflows, data, and bottlenecks. From customer support to supply chain, we identify the use cases where AI delivers measurable impact — and honestly tell you where it does not. No hype, only outcomes you can defend to your board.'
      },
      {
        heading: 'From strategy to execution plan',
        body: 'A strategy document alone does not create value. We deliver a concrete execution plan: data requirements, model choices, infrastructure, team roles, success metrics, and a phased timeline — so your team knows exactly what to build in the first 90 days.'
      },
      {
        heading: 'Responsible and compliant by design',
        body: 'Every recommendation follows responsible-AI principles and ISO 27001-aligned infosec standards. We plan for bias testing, data privacy, audit trails, and human oversight from day one — not as an afterthought when regulators come knocking.'
      }
    ],
    deliverables: ['AI opportunity report', 'ROI & cost model', '90-day execution roadmap', 'Architecture recommendation', 'Risk & compliance checklist']
  },
  {
    slug: 'machine-learning-engineering',
    title: 'Machine Learning Engineering',
    tagline: 'Custom ML models built on your unique data — deep learning, NLP, and computer vision for production scale.',
    img: '/assets/photos/svc-ml.jpg',
    intro: 'We design, train, and deploy machine learning models that solve your specific business problems — not generic off-the-shelf guesses. From data preparation to production endpoints, we own the full ML engineering lifecycle.',
    features: [
      'Supervised and unsupervised model development',
      'Deep learning for vision and sequence data',
      'NLP: classification, extraction, summarization',
      'Computer vision: detection, segmentation, OCR',
      'Model versioning, retraining, and drift monitoring',
      'Production deployment with latency optimization'
    ],
    sections: [
      {
        heading: 'Models trained on YOUR data',
        body: 'Generic models fail on domain-specific problems. We use your proprietary datasets, labels, and business context to build models that understand your terminology, your edge cases, and your quality bar — then validate them against real-world holdout data.'
      },
      {
        heading: 'Engineering, not just notebooks',
        body: 'A Jupyter notebook is not a product. We productionize models with feature pipelines, API endpoints, latency budgets, monitoring, and automated retraining — so performance does not quietly decay six months after launch.'
      },
      {
        heading: 'Repeatable experiments',
        body: 'Every training run is tracked: data snapshot, hyperparameters, metrics, and artifacts. That means when something improves or breaks, we can reproduce it, explain it, and roll forward or back with confidence.'
      }
    ],
    deliverables: ['Trained model + weights', 'Training & evaluation report', 'Serving API endpoints', 'Retraining pipeline', 'Monitoring dashboard']
  },
  {
    slug: 'data-science-analytics',
    title: 'Data Science & Analytics',
    tagline: 'Transform raw data into decisions — warehousing, ETL pipelines, BI, and predictive analytics that drive growth.',
    img: '/assets/photos/svc-data-science.jpg',
    intro: 'Your data already contains the answers — it is just trapped in spreadsheets, siloed databases, and forgotten logs. We build the pipelines, warehouses, and analytics that turn scattered data into decisions your team can act on every day.',
    features: [
      'Data warehouse design and migration',
      'ETL/ELT pipelines with quality checks',
      'Predictive and prescriptive analytics',
      'Interactive BI dashboards and reports',
      'KPI definition and metric governance',
      'Data quality monitoring and alerting'
    ],
    sections: [
      {
        heading: 'One source of truth',
        body: 'When sales, finance, and operations each keep different numbers, meetings become debates. We consolidate your data into a single governed warehouse with clear definitions — so everyone argues about strategy, not whose spreadsheet is right.'
      },
      {
        heading: 'Forecasts you can plan around',
        body: 'Demand forecasting, churn prediction, revenue projection — we build statistical and ML models with confidence intervals, so planners know not just the number, but how much to trust it and when to intervene.'
      },
      {
        heading: 'Dashboards people actually use',
        body: 'We design role-based dashboards around the decisions each team makes daily — not vanity charts. Executives get the overview, operators get the drill-down, and both trust that the numbers match.'
      }
    ],
    deliverables: ['Data warehouse setup', 'ETL pipeline codebase', 'BI dashboards', 'Predictive models', 'Data dictionary & docs']
  },
  {
    slug: 'generative-ai-llms',
    title: 'Generative AI & LLMs',
    tagline: 'Custom LLM engineering, RAG pipelines, AI assistants, and domain-specific models fine-tuned for your context.',
    img: '/assets/photos/svc-genai.jpg',
    intro: 'ChatGPT wrappers break the moment they face your private data, your tone, or your compliance rules. We build production-grade generative AI systems grounded in your knowledge base — with retrieval, guardrails, and evaluation baked in.',
    features: [
      'RAG pipelines over private documents',
      'Fine-tuning and LoRA adaptation',
      'AI assistants and copilots with tools',
      'Prompt engineering and evaluation harnesses',
      'Guardrails, hallucination checks, citations',
      'On-premise and private-cloud deployment'
    ],
    sections: [
      {
        heading: 'Answers grounded in your knowledge',
        body: 'We connect LLMs to your documents, databases, and wikis through retrieval-augmented generation — with citations on every answer. Users can verify claims, and your model never invents facts about data it was never shown.'
      },
      {
        heading: 'Tools, not just text',
        body: 'Real assistants do things: query databases, fill forms, route tickets, trigger workflows. We engineer tool-calling agents with permissions and audit logs — so the AI acts inside guardrails you control.'
      },
      {
        heading: 'Evaluate before you ship',
        body: 'Every release is scored against a golden test set: factuality, relevance, refusal behavior, latency, and cost. You get a dashboard showing exactly how the system performs — and a regression gate that blocks bad prompts from reaching users.'
      }
    ],
    deliverables: ['RAG/assistant application', 'Evaluation test suite', 'Prompt & guardrail library', 'Deployment + monitoring', 'Knowledge base pipeline']
  },
  {
    slug: 'ai-automation',
    title: 'AI Automation',
    tagline: 'Intelligent workflow automation, document processing, and orchestration that cut manual work and costs.',
    img: '/assets/photos/svc-automation.jpg',
    intro: 'Repetitive work — data entry, document routing, report generation, email triage — drains your team\'s hours. We design AI-powered workflows that handle the routine work end-to-end, with humans looped in only where judgment is truly needed.',
    features: [
      'Intelligent document processing (IDP)',
      'Workflow orchestration and routing',
      'Email, ticket, and request triage',
      'Human-in-the-loop approval flows',
      'Integration with ERP, CRM, and tools',
      'Full audit trail on every decision'
    ],
    sections: [
      {
        heading: 'Automate the workflow, not just the step',
        body: 'Automating one button-click saves seconds. We map the entire process — intake, extraction, validation, approval, and system updates — then rebuild it as a single reliable pipeline with exception handling for edge cases.'
      },
      {
        heading: 'Documents that process themselves',
        body: 'Invoices, contracts, claims, KYC forms — our IDP systems extract structured fields with confidence scores, flag low-confidence items for human review, and post clean data straight into your systems.'
      },
      {
        heading: 'Humans stay in control',
        body: 'Every automation defines where AI decides and where humans approve. Thresholds, escalation rules, and rollback paths are explicit — so speed never comes at the cost of correctness or compliance.'
      }
    ],
    deliverables: ['Workflow automation build', 'Document processing pipeline', 'System integrations', 'Exception handling rules', 'Ops runbook & audit logs']
  },
  {
    slug: 'managed-ai-services',
    title: 'Managed AI Services',
    tagline: 'Full-lifecycle AI operations — hosting, retraining, monitoring, and performance checks that keep value flowing.',
    img: '/assets/photos/svc-managed-ai.jpg',
    intro: 'Launching a model is the beginning, not the end. Our managed AI service keeps your systems healthy in production: hosting, monitoring, drift detection, retraining, cost control, and on-call support — as a complete operating service.',
    features: [
      '24/7 model and pipeline monitoring',
      'Data & concept drift detection',
      'Scheduled retraining and validation',
      'Cost and performance optimization',
      'Incident response and SLA support',
      'Quarterly performance reviews'
    ],
    sections: [
      {
        heading: 'Models degrade quietly',
        body: 'Customer behavior changes, new products appear, upstream data shifts — and accuracy erodes month by month without a single error log. We watch the metrics that matter, alert on drift, and retrain before your users notice.'
      },
      {
        heading: 'Predictable cost, predictable uptime',
        body: 'We right-size infrastructure, cache what can be cached, and optimize inference paths. You get monthly reports on usage, latency, and spend — with concrete actions taken to keep cost per prediction trending down.'
      },
      {
        heading: 'An extension of your team',
        body: 'You get a named engineering team that knows your stack, your models, and your business context. No re-onboarding every quarter — just faster resolutions and better decisions over time.'
      }
    ],
    deliverables: ['Managed hosting & uptime SLA', 'Monitoring dashboards', 'Drift & retraining reports', 'Monthly performance review', 'Incident response support']
  },
  {
    slug: 'graphic-design-agent',
    title: 'All Types Graphic Design Agent',
    tagline: 'Logos, branding, social media creatives, banners, UI design — complete graphic design agents for every need.',
    img: '/assets/photos/svc-graphic-design.jpg',
    intro: 'From a blank logo brief to a full brand system — our design agents produce on-brand, platform-perfect graphics at speed. Consistent identity across every touchpoint, without the waiting weeks for a single banner.',
    features: [
      'Logo design and complete brand identity',
      'Social media creatives and campaign sets',
      'Web banners, ads, and landing page graphics',
      'UI kits, icons, and presentation decks',
      'Print: brochures, packaging, business cards',
      'Brand guidelines and asset libraries'
    ],
    sections: [
      {
        heading: 'A brand that looks like one brand',
        body: 'We define color systems, typography, grid rules, and logo usage — then apply them everywhere. Every asset, from a LinkedIn post to a trade-show banner, feels unmistakably yours.'
      },
      {
        heading: 'Designed for every platform',
        body: 'Each creative is produced to the exact dimensions, safe areas, and format of its destination — Instagram stories, Google display, YouTube thumbnails, or print. No more stretched logos or cut-off text.'
      },
      {
        heading: 'Speed without repetition',
        body: 'Our design agents generate variations for A/B tests and seasonal campaigns within hours, while senior designers hold the quality bar. You get volume when you need it and craft where it counts.'
      }
    ],
    deliverables: ['Logo & identity package', 'Brand guidelines PDF', 'Campaign creative sets', 'Editable source files (Figma/AI)', 'Asset library handover']
  },
  {
    slug: 'digital-marketing-agent',
    title: 'All Types Digital Marketing Agent',
    tagline: 'SEO, SEM, social media marketing, performance ads, and content strategy — data-driven growth agents.',
    img: '/assets/photos/svc-digital-marketing.jpg',
    intro: 'We run full-funnel digital marketing — search, social, paid, and content — as one connected system. Every rupee is tracked to a result, every campaign feeds the next insight, and growth compounds instead of resetting each month.',
    features: [
      'SEO: technical, on-page, and content',
      'Google Ads, Meta Ads, and performance campaigns',
      'Social media strategy and management',
      'Content marketing and funnels',
      'Conversion rate optimization (CRO)',
      'Attribution, reporting, and ROAS tracking'
    ],
    sections: [
      {
        heading: 'Rank where buyers are searching',
        body: 'We fix technical SEO, build topic clusters around your money keywords, and earn content that wins snippets. Organic traffic grows steadily — and keeps growing after the ads stop.'
      },
      {
        heading: 'Paid media that proves its worth',
        body: 'Campaigns are structured for clean measurement: audience testing, creative iteration, and bid strategies tied to CAC and ROAS targets. You see exactly what each channel returns — weekly.'
      },
      {
        heading: 'Content that moves the funnel',
        body: 'Awareness, consideration, decision — each asset has a job. We map content to buyer stages, distribute it where your audience actually is, and nurture leads with sequences that convert.'
      }
    ],
    deliverables: ['Channel strategy & plan', 'Campaign setup & management', 'SEO audit + roadmap', 'Content calendar', 'Monthly analytics report']
  },
  {
    slug: 'video-creation-agent',
    title: 'All Types Video Creation Agent',
    tagline: 'Explainer videos, ads, product demos, motion graphics, and full production — cinematic video agents.',
    img: '/assets/photos/svc-video-creation.jpg',
    intro: 'Video is the highest-converting format on every platform — and the slowest to produce. Our video creation agents compress the pipeline: scripting, storyboarding, production, and editing, delivering scroll-stopping video at campaign speed.',
    features: [
      'Brand and product explainer videos',
      'Performance ad creatives for social',
      'Motion graphics and animated typography',
      'Product demos and walkthroughs',
      'Short-form: Reels, Shorts, TikToks',
      'Voiceover, subtitles, and localization'
    ],
    sections: [
      {
        heading: 'Hook in three seconds',
        body: 'We write for the feed: patterns that stop the scroll, scripts that hold attention, and CTAs that convert. Every video opens with the strongest possible frame — because that is all you get.'
      },
      {
        heading: 'One shoot, a month of content',
        body: 'We structure production around content systems — a single session yields hero videos, cutdowns, teasers, and vertical clips — so your channels stay fed without repeating the same shoot every week.'
      },
      {
        heading: 'Data-driven creative iteration',
        body: 'We track hook rate, watch-through, and conversion per creative, then iterate on what works. Winning formats get scaled, underperformers get replaced — your video library gets smarter every month.'
      }
    ],
    deliverables: ['Script + storyboard', 'Final edited videos (all ratios)', 'Motion graphics package', 'Thumbnail + cover assets', 'Raw footage handover']
  }
]

export const getServiceBySlug = slug => services.find(s => s.slug === slug)
