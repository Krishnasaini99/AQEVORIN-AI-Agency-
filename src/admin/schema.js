// Field schema for the #/admin panel.
// type: text | textarea | number | image | file | list
// list: itemType 'text' (array of strings) OR itemFields (array of objects, nested)
// Keys use dotted paths relative to the section document.

export const ADMIN_SECTIONS = [
  {
    id: 'home',
    label: 'Home',
    desc: 'Hero section (badge, title, video, counters) + bottom call-to-action banner',
    fields: [
      { key: 'hero.badge', label: 'Hero badge', type: 'text' },
      { key: 'hero.title', label: 'Title — line 1', type: 'text' },
      { key: 'hero.titleAccent', label: 'Title — gradient line', type: 'text' },
      { key: 'hero.sub', label: 'Subtitle', type: 'textarea' },
      { key: 'hero.primary.label', label: 'Primary button', type: 'text' },
      { key: 'hero.primary.href', label: 'Primary button link', type: 'text', hint: '#contact, #/services, https://…' },
      { key: 'hero.secondary.label', label: 'Secondary button', type: 'text' },
      { key: 'hero.secondary.href', label: 'Secondary button link', type: 'text' },
      {
        key: 'hero.video', label: 'Hero background video', type: 'file', accept: 'video/*',
        hint: 'MP4 · up to ~10 MB · must stay clear in both light & dark themes',
      },
      {
        key: 'hero.stats', label: 'Counter stats', type: 'list', itemLabel: 'label',
        itemFields: [
          { key: 'target', label: 'Number', type: 'number' },
          { key: 'suffix', label: 'Suffix', type: 'text', hint: '%  or  +  or empty' },
          { key: 'label', label: 'Label', type: 'text' },
        ],
      },
      { key: 'cta.heading', label: 'CTA heading', type: 'text' },
      { key: 'cta.text', label: 'CTA paragraph', type: 'textarea' },
      { key: 'cta.primary.label', label: 'CTA primary button', type: 'text' },
      { key: 'cta.primary.href', label: 'CTA primary link', type: 'text' },
      { key: 'cta.secondary.label', label: 'CTA secondary button', type: 'text' },
      { key: 'cta.secondary.href', label: 'CTA secondary link', type: 'text' },
    ],
  },

  {
    id: 'services',
    label: 'Services',
    desc: 'All service cards shown on the home page + their detail pages',
    fields: [
      {
        key: 'services', label: 'Services', type: 'list', itemLabel: 'title',
        itemFields: [
          { key: 'slug', label: 'Slug (URL id)', type: 'text', hint: 'e.g. ai-consulting → /#/services/ai-consulting — do not change once published' },
          { key: 'title', label: 'Title', type: 'text' },
          { key: 'tagline', label: 'Tagline (card subtitle)', type: 'textarea' },
          { key: 'img', label: 'Card / detail image', type: 'image' },
          { key: 'intro', label: 'Detail intro paragraph', type: 'textarea' },
          { key: 'features', label: 'Features', type: 'list', itemType: 'text' },
          { key: 'deliverables', label: 'Deliverables', type: 'list', itemType: 'text' },
          {
            key: 'sections', label: 'Content blocks', type: 'list', itemLabel: 'heading',
            itemFields: [
              { key: 'heading', label: 'Heading', type: 'text' },
              { key: 'body', label: 'Body', type: 'textarea' },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'blog',
    label: 'Blog',
    desc: 'Blog posts shown on the home page + full article pages',
    fields: [
      {
        key: 'posts', label: 'Posts', type: 'list', itemLabel: 'title',
        itemFields: [
          { key: 'slug', label: 'Slug (URL id)', type: 'text', hint: 'Used in /#/blog/… — do not change once published' },
          { key: 'cat', label: 'Category', type: 'text' },
          { key: 'date', label: 'Date', type: 'text', hint: 'e.g. Sep 12, 2026' },
          { key: 'read', label: 'Read time', type: 'text', hint: 'e.g. 6 min read' },
          { key: 'thumb', label: 'Card image', type: 'image' },
          { key: 'img', label: 'Article header image', type: 'image' },
          { key: 'title', label: 'Title', type: 'textarea' },
          { key: 'excerpt', label: 'Excerpt (card)', type: 'textarea' },
          { key: 'intro', label: 'Article intro', type: 'textarea' },
          { key: 'takeaways', label: 'Key takeaways', type: 'list', itemType: 'text' },
          {
            key: 'sections', label: 'Article sections', type: 'list', itemLabel: 'heading',
            itemFields: [
              { key: 'heading', label: 'Heading', type: 'text' },
              { key: 'body', label: 'Paragraphs', type: 'list', itemType: 'text' },
            ],
          },
        ],
      },
    ],
  },

  {
    id: 'portfolio',
    label: 'Portfolio',
    desc: 'Project cards + case-study detail pages',
    fields: [
      {
        key: 'projects', label: 'Projects', type: 'list', itemLabel: 'title',
        itemFields: [
          { key: 'slug', label: 'Slug (URL id)', type: 'text', hint: 'Used in /#/work/… — do not change once published' },
          { key: 'cat', label: 'Category', type: 'text' },
          { key: 'thumb', label: 'Card image', type: 'image' },
          { key: 'img', label: 'Detail hero image', type: 'image' },
          { key: 'title', label: 'Title', type: 'text' },
          { key: 'excerpt', label: 'Excerpt (card)', type: 'textarea' },
          { key: 'tags', label: 'Tags', type: 'list', itemType: 'text' },
          { key: 'client', label: 'Client', type: 'text' },
          { key: 'challenge', label: 'Challenge', type: 'textarea' },
          { key: 'approach', label: 'Approach', type: 'textarea' },
          {
            key: 'results', label: 'Results', type: 'list', itemLabel: 'label',
            itemFields: [
              { key: 'value', label: 'Value', type: 'text', hint: 'e.g. +180%' },
              { key: 'label', label: 'Label', type: 'text', hint: 'e.g. lead volume' },
            ],
          },
          { key: 'tech', label: 'Tech / stack', type: 'list', itemType: 'text' },
          { key: 'quote', label: 'Client quote', type: 'textarea' },
        ],
      },
    ],
  },

  {
    id: 'about',
    label: 'About',
    desc: 'Story, mission & vision, values, milestones, process and stats',
    fields: [
      { key: 'hero.tag', label: 'Hero tag', type: 'text' },
      { key: 'hero.title', label: 'Hero title — line 1', type: 'text' },
      { key: 'hero.titleAccent', label: 'Hero title — gradient line', type: 'text' },
      { key: 'hero.intro', label: 'Hero intro', type: 'textarea' },
      { key: 'hero.pills', label: 'Hero pills', type: 'list', itemType: 'text' },

      { key: 'story.tag', label: 'Story tag', type: 'text' },
      { key: 'story.title', label: 'Story title — line 1', type: 'text' },
      { key: 'story.titleAccent', label: 'Story title — gradient line', type: 'text' },
      { key: 'story.paragraphs', label: 'Story paragraphs', type: 'list', itemType: 'text' },
      { key: 'story.quote', label: 'Story quote', type: 'textarea' },
      { key: 'story.quoteBy', label: 'Quote author', type: 'text' },

      { key: 'mission.tag', label: 'Mission tag', type: 'text' },
      { key: 'mission.title', label: 'Mission title', type: 'text' },
      { key: 'mission.desc', label: 'Mission description', type: 'textarea' },

      { key: 'vision.tag', label: 'Vision tag', type: 'text' },
      { key: 'vision.title', label: 'Vision title', type: 'text' },
      { key: 'vision.desc', label: 'Vision description', type: 'textarea' },

      {
        key: 'values', label: 'Values', type: 'list', itemLabel: 'title',
        itemFields: [
          { key: 'icon', label: 'Icon', type: 'text', hint: 'target · users · eye · zap · shield · heart' },
          { key: 'title', label: 'Title', type: 'text' },
          { key: 'desc', label: 'Description', type: 'textarea' },
        ],
      },
      {
        key: 'milestones', label: 'Milestones (timeline)', type: 'list', itemLabel: 'title',
        itemFields: [
          { key: 'year', label: 'Year', type: 'text' },
          { key: 'title', label: 'Title', type: 'text' },
          { key: 'desc', label: 'Description', type: 'textarea' },
        ],
      },
      {
        key: 'process', label: 'Process steps', type: 'list', itemLabel: 'title',
        itemFields: [
          { key: 'num', label: 'Number', type: 'text', hint: '01, 02, …' },
          { key: 'title', label: 'Title', type: 'text' },
          { key: 'desc', label: 'Description', type: 'textarea' },
        ],
      },
      {
        key: 'stats', label: 'Stats counters', type: 'list', itemLabel: 'label',
        itemFields: [
          { key: 'target', label: 'Number', type: 'number' },
          { key: 'suffix', label: 'Suffix', type: 'text' },
          { key: 'label', label: 'Label', type: 'text' },
        ],
      },
    ],
  },

  {
    id: 'contact',
    label: 'Contact',
    desc: 'Contact details + contact page hero',
    fields: [
      { key: 'email', label: 'Email', type: 'text' },
      { key: 'phone', label: 'Phone', type: 'text' },
      { key: 'hero.tag', label: 'Hero tag', type: 'text' },
      { key: 'hero.title', label: 'Hero title — before gradient', type: 'text' },
      { key: 'hero.titleAccent', label: 'Hero title — gradient word', type: 'text' },
      { key: 'hero.sub', label: 'Hero paragraph', type: 'textarea' },
      { key: 'hero.pills', label: 'Hero pills', type: 'list', itemType: 'text' },
    ],
  },

  {
    id: 'social',
    label: 'Social',
    desc: 'Floating WhatsApp button + footer social icons',
    fields: [
      { key: 'whatsapp.url', label: 'WhatsApp link', type: 'text', hint: 'https://wa.me/…' },
      { key: 'whatsapp.label', label: 'WhatsApp label', type: 'text' },
      { key: 'instagram.url', label: 'Instagram link', type: 'text' },
      { key: 'instagram.label', label: 'Instagram label', type: 'text' },
      { key: 'facebook.url', label: 'Facebook link', type: 'text' },
      { key: 'facebook.label', label: 'Facebook label', type: 'text' },
    ],
  },
]

export default ADMIN_SECTIONS
