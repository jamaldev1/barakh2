import Header from '@/components/Header'
import FadeIn from '@/components/FadeIn'
import CTABanner from '@/components/CTABanner'
import { trainingSessionsData } from '@/data/training'
import SyllabusFlipCards from '@/components/SyllabusFlipCards'
import TrainingProgrammeCatalogue from '@/components/TrainingProgrammeCatalogue'
import TrainingStepForm from '@/components/TrainingStepForm'

export const metadata = {
  title: 'Zaraat Kach’heri Training Programme | Al Barakh Organics',
  description:
    'Zaraat Kach’heri: Over 100+ training sessions and 500+ farmers empowered across Pakistan with practical vermicomposting, soil restoration, and modern sustainable agriculture.',
}

const keyTrainingStats = [
  { value: '100+', label: 'Sessions Conducted', sub: 'Practical agricultural training & dialogues' },
  { value: '500+', label: 'Farmers & Growers Trained', sub: 'Across commercial farms, orchards & nurseries' },
  { value: '12', label: 'Core Curriculum Modules', sub: 'Across 3 specialized learning pillars' },
  { value: '2', label: 'Active Regional Facilities', sub: 'Tando Ghulam Ali & Hyderabad (+ On-Demand)' },
]

export default function TrainingPage() {
  const sessions = trainingSessionsData
  const sessionOptions = sessions.map((s) => ({ id: String(s.id), title: s.title }))

  return (
    <>
      <Header />

      {/* ═══ HERO BANNER ═══ */}
      <section className="relative min-h-[460px] lg:min-h-[520px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/farmer-training.jpg"
            alt="Zaraat Kach’heri Farmer Training Session by Al Barakh Organics"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-950/90 via-brand-900/80 to-brand-900/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-950/70 via-transparent to-brand-950/30" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 lg:py-28 w-full text-center">
          <FadeIn>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-400/20 border border-gold-400/40 text-gold-300 font-semibold text-xs uppercase tracking-wider mb-4 backdrop-blur-sm">
              Community Empowerment &amp; Agricultural Knowledge
            </span>
            <p className="font-cursive text-3xl md:text-4xl text-gold-400">Farmer &amp; Grower Training Programme</p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-2 leading-tight max-w-4xl mx-auto">
              “Zaraat Kach’heri”<br />
              <span className="text-gold-300">Connecting, Educating &amp; Empowering Growers</span>
            </h1>
            <p className="mt-5 text-white/90 max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
              We go beyond selling inputs. Through <strong>Zaraat Kach’heri</strong>, we provide practical agricultural knowledge, hands-on bed demonstrations, and modern organic solutions to help farmers restore soil health, lower input costs, and build a sustainable future.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a href="#curriculum" className="btn-primary text-base font-bold shadow-lg">
                Explore Curriculum ↓
              </a>
              <a
                href="https://wa.me/923168803363?text=Hi,%20I%20am%20interested%20in%20joining/requesting%20a%20Zaraat%20Kach'heri%20farmer%20training%20session."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 backdrop-blur-sm border border-white/30 text-base shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                💬 Inquire on WhatsApp
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══ KEY ACHIEVEMENTS & STATS BAR ═══ */}
      <section className="bg-brand-900 text-white py-12 px-6 border-b border-gold-400/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {keyTrainingStats.map((stat) => (
              <div key={stat.label} className="p-4 bg-brand-800/60 rounded-2xl border border-white/10">
                <p className="font-display text-4xl lg:text-5xl font-bold text-gold-400">{stat.value}</p>
                <p className="font-bold text-sm text-white mt-1">{stat.label}</p>
                <p className="text-white/70 text-xs mt-0.5">{stat.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 3-PILLAR CURRICULUM SECTION ═══ */}
      <section id="curriculum" className="px-6 py-20 lg:py-28 bg-cream-50/60 border-b border-brand-100/60 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-brand-50 text-brand-800 text-xs font-bold uppercase tracking-wider mb-2.5 border border-brand-200">
                🌱 Practical Master Curriculum
              </span>
              <h2 className="font-display text-3xl md:text-5xl font-bold text-brand-900">
                The Zaraat Kach’heri Syllabus
              </h2>
              <p className="mt-3.5 text-gray-600 text-base md:text-lg">
                Twelve specialized modules structured across 3 core learning pillars to take growers from biological soil restoration to commercial farm profitability.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <SyllabusFlipCards />
          </FadeIn>
        </div>
      </section>

      {/* ═══ EDITORIAL PROGRAMME DELIVERY & AUDIENCE ═══ */}
      <section className="px-6 py-20 lg:py-28 bg-[#FAF9F5] border-b border-stone-200/80">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column (38–40% width): Editorial Context, Real Photo & Plain Audience List */}
            <div className="lg:col-span-5">
              <FadeIn>
                <p className="text-[0.72rem] font-bold uppercase tracking-[0.2em] text-gold-600 mb-2.5">
                  PROGRAMME DELIVERY
                </p>
                <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-brand-900 leading-[1.12]">
                  How Training<br />Is Delivered
                </h2>
                <p className="mt-4 text-[#53636A] text-sm md:text-base leading-relaxed max-w-md">
                  We adapt our delivery methods to fit farmers, grower associations, academic campuses and corporate agribusinesses across Pakistan.
                </p>

                {/* Single Authentic Farm Photograph */}
                <div className="my-7 rounded-2xl overflow-hidden shadow-xs border border-stone-300/80 aspect-[16/9] bg-stone-100">
                  <img
                    src="/images/pakistan-farmer-training.jpg"
                    alt="Zaraat Kach’heri training and vermicompost bed demonstration in rural Sindh, Pakistan"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Who Can Request Training (Clean Editorial List — No Cards, No Rounded Rectangle) */}
                <div className="mt-6">
                  <p className="text-[0.72rem] font-bold uppercase tracking-[0.18em] text-brand-900 mb-3.5">
                    WHO CAN REQUEST TRAINING?
                  </p>
                  
                  <div className="space-y-2.5 text-xs sm:text-sm text-brand-950 font-medium">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs text-gold-600 font-bold">01</span>
                      <span>Farmers, Growers &amp; Estate Managers</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs text-gold-600 font-bold">02</span>
                      <span>Schools, Colleges &amp; Universities</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs text-gold-600 font-bold">03</span>
                      <span>Corporate Agribusinesses &amp; Farm Teams</span>
                    </div>
                  </div>

                  <div className="mt-5 pt-3.5 border-t border-stone-300/80 text-[0.78rem] text-gold-700 font-semibold flex items-center gap-1.5">
                    <span>✓</span> Customized corporate &amp; institutional training available.
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Right Column (60–62% width): Continuous Editorial List with Big Understated Numerals & Vertical Reading Line */}
            <div className="lg:col-span-7 lg:pt-2">
              <FadeIn delay={0.15}>
                <div className="relative pl-6 sm:pl-10 border-l border-stone-300/90">
                  {[
                    {
                      num: '01',
                      title: 'Farm Visits & Live Bed Demonstrations',
                      desc: 'Hands-on practical exposure right on active vermicomposting beds in Tando Ghulam Ali and Hyderabad.',
                    },
                    {
                      num: '02',
                      title: 'Interactive Field Workshops',
                      desc: 'Step-by-step masterclasses with personalized Q&A, diagnostic soil testing, and bio-fertility formulation.',
                    },
                    {
                      num: '03',
                      title: 'Classroom & Campus Seminars',
                      desc: 'Curated technical lectures and internship learning modules for schools, colleges, and university agriculture departments.',
                    },
                    {
                      num: '04',
                      title: 'Online & Distance Learning',
                      desc: 'Interactive webinars and digital advisory tailored for growers and agricultural enthusiasts across remote areas in Pakistan.',
                    },
                    {
                      num: '05',
                      title: 'Customized On-Site Corporate Training',
                      desc: 'Tailored on-site capacity building designed for large agribusinesses and commercial farm staff delivered directly on your land.',
                    },
                  ].map((item) => (
                    <div
                      key={item.num}
                      className="group py-6 first:pt-0 border-b border-stone-200/90 last:border-none relative"
                    >
                      {/* Subtle hover indicator dot on the vertical reading line */}
                      <div className="absolute -left-[31px] sm:-left-[47px] top-7 w-3.5 h-3.5 rounded-full border-2 border-[#FAF9F5] bg-stone-300 group-hover:bg-gold-500 group-hover:scale-125 transition-all duration-300" />

                      <div className="flex items-start gap-4 sm:gap-6">
                        {/* Big Understated Serif/Display Numeral */}
                        <span className="font-display font-light text-3xl sm:text-4xl md:text-5xl text-gold-600/70 group-hover:text-gold-500 transition-colors flex-shrink-0 leading-none pt-0.5 w-12 sm:w-16">
                          {item.num}
                        </span>

                        <div className="flex-1">
                          <h4 className="font-display font-bold text-brand-900 text-base sm:text-lg md:text-xl group-hover:text-brand-700 group-hover:translate-x-1.5 transition-all duration-200 flex items-center justify-between leading-snug">
                            <span>{item.title}</span>
                            <span className="text-gold-500 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-sm font-sans">
                              →
                            </span>
                          </h4>
                          <p className="text-[#53636A] text-xs sm:text-sm mt-1.5 leading-relaxed max-w-xl">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>

          </div>
        </div>
      </section>

      {/* ═══ TRAINING PROGRAMMES CATALOGUE ═══ */}
      <section id="sessions" className="px-6 py-10 lg:py-14 bg-white border-b border-stone-200/80 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <TrainingProgrammeCatalogue />
          </FadeIn>
        </div>
      </section>

      {/* ═══ REQUEST A TRAINING SESSION — 3-STEP FORM ═══ */}
      <section id="register" className="px-6 py-14 lg:py-20 bg-[#FAF9F5] border-t border-stone-200/80 relative overflow-hidden scroll-mt-20">
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
                  Register your interest for our upcoming sessions at <strong className="text-brand-900">Tando Ghulam Ali</strong> or <strong className="text-brand-900">Hyderabad</strong>, or request a custom workshop for your farm team or university.
                </p>

                {/* Subtle divider */}
                <div className="my-6 border-t border-stone-200/80" />

                {/* Contact Details — Clean Editorial List */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-gold-600 font-bold">01</span>
                    <div>
                      <p className="text-[0.65rem] font-bold uppercase tracking-wider text-stone-500">Call / WhatsApp Coordinator</p>
                      <p className="font-display text-base font-bold text-brand-900">0316 8803363</p>
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
