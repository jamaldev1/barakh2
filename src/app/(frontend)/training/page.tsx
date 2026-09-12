import Header from '@/components/Header'
import FadeIn from '@/components/FadeIn'
import CTABanner from '@/components/CTABanner'
import TrainingProgrammeCatalogue from '@/components/TrainingProgrammeCatalogue'
import TrainingStepForm from '@/components/TrainingStepForm'

export const metadata = {
  title: 'Zaraat Kach’heri Training Programme | Al Barakah Organics',
  description:
    'Zaraat Kach’heri: Over 100+ training sessions and 500+ farmers empowered across Pakistan with practical vermicomposting, soil restoration, and modern sustainable agriculture.',
}

const keyTrainingStats = [
  { value: '100+', label: 'Sessions Conducted', sub: 'Practical agricultural training & dialogues' },
  { value: '500+', label: 'Farmers & Growers Trained', sub: 'Across commercial farms, orchards & nurseries' },
  { value: '12', label: 'Core Curriculum Modules', sub: 'Across 3 specialized learning pillars' },
  { value: '4', label: 'Operating Locations', sub: 'Tando Ghulam Ali, Hyderabad, Tando Allahyar & Badin' },
]

export default function TrainingPage() {
  return (
    <>
      <Header />

      {/* ═══ HERO BANNER ═══ */}
      <section className="relative min-h-[440px] lg:min-h-[500px] flex items-center overflow-hidden w-full">
        <div className="absolute inset-0">
          <img
            src="/images/albarakah5.jpeg"
            alt="Zaraat Kach’heri Farmer Training Session by Al Barakah Organics"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-950/95 via-brand-900/85 to-brand-900/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-950/80 via-transparent to-brand-950/40" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-26 w-full text-center">
          <FadeIn>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-400/20 border border-gold-400/40 text-gold-300 font-semibold text-xs uppercase tracking-wider mb-4 backdrop-blur-sm">
              🌾 Community Empowerment &amp; Agricultural Knowledge
            </span>
            <p className="font-cursive text-3xl md:text-4xl text-gold-400">Farmer Education &amp; Field Masterclasses</p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-2 leading-tight max-w-4xl mx-auto">
              “Zaraat Kach’heri”<br />
              <span className="text-gold-300">Connecting, Educating &amp; Empowering Growers</span>
            </h1>
            <p className="mt-4 text-white/90 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
              Hands-on bed demonstrations, live biological soil restoration, and modern organic practices empowering farmers across Pakistan.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a href="#sessions" className="btn-primary text-base font-bold shadow-lg">
                View Upcoming Programmes ↓
              </a>
              <a
                href="https://wa.me/923168803363?text=Hi,%20I%20am%20interested%20in%20joining/requesting%20a%20Zaraat%20Kach'heri%20farmer%20training%20session."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 text-white px-7 py-3.5 rounded-xl font-bold transition-all duration-300 backdrop-blur-sm border border-white/30 text-base shadow-md hover:-translate-y-0.5"
              >
                💬 Inquire on WhatsApp
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══ KEY ACHIEVEMENTS & STATS BAR ═══ */}
      <section className="w-full bg-brand-900 text-white py-10 px-4 sm:px-6 lg:px-8 border-b border-gold-400/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 text-center">
            {keyTrainingStats.map((stat) => (
              <div key={stat.label} className="p-4 bg-brand-800/60 rounded-2xl border border-white/10">
                <p className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gold-400">{stat.value}</p>
                <p className="font-bold text-sm text-white mt-1">{stat.label}</p>
                <p className="text-white/70 text-xs mt-0.5">{stat.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ VISUAL 3-PILLAR CURRICULUM SECTION (Picture-First) ═══ */}
      <section id="curriculum" className="w-full px-4 sm:px-6 lg:px-8 py-16 lg:py-24 bg-white border-b border-brand-100/80 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="eyebrow text-gold-500">Core Curriculum</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-900 mt-1">
                3 Pillars of Practical Learning
              </h2>
              <p className="mt-2.5 text-gray-600 text-sm md:text-base">
                Direct, practical modules taking growers from soil restoration to profitable vermiculture enterprise.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Pillar 1 */}
            <FadeIn delay={0.05}>
              <div className="bg-cream-50 rounded-3xl overflow-hidden border border-brand-100 shadow-sm hover:shadow-xl transition-all duration-500 group flex flex-col h-full">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src="/images/training-soil-demo.jpg"
                    alt="Soil Biology & Organic Nutrition"
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-950/85 via-transparent to-transparent" />
                  <span className="absolute top-3 left-3 bg-gold-400 text-brand-950 text-xs font-mono font-bold px-3 py-1 rounded-full shadow-sm">
                    PILLAR 01
                  </span>
                  <p className="absolute bottom-3 left-4 right-4 font-display font-bold text-white text-lg">
                    Soil Biology &amp; Nutrition
                  </p>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <ul className="space-y-2.5 text-xs sm:text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-gold-600 font-bold">✓</span>
                      <span>Restoring humus &amp; beneficial microbial networks</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gold-600 font-bold">✓</span>
                      <span>Cutting chemical fertilizer dependency by 40%–60%</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gold-600 font-bold">✓</span>
                      <span>Field diagnostics, pH regulation &amp; moisture retention</span>
                    </li>
                  </ul>
                </div>
              </div>
            </FadeIn>

            {/* Pillar 2 */}
            <FadeIn delay={0.1}>
              <div className="bg-cream-50 rounded-3xl overflow-hidden border border-brand-100 shadow-sm hover:shadow-xl transition-all duration-500 group flex flex-col h-full">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src="/images/training-field-demo.jpg"
                    alt="Commercial Vermicomposting"
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-950/85 via-transparent to-transparent" />
                  <span className="absolute top-3 left-3 bg-gold-400 text-brand-950 text-xs font-mono font-bold px-3 py-1 rounded-full shadow-sm">
                    PILLAR 02
                  </span>
                  <p className="absolute bottom-3 left-4 right-4 font-display font-bold text-white text-lg">
                    Commercial Bed Setup
                  </p>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <ul className="space-y-2.5 text-xs sm:text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-gold-600 font-bold">✓</span>
                      <span>Brick bed layout, aeration &amp; temperature management</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gold-600 font-bold">✓</span>
                      <span>Red Wiggler (Eisenia fetida) colony multiplication</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gold-600 font-bold">✓</span>
                      <span>Castings harvesting, sieving &amp; storage protocols</span>
                    </li>
                  </ul>
                </div>
              </div>
            </FadeIn>

            {/* Pillar 3 */}
            <FadeIn delay={0.15}>
              <div className="bg-cream-50 rounded-3xl overflow-hidden border border-brand-100 shadow-sm hover:shadow-xl transition-all duration-500 group flex flex-col h-full">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src="/images/farmers-gathering-training.jpg"
                    alt="Farm Economics & Knowledge Sharing"
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-950/85 via-transparent to-transparent" />
                  <span className="absolute top-3 left-3 bg-gold-400 text-brand-950 text-xs font-mono font-bold px-3 py-1 rounded-full shadow-sm">
                    PILLAR 03
                  </span>
                  <p className="absolute bottom-3 left-4 right-4 font-display font-bold text-white text-lg">
                    Waste-to-Wealth Economics
                  </p>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <ul className="space-y-2.5 text-xs sm:text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-gold-600 font-bold">✓</span>
                      <span>Upcycling farm biomass, crop stalks &amp; cow manure</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gold-600 font-bold">✓</span>
                      <span>Commercial dosage per acre for major Pakistani crops</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gold-600 font-bold">✓</span>
                      <span>Farmer entrepreneurship, cost recovery &amp; youth inclusion</span>
                    </li>
                  </ul>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ═══ PICTURE-FIRST TRAINING DELIVERY FORMATS (Clean Photo Top + Clear Text Below) ═══ */}
      <section className="w-full px-4 sm:px-6 lg:px-8 py-16 lg:py-24 bg-[#FAF9F5] border-b border-stone-200/80">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="eyebrow text-gold-500">Programme Delivery</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-900 mt-1">
                How Training Is Delivered
              </h2>
              <p className="mt-2 text-gray-600 text-sm md:text-base">
                Flexible formats tailored for commercial growers, university campuses, and rural farming communities.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Format 1 */}
            <FadeIn delay={0.05}>
              <div className="bg-white rounded-3xl overflow-hidden shadow-xs hover:shadow-xl border border-stone-200/90 transition-all duration-300 group flex flex-col h-full hover:-translate-y-1">
                <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
                  <img
                    src="/images/training-field-demo.jpg"
                    alt="On-Farm Live Bed Demonstrations"
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                  />
                  <span className="absolute top-3 left-3 bg-brand-900/90 text-gold-300 border border-gold-400/30 text-[0.65rem] font-bold px-3 py-1 rounded-full shadow-sm backdrop-blur-sm">
                    Live Bed Demos
                  </span>
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display font-bold text-brand-900 text-base leading-snug group-hover:text-gold-600 transition-colors">
                      On-Farm Practical Sessions
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm mt-2 leading-relaxed">
                      Direct hands-on experience on 200+ beds in Tando Ghulam Ali &amp; regional hubs.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Format 2 */}
            <FadeIn delay={0.1}>
              <div className="bg-white rounded-3xl overflow-hidden shadow-xs hover:shadow-xl border border-stone-200/90 transition-all duration-300 group flex flex-col h-full hover:-translate-y-1">
                <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
                  <img
                    src="/images/training-soil-demo.jpg"
                    alt="Interactive Field Workshops"
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                  />
                  <span className="absolute top-3 left-3 bg-brand-900/90 text-gold-300 border border-gold-400/30 text-[0.65rem] font-bold px-3 py-1 rounded-full shadow-sm backdrop-blur-sm">
                    Field Clinics
                  </span>
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display font-bold text-brand-900 text-base leading-snug group-hover:text-gold-600 transition-colors">
                      Soil &amp; Bio-Fertility Clinics
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm mt-2 leading-relaxed">
                      In-field soil diagnostics, live formula preparation, and crop tests.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Format 3 */}
            <FadeIn delay={0.15}>
              <div className="bg-white rounded-3xl overflow-hidden shadow-xs hover:shadow-xl border border-stone-200/90 transition-all duration-300 group flex flex-col h-full hover:-translate-y-1">
                <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
                  <img
                    src="/images/farmers-gathering-training.jpg"
                    alt="Outdoor Farmer Gatherings"
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                  />
                  <span className="absolute top-3 left-3 bg-brand-900/90 text-gold-300 border border-gold-400/30 text-[0.65rem] font-bold px-3 py-1 rounded-full shadow-sm backdrop-blur-sm">
                    Field Kach’heri
                  </span>
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display font-bold text-brand-900 text-base leading-snug group-hover:text-gold-600 transition-colors">
                      Outdoor Village Dialogues
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm mt-2 leading-relaxed">
                      Open community discussions under the trees with local growers &amp; elders.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Format 4 */}
            <FadeIn delay={0.2}>
              <div className="bg-white rounded-3xl overflow-hidden shadow-xs hover:shadow-xl border border-stone-200/90 transition-all duration-300 group flex flex-col h-full hover:-translate-y-1">
                <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
                  <img
                    src="/images/albarakah5.jpeg"
                    alt="Community Zaraat Kach’heri Dialogues"
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                  />
                  <span className="absolute top-3 left-3 bg-brand-900/90 text-gold-300 border border-gold-400/30 text-[0.65rem] font-bold px-3 py-1 rounded-full shadow-sm backdrop-blur-sm">
                    Zaraat Kach’heri
                  </span>
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display font-bold text-brand-900 text-base leading-snug group-hover:text-gold-600 transition-colors">
                      Community Farmer Gatherings
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm mt-2 leading-relaxed">
                      Open local dialogues uniting smallholder growers, elders, and youth.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ═══ TRAINING PROGRAMMES CATALOGUE ═══ */}
      <section id="sessions" className="w-full px-4 sm:px-6 lg:px-8 py-10 lg:py-14 bg-white border-b border-stone-200/80 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <TrainingProgrammeCatalogue />
          </FadeIn>
        </div>
      </section>

      {/* ═══ REQUEST A TRAINING SESSION — 3-STEP FORM ═══ */}
      <section id="register" className="w-full px-4 sm:px-6 lg:px-8 py-14 lg:py-20 bg-[#FAF9F5] border-t border-stone-200/80 relative overflow-hidden scroll-mt-20">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">

            {/* Left: Editorial Information Panel */}
            <div className="lg:col-span-5">
              <FadeIn>
                <p className="text-[0.72rem] font-bold uppercase tracking-[0.2em] text-gold-600 mb-2">
                  ENROLLMENT &amp; BOOKING
                </p>
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-brand-900 leading-[1.12]">
                  Request a<br />Training Session
                </h2>
                <p className="mt-3 text-[#53636A] text-sm leading-relaxed max-w-md">
                  Register your interest for our upcoming sessions across <strong className="text-brand-900">Tando Ghulam Ali</strong>, <strong className="text-brand-900">Hyderabad</strong>, <strong className="text-brand-900">Tando Allahyar</strong> or <strong className="text-brand-900">Badin City</strong>, or request a custom workshop for your farm team or university.
                </p>

                {/* Subtle divider */}
                <div className="my-6 border-t border-stone-200/80" />

                {/* Contact Details — Clean Editorial List */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-gold-600 font-bold">01</span>
                    <div>
                      <p className="text-[0.65rem] font-bold uppercase tracking-wider text-stone-500">Call / WhatsApp Coordinator</p>
                      <p className="font-display text-base font-bold text-brand-900">0316 8803363 / 0333 3089886</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-gold-600 font-bold">02</span>
                    <div>
                      <p className="text-[0.65rem] font-bold uppercase tracking-wider text-stone-500">Coordinator Availability</p>
                      <p className="font-display text-base font-bold text-brand-900">09:00 to 17:00 (Mon – Sat)</p>
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-stone-200/80">
                  <p className="text-[0.75rem] text-stone-500 leading-relaxed">
                    ✓ Our training coordinator will confirm your session within 24 hours via WhatsApp.
                  </p>
                </div>
              </FadeIn>
            </div>

            {/* Right: Animated 3-Step Form */}
            <div className="lg:col-span-7">
              <FadeIn delay={0.15}>
                <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-stone-200/90 shadow-sm">
                  <TrainingStepForm />
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PRE-FOOTER CTA ═══ */}
      <CTABanner
        eyebrow="Customized On-Site Training"
        title="Want Zaraat Kach’heri at Your Farm or Institution?"
        description="We travel across Sindh and Pakistan to train agricultural teams, grower groups, corporate farms, and university students on-site."
        primaryBtnText="Request Custom Workshop →"
        primaryBtnHref="/contact"
        secondaryBtnText="💬 Chat on WhatsApp"
        secondaryBtnHref="https://wa.me/923168803363?text=Hi,%20I%20am%20interested%20in%20custom%20on-site%20Zaraat%20Kach'heri%20training."
      />
    </>
  )
}
