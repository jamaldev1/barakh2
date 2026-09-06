'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import FadeIn from '@/components/FadeIn'

export const homeFaqs = [
  {
    id: 1,
    catId: 'locations',
    category: 'Locations & Facility Visits',
    q: 'Where are you located?',
    a: 'We operate in Tando Ghulam Ali, Hyderabad, Tando Allahyar, and Badin City, Sindh.',
  },
  {
    id: 2,
    catId: 'products',
    category: 'Products & Supply',
    q: 'What products do you offer?',
    a: 'We currently offer 100% pure premium vermicompost and active Red Wiggler (Eisenia fetida) earthworm colonies, with liquid vermiwash and biochar solutions.',
  },
  {
    id: 3,
    catId: 'b2b',
    category: 'B2B & Collaborations',
    q: 'Do you collaborate with B2B clients and commercial farms?',
    a: 'Yes. We supply individual growers, commercial nurseries, corporate farms, retailers, and bulk agricultural partners with tailored packaging and logistics across Pakistan.',
  },
  {
    id: 4,
    catId: 'locations',
    category: 'Locations & Facility Visits',
    q: 'Can we visit your production facility?',
    a: 'Yes. Visitors, farmers, students, and agricultural professionals are welcome to tour our facilities across Tando Ghulam Ali, Hyderabad, Tando Allahyar, and Badin City by prior appointment.',
  },
  {
    id: 5,
    catId: 'training',
    category: 'Training & Internships',
    q: 'Do you offer agricultural internships and farmer training?',
    a: 'Yes. We conduct hands-on Zaraat Kach’heri community workshops, on-site farmer trainings, and welcome agriculture university students for practical internship exposure.',
  },
  {
    id: 6,
    catId: 'training',
    category: 'Consultancy & Lectures',
    q: 'Do you provide online agricultural consultancy and lectures?',
    a: 'Yes. We provide online advisory sessions, soil diagnostics consultancy, and educational lectures for individual growers, schools, institutions, and agricultural groups.',
  },
]

const categories = [
  { id: 'all', label: 'All Questions' },
  { id: 'products', label: 'Products & Supply' },
  { id: 'locations', label: 'Locations & Visits' },
  { id: 'training', label: 'Training & Internships' },
  { id: 'b2b', label: 'B2B & Partnerships' },
]

export default function FAQSection() {
  const [activeCategory, setActiveCategory] = useState<string>('all')
  const [openFaqId, setOpenFaqId] = useState<number | null>(1)

  const filteredFaqs =
    activeCategory === 'all'
      ? homeFaqs
      : homeFaqs.filter((faq) => faq.catId === activeCategory)

  const toggleFaq = (id: number) => {
    setOpenFaqId(openFaqId === id ? null : id)
  }

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-20 lg:py-28 bg-white border-t border-brand-100/80 relative">
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
        <FadeIn>
          <span className="eyebrow text-gold-500">
            Got Questions? We Have Answers
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-brand-900 mt-2 leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-base md:text-lg mt-3 max-w-xl mx-auto leading-relaxed">
            Everything you need to know about our biological vermicompost, facility visits, farmer workshops, and commercial orders.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-7">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-brand-900 text-gold-300 shadow-sm border border-brand-800 scale-105'
                      : 'bg-cream-50 text-brand-900/80 hover:bg-white hover:text-brand-900 border border-brand-200/80 hover:border-gold-400/60 shadow-xs'
                  }`}
                >
                  {cat.label}
                </button>
              )
            })}
          </div>
        </FadeIn>

        {/* Accordion List Container */}
        <div className="w-full mt-10 flex flex-col gap-4 items-start text-left">
          {filteredFaqs.map((faq) => {
            const isOpen = openFaqId === faq.id

            return (
              <div
                key={faq.id}
                className="faq-item flex flex-col items-start w-full"
              >
                <div
                  onClick={() => toggleFaq(faq.id)}
                  className={`faq-header flex items-center justify-between w-full cursor-pointer p-5 rounded-2xl border transition-all duration-300 select-none ${
                    isOpen
                      ? 'bg-white border-gold-400 shadow-md ring-2 ring-gold-400/20'
                      : 'bg-cream-50/70 hover:bg-white border-brand-100 hover:border-gold-400/60 shadow-xs'
                  }`}
                >
                  <h3 className="font-display font-bold text-base md:text-lg text-brand-900 pr-4 leading-snug">
                    {faq.q}
                  </h3>
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
            )
          })}
        </div>

        {/* Proactive Help CTA */}
        <FadeIn delay={0.15}>
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
  )
}

