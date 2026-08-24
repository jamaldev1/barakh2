import Header from '@/components/Header'
import FadeIn from '@/components/FadeIn'
import Link from 'next/link'
import CTABanner from '@/components/CTABanner'
import { resourcesData, downloadableBrochuresData } from '@/data/resources'

export const metadata = {
  title: 'Knowledge Centre & Downloadable Guides | Al Barakh Organics',
  description: 'Download official brochures, vermicompost dosage guides, and explore practical guides on vermicomposting, soil health, and sustainable farming from Al Barakh Organics.',
}

export default function ResourcesPage() {
  const articles = resourcesData.slice(0, 3)
  const brochures = downloadableBrochuresData

  return (
    <>
      <Header />

      {/* ═══ HERO BANNER ═══ */}
      <section className="relative min-h-[380px] lg:min-h-[440px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/hero-field.jpg" alt="Knowledge Centre & Resources" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-950/90 via-brand-900/80 to-brand-900/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-950/70 via-transparent to-brand-950/30" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 lg:py-24 w-full text-center">
          <FadeIn>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-400/20 border border-gold-400/40 text-gold-300 font-semibold text-xs uppercase tracking-wider mb-4 backdrop-blur-sm">
              Practical Agricultural Knowledge
            </span>
            <p className="font-cursive text-3xl md:text-4xl text-gold-400">Knowledge Centre</p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-2 leading-tight max-w-4xl mx-auto">
              Agricultural Resources &amp; Guides
            </h1>
            <p className="mt-4 text-white/90 max-w-2xl mx-auto text-base md:text-lg">
              Download technical brochures, dosage charts, and explore practical guides on vermicomposting, soil health, and Zaraat Kach&apos;heri.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ═══ 1. DOWNLOADABLE GUIDES & BROCHURES ═══ */}
      <section className="px-6 py-16 lg:py-20 bg-white border-b border-stone-200/80">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="max-w-3xl mb-12">
              <p className="text-[0.72rem] font-bold uppercase tracking-[0.2em] text-gold-600 mb-2">
                FREE PDF DOWNLOADS
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-900">
                Downloadable Guides &amp; Brochures
              </h2>
              <p className="mt-2.5 text-[#53636A] text-sm md:text-base">
                Instant access to our official product catalogs, dosage calculators, and training syllabus documents.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {brochures.map((item, idx) => (
              <FadeIn key={item.id} delay={idx * 0.08}>
                <div className="bg-cream-50/80 rounded-3xl p-6 border border-brand-100/80 hover:border-gold-400/80 hover:bg-white hover:shadow-xl transition-all duration-300 h-full flex flex-col justify-between group">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-3xl p-2.5 bg-white rounded-2xl shadow-xs border border-brand-100/60">{item.icon}</span>
                      <span className="text-[0.65rem] font-bold uppercase tracking-wider text-brand-800 bg-gold-400/20 border border-gold-400/30 px-2.5 py-1 rounded-full">
                        {item.format}
                      </span>
                    </div>

                    <span className="text-[0.7rem] font-bold text-gold-600 uppercase tracking-wider">{item.category}</span>
                    <h3 className="font-display font-bold text-brand-900 text-base mt-1 group-hover:text-brand-700 transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-brand-800/80 font-medium text-xs mt-1 leading-snug">
                      {item.subtitle}
                    </p>
                    <p className="text-gray-600 mt-3 text-xs leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-gray-200/60 flex flex-col gap-2">
                    <a
                      href={item.downloadUrl}
                      download={item.fileName}
                      className="w-full inline-flex items-center justify-center gap-2 bg-brand-900 hover:bg-brand-800 text-white text-xs font-bold py-3 px-4 rounded-xl shadow-xs transition group-hover:bg-gold-400 group-hover:text-brand-950"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      Download PDF File
                    </a>
                    <a
                      href={item.downloadUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-center text-[0.7rem] font-semibold text-brand-700 hover:text-gold-600 transition"
                    >
                      Open in Browser (Preview) ↗
                    </a>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 2. EDITORIAL JOURNAL — ARTICLES ═══ */}
      <section className="px-6 py-16 lg:py-24 bg-[#FAF9F5] border-b border-stone-200/80">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">

              {/* Left Column: Fixed Hero Image + Section Intro */}
              <div className="lg:col-span-5 lg:sticky lg:top-28">
                <p className="text-[0.72rem] font-bold uppercase tracking-[0.2em] text-gold-600 mb-2">
                  FIELD JOURNAL
                </p>
                <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-brand-900 leading-[1.1]">
                  Educational<br />Field Articles
                </h2>
                <p className="mt-3 text-[#53636A] text-sm leading-relaxed max-w-sm">
                  In-depth guides covering soil organic matter, earthworm management, and chemical reduction strategies for Pakistani agriculture.
                </p>

                {/* Fixed Agricultural Photograph */}
                <div className="mt-7 rounded-2xl overflow-hidden border border-stone-300/80 aspect-[4/3] bg-stone-100 shadow-xs">
                  <img
                    src="/images/hero-vermicompost.jpg"
                    alt="Rich organic vermicompost ready for field application"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>

                <p className="mt-4 text-[0.72rem] text-stone-500 leading-relaxed">
                  All articles are based on practical field experience at our 200+ bed facility in Tando Ghulam Ali, Sindh.
                </p>
              </div>

              {/* Right Column: Editorial Article List with Large Numbers & Dividers */}
              <div className="lg:col-span-7">
                <div className="relative pl-6 sm:pl-10 border-l border-stone-300/90">
                  {articles.map((article, idx) => (
                    <Link
                      key={article.id}
                      href={`/resources/${article.slug}`}
                      className="group block relative py-8 first:pt-0 border-b border-stone-200/90 last:border-none"
                    >
                      {/* Vertical Line Dot */}
                      <div className="absolute -left-[31px] sm:-left-[47px] top-10 first:top-2 w-3.5 h-3.5 rounded-full border-2 border-[#FAF9F5] bg-stone-300 group-hover:bg-gold-500 group-hover:scale-125 transition-all duration-300" />

                      <div className="flex items-start gap-4 sm:gap-6">
                        {/* Big Understated Number */}
                        <span className="font-display font-light text-4xl sm:text-5xl md:text-6xl text-gold-600/50 group-hover:text-gold-500 transition-colors flex-shrink-0 leading-none w-14 sm:w-20 select-none">
                          {String(idx + 1).padStart(2, '0')}
                        </span>

                        <div className="flex-1 min-w-0">
                          {/* Metadata Row */}
                          <div className="flex items-center gap-3 mb-2">
                            <span className="text-[0.62rem] font-bold uppercase tracking-wider text-gold-700 bg-gold-400/15 px-2 py-0.5 rounded">
                              {article.type || 'Guide'}
                            </span>
                            <span className="text-[0.65rem] text-stone-400 font-medium">
                              {article.category}
                            </span>
                            <span className="text-[0.6rem] text-stone-400">·</span>
                            <span className="text-[0.65rem] text-stone-400 font-medium">
                              {article.readTime}
                            </span>
                          </div>

                          {/* Article Title — Serif */}
                          <h3 className="font-display font-bold text-lg sm:text-xl md:text-2xl text-brand-900 leading-snug group-hover:text-brand-700 group-hover:translate-x-1 transition-all duration-200">
                            {article.title}
                          </h3>

                          {/* Excerpt — Sans-serif */}
                          <p className="text-[#53636A] text-xs sm:text-sm mt-2 leading-relaxed max-w-lg">
                            {article.excerpt}
                          </p>

                          {/* Read Link */}
                          <div className="mt-3 flex items-center gap-1.5 text-xs font-bold text-gold-700 group-hover:text-brand-900 transition-colors">
                            <span>Read Full Article</span>
                            <span className="group-hover:translate-x-1 transition-transform">→</span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══ 3. TOPIC SUGGESTION / WHATSAPP CTA ═══ */}
      <CTABanner
        eyebrow="Custom Agricultural Advisory"
        title="Looking for a Specific Guide or Training Topic?"
        description="Connect with our technical agronomy team on WhatsApp to request customized crop dosage charts or to suggest a topic for our next Zaraat Kach'heri guide."
        primaryBtnText="Suggest a Topic on WhatsApp →"
        primaryBtnHref="https://wa.me/923168803363?text=Hi,%20I%20would%20like%20to%20suggest%20an%20agricultural%20guide/training%20topic."
        secondaryBtnText="💬 Chat with Agronomist"
        secondaryBtnHref="https://wa.me/923168803363"
      />
    </>
  )
}
