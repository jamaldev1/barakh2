import Header from '@/components/Header'
import FadeIn from '@/components/FadeIn'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { resourcesData } from '@/data/resources'

export function generateStaticParams() {
  return resourcesData.map((r) => ({
    slug: r.slug,
  }))
}

export default async function ResourcePost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = resourcesData.find((r) => r.slug === slug)

  if (!post) return notFound()

  return (
    <>
      <Header />
      <article>
        {/* Article Header */}
        <section className="bg-brand-900 pt-24 pb-32 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <Link
                href="/resources"
                className="text-gold-400 text-sm font-semibold hover:text-gold-300 transition-colors mb-6 inline-flex items-center gap-2"
              >
                <span>←</span> Back to Resources
              </Link>
              <div className="mt-4 mb-6">
                <span className="bg-brand-700 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                  {post.type || 'Article'}
                </span>
              </div>
              <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                {post.title}
              </h1>
              <div className="mt-8 flex items-center justify-center gap-4 text-white/60 text-sm">
                <span>{post.date}</span>
                <span>•</span>
                <span>Al Barakh Organics</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Article Body */}
        <section className="px-6 -mt-16 relative z-10 pb-24">
          <div className="max-w-4xl mx-auto">
            <FadeIn delay={0.1}>
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                {/* Hero Image */}
                {post.image && (
                  <div className="w-full h-[400px] overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                {/* Content */}
                <div className="p-8 md:p-12 lg:p-16">
                  {/* Key Takeaways */}
                  {post.keyTakeaways && post.keyTakeaways.length > 0 && (
                    <div className="bg-cream-50 border border-brand-100 rounded-2xl p-6 mb-10">
                      <h3 className="font-display font-bold text-brand-900 text-lg mb-3 flex items-center gap-2">
                        <span className="text-gold-500">📌</span> Key Highlights
                      </h3>
                      <ul className="space-y-2">
                        {post.keyTakeaways.map((item, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-sm text-gray-700">
                            <span className="text-brand-600 font-bold">✓</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                    {post.content.split('\n\n').map((paragraph, i) => {
                      const trimmed = paragraph.trim()
                      if (trimmed.startsWith('#### ')) {
                        return (
                          <h4 key={i} className="text-lg font-display font-bold text-brand-800 mt-6">
                            {trimmed.replace('#### ', '')}
                          </h4>
                        )
                      }
                      if (trimmed.startsWith('### ')) {
                        return (
                          <h3 key={i} className="text-xl md:text-2xl font-display font-bold text-brand-900 mt-8 mb-2">
                            {trimmed.replace('### ', '')}
                          </h3>
                        )
                      }
                      if (trimmed.startsWith('## ')) {
                        return (
                          <h2 key={i} className="text-2xl md:text-3xl font-display font-bold text-brand-900 mt-10 mb-3">
                            {trimmed.replace('## ', '')}
                          </h2>
                        )
                      }
                      if (trimmed.startsWith('- ')) {
                        const items = trimmed.split('\n').filter(Boolean)
                        return (
                          <ul key={i} className="space-y-2 my-4 list-disc pl-5 text-gray-700">
                            {items.map((item, idx) => (
                              <li key={idx}>{item.replace(/^- /, '')}</li>
                            ))}
                          </ul>
                        )
                      }
                      if (trimmed.startsWith('1. ') || trimmed.startsWith('2. ') || trimmed.startsWith('3. ')) {
                        const items = trimmed.split('\n').filter(Boolean)
                        return (
                          <ol key={i} className="space-y-2 my-4 list-decimal pl-5 text-gray-700">
                            {items.map((item, idx) => (
                              <li key={idx}>{item.replace(/^\d+\.\s*/, '')}</li>
                            ))}
                          </ol>
                        )
                      }
                      return (
                        <p key={i} className="text-base text-gray-700 leading-relaxed">
                          {trimmed}
                        </p>
                      )
                    })}
                  </div>
                </div>

                {/* CTA Box */}
                <div className="bg-cream-100 p-8 md:p-12 text-center border-t border-cream-200">
                  <h3 className="font-display text-2xl font-bold text-brand-800 mb-4">
                    Have questions about this topic?
                  </h3>
                  <p className="text-gray-600 mb-6 max-w-lg mx-auto">
                    Our team is available to discuss practical applications and dosages for your farm.
                  </p>
                  <a
                    href={`https://wa.me/923000000000?text=Hi,%20I%20have%20a%20question%20about%20${encodeURIComponent(post.title)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex"
                  >
                    💬 Chat with an Expert on WhatsApp
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
      </article>
    </>
  )
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = resourcesData.find((r) => r.slug === slug)

  if (!post) return { title: 'Resource Not Found | Al Barakh Organics' }

  return {
    title: `${post.title} | Al Barakh Organics`,
    description: post.excerpt,
  }
}
