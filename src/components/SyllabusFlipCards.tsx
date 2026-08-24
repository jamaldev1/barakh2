'use client'

import { useState } from 'react'
import { trainingPillars, FlipTopic } from '@/data/training'

function FlipCard({ topic }: { topic: FlipTopic }) {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div
      className="group h-[290px] sm:h-[300px] w-full [perspective:1000px] cursor-pointer select-none"
      onClick={() => setIsFlipped((prev) => !prev)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          setIsFlipped((prev) => !prev)
        }
      }}
      aria-label={`${topic.title}. Click to ${isFlipped ? 'flip back' : 'view detailed learning takeaways'}`}
    >
      <div
        className={`relative w-full h-full duration-500 [transform-style:preserve-3d] transition-transform rounded-2xl shadow-xs hover:shadow-sm ${
          isFlipped ? '[transform:rotateY(180deg)]' : ''
        }`}
      >
        {/* ═══ FRONT OF CARD ═══ */}
        <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] bg-white rounded-2xl p-5 border-2 border-brand-100/90 flex flex-col justify-between hover:border-gold-400/80 transition-colors overflow-hidden">
          <div>
            {/* Top row: Number and Category */}
            <div className="flex items-center justify-between gap-2 mb-3">
              <span className="w-7 h-7 rounded-lg bg-brand-900 text-gold-400 font-mono font-bold text-xs flex items-center justify-center shadow-xs flex-shrink-0">
                {topic.num}
              </span>
              <span className="text-[0.62rem] font-bold uppercase tracking-wider text-brand-700 bg-brand-50 border border-brand-200/80 px-2 py-0.5 rounded-full truncate max-w-[150px]">
                {topic.category}
              </span>
            </div>

            {/* Title */}
            <h4 className="font-display font-bold text-brand-900 text-base leading-snug group-hover:text-brand-700 transition-colors">
              {topic.title}
            </h4>

            {/* Teaser Summary */}
            <p className="text-gray-600 text-xs mt-2 leading-relaxed line-clamp-3">
              {topic.summary}
            </p>
          </div>

          {/* Bottom Flip Indicator Cue */}
          <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-[0.68rem] text-gold-700 font-semibold mt-auto">
            <span className="flex items-center gap-1">
              <span className="text-xs">↻</span> Click to flip &amp; view
            </span>
            <span className="text-[0.62rem] uppercase text-gray-400 font-bold">Details ↗</span>
          </div>
        </div>

        {/* ═══ BACK OF CARD (180deg) ═══ */}
        <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-brand-900 text-white rounded-2xl p-4 sm:p-5 border-2 border-gold-400/50 flex flex-col justify-between shadow-xl overflow-hidden">
          <div>
            <div className="flex items-center justify-between gap-2 pb-2 mb-2.5 border-b border-white/15">
              <span className="text-[0.62rem] font-bold uppercase tracking-widest text-gold-400">
                Module {topic.num} • Key Focus
              </span>
              <span className="text-[0.65rem] text-white/60 hover:text-gold-300 transition font-medium">↺ Flip</span>
            </div>

            {/* Takeaways list */}
            <ul className="space-y-1.5 text-[0.72rem] text-white/90">
              {topic.takeaways.map((point, idx) => (
                <li key={idx} className="flex items-start gap-1.5 leading-tight">
                  <span className="text-gold-400 text-xs flex-shrink-0 mt-0.5">✓</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Impact summary badge */}
          <div className="pt-2 border-t border-white/15 mt-auto">
            <p className="text-[0.68rem] text-gold-300 font-medium leading-tight">
              ⭐ <span className="text-white/70">Impact:</span> {topic.impact}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function SyllabusFlipCards() {
  return (
    <div className="space-y-16">
      {trainingPillars.map((pillar) => (
        <div key={pillar.pillarNumber} className="bg-cream-100/50 rounded-3xl p-6 sm:p-10 border border-brand-100/80">
          
          {/* Pillar Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 mb-8 border-b border-brand-200/60 gap-3">
            <div>
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-gold-400/20 text-gold-700 text-xs font-mono font-bold rounded-lg uppercase tracking-wider border border-gold-400/40">
                  {pillar.pillarNumber}
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-700">
                  {pillar.badge}
                </span>
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-brand-900 mt-2">
                {pillar.title}
              </h3>
              <p className="text-gray-600 text-xs md:text-sm mt-1">
                {pillar.subtitle}
              </p>
            </div>

            <div className="hidden lg:flex items-center gap-1 text-[0.7rem] font-semibold text-brand-700 bg-white px-3.5 py-1.5 rounded-full border border-brand-200 shadow-2xs self-start md:self-auto">
              <span>↻ Interactive: Click or tap cards to flip</span>
            </div>
          </div>

          {/* 4 Flipping Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillar.topics.map((topic) => (
              <FlipCard key={topic.num} topic={topic} />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
