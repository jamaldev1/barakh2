import Header from '@/components/Header'
import FadeIn from '@/components/FadeIn'
import CountUpStats from '@/components/CountUpStats'
import MotionButton from '@/components/MotionButton'
import HeroBackgroundSlider from '@/components/HeroBackgroundSlider'
import CTABanner from '@/components/CTABanner'
import CoreValuesOrbit from '@/components/CoreValuesOrbit'

export const metadata = {
  title: 'About Us | Al Barakh Organics',
  description:
    'Founded in 2024 by Mr. Sohaib Ahmed Khatti, Al Barakh Organics provides premium-quality vermicompost, modern farming consultancy, and Zaraat Kach’heri community training across Pakistan.',
}

const impactStats = [
  { value: 200, suffix: '+', label: 'Beds (Main Branch)', description: 'Tando Ghulam Ali vermicompost research & production facility' },
  { value: 20, suffix: '+', label: 'Beds (Hyderabad)', description: 'Hyderabad regional distribution and production branch' },
  { value: 500, suffix: '+', label: 'Acres Supported', description: 'Agricultural land revitalized across Sindh and Pakistan' },
  { value: 100, suffix: '+', label: 'Farmer Trainings', description: 'Workshops & Zaraat Kach’heri community sessions conducted' },
]

const approachSteps = [
  {
    step: '01',
    title: 'Soil Diagnostics & Modern Consultancy',
    description: 'We evaluate field soil conditions, crop nutrient needs, and chemical dependency to design practical, high-yield organic solutions.',
    icon: '🔬',
  },
  {
    step: '02',
    title: 'Premium Biological Inputs',
    description: 'Supplying 100% pure vermicompost, liquid vermiwash, and active Red Wiggler (Eisenia fetida) colonies from our 220+ bed facilities.',
    icon: '🌱',
  },
  {
    step: '03',
    title: 'Zaraat Kach’heri & Training',
    description: 'Conducting community agricultural dialogues and hands-on workshops to empower farmers, women, and students with practical skills.',
    icon: '🎓',
  },
  {
    step: '04',
    title: 'Long-Term Soil & Economic Health',
    description: 'Rebuilding soil organic matter, cutting expensive synthetic fertilizer costs, and restoring generational agricultural profitability.',
    icon: '📈',
  },
]

const coreValues = [
  {
    title: 'Sustainability',
    desc: 'Promoting long-term soil regeneration and ecological balance across Pakistan.',
    icon: '🌱',
  },
  {
    title: 'Farmer Empowerment',
    desc: 'Protecting grower margins, increasing yields, and restoring farming dignity.',
    icon: '🤝',
  },
  {
    title: 'Organic Agriculture',
    desc: '100% natural, chemical-free solutions for healthy soils and clean harvests.',
    icon: '🌿',
  },
  {
    title: 'Knowledge & Innovation',
    desc: 'Making modern agricultural methods and research accessible to every grower.',
    icon: '💡',
  },
  {
    title: 'Community',
    desc: 'Connecting farmers, experts, and youth through our Zaraat Kach’heri platform.',
    icon: '👥',
  },
  {
    title: 'Quality & Integrity',
    desc: 'Uncompromising standards in pure organic inputs and transparent business practices.',
    icon: '⭐',
  },
  {
    title: 'Inclusion & Opportunity',
    desc: 'Encouraging women and girls to lead, learn, and excel in agriculture.',
    icon: '🌸',
  },
  {
    title: 'Positive Impact',
    desc: 'Saving agricultural lands from degradation and building a green future.',
    icon: '🌍',
  },
]

export default function AboutPage() {
  return (
    <>
      <Header />

      {/* ═══ HERO BANNER ═══ */}
      <section className="relative min-h-[440px] lg:min-h-[500px] flex items-center overflow-hidden">
        <HeroBackgroundSlider />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-950/80 via-brand-950/40 to-brand-950/40" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 lg:py-28 w-full text-center">
          <FadeIn>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-400/20 border border-gold-400/40 text-gold-300 font-semibold text-xs uppercase tracking-wider mb-4 backdrop-blur-sm">
              Established in 2024 • Reviving Pakistan&apos;s Agriculture
            </span>
            <p className="font-cursive text-3xl md:text-4xl text-gold-400">About Al Barakh</p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-3 leading-tight max-w-4xl mx-auto">
              Reviving Soil Health &amp;<br />
              <span className="text-gold-300">Empowering Agricultural Communities</span>
            </h1>
            <p className="mt-6 text-white/90 max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
              Al Barakh Organics provides premium-quality vermicompost to farmers, growers, B2B, exporters and retailers, with a vision to help revive Pakistan’s declining agricultural landscape through sustainable organic solutions, modern farming consultancy, and practical training.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ═══ OUR JOURNEY / THE PROBLEM WE ARE SOLVING ═══ */}
      <section className="max-w-7xl mx-auto px-6 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left copy */}
          <div className="lg:col-span-7">
            <FadeIn>
              <span className="eyebrow text-gold-500">Our Origin &amp; Purpose</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-900 mt-2 leading-tight">
                Why Al Barakh Was Started
              </h2>
              <p className="mt-6 text-gray-700 leading-relaxed text-base md:text-lg">
                <strong>Al Barakh Organics</strong> was founded in <strong>2024 by Mr. Sohaib Ahmed Khatti</strong> with a clear vision: to revive declining agriculture by restoring soil health, empowering farmers, and promoting sustainable farming through natural organic solutions.
              </p>
              
              <div className="mt-6 p-6 bg-cream-50 rounded-2xl border-l-4 border-gold-400 border-brand-100">
                <h3 className="font-display font-bold text-brand-900 text-lg mb-2">The Problem We Are Solving</h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  We aim to address <strong>declining soil health, excessive dependence on expensive chemical fertilizers, rising farming costs, and the rapid loss of fertile agricultural land</strong> across Sindh and Pakistan by providing accessible organic inputs and modern, practical agricultural practices.
                </p>
              </div>

              <p className="mt-6 text-gray-600 leading-relaxed text-base">
                We supply individual growers, commercial nurseries, institutional farms, B2B partners, and exporters, while providing dedicated consultancy for modern sustainable farming and biological soil rejuvenation.
              </p>

              {/* Operations badges */}
              <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { icon: '🏭', label: 'Tando Ghulam Ali (200+ Beds)' },
                  { icon: '🌿', label: 'Hyderabad Branch (20+ Beds)' },
                  { icon: '🇵🇰', label: 'Serving All Over Pakistan' },
                  { icon: '🤝', label: 'Zaraat Kach’heri Platform' },
                ].map((badge) => (
                  <div key={badge.label} className="flex flex-col items-center text-center p-3 rounded-xl bg-cream-100 border border-brand-100">
                    <span className="text-xl mb-1">{badge.icon}</span>
                    <span className="text-xs font-bold text-brand-900 leading-tight">{badge.label}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-4 items-center">
                <MotionButton href="/products" className="btn-primary">
                  Explore Our Products →
                </MotionButton>
                <MotionButton
                  href="/training"
                  className="inline-flex items-center gap-2 border-2 border-brand-800 text-brand-800 px-6 py-3 rounded-md font-semibold hover:bg-brand-50 transition text-sm"
                >
                  Join Zaraat Kach’heri
                </MotionButton>
              </div>
            </FadeIn>
          </div>

          {/* Right Visual Card */}
          <div className="lg:col-span-5">
            <FadeIn delay={0.15}>
              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                  <img
                    src="/images/farmer-training.jpg"
                    alt="Al Barakh Organics farmer training and vermicompost beds"
                    className="w-full h-[450px] object-cover"
                  />
                </div>

                {/* Floating highlight badge */}
                <div className="absolute -bottom-6 -right-6 bg-brand-900 text-white p-5 rounded-2xl shadow-2xl border border-gold-400/30 hidden sm:flex items-center gap-3.5 z-10">
                  <div className="w-12 h-12 rounded-xl bg-gold-400 flex items-center justify-center text-brand-950 text-xl font-bold shadow-sm">
                    220+
                  </div>
                  <div>
                    <p className="text-xs text-gold-300 font-semibold uppercase tracking-wider">Total Active Beds</p>
                    <p className="text-sm font-bold text-white">Tando Ghulam Ali &amp; Hyderabad</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ═══ WHAT MAKES US DIFFERENT: ZARAAT KACH'HERI ═══ */}
      <section className="bg-brand-800 text-white px-6 py-20 lg:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <FadeIn>
                <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-400/20 text-gold-300 font-semibold text-xs uppercase tracking-wider mb-4 border border-gold-400/30">
                  What Makes Al Barakh Different
                </span>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                  We Go Beyond Selling Inputs:<br />
                  <span className="text-gold-400">Introducing “Zaraat Kach’heri”</span>
                </h2>
                <p className="mt-6 text-white/90 text-base md:text-lg leading-relaxed">
                  We go beyond selling premium-quality vermicompost. We have introduced <strong>“Zaraat Kach’heri” (Agricultural Discussion)</strong> in our area — a dedicated community platform to <strong>connect, educate, and empower farmers and growers</strong> with modern, practical, and sustainable approaches to agriculture.
                </p>
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/15">
                    <span className="text-2xl">🗣️</span>
                    <h3 className="font-bold text-sm text-gold-300 mt-2">Open Dialogue</h3>
                    <p className="text-xs text-white/80 mt-1">Direct discussions on soil health, pest management, and crop yields.</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/15">
                    <span className="text-2xl">📉</span>
                    <h3 className="font-bold text-sm text-gold-300 mt-2">Cost Reduction</h3>
                    <p className="text-xs text-white/80 mt-1">Techniques to reduce dependence on costly synthetic chemical fertilizers.</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/15">
                    <span className="text-2xl">👩‍🌾</span>
                    <h3 className="font-bold text-sm text-gold-300 mt-2">Inclusion &amp; Youth</h3>
                    <p className="text-xs text-white/80 mt-1">Creating opportunities for women, students, and new-generation growers.</p>
                  </div>
                </div>
              </FadeIn>
            </div>
            <div className="lg:col-span-5">
              <FadeIn delay={0.15}>
                <div className="bg-brand-900/90 p-8 rounded-3xl border border-gold-400/30 shadow-2xl">
                  <h3 className="font-display text-2xl font-bold text-white mb-4">Current Operations &amp; Facilities</h3>
                  <div className="space-y-4">
                    <div className="p-4 bg-brand-800/80 rounded-2xl border border-white/10">
                      <p className="text-gold-400 text-xs font-bold uppercase tracking-wider">Main Facility</p>
                      <h4 className="text-lg font-bold text-white mt-1">Tando Ghulam Ali Branch</h4>
                      <p className="text-sm text-white/70 mt-1">Active capacity of <strong>200+ vermicomposting beds</strong>, earthworm breeding rows, and farmer training grounds.</p>
                    </div>
                    <div className="p-4 bg-brand-800/80 rounded-2xl border border-white/10">
                      <p className="text-gold-400 text-xs font-bold uppercase tracking-wider">Regional Hub</p>
                      <h4 className="text-lg font-bold text-white mt-1">Hyderabad Branch</h4>
                      <p className="text-sm text-white/70 mt-1">Production and logistics facility with <strong>20+ active beds</strong> catering to Sindh and nationwide dispatch.</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FOUNDER'S MESSAGE & LEADERSHIP PROFILES ═══ */}
      <section className="bg-cream-100 px-6 py-20 lg:py-28">
        <div className="max-w-6xl mx-auto">
          {/* Founder Message */}
          <FadeIn>
            <div className="bg-white p-8 md:p-12 lg:p-14 rounded-3xl shadow-sm border border-brand-100 mb-16">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-4 flex flex-col items-center text-center">
                  <div className="w-44 h-44 md:w-52 md:h-52 rounded-2xl bg-gradient-to-br from-brand-800 to-brand-900 flex flex-col items-center justify-center text-gold-300 shadow-md border-2 border-gold-400/30">
                    <span className="text-5xl font-display font-bold">SAK</span>
                    <span className="text-xs uppercase tracking-widest text-white/70 mt-2 font-medium">Founder</span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-brand-800 mt-4">
                    Sohaib Ahmed Khatti
                  </h3>
                  <p className="text-gold-600 text-sm font-semibold">Founder, Al Barakh Organics</p>
                  <p className="text-xs text-gray-500 mt-1">Started 2024</p>
                </div>

                <div className="lg:col-span-8">
                  <span className="eyebrow text-gold-500">Founder&apos;s &amp; Leadership Message</span>
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-brand-800 mt-1">
                    The Vision Behind Al Barakh
                  </h2>
                  <blockquote className="mt-6 border-l-4 border-gold-400 pl-6 py-2 bg-cream-50 rounded-r-xl">
                    <p className="text-gray-800 leading-relaxed italic text-base md:text-lg font-medium">
                      &quot;When I saw growers who had worked in agriculture for generations selling their lands, and green fields turning into incomplete plotting schemes, I started asking what was going wrong.
                    </p>
                    <p className="text-gray-800 leading-relaxed italic text-base md:text-lg font-medium mt-3">
                      The answer was clear: expensive fertilizers, lack of practical knowledge and limited awareness of modern farming methods.
                    </p>
                    <p className="text-gray-800 leading-relaxed italic text-base md:text-lg font-medium mt-3">
                      That thinking led to Al Barakh Organics, with a simple purpose: to introduce, create awareness about and provide sustainable agriculture solutions. Vermicompost is only the beginning. Our vision is to empower farmers, improve soil health and build a more sustainable agricultural future.&quot;
                    </p>
                  </blockquote>
                  <p className="mt-4 text-xs font-bold text-brand-700 text-right">
                    — Sohaib Ahmed Khatti, Founder
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Leadership Team Cards */}
          <FadeIn delay={0.1}>
            <div className="text-center mb-10">
              <span className="eyebrow text-gold-500">Leadership &amp; Management</span>
              <h2 className="font-display text-3xl font-bold text-brand-900 mt-1">
                The Team Driving the Movement
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Sohaib Profile */}
              <div className="bg-white p-8 rounded-2xl border border-brand-100 shadow-sm flex items-start gap-5 hover:border-gold-400/50 transition">
                <div className="w-16 h-16 rounded-xl bg-brand-800 text-gold-400 flex items-center justify-center text-xl font-bold flex-shrink-0">
                  SAK
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-brand-900">Sohaib Ahmed Khatti</h3>
                  <p className="text-gold-600 text-sm font-semibold mb-2">Founder</p>
                  <p className="text-gray-600 text-xs leading-relaxed">
                    Pioneered Al Barakh in 2024 to restore degraded soils, launch Zaraat Kach’heri, and make high-quality biological vermicompost accessible across Pakistan.
                  </p>
                </div>
              </div>

              {/* Arshad Ali Profile */}
              <div className="bg-white p-8 rounded-2xl border border-brand-100 shadow-sm flex items-start gap-5 hover:border-gold-400/50 transition">
                <div className="w-16 h-16 rounded-xl bg-gold-400 text-brand-950 flex items-center justify-center text-xl font-bold flex-shrink-0">
                  AA
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-brand-900">Arshad Ali</h3>
                  <p className="text-gold-600 text-sm font-semibold mb-2">Marketing Head</p>
                  <p className="text-gray-600 text-xs leading-relaxed">
                    Leads outreach, brand partnerships, B2B and retail distribution, and farmer awareness campaigns to connect communities with sustainable organic inputs.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══ OUR 4-STEP APPROACH ═══ */}
      <section className="bg-brand-900 px-6 py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffca19_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="font-cursive text-3xl md:text-4xl text-gold-400">Our Methodology</p>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-2">
                A Complete Solutions Framework,<br />
                <span className="text-gold-300">Not Just a Product</span>
              </h2>
              <p className="mt-4 text-white/75 text-base md:text-lg">
                We combine biological inputs with field education and modern farming consultancy to deliver long-term yield and soil gains.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {approachSteps.map((step, index) => (
              <FadeIn key={step.step} delay={index * 0.1}>
                <div className="bg-brand-800/80 backdrop-blur-sm border border-white/10 rounded-2xl p-6 h-full flex flex-col justify-between hover:border-gold-400/50 hover:bg-brand-800 transition-all duration-300 hover:-translate-y-1 shadow-lg group">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-3xl">{step.icon}</span>
                      <span className="text-xs font-mono font-bold text-gold-400 bg-brand-900/80 px-2.5 py-1 rounded-full border border-gold-400/30">
                        STEP {step.step}
                      </span>
                    </div>
                    <h3 className="font-display text-lg font-bold text-white group-hover:text-gold-300 transition-colors">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-white/70 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ MISSION, VISION & 8 CORE VALUES ═══ */}
      <section className="bg-cream-100 px-6 py-20 lg:py-28 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="eyebrow text-gold-500">Guiding Philosophy</span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-brand-900 mt-2 leading-tight">
                Our Mission, Vision &amp; Core Values
              </h2>
            </div>
          </FadeIn>

          {/* Stacked Full-Width Mission & Vision Banners */}
          <div className="space-y-10 mb-16">
            {/* MISSION BANNER - Full-width Luxury White & Gold Flagship Box */}
            <FadeIn delay={0.05}>
              <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-brand-100/90 text-brand-900 relative overflow-hidden group hover:border-gold-400 transition-all duration-500">
                <div className="absolute top-0 right-0 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl group-hover:bg-gold-400/10 transition-all duration-700 pointer-events-none" />
                
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                  {/* Left Column: Icon & Pillar Badge */}
                  <div className="lg:col-span-4 flex flex-col items-start border-b lg:border-b-0 lg:border-r border-brand-100 pb-6 lg:pb-0 lg:pr-8">
                    <div className="w-20 h-20 rounded-2xl bg-gold-100 text-brand-900 border border-gold-300 flex items-center justify-center text-4xl shadow-sm mb-4">
                      🎯
                    </div>
                    <span className="px-3.5 py-1 rounded-full bg-gold-100 text-brand-900 font-mono text-xs font-bold uppercase tracking-wider border border-gold-300 mb-2">
                      OUR MISSION
                    </span>
                    <h3 className="font-display text-2xl font-bold text-brand-900 mt-1 leading-snug">
                      Reviving Agriculture &amp; Empowering Communities
                    </h3>
                    <div className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-gold-600 uppercase tracking-wider">
                      <span className="w-2 h-2 rounded-full bg-gold-500 animate-pulse" />
                      Empowering Women, Youth &amp; Farmers
                    </div>
                  </div>

                  {/* Right Column: Paragraph Content */}
                  <div className="lg:col-span-8 space-y-4">
                    <div className="p-5 rounded-2xl bg-cream-50/80 border border-brand-100/80">
                      <p className="text-gray-700 text-sm md:text-base leading-relaxed font-normal">
                        To revive and promote sustainable, organic agriculture in Pakistan by restoring soil health, empowering farmers and communities, and making modern agricultural knowledge accessible through practical training and awareness programs.
                      </p>
                    </div>
                    <div className="p-5 rounded-2xl bg-cream-50/80 border border-brand-100/80">
                      <p className="text-gray-600 text-sm md:text-base leading-relaxed font-normal">
                        We aim to encourage women and girls to actively participate in agriculture, creating opportunities for learning, leadership, and entrepreneurship while building a healthier and more sustainable future for generations to come.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* VISION BANNER - Full-width Luxury White & Gold Flagship Box */}
            <FadeIn delay={0.1}>
              <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gold-300/80 text-brand-900 relative overflow-hidden group hover:border-gold-400 transition-all duration-500">
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-400/5 rounded-full blur-3xl group-hover:bg-gold-400/10 transition-all duration-700 pointer-events-none" />
                
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                  {/* Left Column: Icon & Pillar Badge */}
                  <div className="lg:col-span-4 flex flex-col items-start border-b lg:border-b-0 lg:border-r border-brand-100 pb-6 lg:pb-0 lg:pr-8">
                    <div className="w-20 h-20 rounded-2xl bg-brand-900 text-gold-400 flex items-center justify-center text-4xl shadow-md mb-4">
                      🌟
                    </div>
                    <span className="px-3.5 py-1 rounded-full bg-brand-900 text-gold-300 font-mono text-xs font-bold uppercase tracking-wider border border-brand-800 mb-2">
                      OUR VISION
                    </span>
                    <h3 className="font-display text-2xl font-bold text-brand-900 mt-1 leading-snug">
                      Pakistan&apos;s Leading Sustainable Enterprise &amp; Hub
                    </h3>
                    <div className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-gold-600 uppercase tracking-wider">
                      <span className="w-2 h-2 rounded-full bg-gold-500" />
                      Research, Internships &amp; Global Reach
                    </div>
                  </div>

                  {/* Right Column: Paragraph Content */}
                  <div className="lg:col-span-8 space-y-4">
                    <div className="p-5 rounded-2xl bg-cream-50/80 border border-brand-100/80">
                      <p className="text-gray-700 text-sm md:text-base leading-relaxed font-normal">
                        To transform Al Barakh into a leading sustainable agriculture enterprise in Pakistan—producing vermicompost, vermiwash, biochar, and other organic solutions while becoming a hub where farmers, growers, experts, students, and communities gather, learn, discuss, and collaborate.
                      </p>
                    </div>
                    <div className="p-5 rounded-2xl bg-cream-50/80 border border-brand-100/80">
                      <p className="text-gray-600 text-sm md:text-base leading-relaxed font-normal">
                        We envision Al Barakh as a platform for agricultural research, student internships, farmer training, and innovation, while building a trusted Pakistani brand capable of taking sustainable agricultural products to international markets.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* 8 Core Values Orbit Container */}
          <FadeIn delay={0.15}>
            <div className="core-values-panel bg-white/80 backdrop-blur-sm rounded-3xl p-6 md:p-10 border border-brand-100/80 shadow-sm">
              <div className="text-center max-w-2xl mx-auto mb-10">
                <div className="core-values-kicker">
                  <span aria-hidden="true">◆</span> What We Stand For
                </div>
                <h3 className="core-values-heading">
                  Eight principles. One way of working.
                </h3>
              </div>
              <CoreValuesOrbit values={coreValues} />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ═══ MEASURABLE SCALE STATS ═══ */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="text-center mb-12">
              <span className="eyebrow text-gold-500">Facility &amp; Impact Scale</span>
              <h2 className="font-display text-3xl font-bold text-brand-900 mt-2">
                Our Operational Footprint
              </h2>
            </div>
            <CountUpStats stats={impactStats} />
          </FadeIn>
        </div>
      </section>

      {/* ═══ PARTNER CTA ═══ */}
      <CTABanner
        eyebrow="Partner With Us"
        title="Ready to Transform Your Soil & Crop Health?"
        description="Connect with our team for bulk vermicompost supply, modern farming consultancy, or to join our next Zaraat Kach’heri session."
        primaryBtnText="Discuss Your Requirement →"
        primaryBtnHref="/contact"
        secondaryBtnText="💬 Chat with Us"
        secondaryBtnHref="https://wa.me/923168803363"
      />
    </>
  )
}
