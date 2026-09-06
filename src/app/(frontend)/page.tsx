import Link from 'next/link'
import Header from '@/components/Header'
import FadeIn from '@/components/FadeIn'
import MotionButton from '@/components/MotionButton'
import TestimonialCarousel from '@/components/TestimonialCarousel'
import CountUpStats from '@/components/CountUpStats'
import HeroBackgroundSlider from '@/components/HeroBackgroundSlider'
import CTABanner from '@/components/CTABanner'
import FAQSection from '@/components/FAQSection'
import { testimonialsData } from '@/data/testimonials'

export const metadata = {
  title: 'Al Barakah Organics | Premium Vermicompost & Biological Agriculture',
  description:
    '100% pure organic vermicompost, active Eisenia fetida red worms, liquid vermiwash, and hands-on farmer training across Pakistan.',
}

const credibilityStats = [
  {
    value: 3000,
    suffix: '+',
    label: 'Acres Supported',
    title: 'Proven Agricultural Impact',
    description: 'Farmers of 3000+ acres are part of our community',
  },
  {
    value: 10000,
    suffix: '+',
    label: 'Bags Distributed',
    title: 'Organic Fertilizer Distribution',
    description: 'Premium vermicompost delivered to growers, nurseries & institutions',
  },
  {
    value: 100,
    suffix: '+',
    label: 'Farmer Trainings',
    title: 'Farmer Empowerment & Training',
    description: 'Practical workshops, field masterclasses & Zaraat Kach’heri sessions',
  },
]
const featureIcons = [
  {
    icon: '🎓',
    title: 'Farmer Training & Zaraat Kach’heri',
    desc: 'Empowering growers with modern agricultural knowledge',
    href: '/training',
  },
  {
    icon: '🌱',
    title: 'Premium Organic Vermicompost',
    desc: '100% pure organic biological fertilizer',
    href: '/products',
  },
  {
    icon: '🪱',
    title: 'Active Red Wiggler Colonies',
    desc: 'Healthy Eisenia fetida breeding stock',
    href: '/products',
  },
]

const whatMakesUsDifferent = [
  {
    icon: '🌿',
    title: 'Sustainable Soil Restoration',
    desc: 'Practical biological solutions to rebuild organic matter and cut chemical dependency',
  },
  {
    icon: '📈',
    title: '3000+ Acres Supported',
    desc: 'Trusted by growers, commercial orchards, and nurseries across Pakistan',
  },
  {
    icon: '🤝',
    title: 'Zaraat Kach’heri Community',
    desc: 'Open dialogue and hands-on masterclasses empowering farmers and new-generation growers',
  },
]

export default function HomePage() {
  const testimonials = testimonialsData.map((t) => ({
    id: t.id,
    customerName: t.name,
    location: t.farmName ? `${t.location} (${t.farmName})` : t.location,
    quote: t.quote,
    rating: String(t.rating),
    photoUrl: t.avatar,
  }))

  return (
    <>
      <Header />

      {/* ═══ 1. HERO ═══ */}
      <section className="relative overflow-hidden min-h-[600px] lg:min-h-[700px] flex items-center">
        <HeroBackgroundSlider />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32 w-full">
          <div className="max-w-2xl">
            <FadeIn>
              <p className="font-cursive text-3xl md:text-4xl text-gold-400">Farm Tomorrow</p>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.15] mt-3">
                Empowering Farmers.<br />Sustaining Agriculture.
              </h1>
              <p className="mt-6 text-white/90 leading-relaxed max-w-xl text-base md:text-lg">
                Premium Vermicompost and Practical Agricultural Knowledge for Healthier Soil, Better Farming, and a Sustainable Future.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <MotionButton
                  href="/products"
                  className="btn-primary text-base font-bold shadow-lg"
                >
                  Order Now →
                </MotionButton>
                <MotionButton
                  href="https://wa.me/923168803363"
                  className="inline-flex items-center gap-2 border-2 border-white/40 text-white px-6 py-3 rounded-md font-semibold hover:bg-white/10 transition text-sm"
                >
                  💬 Talk to Us
                </MotionButton>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ═══ 2. FEATURE ICONS + ABOUT OUR PURPOSE ═══ */}
      <section className="home-feature-section max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 pb-16 md:pb-24 lg:pb-32 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8">
          {/* Left Column: Feature Cards + About */}
          <div className="flex flex-col">
            <FadeIn>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {featureIcons.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="bg-brand-900/95 hover:bg-brand-800 text-white p-5 rounded-2xl border border-gold-400/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gold-400/20 text-gold-300 flex items-center justify-center text-2xl mb-4 border border-gold-400/30 group-hover:bg-gold-400 group-hover:text-brand-950 transition-colors">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-white text-base leading-snug group-hover:text-gold-300 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-white/70 text-xs mt-1 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="about-farm-copy mt-10">
                <span className="eyebrow text-gold-500">Why Al Barakah?</span>
                <h2 className="about-farm-title">
                  Rooted in Nature,<br />Driven by Sustainability
                </h2>
                <p className="about-farm-description text-base leading-relaxed">
                  We go beyond vermicompost by combining premium organic solutions, farmer empowerment, and practical agricultural knowledge to build healthier soil and a more sustainable future across Pakistan.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-4">
                  <a href="/about" className="about-farm-button">
                    Read Our Story →
                  </a>
                  <a href="/training" className="inline-flex items-center gap-2 text-sm font-semibold text-brand-800 hover:text-brand-600 underline">
                    Learn About Zaraat Kach’heri →
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right Column: Key Pillars & Impact */}
          <div className="self-start">
            <FadeIn delay={0.15}>
              <div className="bg-white p-7 rounded-3xl border border-brand-100 shadow-md">
                <h3 className="font-display text-2xl font-bold text-brand-900 mb-6">Key Pillars &amp; Impact</h3>
                <div className="space-y-5">
                  {whatMakesUsDifferent.map((item) => (
                    <div key={item.title} className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-xl bg-cream-100 border border-brand-100 flex items-center justify-center text-xl flex-shrink-0 text-brand-900 shadow-xs">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="font-display font-bold text-brand-900 text-sm">{item.title}</h4>
                        <p className="text-gray-600 text-xs leading-relaxed mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ═══ 3. CREDIBILITY STATS ═══ */}
      <section className="w-full bg-cream-100 border-t border-brand-100/70 px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="stats-bento-heading">
              <p className="stats-bento-intro">From smallholder farmers to commercial growers, we empower sustainable agriculture across Pakistan with proven field results.</p>
              <div>
                <span className="eyebrow text-gold-500">Proven Field Impact</span>
                <h2 className="stats-bento-title">
                  Supporting Farms<br />That Feed Pakistan
                </h2>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <CountUpStats stats={credibilityStats} variant="bento" />
          </FadeIn>
        </div>
      </section>

      {/* ═══ 4. SOLUTIONS RECTANGULAR GRID (Center Hub + Surrounding Solutions + More Details) ═══ */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-20 lg:py-28 bg-white border-t border-brand-100/80 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="eyebrow text-gold-500">What We Offer</span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-brand-900 mt-2">
                Our Services &amp; Agricultural Solutions
              </h2>
            </div>
          </FadeIn>

          {/* 3x3 Rectangular Perimeter Grid with Center Hub (No Icons) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
            {/* 1. Top-Left */}
            <FadeIn delay={0.05}>
              <Link
                href="/products"
                className="bg-cream-50/70 hover:bg-white p-7 rounded-3xl border border-brand-100 hover:border-gold-400/80 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-center text-center h-full min-h-[160px] group hover:-translate-y-1"
              >
                <h3 className="font-display font-bold text-brand-900 text-xl leading-snug group-hover:text-gold-600 transition-colors">
                  Premium Vermicompost
                </h3>
                <span className="text-[0.72rem] uppercase tracking-wider font-semibold text-gold-600 mt-2">
                  100% Pure Bio-Nutrition
                </span>
              </Link>
            </FadeIn>

            {/* 2. Top-Center */}
            <FadeIn delay={0.08}>
              <Link
                href="/products"
                className="bg-cream-50/70 hover:bg-white p-7 rounded-3xl border border-brand-100 hover:border-gold-400/80 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-center text-center h-full min-h-[160px] group hover:-translate-y-1"
              >
                <h3 className="font-display font-bold text-brand-900 text-xl leading-snug group-hover:text-gold-600 transition-colors">
                  Active Red Wigglers
                </h3>
                <span className="text-[0.72rem] uppercase tracking-wider font-semibold text-gold-600 mt-2">
                  Breeding Colonies
                </span>
              </Link>
            </FadeIn>

            {/* 3. Top-Right */}
            <FadeIn delay={0.11}>
              <Link
                href="/solutions"
                className="bg-cream-50/70 hover:bg-white p-7 rounded-3xl border border-brand-100 hover:border-gold-400/80 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-center text-center h-full min-h-[160px] group hover:-translate-y-1"
              >
                <h3 className="font-display font-bold text-brand-900 text-xl leading-snug group-hover:text-gold-600 transition-colors">
                  Soil Health &amp; Diagnostics
                </h3>
                <span className="text-[0.72rem] uppercase tracking-wider font-semibold text-gold-600 mt-2">
                  Biological Rejuvenation
                </span>
              </Link>
            </FadeIn>

            {/* 4. Middle-Left */}
            <FadeIn delay={0.14}>
              <Link
                href="/solutions"
                className="bg-cream-50/70 hover:bg-white p-7 rounded-3xl border border-brand-100 hover:border-gold-400/80 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-center text-center h-full min-h-[160px] group hover:-translate-y-1"
              >
                <h3 className="font-display font-bold text-brand-900 text-xl leading-snug group-hover:text-gold-600 transition-colors">
                  Organic Waste Conversion
                </h3>
                <span className="text-[0.72rem] uppercase tracking-wider font-semibold text-gold-600 mt-2">
                  Farm Waste to Wealth
                </span>
              </Link>
            </FadeIn>

            {/* 5. CENTER HUB BOX (Middle-Center) */}
            <FadeIn delay={0.17}>
              <div className="bg-gradient-to-br from-brand-900 via-brand-950 to-brand-900 text-white p-8 rounded-3xl border-2 border-gold-400/40 shadow-xl flex flex-col items-center justify-center text-center h-full min-h-[200px] relative overflow-hidden group hover:border-gold-400 transition-colors">
                <div className="absolute inset-0 bg-[radial-gradient(#ffca19_1px,transparent_1px)] [background-size:16px_16px] opacity-10" />
                <span className="text-[0.65rem] uppercase tracking-widest text-gold-300 font-bold px-3 py-1 rounded-full bg-brand-950 border border-gold-400/30 mb-2 relative z-10">
                  AL BARAKAH
                </span>
                <h3 className="font-display text-2xl md:text-3xl font-bold text-white leading-tight relative z-10">
                  Our Services &amp;<br />
                  <span className="text-gold-300">Solutions</span>
                </h3>
                <p className="text-white/70 text-xs mt-2 max-w-[200px] relative z-10 leading-relaxed">
                  Practical biological agriculture for Pakistan
                </p>
              </div>
            </FadeIn>

            {/* 6. Middle-Right */}
            <FadeIn delay={0.2}>
              <Link
                href="/training"
                className="bg-cream-50/70 hover:bg-white p-7 rounded-3xl border border-brand-100 hover:border-gold-400/80 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-center text-center h-full min-h-[160px] group hover:-translate-y-1"
              >
                <h3 className="font-display font-bold text-brand-900 text-xl leading-snug group-hover:text-gold-600 transition-colors">
                  Zaraat Kach’heri Training
                </h3>
                <span className="text-[0.72rem] uppercase tracking-wider font-semibold text-gold-600 mt-2">
                  Farmer Masterclasses
                </span>
              </Link>
            </FadeIn>

            {/* 7. Bottom-Left */}
            <FadeIn delay={0.23}>
              <Link
                href="/solutions"
                className="bg-cream-50/70 hover:bg-white p-7 rounded-3xl border border-brand-100 hover:border-gold-400/80 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-center text-center h-full min-h-[160px] group hover:-translate-y-1"
              >
                <h3 className="font-display font-bold text-brand-900 text-xl leading-snug group-hover:text-gold-600 transition-colors">
                  On-Farm Bed Setup
                </h3>
                <span className="text-[0.72rem] uppercase tracking-wider font-semibold text-gold-600 mt-2">
                  Commercial Infrastructure
                </span>
              </Link>
            </FadeIn>

            {/* 8. Bottom-Center */}
            <FadeIn delay={0.26}>
              <Link
                href="/contact"
                className="bg-cream-50/70 hover:bg-white p-7 rounded-3xl border border-brand-100 hover:border-gold-400/80 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-center text-center h-full min-h-[160px] group hover:-translate-y-1"
              >
                <h3 className="font-display font-bold text-brand-900 text-xl leading-snug group-hover:text-gold-600 transition-colors">
                  Commercial Bulk Supply
                </h3>
                <span className="text-[0.72rem] uppercase tracking-wider font-semibold text-gold-600 mt-2">
                  B2B &amp; Contract Supply
                </span>
              </Link>
            </FadeIn>

            {/* 9. Bottom-Right (LAST BLOCK - MORE DETAILS IN BRAND THEME) */}
            <FadeIn delay={0.29}>
              <Link
                href="/solutions"
                className="bg-brand-900 hover:bg-brand-950 text-white p-7 rounded-3xl border-2 border-gold-400/40 hover:border-gold-400 shadow-md hover:shadow-xl flex flex-col items-center justify-center text-center h-full min-h-[160px] group hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              >
                <h3 className="font-display font-bold text-white text-xl leading-snug group-hover:text-gold-300 transition-colors">
                  More Details
                </h3>
                <p className="text-white/70 text-xs mt-1 mb-3 leading-relaxed">
                  View complete process &amp; audits
                </p>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold bg-gold-400 text-brand-950 px-4 py-1.5 rounded-full group-hover:bg-gold-300 transition-colors shadow-xs">
                  Solutions Page →
                </span>
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ═══ 5. TESTIMONIALS ═══ */}
      {testimonials.length > 0 && (
        <section className="w-full bg-cream-100 border-t border-brand-100/80 px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
          <div className="max-w-7xl mx-auto">
            <FadeIn>
              <div className="text-center mb-16">
                <span className="eyebrow text-gold-500">Real Feedback</span>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-800 mt-2">
                  Farmer Stories
                </h2>
                <p className="text-gray-500 mt-3 max-w-lg mx-auto">
                  Real experiences from farmers and growers who use Al Barakah solutions
                </p>
              </div>

              <TestimonialCarousel testimonials={testimonials} />
            </FadeIn>
          </div>
        </section>
      )}

      {/* ═══ 6. FAQ SECTION ═══ */}
      <FAQSection />

      {/* ═══ 7. PREMIUM CTA BANNER ═══ */}
      <CTABanner
        eyebrow="Restore Our Soil"
        title="Ready to Build a Sustainable Future?"
        description="Together, let’s restore our soil, empower our farmers, and build a sustainable future for agriculture in Pakistan."
        primaryBtnText="Order Now →"
        primaryBtnHref="/products"
        secondaryBtnText="Get In Touch →"
        secondaryBtnHref="/contact"
      />
    </>
  )
}
