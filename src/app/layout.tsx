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

export const metadata: Metadata = {
  title: 'Bachu Krasyvo',
  description:
    'Навчальна спільнота для монтажерок — це простір, де панує girlhood vibe. Там я ділюся корисною інформацією, туторіалами, своїм баченням і знахідками. Доєднуючись, ви автоматично отримуєте послугу мого супроводу та ще кілька плюшок.'
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
