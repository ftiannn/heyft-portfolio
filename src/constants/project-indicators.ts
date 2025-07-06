import { Zap, Brain, Rocket, Building, GraduationCap, User, Briefcase, Globe } from "lucide-react"

export const complexityConfig = {
  Simple: {
    icon: Zap,
    color: "text-secondary-teal",
    bg: "bg-teal-50 border-teal-100",
    label: "Simple"
  },
  Moderate: {
    icon: Brain,
    color: "text-accent-blue",
    bg: "bg-blue-50 border-blue-100",
    label: "Moderate"
  },
  Complex: {
    icon: Rocket,
    color: "text-primary-pink",
    bg: "bg-pink-50 border-pink-100",
    label: "Complex"
  },
  Enterprise: {
    icon: Building,
    color: "text-dark-navy",
    bg: "bg-navy-800/10 border-navy-800/20",
    label: "Enterprise"
  }
} as const

export const impactConfig = {
  Learning: {
    icon: GraduationCap,
    color: "text-accent-blue",
    label: "Learning"
  },
  Personal: {
    icon: User,
    color: "text-secondary-teal",
    label: "Personal"
  },
  Professional: {
    icon: Briefcase,
    color: "text-primary-pink",
    label: "Professional"
  },
  Production: {
    icon: Globe,
    color: "text-secondary-teal",
    label: "Production"
  }
} as const 