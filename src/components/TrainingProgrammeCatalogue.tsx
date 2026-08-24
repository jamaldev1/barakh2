'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { trainingSessionsData } from '@/data/training'

const programmesMeta = [
  {
    num: '01',
    tag: "ZARAAT KACH'HERI",
    title: 'Tando Ghulam Ali Field Masterclass',
    summary: 'Full Day · Main 200+ Bed Facility',
    location: 'Tando Ghulam Ali, Sindh',
    duration: 'Full Day Session',
    audience: 'Farmers, Estate Managers & Growers',
    badge: 'On-Farm Field Masterclass',
  },
  {
    num: '02',
    tag: "ZARAAT KACH'HERI",
    title: 'Hyderabad Regional Training Session',
    summary: 'Half Day · Hyderabad Branch Hub',
    location: 'Hyderabad Branch (City Road)',
    duration: 'Half Day Session',
    audience: 'Growers, Nurseries & Students',
    badge: 'Regional Hub Workshop',
  },
  {
    num: '03',
    tag: 'CUSTOM TRAINING',
    title: 'Farm / Educational Institution Training',
    summary: '1–3 Days · On-Site Anywhere in Pakistan',
    location: 'Delivered at Your Farm / Campus',
    duration: 'Custom (1–3 Days)',
    audience: 'Corporate Farms & Universities',
    badge: 'Custom On-Demand',
  },
]

export default function TrainingProgrammeCatalogue() {
  const [selectedIdx, setSelectedIdx] = useState(0)

  const activeProgramme = programmesMeta[selectedIdx]
  const activeSessionData = trainingSessionsData[selectedIdx] || trainingSessionsData[0]

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
      
      {/* ═══ LEFT: COMPACT PROGRAMME SELECTOR LIST (42%) ═══ */}
      <div className="lg:col-span-5">
        <p className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-gold-600 mb-1.5">
          TRAINING PROGRAMMES
        </p>
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-brand-900 leading-tight">
          Practical learning, delivered where agriculture happens.
        </h2>
        <p className="text-[#53636A] text-xs sm:text-sm mt-2 leading-relaxed">
          Select a programme to review full session specifications and curriculum highlights.
        </p>

        {/* 3 Numbered Selectable Items */}
        <div className="mt-5 divide-y divide-stone-200/90 border-t border-b border-stone-200/90">
          {programmesMeta.map((prog, idx) => {
            const isSelected = idx === selectedIdx
            return (
              <button
                key={prog.num}
                onClick={() => setSelectedIdx(idx)}
                className={`w-full text-left py-3.5 px-3 rounded-xl transition-all duration-200 cursor-pointer flex items-start gap-3.5 sm:gap-4 group ${
                  isSelected
                    ? 'bg-cream-100/90 text-brand-950 shadow-2xs'
                    : 'hover:bg-cream-50/60 text-brand-900'
                }`}
              >
                {/* Number */}
                <span
                  className={`font-display font-light text-2xl sm:text-3xl flex-shrink-0 leading-none pt-0.5 transition-colors ${
                    isSelected ? 'text-gold-600 font-medium' : 'text-stone-400 group-hover:text-gold-600/80'
                  }`}
                >
                  {prog.num}
                </span>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <p
                      className={`text-[0.62rem] font-bold uppercase tracking-wider ${
                        isSelected ? 'text-gold-700' : 'text-stone-500'
                      }`}
                    >
                      {prog.tag}
                    </p>
                    <span
                      className={`text-xs transition-transform duration-200 ${
                        isSelected
                          ? 'text-gold-600 translate-x-1 font-bold'
                          : 'text-stone-300 group-hover:text-stone-500 group-hover:translate-x-0.5'
                      }`}
                    >
                      →
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-sm sm:text-base text-brand-900 leading-snug mt-0.5">
                    {prog.title}
                  </h3>

                  <p className="text-[#53636A] text-[0.75rem] mt-0.5">
                    {prog.summary}
                  </p>
                </div>
              </button>
            )
          })}
        </div>

        {/* Note below selector */}
        <p className="text-[0.72rem] text-stone-500 mt-3 flex items-center gap-1.5">
          <span>💡</span> Click any programme above to view details &amp; register.
        </p>
      </div>

      {/* ═══ RIGHT: COMPACT DETAIL PANEL (58%) ═══ */}
      <div className="lg:col-span-7">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedIdx}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="bg-white rounded-3xl p-5 sm:p-7 border-2 border-stone-200/90 shadow-sm relative overflow-hidden"
          >
            {/* Top Bar with Big Understated Numeral & Badge */}
            <div className="flex items-start justify-between gap-4 pb-3.5 mb-3.5 border-b border-stone-100">
              <div>
                <span className="text-[0.65rem] font-bold uppercase tracking-wider text-brand-700 bg-brand-50 border border-brand-200/70 px-2 py-0.5 rounded-md">
                  {activeProgramme.badge}
                </span>
                <h3 className="font-display font-bold text-xl sm:text-2xl text-brand-900 mt-1.5 leading-tight">
                  {activeSessionData.title}
                </h3>
              </div>

              <span className="font-display font-light text-3xl sm:text-4xl text-gold-600/60 select-none flex-shrink-0 leading-none">
                {activeProgramme.num}
              </span>
            </div>

            {/* Description */}
            <p className="text-[#53636A] text-xs leading-relaxed">
              {activeSessionData.description}
            </p>

            {/* Key Logistics Metadata */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 my-4">
              <div className="p-2.5 rounded-xl bg-cream-50/80 border border-stone-200/70">
                <p className="text-[0.62rem] uppercase tracking-wider text-stone-500 font-bold">Location &amp; Venue</p>
                <p className="font-bold text-xs text-brand-900 mt-0.5">{activeProgramme.location}</p>
              </div>

              <div className="p-2.5 rounded-xl bg-cream-50/80 border border-stone-200/70">
                <p className="text-[0.62rem] uppercase tracking-wider text-stone-500 font-bold">Session Duration</p>
                <p className="font-bold text-xs text-brand-900 mt-0.5">{activeProgramme.duration}</p>
              </div>

              <div className="p-2.5 rounded-xl bg-cream-50/80 border border-stone-200/70">
                <p className="text-[0.62rem] uppercase tracking-wider text-stone-500 font-bold">Target Audience</p>
                <p className="font-bold text-xs text-brand-900 mt-0.5 truncate">{activeProgramme.audience}</p>
              </div>
            </div>

            {/* Curriculum Highlights Checklist */}
            <div className="space-y-2 pb-4 mb-4 border-b border-stone-100">
              <p className="text-[0.65rem] font-bold uppercase tracking-wider text-brand-800">
                Curriculum &amp; Hands-on Modules:
              </p>
              <div className="space-y-1.5 text-xs text-brand-950">
                {activeSessionData.curriculum.map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="text-gold-600 font-bold text-xs flex-shrink-0">✓</span>
                    <span className="leading-tight">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Actions & Discrete Availability */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1">
              <div>
                <p className="text-xs text-stone-500">
                  <span className="font-semibold text-brand-900">{activeSessionData.seatsLeft} places</span> open for upcoming batch
                </p>
                <p className="text-[0.68rem] text-stone-400 mt-0.5">{activeSessionData.price}</p>
              </div>

              <div className="flex items-center gap-2.5">
                <a
                  href="#register"
                  className="px-3.5 py-2 rounded-xl bg-brand-50 hover:bg-brand-100 text-brand-900 font-bold text-xs border border-brand-200 transition text-center"
                >
                  Fill Form ↓
                </a>
                <a
                  href={`https://wa.me/923168803363?text=Hi,%20I%20would%20like%20to%20register/inquire%20for%20${encodeURIComponent(activeSessionData.title)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-xs py-2 px-4 font-bold shadow-xs whitespace-nowrap"
                >
                  Register on WhatsApp →
                </a>
              </div>
            </div>

          </motion.div>
        </AnimatePresence>
      </div>

    </div>
  )
}
