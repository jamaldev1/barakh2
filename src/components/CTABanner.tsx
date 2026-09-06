'use client'

import FadeIn from '@/components/FadeIn'
import Link from 'next/link'

interface CTABannerProps {
  eyebrow?: string
  title?: string
  description?: string
  primaryBtnText?: string
  primaryBtnHref?: string
  secondaryBtnText?: string
  secondaryBtnHref?: string
}

export default function CTABanner({
  eyebrow = 'Partner With Us',
  title = 'Ready to Transform Your Soil & Crop Health?',
  description = 'Get in touch with our agricultural specialists to discuss bulk orders, farm setups, or custom farmer training sessions.',
  primaryBtnText = 'Discuss Your Requirement →',
  primaryBtnHref = '/contact',
  secondaryBtnText = '💬 Chat with Us',
  secondaryBtnHref = 'https://wa.me/923168803363',
}: CTABannerProps) {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-12 md:py-16 bg-cream-50/60 border-t border-brand-100/60">
      <section className="relative flex flex-col items-center justify-center mx-auto max-w-5xl w-full text-center rounded-3xl py-16 md:py-24 px-6 md:px-12 bg-[url('/images/hero-farm-landscape.jpg')] bg-cover bg-center bg-no-repeat overflow-hidden shadow-2xl border border-brand-900/10">
        {/* Dark Luxury Brand Backdrop Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-950/90 via-brand-900/85 to-brand-950/90 backdrop-blur-[1px]" />

        {/* Subtle geometric dot pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffca19_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center max-w-3xl mx-auto">
          <FadeIn>
            {eyebrow && (
              <p className="font-cursive text-2xl md:text-3xl text-gold-400 mb-1">
                {eyebrow}
              </p>
            )}

            <h2 className="text-2xl md:text-4xl font-display font-semibold text-white max-w-2xl leading-tight mt-1">
              {title}
            </h2>

            {/* Reference-style decorative gradient divider */}
            <div className="h-[3px] w-32 my-3.5 mx-auto bg-gradient-to-r from-transparent via-gold-400 to-transparent" />

            {description && (
              <p className="text-sm md:text-base text-white/90 max-w-xl mx-auto leading-relaxed mt-1">
                {description}
              </p>
            )}

            <div className="mt-6 flex flex-wrap justify-center gap-4 items-center">
              {primaryBtnText && primaryBtnHref && (
                <Link
                  href={primaryBtnHref}
                  className="px-8 py-3 text-sm md:text-base font-semibold text-brand-950 bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-300 hover:to-gold-400 hover:scale-105 transition duration-300 rounded-full shadow-lg hover:shadow-xl"
                >
                  {primaryBtnText}
                </Link>
              )}

              {secondaryBtnText && secondaryBtnHref && (
                <a
                  href={secondaryBtnHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-7 py-3 text-sm md:text-base font-semibold text-white bg-white/15 hover:bg-white/25 hover:scale-105 border border-white/30 backdrop-blur-sm transition duration-300 rounded-full shadow-md"
                >
                  {secondaryBtnText}
                </a>
              )}
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}

