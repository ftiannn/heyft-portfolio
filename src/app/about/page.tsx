"use client"

import { motion } from "framer-motion"
import {
  MapPin, Heart, Code2,
  Target, Users, Brain, Palette, Zap,
  TrendingUp, Database, Cloud, Figma, X, Calendar,
  ArrowRight
} from "lucide-react"
import { useState } from "react"
import { Dialog } from "@headlessui/react"

const timeline = [
  {
    year: "Pre-2018",
    title: "Finding My Path",
    subtitle: "Game development breakthrough",
    description: "From overwhelmed student to discovering my coding passion through games",
    icon: "🎮",
    fullStory: {
      period: "University Years (2014-2018)",
      challenge: "I started as an unconfident student who found coding completely overwhelming. Traditional programming courses felt abstract and disconnected from anything meaningful.",
      breakthrough: "Everything changed when I discovered game development. Suddenly, code wasn't just syntax — it was creating worlds, characters, and interactive experiences that people could actually enjoy.",
      learnings: [
        "Built my first 3D games in Unity using C# — they were janky but they WORKED",
        "Learned that coding becomes intuitive when you can see immediate visual results",
        "Picked up bits of UX design, web development, and mobile app development",
        "Discovered I had a natural bridge between technical logic and creative expression",
        "Realized that the best code serves a human experience, not just a business requirement"
      ],
      impact: "This period taught me that confidence in coding comes from building things you care about, not from memorizing syntax. It set the foundation for my approach to development: always think about the end user experience."
    }
  },
  {
    year: "2017",
    title: "The Apple Breakthrough",
    subtitle: "Confidence through automation",
    description: "6-month internship that proved I could actually code and solve real problems",
    icon: "🍎",
    fullStory: {
      period: "Apple Internship (Summer 2017)",
      challenge: "Despite loving game development, I still doubted whether I could handle 'real' programming in a corporate environment. Imposter syndrome was strong.",
      breakthrough: "Spent 6 months with the Supply Demand Management team automating their processes using AppleScript and JavaScript, plus building Excel dashboards for data visualization.",
      learnings: [
        "Automated repetitive tasks that were taking the team hours each week",
        "Built interactive dashboards that helped managers make data-driven decisions",
        "Learned that good code often means making other people's jobs easier and more efficient",
        "Discovered I enjoyed the problem-solving aspect as much as the coding itself",
        "Realized that technical skills + understanding business context = real value"
      ],
      impact: "This was my 'I can actually code' moment. The confidence boost was massive — I went from doubting my abilities to knowing I could learn any technology and solve meaningful problems with it."
    }
  },
  {
    year: "2018",
    title: "Enterprise Reality",
    subtitle: "Banking & consulting training",
    description: "Learning professional development through consulting firm training and banking work",
    icon: "🏦",
    fullStory: {
      period: "Consulting & Banking (2018-2019)",
      challenge: "Getting a job was tough without proper Software Development Life Cycle (SDLC) experience. Most companies wanted someone who already knew enterprise patterns and processes.",
      breakthrough: "Joined a consulting firm that provided comprehensive training, then got placed at a major bank for nearly a year of hands-on experience.",
      learnings: [
        "Learned Angular from scratch while working on production banking applications",
        "Mastered enterprise Java patterns, Spring Boot, and enterprise-scale architecture",
        "Understood what 'production-ready' actually means: proper testing, documentation, error handling",
        "Experienced working with legacy systems and the challenges of gradual modernization",
        "Learned to work within strict compliance and security requirements"
      ],
      impact: "This period grounded me in professional software development practices. I learned that enterprise development isn't just about cool technology — it's about reliability, security, and maintainability at scale."
    }
  },
  {
    year: "2019-2021",
    title: "Government Scale",
    subtitle: "MOM Work Pass Portal & more",
    description: "GovTech experience building critical infrastructure that thousands depend on",
    icon: "🏛️",
    fullStory: {
      period: "GovTech - MOM Team (2019-2021)",
      challenge: "Joined GovTech and was assigned to revamp MOM's work visa portal — a critical system that thousands of employers and foreign workers depend on daily.",
      breakthrough: "Led the frontend development of the new portal using Vue.js and Node.js, while learning microservices architecture and modern development practices.",
      learnings: [
        "Built the frontend for a government portal serving thousands of daily users",
        "Learned Vue.js, Node.js, microservices, and modern development workflows",
        "Practiced Agile methodologies, served as Scrum Master, and learned team coordination",
        "Doubled as Quality Engineer: implemented TDD, ATDD, and end-to-end testing strategies",
        "Worked part-time as Data Analyst building Power BI dashboards for policy officers",
        "Learned to work directly with government stakeholders and understand policy requirements"
      ],
      impact: "This taught me what 'scale' really means. When your code affects people's livelihoods and immigration status, you develop a deep sense of responsibility and attention to detail that carries into everything you build."
    }
  },
  {
    year: "2022-2024",
    title: "Product Leadership",
    subtitle: "GovRewards team & full ownership",
    description: "Small team environment where I wore many hats and influenced product decisions",
    icon: "🚀",
    fullStory: {
      period: "GovTech - GovRewards (Late 2022-2024)",
      challenge: "Moved to the GovRewards team — a smaller, more agile environment where I needed to be more than just a developer.",
      breakthrough: "In a team of 5, I became the technical liaison for partnerships, product onboarding, and strategic decision-making while continuing to build the platform.",
      learnings: [
        "Mastered PostgreSQL, NestJS, AWS services, and CI/CD pipeline management",
        "Sat in pitch meetings with potential government partners and enterprise clients",
        "Became the go-to person for technical due diligence and product onboarding support",
        "Managed post-launch feedback, technical support, and troubleshooting for partners",
        "Translated business requirements into technical roadmap and influenced product priorities",
        "Learned to balance rapid development with enterprise-grade reliability and security"
      ],
      impact: "This role taught me that senior developers aren't just coding experts — they're business translators, technical strategists, and bridge-builders between teams. I learned to think like a product owner while executing like an engineer."
    }
  },
  {
    year: "2024-Present",
    title: "Creative Exploration",
    subtitle: "Career break & independent building",
    description: "Taking time to explore, learn, and build what I'm passionate about",
    icon: "🌟",
    fullStory: {
      period: "Career Break & Creative Phase (2024-Present)",
      challenge: "After years of working on other people's visions, I wanted to take time to figure out what I actually wanted to build and where I wanted to take my career.",
      breakthrough: "Decided to take a career break to reset, travel, and work on projects that genuinely excited me.",
      learnings: [
        "Built Habitly: a full-stack habit tracking app with gamification and AWS infrastructure",
        "Created this portfolio to showcase my journey and projects authentically",
        "Took on client projects and set up a freelance profile to test entrepreneurial waters",
        "Revamped old projects (Dudoo, weather app) to reflect my improved skills",
        "Started learning AWS certifications, LLM/ML integration, and modern AI tools",
        "Learning Spanish and practicing Korean while traveling for photography",
        "Exploring the intersection of technology, design psychology, and user behavior"
      ],
      impact: "This break reminded me why I fell in love with coding in the first place. It's not just about solving business problems — it's about building things that genuinely improve people's lives and bringing creative ideas to life through technology."
    }
  },
]

const strengths = [
  {
    icon: Zap,
    title: "Fast learner with a builder's mindset",
    description: "I don't just learn theory — I build things to understand them"
  },
  {
    icon: TrendingUp,
    title: "Analytical thinker with creative instincts",
    description: "Data-driven decisions with an eye for design and user experience"
  },
  {
    icon: Target,
    title: "Finisher — not just a starter",
    description: "I deliver quickly without sacrificing quality, knowing when to polish and when to ship"
  },
  {
    icon: Users,
    title: "Communicates tech to non-tech folks",
    description: "Bridge builder between technical complexity and business outcomes"
  },
  {
    icon: Brain,
    title: "Calm under pressure",
    description: "Years of debugging production issues taught me to stay focused when things break"
  }
]

const technicalSkills = {
  "Frontend": {
    icon: Palette,
    skills: ["React.js", "Vue.js", "Next.js", "TailwindCSS", "Framer Motion", "Capacitor"],
    focus: "Animations, responsiveness, accessibility, mobile-native feel"
  },
  "Backend": {
    icon: Database,
    skills: ["Node.js", "NestJS", "PostgreSQL", "Prisma", "JWT", "OAuth"],
    focus: "Scalable APIs, secure authentication, complex business logic"
  },
  "Infrastructure": {
    icon: Cloud,
    skills: ["AWS", "Terraform", "GitHub Actions", "Cloudflare", "Vercel"],
    focus: "IaC, CI/CD, serverless architectures, multi-environment deployments"
  },
  "Design & Research": {
    icon: Figma,
    skills: ["Figma", "UX Research", "User Interviews", "Prototyping", "Digital Art"],
    focus: "User-centered design, emotional interfaces, visual storytelling"
  }
}

const creativeWork = [
  {
    title: "Digital Portraits",
    description: "Hand-sketched and digitally colored portraits for friends",
    emoji: "🎨"
  },
  {
    title: "UI Experiments",
    description: "Animated celebration screens, playful interactions, emotional microcopy",
    emoji: "✨"
  },
  {
    title: "Playlist Curation",
    description: "Building mood-based playlists like they're art projects",
    emoji: "🎵"
  },
  {
    title: "Video Storytelling",
    description: "Learning video editing and visual storytelling techniques",
    emoji: "🎬"
  }
]

const funFacts = [
  {
    label: "Childhood Dream",
    value: "Firefighter",
    emoji: "🚒",
    color: "text-red-500",
    bgColor: "bg-red-50 dark:bg-red-900/20",
    size: "large",
    tooltip: "Now I fight production fires instead!"
  },
  {
    label: "Current Fires",
    value: "Production bugs",
    emoji: "🐛",
    color: "text-orange-500",
    bgColor: "bg-orange-50 dark:bg-orange-900/20",
    size: "medium",
    tooltip: "The eternal battle continues..."
  },
  {
    label: "Harry Potter",
    value: "Lost count at 20",
    emoji: "📚",
    color: "text-purple-500",
    bgColor: "bg-purple-50 dark:bg-purple-900/20",
    size: "small",
    tooltip: "Always a Ravenclaw at heart"
  },
  {
    label: "Coffee Status",
    value: "Critical dependency",
    emoji: "☕",
    color: "text-amber-600",
    bgColor: "bg-amber-50 dark:bg-amber-900/20",
    size: "large",
    tooltip: "console.log('Need coffee to function')"
  },
  {
    label: "Gym Reality",
    value: "Still painful",
    emoji: "💪",
    color: "text-blue-500",
    bgColor: "bg-blue-50 dark:bg-blue-900/20",
    size: "medium",
    tooltip: "But I keep going anyway 🥲"
  },
  {
    label: "Design Process",
    value: "Until it feels right",
    emoji: "🎯",
    color: "text-pink-500",
    bgColor: "bg-pink-50 dark:bg-pink-900/20",
    size: "small",
    tooltip: "Iteration is my middle name"
  },
  {
    label: "Spotify Playlists",
    value: "Oddly specific moods",
    emoji: "🎵",
    color: "text-green-500",
    bgColor: "bg-green-50 dark:bg-green-900/20",
    size: "medium",
    tooltip: "'Coding at 2AM while questioning life choices'"
  },
  {
    label: "Debugging Style",
    value: "Calm in chaos",
    emoji: "🧘‍♀️",
    color: "text-indigo-500",
    bgColor: "bg-indigo-50 dark:bg-indigo-900/20",
    size: "large",
    tooltip: "Years of production incidents = zen master"
  },
  {
    label: "Languages Learning",
    value: "Spanish + Korean",
    emoji: "🌍",
    color: "text-teal-500",
    bgColor: "bg-teal-50 dark:bg-teal-900/20",
    size: "small",
    tooltip: "Hola! 안녕하세요!"
  },
  {
    label: "Photography Mode",
    value: "Always exploring",
    emoji: "📸",
    color: "text-violet-500",
    bgColor: "bg-violet-50 dark:bg-violet-900/20",
    size: "medium",
    tooltip: "Capturing moments between debugging sessions"
  }
]

export default function About() {
  const [selectedTimelineItem, setSelectedTimelineItem] = useState<typeof timeline[0] | null>(null)

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
            <span className="gradient-text">About Me</span>
          </h1>

          {/* Quick Info */}
          <div className="flex items-center justify-center gap-6 mb-8 text-text-gray flex-wrap">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary-pink" />
              <span>Singapore</span>
            </div>
            <div className="flex items-center gap-2">
              <Code2 className="h-4 w-4 text-secondary-teal" />
              <span>Full-Stack Developer</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="h-4 w-4 text-accent-blue" />
              <span>Creative Problem Solver</span>
            </div>
          </div>

          {/* One-liner */}
          <div className="card bg-gradient-primary text-white mb-8 max-w-5xl mx-auto">
            <p className="text-sm lg:text-lg leading-relaxed font-medium">
              I&apos;m a full-stack developer who went from &quot;coding is overwhelming&quot; to building
              government-scale systems, leading product partnerships, and now exploring the
              creative intersection of technology, design, and human experience.
            </p>
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-4">
            <span className="gradient-text">Career Evolution</span>
          </h2>
          <p className="text-center text-text-gray mb-12 max-w-3xl mx-auto">
            From Game Dev Curiosity to Full-Stack Excellence — Click any phase to dive deeper
          </p>

          <div className="px-4 sm:px-6 md:px-0 space-y-6">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.6 }}
                className={`flex items-center gap-8 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
              >
                <div className="flex-1 relative">
                  <div className="absolute left-[-20px] top-1/2 -translate-y-1/2 w-3 h-3 bg-gradient-primary rounded-full md:hidden z-10">
                    <div className="absolute inset-0 bg-gradient-primary rounded-full animate-ping opacity-75"></div>
                  </div>

                  <motion.div
                    className={`card cursor-pointer hover:scale-[1.02] transition-all duration-300 ${index % 2 === 0 ? "text-left" : "text-right"
                      }`}
                    onClick={() => setSelectedTimelineItem(item)}
                    whileHover={{ y: -2 }}
                  >
                    <div className={`flex items-center gap-3 mb-3 ${index % 2 === 0 ? "" : "flex-row-reverse"}`}>
                      <span className="text-2xl">{item.icon}</span>
                      <div className={index % 2 === 0 ? "" : "text-right"}>
                        <h3 className="text-sm lg:text-xl font-bold text-primary-pink">{item.title}</h3>
                        <p className="text-xs text-secondary-teal font-semibold">{item.year}</p>
                        <p className="text-xs text-text-gray italic">{item.subtitle}</p>
                      </div>
                    </div>
                    <p className="text-sm lg:text-md text-text-gray dark:text-gray-300 leading-relaxed mb-3">
                      {item.description}
                    </p>
                    <div
                      className={`flex items-center gap-2 text-sm text-primary-pink hover:text-secondary-teal transition-colors ${index % 2 === 0 ? "justify-start" : "justify-end"
                        }`}
                    >
                      <span>Read full story</span>
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </motion.div>
                </div>

                <div className="w-4 h-4 bg-gradient-primary rounded-full flex-shrink-0 relative hidden md:block">
                  <div className="absolute inset-0 bg-gradient-primary rounded-full animate-ping opacity-75"></div>
                </div>

                <div className="flex-1 hidden md:block"></div>
              </motion.div>
            ))}
          </div>

        </motion.div>

        {/* Timeline Modal */}
        <Dialog
          open={!!selectedTimelineItem}
          onClose={() => setSelectedTimelineItem(null)}
          className="relative z-50"
        >
          <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" aria-hidden="true" />

          <div className="fixed inset-0 flex items-center justify-center p-4">
            <Dialog.Panel className="bg-white dark:bg-navy-800 rounded-xl p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              {selectedTimelineItem && (
                <>
                  {/* Modal Header */}
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <Dialog.Title className="text-3xl font-bold gradient-text mb-2 flex items-center gap-3">
                        <span className="text-4xl">{selectedTimelineItem.icon}</span>
                        {selectedTimelineItem.title}
                      </Dialog.Title>
                      <div className="flex items-center gap-4 text-text-gray">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          <span className="font-semibold">{selectedTimelineItem.fullStory.period}</span>
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => setSelectedTimelineItem(null)}
                      className="text-text-gray hover:text-primary-pink transition-colors p-2"
                    >
                      <X className="h-6 w-6" />
                    </button>
                  </div>

                  {/* Modal Content */}
                  <div className="space-y-6">
                    {/* Challenge */}
                    <div>
                      <h4 className="text-lg font-bold text-primary-pink mb-3">The Challenge</h4>
                      <p className="text-text-gray dark:text-gray-300 leading-relaxed">
                        {selectedTimelineItem.fullStory.challenge}
                      </p>
                    </div>

                    {/* Breakthrough */}
                    <div>
                      <h4 className="text-lg font-bold text-secondary-teal mb-3">The Breakthrough</h4>
                      <p className="text-text-gray dark:text-gray-300 leading-relaxed">
                        {selectedTimelineItem.fullStory.breakthrough}
                      </p>
                    </div>

                    {/* Key Learnings */}
                    <div>
                      <h4 className="text-lg font-bold text-accent-blue mb-3">Key Learnings</h4>
                      <ul className="space-y-2">
                        {selectedTimelineItem.fullStory.learnings.map((learning, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-text-gray dark:text-gray-300 leading-relaxed">
                              {learning}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Impact */}
                    <div className="bg-gradient-subtle dark:bg-navy-900/50 p-6 rounded-lg">
                      <h4 className="text-lg font-bold text-primary-pink mb-3">Lasting Impact</h4>
                      <p className="text-text-gray dark:text-gray-300 leading-relaxed italic">
                        {selectedTimelineItem.fullStory.impact}
                      </p>
                    </div>
                  </div>
                </>
              )}
            </Dialog.Panel>
          </div>
        </Dialog>

        {/* Strengths */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-4">
            <span className="gradient-text">Key Strengths</span>
          </h2>
          <p className="text-center text-text-gray mb-12">
            What I bring to the table
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {strengths.map((strength, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.6 }}
                className="card hover:scale-105 transition-transform"
              >
                <strength.icon className="h-8 w-8 text-primary-pink mb-3" />
                <h3 className="font-bold text-lg mb-2 text-primary-pink">{strength.title}</h3>
                <p className="text-text-gray dark:text-gray-300 text-sm leading-relaxed">
                  {strength.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Technical Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="gradient-text">Technical Toolbox</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Object.entries(technicalSkills).map(([category, data], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.6 }}
                className="card"
              >
                <div className="flex items-center gap-3 mb-4">
                  <data.icon className="h-6 w-6 text-secondary-teal" />
                  <h3 className="text-xl font-bold text-primary-pink">{category}</h3>
                </div>

                <div className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    {data.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-secondary-teal/10 text-secondary-teal 
                                 text-sm rounded-full border border-secondary-teal/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm text-text-gray italic">
                    Focus: {data.focus}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Creative Side */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-4">
            <span className="gradient-text">Creative Pursuits</span>
          </h2>
          <p className="text-center text-text-gray mb-12">
            How I recharge and stay inspired
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {creativeWork.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.6 }}
                className="card text-center hover:scale-105 transition-transform"
              >
                <div className="text-4xl mb-3">{item.emoji}</div>
                <h3 className="font-bold text-lg mb-2 text-primary-pink">{item.title}</h3>
                <p className="text-text-gray dark:text-gray-300 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Fun Facts */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-4">
            <span className="gradient-text">Random Facts About Me</span>
          </h2>
          <p className="text-center text-text-gray mb-12">
            The weird, wonderful, and utterly random things that make me... me
          </p>

          {/* Creative Masonry-style Layout */}
          <div className="relative">
            {/* Large Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              {funFacts.filter(fact => fact.size === 'large').map((fact, index) => (
                <motion.div
                  key={fact.label}
                  initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.6 }}
                  whileHover={{
                    scale: 1.05,
                    rotate: 2,
                    transition: { duration: 0.2 }
                  }}
                  className={`${fact.bgColor} p-6 rounded-2xl cursor-pointer transition-all duration-300 
                           hover:shadow-xl border-2 border-transparent hover:border-primary-pink/20
                           transform hover:-translate-y-1 group relative overflow-hidden`}
                  title={fact.tooltip}
                >
                  {/* Floating emoji background */}
                  <div className="absolute -top-4 -right-4 text-6xl opacity-10 group-hover:opacity-20 transition-opacity">
                    {fact.emoji}
                  </div>

                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-4xl group-hover:animate-bounce">{fact.emoji}</span>
                      <div>
                        <div className={`text-2xl font-bold ${fact.color} group-hover:scale-110 transition-transform`}>
                          {fact.value}
                        </div>
                        <div className="text-sm font-medium text-text-gray">{fact.label}</div>
                      </div>
                    </div>
                  </div>

                  {/* Hover tooltip */}
                  <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="text-xs text-text-gray italic">
                      💭 {fact.tooltip}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Medium Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
              {funFacts.filter(fact => fact.size === 'medium').map((fact, index) => (
                <motion.div
                  key={fact.label}
                  initial={{ opacity: 0, scale: 0.8, rotate: 3 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ delay: 0.2 + 0.1 * index, duration: 0.6 }}
                  whileHover={{
                    scale: 1.1,
                    rotate: -2,
                    transition: { duration: 0.2 }
                  }}
                  className={`${fact.bgColor} p-4 rounded-xl cursor-pointer transition-all duration-300
                           hover:shadow-lg border border-transparent hover:border-secondary-teal/30
                           transform hover:-translate-y-2 group relative`}
                  title={fact.tooltip}
                >
                  <div className="text-center">
                    <div className="text-3xl mb-2 group-hover:animate-pulse">{fact.emoji}</div>
                    <div className={`text-lg font-bold ${fact.color} mb-1 group-hover:scale-105 transition-transform`}>
                      {fact.value}
                    </div>
                    <div className="text-xs font-medium text-text-gray">{fact.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Small Cards - Scattered */}
            <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
              {funFacts.filter(fact => fact.size === 'small').map((fact, index) => (
                <motion.div
                  key={fact.label}
                  initial={{
                    opacity: 0,
                    scale: 0.5,
                    rotate: Math.random() * 20 - 10
                  }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ delay: 0.4 + 0.1 * index, duration: 0.6 }}
                  whileHover={{
                    scale: 1.15,
                    rotate: Math.random() * 10 - 5,
                    transition: { duration: 0.2 }
                  }}
                  className={`${fact.bgColor} p-3 rounded-lg cursor-pointer transition-all duration-300
                           hover:shadow-md border border-transparent hover:border-accent-blue/30
                           transform hover:-translate-y-1 group text-center relative`}
                  title={fact.tooltip}
                >
                  <div className="text-2xl mb-1 group-hover:animate-spin">{fact.emoji}</div>
                  <div className={`text-sm font-bold ${fact.color} mb-1 group-hover:scale-110 transition-transform`}>
                    {fact.value}
                  </div>
                  <div className="text-xs font-medium text-text-gray leading-tight">{fact.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Floating Action Hint */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="text-center mt-8"
            >
              <p className="text-sm text-text-gray italic">
                💡 Hover over the cards for extra context and easter eggs!
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="card bg-gradient-primary text-white text-center"
        >
          <h3 className="text-2xl font-bold mb-6">What This Journey Taught Me</h3>
          <div className="text-left max-w-4xl mx-auto space-y-4 text-lg leading-relaxed">
            <p>
              <strong>Confidence comes from doing, not knowing everything upfront.</strong> That Apple
              internship taught me that I didn&apos;t need to be the smartest person in the room — I just
              needed to be willing to figure things out and make them work.
            </p>
            <p>
              <strong>Government work teaches you what &apos;scale&apos; really means.</strong> When thousands
              of people depend on your code working perfectly, you learn to think differently about
              testing, edge cases, and the responsibility that comes with shipping software.
            </p>
            <p>
              <strong>Being in small teams teaches you to wear many hats.</strong> At GovRewards,
              sitting in pitch meetings and influencing product roadmaps taught me that great developers
              also need to understand business context and user needs.
            </p>
            <p>
              <strong>Career breaks are underrated.</strong> Stepping away gave me space to explore
              what I actually want to build, not just what I&apos;m assigned to build. Sometimes the best
              career move is taking time to remember why you started coding in the first place.
            </p>
            <p>
              <strong>Learning never stops, but now it&apos;s fun.</strong> Whether it&apos;s Spanish, photography,
              or the latest AI models — I&apos;ve learned that curiosity is a superpower, and the skills
              you pick up &apos;for fun&apos; often become your biggest advantages.
            </p>
          </div>
        </motion.div>
      </div>
    </main>
  )
}