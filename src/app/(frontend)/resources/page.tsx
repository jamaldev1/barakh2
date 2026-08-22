import Header from '@/components/Header'
import FadeIn from '@/components/FadeIn'
import Link from 'next/link'
import { resourcesData } from '@/data/resources'

export const metadata = {
  title: 'Knowledge Centre | Al Barakh Organics',
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
            <p className="mt-4 text-white/80 max-w-2xl mx-auto">
              Learn about vermicomposting, soil health, and practical sustainable farming methods.
            </p>
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
                      <div className="agrow-card h-full flex flex-col p-0 overflow-hidden">
                        {/* Image */}
                        <div className="relative h-64 overflow-hidden">
                          {post.image ? (
                            <img
                              src={post.image}
                              alt={post.title}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                          ) : (
                            <div className="w-full h-full bg-cream-200 flex items-center justify-center text-brand-300">
                              <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 14l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
                              </svg>
                            </div>
                          )}
                          <div className="absolute top-4 left-4 bg-gold-400 text-brand-900 text-xs font-bold px-3 py-1 rounded-md">
                            {post.type || 'Article'}
                          </div>
                        </div>

                        {/* Content */}
                        <div className="p-6 md:p-8 flex-grow flex flex-col justify-between bg-white">
                          <div>
                            <p className="text-sm text-brand-500 font-semibold mb-3">{post.date}</p>
                            <h3 className="font-display text-xl font-bold text-brand-800 group-hover:text-brand-500 transition-colors line-clamp-2">
                              {post.title}
                            </h3>
                            <p className="mt-3 text-gray-600 text-sm leading-relaxed line-clamp-3">
                              {post.excerpt}
                            </p>
                          </div>
                          <div className="mt-6 flex items-center text-gold-600 font-semibold text-sm group-hover:text-brand-600 transition-colors">
                            Read More <span className="ml-2">→</span>
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
      <section className="bg-brand-800 px-6 py-20 text-center">
        <FadeIn>
          <p className="font-cursive text-3xl text-gold-400">Can&apos;t Find What You Need?</p>
          <h2 className="font-display text-3xl font-bold text-white mt-3">Suggest a Training Topic</h2>
          <div className="mt-8">
            <a
              href="https://wa.me/923000000000?text=Hi,%20I%20would%20like%20to%20suggest%20a%20topic%20for%20an%20agricultural%20resource/training."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-base"
            >
              💬 Talk to Us on WhatsApp →
            </a>
          </div>
        </FadeIn>
      </section>
    </>
  )
}
