'use client'

import { motion } from 'framer-motion'
import { UpcomingProduct } from '@/data/products'
import FadeIn from '@/components/FadeIn'

type Props = {
  products: UpcomingProduct[]
}

export default function UpcomingSolutionsShowcase({ products }: Props) {
  return (
    <section className="bg-cream-100 px-6 py-20 lg:py-28 border-t border-brand-100/80 relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header - Site Theme Consistent */}
        <FadeIn>
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-gold-400/20 text-gold-700 text-xs font-bold uppercase tracking-wider mb-2.5 border border-gold-400/30">
              <span className="w-2 h-2 rounded-full bg-gold-500 animate-pulse" />
              🚀 Coming Soon
            </span>
            <p className="eyebrow text-gold-500">Innovation Pipeline</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-brand-900 mt-2 leading-tight">
              Upcoming Organic Solutions
            </h2>
            <p className="mt-3 text-gray-600 text-base md:text-lg leading-relaxed">
              Expanding our biological platform with next-generation organic inputs currently in active research and field trials.
            </p>
          </div>
        </FadeIn>

        {/* 2-Column Perfectly Balanced Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {products.map((product, index) => (
            <FadeIn key={product.name} delay={index * 0.15}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="bg-white rounded-3xl p-8 shadow-sm border border-brand-100/80 hover:border-gold-400 hover:shadow-xl transition-all duration-300 h-full flex flex-col justify-between relative overflow-hidden group"
              >
                {/* Decorative Top Accent Glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold-400/10 rounded-full blur-2xl group-hover:bg-gold-400/20 transition-all pointer-events-none" />

                <div>
                  {/* Card Header: Icon & Status Badge */}
                  <div className="flex items-center justify-between gap-4 mb-5">
                    <div className="w-14 h-14 rounded-2xl bg-cream-100 border border-brand-100/60 flex items-center justify-center text-3xl group-hover:scale-110 group-hover:bg-gold-50 transition-all duration-300 shadow-sm">
                      {product.icon}
                    </div>
                    <span className="bg-gold-100 text-brand-900 border border-gold-300 text-xs font-bold px-3 py-1.2 rounded-full inline-flex items-center gap-1.5 shadow-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold-500 animate-ping" />
                      {product.status}
                    </span>
                  </div>

                  {/* Category & Title */}
                  <span className="text-xs text-gold-600 font-bold tracking-wide uppercase block">
                    {product.category}
                  </span>
                  <h3 className="font-display font-bold text-brand-900 text-xl mt-1.5 group-hover:text-brand-800 transition-colors leading-snug">
                    {product.name}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 mt-3 text-sm leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Footer Action & R&D Status */}
                <div className="mt-8 pt-5 border-t border-gray-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-semibold text-brand-900">
                  <div className="flex items-center gap-1.5 text-gray-500 font-medium">
                    <span className="text-brand-800 font-bold">🔬</span>
                    <span>In Research &amp; Field Trials</span>
                  </div>

                  <a
                    href={`https://wa.me/923168803363?text=${encodeURIComponent(
                      `Hi Al Barakh Organics, I am interested in testing or learning more about your upcoming product: ${product.name}. Please share details.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-gold-600 hover:text-gold-700 font-bold text-xs group-hover:translate-x-1 transition-transform cursor-pointer"
                  >
                    <span>Inquire / Register Interest</span>
                    <span>→</span>
                  </a>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
