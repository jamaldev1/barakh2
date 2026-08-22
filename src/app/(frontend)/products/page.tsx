import Link from 'next/link'
import Header from '@/components/Header'
import FadeIn from '@/components/FadeIn'
import CTABanner from '@/components/CTABanner'
import { productsData, upcomingProductsData } from '@/data/products'

export const metadata = {
  title: 'Products | Al Barakh Organics',
  description:
    'Quality vermicompost organic fertilizer for farms, orchards, nurseries, gardens and horticultural applications across Pakistan.',
}

const trustBadges = [
  { icon: '🌿', title: '100% Organic Purity', desc: 'Zero chemical additives, fillers or weed seeds' },
  { icon: '🧪', title: 'Rich Microbial Health', desc: 'Active beneficial bacteria & essential humic acids' },
  { icon: '🚚', title: 'Pakistan-Wide Delivery', desc: 'Safe bulk packing & nationwide doorstep dispatch' },
  { icon: '👨‍🌾', title: 'Agronomy Guidance', desc: 'Free application & dosage support for every grower' },
]

export default function ProductsPage() {
  const products = productsData
  const futureProducts = upcomingProductsData

  return (
    <>
      <Header />

      {/* ═══ HERO BANNER ═══ */}
      <section className="relative min-h-[400px] lg:min-h-[460px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/hero-vermicompost.jpg"
            alt="Organic agricultural inputs"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-950/90 via-brand-900/80 to-brand-900/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-950/70 via-transparent to-brand-950/30" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 lg:py-28 w-full text-center">
          <FadeIn>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-400/20 border border-gold-400/40 text-gold-300 font-semibold text-xs uppercase tracking-wider mb-4 backdrop-blur-sm">
              Certified Organic • Direct From Farm
            </span>
            <p className="font-cursive text-3xl md:text-4xl text-gold-400">Our Products</p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-2 leading-tight">
              Organic Agricultural Inputs
            </h1>
            <p className="mt-5 text-white/80 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
              Field-tested, biologically active organic vermicompost engineered to naturally restore soil vitality, retain moisture, and dramatically optimize crop yields across Pakistan.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ═══ TRUST & QUALITY STRIP ═══ */}
      <section className="bg-cream-100 border-y border-brand-100/60 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-gold-400/20 text-gold-700 text-xs font-bold uppercase tracking-wider mb-2.5">
              🌿 Our Quality Guarantee
            </span>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-brand-900">
              Why Growers Trust Al Barakh
            </h2>
            <p className="text-gray-600 text-sm mt-1.5">
              Rigorous laboratory testing, verified biological purity, and field-tested organic excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustBadges.map((badge) => (
              <div
                key={badge.title}
                className="flex items-center gap-4 bg-white p-5 rounded-2xl shadow-sm border border-brand-100 hover:border-gold-400/60 hover:shadow-md transition-all duration-300"
              >
                <span className="text-3xl flex-shrink-0">{badge.icon}</span>
                <div>
                  <h3 className="font-display font-bold text-brand-900 text-sm leading-snug">{badge.title}</h3>
                  <p className="text-gray-500 text-xs mt-1 leading-relaxed">{badge.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SINGLE FEATURED PRODUCT SHOWCASE ═══ */}
      <section className="px-6 py-20 lg:py-28 max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-green-100 text-green-800 text-xs font-bold uppercase tracking-wider mb-3">
              ● In Stock & Ready for Immediate Dispatch
            </span>
            <p className="eyebrow text-gold-500">Flagship Product</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-900 mt-2">
              Premium Organic Vermicompost
            </h2>
            <p className="mt-3 text-gray-600 text-base">
              Supplied in 50kg bags and bulk commercial freight truckloads across all provinces.
            </p>
          </FadeIn>
        </div>

        {products.map((product) => {
          const mainImage = product.images?.[0] || '/images/hero-vermicompost.jpg'
          return (
            <FadeIn key={product.id}>
              <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-md border border-brand-100/80 hover:border-gold-400/80 transition-all duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                  {/* Left Product Image */}
                  <div className="lg:col-span-5">
                    <div className="relative rounded-2xl overflow-hidden aspect-square border border-brand-100 bg-cream-50">
                      <img
                        src={mainImage}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                      <span className="absolute top-4 left-4 bg-brand-900/90 text-gold-300 text-xs font-bold px-3.5 py-1 rounded-full border border-white/20">
                        100% Certified Organic
                      </span>
                    </div>
                  </div>

                  {/* Right Product Details */}
                  <div className="lg:col-span-7 flex flex-col justify-between h-full">
                    <div>
                      <div className="flex items-center gap-2 text-gold-600 text-sm font-bold">
                        <span>★★★★★</span>
                        <span className="text-gray-500 text-xs font-normal">({product.reviewsCount} verified reviews)</span>
                      </div>

                      <h3 className="font-display text-2xl lg:text-3xl font-bold text-brand-900 mt-2">
                        {product.name}
                      </h3>
                      <p className="text-gold-600 font-medium text-sm mt-1">{product.tagline}</p>

                      <p className="text-gray-600 mt-4 text-sm leading-relaxed">
                        {product.shortDescription}
                      </p>

                      {/* Key benefits list */}
                      <div className="mt-6 space-y-2">
                        {product.keyBenefits?.slice(0, 4).map((b, i) => (
                          <div key={i} className="flex items-center gap-2.5 text-xs text-gray-700 font-medium">
                            <span className="text-gold-500 font-bold">✓</span>
                            <span>{b}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Price & Action Strip */}
                    <div className="mt-8 pt-6 border-t border-gray-100">
                      <div className="flex items-baseline gap-2 mb-5">
                        <span className="text-xs text-gray-500 uppercase tracking-wider">Retail Price:</span>
                        <span className="text-brand-900 font-display font-bold text-3xl">
                          Rs. {product.price}
                        </span>
                        <span className="text-gray-500 text-xs">/ {product.unit}</span>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3">
                        <a
                          href={`https://wa.me/923000000000?text=Hi,%20I'm%20interested%20in%20ordering%20${encodeURIComponent(product.name)}%20(Rs.%20${product.price}%20/%20${encodeURIComponent(product.unit)}).%20Please%20share%20order%20details.`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-primary text-sm py-3.5 px-8 font-bold shadow-md hover:shadow-lg flex items-center justify-center gap-2 flex-1"
                        >
                          <svg className="w-5 h-5 text-brand-950" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                          </svg>
                          Order on WhatsApp
                        </a>

                        <Link
                          href={`/products/${product.slug}`}
                          className="btn-dark text-sm py-3.5 px-6 font-semibold text-center"
                        >
                          View Details →
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          )
        })}
      </section>

      {/* ═══ FUTURE PRODUCTS (PIPELINE) ═══ */}
      <section className="bg-cream-100 px-6 py-20 lg:py-28 border-t border-brand-100">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-gold-400/20 text-gold-700 text-xs font-bold uppercase tracking-wider mb-2.5">
                🚀 Coming Soon
              </span>
              <p className="eyebrow text-gold-500">Innovation Pipeline</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-900 mt-2">
                Upcoming Organic Solutions
              </h2>
              <p className="mt-3 text-gray-600 text-base max-w-xl mx-auto">
                Expanding our biological platform with next-generation organic inputs currently in research and field trials.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {futureProducts.map((product, i) => (
              <FadeIn key={product.name} delay={i * 0.1}>
                <div className="bg-white rounded-3xl p-6 shadow-sm border border-brand-100 h-full flex flex-col justify-between hover:border-gold-400/50 transition-all duration-300 relative overflow-hidden">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-3xl">{product.icon}</span>
                      <span className="bg-gold-100 text-brand-900 border border-gold-300 text-[0.65rem] font-bold px-2.5 py-1 rounded-full">
                        {product.status}
                      </span>
                    </div>
                    <span className="text-xs text-gold-600 font-semibold">{product.category}</span>
                    <h3 className="font-display font-bold text-brand-900 text-base mt-1">{product.name}</h3>
                    <p className="text-gray-600 mt-2.5 text-xs leading-relaxed">{product.description}</p>
                  </div>
                  <div className="mt-5 pt-3 border-t border-gray-100 text-[0.7rem] font-semibold text-brand-700 flex items-center gap-1">
                    <span>🔬</span> In Research & Field Trials
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ B2B & BULK CTA ═══ */}
      <CTABanner
        eyebrow="Bulk & Commercial Orders"
        title="Looking for Bulk or Institutional Supply?"
        description="We provide custom wholesale quantities, scheduled logistics, and technical application support for agribusinesses, nurseries, and large acreage farms."
        primaryBtnText="Request Bulk Quote →"
        primaryBtnHref="/contact"
        secondaryBtnText="💬 Chat on WhatsApp"
        secondaryBtnHref="https://wa.me/923000000000?text=Hi,%20I%20am%20interested%20in%20bulk/institutional%20organic%20input%20solutions."
      />
    </>
  )
}
