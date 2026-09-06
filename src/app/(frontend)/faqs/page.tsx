'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import FadeIn from '@/components/FadeIn'
import CTABanner from '@/components/CTABanner'
import { motion, AnimatePresence } from 'framer-motion'

export const dynamic = 'force-static'

const faqs = [
  {
    q: 'Where are you located?',
    a: 'We operate in Tando Ghulam Ali, Hyderabad, Tando Allahyar, and Badin City, Sindh.',
  },
  {
    q: 'Do you collaborate with B2B clients and commercial farms?',
    a: 'Yes. We are always open to partnerships and collaborations with businesses, farms, nurseries, retailers, and other agricultural organizations.',
  },
  {
    q: 'Do you offer agricultural internships and student training?',
    a: 'Yes. We welcome agriculture students and young learners for practical field exposure and internship opportunities across our research and production beds.',
  },
  {
    q: 'What products do you offer?',
    a: 'We currently offer 100% pure vermicompost and active Red Wiggler earthworms, and plan to expand into vermiwash, biochar, and other sustainable agricultural solutions.',
  },
  {
    q: 'Can we visit your production facility?',
    a: 'Yes. Visitors, farmers, students, and agricultural professionals are welcome to tour our facilities across Tando Ghulam Ali, Hyderabad, Tando Allahyar, and Badin City by prior appointment.',
  },
  {
    q: 'Do you provide online agricultural consultancy and lectures?',
    a: 'Yes. We provide online lectures, awareness sessions, training, and agricultural consultancy for individuals, institutions, and organizations across Pakistan.',
  },
]

export default function FAQsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <>
      <Header />

      {/* ═══ HERO BANNER ═══ */}
      <section className="relative min-h-[380px] lg:min-h-[440px] flex items-center overflow-hidden w-full">
        <div className="absolute inset-0">
          <img
            src="/images/hero-farm-landscape.jpg"
            alt="Al Barakh Organics FAQs"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-950/90 via-brand-900/80 to-brand-900/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-950/70 via-transparent to-brand-950/30" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24 w-full text-center">
          <FadeIn>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-400/20 border border-gold-400/40 text-gold-300 font-semibold text-xs uppercase tracking-wider mb-4 backdrop-blur-sm">
              Answers &amp; Guidance
            </span>
            <p className="font-cursive text-3xl md:text-4xl text-gold-400">Got Questions?</p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-2 leading-tight max-w-4xl mx-auto">
              Frequently Asked Questions
            </h1>
            <p className="mt-4 text-white/90 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
              Find quick, clear answers about our biological vermicompost, facility visits, farmer workshops, and commercial bulk supplies.
            </p>
          </FadeIn>
        </div>
      </section>
      
      {/* ═══ ACCORDION LIST SECTION ═══ */}
      <section className="w-full bg-white py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-b border-brand-100/80">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          <FadeIn>
            <div className="text-center mb-10 max-w-xl mx-auto">
              <span className="eyebrow text-gold-500">Quick Clarity</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-900 mt-2">
                Common Inquiries
              </h2>
              <p className="text-gray-600 text-sm md:text-base mt-2">
                Everything you need to know about partnering with Al Barakh Organics.
              </p>
            </div>
          </FadeIn>

          <div className="w-full flex flex-col gap-4 items-start text-left">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index

              return (
                <FadeIn key={faq.q} delay={index * 0.05} className="w-full">
                  <div className="faq-item flex flex-col items-start w-full">
                    <div
                      onClick={() => toggleAccordion(index)}
                      className={`faq-header flex items-center justify-between w-full cursor-pointer p-5 rounded-2xl border transition-all duration-300 select-none ${
                        isOpen
                          ? 'bg-white border-gold-400 shadow-md ring-2 ring-gold-400/20'
                          : 'bg-cream-50/70 hover:bg-white border-brand-100 hover:border-gold-400/60 shadow-xs'
                      }`}
                    >
                      <h2 className="font-display font-bold text-base md:text-lg text-brand-900 pr-4 leading-snug">
                        {faq.q}
                      </h2>
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors flex-shrink-0 ${
                          isOpen ? 'bg-gold-400/20 text-gold-600' : 'bg-brand-50 text-brand-800'
                        }`}
                      >
                        <svg
                          className={`faq-icon transition-transform duration-300 ease-in-out flex-shrink-0 ${
                            isOpen ? 'rotate-180 text-gold-600' : 'text-brand-800'
                          }`}
                          width="16"
                          height="16"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="m4.5 7.2 3.793 3.793a1 1 0 0 0 1.414 0L13.5 7.2"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0, y: -4 }}
                          animate={{ height: 'auto', opacity: 1, y: 0 }}
                          exit={{ height: 0, opacity: 0, y: -4 }}
                          transition={{ duration: 0.28, ease: 'easeInOut' }}
                          className="overflow-hidden w-full"
                        >
                          <div className="bg-cream-50/50 border-x border-b border-brand-100 rounded-b-2xl px-6 py-4 -mt-2">
                            <p className="faq-answer text-sm md:text-base text-gray-700 leading-relaxed">
                              {faq.a}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </FadeIn>
              )
            })}
          </div>

          {/* Proactive Help Pill */}
          <FadeIn delay={0.2}>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-3 text-sm text-gray-700 bg-cream-50/80 px-6 py-3.5 rounded-full border border-brand-100 shadow-sm hover:border-gold-400/50 transition-colors">
              <span>Still have questions about our products or services?</span>
              <a
                href="https://wa.me/923168803363"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1.5 transition-colors"
              >
                <span>💬</span> Chat with our Agronomists on WhatsApp →
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══ CTA BANNER ═══ */}
      <CTABanner
        eyebrow="Have a Specific Project?"
        title="Ready to Discuss Your Farm Requirements?"
        description="Whether you need tailored application dosage, facility tour bookings, or commercial bulk orders, our team is at your service."
        primaryBtnText="Contact Our Team →"
        primaryBtnHref="/contact"
        secondaryBtnText="💬 Chat on WhatsApp"
        secondaryBtnHref="https://wa.me/923168803363"
      />
    </>
  )
}
