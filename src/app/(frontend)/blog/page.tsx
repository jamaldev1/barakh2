import Header from '@/components/Header'
import FadeIn from '@/components/FadeIn'
import Link from 'next/link'
import CTABanner from '@/components/CTABanner'
import { blogPostsData } from '@/data/blog'

export const metadata = {
  title: 'Blog & Educational Articles | Al Barakh Organics',
  description: 'Learn about organic farming, vermicompost, soil health, and practical agricultural techniques in Pakistan.',
}

export default function BlogPage() {
  const posts = blogPostsData

  return (
    <>
      <Header />

      {/* ═══ HERO BANNER ═══ */}
      <section className="relative min-h-[380px] lg:min-h-[440px] flex items-center overflow-hidden w-full">
        <div className="absolute inset-0">
          <img
            src="/images/hero-field.jpg"
            alt="Al Barakh Organics Blog & Insights"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-950/90 via-brand-900/80 to-brand-900/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-950/70 via-transparent to-brand-950/30" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24 w-full text-center">
          <FadeIn>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-400/20 border border-gold-400/40 text-gold-300 font-semibold text-xs uppercase tracking-wider mb-4 backdrop-blur-sm">
              Agricultural Knowledge &amp; Field Guides
            </span>
            <p className="font-cursive text-3xl md:text-4xl text-gold-400">Learn &amp; Grow</p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-2 leading-tight max-w-4xl mx-auto">
              Blog &amp; Agricultural Insights
            </h1>
            <p className="mt-4 text-white/90 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
              Explore practical guides on vermicomposting, soil regeneration, and chemical reduction tailored to Pakistani growers.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ═══ BLOG ARTICLES GRID ═══ */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-16 lg:py-24 bg-cream-100/50 border-b border-brand-100/80">
        <div className="max-w-7xl mx-auto">
          {posts.length === 0 ? (
            <p className="text-gray-500 text-center">No posts published yet.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, i: number) => {
                return (
                  <FadeIn key={post.id} delay={i * 0.1}>
                    <div className="rounded-3xl overflow-hidden bg-white border border-brand-100/80 hover:border-gold-400 hover:shadow-xl transition-all duration-300 h-full flex flex-col justify-between group hover:-translate-y-1">
                      <div>
                        <div className="aspect-[4/3] overflow-hidden bg-cream-50 relative">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <span className="absolute top-3 left-3 bg-brand-900/90 text-gold-300 text-xs font-bold px-3 py-1 rounded-full border border-white/20">
                            {post.category}
                          </span>
                        </div>

                        <div className="p-6">
                          <span className="text-xs text-gray-400 font-medium">
                            {post.date}
                          </span>

                          <h2 className="font-display text-lg sm:text-xl font-bold text-brand-900 mt-2 leading-snug group-hover:text-gold-600 transition-colors">
                            {post.title}
                          </h2>

                          <p className="text-gray-600 mt-3 text-xs sm:text-sm leading-relaxed line-clamp-3">
                            {post.excerpt}
                          </p>
                        </div>
                      </div>

                      <div className="p-6 pt-0">
                        <Link
                          href={`/blog/${post.slug}`}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-800 group-hover:text-gold-600 transition-colors"
                        >
                          <span>Read Full Article</span>
                          <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </Link>
                      </div>
                    </div>
                  </FadeIn>
                )
              })}
            </div>
          )}
        </div>
      </section>

      {/* ═══ CTA BANNER ═══ */}
      <CTABanner
        eyebrow="Have Questions About Organic Farming?"
        title="Ready to Transform Your Soil Health?"
        description="Our agronomy team is here to guide you with customized organic formulations, farmer trainings, and bulk supply."
        primaryBtnText="Browse Products →"
        primaryBtnHref="/products"
        secondaryBtnText="💬 Ask on WhatsApp"
        secondaryBtnHref="https://wa.me/923168803363"
      />
    </>
  )
}
