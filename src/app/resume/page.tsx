"use client"

import {
  Download, FileText, Award,
  MapPin, Mail, Linkedin, Github
} from "lucide-react"
import { useState } from "react"
import { Cta } from "../components"
import { motion } from "framer-motion"
import links from "@/constants/link"
import { quickStats, highlights, keyStrengths, technicalSkills } from "@/constants/resume"
import { useAnalytics } from '@/hooks/use-analytics'


export default function Resume() {
  const [isDownloading, setIsDownloading] = useState(false)
  const { trackResumeDownload, trackSocialClick, trackContactClick } = useAnalytics()

  const downloadResume = async () => {
    setIsDownloading(true)
    trackResumeDownload() // Track the download event

    setTimeout(() => {
      const link = document.createElement('a')
      link.href = '/cv.pdf'
      link.download = 'FT_Tan_Resume.pdf'
      link.click()
      setIsDownloading(false)
    }, 500)
  }

  const handleSocialClick = (platform: string, href: string) => {
    trackSocialClick(platform)
    window.open(href, '_blank', 'noopener,noreferrer')
  }

  const handleContactClick = (method: string, href: string) => {
    trackContactClick(method)
    window.open(href, '_blank', 'noopener,noreferrer')
  }

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-slate-900">
      <div className="container-custom section-padding">

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-4xl lg:text-6xl font-bold mb-6"
        >
          <span className="gradient-text">
            Resume
          </span>
        </motion.h1>
        <p className="fade-in-up text-center text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8 mt-8">
          Versatile developer with 7+ years building products across frontend, backend, infra, and reporting — with growing focus on strategy and execution.
        </p>


        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >

          <div className="flex items-center justify-center gap-8 mb-8 mt-8 flex-wrap">
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
              <MapPin className="h-4 w-4 text-primary-pink" />
              <span>Singapore</span>
            </div>
            <button
              onClick={() => handleContactClick('email', links.email)}
              className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-primary-pink transition-colors"
            >
              <Mail className="h-4 w-4" />
              <span>tanft25@gmail.com</span>
            </button>
            <button
              onClick={() => handleSocialClick('linkedin', links.linkedin)}
              className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-secondary-teal transition-colors"
            >
              <Linkedin className="h-4 w-4" />
              <span>LinkedIn</span>
            </button>
            <button
              onClick={() => handleSocialClick('github', links.github)}
              className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-accent-blue transition-colors"
            >
              <Github className="h-4 w-4" />
              <span>GitHub</span>
            </button>
          </div>
        </motion.div>


        <div className="fade-in-up  grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {quickStats.map((stat) => (
           
            <div
              key={stat.label}
              className="bg-white dark:bg-slate-800 p-6 rounded-xl text-center shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow"
            >
              <stat.icon className={`h-8 w-8 ${stat.color} mx-auto mb-3`} />
              <div className={`text-lg md:text-2xl font-bold ${stat.color} mb-1`}>
                {stat.value}
              </div>
              <div className="text-sm text-gray-500 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>


        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          <div className="fade-in-up lg:col-span-2">
            <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">

              <div className="bg-gradient-to-r from-primary-pink to-accent-blue p-6 text-white">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <FileText className="h-6 w-6" />
                    <div>
                      <h3 className="text-lg font-bold">FT Tan Resume</h3>
                      <p className="text-sm text-white/80">Full-Stack Developer</p>
                    </div>
                  </div>
                  <span className="text-sm bg-white/20 px-3 py-1 rounded-full">
                    Updated January 2025
                  </span>
                </div>
              </div>


              <div className="h-[600px] bg-gray-50 dark:bg-gray-800 relative">
                <iframe
                  src="/cv.pdf#view=FitH&toolbar=0&navpanes=0"
                  className="w-full h-full border-0"
                  title="FT Tan Resume Preview"
                  loading="lazy"
                />


                <div className="absolute inset-0 bg-gray-100 dark:bg-gray-800 flex items-center justify-center opacity-0 hover:opacity-95 transition-opacity duration-300 pointer-events-none">
                  <div className="text-center p-8 bg-white dark:bg-gray-700 rounded-lg shadow-lg pointer-events-auto">
                    <FileText className="h-16 w-16 text-primary-pink mx-auto mb-4" />
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                      Click to download resume
                    </p>
                    <button
                      onClick={downloadResume}
                      className="bg-primary-pink text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-pink/90 transition-colors flex items-center gap-2 mx-auto"
                      disabled={isDownloading}
                    >
                      <Download className="h-4 w-4" />
                      {isDownloading ? 'Downloading...' : 'Download Resume'}
                    </button>
                  </div>
                </div>
              </div>


              <div className="p-6 border-t border-gray-200 dark:border-gray-700">
                <button
                  onClick={downloadResume}
                  disabled={isDownloading}
                  className={`w-full bg-primary-pink text-white py-3 px-6 rounded-lg font-medium hover:bg-primary-pink/90 transition-colors flex items-center justify-center gap-2 ${isDownloading ? 'opacity-75 cursor-not-allowed' : ''}`}
                >
                  <Download className="h-5 w-5" />
                  {isDownloading ? 'Preparing Download...' : 'Download Resume (PDF)'}
                </button>

                <div className="flex items-center justify-center gap-6 mt-4 text-sm text-gray-500">
                  <span>📄 PDF Format</span>
                  <span>📱 ATS Friendly</span>
                  <span>🔄 Updated Yearly</span>
                </div>
              </div>
            </div>
          </div>


          <div className="fade-in-up">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-gray-900 dark:text-white">
                <Award className="h-5 w-5 text-primary-pink" />
                Highlights
              </h3>
              <div className="space-y-6">
                {highlights.map((item, index) => (
                  <div
                    key={index}
                    className="border-l-4 border-primary-pink pl-4"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-sm text-white bg-primary-pink px-2 py-1 rounded font-medium">
                        {item.year}
                      </span>
                    </div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2 leading-tight text-sm">
                      {item.achievement}
                    </h4>
                    <p className="text-xs text-accent-blue mb-2 font-medium">
                      {item.tech}
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                      {item.impact}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>


        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">

          <div className="fade-in-up">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">Key Strengths</h3>
              <div className="space-y-6">
                {keyStrengths.map((strength, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3"
                  >
                    <strength.icon className="h-5 w-5 text-primary-pink mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-1">
                        {strength.title}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                        {strength.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>


          <div className="fade-in-up">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">Technical Skills</h3>
              <div className="space-y-4">
                {Object.entries(technicalSkills).map(([category, skills]) => (
                  <div key={category}>
                    <h4 className="font-semibold text-primary-pink mb-2 text-sm">{category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full border"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>


        <Cta />
      </div>
    </main >
  )
}