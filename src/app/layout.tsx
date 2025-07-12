import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/providers/theme-provider'
import { Navigation, PageTransition, GoogleAnalytics } from '@/app/components'
import { Analytics } from "@vercel/analytics/next"
import { LAYOUT_CONFIG, createBaseMetadata } from '@/constants/seo'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial']
})

export const viewport = LAYOUT_CONFIG.viewport

export const metadata: Metadata = createBaseMetadata()

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preload" href="/avatar.png" as="image" type="image/png" />
        <link rel="preload" href="/favicon.ico" as="image" type="image/x-icon" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/avatar.png" type="image/png" sizes="512x512" />
        <link rel="apple-touch-icon" href="/avatar.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#ec4899" />
        <meta name="msapplication-TileColor" content="#ec4899" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
      </head>
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
            </PageTransition>
          </main>
        </ThemeProvider>
        <Analytics />
        <GoogleAnalytics />
      </body>
    </html>
  )
}
