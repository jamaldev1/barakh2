import Header from '@/components/Header'
import FadeIn from '@/components/FadeIn'
import Link from 'next/link'
import CTABanner from '@/components/CTABanner'
import { resourcesData } from '@/data/resources'

export const metadata = {
  title: 'Knowledge Centre & Farming Resources | Al Barakh Organics',
  description: 'Learn about vermicomposting, soil health, and sustainable agriculture from Al Barakh Organics.',
}

export default function ResourcesPage() {
  const posts = resourcesData

  return (
    <>
      <Header />

      {/* Hero Banner */}
      <section className="relative min-h-[350px] flex items-center">
        <div className="absolute inset-0">
          <img src="/images/hero-field.jpg" alt="Knowledge Centre" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-brand-900/75" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full text-center">
          <FadeIn>
            <p className="font-cursive text-3xl text-gold-400">Knowledge Centre</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white mt-3">Agricultural Resources</h1>
            <p className="mt-4 text-white/80 max-w-2xl mx-auto">Learn about vermicomposting, soil health, and practical sustainable farming methods.</p>
          </FadeIn>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="px-6 py-24 bg-cream-50">
        <div className="max-w-7xl mx-auto">
          {posts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">New resources are being prepared. Check back soon.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, i: number) => {
                return (
                  <FadeIn key={post.id} delay={i * 0.1}>
                    <Link href={`/resources/${post.slug}`} className="block h-full group">
                      <div className="agrow-card h-full flex flex-col p-0 overflow-hidden bg-white rounded-3xl border border-brand-100 shadow-sm hover:shadow-md transition-all">
                        {/* Header Box */}
                        <div className="relative h-48 bg-gradient-to-br from-brand-900 via-brand-800 to-brand-950 p-6 flex flex-col justify-between text-white">
                          <div className="flex items-center justify-between">
                            <span className="bg-gold-400 text-brand-950 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                              {post.type}
                            </span>
                            <span className="text-xs text-white/70 font-mono">{post.fileSize}</span>
                          </div>
                          <div>
                            <span className="text-xs text-gold-300 font-semibold">{post.category}</span>
                            <p className="text-xs text-white/60">{post.readTime}</p>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="p-6 md:p-8 flex-grow flex flex-col justify-between bg-white">
                          <div>
                            <h3 className="font-display text-xl font-bold text-brand-900 group-hover:text-brand-700 transition-colors line-clamp-2">
                              {post.title}
                            </h3>
                            <p className="mt-3 text-gray-600 text-sm leading-relaxed line-clamp-3">
                              {post.summary}
                            </p>
                          </div>
                          <div className="mt-6 flex items-center text-gold-600 font-semibold text-sm group-hover:text-brand-700 transition-colors">
                            Read Guide & View Tables <span className="ml-2">→</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </FadeIn>
                )
              })}
            </div>
          )}
        </div>
      </section>

      {/* Suggest Topic CTA */}
      <CTABanner
        eyebrow="Can't Find What You Need?"
        title="Looking for a Specific Farming Guide?"
        description="Our agronomy team regularly publishes free field guides, worm-care manuals, and soil restoration whitepapers. Ask us for customized resources."
        primaryBtnText="Suggest a Topic →"
        primaryBtnHref="/contact"
        secondaryBtnText="💬 Ask on WhatsApp"
        secondaryBtnHref="https://wa.me/923000000000?text=Hi,%20I%20have%20a%20question%20about%20organic%20farming%20resources."
      />
    </>
  )
}
