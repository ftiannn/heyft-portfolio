// src/app/resume/page.tsx

"use client"

import { motion } from "framer-motion"
import { 
  Download, FileText, Award, Coffee, Clock, Users, 
  MapPin, Mail, Linkedin, Github, 
  Zap, Target, Brain, Heart, ArrowRight
} from "lucide-react"
import { useState } from "react"
import toast, { Toaster } from 'react-hot-toast'

const quickStats = [
  {
    icon: Clock,
    label: "Experience",
    value: "6+ Years",
    color: "text-primary-pink"
  },
  {
    icon: Award,
    label: "Live Applications",
    value: "3 Deployed",
    color: "text-secondary-teal"
  },
  {
    icon: Users,
    label: "Team Experience",
    value: "Gov Scale",
    color: "text-accent-blue"
  },
  {
    icon: Target,
    label: "Focus Areas",
    value: "Full-Stack + UX",
    color: "text-purple-500"
  }
]

const highlights = [
  {
    year: "2024",
    achievement: "Built Habitly - Full-stack habit tracker with 50+ users",
    tech: "React, NestJS, AWS, Terraform",
    impact: "99.9% uptime, complete infrastructure automation"
  },
  {
    year: "2023", 
    achievement: "Led GovRewards partnerships & technical onboarding",
    tech: "PostgreSQL, NestJS, CI/CD",
    impact: "Managed 5+ government partnerships, influenced product roadmap"
  },
  {
    year: "2021",
    achievement: "Revamped MOM Work Pass Portal frontend",
    tech: "Vue.js, Node.js, Microservices",
    impact: "Serving thousands of daily users, critical government infrastructure"
  },
  {
    year: "2017",
    achievement: "Apple Supply Chain automation internship",
    tech: "JavaScript, AppleScript, Excel",
    impact: "Automated weekly processes, built management dashboards"
  }
]

const humbleBrags = [
  "Survived a 2000-line merge conflict and lived to tell the tale",
  "Once fixed a prod bug before my coffee cooled (true story)",
  "Built a government portal that thousands depend on daily",
  "Managed to make enterprise Java almost enjoyable",
  "Convinced a team that pink can be a professional color",
  "Automated away my own tasks and somehow kept my job",
  "Debug with the zen of someone who's seen it all",
  "Can explain REST APIs to your grandmother"
]

const personalityTraits = [
  {
    icon: Brain,
    title: "Analytical + Creative",
    description: "Data-driven decisions with design intuition"
  },
  {
    icon: Zap,
    title: "Fast Learner", 
    description: "From overwhelmed student to confident builder"
  },
  {
    icon: Target,
    title: "Delivery Focused",
    description: "Ship quality products, iterate based on feedback"
  },
  {
    icon: Heart,
    title: "User Empathy",
    description: "Code should serve humans, not the other way around"
  }
]

export default function Resume() {
  const [currentBrag, setCurrentBrag] = useState(0)
  const [isDownloading, setIsDownloading] = useState(false)

  const downloadResume = async () => {
    setIsDownloading(true)
    
    // Show creative loading toast
    const loadingToast = toast.custom((t) => (
      <div className={`${t.visible ? 'animate-enter' : 'animate-leave'} 
                      max-w-md w-full bg-gradient-primary shadow-lg rounded-lg pointer-events-auto 
                      flex ring-1 ring-black ring-opacity-5`}>
        <div className="flex-1 w-0 p-4">
          <div className="flex items-start">
            <div className="flex-shrink-0 pt-0.5">
              <Coffee className="h-10 w-10 text-white animate-bounce" />
            </div>
            <div className="ml-3 flex-1">
              <p className="text-sm font-medium text-white">
                Brewing your resume... ☕
              </p>
              <p className="mt-1 text-sm text-white/80">
                Adding extra caffeine for good measure!
              </p>
            </div>
          </div>
        </div>
      </div>
    ), { duration: 2000 })

    // Simulate download delay
    setTimeout(() => {
      toast.dismiss(loadingToast)
      
      // Success toast
      toast.custom((t) => (
        <div className={`${t.visible ? 'animate-enter' : 'animate-leave'} 
                        max-w-md w-full bg-gradient-primary shadow-lg rounded-lg pointer-events-auto 
                        flex ring-1 ring-black ring-opacity-5`}>
          <div className="flex-1 w-0 p-4">
            <div className="flex items-start">
              <div className="flex-shrink-0 pt-0.5">
                <FileText className="h-10 w-10 text-white" />
              </div>
              <div className="ml-3 flex-1">
                <p className="text-sm font-medium text-white">
                  Resume downloaded! 🎉
                </p>
                <p className="mt-1 text-sm text-white/80">
                  Thanks for your interest in my journey!
                </p>
              </div>
            </div>
          </div>
        </div>
      ), { duration: 3000 })

      // Actual download logic
      const link = document.createElement('a')
      link.href = '/cv.pdf' // Your actual CV path
      link.download = 'FT_Tan_Resume.pdf'
      link.click()
      
      setIsDownloading(false)
    }, 2000)
  }

  const cycleBrag = () => {
    setCurrentBrag((prev) => (prev + 1) % humbleBrags.length)
  }

  return (
    <>
      <Toaster position="top-right" />
      <main className="min-h-screen bg-gradient-light dark:bg-gradient-dark">
        <div className="container-custom section-padding">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="gradient-text">Resume</span>
            </h1>
            <p className="text-xl text-text-gray dark:text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
              A comprehensive overview of my technical journey, professional experience, and the 
              projects that shaped me as a developer. Less buzzwords, more real achievements.
            </p>

            {/* Quick Contact */}
            <div className="flex items-center justify-center gap-6 mb-8 flex-wrap">
              <div className="flex items-center gap-2 text-text-gray">
                <MapPin className="h-4 w-4 text-primary-pink" />
                <span>Singapore</span>
              </div>
              <a href="mailto:tanft25@gmail.com" className="flex items-center gap-2 text-text-gray hover:text-primary-pink transition-colors">
                <Mail className="h-4 w-4" />
                <span>tanft25@gmail.com</span>
              </a>
              <a href="https://linkedin.com/in/fttan" className="flex items-center gap-2 text-text-gray hover:text-secondary-teal transition-colors">
                <Linkedin className="h-4 w-4" />
                <span>LinkedIn</span>
              </a>
              <a href="https://github.com/ftiannn" className="flex items-center gap-2 text-text-gray hover:text-accent-blue transition-colors">
                <Github className="h-4 w-4" />
                <span>GitHub</span>
              </a>
            </div>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          >
            {quickStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 * index, duration: 0.6 }}
                className="card text-center hover:scale-105 transition-transform"
              >
                <stat.icon className={`h-8 w-8 ${stat.color} mx-auto mb-3`} />
                <div className={`text-2xl font-bold ${stat.color} mb-1`}>
                  {stat.value}
                </div>
                <div className="text-sm text-text-gray font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Resume Viewer */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="lg:col-span-2"
            >
              <div className="card p-0 overflow-hidden h-[700px]">
                {/* PDF Header */}
                <div className="bg-gradient-primary p-4 text-white">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <FileText className="h-6 w-6" />
                      <div>
                        <h3 className="text-lg font-bold">FT_Tan_Resume.pdf</h3>
                        <p className="text-sm text-white/80">Professional Experience & Skills</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm bg-white/20 px-3 py-1 rounded-full">
                        Latest Version
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* PDF Viewer Placeholder */}
                {/* PDF Viewer - Real Preview */}
                <div className="h-full bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
                  {/* PDF Embed */}
                  <iframe
                    src="/cv.pdf#view=FitH&toolbar=0&navpanes=0"
                    className="w-full h-full border-0"
                    title="FT Tan Resume Preview"
                    loading="lazy"
                    style={{ minHeight: '600px' }}
                  />
                  
                  {/* Loading State */}
                  <div className="absolute inset-0 bg-gray-100 dark:bg-gray-800 flex items-center justify-center pointer-events-none opacity-0 transition-opacity duration-300 iframe-loading">
                    <div className="text-center">
                      <div className="animate-spin h-12 w-12 border-4 border-primary-pink border-t-transparent rounded-full mx-auto mb-4"></div>
                      <p className="text-text-gray">Loading resume preview...</p>
                    </div>
                  </div>

                  {/* Fallback for browsers that don't support PDF viewing */}
                  <div className="absolute inset-0 bg-gray-100 dark:bg-gray-800 flex items-center justify-center opacity-0 hover:opacity-95 transition-opacity duration-300 pointer-events-none pdf-fallback">
                    <div className="text-center p-8 bg-white dark:bg-gray-700 rounded-lg shadow-lg pointer-events-auto">
                      <FileText className="h-16 w-16 text-primary-pink mx-auto mb-4" />
                      <p className="text-text-gray dark:text-gray-400 mb-6">
                         Download here
                      </p>
                      <button
                        onClick={downloadResume}
                        className="btn-primary"
                        disabled={isDownloading}
                      >
                        <Download className="h-4 w-4" />
                        {isDownloading ? 'Preparing...' : 'Download Resume'}
                      </button>
                    </div>
                  </div>

                  {/* PDF Controls Overlay */}
                  <div className="absolute top-4 right-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-2 opacity-0 hover:opacity-100 transition-opacity">
                    <div className="flex items-center gap-2 text-xs text-text-gray">
                      <span>💡 Tip: Scroll to navigate • Right-click to zoom</span>
                    </div>
                  </div>
                </div>
                
                {/* Download Section */}
                <div className="p-6 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
                  <motion.button
                    onClick={downloadResume}
                    disabled={isDownloading}
                    className={`btn-primary w-full ${isDownloading ? 'opacity-75 cursor-not-allowed' : ''}`}
                    whileHover={{ scale: isDownloading ? 1 : 1.02 }}
                    whileTap={{ scale: isDownloading ? 1 : 0.98 }}
                  >
                    <Download className={`h-5 w-5 ${isDownloading ? 'animate-bounce' : ''}`} />
                    {isDownloading ? 'Preparing Download...' : 'Download Resume (PDF)'}
                  </motion.button>
                  
                  <div className="flex items-center justify-center gap-4 mt-4 text-sm text-text-gray">
                    <span>📄 PDF Format</span>
                    <span>•</span>
                    <span>🔄 Updated January 2025</span>
                    <span>•</span>
                    <span>📱 Mobile Optimized</span>
                    <span>•</span>
                    <span>🎯 ATS Friendly</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="space-y-6"
            >
              {/* Career Highlights */}
              <div className="card">
                <h3 className="text-xl font-bold gradient-text mb-4 flex items-center gap-2">
                  <Award className="h-5 w-5" />
                  Career Highlights
                </h3>
                <div className="space-y-4">
                  {highlights.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * index, duration: 0.6 }}
                      className="border-l-4 border-primary-pink pl-4 hover:bg-gray-50 dark:hover:bg-gray-800 p-3 rounded-r-lg transition-colors"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-sm text-secondary-teal font-bold bg-secondary-teal/10 px-2 py-1 rounded">
                          {item.year}
                        </span>
                      </div>
                      <h4 className="font-semibold text-primary-pink mb-2 leading-tight">
                        {item.achievement}
                      </h4>
                      <p className="text-xs text-accent-blue mb-1 font-medium">
                        {item.tech}
                      </p>
                      <p className="text-xs text-text-gray leading-relaxed">
                        {item.impact}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Humble Brags */}
              <div className="card bg-gradient-primary text-white">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Coffee className="h-5 w-5" />
                  Developer Confessions
                </h3>
                <motion.div 
                  className="bg-white/10 rounded-lg p-4 cursor-pointer hover:bg-white/20 transition-all duration-300 min-h-[100px] flex items-center"
                  onClick={cycleBrag}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="text-center w-full">
                    <p className="font-medium mb-3 leading-relaxed">
                      &quot;{humbleBrags[currentBrag]}&ldquo;
                    </p>
                    <div className="flex items-center justify-center gap-2 text-sm text-white/80">
                      <ArrowRight className="h-4 w-4" />
                      <span>Click for more confessions</span>
                    </div>
                  </div>
                </motion.div>
                
                {/* Brag Counter */}
                <div className="mt-4 flex justify-center">
                  <div className="flex gap-1">
                    {humbleBrags.map((_, index) => (
                      <div
                        key={index}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          index === currentBrag ? 'bg-white' : 'bg-white/30'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Personality Traits */}
              <div className="card">
                <h3 className="text-xl font-bold gradient-text mb-4">What I Bring</h3>
                <div className="space-y-3">
                  {personalityTraits.map((trait, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * index, duration: 0.6 }}
                      className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                    >
                      <trait.icon className="h-5 w-5 text-primary-pink mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-primary-pink text-sm">
                          {trait.title}
                        </h4>
                        <p className="text-xs text-text-gray leading-relaxed">
                          {trait.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-center"
          >
            <div className="card bg-gradient-primary text-white">
              <h3 className="text-2xl font-bold mb-4">Let&apos;s Build Something Together</h3>
              <p className="text-lg leading-relaxed mb-6 max-w-3xl mx-auto">
                Whether you&apos;re looking for a full-stack developer who thinks like a product owner, 
                or someone who can bridge the gap between technical complexity and user experience, 
                I&apos;d love to hear about what you&apos;re building.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="mailto:tanft25@gmail.com" className="btn-secondary bg-white text-primary-pink border-white hover:bg-gray-100">
                  Get In Touch
                </a>
                <a href="/projects" className="btn-secondary bg-white text-primary-pink border-white hover:bg-gray-100">
                  View My Work
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </>
  )
}