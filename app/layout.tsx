import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'

import './globals.css'

const font = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Duolingo Clone',
  description: 'Duoling clone next app'
}

const RootLayout: React.FC<
  Readonly<{
    children: React.ReactNode
  }>
> = ({ children }) => {
  return (
    <html lang='en'>
      <body className={font.className}>{children}</body>
    </html>
  )
}

export default RootLayout
