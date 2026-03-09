import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Civil War Stories - Voices of History',
  description: 'A child\'s journey through the Civil War through real letters, diary entries, and speeches from historical figures.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-serif bg-civil-cream text-gray-800">{children}</body>
    </html>
  )
}
