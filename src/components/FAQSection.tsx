'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import FadeIn from '@/components/FadeIn'

export const homeFaqs = [
  {
    id: 1,
    catId: 'locations',
    category: 'Locations & Facility Visits',
    icon: '📍',
    q: 'Where are you located?',
    a: 'We operate in Tando Ghulam Ali and Hyderabad, Sindh.',
  },
  {
    id: 2,
    catId: 'b2b',
    category: 'B2B & Collaborations',
    icon: '🤝',
    q: 'Do you collaborate with B2B clients?',
    a: 'Yes. We are always open to partnerships and collaborations with businesses, farms, nurseries, retailers, and other organizations.',
  },
  {
    id: 3,
    catId: 'training',
    category: 'Training & Internships',
    icon: '🎓',
    q: 'Do you offer agricultural internships?',
    a: 'Yes. We welcome agriculture students and young learners for practical exposure and internship opportunities.',
  },
  {
    id: 4,
    catId: 'products',
    category: 'Products & Supply',
    icon: '🌱',
    q: 'What products do you offer?',
    a: 'We currently offer premium-quality vermicompost and plan to expand into vermiwash, biochar, and other sustainable agricultural solutions.',
  },
  {
    id: 5,
    catId: 'locations',
    category: 'Locations & Facility Visits',
    icon: '🏢',
    q: 'Can we visit your production facility?',
    a: 'Yes. Visitors, farmers, students, and agricultural professionals are welcome by prior appointment.',
  },
  {
    id: 6,
    catId: 'training',
    category: 'Training & Internships',
    icon: '💻',
    q: 'Do you provide online agricultural consultancy and lectures?',
    a: 'Yes. We provide online lectures, awareness sessions, training, and agricultural consultancy for individuals, institutions, and organizations.',
  },
]

const categories = [
  {
    id: 'all',
    icon: '⚡',
    title: 'All Frequently Asked Questions',
    desc: 'Browse all inquiries',
  },
  {
    id: 'locations',
    icon: '🏠',
    title: 'Locations & Facility Visits',
    desc: 'Hyderabad & Tando Ghulam Ali',
  },
  {
    id: 'products',
    icon: '🌱',
    title: 'Products & Organic Supply',
    desc: 'Vermicompost, Vermiwash & Biochar',
  },
  {
    id: 'training',
    icon: '🎓',
    title: 'Training & Internships',
    desc: 'Zaraat Kach’heri & Students',
  },
  {
    id: 'b2b',
    icon: '🤝',
    title: 'B2B & Partnerships',
    desc: 'Bulk Orders & Collaborations',
  },
]

export default function FAQSection() {
  const [activeCategory, setActiveCategory] = useState<string>('all')
  const [openFaqId, setOpenFaqId] = useState<number | null>(1) // Default first open

  const filteredFaqs = activeCategory === 'all'
    ? homeFaqs
    : homeFaqs.filter((faq) => faq.catId === activeCategory)

  const toggleFaq = (id: number) => {
    setOpenFaqId(openFaqId === id ? null : id)
  }

  return (
    <section className="px-6 py-20 lg:py-28 bg-cream-100 border-t border-brand-100/80 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header - Styled like shared screenshot (Left aligned, Bold Header) */}
        <FadeIn>
          <div className="mb-12">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-400/20 border border-gold-400/30 text-gold-700 text-xs font-bold uppercase tracking-wider mb-3">
              <span className="w-2 h-2 rounded-full bg-gold-500 animate-pulse" />
              Got Questions?
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-brand-900 leading-tight">
              We&apos;re here to help.
            </h2>
            <p className="mt-3 text-gray-600 text-base md:text-lg max-w-2xl leading-relaxed">
              Select a topic below or expand any question to learn more about our organic inputs, facility visits, and training programs.
            </p>
          </div>
        </FadeIn>

        {/* 4 TOPIC CARDS GRID (Yellow Theme Cards matching screenshot design) */}
        <FadeIn delay={0.1}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
            {categories.slice(1).map((cat) => {
              const isActive = activeCategory === cat.id
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => {
                    setActiveCategory(isActive ? 'all' : cat.id)
                  }}
                  className={`p-6 rounded-3xl text-left transition-all duration-300 border flex flex-col justify-between aspect-[1.4/1] shadow-md hover:shadow-xl cursor-pointer ${
                    isActive
                      ? 'bg-gold-400 text-brand-950 border-gold-500 ring-4 ring-gold-400/40 scale-[1.02] shadow-gold-400/20'
                      : 'bg-gold-300/90 text-brand-950 hover:bg-gold-400 border-gold-400/50 hover:-translate-y-1'
                  }`}
                >
                  <div className="w-12 h-12 rounded-2xl bg-brand-950/10 flex items-center justify-center text-2xl shadow-inner">
                    {cat.icon}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-brand-950 text-base leading-snug">
                      {cat.title}
                    </h3>
                    <p className="text-brand-950/70 text-xs font-medium mt-1">
                      {cat.desc}
                    </p>
                  </div>
                </button>
              )
            })}
          </div>
        </FadeIn>

        {/* ACTIVE CATEGORY HEADER & RESET BUTTON */}
        <div className="flex items-center justify-between mb-6 border-b border-brand-100/80 pb-4">
          <div className="flex items-center gap-2.5">
            <span className="text-2xl">
              {categories.find((c) => c.id === activeCategory)?.icon || '⚡'}
            </span>
            <h3 className="font-display text-xl font-bold text-brand-900">
              {categories.find((c) => c.id === activeCategory)?.title || 'All Frequently Asked Questions'}
            </h3>
          </div>

          {activeCategory !== 'all' && (
            <button
              type="button"
              onClick={() => setActiveCategory('all')}
              className="text-xs font-mono font-bold text-gold-600 hover:text-gold-700 underline cursor-pointer"
            >
              Show All Questions →
            </button>
          )}
        </div>

        {/* ACCORDION LIST SHOWCASE (Matching Screenshot 3 design with big + icons) */}
        <div className="space-y-4 mb-16">
          <AnimatePresence mode="popLayout">
            {filteredFaqs.map((faq) => {
              const isOpen = openFaqId === faq.id

              return (
                <motion.div
                  key={faq.id}
                  layout
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? 'bg-white border-gold-400 shadow-md ring-1 ring-gold-400/30'
                      : 'bg-white/90 border-brand-100/80 hover:border-gold-400/60 hover:bg-white shadow-sm'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full flex items-center justify-between p-6 text-left font-display font-bold text-lg md:text-xl text-brand-900 cursor-pointer select-none group"
                  >
                    <div className="flex items-center gap-4 flex-1 pr-4">
                      <span className="text-2xl p-2 rounded-xl bg-cream-100 border border-brand-100/60 group-hover:bg-gold-50 transition-colors flex-shrink-0">
                        {faq.icon}
                      </span>
                      <span className="leading-snug group-hover:text-brand-800 transition-colors">
                        {faq.q}
                      </span>
                    </div>

                    {/* Big Plus / Minus Icon Box matching screenshot 3 */}
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center text-xl font-bold flex-shrink-0 transition-all duration-300 ${
                        isOpen ? 'bg-gold-400 text-brand-950 rotate-45 shadow-sm' : 'bg-cream-100 text-brand-900 group-hover:bg-gold-400 group-hover:text-brand-950'
                      }`}
                    >
                      +
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-1 text-gray-700 text-sm md:text-base leading-relaxed border-t border-gray-100 bg-cream-50/50 pl-[4.25rem]">
                          <p>{faq.a}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
