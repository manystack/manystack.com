import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ContactDialogProvider from './components/ContactDialogProvider'
import { GoogleAnalytics } from '@next/third-parties/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'manystack - Our Dream is to build Your Dream.',
  description: 'Web and Mobile Applications for Success',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ContactDialogProvider>
          {children}
        </ContactDialogProvider>
      </body>
      <GoogleAnalytics gaId="G-4C57M55LN8" />
    </html>
  )
}
