"use client"

import { motion } from "framer-motion"
import { ArrowDown, Github, Mail, Instagram, Linkedin } from "lucide-react"
import Typewriter from 'typewriter-effect'
import { useRouter } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import { ThemeToggle } from '@/app/components'
import links from "@/constants/link"
import { typewriterOptions, navigationPaths, navigationSourceKey } from "@/constants/home"
import { useAnalytics } from '@/hooks/use-analytics'

export default function Home() {
  const router = useRouter()
  const isNavigating = useRef(false)
  const touchStartY = useRef<number | null>(null)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const { trackSocialClick, trackContactClick, trackNavigation, trackButtonClick } = useAnalytics()

  const navigateTo = (path: string) => {
    if (isNavigating.current) return
    setIsTransitioning(true)
    trackNavigation('home', path.replace('/', '') || 'home')

    setTimeout(() => {
      router.push(path)
    }, 100)
  }

  const smoothNavigateToAbout = () => {
    if (isNavigating.current) return
    isNavigating.current = true
    setIsTransitioning(true)

    sessionStorage.setItem(navigationSourceKey, 'home')

    setTimeout(() => {
      router.push(navigationPaths.about)
    }, 80)
  }

  const handleSocialClick = (platform: string, href: string) => {
    trackSocialClick(platform)
    window.open(href, '_blank', 'noopener,noreferrer')
  }

  const handleContactClick = () => {
    trackContactClick('resume_page')
    navigateTo(navigationPaths.resume)
  }

  useEffect(() => {
    let wheelAccumulator = 0
    const wheelThreshold = 100

    const navigateToAbout = () => {
      if (!isNavigating.current) {
        isNavigating.current = true
        setIsTransitioning(true)

        sessionStorage.setItem(navigationSourceKey, 'home')

        setTimeout(() => {
          router.push(navigationPaths.about)
        }, 50)
      }
    }

    const handleWheel = (event: WheelEvent) => {
      if (isNavigating.current) return

      if (event.deltaY > 0) {
        wheelAccumulator += event.deltaY

        if (wheelAccumulator > wheelThreshold) {
          event.preventDefault()
          navigateToAbout()
        }
      } else {
        wheelAccumulator = 0
      }
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

        if (deltaY > 60) {
          event.preventDefault()
          isNavigating.current = true
          setIsTransitioning(true)
          touchStartY.current = null

          sessionStorage.setItem(navigationSourceKey, 'home')

          setTimeout(() => {
            router.push(navigationPaths.about)
          }, 30)
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
    }
  }, [router])

  return (
    <>
      <main className="relative min-h-screen">
        {isTransitioning && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed inset-0 z-50 bg-gradient-to-br from-primary-pink/10 via-purple-500/10 to-accent-blue/10 backdrop-blur-sm pointer-events-none"
          />
        )}

        <div className="fixed bottom-6 left-6 z-50">
          <ThemeToggle />
        </div>

      <section className="section-padding bg-gradient-light dark:bg-gradient-dark min-h-screen flex items-center -mt-16">
        <div className="container-custom">
          <div className="fade-in-up text-center">

            <h1 className=" text-5xl lg:text-7xl font-bold mb-6 mt-8">
              Hey, I&apos;m{" "}
              <span className="gradient-text">FT Tan</span> 👋
            </h1>

            <div className="text-xl lg:text-2xl text-text-gray dark:text-gray-300 mb-8 mt-8 h-16 flex items-center justify-center">
              <Typewriter
                options={typewriterOptions}
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button
                onClick={() => {
                  trackButtonClick('navigation', 'projects')
                  navigateTo(navigationPaths.projects)
                }}
                className="btn-primary group"
                disabled={isTransitioning}
              >
                Projects
              </button>
              <button
                onClick={() => {
                  trackButtonClick('navigation', 'about')
                  smoothNavigateToAbout()
                }}
                className="btn-secondary"
                disabled={isTransitioning}
              >
                About
              </button>
              <button
                onClick={handleContactClick}
                className="btn-secondary bg-gradient-primary text-white border-none hover:scale-105"
                disabled={isTransitioning}
              >
                Let&apos;s Talk
              </button>
            </div>

            <div className="flex justify-center gap-6 mb-12">
              {[
                { icon: Github, href: links.github, label: "GitHub", platform: "github" },
                { icon: Linkedin, href: links.linkedin, label: "LinkedIn", platform: "linkedin" },
                { icon: Mail, href: links.email, label: "Email", platform: "email" },
                { icon: Instagram, href: links.instagram, label: "Instagram", platform: "instagram" },
              ].map(({ icon: Icon, href, label, platform }) => (
                <button
                  key={label}
                  onClick={() => handleSocialClick(platform, href)}
                  className="w-12 h-12 rounded-full bg-white dark:bg-navy-800 
                           border-2 border-pink-100 dark:border-pink-500/20 
                           shadow-soft hover:shadow-pink transition-all duration-300
                           hover:scale-110 flex items-center justify-center
                           text-primary-pink hover:text-secondary-teal"
                  aria-label={label}
                >
                  <Icon className="h-5 w-5" />
                </button>
              ))}
            </div>

            <div className="flex flex-col items-center gap-2">
              <p className="text-sm text-text-gray/70 font-medium">Scroll down to explore</p>
              <button
                onClick={smoothNavigateToAbout}
                className="hover:scale-110 transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-primary-pink rounded-full p-2 group"
                aria-label="Scroll to about section"
                disabled={isTransitioning}
              >
                <ArrowDown className="h-6 w-6 text-text-gray animate-bounce-gentle hover:text-primary-pink transition-colors duration-300 group-hover:animate-pulse" />
              </button>
            </div>
          </div>
        </div>
      </section>
      </main>
    </>
  )
} 