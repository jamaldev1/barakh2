'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

const programmes = [
  {
    id: 'field-training',
    label: 'FIELD TRAINING',
    title: 'Tando Ghulam Ali',
    desc: 'Full Day · 200+ Bed Facility',
  },
  {
    id: 'regional-session',
    label: 'REGIONAL SESSION',
    title: 'Hyderabad',
    desc: 'Half Day · Regional Branch Hub',
  },
  {
    id: 'custom-training',
    label: 'CUSTOM / ON-DEMAND',
    title: 'At your farm or institution',
    desc: '1–3 Days · Anywhere in Pakistan',
  },
]

const steps = [
  { num: '01', label: 'Training' },
  { num: '02', label: 'Details' },
  { num: '03', label: 'Request' },
]

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 60 : -60,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -60 : 60,
    opacity: 0,
  }),
}

export default function TrainingStepForm() {
  const router = useRouter()
  const [step, setStep] = useState(0)
  const [direction, setDirection] = useState(1)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const [form, setForm] = useState({
    programme: '',
    fullName: '',
    phone: '',
    city: '',
    farmSize: '',
    message: '',
  })

  function goNext() {
    setDirection(1)
    setStep((s) => Math.min(s + 1, 2))
  }

  function goBack() {
    setDirection(-1)
    setStep((s) => Math.max(s - 1, 0))
  }

  function update(field: string, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  function handleSubmit() {
    setLoading(true)

    const selectedProg = programmes.find((p) => p.id === form.programme)
    const progLabel = selectedProg ? `${selectedProg.label} — ${selectedProg.title}` : form.programme

    const message = `*Zaraat Kach'heri Training Request*%0A%0A*Programme:* ${encodeURIComponent(progLabel)}%0A*Name:* ${encodeURIComponent(form.fullName)}%0A*Phone:* ${encodeURIComponent(form.phone)}%0A*City:* ${encodeURIComponent(form.city)}%0A*Farm Size:* ${encodeURIComponent(form.farmSize || 'N/A')}%0A*Note:* ${encodeURIComponent(form.message || 'None')}`

    const whatsappUrl = `https://wa.me/923168803363?text=${message}`
    window.open(whatsappUrl, '_blank')

    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 600)
  }

  const canProceedStep0 = form.programme !== ''
  const canProceedStep1 = form.fullName.trim() !== '' && form.phone.trim() !== '' && form.city.trim() !== ''

  // ─── Confirmation Screen ───
  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.35 }}
        className="text-center py-12 px-6"
      >
        <div className="w-16 h-16 rounded-full bg-brand-900 text-gold-400 flex items-center justify-center text-2xl mx-auto mb-5 shadow-md">
          ✓
        </div>
        <h3 className="font-display text-2xl font-bold text-brand-900 mb-2">
          Request Sent Successfully
        </h3>
        <p className="text-[#53636A] text-sm max-w-sm mx-auto leading-relaxed mb-6">
          Our training coordinator will connect with you on WhatsApp within 24 hours to confirm session details and schedule.
        </p>

        <div className="space-y-3">
          <a
            href="https://wa.me/923168803363"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2 text-sm py-3 px-6 font-bold shadow-sm"
          >
            Continue on WhatsApp →
          </a>
          <p className="text-xs text-stone-400">
            Or call directly: <span className="font-semibold text-brand-900">0316 8803363</span>
          </p>
        </div>
      </motion.div>
    )
  }

  return (
    <div>
      {/* ─── Step Indicator ─── */}
      <div className="flex items-center gap-1 mb-7">
        {steps.map((s, idx) => (
          <div key={s.num} className="flex items-center gap-1">
            <div className="flex items-center gap-1.5">
              <span
                className={`font-mono text-[0.65rem] font-bold transition-colors duration-300 ${
                  idx <= step ? 'text-gold-600' : 'text-stone-300'
                }`}
              >
                {s.num}
              </span>
              <span
                className={`text-xs font-semibold transition-colors duration-300 ${
                  idx === step ? 'text-brand-900' : idx < step ? 'text-gold-700' : 'text-stone-400'
                }`}
              >
                {s.label}
              </span>
            </div>
            {idx < steps.length - 1 && (
              <div className={`w-8 h-px mx-1.5 transition-colors duration-300 ${idx < step ? 'bg-gold-400' : 'bg-stone-200'}`} />
            )}
          </div>
        ))}
      </div>

      {/* ─── Animated Step Content ─── */}
      <div className="relative overflow-hidden min-h-[280px]">
        <AnimatePresence mode="wait" custom={direction}>
          {step === 0 && (
            <motion.div
              key="step-0"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              className="space-y-5"
            >
              <div>
                <p className="text-[0.7rem] font-bold uppercase tracking-[0.18em] text-brand-800 mb-1">
                  SELECT YOUR PROGRAMME
                </p>
                <p className="text-xs text-[#53636A]">
                  What kind of training are you looking for?
                </p>
              </div>

              {/* 2+1 Programme Selection */}
              <div className="grid grid-cols-2 gap-3">
                {programmes.slice(0, 2).map((prog) => {
                  const isSelected = form.programme === prog.id
                  return (
                    <button
                      key={prog.id}
                      type="button"
                      onClick={() => update('programme', prog.id)}
                      className={`text-left p-4 rounded-xl border-2 transition-all duration-200 cursor-pointer ${
                        isSelected
                          ? 'border-gold-500 bg-gold-50/60 shadow-sm'
                          : 'border-stone-200 bg-white hover:border-stone-300 hover:bg-cream-50/50'
                      } ${form.programme && !isSelected ? 'opacity-60' : 'opacity-100'}`}
                    >
                      <p className={`text-[0.62rem] font-bold uppercase tracking-wider mb-1 ${isSelected ? 'text-gold-700' : 'text-stone-500'}`}>
                        {prog.label}
                      </p>
                      <p className={`font-display font-bold text-sm leading-snug ${isSelected ? 'text-brand-900' : 'text-brand-800'}`}>
                        {prog.title}
                      </p>
                      <p className="text-[0.68rem] text-[#53636A] mt-0.5">{prog.desc}</p>
                    </button>
                  )
                })}
              </div>

              {/* Full-width custom option */}
              {(() => {
                const prog = programmes[2]
                const isSelected = form.programme === prog.id
                return (
                  <button
                    key={prog.id}
                    type="button"
                    onClick={() => update('programme', prog.id)}
                    className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 cursor-pointer ${
                      isSelected
                        ? 'border-gold-500 bg-gold-50/60 shadow-sm'
                        : 'border-stone-200 bg-white hover:border-stone-300 hover:bg-cream-50/50'
                    } ${form.programme && !isSelected ? 'opacity-60' : 'opacity-100'}`}
                  >
                    <p className={`text-[0.62rem] font-bold uppercase tracking-wider mb-1 ${isSelected ? 'text-gold-700' : 'text-stone-500'}`}>
                      {prog.label}
                    </p>
                    <p className={`font-display font-bold text-sm leading-snug ${isSelected ? 'text-brand-900' : 'text-brand-800'}`}>
                      {prog.title}
                    </p>
                    <p className="text-[0.68rem] text-[#53636A] mt-0.5">{prog.desc}</p>
                  </button>
                )
              })()}

              {/* Continue */}
              <div className="flex justify-end pt-2">
                <button
                  type="button"
                  onClick={goNext}
                  disabled={!canProceedStep0}
                  className="px-5 py-2.5 rounded-xl bg-brand-900 text-gold-400 font-bold text-xs hover:bg-brand-800 transition-colors disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                >
                  Continue →
                </button>
              </div>
            </motion.div>
          )}

          {step === 1 && (
            <motion.div
              key="step-1"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              className="space-y-5"
            >
              <div>
                <p className="text-[0.7rem] font-bold uppercase tracking-[0.18em] text-brand-800 mb-1">
                  YOUR DETAILS
                </p>
                <p className="text-xs text-[#53636A]">
                  How should we reach you?
                </p>
              </div>

              {/* Minimal Underline Inputs */}
              <div className="space-y-4">
                <div>
                  <label className="text-[0.68rem] font-bold uppercase tracking-wider text-stone-500 mb-1 block">Full Name *</label>
                  <input
                    required
                    value={form.fullName}
                    onChange={(e) => update('fullName', e.target.value)}
                    placeholder="Muhammad Ahmad"
                    className="w-full border-b-2 border-stone-200 focus:border-gold-500 bg-transparent py-2.5 text-sm text-brand-900 outline-none transition-colors placeholder:text-stone-300"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-[0.68rem] font-bold uppercase tracking-wider text-stone-500 mb-1 block">Phone / WhatsApp *</label>
                    <input
                      required
                      type="tel"
                      value={form.phone}
                      onChange={(e) => update('phone', e.target.value)}
                      placeholder="0300 1234567"
                      className="w-full border-b-2 border-stone-200 focus:border-gold-500 bg-transparent py-2.5 text-sm text-brand-900 outline-none transition-colors placeholder:text-stone-300"
                    />
                  </div>
                  <div>
                    <label className="text-[0.68rem] font-bold uppercase tracking-wider text-stone-500 mb-1 block">City / District *</label>
                    <input
                      required
                      value={form.city}
                      onChange={(e) => update('city', e.target.value)}
                      placeholder="Hyderabad"
                      className="w-full border-b-2 border-stone-200 focus:border-gold-500 bg-transparent py-2.5 text-sm text-brand-900 outline-none transition-colors placeholder:text-stone-300"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[0.68rem] font-bold uppercase tracking-wider text-stone-500 mb-1 block">Farm Size <span className="text-stone-400 normal-case">(optional)</span></label>
                  <input
                    value={form.farmSize}
                    onChange={(e) => update('farmSize', e.target.value)}
                    placeholder="e.g. 5 acres"
                    className="w-full border-b-2 border-stone-200 focus:border-gold-500 bg-transparent py-2.5 text-sm text-brand-900 outline-none transition-colors placeholder:text-stone-300"
                  />
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between pt-2">
                <button
                  type="button"
                  onClick={goBack}
                  className="text-xs font-semibold text-stone-500 hover:text-brand-900 transition-colors cursor-pointer"
                >
                  ← Back
                </button>
                <button
                  type="button"
                  onClick={goNext}
                  disabled={!canProceedStep1}
                  className="px-5 py-2.5 rounded-xl bg-brand-900 text-gold-400 font-bold text-xs hover:bg-brand-800 transition-colors disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
                >
                  Continue →
                </button>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step-2"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              className="space-y-5"
            >
              <div>
                <p className="text-[0.7rem] font-bold uppercase tracking-[0.18em] text-brand-800 mb-1">
                  REVIEW &amp; SUBMIT
                </p>
                <p className="text-xs text-[#53636A]">
                  Verify your details below, then submit your training request.
                </p>
              </div>

              {/* Summary Review */}
              <div className="space-y-2.5 text-xs">
                <div className="flex items-start justify-between py-2.5 border-b border-stone-100">
                  <span className="text-stone-500 font-semibold uppercase tracking-wider text-[0.62rem]">Programme</span>
                  <span className="text-brand-900 font-bold text-right">
                    {programmes.find((p) => p.id === form.programme)?.title || '—'}
                  </span>
                </div>
                <div className="flex items-start justify-between py-2.5 border-b border-stone-100">
                  <span className="text-stone-500 font-semibold uppercase tracking-wider text-[0.62rem]">Name</span>
                  <span className="text-brand-900 font-bold">{form.fullName || '—'}</span>
                </div>
                <div className="flex items-start justify-between py-2.5 border-b border-stone-100">
                  <span className="text-stone-500 font-semibold uppercase tracking-wider text-[0.62rem]">Phone</span>
                  <span className="text-brand-900 font-bold">{form.phone || '—'}</span>
                </div>
                <div className="flex items-start justify-between py-2.5 border-b border-stone-100">
                  <span className="text-stone-500 font-semibold uppercase tracking-wider text-[0.62rem]">City</span>
                  <span className="text-brand-900 font-bold">{form.city || '—'}</span>
                </div>
                {form.farmSize && (
                  <div className="flex items-start justify-between py-2.5 border-b border-stone-100">
                    <span className="text-stone-500 font-semibold uppercase tracking-wider text-[0.62rem]">Farm Size</span>
                    <span className="text-brand-900 font-bold">{form.farmSize}</span>
                  </div>
                )}
              </div>

              {/* Optional Message */}
              <div>
                <label className="text-[0.68rem] font-bold uppercase tracking-wider text-stone-500 mb-1 block">
                  Additional Note <span className="text-stone-400 normal-case">(optional)</span>
                </label>
                <textarea
                  value={form.message}
                  onChange={(e) => update('message', e.target.value)}
                  rows={2}
                  placeholder="Any specific requirements or questions..."
                  className="w-full border-b-2 border-stone-200 focus:border-gold-500 bg-transparent py-2 text-sm text-brand-900 outline-none transition-colors placeholder:text-stone-300 resize-none"
                />
              </div>

              {/* Navigation & Submit */}
              <div className="flex items-center justify-between pt-2">
                <button
                  type="button"
                  onClick={goBack}
                  className="text-xs font-semibold text-stone-500 hover:text-brand-900 transition-colors cursor-pointer"
                >
                  ← Back
                </button>
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={loading}
                  className="px-6 py-2.5 rounded-xl bg-gold-500 hover:bg-gold-600 text-brand-950 font-bold text-xs transition-colors disabled:opacity-50 cursor-pointer shadow-sm"
                >
                  {loading ? 'Sending...' : 'Submit Request on WhatsApp →'}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
