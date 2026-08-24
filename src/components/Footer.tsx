export default function Footer() {
  const quickLinks = [
    ['/about', 'About Us'],
    ['/products', 'Products'],
    ['/solutions', 'Solutions'],
    ['/training', 'Farmer Training'],
    ['/contact', 'Contact Us'],
  ]

  const solutionLinks = [
    ['/products', 'Premium Vermicompost'],
    ['/solutions', 'Soil Health & Restoration'],
    ['/training', 'Hands-On Workshops'],
    ['/contact', 'Commercial Bulk Supply'],
  ]

  return (
    <footer className="bg-brand-900 text-white/80 mt-0">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-5">
            <img
              src="/images/logo.jpg"
              alt="Al Barakh Organics logo"
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <span className="font-display text-lg font-bold text-white leading-none block">AL BARAKH</span>
              <span className="text-[0.6rem] tracking-[0.2em] text-gold-400 font-medium uppercase">Organics</span>
            </div>
          </div>
          <p className="text-sm text-white/60 leading-relaxed">
            Organic Agriculture Solutions and Training Company helping farmers, growers, nurseries,
            institutions and businesses adopt practical sustainable agricultural practices.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-display font-bold text-white text-lg mb-5">Quick Links</h4>
          <ul className="space-y-2.5 text-sm">
            {quickLinks.map(([href, label]) => (
              <li key={label}>
                <a href={href} className="hover:text-gold-400 transition-colors flex items-center gap-2">
                  <span className="text-gold-400 text-xs">›</span> {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Solutions */}
        <div>
          <h4 className="font-display font-bold text-white text-lg mb-5">Our Solutions</h4>
          <ul className="space-y-2.5 text-sm">
            {solutionLinks.map(([href, label]) => (
              <li key={label}>
                <a href={href} className="hover:text-gold-400 transition-colors flex items-center gap-2">
                  <span className="text-gold-400 text-xs">›</span> {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-display font-bold text-white text-lg mb-5">Contact &amp; Info</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2.5 text-white/80">
              <span className="text-gold-400 text-base mt-0.5">📍</span>
              <div>
                <p className="font-semibold text-white">Branch Locations:</p>
                <p className="text-xs text-white/80 font-medium mt-0.5">Hyderabad Branch:</p>
                <p className="text-[0.7rem] text-white/60 leading-snug">Near Jholy Lal Restaurant, New Hyderabad City Road</p>
                <p className="text-xs text-white/80 font-medium mt-1">Main Production Facility:</p>
                <p className="text-[0.7rem] text-white/60 leading-snug">Tando Ghulam Ali, Sindh (200+ Beds)</p>
              </div>
            </li>
            <li className="flex items-center gap-2.5 text-white/80">
              <span className="text-gold-400 text-base">🇵🇰</span>
              <span>Serving All Over Pakistan</span>
            </li>
            <li className="flex items-center gap-2.5 text-white/80">
              <span className="text-gold-400 text-base">⏰</span>
              <span>Business Hours: 09:00 to 17:00</span>
            </li>
            <li className="flex items-center gap-2.5 text-white/80">
              <span className="text-gold-400 text-base">💬</span>
              <a
                href="https://wa.me/923168803363"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold-400 transition-colors font-medium text-white"
              >
                0316 8803363 (WhatsApp / Call)
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Al Barakh Organics. All rights reserved.
          </p>
          <p className="font-cursive text-2xl text-gold-400/50">
            Healthier Soil. Better Future.
          </p>
        </div>
      </div>
    </footer>
  )
}
