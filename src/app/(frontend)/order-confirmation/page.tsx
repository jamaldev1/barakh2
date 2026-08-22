'use client'

import { Suspense } from 'react'
import Header from '@/components/Header'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

function OrderConfirmationContent() {
  const searchParams = useSearchParams()
  const orderNumber = searchParams.get('order') || searchParams.get('orderNumber')

  return (
    <main className="max-w-2xl mx-auto px-6 py-24 text-center">
      <div className="text-6xl">✅</div>
      <h1 className="text-3xl font-bold text-brand-800 mt-6">Order Confirmed!</h1>
      <p className="text-gray-600 mt-4">Thank you for your order.</p>
      {orderNumber && (
        <p className="text-xl font-bold text-brand-700 mt-2">Order #: {orderNumber}</p>
      )}
      <p className="text-gray-500 mt-4">
        We&apos;ll contact you shortly to confirm delivery details. Payment is Cash on Delivery.
      </p>
      <Link
        href="/"
        className="inline-block mt-10 bg-brand-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-brand-700 transition"
      >
        Back to Home
      </Link>
    </main>
  )
}

export default function OrderConfirmationPage() {
  return (
    <>
      <Header />
      <Suspense fallback={<div className="py-24 text-center text-gray-500">Loading confirmation...</div>}>
        <OrderConfirmationContent />
      </Suspense>
    </>
  )
}
