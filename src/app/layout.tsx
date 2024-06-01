import type { Metadata } from 'next'
import {
  Inter,
  Bebas_Neue,
} from 'next/font/google'
import './globals.css'
import Header from '@/components/header'
import Foooter from '@/components/footer'

const bebas = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-Bebas',
})
const inter = Inter({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-Inter',
})

export const metadata: Metadata = {
  title: 'FETCHCLICKS',
  description: "Not A Witty Title isn't it?",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={''}>
        <Header />
        {children}
        <Foooter />
      </body>
    </html>
  )
}
