"use client"

import { motion } from "framer-motion"
import { Home, ArrowLeft, Coffee, Bug } from "lucide-react"
import Link from "next/link"

export default function NotFound() {
  return (
    <main className="min-h-screen bg-gradient-light dark:bg-gradient-dark flex items-center justify-center">
      <div className="container-custom text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto"
        >

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-8xl lg:text-9xl font-bold gradient-text mb-8 mt-8"
          >
            404
          </motion.div>


          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mb-8 mt-8"
          >
            <h1 className="text-3xl lg:text-4xl font-bold mb-4 text-primary-pink">
              Oops! This page wandered off
            </h1>
            <p className="text-xl text-text-gray dark:text-gray-300 leading-relaxed">
              Try heading{" "}
              <Link href="/" className="text-secondary-teal hover:text-primary-pink transition-colors font-semibold">
                home
              </Link>{" "}
              before it causes more bugs 🐞
            </p>
          </motion.div>


          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex justify-center items-center gap-8 mb-12"
          >
            <motion.div
              animate={{
                rotate: [0, 10, -10, 10, 0],
                y: [0, -10, 0, -5, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className="text-6xl"
            >
              🐞
            </motion.div>
            <motion.div
              animate={{
                rotate: [0, -5, 5, -5, 0],
                scale: [1, 1.1, 1, 1.05, 1]
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className="text-6xl"
            >
              ☕
            </motion.div>
            <motion.div
              animate={{
                y: [0, -15, 0, -8, 0],
                rotate: [0, 5, -5, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className="text-6xl"
            >
              💻
            </motion.div>
          </motion.div>


          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/" className="btn-primary flex items-center justify-center gap-2">
              <Home className="h-4 w-4" />
              Go Home
            </Link>
            <Link href="/projects" className="btn-secondary flex items-center justify-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              View Projects
            </Link>
          </motion.div>


          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-12"
          >
            <div className="card bg-gradient-subtle border-2 border-primary-pink/20">
              <p className="text-text-gray dark:text-gray-300 leading-relaxed">
                <strong>Fun fact:</strong> This 404 page took longer to design than some of my actual features.
                Priorities? What priorities? 😅
              </p>
              <div className="mt-3 flex justify-center gap-2">
                <Bug className="h-5 w-5 text-primary-pink" />
                <Coffee className="h-5 w-5 text-secondary-teal" />
                <span className="text-accent-blue">💎</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </main>
  )
}
