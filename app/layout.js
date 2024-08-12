import { Inter } from 'next/font/google'

import { Header, Footer } from '@/components/shared'
import Script from 'next/script'

import './globals.scss'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Бутик-отель Хованский - Официальный сайт',
  description: 'Бутик отель Хованский',
}

export default function RootLayout({ children }) {
  return (
    <html lang='ru'>
      <head>
        <Script
          src='https://bookonline24.ru/widget.js'
          strategy='beforeInteractive'
        />
      </head>
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

//
