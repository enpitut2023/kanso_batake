import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import "./globals.css"

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="container max-w-5xl">{children}</body>
    </html>
  )
}
