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
      <head>
        <link rel="manifest" href={LAYOUT_CONFIG.app.manifest} />
        <meta name="theme-color" content={LAYOUT_CONFIG.theme.color} />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content={LAYOUT_CONFIG.app.name} />
        <link rel="apple-touch-icon" href={LAYOUT_CONFIG.app.appleTouchIcon} />
        <meta name="author" content="Fang Tian Tan" />
        <meta name="copyright" content="Fang Tian Tan" />
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
              <Analytics />
              <GoogleAnalytics />
            </PageTransition>
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
