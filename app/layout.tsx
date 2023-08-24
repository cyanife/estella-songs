import './globals.css'
import config from '@/config/config.json'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: config.title,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-cn">
      <body>{children}</body>
    </html>
  )
}
