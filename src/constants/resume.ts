import {
  Clock, Users, Target, Building, Code, Briefcase
} from "lucide-react"

export const quickStats = [
  {
    icon: Clock,
    label: "Years of Experience",
    value: "7+",
    color: "text-primary-pink"
  },
  {
    icon: Building,
    label: "Live Applications",
    value: "10+",
    color: "text-secondary-teal"
  },
  {
    icon: Users,
    label: "Project Scale",
    value: "Nationwide",
    color: "text-accent-blue"
  },
  {
    icon: Target,
    label: "Specialization",
    value: "Full-Stack",
    color: "text-purple-500"
  }
]

export const highlights = [
  {
    year: "2025",
    achievement: "Launched Habitly - A gamified habit tracking application",
    tech: "React, NestJS, AWS, Terraform, PostgreSQL",
    impact: "Production-grade app with CI/CD, mobile deployment, and 50+ active users running at 99.9% uptime"
  },
  {
    year: "2024",
    achievement: "Key Contributor to GovRewards, a public-facing rewards platform",
    tech: "NestJS, PostgreSQL, CI/CD, AWS",
    impact: "Onboarded major agencies and scaled platform to 5,000+ users; shaped product direction through direct client input"
  },
  {
    year: "2020",
    achievement: "Sole Frontend Contributor for award-winning COVID-19 dashboard",
    tech: "React, GraphQL",
    impact: "Built under time pressure from COVID-19 pandemic for real-time dormitory outbreak tracking — awarded GovTech Impact Award 2020"
  },
  {
    year: "2019-2023",
    achievement: "Founding Engineer on MOM Work Pass Portal",
    tech: "Vue.js, Node.js, Microservices, Power BI",
    impact: "Contributed across engineering, QA, DevOps, and BI; Launched platform used by 1M+ users for work pass applications and appeals."
  }
]

export const keyStrengths = [
  {
    icon: Code,
    title: "Technical Expertise",
    description: "Full-stack development with modern frameworks and cloud infrastructure"
  },
  {
    icon: Briefcase,
    title: "Enterprise Experience",
    description: "Nation-wide applications with strict security and compliance requirements"
  },
  {
    icon: Target,
    title: "Product Mindset",
    description: "Focus on user experience and business value, not just technical implementation"
  },
  {
    icon: Users,
    title: "Stakeholder Management",
    description: "Experience bridging technical and business teams in complex organizations"
  }
]

export const technicalSkills = {
  "Frontend": [
    "React", "Next.js", "Vue.js", "Angular", "TypeScript", "Tailwind CSS"
  ],
  "Backend": [
    "Node.js", "NestJS", "Java", "GraphQL", "PostgreSQL", "Redis", "Microservices"
  ],
  "Cloud & DevOps": [
    "AWS", "Terraform", "Docker", "CI/CD", "GitHub Actions", "GoCD", "ArgoCD"
  ],
  "Others": [
    "Power BI", "RabbitMQ", "BullMQ", "System Design", "Python", "Figma", "Notion"
  ]
} 