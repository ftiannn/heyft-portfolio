"use client" 

import { motion } from "framer-motion"
import { ArrowDown, Github, Mail, Instagram } from "lucide-react"

export function Hero() {
  return (
    <section className="section-padding bg-gradient-light dark:bg-gradient-dark">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl lg:text-7xl font-bold mb-6"
          >
            Hey, I&apos;m{" "}
            <span className="gradient-text">
              FT Tan
            </span>{" "}
            👋
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl lg:text-2xl text-text-gray dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Bold developer with{" "}
            <span className="text-primary-pink font-semibold">cheeky confidence</span>.
            <br />
            Building full-stack apps and fighting bugs by moonlight ✨
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <button className="btn-primary">
              View My Work
            </button>
            <button className="btn-secondary">
              Let&apos;s Connect
            </button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex justify-center gap-6 mb-12"
          >
            {[
              { icon: Github, href: "#", label: "GitHub" },
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

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex justify-center"
          >
            <ArrowDown className="h-6 w-6 text-text-gray animate-bounce-gentle" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
