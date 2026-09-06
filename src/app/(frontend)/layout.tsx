import React from 'react'
import './styles.css'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

export const metadata = {
  title: 'Al Barakah Organics | Organic Agriculture Solutions for Pakistan',
  description:
    'Al Barakah Organics provides quality vermicompost, red wigglers, farmer training and practical sustainable agriculture solutions across Pakistan. Healthier soil, better future.',
  keywords:
    'vermicompost, organic fertilizer, red wigglers, sustainable agriculture Pakistan, farmer training, organic farming, soil health, Eisenia fetida, organic waste management',
  openGraph: {
    title: 'Al Barakah Organics | Organic Agriculture Solutions for Pakistan',
    description:
      'Quality vermicompost, red wigglers, farmer training and practical sustainable agriculture solutions for farmers, growers, nurseries and institutions across Pakistan.',
    type: 'website',
  },
  icons: {
    icon: '/images/logo.jpg',
    apple: '/images/logo.jpg',
  },
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body>
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
