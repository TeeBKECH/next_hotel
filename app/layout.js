import { Inter } from 'next/font/google'

import { Header } from '@/components/shared'
import { Footer } from '@/components/shared'
import TLScript from '@/components/tl-script'

import './globals.scss'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Бутик-отель Хованский - Официальный сайт',
  description: 'Бутик отель Хованский',
}

export default function RootLayout({ children }) {
  return (
    <html lang='ru'>
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        {/* <TLScript /> */}
      </body>
    </html>
  )
}

//
