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
              <Link href="/resources" className="text-gold-400 text-sm font-semibold hover:text-gold-300 transition-colors mb-6 inline-flex items-center gap-2">
                <span>←</span> Back to Resources
              </Link>
              <div className="mt-4 mb-6 flex items-center justify-center gap-2">
                <span className="bg-gold-400 text-brand-950 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">{post.type}</span>
                <span className="bg-brand-800 text-gold-300 text-xs font-semibold px-3 py-1.5 rounded-full">{post.category}</span>
              </div>
              <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                {post.title}
              </h1>
              <div className="mt-6 flex items-center justify-center gap-4 text-white/70 text-sm">
                <span>{post.readTime}</span>
                <span>•</span>
                <span>Al Barakh Agronomy Center</span>
                <span>•</span>
                <span className="text-gold-400 font-mono">{post.fileSize}</span>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Article Body */}
        <section className="px-6 -mt-16 relative z-10 pb-24">
          <div className="max-w-4xl mx-auto">
            <FadeIn delay={0.1}>
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 p-8 md:p-12">
                {/* Key Takeaways Box */}
                {post.keyTakeaways && post.keyTakeaways.length > 0 && (
                  <div className="bg-cream-50 border border-brand-100 rounded-2xl p-6 mb-10">
                    <h3 className="font-display font-bold text-brand-900 text-lg mb-3 flex items-center gap-2">
                      <span className="text-gold-500">📌</span> Key Field Takeaways
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

                {/* Markdown content preview */}
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                  {post.content.split('\n\n').map((paragraph, i) => {
                    if (paragraph.startsWith('### ')) {
                      return <h3 key={i} className="text-xl font-display font-bold text-brand-900 mt-6">{paragraph.replace('### ', '')}</h3>
                    }
                    if (paragraph.startsWith('## ')) {
                      return <h2 key={i} className="text-2xl font-display font-bold text-brand-900 mt-8 mb-3">{paragraph.replace('## ', '')}</h2>
                    }
                    if (paragraph.startsWith('# ')) {
                      return null
                    }
                    return <p key={i} className="text-base text-gray-700 leading-relaxed">{paragraph}</p>
                  })}
                </div>

                {/* Direct WhatsApp Consultation CTA */}
                <div className="mt-12 pt-8 border-t border-gray-100 bg-brand-50/50 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <h4 className="font-display font-bold text-brand-900 text-base">Have Questions About This Guide?</h4>
                    <p className="text-gray-600 text-xs mt-1">Talk directly with our agronomist for personalized advice for your crop.</p>
                  </div>
                  <a
                    href={`https://wa.me/923000000000?text=Hi,%20I%20read%20the%20${encodeURIComponent(post.title)}%20guide%20and%20have%20a%20question.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-xs py-3 px-6 whitespace-nowrap"
                  >
                    💬 Ask Agronomist on WhatsApp
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
    description: post.summary,
  }
}
