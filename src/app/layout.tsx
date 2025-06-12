import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/providers/theme-provider'
import { Navigation } from '@/app/components'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'FT Tan - Developer & Creator',
  description: 'Full-stack creator who codes by moonlight.',
  keywords: ['developer', 'full-stack', 'react', 'next.js', 'singapore'],
  authors: [{ name: 'FT Tan' }],
  openGraph: {
    title: 'FT Tan - Developer & Creator',
    description: 'Full-stack creator who codes by moonlight.',
    url: 'https://fttan.dev',
    siteName: 'FT Tan Portfolio',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-light-bg dark:bg-gradient-dark min-h-screen`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange={false}
        >
          <Navigation />
          <main className="pt-16">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
