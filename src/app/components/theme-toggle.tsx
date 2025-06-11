"use client" 

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="relative w-12 h-12 rounded-full bg-white dark:bg-navy-800 
                 border-2 border-pink-100 dark:border-pink-500/20 
                 shadow-soft hover:shadow-medium transition-all duration-300
                 hover:scale-110 flex items-center justify-center"
      aria-label="Toggle theme"
    >
      <Sun className="h-5 w-5 text-primary-pink transition-all scale-100 rotate-0 dark:scale-0 dark:-rotate-90" />
      <Moon className="absolute h-5 w-5 text-secondary-teal transition-all scale-0 rotate-90 dark:scale-100 dark:rotate-0" />
    </button>
  )
}
