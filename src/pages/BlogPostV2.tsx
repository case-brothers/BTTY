import { Link, Navigate, useParams } from 'react-router-dom'
import { getBlogPost } from '../data/blogPosts'

export default function BlogPostV2() {
  const { slug } = useParams()
  const post = slug ? getBlogPost(slug) : undefined

  if (!post) {
    return <Navigate to="/blog" replace />
  }

  return (
    <>
      <section className="border-b border-[#e4ece1] bg-[linear-gradient(180deg,#f7fbf5_0%,#ffffff_82%)] pb-16 pt-28">
        <div className="mx-auto max-w-4xl px-6">
          <Link to="/blog" className="text-sm font-semibold text-brand-green transition-colors hover:text-brand-green-light">
            Back to Blog
          </Link>
          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-brand-green">{post.kicker}</p>
          <h1 className="mt-5 text-4xl font-black leading-[1] tracking-[-0.05em] text-text-900 md:text-6xl">{post.title}</h1>
          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-text-400">
            <span>{post.publishDate}</span>
            <span>{post.readTime}</span>
          </div>
          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-text-500">{post.excerpt}</p>
        </div>
      </section>

      <section className="border-b border-[#e4ece1] bg-white py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-[0.95fr_0.65fr]">
          <article className="space-y-10">
            <div className="rounded-[1.8rem] border border-[#d8e8db] bg-[linear-gradient(135deg,#f7fbf5_0%,#edf7ed_100%)] p-8 shadow-[0_24px_80px_rgba(29,107,67,0.08)]">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-green">Key takeaway</p>
              <p className="mt-3 text-xl leading-relaxed text-text-800">{post.highlight}</p>
            </div>

            {post.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-3xl font-black tracking-[-0.04em] text-text-900">{section.heading}</h2>
                <div className="mt-5 space-y-5">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="text-base leading-relaxed text-text-600">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </article>

          <aside className="space-y-6">
            <div className="rounded-[1.6rem] border border-[#e4ece1] bg-[#fbfdfb] p-6 shadow-[0_18px_50px_rgba(29,107,67,0.05)]">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-green">Why this matters for owners</p>
              <p className="mt-3 text-sm leading-relaxed text-text-500">{post.whyItMatters}</p>
            </div>

            <div className="rounded-[1.6rem] border border-[#e4ece1] bg-white p-6 shadow-[0_18px_50px_rgba(29,107,67,0.05)]">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-green">Sources</p>
              <div className="mt-4 flex flex-col gap-3">
                {post.sources.map((source) => (
                  <a
                    key={source.url}
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-[1rem] border border-[#e4ece1] px-4 py-3 text-sm font-semibold text-text-700 transition-colors hover:border-brand-green hover:text-brand-green"
                  >
                    {source.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="rounded-[1.6rem] border border-[#e4ece1] bg-white p-6 shadow-[0_18px_50px_rgba(29,107,67,0.05)]">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-green">Next step</p>
              <p className="mt-3 text-sm leading-relaxed text-text-500">
                If you want the benefit of AI without adding more chaos, Betty can help qualify the problem or we can talk through what the right first system looks like.
              </p>
              <div className="mt-5 flex flex-col gap-3">
                <button
                  type="button"
                  onClick={() => window.dispatchEvent(new Event('open-betty-assistant'))}
                  className="rounded-full bg-brand-green px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-green-light"
                >
                  Ask Betty
                </button>
                <a
                  href="https://calendly.com/tcase-wlej/revenue-system-install"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-[#dfe8db] px-5 py-3 text-center text-sm font-semibold text-text-700 transition-colors hover:border-brand-green hover:text-brand-green"
                >
                  Book a Call
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}
