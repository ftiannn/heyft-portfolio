import { Hero, ThemeToggle } from '@/app/components'

export default function Home() {
  return (
    <main className="relative">
      {/* Theme Toggle - Fixed Position */}
      <div className="fixed top-6 right-6 z-50">
        <ThemeToggle />
      </div>

      {/* Hero Section */}
      <Hero />

      {/* Add more sections here as you build */}
    </main>
  )
}
