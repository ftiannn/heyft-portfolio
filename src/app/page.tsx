"use client"

import { motion } from "framer-motion"
import { ArrowDown, Github, Mail, Instagram } from "lucide-react"
import Typewriter from 'typewriter-effect'
import { useRouter } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { ThemeToggle } from '@/app/components'

export default function Home() {
  const router = useRouter()
  const isNavigating = useRef(false)
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null)
  const touchStartY = useRef<number | null>(null)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const navigateTo = (path: string) => {
    if (isNavigating.current) return
    setIsTransitioning(true)

    setTimeout(() => {
      router.push(path)
    }, 100)
  }

  const smoothNavigateToAbout = () => {
    if (isNavigating.current) return
    isNavigating.current = true
    setIsTransitioning(true)

    setTimeout(() => {
      router.push('/about')
    }, 200)
  }

  useEffect(() => {
    let wheelTimeout: NodeJS.Timeout | null = null

    const navigateToAbout = () => {
      if (!isNavigating.current) {
        isNavigating.current = true
        setIsTransitioning(true)

        setTimeout(() => {
          router.push('/about')
        }, 150)
      }
    }

    const handleWheelTimeout = () => {
      if (!isNavigating.current) {
        navigateToAbout()
      }
    }

    const handleWheel = (event: WheelEvent) => {
      if (isNavigating.current) return

      if (event.deltaY > 0) {
        if (wheelTimeout) {
          clearTimeout(wheelTimeout)
        }

        wheelTimeout = setTimeout(handleWheelTimeout, 100)

        event.preventDefault()
      }
    }

    const handleTouchNavigation = () => {
      isNavigating.current = true
      setIsTransitioning(true)
      touchStartY.current = null

      setTimeout(() => {
        router.push('/about')
      }, 100)
    }

    const handleTouchStart = (event: TouchEvent) => {
      if (isNavigating.current) return

      const touch = event.touches[0]
      if (touch) {
        touchStartY.current = touch.clientY
      }
    }

    const handleTouchMove = (event: TouchEvent) => {
      if (isNavigating.current || touchStartY.current === null) return

      const touch = event.touches[0]
      if (touch) {
        const deltaY = touchStartY.current - touch.clientY

        if (deltaY > 50) {
          event.preventDefault()
          handleTouchNavigation()
        }
      }
    }

    window.addEventListener('wheel', handleWheel, { passive: false })

    window.addEventListener('touchstart', handleTouchStart, { passive: true })
    window.addEventListener('touchmove', handleTouchMove, { passive: false })

    return () => {
      window.removeEventListener('wheel', handleWheel)
      window.removeEventListener('touchstart', handleTouchStart)
      window.removeEventListener('touchmove', handleTouchMove)
      if (wheelTimeout) {
        clearTimeout(wheelTimeout)
      }
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current)
      }
    }
  }, [router])

  return (
    <main className="relative min-h-screen">
      {/* Transition Overlay */}
      {isTransitioning && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed inset-0 z-50 bg-gradient-to-br from-primary-pink/15 via-purple-500/15 to-accent-blue/15 backdrop-blur-sm pointer-events-none"
        />
      )}

      {/* Theme Toggle */}
      <div className="fixed bottom-6 left-6 z-50">
        <ThemeToggle />
      </div>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="section-padding bg-gradient-light dark:bg-gradient-dark min-h-screen flex items-center -mt-16"
      >
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* Main Heading with Typing Effect */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl lg:text-7xl font-bold mb-6"
            >
              Hey, I&apos;m{" "}
              <span className="gradient-text">FT Tan</span> 👋
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl lg:text-2xl text-text-gray dark:text-gray-300 mb-8 h-16 flex items-center justify-center"
            >
              <Typewriter
                options={{
                  strings: [
                    "I am passionate about solving real world problems 🛠️",
                    "I create user-friendly interfaces 🌐",
                    "I translate ambiguous goals into features 💻",
                    "I build scalable web applications 🚀",
                    "I love learning new technologies 📚"
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 50,
                  deleteSpeed: 30,
                }}
              />
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            >
              <button
                onClick={() => navigateTo('/projects')}
                className="btn-primary group"
                disabled={isTransitioning}
              >
                Projects
              </button>
              <button
                onClick={smoothNavigateToAbout}
                className="btn-secondary"
                disabled={isTransitioning}
              >
                About
              </button>
              <button
                onClick={() => navigateTo('/resume')}
                className="btn-secondary bg-gradient-primary text-white border-none hover:scale-105"
                disabled={isTransitioning}
              >
                Let&apos;s Talk
              </button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex justify-center gap-6 mb-12"
            >
              {[
                { icon: Github, href: "https://github.com/ftiannn", label: "GitHub" },
                { icon: Mail, href: "mailto:tanft25@gmail.com", label: "Email" },
                { icon: Instagram, href: "https://instagram.com/ftiannn", label: "Instagram" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="w-12 h-12 rounded-full bg-white dark:bg-navy-800 
                           border-2 border-pink-100 dark:border-pink-500/20 
                           shadow-soft hover:shadow-pink transition-all duration-300
                           hover:scale-110 flex items-center justify-center
                           text-primary-pink hover:text-secondary-teal"
                  aria-label={label}
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="flex flex-col items-center gap-2"
            >
              <p className="text-sm text-text-gray/70 font-medium">Scroll down to explore</p>
              <button
                onClick={smoothNavigateToAbout}
                className="hover:scale-110 transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-primary-pink rounded-full p-2 group"
                aria-label="Scroll to about section"
                disabled={isTransitioning}
              >
                <ArrowDown className="h-6 w-6 text-text-gray animate-bounce-gentle hover:text-primary-pink transition-colors duration-300 group-hover:animate-pulse" />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </main>
  )
}