import Header from '@/components/Header'
import FadeIn from '@/components/FadeIn'
import MotionButton from '@/components/MotionButton'
import TestimonialCarousel from '@/components/TestimonialCarousel'
import CountUpStats from '@/components/CountUpStats'
import HeroBackgroundSlider from '@/components/HeroBackgroundSlider'
import CTABanner from '@/components/CTABanner'
import SolutionsSlider from '@/components/SolutionsSlider'
import FAQSection from '@/components/FAQSection'
import { testimonialsData } from '@/data/testimonials'

export const metadata = {
  title: 'Al Barakh Organics | Premium Vermicompost & Biological Agriculture',
  description:
    '100% pure organic vermicompost, active Eisenia fetida red worms, liquid vermiwash, and hands-on farmer training across Pakistan.',
}

const credibilityStats = [
  {
    value: 500,
    suffix: '+',
    label: 'Acres Supported',
    title: 'Proven Agricultural Impact',
    description: 'Real-world organic application across farms and orchards in Pakistan',
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
  { icon: 'https://askit.dextheme.net/agrow/wp-content/uploads/sites/53/2026/04/icon-1a.png', title: 'Premium-Quality Vermicompost' },
  { icon: 'https://askit.dextheme.net/agrow/wp-content/uploads/sites/53/2026/04/icon-2a.png', title: 'Farmer Empowerment & Training' },
  { icon: 'https://askit.dextheme.net/agrow/wp-content/uploads/sites/53/2026/04/icon-3a.png', title: 'Zaraat Kach’heri' },
]

const whatMakesUsDifferent = [
  { icon: 'https://askit.dextheme.net/agrow/wp-content/uploads/sites/53/2026/04/icon-13.png', title: 'Sustainable Agriculture', desc: 'Practical methods to rebuild soil organic matter and boost fertility' },
  { icon: 'https://askit.dextheme.net/agrow/wp-content/uploads/sites/53/2026/04/icon-12.png', title: '500+ Acres Supported', desc: 'Proven field track record across commercial farms and orchards' },
  { icon: 'https://askit.dextheme.net/agrow/wp-content/uploads/sites/53/2026/04/icon-11.png', title: 'Tree Donations to Schools', desc: 'Community engagement and environmental greening initiatives' },
]

export default function HomePage() {
  const testimonials = testimonialsData.map((t) => ({
    id: t.id,
    customerName: t.name,
    location: `${t.location} (${t.farmName})`,
    quote: t.quote,
    rating: String(t.rating),
    photoUrl: t.avatar,
  }))

  return (
    <>
      <Header />

      {/* ═══ HERO ═══ */}
      <section className="relative overflow-hidden min-h-[600px] lg:min-h-[700px] flex items-center">
        <HeroBackgroundSlider />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 md:py-24 lg:py-32 w-full">
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

      {/* ═══ FEATURE ICONS + ABOUT OUR FARM + WHAT MAKES US DIFFERENT ═══ */}
      <section className="home-feature-section max-w-7xl mx-auto px-6 -mt-16 pb-16 md:pb-24 lg:pb-32 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-6">
          {/* Left Column: Feature Icons + About */}
          <div className="flex flex-col">
            <FadeIn>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {featureIcons.map((item) => (
                  <div key={item.title} className="feature-icon-card">
                    <img src={item.icon} alt={item.title} className="feature-icon-img" />
                    <p className="text-white font-semibold text-sm">{item.title}</p>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="about-farm-copy mt-10">
                <p className="eyebrow">Why Al Barakh?</p>
                <h2 className="about-farm-title">
                  Rooted in Nature,<br />Driven by Sustainability
                </h2>
                <p className="about-farm-description text-base leading-relaxed">
                  We go beyond vermicompost by combining premium organic solutions, farmer empowerment, and practical agricultural knowledge to build healthier soil and a more sustainable future.
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

          {/* Right Column: What Makes Us Different */}
          <div className="self-start">
            <FadeIn delay={0.15}>
              <div className="highlight-card">
                <h3 className="font-display text-2xl font-bold mb-6">Key Benefits &amp; Impact</h3>
                <div className="space-y-5">
                  {whatMakesUsDifferent.map((item) => (
                    <div key={item.title} className="flex items-start gap-4">
                      <div className="icon-box bg-brand-800">
                        <img src={item.icon} alt={item.title} className="w-7 h-7 object-contain" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-brand-900">{item.title}</h4>
                        <p className="text-brand-800/70 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ═══ CREDIBILITY STATS (Agrow-style bento) ═══ */}
      <section className="bg-cream-100 px-6 py-16 md:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="stats-bento-heading">
              <p className="stats-bento-intro">From smallholder farmers to commercial growers, we empower sustainable agriculture across Pakistan with proven field results.</p>
              <div>
                <p className="eyebrow">Proven Field Impact</p>
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

      {/* ═══ SERVICES / SOLUTIONS SLIDER ═══ */}
      <SolutionsSlider />

      {/* ═══ FULL-WIDTH FARM BANNER ═══ */}
      <section className="relative min-h-[500px] flex items-center">
        <div className="absolute inset-0">
          <img
            src="/images/farmer-training.jpg"
            alt="Farmers working in the field"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-900/70" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 md:py-24 lg:py-32 w-full text-center">
          <FadeIn>
            <p className="font-cursive text-3xl text-gold-400">From Our Farms to Farmers</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-white mt-3 max-w-3xl mx-auto">
              Real Experience. Real Solutions.
            </h2>
            <p className="mt-6 text-white/80 max-w-2xl mx-auto leading-relaxed">
              Our knowledge comes from practical field experience. Organic fertilizers have been used across 400+ acres, giving Al Barakh practical insight into the application of organic inputs under real agricultural conditions.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a href="/about" className="btn-primary">Our Story →</a>
              <a href="/impact" className="inline-flex items-center gap-2 border-2 border-white/40 text-white px-6 py-3 rounded-md font-semibold hover:bg-white/10 transition text-sm">
                See Our Impact
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══ TRAINING TEASER ═══ */}
      <section className="px-6 py-16 md:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div className="rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1200&q=80"
                  alt="Farmer working in a field with rich soil"
                  className="w-full h-[450px] object-cover"
                />
              </div>
            </FadeIn>
            <FadeIn delay={0.15}>
              <div>
                <p className="eyebrow">Training & Capacity Building</p>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-800 mt-2 leading-snug">
                  Empowering Farmers with Knowledge
                </h2>
                <p className="mt-6 text-gray-600 leading-relaxed">
                  Training is a major part of the Al Barakh model. We believe sustainable agriculture requires not only access to organic inputs but also practical knowledge. More than 100 farmer and grower trainings have been conducted.
                </p>
                <ul className="mt-6 space-y-3">
                  {['Vermicomposting', 'Organic fertilizer production', 'Soil health & sustainable agriculture', 'Farm-level composting', 'Farmer entrepreneurship'].map((topic) => (
                    <li key={topic} className="flex items-center gap-3 text-gray-700">
                      <svg className="w-5 h-5 text-brand-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {topic}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-wrap gap-4">
                  <a href="/training" className="btn-primary">Request a Training →</a>
                  <a href="https://wa.me/923168803363" target="_blank" rel="noopener noreferrer" className="btn-dark">
                    💬 Talk to Us
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>


      {/* ═══ TESTIMONIALS ═══ */}
      {testimonials.length > 0 && (
        <section className="bg-cream-100 px-6 py-16 md:py-24 lg:py-32">
          <div className="max-w-7xl mx-auto">
            <FadeIn>
              <div className="text-center mb-16">
                <p className="eyebrow">Real Feedback</p>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-800 mt-2">
                  Farmer Stories
                </h2>
                <p className="text-gray-500 mt-3 max-w-lg mx-auto">
                  Real experiences from farmers and growers who use Al Barakh solutions
                </p>
              </div>

              <TestimonialCarousel
                testimonials={testimonials.map((t: any) => {
                  const photo = typeof t.photo === 'object' ? t.photo : null
                  return { id: t.id, customerName: t.customerName, location: t.location, quote: t.quote, rating: t.rating, photoUrl: photo?.url }
                })}
              />
            </FadeIn>
          </div>
        </section>
      )}

      {/* ═══ FAQ SECTION ═══ */}
      <FAQSection />

      {/* ═══ PREMIUM CTA BANNER ═══ */}
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
