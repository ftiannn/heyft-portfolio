import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/providers/theme-provider'
import { Navigation, PageTransition, GoogleAnalytics } from '@/app/components'
import { Analytics } from "@vercel/analytics/next"
import { LAYOUT_CONFIG, createBaseMetadata } from '@/constants/seo'

const inter = Inter({ subsets: ['latin'] })

export const viewport = LAYOUT_CONFIG.viewport

export const metadata: Metadata = createBaseMetadata()

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
          defaultTheme={LAYOUT_CONFIG.theme.defaultTheme}
          enableSystem
          disableTransitionOnChange={false}
        >
          <Navigation />
          <main className="pt-16">
            <PageTransition>
              {children}
              <Analytics />
              <GoogleAnalytics />
            </PageTransition>
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
