import { DrivingPrinciple, PersonalInterest, ProfessionalExperience, QuickFact, SkillCategory } from "@/types/about.type";
import { Rocket, Users, Lightbulb, Camera, Globe, Music, Book } from "lucide-react";

const quickFacts: QuickFact[] = [
    { icon: "💻", text: "7+ years in full-stack development" },
    { icon: "☁️", text: "Studying AWS, DevOps & AI tools" },
    { icon: "📸", text: "Travel photography is my slow joy" },
    { icon: "🗣️", text: "Learning Korean & Spanish — one drama or dish at a time" },
    { icon: "☕", text: "Flat white + Latte. Always." },
    { icon: "💡", text: "Love building tech that truly helps people" }
];

const professionalJourney: ProfessionalExperience[] = [
    {
        period: "2024 – Present",
        title: "Independent Developer",
        company: "Freelance & Personal Projects",
        type: "Career Break & Freelance",
        description:
            "Stepping back to realign my goals, sharpen my skills, and explore what’s next. Currently building end-to-end apps, delivering freelance projects, and diving into AWS, DevOps, and AI tooling.",
        achievements: [
            "Designed and built *Habitly*, a gamified habit tracker (React, Node.js, AWS, Terraform)",
            "Delivered responsive freelance landing pages using React and Tailwind CSS",
            "Explored AI agents and cloud-native tooling as part of AWS certification prep",
            "Maintaining an active GitHub with cloud infrastructure demos and technical write-ups"
        ],
        technologies: [
            "React", "Node.js", "Tailwind", "Capacitor", "PostgreSQL",
            "Prisma", "Terraform", "AWS", "OpenAI"
        ],
        color: "from-primary-pink to-accent-blue",
        icon: "🚀",
        mood: "Exploration & Growth"
    },
    {
        period: "2019 – 2024",
        title: "Software Engineer",
        company: "GovTech Singapore",
        type: "GovTech",
        description: [
            "Worked across multiple national platforms — spanning full-stack development, BI enablement, DevOps automation, and stakeholder engagement:",
            "• Built and maintained features in a microservices-based system using Vue.js, Node.js, and Java. Supported test automation, CI/CD pipelines, and production issue resolution.",
            "• Developed SQL queries and Power BI dashboards to help internal teams generate monthly and quarterly reports independently.",
            "• Built backend APIs (NestJS, AWS, PostgreSQL) for a public-facing platform and contributed to client onboarding workflows and support communication."
        ],
        achievements: [
            "Contributed end-to-end to frontend and backend development across several internal systems",
            "Streamlined internal reporting by building intuitive Power BI dashboards from raw data",
            "Supported CI/CD setup and QA processes using GitLab CI, GoCD, and Cucumber",
            "Collaborated with BAs and stakeholders to refine technical stories and implementation details",
            "Handled technical support duties and coordinated fixes for real-world production issues"
        ],
        technologies: [
            "Vue.js", "Node.js", "NestJS", "PostgreSQL", "Power BI",
            "Terraform", "AWS", "Jest", "GitLab CI"
        ],
        color: "from-secondary-teal to-green-500",
        icon: "🏛️",
        mood: "Versatile Contributor"
    },
    {
        period: "2018 – 2019",
        title: "Programmer Analyst",
        company: "BNP Paribas (via Cognizant)",
        type: "Early Career",
        description:
            "Worked on a legacy platform modernization project in a corporate banking environment. Focused on frontend migration and gained exposure to Java-based backend architecture.",
        achievements: [
            "Led Angular 2.0 migration from legacy JSP platform",
            "Successfully delivered working MVP within project timeline",
            "Completed comprehensive Cognizant Java/J2EE training program",
            "Collaborated with cross-functional teams in enterprise environment"
        ],
        technologies: ["Angular", "Java", "Spring", "JSP"],
        color: "from-amber-500 to-orange-500",
        icon: "🏦",
        mood: "Learning & Delivering"
    },
    {
        period: "2017",
        title: "Software Intern",
        company: "Apple Singapore",
        type: "Early Career",
        description:
            "Joined the supply chain tools team to automate internal reporting workflows. Focused on scripting, process improvement, and dashboard templating.",

        achievements: [
            "Automated weekly reporting tasks using AppleScript, JavaScript, and Excel macros",
            "Created reusable dashboard templates to simplify manual workflows",
            "Reduced internal reporting effort by over 20 hours per week",
            "Gained first exposure to tech development within a global enterprise"
        ],
        technologies: ["AppleScript", "JavaScript", "Excel VBA"],
        color: "from-gray-500 to-slate-500",
        icon: "🍎",
        mood: "First Tech Exposure"
    }
];

const skillCategories: SkillCategory[] = [
    {
        title: "Technical Foundations",
        icon: Rocket,
        color: "text-primary-pink",
        bgColor: "bg-pink-50 dark:bg-pink-900/20",
        skills: [
            { name: "Full-Stack Architecture", level: 90, description: "Comfortable building across frontend, backend, and database layers" },
            { name: "React & Next.js", level: 85, description: "Focus on clean, responsive, and accessible UIs" },
            { name: "Node.js & APIs", level: 85, description: "Enjoy building reliable, maintainable APIs and services" },
            {
                name: "AWS & DevOps", level: 75, description: "Hands-on with AWS core services, Terraform, and CI/CD; currently deepening cloud expertise"
            }
        ]
    },
    {
        title: "People & Product Collaboration",
        icon: Users,
        color: "text-accent-blue",
        bgColor: "bg-blue-50 dark:bg-blue-900/20",
        skills: [
            { name: "Cross-Team Collaboration", level: 85, description: "Work well with QA, BAs, designers, and infra teams to get things shipped" },
            { name: "Product Thinking", level: 80, description: "Naturally consider usability, feedback, and goals while building features" },
            { name: "Stakeholder Communication", level: 85, description: "Comfortable discussing technical trade-offs and updates with non-technical stakeholders" },
            { name: "Documentation & Handoff", level: 80, description: "Believe in writing things down — for clarity, continuity, and collaboration" }
        ]
    },
    {
        title: "Problem-Solving & Curiosity",
        icon: Lightbulb,
        color: "text-secondary-teal",
        bgColor: "bg-teal-50 dark:bg-teal-900/20",
        skills: [
            { name: "System Design", level: 75, description: "Understanding core patterns and trade-offs; currently improving depth and clarity" },
            { name: "Performance Debugging", level: 75, description: "Can troubleshoot and profile issues across the stack" },
            { name: "UX Awareness", level: 70, description: "Care about how things feel to real users; try to build intuitive, clean interfaces" },
            { name: "Creative Integration", level: 80, description: "Enjoy combining tools and features in thoughtful, sometimes unexpected ways" }
        ]
    }
];


const personalInterests: PersonalInterest[] = [
    {
      icon: Camera,
      title: "Quiet Gallery",
      description: "Photos and drawings that capture how things felt, not just how they looked",
      color: "text-primary-pink",
      bgColor: "bg-pink-50 dark:bg-pink-900/20",
      details: "I take photos when something makes me pause — a shadow, a stranger’s shoes, a street I don’t want to leave. I draw when I can’t find words.",
      link: "/gallery"
    },
    // {
    //   icon: Globe,
    //   title: "Off Routes",
    //   description: "I travel for stillness, not the itinerary",
    //   color: "text-blue-700",
    //   bgColor: "bg-blue-50 dark:bg-blue-900/20",
    //   details: "My favorite places are the ones that slowed me down. Sometimes I share maps, sometimes moments, sometimes just what the weather felt like.",
    //   link: "/offroutes"
    // },
    {
        icon: Music,
        title: "Slow Pulse",
        description: "A playlist for quiet resets and emotional breathing room",
        color: "text-amber-600",
        bgColor: "bg-amber-50 dark:bg-amber-900/20",
        details: "Soft, soul-soothing songs I turn to when I need to slow down, reflect, or just feel. 'Slow Pulse' is my sonic safe space.",
        link: "https://open.spotify.com/playlist/6YNQThiuPydf1827HTyZX3?si=1e9a29b6dc354c34"
      },
          {
      icon: Book,
      title: "Quiet Reads",
      description: "Books that moved me, slowed me down, or helped me see clearer",
      color: "text-secondary-teal",
      bgColor: "bg-teal-50 dark:bg-teal-900/20",
      details: "I’ve started collecting the ones that stayed with me — whether I finished them or not. Reflections, maybe.",
      link: "https://www.notion.so/2227e8ab80ff81118d26db2c4cc74988?v=2227e8ab80ff8186849a000c2a55bef1&source=copy_link"
    },
    {
      icon: Globe,
      title: "Language Loops",
      description: "Spanish and Korean — still learning, still forgetting, still coming back",
      color: "text-accent-blue",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      details: "Currently on a Duolingo streak. I can order food, say basic compliments, and make a few grammar mistakes proudly.",
      link: "https://invite.duolingo.com/BDHTZTB5CWWKTB5WTEFBHUJQOY"
    }
  ];
  

const drivingPrinciples: DrivingPrinciple[] = [
    {
        icon: "🎯",
        title: "Purpose-Driven Technology",
        description: "Building tools that solve real problems and improve lives, not just showcase technical skills."
    },
    {
        icon: "🌉",
        title: "Bridge Builder",
        description: "Connecting technical complexity with business needs, helping teams understand each other."
    },
    {
        icon: "📈",
        title: "Growth Through Challenge",
        description: "Confidence comes from tackling meaningful problems, not avoiding difficult ones."
    },
    {
        icon: "✨",
        title: "Simplicity from Complexity",
        description: "Handling the hard stuff behind the scenes to create effortless user experiences."
    }
];

export {
    quickFacts,
    professionalJourney,
    skillCategories,
    personalInterests,
    drivingPrinciples
}