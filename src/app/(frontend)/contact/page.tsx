import Header from '@/components/Header'
import FadeIn from '@/components/FadeIn'
import ContactForm from '@/components/ContactForm'

export const metadata = {
  title: 'Contact Us | Al Barakh Organics',
  description:
    'Talk to Al Barakh Organics. Contact us for vermicompost orders, soil consultancy, Zaraat Kach’heri training, or bulk inquiries via WhatsApp, email or phone.',
}

export default function ContactPage() {
  return (
    <>
      <Header />

      {/* ═══ HERO BANNER ═══ */}
      <section className="relative min-h-[420px] lg:min-h-[480px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/hero-field.jpg"
            alt="Contact Al Barakh Organics"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-950/95 via-brand-900/85 to-brand-900/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-950/80 via-transparent to-brand-950/40" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 lg:py-28 w-full text-center">
          <FadeIn>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-400/20 border border-gold-400/40 text-gold-300 font-semibold text-xs uppercase tracking-wider mb-4 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Always Ready to Serve Pakistani Farmers
            </span>
            <p className="font-cursive text-3xl md:text-4xl text-gold-400">Get In Touch</p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-2 leading-tight">
              Connect With Al Barakh Organics
            </h1>
            <p className="mt-4 text-white/80 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
              Direct connection to Pakistan’s premier biological organic producers. Reach out for vermicompost orders, technical crop advisory, or Zaraat Kach’heri community workshops.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://wa.me/923168803363"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary py-3.5 px-7 font-bold text-sm shadow-xl hover:shadow-gold-400/20 flex items-center gap-2.5"
              >
                <svg className="w-5 h-5 text-brand-950" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Instant WhatsApp Support
              </a>
              <a
                href="tel:03168803363"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-sm backdrop-blur-sm transition"
              >
                📞 Call Hotline: 0316 8803363
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══ MAIN CONTACT & FORM SECTION ═══ */}
      <section className="px-6 py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Info & Operational Facilities */}
            <div className="lg:col-span-5 space-y-8">
              <FadeIn>
                <div>
                  <span className="eyebrow text-gold-500">We&apos;re Here to Help</span>
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-900 mt-2 leading-tight">
                    Talk to Our Agronomy &amp; Support Team
                  </h2>
                  <p className="mt-4 text-gray-600 leading-relaxed text-sm md:text-base">
                    Whether you need customized application dosages for your crop, want to request bulk farm supply, or wish to join our next <strong>Zaraat Kach’heri</strong> community workshop, we’re eager to connect.
                  </p>
                </div>
              </FadeIn>

              {/* Operational Hub Cards */}
              <FadeIn delay={0.1}>
                <div className="space-y-4">
                  <div className="bg-cream-50 p-6 rounded-3xl border border-brand-100/80 hover:border-gold-400/50 transition shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono font-bold text-gold-600 uppercase tracking-wider">Main Facility</span>
                      <span className="px-2.5 py-0.5 rounded-full bg-brand-900 text-gold-300 text-[10px] font-bold">200+ Active Beds</span>
                    </div>
                    <h3 className="font-display font-bold text-brand-900 text-lg">Tando Ghulam Ali Research Station</h3>
                    <p className="text-gray-600 text-xs mt-1.5 leading-relaxed">
                      Primary vermicompost production, earthworm breeding rows, field trial plots, and grower training grounds.
                    </p>
                  </div>

                  <div className="bg-cream-50 p-6 rounded-3xl border border-brand-100/80 hover:border-gold-400/50 transition shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono font-bold text-gold-600 uppercase tracking-wider">Regional Hub</span>
                      <span className="px-2.5 py-0.5 rounded-full bg-gold-400 text-brand-950 text-[10px] font-bold">20+ Active Beds</span>
                    </div>
                    <h3 className="font-display font-bold text-brand-900 text-lg">Hyderabad Regional Office</h3>
                    <p className="text-gray-600 text-xs mt-1.5 leading-relaxed">
                      Near Jholy Lal Restaurant, New Hyderabad City Road. Regional distribution hub for Sindh and nationwide dispatch.
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Right Column: Modern Contact Form Card */}
            <div className="lg:col-span-7">
              <FadeIn delay={0.15}>
                <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-xl border border-brand-100/90 relative">
                  <div className="mb-6 pb-6 border-b border-gray-100">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-100 text-brand-900 text-xs font-bold uppercase tracking-wider mb-2 border border-gold-300">
                      ✍️ Online Desk
                    </span>
                    <h3 className="font-display text-2xl lg:text-3xl font-bold text-brand-900">
                      Send Us a Message
                    </h3>
                    <p className="text-gray-500 text-sm mt-1">
                      Select your inquiry topic below and submit details directly to our team.
                    </p>
                  </div>

                  <ContactForm />
                </div>
              </FadeIn>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
