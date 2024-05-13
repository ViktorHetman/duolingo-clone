import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'

import './globals.css'

const font = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ducko',
  description: 'Duoling clone next app',
  icons: {
    icon: [
      {
        url: '/duck.png',
        href: '/duck.png'
      }
    ]
  }
}

const RootLayout: React.FC<
  Readonly<{
    children: React.ReactNode
  }>
> = ({ children }) => {
  return (
    <ClerkProvider>
      <html lang='en'>
        <body className={font.className}>{children}</body>
      </html>
    </ClerkProvider>
  )
}

export default RootLayout
