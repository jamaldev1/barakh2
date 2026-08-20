import Header from '@/components/Header'
import FadeIn from '@/components/FadeIn'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { productsData } from '@/data/products'

export function generateStaticParams() {
  return productsData.map((p) => ({
    slug: p.slug,
  }))
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product = productsData.find((p) => p.slug === slug)

  if (!product) return notFound()

  const mainImage = product.images?.[0] || '/images/hero-vermicompost.jpg'

  return (
    <>
      <Header />
      
      {/* Breadcrumb / Top Bar */}
      <div className="bg-cream-100 py-4 px-6 border-b border-cream-200">
        <div className="max-w-6xl mx-auto">
          <Link href="/products" className="text-brand-700 text-sm font-semibold hover:text-brand-900 transition-colors inline-flex items-center gap-2">
            <span>←</span> Back to Products
          </Link>
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-6 py-16 lg:py-24 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
        <FadeIn>
          <div className="rounded-[2rem] overflow-hidden shadow-xl border border-gray-100 bg-white p-2">
            <img
              src={mainImage}
              alt={product.name}
              className="w-full rounded-[1.5rem] aspect-square object-cover"
            />
          </div>

          {/* Sub-Images */}
          {product.images && product.images.length > 1 && (
            <div className="grid grid-cols-3 gap-3 mt-4">
              {product.images.map((img, i) => (
                <div key={i} className="rounded-xl overflow-hidden border border-gray-200 aspect-square">
                  <img src={img} alt={`${product.name} thumbnail`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          )}
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="flex flex-col h-full justify-center">
            <p className="eyebrow mb-2 text-gold-500 font-bold uppercase tracking-wider">{product.category}</p>
            <h1 className="font-display text-3xl lg:text-5xl font-bold text-brand-900 leading-tight">
              {product.name}
            </h1>
            <div className="flex items-center gap-2 mt-3 text-sm font-bold text-gold-600">
              <span>★★★★★</span>
              <span className="text-gray-500 text-xs font-normal">({product.reviewsCount} verified farmer reviews)</span>
            </div>
            
            <p className="text-gray-600 mt-5 text-base leading-relaxed">{product.fullDescription}</p>
            
            <div className="mt-6 pt-6 border-t border-gray-100 flex items-baseline gap-3">
              <p className="text-brand-900 font-display font-bold text-4xl">Rs. {product.price}</p>
              <span className="text-gray-500 text-sm">/ {product.unit}</span>
              <span className="text-xs font-semibold text-green-800 bg-green-100 px-3 py-1 rounded-full ml-auto">
                In Stock & Ready for Dispatch
              </span>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href={`https://wa.me/923000000000?text=Hi,%20I'm%20interested%20in%20ordering%20${encodeURIComponent(product.name)}%20(Rs.%20${product.price}%20/%20${encodeURIComponent(product.unit)}).%20Please%20share%20payment%20and%20delivery%20details.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary justify-center text-base py-4 px-8 w-full sm:w-auto shadow-lg shadow-gold-400/20 flex items-center gap-2"
              >
                <svg className="w-5 h-5 text-brand-950" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
                </svg>
                Order on WhatsApp
              </a>
              <a
                href={`https://wa.me/923000000000?text=Hi,%20I%20need%20a%20commercial%20bulk%20quote%20for%20${encodeURIComponent(product.name)}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-dark justify-center text-base py-4 px-8 w-full sm:w-auto text-center"
              >
                Commercial Bulk Quote
              </a>
            </div>

            {product.keyBenefits && product.keyBenefits.length > 0 && (
              <div className="mt-10 bg-cream-50 rounded-2xl p-6 border border-brand-100">
                <h2 className="font-display font-bold text-brand-900 text-lg mb-3 flex items-center gap-2">
                  <span className="text-gold-500">✨</span> Key Proven Benefits
                </h2>
                <ul className="space-y-2.5">
                  {product.keyBenefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-gray-700 text-sm">
                      <svg className="w-4 h-4 text-brand-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="leading-relaxed">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </FadeIn>
      </main>
    </>
  )
}
