'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const links = [
    ['/', 'Home'],
    ['/about', 'About Us'],
    ['/products', 'Products'],
    ['/solutions', 'Solutions'],
    ['/training', 'Training'],
    ['/impact', 'Impact'],
    ['/resources', 'Resources'],
    ['/contact', 'Contact'],
  ]

  return (
    <>
      {/* Top Bar */}
      <div className="hidden lg:block bg-brand-800 text-white/80 text-xs">
        <div className="max-w-7xl mx-auto px-6 py-2.5 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <svg className="w-3.5 h-3.5 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Branches: <strong>Tando Ghulam Ali</strong> &amp; <strong>Hyderabad</strong></span>
            </span>
            <span className="flex items-center gap-2">
              <span className="text-gold-400">🇵🇰</span>
              <span>All Over Pakistan</span>
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-3.5 h-3.5 text-gold-400" fill="currentColor" viewBox="0 0 512 512"><path d="M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"/></svg>
              <span>Business Hours: 09:00 – 17:00</span>
            </span>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/923168803363"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-medium hover:text-white transition"
            >
              <span className="text-gold-400">📞</span>
              <span>WhatsApp / Call: <strong>0316 8803363</strong></span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <img
              src="/images/logo.jpg"
              alt="Al Barakh Organics logo"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <span className="font-display text-xl font-bold text-brand-800 leading-none block">AL BARAKH</span>
              <span className="text-[0.65rem] tracking-[0.2em] text-brand-500 font-medium uppercase">Organics</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {links.map(([href, label]) => (
              <Link
                key={href}
                href={href}
                className="px-3.5 py-2 text-sm font-medium text-gray-700 hover:text-brand-700 transition-colors relative group"
              >
                {label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-3/4 h-0.5 bg-gold-400 transition-all duration-200" />
              </Link>
            ))}
          </div>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/923168803363?text=Hi,%20I%20would%20like%20to%20order%20organic%20vermicompost%20products."
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold text-brand-900 bg-gold-400 hover:bg-gold-500 hover:text-brand-950 transition-all duration-300 shadow-sm"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
              </svg>
              Order on WhatsApp
            </a>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 text-brand-800"
              aria-label="Toggle menu"
            >
              <span className={`block w-6 h-0.5 bg-brand-800 transition-all duration-200 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block w-6 h-0.5 bg-brand-800 transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-6 h-0.5 bg-brand-800 transition-all duration-200 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden border-t border-gray-100 px-6 py-5 flex flex-col gap-1 bg-white shadow-lg">
            {links.map(([href, label]) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="text-gray-700 font-medium hover:text-brand-700 hover:bg-brand-50 px-4 py-2.5 rounded-lg transition"
              >
                {label}
              </Link>
            ))}
            <a
              href="https://wa.me/923168803363?text=Hi,%20I%20would%20like%20to%20order%20organic%20vermicompost%20products."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-sm font-semibold text-brand-900 bg-gold-400 hover:bg-gold-500 hover:text-brand-950 transition-all duration-300 w-full mt-3 shadow-sm"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
              </svg>
              Order on WhatsApp
            </a>
          </div>
        )}
      </header>
    </>
  )
}
