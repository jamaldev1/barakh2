import Header from '@/components/Header'
import FadeIn from '@/components/FadeIn'
import CTABanner from '@/components/CTABanner'
import SolutionsSlider from '@/components/SolutionsSlider'

export const metadata = {
  title: 'Sustainable Agriculture Solutions | Al Barakah Organics',
  description:
    'Practical, field-tested sustainable agriculture solutions for farms, commercial growers, nurseries, institutions, and agribusinesses across Pakistan.',
}



const processSteps = [
  {
    step: '01',
    image: '/images/albarakah7.jpeg',
    title: 'Soil & Farm Needs Audit',
    desc: 'Assessment of field soil biology, acreage, target crops, and organic restoration goals.',
  },
  {
    step: '02',
    image: '/images/albarakah2.jpeg',
    title: 'Tailored Solution & Formulation',
    desc: 'Supply of high-potency vermicompost, active worm colonies, and precise seasonal dosages.',
  },
  {
    step: '03',
    image: '/images/albarakah3.jpeg',
    title: 'Field Execution & Growth Support',
    desc: 'Hands-on Zaraat Kach’heri guidance, moisture regulation, and harvest monitoring.',
  },
]

export default function SolutionsPage() {
  return (
    <>
      <Header />

      {/* ═══ HERO BANNER ═══ */}
      <section className="relative min-h-[400px] lg:min-h-[460px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/albarakah7.jpeg"
            alt="Sustainable agriculture solutions"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-950/90 via-brand-900/80 to-brand-900/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-950/70 via-transparent to-brand-950/30" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full text-center">
          <FadeIn>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-400/20 border border-gold-400/40 text-gold-300 font-semibold text-xs uppercase tracking-wider mb-4 backdrop-blur-sm">
              🌾 Practical Field Solutions • Science-Backed
            </span>
            <p className="font-cursive text-3xl md:text-4xl text-gold-400">Beyond Products</p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-2 leading-tight">
              Sustainable Agriculture Solutions
            </h1>
            <p className="mt-5 text-white/80 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
              From soil revitalization and on-farm vermicomposting to organic waste conversion and capacity training, we provide end-to-end biological solutions tailored to Pakistan&apos;s agricultural needs.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ═══ SOLUTIONS SLIDER (6 Key Solutions) ═══ */}
      <SolutionsSlider />

      {/* ═══ HOW WE DELIVER SOLUTIONS (3-Step Photo Framework) ═══ */}
      <section className="w-full bg-cream-100 px-4 sm:px-6 lg:px-8 py-20 lg:py-28 border-t border-brand-100">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="eyebrow text-gold-500">Implementation Process</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-900 mt-2">
                How We Deliver Results for Your Farm
              </h2>
              <p className="mt-3 text-gray-600 text-base">
                A transparent, field-tested methodology to implement biological practices seamlessly.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <FadeIn key={step.step} delay={index * 0.1}>
                <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-brand-100 h-full flex flex-col justify-between hover:shadow-xl hover:border-gold-400/70 transition-all duration-300 group">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-950/80 via-transparent to-transparent" />
                    <span className="absolute top-3 right-3 text-xs font-mono font-bold text-brand-950 bg-gold-400 px-3 py-1 rounded-full shadow-sm">
                      PHASE {step.step}
                    </span>
                  </div>

                  <div className="p-6">
                    <h3 className="font-display font-bold text-brand-900 text-xl group-hover:text-gold-600 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 mt-2.5 text-xs sm:text-sm leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  <div className="px-6 pb-5 pt-2 border-t border-gray-100 text-xs font-semibold text-gold-600 flex items-center justify-between">
                    <span>Step {step.step} of 03</span>
                    <span className="text-brand-800 font-bold group-hover:translate-x-1 transition-transform">✓ Field Protocol</span>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA BANNER ═══ */}
      <CTABanner
        eyebrow="Need a Practical Solution?"
        title="Let's Discuss Your Agricultural Needs"
        description="Whether you operate a commercial farm, greenhouse, plant nursery, or institution, our agronomy team will formulate the ideal organic solution for your soil."
        primaryBtnText="Discuss Your Requirement →"
        primaryBtnHref="/contact"
        secondaryBtnText="💬 Chat on WhatsApp"
        secondaryBtnHref="https://wa.me/923168803363?text=Hi,%20I%20would%20like%20to%20discuss%20sustainable%20agriculture%20solutions."
      />
    </>
  )
}
