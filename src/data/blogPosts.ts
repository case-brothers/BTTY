export type BlogPost = {
  slug: string
  title: string
  kicker: string
  excerpt: string
  readTime: string
  publishDate: string
  highlight: string
  whyItMatters: string
  sections: Array<{
    heading: string
    paragraphs: string[]
  }>
  sources: Array<{
    label: string
    url: string
  }>
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'ai-tools-raise-frontline-productivity',
    title: 'AI tools are not theory anymore. They raise frontline productivity.',
    kicker: 'Evidence',
    excerpt:
      'One of the clearest signals in the market is that AI does not just make demos look impressive. In the right workflow, it helps people resolve more work in less time.',
    readTime: '4 min read',
    publishDate: 'April 13, 2026',
    highlight: 'Customer support teams using an AI assistant resolved about 14% more issues per hour in a large field study.',
    whyItMatters:
      'If a business is still treating AI like a novelty, it is probably underestimating what structured assistance can do inside day-to-day operations.',
    sections: [
      {
        heading: 'What the research found',
        paragraphs: [
          'A widely cited NBER field study tracked more than 5,000 customer support agents as a generative AI assistant was introduced into their workflow. The headline result was simple: productivity went up, and the biggest gains showed up among less experienced workers.',
          'That matters because most businesses do not win by hiring superheroes. They win by giving ordinary teams better systems, better context, and faster support when the work starts piling up.',
        ],
      },
      {
        heading: 'Why BTTY cares about this',
        paragraphs: [
          'This is exactly why we build AI into operating systems instead of treating it like a toy. The right assistant can shorten the path from confusion to action, help newer team members perform better, and reduce the number of things the owner has to personally touch.',
          'We did not run that research, but proof is proof. When outside evidence says AI improves throughput and consistency, smart operators should pay attention.',
        ],
      },
      {
        heading: 'What to do with it',
        paragraphs: [
          'The practical takeaway is not “throw a chatbot on everything.” The takeaway is to identify the places where your team repeats the same decisions, follow-up, explanations, and triage work over and over again. That is where AI starts earning its keep.',
        ],
      },
    ],
    sources: [
      {
        label: 'NBER: Generative AI at Work',
        url: 'https://www.nber.org/papers/w31161',
      },
      {
        label: 'NBER summary: Measuring the Productivity Impact of Generative AI',
        url: 'https://www.nber.org/digest/20236/measuring-productivity-impact-generative-ai',
      },
    ],
  },
  {
    slug: 'ai-saves-time-when-it-is-built-into-real-work',
    title: 'Businesses get more from AI when it is built into real work, not bolted on.',
    kicker: 'Operations',
    excerpt:
      'The companies getting value from AI are not just handing people a new toy. They are redesigning workflows, reducing friction, and reclaiming time that used to disappear into busywork.',
    readTime: '4 min read',
    publishDate: 'April 13, 2026',
    highlight: 'In a large field experiment, treated workers spent about two fewer hours each week on email once AI was built into their everyday tools.',
    whyItMatters:
      'For owners, saved time is not abstract. It means faster response, less after-hours cleanup, and fewer important things getting lost in the shuffle.',
    sections: [
      {
        heading: 'What the data says',
        paragraphs: [
          'Another NBER study followed more than 7,000 knowledge workers across dozens of firms. When AI was embedded into tools people already used, the treated workers spent less time on email and less time working outside regular hours.',
          'That is the kind of result operators understand immediately. It is not hype. It is reclaimed time inside the actual rhythm of the business.',
        ],
      },
      {
        heading: 'The lesson most teams miss',
        paragraphs: [
          'AI usually disappoints when it lives off to the side. It gets much more useful when it sits inside the places where people already work: inboxes, dashboards, CRMs, reporting flows, and follow-up systems.',
          'That is why we care so much about infrastructure. The goal is not just “use AI.” The goal is to make the business easier to run.',
        ],
      },
      {
        heading: 'What this means for smaller businesses',
        paragraphs: [
          'Smaller teams feel wasted time more sharply than large enterprises do. If the owner or a small admin team is carrying too much, even a few saved hours a week can change how fast the business responds and how often opportunities get missed.',
        ],
      },
    ],
    sources: [
      {
        label: 'NBER: Shifting Work Patterns with Generative AI',
        url: 'https://www.nber.org/papers/w33795',
      },
      {
        label: 'Microsoft 2024 Work Trend Index',
        url: 'https://blogs.microsoft.com/blog/2024/05/08/microsoft-and-linkedin-release-the-2024-work-trend-index-on-the-state-of-ai-at-work//',
      },
    ],
  },
  {
    slug: 'the-best-ai-results-come-from-workflow-redesign',
    title: 'The best AI results do not come from prompts alone. They come from workflow redesign.',
    kicker: 'Strategy',
    excerpt:
      'The organizations seeing real value from AI are changing how work gets done, not just giving teams a new interface and hoping for magic.',
    readTime: '5 min read',
    publishDate: 'April 13, 2026',
    highlight: 'McKinsey’s 2025 global survey points to workflow redesign and stronger operating structure as key ingredients behind AI value capture.',
    whyItMatters:
      'If you want bottom-line impact, the system around the tool matters as much as the tool itself.',
    sections: [
      {
        heading: 'What stronger adopters are doing differently',
        paragraphs: [
          'McKinsey’s latest state-of-AI research points in a direction we agree with strongly: organizations that want value from AI are redesigning workflows, assigning ownership, and putting structure around deployment.',
          'That sounds less flashy than a viral prompt, but it is closer to how businesses actually win. Better process beats clever chaos.',
        ],
      },
      {
        heading: 'Why this matters for BTTY',
        paragraphs: [
          'This is the whole reason BTTY exists. We are not trying to drop a disconnected AI tool into a business and call it transformation. We are trying to build the operating layer around it so owners can actually use the result.',
          'That can mean dashboards, lead follow-up, reporting, response systems, admin handoffs, and visibility across locations. The point is the same: AI becomes more valuable when it is attached to a real business process.',
        ],
      },
      {
        heading: 'What the takeaway is',
        paragraphs: [
          'If a business wants better outcomes from AI, the question is not only “Which model should we use?” The better question is “Which workflow should get redesigned first, and what would success look like when we do?”',
        ],
      },
    ],
    sources: [
      {
        label: 'McKinsey: The state of AI: How organizations are rewiring to capture value',
        url: 'https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai-how-organizations-are-rewiring-to-capture-value',
      },
      {
        label: 'NBER: The Rapid Adoption of Generative AI',
        url: 'https://www.nber.org/papers/w32966',
      },
    ],
  },
]

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug)
}
