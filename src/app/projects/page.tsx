// src/app/projects/page.tsx - Refactored with Even Grid

"use client"

import { motion } from "framer-motion"
import { Github, ExternalLink, X, Clock, Coffee, Zap, Heart, Sparkles, Calendar, Users, Play, FileText } from "lucide-react"
import { useState } from "react"
import { Dialog } from "@headlessui/react"
import Link from "next/link"
import { projects, categories, statusColors } from "@/constants/projects"
import { Project, ProjectCategory } from "@/types/projects.type"

const CoffeeRating = ({ rating }: { rating: number }) => (
  <div className="flex items-center gap-1">
    {[...Array(5)].map((_, i) => (
      <Coffee
        key={i}
        className={`h-3 w-3 ${i < rating ? 'text-amber-500' : 'text-gray-300'}`}
        fill={i < rating ? 'currentColor' : 'none'}
      />
    ))}
  </div>
)

const ProjectCard = ({ project, index, onClick }: { project: Project; index: number; onClick: () => void }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.1 * index, duration: 0.6 }}
    className="card cursor-pointer group hover:scale-[1.02] transition-all duration-300 flex flex-col h-full"
    onClick={onClick}
  >
    {/* Project Header - Fixed Height */}
    <div className="flex items-start justify-between mb-4 min-h-[80px]">
      <div className="flex-1 min-w-0 pr-3">
        <div className="flex items-start gap-2 mb-2">
          <h3 className="text-lg font-bold text-primary-pink group-hover:text-secondary-teal transition-colors leading-tight">
            {project.title}
          </h3>
          {project.featured && (
            <Sparkles className="h-4 w-4 text-amber-500 flex-shrink-0 mt-1" />
          )}
        </div>
        <p className="text-sm font-medium text-secondary-teal mb-2 leading-tight">
          {project.tagline}
        </p>
        {project.year && (
          <div className="flex items-center gap-2 text-xs text-text-gray">
            <Calendar className="h-3 w-3" />
            {project.year}
          </div>
        )}
      </div>
      <div className="flex flex-col items-end gap-2 flex-shrink-0">
        <span className={`px-2 py-1 rounded-full text-xs font-medium border whitespace-nowrap ${statusColors[project.status]}`}>
          {project.status}
        </span>
        <CoffeeRating rating={project.coffeeRating} />
      </div>
    </div>

    {/* Project Image Placeholder */}
    <div className="aspect-video bg-gradient-primary rounded-lg mb-4 overflow-hidden flex items-center justify-center text-white text-3xl font-bold flex-shrink-0">
      {project.title.split(' ')[0]}
    </div>

    {/* Project Description - Fixed Height */}
    <div className="flex-1 mb-4">
      <p className="text-text-gray dark:text-gray-300 leading-relaxed text-sm">
        {project.description}
      </p>
    </div>

    {/* Project Meta */}
    <div className="space-y-3">
      {/* Tech Stack */}
      <div className="flex flex-wrap gap-1">
        {project.stack.slice(0, 4).map((tech) => (
          <span
            key={tech}
            className="px-2 py-1 bg-pink-50 dark:bg-navy-800 text-primary-pink 
                     text-xs rounded-full border border-pink-100 dark:border-pink-500/20"
          >
            {tech}
          </span>
        ))}
        {project.stack.length > 4 && (
          <span className="px-2 py-1 bg-secondary-teal/10 text-secondary-teal text-xs rounded-full">
            +{project.stack.length - 4}
          </span>
        )}
      </div>

      {/* Project Stats */}
      <div className="flex items-center justify-between text-xs text-text-gray">
        <div className="flex items-center gap-1">
          <Clock className="h-3 w-3" />
          {project.timeInvested}
        </div>
        {project.teamSize && (
          <div className="flex items-center gap-1">
            <Users className="h-3 w-3" />
            {project.teamSize}
          </div>
        )}
      </div>

      {/* Action Links */}
      <div className="flex gap-3 pt-2">
        {project.github !== "#" && project.github !== "" && (
          <a
            href={project.github}
            className="flex items-center gap-1 text-text-gray hover:text-primary-pink transition-colors text-sm"
            onClick={(e) => e.stopPropagation()}
          >
            <Github className="h-3 w-3" />
            Code
          </a>
        )}
        {project.demo !== "#" && project.demo !== "" && (
          <a
            href={project.demo}
            className="flex items-center gap-1 text-text-gray hover:text-secondary-teal transition-colors text-sm"
            onClick={(e) => e.stopPropagation()}
          >
            <ExternalLink className="h-3 w-3" />
            {project.isClientWork ? "View" : "Demo"}
          </a>
        )}
        {project.videoDemo && (
          <a
            href={project.videoDemo}
            className="flex items-center gap-1 text-text-gray hover:text-accent-blue transition-colors text-sm"
            onClick={(e) => e.stopPropagation()}
          >
            <Play className="h-3 w-3" />
            Video
          </a>
        )}
      </div>
    </div>
  </motion.div>
)

const renderContent = (text: string) => {
  if (!text.includes("http")) return text;

  const urlRegex = /(https?:\/\/[^\s]+)/g;
  const parts = text.split(urlRegex);

  return parts.map((part, index) => {
    if (part.match(urlRegex)) {
      return (
        <a
          key={index}
          href={part}
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-secondary-teal hover:text-primary-pink transition-colors"
        >
          {part}
        </a>
      );
    }
    return part;
  });
};

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>("All")

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter(project => project.category === selectedCategory)

  return (
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
            <span className="gradient-text">My Projects</span>
          </h1>
          <p className="text-md text-text-gray dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            A curated collection of projects spanning web applications, mobile apps, and
            experimental prototypes. Each represents a different challenge, technology, or
            creative problem I&apos;ve tackled. From production applications serving real users
            to learning exercises that expanded my skillset—every project has contributed
            to my growth as a developer.
          </p>

          {/* Fun Stats */}
          <div className="flex justify-center gap-8 mt-8 flex-wrap">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-pink">12</div>
              <div className="text-sm text-text-gray">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-secondary-teal">3</div>
              <div className="text-sm text-text-gray">Live Apps</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent-blue">50+</div>
              <div className="text-sm text-text-gray">Active Users</div>
            </div>
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full font-medium transition-all duration-200 ${selectedCategory === category
                ? 'bg-primary-pink text-white shadow-pink'
                : 'border-2 border-primary-pink text-primary-pink hover:bg-primary-pink hover:text-white'
                }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid - EVEN LAYOUT */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr"
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </motion.div>

        {/* Project Modal */}
        <Dialog
          open={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          className="relative z-50"
        >
          <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" aria-hidden="true" />

          <div className="fixed inset-0 flex items-center justify-center p-4">
            <Dialog.Panel className="bg-white dark:bg-navy-800 rounded-xl p-6 max-w-5xl w-full max-h-[90vh] overflow-y-auto">
              {selectedProject && (
                <>
                  {/* Modal Header */}
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex-1">
                      <Dialog.Title className="text-3xl font-bold gradient-text flex items-center gap-2 mb-2">
                        {selectedProject.title}
                        {selectedProject.featured && (
                          <Sparkles className="h-6 w-6 text-amber-500" />
                        )}
                      </Dialog.Title>
                      <p className="text-lg text-secondary-teal font-medium mb-3">
                        {selectedProject.tagline}
                      </p>

                      {/* Project Meta Row */}
                      <div className="flex flex-wrap items-center gap-4 text-sm text-text-gray">
                        <span className={`px-3 py-1 rounded-full font-medium border ${statusColors[selectedProject.status]}`}>
                          {selectedProject.status}
                        </span>

                        {selectedProject.year && (
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {selectedProject.year}
                          </div>
                        )}

                        {selectedProject.teamSize && (
                          <div className="flex items-center gap-1">
                            <Users className="h-4 w-4" />
                            {selectedProject.teamSize}
                          </div>
                        )}

                        <div className="flex items-center gap-2">
                          <Coffee className="h-4 w-4 text-amber-500" />
                          <CoffeeRating rating={selectedProject.coffeeRating} />
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => setSelectedProject(null)}
                      className="text-text-gray hover:text-primary-pink transition-colors p-2 flex-shrink-0"
                    >
                      <X className="h-6 w-6" />
                    </button>
                  </div>

                  {/* Modal Content */}
                  <div className="space-y-6">
                    {/* Project Image */}
                    <div className="aspect-video bg-gradient-primary rounded-lg flex items-center justify-center text-white text-6xl font-bold">
                      {selectedProject.title.split(' ')[0]}
                    </div>

                    {/* Project Story */}
                    <div className="prose dark:prose-invert max-w-none">
                      <div className="text-text-gray dark:text-gray-300 leading-relaxed space-y-4">
                        {selectedProject.details.map((section, index) => (
                          <div key={index}>
                            {section.heading && (
                              <h4 className="font-bold text-primary-pink mb-2 text-lg">{section.heading}</h4>
                            )}
                            {section.content.length === 1 ? (
                              <p className="mb-3">{renderContent(section.content[0])}</p>
                            ) : (
                              <ul className="list-disc list-inside ml-4 mb-3">
                                {section.content.map((item, itemIndex) => (
                                  <li key={itemIndex} className="leading-relaxed">
                                    {renderContent(item)}
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Project Details Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                      {/* Left Column */}
                      <div className="space-y-4">
                        {/* Tech Stack */}
                        <div>
                          <h4 className="font-bold text-primary-pink mb-3">Tech Stack</h4>
                          <div className="flex flex-wrap gap-2">
                            {selectedProject.stack.map((tech) => (
                              <span
                                key={tech}
                                className="px-3 py-2 bg-pink-50 dark:bg-navy-800 text-primary-pink 
                                         text-sm rounded-full border border-pink-100 dark:border-pink-500/20"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Tags */}
                        {selectedProject.tags && selectedProject.tags.length > 0 && (
                          <div>
                            <h4 className="font-bold text-secondary-teal mb-3">Tags</h4>
                            <div className="flex flex-wrap gap-2">
                              {selectedProject.tags.map((tag) => (
                                <span
                                  key={tag}
                                  className="px-3 py-1 bg-secondary-teal/10 text-secondary-teal 
                                           text-sm rounded-full border border-secondary-teal/20"
                                >
                                  #{tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Metrics */}
                        {selectedProject.metrics && (
                          <div>
                            <h4 className="font-bold text-secondary-teal mb-3">Project Metrics</h4>
                            <div className="space-y-2">
                              {Object.entries(selectedProject.metrics).map(([key, value]) => (
                                <div key={key} className="flex justify-between items-center pr-4">
                                  <span className="text-text-gray dark:text-gray-300 capitalize">
                                    {key.replace(/([A-Z])/g, ' $1').trim()}:
                                  </span>
                                  <span className="font-semibold text-accent-blue">{value}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Right Column */}
                      <div className="space-y-4">
                        {/* Project Insights */}
                        <div>
                          <h4 className="font-bold text-primary-pink mb-3">Project Insights</h4>
                          <div className="space-y-2">
                            <div className="flex justify-between items-start pr-2 ">
                              <span className="text-text-gray dark:text-gray-300">Time Invested:</span>
                              <span className="font-semibold text-right">{selectedProject.timeInvested}</span>
                            </div>

                            {selectedProject.role && (
                              <div className="flex justify-between items-start pr-2">
                                <span className="text-text-gray dark:text-gray-300">Role:</span>
                                <span className="font-semibold text-right">{selectedProject.role}</span>
                              </div>
                            )}

                            <div className="flex justify-between items-start pr-2">
                              <span className="text-text-gray dark:text-gray-300">Would Build Again:</span>
                              <span className="font-semibold text-secondary-teal text-right max-w-[60%]">
                                {selectedProject.wouldBuildAgain}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Key Lesson */}
                        <div className="pr-2">
                          <h4 className="font-bold text-secondary-teal mb-3">Key Lesson</h4>
                          <p className="text-sm text-text-gray dark:text-gray-300 italic leading-relaxed">
                            &quot;{selectedProject.lessonsLearned}&quot;
                          </p>
                        </div>

                        {/* Design Tools
                        {selectedProject.designTools && selectedProject.designTools.length > 0 && (
                          <div>
                            <h4 className="font-bold text-secondary-teal mb-3">Design Tools</h4>
                            <div className="flex flex-wrap gap-2">
                              {selectedProject.designTools.map((tool) => (
                                <span
                                  key={tool}
                                  className="px-3 py-1 bg-accent-blue/10 text-accent-blue 
                                           text-sm rounded-full border border-accent-blue/20"
                                >
                                  {tool}
                                </span>
                              ))}
                            </div>
                          </div>
                        )} */}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-3 pt-6 border-t border-gray-200 dark:border-gray-700">
                      {selectedProject.github !== "#" && selectedProject.github !== "" && (
                        <a
                          href={selectedProject.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-primary flex items-center gap-2"
                        >
                          <Github className="h-4 w-4" />
                          View Code
                        </a>
                      )}

                      {selectedProject.demo !== "#" && selectedProject.demo !== "" && (
                        <a
                          href={selectedProject.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-secondary flex items-center gap-2"
                        >
                          <ExternalLink className="h-4 w-4" />
                          {selectedProject.isClientWork ? "View Site" : "Live Demo"}
                        </a>
                      )}

                      {selectedProject.videoDemo && (
                        <a
                          href={selectedProject.videoDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-secondary flex items-center gap-2"
                        >
                          <Play className="h-4 w-4" />
                          Video Demo
                        </a>
                      )}

                      {selectedProject.slidesLink && (
                        <a
                          href={selectedProject.slidesLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-secondary flex items-center gap-2"
                        >
                          <FileText className="h-4 w-4" />
                          View Slides
                        </a>
                      )}

                      {selectedProject.category === "Coming Soon" && (
                        <div className="btn-secondary opacity-50 cursor-not-allowed flex items-center gap-2">
                          <Zap className="h-4 w-4" />
                          Coming Soon
                        </div>
                      )}
                    </div>
                  </div>
                </>
              )}
            </Dialog.Panel>
          </div>
        </Dialog>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="card bg-gradient-primary text-white">
            <h3 className="text-2xl font-bold mb-4 flex items-center justify-center gap-2">
              <Heart className="h-6 w-6" />
              Like What You See?
            </h3>
            <p className="text-md leading-relaxed mb-6">
              These projects reflect the craft, care, and curiosity I bring into everything I build — whether it&apos;s
              solving real-world problems, refining user experiences, or exploring emerging tech.
              <br />
              <span className="font-semibold">Currently:</span> Open to new opportunities, side quests, and meaningful conversations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/about" className="btn-secondary bg-white text-primary-pink border-white hover:bg-gray-100">
                Get to Know Me
              </Link>
              <Link href="/resume" className="btn-secondary bg-white text-primary-pink border-white hover:bg-gray-100">
                View My Resume
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  )
}