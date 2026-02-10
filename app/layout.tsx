import React from "react"
import type { Metadata, Viewport } from 'next'
import { Space_Grotesk, JetBrains_Mono } from 'next/font/google'

import './globals.css'

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' })
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains-mono' })

export const metadata: Metadata = {
  title: 'Full-Stack Developer & UI/UX Designer | Modern Web Solutions',
  description: 'Crafting premium digital products. Full-stack development, web apps, and innovative UI/UX design. Let\'s build something extraordinary.',
  generator: 'v0.app',
  keywords: ['web developer', 'full-stack', 'UI/UX designer', 'next.js', 'react', 'web design'],
  openGraph: {
    title: 'Full-Stack Developer & Designer',
    description: 'Premium digital products and modern web solutions',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#0B4F8D',
  width: 'device-width',
  initialScale: 1,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans antialiased bg-background text-foreground`}>
        {children}
      </body>
    </html>
  )
}
