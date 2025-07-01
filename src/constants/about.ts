import { DrivingPrinciple, PersonalInterest, ProfessionalExperience, QuickFact, SkillCategory } from "@/types/about.type";
import { Rocket, Users, Lightbulb, Camera, Globe, Music, Book } from "lucide-react";

const quickFacts: QuickFact[] = [
    { icon: "💻", text: "7+ years in full-stack development" },
    { icon: "👨‍💻", text: "Currently freelancing and building personal projects" },
    { icon: "🎨", text: "Advocate for clean, responsive, and accessible UIs" },
    { icon: "📸", text: "Travel photography is my passion" },
    { icon: "🗣️", text: "Learning Korean & Spanish — one drama or dish at a time" },
    { icon: "☕", text: "Flat white + Latte. I love good coffees" },
    { icon: "📚", text: "Always learning — currently diving into AWS, DevOps, and LLMs" },
    { icon: "💡", text: "Love building tech that truly helps people" }
];

const professionalJourney: ProfessionalExperience[] = [
    {
        period: "2025 – Present",
        title: "Independent Developer",
        company: "Freelance & Personal Projects",
        type: "Freelance",
        description:
            "Stepping back to reflect on my goals and sharpen my skills. Currently building end-to-end applications and working on freelance projects. I am also picking up AWS, DevOps, and LLM applications during my downtime.",
        achievements: [
            "Designed and built Habitly, a gamified habit tracker (React, Node.js, AWS, Terraform)",
            "Delivered responsive freelance landing pages using React and Tailwind CSS",
            "Explored AI agents and cloud-native tooling as part of AWS certification prep",
            "Maintained an active GitHub with cloud infrastructure demos and technical write-ups"
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
        type: "Full Stack",
        description: [
            "Worked across multiple national platforms — spanning full-stack development, Business Intelligence solutions, DevOps automation, and stakeholder engagement:",
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
            "Worked with cross-functional teams in an enterprise environment"
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
        title: "Technical Skills",
        icon: Rocket,
        color: "text-primary-pink",
        bgColor: "bg-pink-50 dark:bg-pink-900/20",
        skills: [
            { name: "Full-Stack Architecture", level: 90, description: "End-to-end ownership across frontend, backend, and database layers." },
            {
                name: "React & Next.js", level: 85, description: "Builds performant, accessible interfaces that bring product visions to life."
            },
            {
                name: "Node.js & APIs", level: 85, description: "Delivers robust service layers with reliability and maintainability top of mind.",
            },
            {
                name: "AWS & DevOps", level: 75, description: "Hands-on with AWS core services, Terraform, and CI/CD—enabling streamlined deployment pipelines."
            }
        ]
    },
    {
        title: "Product Focus",
        icon: Users,
        color: "text-accent-blue",
        bgColor: "bg-blue-50 dark:bg-blue-900/20",
        skills: [
            { name: "Cross-Team Collaboration", level: 85, description: "Extensive collaboration with QA, BAs, designers, and infrastructure teams to ship products." },
            { name: "Product Thinking", level: 80, description: "Driving high-impact feature development in alignment with product vision and goals." },
            { name: "Stakeholder Communication", level: 85, description: "Bridging the gap and navigating ambiguity between technical and business stakeholders." },
            { name: "Documentation & Handoff", level: 80, description: "Clear documentation of work for greater clarity and ease of collaboration." }
        ]
    },
    {
        title: "Problem-Solving",
        icon: Lightbulb,
        color: "text-secondary-teal",
        bgColor: "bg-teal-50 dark:bg-teal-900/20",
        skills: [
            { name: "System Design", level: 75, description: "Understanding core patterns and trade-offs; currently improving depth and clarity." },
            { name: "Performance Debugging", level: 75, description: "Troubleshooting issues to ensure stability across the stack." },
            { name: "UX Awareness", level: 70, description: "Advocates for intuitive user experience in building clean interfaces." },
            { name: "Creative Integration", level: 80, description: "Combining tools and features in thoughtful and engaging ways." }
        ]
    }
];


const personalInterests: PersonalInterest[] = [
    {
        icon: Camera,
        title: "Quiet Gallery",
        description: "Capturing moments that make me pause",
        color: "text-primary-pink",
        bgColor: "bg-pink-50 dark:bg-pink-900/20",
        details: "I take photos of the places I visit, the people I meet, and the moments that make me stop and think. It’s my way of slowing down and appreciating the world.",
        link: "/gallery"
    },
    {
        icon: Music,
        title: "Slow Pulse Playlist",
        description: "A soundtrack for slowing down",
        color: "text-amber-600",
        bgColor: "bg-amber-50 dark:bg-amber-900/20",
        details: "A collection of songs that help me unwind, reflect, and find calm in the chaos. It’s a mix of genres that resonate with my mood.",
        link: "https://open.spotify.com/playlist/6YNQThiuPydf1827HTyZX3?si=1e9a29b6dc354c34"
    },
    {
        icon: Book,
        title: "My Bookshelf",
        description: "Books that moved me, slowed me down, or helped me see clearer",
        color: "text-secondary-teal",
        bgColor: "bg-teal-50 dark:bg-teal-900/20",
        details: "I’ve started collecting the ones that stayed with me. Books that changed my perspective, made me think, or simply entertained me. It’s a work in progress.",
        link: "https://www.notion.so/2227e8ab80ff81118d26db2c4cc74988?v=2227e8ab80ff8186849a000c2a55bef1&source=copy_link"
    },
    {
        icon: Globe,
        title: "Language Flex",
        description: "Just to show off my duolingo streak",
        color: "text-accent-blue",
        bgColor: "bg-blue-50 dark:bg-blue-900/20",
        details: "Learning Spanish and Korean on Duolingo. I can order food in both languages, but still working on grammar and conversation skills. It’s a fun challenge that keeps my brain active. Maybe one day I'll take the certification tests!",
        link: "https://invite.duolingo.com/BDHTZTB5CWWKTB5WTEFBHUJQOY"
    }
];


const drivingPrinciples: DrivingPrinciple[] = [
    {
        icon: "🎯",
        title: "Purpose-Driven Technology",
        description: "Build with intentions to solve real problems and create genuine impact."
    },
    {
        icon: "🌉",
        title: "Bridge Builder",
        description: "Connecting technical complexity with business needs with clarity and empathy."
    },
    {
        icon: "📈",
        title: "Growth Through Challenge",
        description: "Strong believer that growth happens when we lean into hard problems."
    },
    {
        icon: "✨",
        title: "Simplicity from Complexity",
        description: "Great experiences feel simple because someone handled the complexity with care. I aim to be that someone."
    }
];

export {
    quickFacts,
    professionalJourney,
    skillCategories,
    personalInterests,
    drivingPrinciples
}