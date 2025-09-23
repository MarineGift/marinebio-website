import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'MarineBio Group Inc. | Revolutionizing Sustainable Materials',
  description: 'MarineBio Group Inc. is solving the global plastic pollution crisis with a portfolio of proprietary, eco-friendly material technologies.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

