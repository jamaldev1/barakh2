'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { trainingPillars, TrainingPillar } from '@/data/training'

export default function SyllabusDeck() {
  const [activeIdx, setActiveIdx] = useState(0)
  const [direction, setDirection] = useState(1)

  const currentPillar = trainingPillars[activeIdx]

  const handleNext = () => {
    setDirection(1)
    setActiveIdx((prev) => (prev + 1) % trainingPillars.length)
  }

  const handlePrev = () => {
    setDirection(-1)
    setActiveIdx((prev) => (prev - 1 + trainingPillars.length) % trainingPillars.length)
  }

  const handleSelect = (index: number) => {
    setDirection(index > activeIdx ? 1 : -1)
    setActiveIdx(index)
  }

  return (
    <div className="w-full max-w-5xl mx-auto">
      {/* ═══ INTERACTIVE PILLAR SELECTOR TABS ═══ */}
      <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
        {trainingPillars.map((p, idx) => {
          const isActive = idx === activeIdx
          return (
            <button
              key={p.pillarNumber}
              onClick={() => handleSelect(idx)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                isActive
                  ? 'bg-brand-900 text-gold-400 shadow-md scale-105 border border-gold-400/50'
                  : 'bg-white text-brand-800 hover:bg-cream-100 border border-brand-200/80 shadow-xs'
              }`}
            >
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[0.65rem] font-mono font-bold ${
                isActive ? 'bg-gold-400 text-brand-950' : 'bg-brand-50 text-brand-700'
              }`}>
                0{idx + 1}
              </span>
              <span>{p.title}</span>
            </button>
          )
        })}
      </div>

      {/* ═══ STACKED CARDS WRAPPER ═══ */}
      <div className="relative mx-auto max-w-4xl min-h-[460px] flex items-center justify-center py-6 px-4">
        
        {/* Layer 2 Background Shadow Card (Rotated Right) */}
        <div
          className="absolute inset-x-4 top-4 bottom-4 bg-cream-100 rounded-3xl border-2 border-brand-200/70 shadow-sm pointer-events-none transition-transform duration-500 hidden sm:block"
          style={{ transform: 'rotate(2.5deg) translateY(4px)' }}
        />

        {/* Layer 1 Background Shadow Card (Rotated Left) */}
        <div
          className="absolute inset-x-4 top-2 bottom-6 bg-brand-50 rounded-3xl border-2 border-gold-400/40 shadow-sm pointer-events-none transition-transform duration-500 hidden sm:block"
          style={{ transform: 'rotate(-2.5deg) translateY(-2px)' }}
        />

        {/* Active Animated Foreground Card */}
        <div className="relative z-10 w-full">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={activeIdx}
              custom={direction}
              initial={{ opacity: 0, x: direction * 50, rotate: direction * 2, scale: 0.96 }}
              animate={{ opacity: 1, x: 0, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, x: -direction * 50, rotate: -direction * 2, scale: 0.96 }}
              transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
              className="bg-white rounded-3xl p-6 sm:p-10 border-2 border-brand-200 shadow-xl relative overflow-hidden"
            >
              {/* Top Card Badge & Action Bar */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-6 border-b border-brand-100">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 bg-gold-400/20 text-gold-700 text-xs font-mono font-bold rounded-lg uppercase tracking-wider border border-gold-400/40">
                      {currentPillar.pillarNumber}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-600">
                      {currentPillar.badge}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-brand-900 mt-2">
                    {currentPillar.title}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm mt-1">
                    {currentPillar.subtitle}
                  </p>
                </div>

                {/* Deck Card Counter Indicator */}
                <div className="flex items-center gap-2 self-start sm:self-center bg-brand-50 px-3.5 py-1.5 rounded-full border border-brand-100 text-xs font-bold text-brand-800">
                  <span>Stack {activeIdx + 1} of {trainingPillars.length}</span>
                </div>
              </div>

              {/* 4 Modules Grid inside this Pillar */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {currentPillar.topics.map((topic) => (
                  <div
                    key={topic.num}
                    className="p-5 rounded-2xl bg-cream-50/70 border border-brand-100 hover:border-gold-400 hover:bg-white hover:shadow-sm transition-all duration-200 flex items-start gap-4 group"
                  >
                    <div className="w-9 h-9 rounded-xl bg-brand-900 text-gold-400 flex items-center justify-center font-mono font-bold text-xs flex-shrink-0 group-hover:bg-gold-400 group-hover:text-brand-950 transition-colors shadow-xs">
                      {topic.num}
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-brand-900 text-sm group-hover:text-brand-700 transition-colors leading-snug">
                        {topic.title}
                      </h4>
                      <p className="text-gray-600 mt-1 text-xs leading-relaxed">
                        {topic.summary}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Interactive Deck Controls */}
              <div className="mt-8 pt-6 border-t border-brand-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-xs text-gray-500 font-medium text-center sm:text-left">
                  💡 Click next to shuffle through all 3 learning pillars and 12 modules.
                </p>

                <div className="flex items-center gap-3">
                  <button
                    onClick={handlePrev}
                    aria-label="Previous learning pillar"
                    className="px-4 py-2 rounded-xl bg-brand-50 hover:bg-brand-100 text-brand-800 font-bold text-xs border border-brand-200 transition-all flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>←</span> Prev Pillar
                  </button>

                  <button
                    onClick={handleNext}
                    aria-label="Next learning pillar"
                    className="px-5 py-2 rounded-xl bg-brand-900 hover:bg-brand-800 text-white font-bold text-xs transition-all flex items-center gap-2 cursor-pointer shadow-sm hover:shadow"
                  >
                    <span>Next Pillar</span>
                    <span className="text-gold-400">→</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
