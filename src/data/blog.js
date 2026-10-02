export const posts = [
  {
    slug: 'why-ai-pilots-fail-after-90-days',
    cat: 'AI',
    date: 'Sep 15, 2026',
    read: '6 min read',
    thumb: 'blog-thumb-1',
    img: '/assets/photos/blog-ai-pilots.jpg',
    title: 'Why Most AI Pilots Fail After 90 Days — and How to Fix It',
    excerpt: 'The gap between a working demo and a production system is where most AI projects die. Here\'s the bridge.',
    intro: 'A promising pilot. Exciting demos. Leadership is impressed. Then, three months later, the project quietly dies. Sound familiar? This pattern is so common it has become the default expectation for AI initiatives — and it is almost entirely avoidable.',
    takeaways: [
      'Pilots die from ownership gaps, not bad models',
      'Production requires monitoring, retraining, and SLAs',
      'Define business metrics before training begins',
      'Phase the rollout — expand only on proven wins'
    ],
    sections: [
      {
        heading: 'The demo-to-production chasm',
        body: [
          'Most AI pilots are built to impress, not to survive. A data scientist grabs a clean dataset, trains a model in a notebook, and shows 95% accuracy on a slide. Leadership approves the next phase. Then reality arrives: messy inputs, edge cases, latency requirements, security reviews, and users who do not trust a black box.',
          'The pilot was never designed for any of that. It had no monitoring, no retraining plan, no owner on the operations side, and no answer for what happens when the model is wrong at 2 AM on a Sunday.'
        ]
      },
      {
        heading: 'Ownership is the real failure point',
        body: [
          'When the pilot ends, everyone assumes someone else will take the model forward. The data team built it, but the product team does not understand it. IT will not host something they cannot debug. Six weeks later, the model is still running — on a laptop under someone\'s desk.',
          'Fix it by naming an owner before the pilot starts. Not "the AI team" — a specific person accountable for the model\'s uptime, accuracy, and business impact. If no one owns it, it will die.'
        ]
      },
      {
        heading: 'Metrics that survive contact with finance',
        body: [
          'Accuracy is an engineering metric. Business leaders fund outcomes: fewer support tickets, faster claims processing, lower inventory costs. Define those metrics in week one, instrument them, and report on them weekly during the pilot.',
          'When the pilot can show "reduced manual review time by 40%" instead of "94.3% F1 score," the funding conversation changes completely.'
        ]
      },
      {
        heading: 'Production is a product, not a project',
        body: [
          'Ship in phases: shadow mode first (model predicts, humans decide), then assisted mode (model recommends, human approves), then full automation on the narrowest, safest slice. Each phase earns the right to the next.',
          'Add the unglamorous infrastructure: monitoring dashboards, drift alerts, retraining triggers, rollback procedures, and an incident runbook. This is what separates a system that runs for years from a demo that dies in 90 days.'
        ]
      }
    ]
  },
  {
    slug: 'design-agents-changing-creative-workflows',
    cat: 'Design',
    date: 'Sep 8, 2026',
    read: '4 min read',
    thumb: 'blog-thumb-2',
    img: '/assets/photos/blog-design.jpg',
    title: 'Design Agents Are Changing Creative Workflows',
    excerpt: 'How all-types graphic design agents are becoming part of every modern creative team\'s stack.',
    intro: 'Creative teams are no longer choosing between craft and speed. Design agents — AI systems that produce on-brand graphics, variations, and layouts under designer direction — have quietly become the most practical application of AI in everyday business.',
    takeaways: [
      'Design agents excel at volume, not original strategy',
      'Brand systems keep AI output consistent',
      'Designers shift from producing to directing',
      'Speed enables testing culture, not lower quality'
    ],
    sections: [
      {
        heading: 'From bottleneck to pipeline',
        body: [
          'Every marketing team has the same story: ten campaigns, one designer, and a queue of banner requests that stretches for weeks. Simple assets — resized social posts, product announcements, display sets — consume the same creative energy as the big brand work.',
          'Design agents take the repetitive layer: resizing, adaptation, versioning, and first-draft layouts. The designer reviews, refines, and approves. Queue time drops from days to hours, and the designer\'s calendar fills with work that actually requires a designer.'
        ]
      },
      {
        heading: 'Brand systems are the control layer',
        body: [
          'The difference between useful design AI and generic slop is a governed brand system: locked color tokens, typography scales, grid rules, logo usage, and tone-of-voice for copy. Given those constraints, agents produce assets that look intentional — not random.',
          'Teams that invest in a proper design system find that agent output quality jumps dramatically. The system is the prompt.'
        ]
      },
      {
        heading: 'The new creative loop',
        body: [
          'The workflow is shifting: human defines concept and constraints → agent generates variations at volume → human curates and elevates winners → performance data informs the next round.',
          'This loop rewards taste and strategy over manual execution. Designers who learn to direct agents ship more, test more, and create stronger work — while单纯 production tasks are handled in minutes, not days.'
        ]
      }
    ]
  },
  {
    slug: 'video-first-marketing-2026',
    cat: 'Marketing',
    date: 'Aug 30, 2026',
    read: '5 min read',
    thumb: 'blog-thumb-3',
    img: '/assets/photos/blog-video.jpg',
    title: 'Video-First Marketing: What Actually Converts in 2026',
    excerpt: 'Short-form, product demos, or brand films — which video formats drive real business results.',
    intro: 'Every platform now prioritizes video, so every brand is making video. The result is a flood of forgettable content. What separates the videos that convert from the ones that vanish is not budget — it is format discipline and a system for iteration.',
    takeaways: [
      'Match format to funnel stage, not to trends',
      'First three seconds decide everything',
      'One production day should yield a content system',
      'Measure hook rate and watch-through, then iterate'
    ],
    sections: [
      {
        heading: 'Format follows funnel stage',
        body: [
          'Short-form vertical video wins attention but rarely closes complex deals. Product demos and walkthroughs carry consideration. Brand films build trust at the top. Trying to force one video to do all three jobs produces content that does none well.',
          'Map every video to a stage: awareness (hook-led shorts), consideration (demos, testimonials), decision (comparisons, case studies). Then measure each by the metric of its stage — not one universal "engagement" number.'
        ]
      },
      {
        heading: 'The three-second rule',
        body: [
          'Feed algorithms and humans agree on one thing: weak openings get punished. The first frame must create tension, promise value, or show something unexpected. Explanations come later — you have earned no time yet.',
          'Practically: open on the result ("This cut our onboarding time in half"), the problem in motion, or a visual surprise. Save the logo animation for the end — or delete it entirely.'
        ]
      },
      {
        heading: 'Build a content system, not one-off videos',
        body: [
          'The efficient teams structure shoots as systems: one session produces a hero piece, six cutdowns, three vertical clips, and a set of thumbnail variants. Each asset is planned for a channel and a stage before the camera rolls.',
          'This is where AI-powered video agents shine — generating variants, subtitles, localizations, and alternate hooks from the same raw footage, so every experiment costs editing time measured in minutes rather than days.'
        ]
      },
      {
        heading: 'Iterate on the metrics that matter',
        body: [
          'Track hook rate (3-second views ÷ impressions), average watch-through, and conversion per creative. Two videos with identical content but different openings routinely differ by 3-5x on hook rate.',
          'Kill underperformers fast, scale winners into new variants, and keep a living library of proven hooks and formats. Video stops being a gamble and becomes a compounding asset.'
        ]
      }
    ]
  }
]

export const getPostBySlug = slug => posts.find(p => p.slug === slug)
