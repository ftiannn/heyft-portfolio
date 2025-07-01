"use client"

import Image from "next/image"
import { useState, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ChevronRight, Heart, X, ArrowUpRight } from "lucide-react"
import { quickFacts, professionalJourney, skillCategories, personalInterests, drivingPrinciples } from "@/constants/about"
import { ProfessionalExperience } from "@/types/about.type"

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
}


const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, className = "" }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />
      <div className={`relative ${className}`}>
        {children}
      </div>
    </div>
  );
};

export default function About() {

  const [selectedExperience, setSelectedExperience] = useState<ProfessionalExperience | null>(null);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <main className="min-h-screen bg-gradient-light dark:bg-gradient-dark">

      {/*  Hero Section */}
      <div ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-pink/10 rounded-full blur-2xl"></div>
        </div>

        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="relative z-10 text-center px-8 max-w-4xl"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="mb-8 mt-8"
          >
            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-6 shadow-lg ring-4 ring-primary-pink/20 hover:ring-primary-pink/40 transition-all duration-300 focus-visible:ring-2 focus-visible:ring-primary-pink focus-visible:outline-none">
              <Image
                src="/avatar.png"
                onLoad={() => setImageLoaded(true)}
                className={`object-cover object-center transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                alt="FT Tan - Developer Avatar"
                width={128}
                height={128}
                priority
              />
            </div>
          </motion.div>


          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-primary-pink via-purple-600 via-accent-blue to-secondary-teal bg-clip-text text-transparent animate-pulse">FT Tan</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg md:text-xl text-text-gray dark:text-gray-300 mb-6 font-medium"
          >
            I turn complex problems into simple, beautiful solutions
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-base md:text-lg text-text-gray dark:text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Product-focused developer who enjoys bridging technology and business to build impactful solutions. 7+ years of experience aligning cross-functional teams and delivering nationwide platforms.
          </motion.p>

          {/* Quick facts carousel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {quickFacts.map((fact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 + index * 0.1, type: "spring" }}
                whileHover={{ scale: 1.05 }}
                className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-lg px-4 py-2 rounded-full text-sm font-medium text-text-gray dark:text-gray-300 border border-primary-pink/20 shadow-lg hover:shadow-pink hover:border-primary-pink/40 transition-all duration-300"
              >
                <span className="mr-2">{fact.icon}</span>
                {fact.text}
              </motion.div>
            ))}
          </motion.div>

        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-text-gray rounded-full flex justify-center">
            <div className="w-1 h-3 bg-text-gray rounded-full animate-bounce-gentle mt-2"></div>
          </div>
        </motion.div>
      </div>

      <div className="container-custom">

        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="section-padding"
        >
          <div className="text-center mb-16">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary-pink via-purple-600 to-accent-blue bg-clip-text text-transparent">
                My Journey
              </span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-text-gray dark:text-gray-400 max-w-2xl mx-auto px-4">
              From curious intern to technical leader — Every step of my career has been a building block towards creating impactful solutions.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line - responsive positioning */}
            <div className="absolute left-4 sm:left-6 md:left-8 top-0 bottom-0 w-0.5 sm:w-1 bg-gradient-to-b from-primary-pink via-purple-500 via-accent-blue to-secondary-teal opacity-60 rounded-full"></div>

            <div className="space-y-8 sm:space-y-12">
              {professionalJourney?.map((experience, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true, margin: "-50px" }}
                  className="relative"
                >
                  {/* Timeline dot - responsive sizing and positioning */}
                  <div className="absolute left-2.5 sm:left-4.5 md:left-6 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 bg-gradient-to-br from-primary-pink to-accent-blue border-2 sm:border-3 md:border-4 border-white dark:border-slate-800 rounded-full shadow-lg"></div>

                  {/* Content card - responsive margin */}
                  <div className="ml-10 sm:ml-16 md:ml-20">
                    <div
                      className="bg-white dark:bg-slate-800 rounded-xl p-4 sm:p-5 md:p-6 shadow-soft hover:shadow-large transition-all duration-300 cursor-pointer group border-2 border-gray-100 dark:border-gray-700 hover:border-primary-pink/50 hover:shadow-primary-pink/10"
                      onClick={() => setSelectedExperience(experience)}
                    >
                      {/* Header - responsive layout */}
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 sm:mb-4">
                        <div className="flex-1 mb-3 sm:mb-0">
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-2">
                            <h3 className="text-sm sm:text-base md:text-lg font-bold text-dark-navy dark:text-white group-hover:text-primary-pink transition-colors leading-tight">
                              {experience.title}
                            </h3>
                            <span className="text-xs bg-gradient-to-r from-secondary-teal to-cyan-400 text-white px-2 sm:px-3 py-1 rounded-full font-medium shadow-sm self-start">
                              {experience.type}
                            </span>
                          </div>
                          <p className="text-sm sm:text-base text-text-gray font-medium mb-1">{experience.company}</p>
                          <p className="text-xs sm:text-sm text-primary-pink font-semibold">{experience.period}</p>
                        </div>
                        <div className="hidden sm:flex items-center gap-2 text-text-gray group-hover:text-primary-pink transition-colors">
                          <span className="text-sm font-medium">View Details</span>
                          <ChevronRight className="w-4 h-4" />
                        </div>
                      </div>

                      {/* Description - responsive text size */}
                      <div className="text-text-gray dark:text-gray-300 leading-relaxed mb-3 sm:mb-4 text-xs sm:text-sm">
                        {Array.isArray(experience.description) ? (
                          <div className="space-y-1">
                            {experience.description.slice(0, 2).map((desc, i) => (
                              <div key={i} className="line-clamp-2 sm:line-clamp-none">{desc}</div>
                            ))}
                          </div>
                        ) : (
                          <p className="line-clamp-3 sm:line-clamp-none">{experience.description}</p>
                        )}
                      </div>

                      {/* Tech stack preview - responsive display */}
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {/* Show first 3 on mobile, first 5 on larger screens */}
                        {experience.technologies.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 sm:px-3 py-1 bg-gray-50 dark:bg-gray-700/50 text-text-gray text-xs rounded-full font-medium border border-gray-200 dark:border-gray-600"
                          >
                            {tech}
                          </span>
                        ))}
                        {/* Show additional tags on sm+ screens */}
                        {experience.technologies.slice(3, 5).map((tech) => (
                          <span
                            key={tech}
                            className="hidden sm:inline-flex px-3 py-1 bg-gray-50 dark:bg-gray-700/50 text-text-gray text-xs rounded-full font-medium border border-gray-200 dark:border-gray-600"
                          >
                            {tech}
                          </span>
                        ))}
                        {/* Responsive "more" indicator */}
                        {experience.technologies.length > 3 && (
                          <>
                            {/* Mobile: show count based on 3 visible */}
                            <span className="sm:hidden px-2 py-1 bg-primary-pink/10 text-primary-pink text-xs rounded-full border border-primary-pink/20 font-medium">
                              +{experience.technologies.length - 3} more
                            </span>
                            {/* Desktop: show count based on 5 visible (only if more than 5) */}
                            {experience.technologies.length > 5 && (
                              <span className="hidden sm:inline-flex px-3 py-1 bg-primary-pink/10 text-primary-pink text-xs rounded-full border border-primary-pink/20 font-medium">
                                +{experience.technologies.length - 5} more
                              </span>
                            )}
                          </>
                        )}
                      </div>

                      {/* Mobile-only tap indicator */}
                      <div className="sm:hidden mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
                        <div className="flex items-center justify-center gap-2 text-text-gray text-xs">
                          <span>Tap for details</span>
                          <ChevronRight className="w-3 h-3" />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Skills with interactive elements */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="section-padding"
        >
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              <span className="bg-gradient-to-r from-accent-blue via-purple-600 to-secondary-teal bg-clip-text text-transparent">
                What I Bring to the Table
              </span>
            </h2>
            <p className="text-base md:text-lg text-text-gray dark:text-gray-400 max-w-2xl mx-auto">
              A blend of technical depth, creative problem-solving, and people skills
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-slate-800 p-8 rounded-2xl hover:shadow-2xl hover:shadow-primary-pink/10 dark:hover:shadow-primary-pink/20 transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-gray-700 hover:border-primary-pink/20 dark:hover:border-primary-pink/30 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-pink/5 via-transparent to-accent-blue/5 dark:from-primary-pink/10 dark:via-transparent dark:to-accent-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <category.icon className={`w-8 h-8 group-hover:scale-110 transition-transform ${index === 0 ? 'text-primary-pink' :
                      index === 1 ? 'text-accent-blue' :
                        'text-secondary-teal'
                      }`} />
                    <h3 className={`text-xl md:text-2xl font-bold ${index === 0 ? 'text-primary-pink' :
                      index === 1 ? 'text-accent-blue' :
                        'text-secondary-teal'
                      }`}>
                      {category.title}
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="group cursor-pointer"
                        onMouseEnter={() => setHoveredSkill(`${index}-${skillIndex}`)}
                        onMouseLeave={() => setHoveredSkill(null)}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-semibold text-dark-navy dark:text-gray-200">
                            {skill.name}
                          </span>
                          <span className="text-sm text-text-gray dark:text-gray-400">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-2">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ delay: index * 0.2 + skillIndex * 0.1, duration: 0.8 }}
                            viewport={{ once: true }}
                            className={`h-2 rounded-full transition-all duration-300 shadow-lg ${index === 0 ? 'bg-gradient-to-r from-primary-pink via-purple-500 to-pink-400' :
                              index === 1 ? 'bg-gradient-to-r from-accent-blue via-cyan-500 to-blue-400' :
                                'bg-gradient-to-r from-secondary-teal via-emerald-500 to-teal-400'
                              }`}
                          />
                        </div>
                        <p className={`text-sm text-text-gray dark:text-gray-400 transition-opacity ${hoveredSkill === `${index}-${skillIndex}` ? 'opacity-100' : 'opacity-70'
                          }`}>
                          {skill.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>        </motion.section>

        {/* Personal Interests */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="section-padding"
        >
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              <span className="bg-gradient-to-r from-secondary-teal via-purple-600 to-primary-pink bg-clip-text text-transparent">
                Beyond Coding
              </span>
            </h2>
            <p className="text-base md:text-lg text-text-gray dark:text-gray-400 max-w-2xl mx-auto">
              Interests and hobbies that fuel my creativity
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {personalInterests.map((interest, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -2 }}
                onClick={() => window.open(interest.link, "_blank")}
                className="bg-white dark:bg-slate-800 p-8 rounded-2xl cursor-pointer group relative overflow-hidden hover:shadow-2xl dark:hover:shadow-2xl dark:hover:shadow-primary-pink/20 transition-all duration-500 border border-gray-100 dark:border-gray-700 hover:border-primary-pink/30 dark:hover:border-primary-pink/40"
              >
                {/* Decorative elements with dark mode enhancements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/20 dark:from-white/10 to-primary-pink/10 dark:to-primary-pink/20 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 group-hover:rotate-45 transition-all duration-700"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-accent-blue/10 dark:from-accent-blue/20 to-transparent rounded-full translate-y-12 -translate-x-12 group-hover:scale-125 group-hover:-rotate-45 transition-all duration-700"></div>

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    {/* Dynamic icon color based on interest index */}
                    <interest.icon className={`w-8 h-8 group-hover:scale-110 transition-transform ${index === 0 ? 'text-primary-pink' :
                      index === 1 ? 'text-accent-blue' :
                        index === 2 ? 'text-secondary-teal' :
                          index === 3 ? 'text-purple-500' :
                            'text-primary-pink'
                      }`} />
                    {/* Dynamic title color based on interest index */}
                    <h3 className={`text-xl md:text-2xl font-bold ${index === 0 ? 'text-primary-pink' :
                      index === 1 ? 'text-accent-blue' :
                        index === 2 ? 'text-secondary-teal' :
                          index === 3 ? 'text-purple-500' :
                            'text-primary-pink'
                      }`}>
                      {interest.title}
                    </h3>
                  </div>

                  <p className="text-text-gray dark:text-gray-300 mb-4 leading-relaxed">
                    {interest.description}
                  </p>

                  <p className="text-sm text-text-gray dark:text-gray-400 mb-6">
                    {interest.details}
                  </p>

                  <div className="flex items-center gap-2 text-sm font-semibold text-dark-navy dark:text-gray-200 group-hover:gap-3 transition-all">
                    <span>Explore</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* What Drives Me */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="py-8 lg:py-12"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary-pink via-purple-600 to-secondary-teal bg-clip-text text-transparent flex items-center justify-center gap-3">
              What Drives Me
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              The principles that guide my approach to technology and life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {drivingPrinciples.map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -4 }}
                className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700 group cursor-default"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-pink/10 to-secondary-teal/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">{principle.icon}</span>
                  </div>
                  <h3 className="font-bold text-xl text-gray-900 dark:text-white group-hover:text-primary-pink transition-colors duration-300">
                    {principle.title}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {principle.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>


        {/* Bottom CTA */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="section-padding text-center"
        >
          <div className="card bg-gradient-primary text-white">
            <h3 className="text-2xl font-bold mb-4 flex items-center justify-center gap-2">
              <Heart className="h-6 w-6" />
              Ready to Connect?
            </h3>
            <p className="text-md leading-relaxed mb-6 max-w-3xl mx-auto">
              Whether you&apos;re looking for a technical partner who bridges the gap between complex problems and elegant solutions,
              or just want to chat about the intersection of technology, creativity, and meaningful impact — I&apos;d love to hear from you.
              <br />
              <span className="font-semibold">Currently:</span> Open to new opportunities, collaborations, and conversations that matter.
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
        </motion.section>

      </div>

      {/* Experience Detail Modal - Redesigned */}
      <Modal
        isOpen={!!selectedExperience}
        onClose={() => setSelectedExperience(null)}
        className="bg-white dark:bg-slate-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden mx-4 shadow-2xl border-2 border-primary-pink/20"
      >
        {selectedExperience && (
          <>
            {/* Modal Header - more colorful */}
            <div className="bg-gradient-to-r from-primary-pink/10 via-purple-500/10 via-accent-blue/10 to-secondary-teal/10 p-6 border-b-2 border-gradient-to-r from-primary-pink/20 to-accent-blue/20">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-xl md:text-2xl font-bold text-dark-navy dark:text-white mb-2">
                    {selectedExperience.title}
                  </h2>
                  <div className="flex items-center gap-3 mb-3">
                    <p className="text-base text-text-gray font-semibold">
                      {selectedExperience.company}
                    </p>
                    <span className="text-xs bg-gradient-to-r from-secondary-teal to-cyan-400 text-white px-3 py-1 rounded-full font-medium shadow-sm">
                      {selectedExperience.type}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-text-gray">
                    <span className="font-medium text-primary-pink">{selectedExperience.period}</span>
                    <span>•</span>
                    <span className="text-secondary-teal font-medium">{selectedExperience.mood}</span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedExperience(null)}
                  className="text-text-gray hover:text-primary-pink transition-colors p-2 hover:bg-primary-pink/10 rounded-lg"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
              <div className="space-y-8">

                {/* Role Overview */}
                <div>
                  <h3 className="text-base font-bold text-primary-pink mb-4 flex items-center gap-2">
                    <div className="w-3 h-3 bg-gradient-to-r from-primary-pink to-purple-500 rounded-full"></div>
                    Role Overview
                  </h3>
                  <div className="bg-gradient-to-br from-primary-pink/5 to-purple-500/5 p-4 rounded-lg border border-primary-pink/20">
                    <div className="text-text-gray dark:text-gray-300 leading-relaxed text-sm">
                      {Array.isArray(selectedExperience.description) ? (
                        <div className="space-y-3">
                          {selectedExperience.description.map((desc, i) => (
                            <div key={i}>{desc}</div>
                          ))}
                        </div>
                      ) : (
                        <p>{selectedExperience.description}</p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Key Achievements */}
                <div>
                  <h3 className="text-base font-bold text-accent-blue mb-4 flex items-center gap-2">
                    <div className="w-3 h-3 bg-gradient-to-r from-accent-blue to-cyan-400 rounded-full"></div>
                    Key Achievements
                  </h3>
                  <div className="space-y-3">
                    {selectedExperience.achievements.map((achievement, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 bg-gradient-to-br from-accent-blue/5 to-cyan-400/5 rounded-lg border border-accent-blue/20">
                        <div className="w-2 h-2 bg-gradient-to-r from-secondary-teal to-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-text-gray dark:text-gray-300 leading-relaxed text-sm">
                          {achievement}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <h3 className="text-base font-bold text-secondary-teal mb-4 flex items-center gap-2">
                    <div className="w-3 h-3 bg-gradient-to-r from-secondary-teal to-emerald-400 rounded-full"></div>
                    Technologies & Tools
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                    {selectedExperience.technologies.map((tech) => (
                      <div
                        key={tech}
                        className="bg-gray-50 dark:bg-slate-700/50 p-3 rounded-lg text-center border border-gray-200 dark:border-gray-600 hover:border-secondary-teal/30 transition-colors"
                      >
                        <span className="text-sm font-medium text-text-gray dark:text-gray-200">
                          {tech}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </>
        )}
      </Modal>
    </main>
  )
}