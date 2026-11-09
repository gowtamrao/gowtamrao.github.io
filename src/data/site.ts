// ─────────────────────────────────────────────────────────────
// Edit this file to personalise the site: your bio, links and topics.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: 'Gowtam Rao',
  title: 'Gowtam Rao',
  tagline: 'Software engineer · writing about AI, the web and ideas I find interesting',
  description: 'Personal site and blog of Gowtam Rao.',
  // Short paragraphs shown on the home page. Replace with your own story.
  bio: [
    "Hi, I'm Gowtam 👋 — a software engineer who enjoys building things and understanding how they work.",
    'Right now I am exploring agentic AI, LLM tooling and modern web development. This site is where I write down what I learn, the projects I build and topics that catch my curiosity.',
    'When I am not coding you will find me reading, tinkering, or going down some new rabbit hole.',
  ],
  // Optional: things you currently work with — shown as chips on the home page.
  skills: ['Python', 'TypeScript', 'LLMs & Agents', 'Node.js', 'Java', 'Web'],
  links: [
    { label: 'GitHub', href: 'https://github.com/gowtamrao' },
    // { label: 'LinkedIn', href: 'https://www.linkedin.com/in/your-handle' },
    // { label: 'Email', href: 'mailto:you@example.com' },
  ],
};

// Each topic gets its own page at /topics/<slug>.
// Add, rename or remove topics freely — posts reference them by `slug`.
export const topics = [
  {
    slug: 'ai',
    name: 'AI & Agents',
    emoji: '🤖',
    description: 'LLMs, agentic systems, tooling and where it is all heading.',
  },
  {
    slug: 'engineering',
    name: 'Software Engineering',
    emoji: '🛠️',
    description: 'Building things: code, architecture, tools and lessons learned.',
  },
  {
    slug: 'ideas',
    name: 'Ideas & Curiosities',
    emoji: '💡',
    description: 'Books, science, tech and society — anything that sparks curiosity.',
  },
] as const;

export type Topic = (typeof topics)[number];
