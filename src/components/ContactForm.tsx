'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const inquiryTypes = [
  { label: '🌾 Bulk Vermicompost Order', value: 'Bulk Order Inquiry' },
  { label: '🎓 Zaraat Kach’heri Training', value: 'Training Inquiry' },
  { label: '🔬 Farming Advisory', value: 'Consultancy Inquiry' },
  { label: '🤝 B2B & Partnership', value: 'Partnership Inquiry' },
]

export default function ContactForm() {
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [selectedInquiry, setSelectedInquiry] = useState(inquiryTypes[0].value)
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    message: '',
  })

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)

    const whatsappMessage = `*New Website Contact Inquiry*%0A%0A*Type:* ${encodeURIComponent(
      selectedInquiry
    )}%0A*Name:* ${encodeURIComponent(form.name)}%0A*Phone:* ${encodeURIComponent(
      form.phone
    )}%0A*Location/City:* ${encodeURIComponent(form.location || 'N/A')}%0A*Email:* ${encodeURIComponent(
      form.email || 'N/A'
    )}%0A%0A*Message:*%0A${encodeURIComponent(form.message)}`

    const whatsappUrl = `https://wa.me/923168803363?text=${whatsappMessage}`

    setTimeout(() => {
      window.open(whatsappUrl, '_blank')
      setLoading(false)
      setSubmitted(true)
    }, 400)
  }

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-brand-900 text-white rounded-3xl p-8 lg:p-10 text-center border border-gold-400/40 shadow-xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold-400/10 rounded-full blur-2xl pointer-events-none" />
            
            <div className="w-16 h-16 rounded-2xl bg-gold-400 text-brand-950 flex items-center justify-center text-3xl mx-auto mb-4 font-bold shadow-lg">
              ✓
            </div>
            <h3 className="font-display text-2xl font-bold text-white mb-2">
              Inquiry Dispatched to WhatsApp!
            </h3>
            <p className="text-white/80 text-sm max-w-md mx-auto leading-relaxed mb-6">
              Thank you, <strong>{form.name}</strong>. Our agronomy team will respond immediately to assist with your requirement.
            </p>
            
            <button
              type="button"
              onClick={() => {
                setForm({ name: '', email: '', phone: '', location: '', message: '' })
                setSubmitted(false)
              }}
              className="btn-primary py-3 px-6 text-sm font-semibold inline-flex items-center gap-2 cursor-pointer"
            >
              <span>Submit Another Inquiry</span>
              <span>→</span>
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            {/* Inquiry Type Pills */}
            <div>
              <label className="block text-xs font-mono font-bold uppercase tracking-wider text-brand-900 mb-2.5">
                1. Select Inquiry Topic:
              </label>
              <div className="grid grid-cols-2 gap-2 sm:gap-2.5">
                {inquiryTypes.map((type) => (
                  <button
                    key={type.value}
                    type="button"
                    onClick={() => setSelectedInquiry(type.value)}
                    className={`px-3 py-2.5 rounded-xl text-xs font-semibold text-left transition-all duration-200 border cursor-pointer ${
                      selectedInquiry === type.value
                        ? 'bg-brand-900 text-gold-300 border-brand-900 shadow-md font-bold ring-2 ring-gold-400/40'
                        : 'bg-cream-50 text-brand-900 border-brand-100/80 hover:bg-cream-100 hover:border-gold-400/50'
                    }`}
                  >
                    {type.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Form Input Grid */}
            <div className="space-y-4 pt-2">
              <label className="block text-xs font-mono font-bold uppercase tracking-wider text-brand-900 mb-1">
                2. Your Information:
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ali Khan"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-cream-50/60 border border-gray-200 rounded-xl px-4 py-3 text-sm text-brand-950 focus:outline-none focus:ring-2 focus:ring-brand-800 focus:bg-white transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Phone / WhatsApp Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 0300 1234567"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full bg-cream-50/60 border border-gray-200 rounded-xl px-4 py-3 text-sm text-brand-950 focus:outline-none focus:ring-2 focus:ring-brand-800 focus:bg-white transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    City / District
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Hyderabad, Tando Allahyar"
                    value={form.location}
                    onChange={(e) => setForm({ ...form, location: e.target.value })}
                    className="w-full bg-cream-50/60 border border-gray-200 rounded-xl px-4 py-3 text-sm text-brand-950 focus:outline-none focus:ring-2 focus:ring-brand-800 focus:bg-white transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    placeholder="name@example.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-cream-50/60 border border-gray-200 rounded-xl px-4 py-3 text-sm text-brand-950 focus:outline-none focus:ring-2 focus:ring-brand-800 focus:bg-white transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Your Message / Requirement Details <span className="text-red-500">*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tell us about your crop acreage, vermicompost quantity, or questions..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-cream-50/60 border border-gray-200 rounded-xl px-4 py-3 text-sm text-brand-950 focus:outline-none focus:ring-2 focus:ring-brand-800 focus:bg-white transition-all resize-none"
                />
              </div>
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              className="w-full btn-primary text-base py-4 font-bold shadow-lg hover:shadow-xl flex items-center justify-center gap-2 rounded-xl transition cursor-pointer disabled:opacity-50"
            >
              {loading ? (
                <span>Connecting to WhatsApp...</span>
              ) : (
                <>
                  <svg className="w-5 h-5 text-brand-950" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  <span>Send Message via WhatsApp →</span>
                </>
              )}
            </motion.button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  )
}
