import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import { PropsWithChildren } from 'react'

import './globals.css'
import { Footer } from '@/components/layout/footer'
import { Header } from '@/components/layout/header'

const montserrat = Montserrat({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin', 'latin-ext']
})

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

export const metadata: Metadata = {
  title: 'Bachu Krasyvo',
  description:
    'Навчальна спільнота для монтажерок — це простір, де панує girlhood vibe. Там я ділюся корисною інформацією, туторіалами, своїм баченням і знахідками. Доєднуючись, ви автоматично отримуєте послугу мого супроводу та ще кілька плюшок.',
  openGraph: {
    siteName: 'Bachu Krasyvo',
    title: 'Bachu Krasyvo',
    description:
      'Навчальна спільнота для монтажерок — це простір, де панує girlhood vibe. Там я ділюся корисною інформацією, туторіалами, своїм баченням і знахідками. Доєднуючись, ви автоматично отримуєте послугу мого супроводу та ще кілька плюшок.',
    locale: 'uk_UA',
    type: 'website',
    images: [
      {
        url: `${baseUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Bachu Krasyvo'
      }
    ]
  }
  // icons: {
  //   icon: '/favicon.png',
  //   shortcut: '/favicon.png',
  //   apple: '/favicon.png'
  // }
}

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang='uk'>
      <head>
        <link
          rel='shortcut icon'
          href='/apple-touch-icon.png'
          sizes='any'
          type='image/x-icon'
        />
        <link
          rel='mask-icon'
          href='/apple-touch-icon.png'
          color='#ffffff'
        />
      </head>
      <body className={`${montserrat.className} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}

export default RootLayout
