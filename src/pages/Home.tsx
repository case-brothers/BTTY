import { Link } from 'react-router-dom'

const audiences = [
  {
    icon: '◉',
    label: 'Local Businesses',
    description: 'Restaurants, shops, service providers drowning in manual work.',
  },
  {
    icon: '◈',
    label: 'Multi-Location Operators',
    description: 'Franchise owners and regional managers juggling disconnected systems.',
  },
  {
    icon: '⬡',
    label: 'Service Businesses',
    description: 'HVAC, plumbing, cleaning, catering — anyone running jobs and crews.',
  },
  {
    icon: '◐',
    label: 'Owner-Operators',
    description: "You're the CEO, the admin, and the firefighter. We fix the admin part.",
  },
]

const useCases = [
  { title: 'Lead Capture & Follow-Up', description: 'Automatically respond to new leads, route inquiries, and follow up before they go cold.' },
  { title: 'Missed Call Text-Back', description: 'Every missed call gets an instant text. No more lost customers because you were busy.' },
  { title: 'Review Generation', description: 'Automated review requests after every job. More 5-star reviews without asking manually.' },
  { title: 'Invoice & Email Processing', description: 'AI reads incoming emails and extracts orders, invoices, and action items automatically.' },
  { title: 'Scheduling & Internal Ops', description: 'Automate shift coordination, job scheduling, and internal task routing.' },
  { title: 'CRM & Customer Workflows', description: 'Keep every customer touchpoint tracked and every follow-up on time, automatically.' },
  { title: 'Dashboards & Visibility', description: 'Real-time operational dashboards so you always know what\'s happening across locations.' },
  { title: 'AI-Assisted Admin', description: 'Let AI handle the repetitive stuff — data entry, categorization, reporting, summaries.' },
]

const services = [
  {
    tier: '01',
    title: 'AI Automation Audit',
    description: "We look at your current operations and identify where AI and automation can save the most time and money. You get a prioritized action plan — not a 50-page deck.",
    deliverable: 'Prioritized automation roadmap',
    cta: 'Book a 15-Minute Call',
  },
  {
    tier: '02',
    title: 'System Build & Installation',
    description: "We build and install the automation systems inside your business. Lead capture, follow-up sequences, internal dashboards, email processing — whatever the audit says you need.",
    deliverable: 'Working systems, installed and tested',
    cta: 'Book a 15-Minute Call',
  },
  {
    tier: '03',
    title: 'Ongoing Optimization',
    description: "Systems need tuning. We monitor, improve, and expand your automations over time so they keep getting better — not stale.",
    deliverable: 'Monthly optimization + support',
    cta: 'Book a 15-Minute Call',
  },
]

const proofPoints = [
  { stat: '20+', label: 'Franchise Locations Served' },
  { stat: '3', label: 'Live Production Systems' },
  { stat: '24/7', label: 'Automated Operations Running' },
  { stat: '<48hr', label: 'Avg. First Delivery' },
]

export default function Home() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-screen flex flex-col justify-center pt-16 overflow-hidden bg-white">
        <div className="relative max-w-6xl mx-auto px-6 py-24">
          <div className="fade-up max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-8 bg-brand-green-pale px-4 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 bg-brand-green rounded-full" />
              <span className="text-xs font-semibold tracking-wide uppercase text-brand-green">
                AI Automation Consulting
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.05] text-text-900 mb-6">
              Run Your Business<br />
              <span className="text-brand-green">Without Being</span><br />
              Stuck in It.
            </h1>
          </div>

          <div className="fade-up delay-2 max-w-xl mt-8">
            <p className="text-text-500 text-lg leading-relaxed mb-10">
              We install AI and automation systems that handle your leads, admin, follow-ups, and daily ops — so you can run your business without being there every minute. Built by operators who did it for themselves first.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://calendly.com/tcase-wlej/revenue-system-install"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold bg-brand-dark text-white px-8 py-4 rounded-full hover:bg-brand-black transition-colors"
              >
                Book a 15-Minute Call
              </a>
              <a
                href="#use-cases"
                className="text-sm font-semibold border border-surface-300 text-text-700 px-8 py-4 rounded-full hover:border-brand-green hover:text-brand-green transition-colors"
              >
                See What We Build
              </a>
            </div>
          </div>

          <div className="fade-up delay-3 mt-20 flex flex-wrap gap-12 border-t border-surface-300 pt-10">
            {proofPoints.map(({ stat, label }) => (
              <div key={label}>
                <div className="text-4xl font-black text-text-900">{stat}</div>
                <div className="text-text-500 text-sm mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Video ── */}
      <section className="py-24 border-t border-surface-300 bg-surface-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold tracking-wide uppercase text-brand-green mb-4">
              See It in Action
            </p>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-text-900">
              See How We Actually<br />Run Our Businesses.
            </h2>
          </div>
          <div className="relative w-full rounded-2xl overflow-hidden shadow-lg" style={{ paddingBottom: '56.25%' }}>
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/tjU-c1d1Eb0?rel=0&modestbranding=1&color=white"
              title="BTTY — See How We Actually Run Our Businesses"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="text-center mt-10">
            <a
              href="https://calendly.com/tcase-wlej/revenue-system-install"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold bg-brand-dark text-white px-10 py-4 rounded-lg hover:bg-brand-black transition-colors inline-block"
            >
              Book a 15-Minute Call
            </a>
          </div>
        </div>
      </section>

      {/* ── Who We Serve ── */}
      <section className="py-24 border-t border-surface-300 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16 max-w-2xl">
            <p className="text-xs font-semibold tracking-wide uppercase text-brand-green mb-4">
              Who We Help
            </p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-text-900 mb-6">
              Built for People<br />Who Run Things.
            </h2>
            <p className="text-text-500 leading-relaxed">
              If you're an operator buried in manual work, disconnected tools, and tasks that should be automated by now — we built this for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {audiences.map(({ icon, label, description }) => (
              <div key={label} className="bg-surface-100 border border-surface-300 rounded-xl p-8 hover:border-brand-green/30 hover:shadow-sm transition-all group">
                <div className="text-2xl text-brand-green mb-4">{icon}</div>
                <h3 className="text-lg font-bold text-text-900 mb-2 group-hover:text-brand-green transition-colors">
                  {label}
                </h3>
                <p className="text-text-500 text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What We Build / Use Cases ── */}
      <section id="use-cases" className="py-24 border-t border-surface-300 bg-surface-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16">
            <p className="text-xs font-semibold tracking-wide uppercase text-brand-green mb-4">
              What We Build
            </p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-text-900 mb-6">
              Automations That<br />Actually Work.
            </h2>
            <p className="text-text-500 leading-relaxed max-w-2xl">
              No vague "digital transformation." These are specific systems we build and install inside your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {useCases.map(({ title, description }) => (
              <div key={title} className="bg-white border border-surface-300 rounded-xl p-8 hover:border-brand-green/30 hover:shadow-sm transition-all group">
                <h3 className="text-lg font-bold text-text-900 mb-2 group-hover:text-brand-green transition-colors">
                  {title}
                </h3>
                <p className="text-text-500 text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Productized Services ── */}
      <section className="py-24 border-t border-surface-300 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16">
            <p className="text-xs font-semibold tracking-wide uppercase text-brand-green mb-4">
              How We Work
            </p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-text-900">
              Three Ways to Start.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map(({ tier, title, description, deliverable, cta }) => (
              <div key={tier} className="bg-surface-100 border border-surface-300 rounded-xl p-8 flex flex-col group hover:border-brand-green/30 hover:shadow-sm transition-all">
                <div className="text-xs font-bold text-brand-green mb-4">{tier}</div>
                <h3 className="text-xl font-bold text-text-900 mb-4 group-hover:text-brand-green transition-colors">
                  {title}
                </h3>
                <p className="text-text-500 text-sm leading-relaxed mb-6 flex-1">{description}</p>
                <div className="border-t border-surface-300 pt-6">
                  <div className="text-xs font-semibold uppercase text-text-400 mb-1">Deliverable</div>
                  <div className="text-text-700 text-sm mb-6">{deliverable}</div>
                  <a
                    href="https://calendly.com/tcase-wlej/revenue-system-install"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-brand-green hover:text-brand-green-light transition-colors"
                  >
                    {cta} &rarr;
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why We Built This ── */}
      <section className="py-24 border-t border-surface-300 bg-surface-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-xs font-semibold tracking-wide uppercase text-brand-green mb-4">
                Why We Built This
              </p>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-text-900 mb-8">
                Built Under<br />
                <span className="text-brand-green">Pressure.</span>
              </h2>
              <p className="text-text-500 leading-relaxed mb-6">
                We didn't start with AI. We started with a constraint. We both run multiple businesses while working full-time jobs. Our availability is extremely limited — and there's no room for waste.
              </p>
              <p className="text-text-500 leading-relaxed mb-6">
                That forced us to build systems. Automation that captures leads while we're offline. Dashboards that give us a bird's-eye view of operations without being on-site. Workflows that coordinate teams, update menus, manage marketing, and track performance — without constant meetings or manual check-ins.
              </p>
              <p className="text-text-500 leading-relaxed mb-6">
                This isn't theory. These are systems we actively use to run real businesses, every single day. They were born out of necessity, not innovation for its own sake.
              </p>
              <p className="text-text-900 leading-relaxed font-semibold mb-8">
                These are the same systems we now install for other operators — so they can get their time back and run their business with clarity and control.
              </p>
              <Link
                to="/about"
                className="text-sm font-semibold text-brand-green hover:text-brand-green-light transition-colors"
              >
                Meet the Team &rarr;
              </Link>
            </div>

            <div className="flex flex-col gap-6">
              <div className="rounded-2xl overflow-hidden border border-surface-300 shadow-sm">
                <img src="/team-photo.png" alt="Jared Drake and Tony Case — BTTY founders" className="w-full h-auto" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white border border-surface-300 rounded-xl p-5">
                  <div className="text-lg font-bold text-text-900">Jared Drake</div>
                  <div className="text-xs font-semibold uppercase text-brand-green mb-2">Senior Engineer</div>
                  <p className="text-text-500 text-xs leading-relaxed">15 years engineering. IU CS. Full-stack, cloud, system architecture.</p>
                </div>
                <div className="bg-white border border-surface-300 rounded-xl p-5">
                  <div className="text-lg font-bold text-text-900">Tony Case</div>
                  <div className="text-xs font-semibold uppercase text-brand-green mb-2">Founder & Operator</div>
                  <p className="text-text-500 text-xs leading-relaxed">3 franchise locations. 15+ years ops & finance. Built the Command Center.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Results / Proof ── */}
      <section className="py-24 border-t border-surface-300 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-16">
            <p className="text-xs font-semibold tracking-wide uppercase text-brand-green mb-4">
              Proof of Work
            </p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-text-900 mb-6">
              Systems We've Built<br />and Shipped.
            </h2>
          </div>

          <div className="flex flex-col gap-6">
            {[
              {
                name: 'Roly Poly Command Center',
                category: 'Franchise Ops Automation',
                description: 'Full-stack catering operations platform — automated order intake from emails, Stripe invoicing, CRM with re-engagement sequences, AI coaching, daily diagnostics, and live lobby displays across 20+ locations.',
                tags: ['Email Processing', 'Auto-Invoicing', 'CRM', 'AI Assistant', 'Multi-Location'],
              },
              {
                name: 'Double Tap by AGlaze',
                category: 'Marketing & Lead Capture',
                description: 'Conversion-focused marketing site with SEO content strategy, lead capture, and podcast integration for an aerospace-grade product line.',
                tags: ['SEO', 'Lead Capture', 'Content Strategy', 'Analytics'],
              },
              {
                name: 'AGlaze Dashboard',
                category: 'Operations Visibility',
                description: 'Internal analytics dashboard providing real-time product performance, sales data, and distribution insights for executive decision-making.',
                tags: ['Dashboards', 'Analytics', 'Real-Time Data', 'Cloud'],
              },
            ].map(({ name, category, description, tags }) => (
              <div key={name} className="bg-surface-100 border border-surface-300 rounded-xl p-8 md:p-10 hover:border-brand-green/30 hover:shadow-sm transition-all group">
                <p className="text-xs font-semibold uppercase text-brand-green mb-3">
                  {category}
                </p>
                <h3 className="text-2xl font-bold text-text-900 mb-3 group-hover:text-brand-green transition-colors">
                  {name}
                </h3>
                <p className="text-text-500 text-sm leading-relaxed mb-6 max-w-2xl">
                  {description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {tags.map(t => (
                    <span key={t} className="text-xs font-medium px-3 py-1 border border-surface-300 rounded-full text-text-500">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── Visual Proof ── */}
      <section className="py-24 border-t border-surface-300 bg-surface-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold tracking-wide uppercase text-brand-green mb-4">
              Inside the System
            </p>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-text-900 mb-4">
              This Is What Control<br />Looks Like.
            </h2>
            <p className="text-text-500 leading-relaxed max-w-2xl mx-auto">
              Real systems. Real data. The Command Center runs our franchise ops across 3 locations. Double Tap is a marketing site and SEO engine we built for AGlaze USA. This is what we build for clients.
            </p>
          </div>
          <div className="flex flex-col gap-8">
            {/* Command Center */}
            <div>
              <p className="text-xs font-semibold uppercase text-brand-green mb-3">Roly Poly Command Center</p>
              <div className="flex flex-col gap-4">
                <div className="relative rounded-2xl overflow-hidden shadow-xl border border-surface-300">
                  <img src="/dashboard-portal.png" alt="Roly Poly Command Center — Portal with AI Coach, $33K pipeline, 108 upcoming orders" className="w-full h-auto" />
                </div>
                <div className="relative rounded-2xl overflow-hidden shadow-xl border border-surface-300">
                  <img src="/dashboard-screenshot.png" alt="Roly Poly Command Center — Sales Feed showing $2,083 network total across 3 locations" className="w-full h-auto" />
                </div>
              </div>
            </div>
            {/* Double Tap */}
            <div>
              <p className="text-xs font-semibold uppercase text-brand-green mb-3">Double Tap by AGlaze</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative rounded-2xl overflow-hidden shadow-xl border border-surface-300">
                  <img src="/aglaze-dashboard-1.png" alt="Double Tap by AGlaze — Marketing site homepage" className="w-full h-auto" />
                </div>
                <div className="relative rounded-2xl overflow-hidden shadow-xl border border-surface-300">
                  <img src="/aglaze-dashboard-2.png" alt="Double Tap by AGlaze — Journal and SEO content engine" className="w-full h-auto" />
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-10">
            <a
              href="https://calendly.com/tcase-wlej/revenue-system-install"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold bg-brand-dark text-white px-10 py-4 rounded-full hover:bg-brand-black transition-colors inline-block"
            >
              Book a 15-Minute Call
            </a>
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="py-24 border-t border-surface-300 bg-brand-dark">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs font-semibold tracking-wide uppercase text-brand-green-light mb-6">
              Ready to Start
            </p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-8">
              Stop Doing It<br />
              <span className="text-brand-green-light">Manually.</span>
            </h2>
            <p className="text-text-400 leading-relaxed text-lg mb-12">
              15 minutes. No pitch. We'll tell you exactly where automation can save you time and money — or we'll tell you we're not the right fit.
            </p>
            <a
              href="https://calendly.com/tcase-wlej/revenue-system-install"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold bg-white text-brand-dark px-10 py-4 rounded-full hover:bg-surface-200 transition-colors inline-block"
            >
              Book a 15-Minute Call
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
