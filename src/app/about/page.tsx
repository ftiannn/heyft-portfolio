"use client"

import { useEffect, useState, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ChevronRight, X } from "lucide-react"
import { ProfessionalExperience } from "@/types/about.type"
import { Cta, FloatingNavigation, ScrollIndicator } from "../components"
import BeyondCodeSection from "./beyond-code"
import dynamic from "next/dynamic"
import { professionalJourney, skillCategories, drivingPrinciples, aboutSections } from "@/constants/about"

const Modal = dynamic(() => import("./modal").then(mod => mod.Modal), { ssr: false });
const Hero = dynamic(() => import("./hero"), { ssr: false });

export default function About() {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [selectedExperience, setSelectedExperience] = useState<ProfessionalExperience | null>(null);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const beyondRef = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  const beyondStart = 1800;
  const beyondEnd = beyondStart + 400;
  const background = useTransform(scrollY, [0, beyondStart, beyondEnd], ["rgba(255,255,255,0)", "rgba(255,255,255,0)", "#181926"]);
  const backgroundDark = useTransform(scrollY, [0, beyondStart, beyondEnd], ["rgba(24,25,38,0)", "rgba(24,25,38,0)", "#181926"]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
      const sections = aboutSections.map(s => s.id);
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div ref={mainRef} className="relative bg-transparent">
      <motion.div style={{ background }} className="fixed inset-0 z-0 pointer-events-none transition-colors duration-700 dark:hidden" aria-hidden />
      <motion.div style={{ background: backgroundDark }} className="fixed inset-0 z-0 pointer-events-none transition-colors duration-700 hidden dark:block" aria-hidden />
      <main className="relative z-10">
        <section id="hero">
          <ScrollIndicator scrollOffset={-20}>
            <Hero imageLoaded={imageLoaded} setImageLoaded={setImageLoaded} />
          </ScrollIndicator>
        </section>

        <div className="container-custom h-min-screen">
          <section id="journey">
            <motion.section
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className="section-padding"
            >
              <div className="text-center mb-16">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="inline-block mb-4"
                >
                  <span className="glass px-4 py-2 border border-primary-pink/20 rounded-full text-sm font-medium text-text-gray dark:text-gray-300 shadow-soft">
                    🚀 Career Timeline
                  </span>
                </motion.div>
                <h2 className="text-2xl md:text-4xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-primary-pink via-purple-600 to-accent-blue bg-clip-text text-transparent">
                    My Journey
                  </span>
                </h2>
                <p className="text-base md:text-lg text-text-gray dark:text-gray-400 max-w-2xl mx-auto">
                  From curious intern to technical leader — Every step of my career has been a building block towards creating impactful solutions.
                </p>
              </div>

              <div className="relative">
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
                      {/* Timeline Dot */}
                      <div className="absolute left-2.5 sm:left-4.5 md:left-6 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 bg-gradient-to-br from-primary-pink to-accent-blue border-2 sm:border-3 md:border-4 border-white dark:border-slate-800 rounded-full shadow-lg"></div>

                      {/* Experience Card */}
                      <div className="ml-10 sm:ml-16 md:ml-20">
                        <motion.div
                          whileHover={{ y: -2, scale: 1.01 }}
                          transition={{ duration: 0.3 }}
                          onClick={() => setSelectedExperience(experience)}
                          className="card cursor-pointer group"
                        >
                          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 sm:mb-4">
                            <div className="flex-1 mb-3 sm:mb-0">
                              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-2">
                                <h3 className="text-sm sm:text-base md:text-lg font-bold text-dark-navy dark:text-white group-hover:text-primary-pink transition-colors">
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

                          <div className="flex flex-wrap gap-1.5 sm:gap-2">
                            {experience.technologies.slice(0, 5).map((tech) => (
                              <span
                                key={tech}
                                className="px-2 sm:px-3 py-1 bg-gray-50 dark:bg-gray-700/50 text-text-gray text-xs rounded-full font-medium border border-gray-200 dark:border-gray-600"
                              >
                                {tech}
                              </span>
                            ))}
                            {experience.technologies.length > 5 && (
                              <span className="px-2 sm:px-3 py-1 bg-primary-pink/10 text-primary-pink text-xs rounded-full border border-primary-pink/20 font-medium">
                                +{experience.technologies.length - 5} more
                              </span>
                            )}
                          </div>

                          <div className="sm:hidden mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
                            <div className="flex items-center justify-center gap-2 text-text-gray text-xs">
                              <span>Tap for details</span>
                              <ChevronRight className="w-3 h-3" />
                            </div>
                          </div>
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.section>
          </section>

          <section id="skills">
            <motion.section
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className="section-padding"
            >
              <div className="text-center mb-16">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="inline-block mb-4"
                >
                  <span className="glass px-4 py-2 border border-accent-blue/20 rounded-full text-sm font-medium text-text-gray dark:text-gray-300 shadow-soft">
                    💪 Core Competencies
                  </span>
                </motion.div>
                <h2 className="text-2xl md:text-4xl font-bold mb-4">
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
                    whileHover={{ y: -4, scale: 1.02 }}
                    className="card group relative overflow-hidden"
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
              </div>
            </motion.section>
          </section>

          <section id="principles">
            <motion.section
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className="section-padding"
            >
              <div className="text-center mb-16">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="inline-block mb-4"
                >
                  <span className="glass px-4 py-2 border border-secondary-teal/20 rounded-full text-sm font-medium text-text-gray dark:text-gray-300 shadow-soft">
                    🎯 Core Values
                  </span>
                </motion.div>
                <h2 className="text-2xl md:text-4xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-primary-pink via-purple-600 to-secondary-teal bg-clip-text text-transparent">
                    What Drives Me
                  </span>
                </h2>
                <p className="text-base md:text-lg text-text-gray dark:text-gray-400 max-w-2xl mx-auto">
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
                    whileHover={{ y: -4, scale: 1.02 }}
                    className="card group cursor-default"
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
          </section>

          <div ref={beyondRef} id="beyond">
            <BeyondCodeSection />
          </div>

          <div ref={ctaRef} className="mb-0">
            <Cta />
          </div>
        </div>

        <FloatingNavigation
          sections={aboutSections}
          activeSection={activeSection}
          onNavigate={handleNavigate}
          scrollProgress={scrollProgress}
        />

        {/* Modal */}
        <Modal
          isOpen={!!selectedExperience}
          onClose={() => setSelectedExperience(null)}
          className="glass rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden mx-4 shadow-large border-2 border-primary-pink/20"
        >
          {selectedExperience && (
            <>
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
                      <span className="font-medium text-secondary-teal dark:text-secondary-teal text-[#17817b] dark:text-secondary-teal">{selectedExperience.mood}</span>
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

                  {/* Technologies & Tools */}
                  <div>
                    <h3 className="text-base font-bold text-secondary-teal dark:text-secondary-teal text-[#17817b] dark:text-secondary-teal mb-4 flex items-center gap-2">
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
    </div>
  );
}