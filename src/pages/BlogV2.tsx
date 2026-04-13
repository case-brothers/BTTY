import { Link } from 'react-router-dom'
import { blogPosts } from '../data/blogPosts'

export default function BlogV2() {
  const [featuredPost, ...otherPosts] = blogPosts

  return (
    <>
      <section className="border-b border-[#e4ece1] bg-[linear-gradient(180deg,#f7fbf5_0%,#ffffff_78%)] pb-18 pt-28">
        <div className="mx-auto max-w-6xl px-6">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-brand-green">Blog</p>
          <h1 className="max-w-5xl text-4xl font-black leading-[1] tracking-[-0.05em] text-text-900 md:text-6xl">
            Real evidence that AI-backed businesses move faster and perform better.
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-text-500 md:text-lg">
            These are not all BTTY case studies, and that is the point. Proof is proof. We are collecting credible outside research and business examples that show why operators who use AI well gain speed, visibility, and leverage.
          </p>
        </div>
      </section>

      <section className="border-b border-[#e4ece1] bg-white py-20">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div className="rounded-[2rem] border border-[#d8e8db] bg-[linear-gradient(135deg,#f7fbf5_0%,#edf7ed_100%)] p-8 shadow-[0_24px_80px_rgba(29,107,67,0.08)]">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-green">{featuredPost.kicker}</p>
            <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] text-text-900 md:text-4xl">{featuredPost.title}</h2>
            <p className="mt-5 text-base leading-relaxed text-text-500">{featuredPost.excerpt}</p>
            <div className="mt-6 rounded-[1.4rem] border border-[#dfe8db] bg-white px-5 py-5">
              <p className="text-sm font-semibold text-brand-green">Why this matters</p>
              <p className="mt-2 text-sm leading-relaxed text-text-600">{featuredPost.highlight}</p>
            </div>
            <div className="mt-6 flex items-center gap-4 text-sm text-text-400">
              <span>{featuredPost.publishDate}</span>
              <span>{featuredPost.readTime}</span>
            </div>
            <Link
              to={`/blog/${featuredPost.slug}`}
              className="mt-8 inline-block rounded-full bg-brand-green px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-green-light"
            >
              Read article
            </Link>
          </div>

          <div className="grid gap-4">
            {otherPosts.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="rounded-[1.6rem] border border-[#e4ece1] bg-[#fbfdfb] p-6 shadow-[0_18px_50px_rgba(29,107,67,0.05)] transition-transform hover:-translate-y-0.5"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-green">{post.kicker}</p>
                <h3 className="mt-3 text-2xl font-bold tracking-[-0.03em] text-text-900">{post.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-text-500">{post.excerpt}</p>
                <div className="mt-5 flex items-center gap-4 text-xs text-text-400">
                  <span>{post.publishDate}</span>
                  <span>{post.readTime}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[linear-gradient(135deg,#145233_0%,#1d6b43_45%,#5eb67d_100%)] py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">Want the same leverage in your business</p>
          <h2 className="mt-6 text-4xl font-black tracking-[-0.04em] text-white md:text-6xl">
            Evidence matters.
            <br />
            So does execution.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
            If you want help turning these ideas into real systems, Betty can start the conversation or we can talk through the next step directly.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => window.dispatchEvent(new Event('open-betty-assistant'))}
              className="rounded-full bg-white px-8 py-4 text-sm font-semibold text-brand-dark transition-colors hover:bg-surface-200"
            >
              Ask Betty
            </button>
            <a
              href="https://calendly.com/tcase-wlej/revenue-system-install"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/20 px-8 py-4 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white/8"
            >
              Book a Call
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
