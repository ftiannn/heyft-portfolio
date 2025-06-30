import { Project, ProjectCategory, ProjectStatus } from "@/types/projects.type";

export const projects: Project[] = [
    {
        id: 1,
        title: "🏆 Habitly",
        slug: "habitly",
        tagline: "Habit tracking app",
        description: "A cross-platform habit tracker built to support users with empathy and positive reinforcement.",
        details: [
            {
                heading: "Project background",
                content: [
                    "Habitly was built during a career break as a passion project that combined my love for design, systems thinking, and emotional wellness.",
                    "I wanted to build something that people would actually enjoy using daily—without the guilt-tripping so common in productivity apps."
                ]
            },
            {
                heading: "What makes it special",
                content: [
                    "Built with React, Vite, and Capacitor to support both web and native mobile platforms seamlessly",
                    "Deployed frontend to AWS S3 with custom domain and secure HTTPS",
                    "Gamified the experience with streaks, mood tracking, and dynamic celebration animations",
                    "Provisioned full AWS infrastructure using Terraform with automated CI/CD pipelines",
                    "Implemented secure authentication using Google OAuth and JWT tokens",
                    "Designed with mobile-first styling, fluid animations, and deep linking for native navigation"
                ]
            },
            {
                heading: "The design process",
                content: [
                    "I built this because I was tired of habit apps that made me feel guilty. Sometimes you need an app that celebrates small wins and doesn't shame you for being human.",
                    "The real time sink was refining the experience and tone—everything from animations to button labels were tested to avoid feeling too robotic or clinical."
                ]
            },
            {
                heading: "Current status",
                content: [
                    "Live on web and mobile (PWA), currently used by public users and friends to build daily habits.",
                    "Actively maintained with plans for onboarding improvements and better data visualization."
                ]
            }
        ],
        image: "/api/placeholder/600/400",
        stack: [
            "React", "Vite", "Capacitor", "Node.js", "NestJS",
            "PostgreSQL", "Prisma", "AWS",
            "Terraform", "GitHub Actions"
        ],
        github: "https://github.com/ftiannn/habitly",
        demo: "https://app.myhabitly.com",
        category: "Featured",
        status: "Live",
        featured: true,
        complexity: "Complex",
        impact: "Production",
        timeInvested: "3 months",
        lessonsLearned: "Involving real users early—even in the design phase—made a huge difference. Their feedback helped shape both UX decisions and feature priorities. I also learned how much discipline Terraform requires for stable, repeatable deployments.",
        wouldBuildAgain: "Absolutely. Next time, I'd invest even earlier in observability and structured user onboarding, and continue building with feedback loops from day one.",
        metrics: {
            "Launch": "June 2025",
            "Status": "Recently launched",
            "Users": "Early testers only"
        },
        year: "2025",
        teamSize: "Solo Project",
        role: "Full-stack Developer, UX Researcher",
        tags: ["gamified", "mobile-first", "serverless"],
        designTools: ["Figma"],
        videoDemo: "https://docs.google.com/presentation/d/...",
    },
    {
        id: 2,
        title: "🏋️‍♂️ Fitness Coach Portfolio",
        tagline: "Clean, responsive site for a personal fitness coach",
        description: "A responsive website with client showcase, built to convert visitors into loyal clients.",
        details: [
            {
                heading: "Scope & Goal",
                content: [
                    "Developed a clean, professional site to showcase services, testimonials, and clear calls-to-action.",
                    "Primary goals: increase conversions for PT services."
                ]
            },
            {
                heading: "Key Features",
                content: [
                    "Service pages with pricing tiers and booking links",
                    "Client testimonials and success stories prominently displayed",
                    "Optimized for SEO to improve local search visibility"
                ]
            },
            {
                heading: "Design & Prototype",
                content: [
                    "Interactive Figma prototype validated before development",
                    "Responsive first, with fluid layouts optimized from mobile to desktop",
                    "Color palette and typography selected to match PT's personal branding"
                ]
            },
            {
                heading: "Technical implementation",
                content: [
                    "Built with Next.js, TailwindCSS, and TypeScript for modern maintainable code",
                    "Deployed on Vercel with continuous deployment pipelines",
                    "Fast, optimized delivery with image and SEO enhancements"
                ]
            }
        ],
        image: "/api/placeholder/600/400",
        stack: ["Next.js", "React", "TailwindCSS", "TypeScript", "Vercel"],
        github: "#",
        demo: "https://www.ptperdipkumar.com/",
        category: "Professional",
        status: "Live",
        featured: true,
        complexity: "Simple",
        impact: "Professional",
        timeInvested: "2 weeks",
        lessonsLearned: "Hands-on feedback from the client and early user sessions underscored the importance of clarity in calls-to-action and booking flows.",
        wouldBuildAgain: "Yes — in a future version I'd include analytics to track conversions, A/B test scheduling copy, and add a client dashboard.",
        isClientWork: true,
        metrics: {
            "Page Load Time": "< 1s",
            "Client Satisfaction": "✅ Delivered"
        },
        teamSize: "Solo Project",
        role: "Frontend Developer, and Designer",
        year: "2025",
        tags: ["corporate-site", "marketing", "client-work"],
        designTools: ["Figma"]
    },
    {
        id: 3,
        title: "💎 This Personal Portfolio",
        tagline: "A curated window into my work, personality, and growth",
        description: "The website you're looking at - a reflection of my technical capabilities and creative identity",
        details: [
            {
                heading: "Purpose",
                content: [
                    "Created to consolidate my technical work, design interests, and career journey into one cohesive, responsive site.",
                    "Also serves as a living document of my current capabilities and growth areas."
                ]
            },
            {
                heading: "Highlights",
                content: [
                    "Project cards with tech stack, role, and key lessons",
                    "Tag-based filtering to explore by type or purpose",
                    "Detailed write-ups to showcase thinking behind the work"
                ]
            },
            {
                heading: "Design Process",
                content: [
                    "Researched modern portfolio layouts and design patterns before tailoring the structure to reflect my goals and voice.",
                    "Prioritized clarity, consistency, and accessibility across light/dark modes.",
                    "Color choices and microcopy reflect a slightly cheeky but warm tone, to sound more like me"
                ]
            },
            {
                heading: "Technical Overview",
                content: [
                    "Built with Next.js App Router and TailwindCSS",
                    "Deployed on Vercel with GitHub-integrated CI",
                    "SEO and performance optimized for fast loads and visibility",
                    "Scalable and modular project structure for easy additions"
                ]
            }
        ],
        image: "/api/placeholder/600/400",
        stack: ["Next.js", "React", "TailwindCSS", "TypeScript", "Framer Motion"],
        github: "https://github.com/ftiannn/heyft-portfolio",
        demo: "https://heyft.com",
        category: "Featured",
        status: "Live",
        featured: true,
        complexity: "Moderate",
        impact: "Professional",
        timeInvested: "2.5 weeks",
        lessonsLearned: "Showcasing yourself is harder than it seems — the challenge was balancing tone, content, and UI to feel authentic yet polished.",
        wouldBuildAgain: "Yes. I'd automate content updates via CMS or MDX, and eventually expand it into a mini design/dev playground.",
        metrics: {
            "Lines of Code": "Between 100 and existential crisis",
            "Build Time": "Shorter than my career crisis",
            "Performance Score": "Fast enough to beat hesitation",
            "Dark Mode": "Enabled — by moral obligation",
            "Pride": "Immeasurable"
        },
        year: "2025",
        teamSize: "Solo",
        role: "Designer, Developer, Storyteller",
        tags: ["branding", "dark-mode", "developer-portfolio", "personal-site"],
    },
    {
        id: 4,
        title: "🚨 Dudoo",
        tagline: "Task management with a modern frontend twist",
        description: "A task management app created as a frontend learning exercise, with a focus on interactive design and user engagement.",
        details: [
            {
                heading: "The Why",
                content: [
                    "Built to explore frontend fundamentals using Angular",
                    "The name 'Dudoo' is a playful spin on 'To-Do' — because productivity apps don't always have to sound serious.",
                    "I wanted to build something simple, fast, and reliable with a clean UI",
                ]
            },
            {
                heading: "Features",
                content: [
                    "Add, delete, and mark tasks as complete",
                    "Task categorisation and category management",
                    "Persistent local storage to save your list across sessions",
                    "Responsive and mobile-friendly layout"
                ]
            },
            {
                heading: "Tech Stack",
                content: [
                    "Built with Angular",
                    "Deployed via GitHub Pages"
                ]
            },
            {
                heading: "Reflections",
                content: [
                    "Angular was my first frontend framework — this project was my way of revisiting it after years of React and Vue.",
                    "What started as a basic to-do app got a cute facelift when I decided to breathe new life into it.",
                    "Turns out, revamping an old project is just as satisfying as completing a new one — but with more design drama and fewer bugs."
                ]
            }
        ],
        image: "/api/placeholder/600/400",
        stack: ["Angular", "TypeScript", "GitHub Pages"],
        github: "https://github.com/ftiannn/dudoo",
        demo: "https://ftiannn.github.io/dudoo/",
        category: "Fun",
        status: "Complete",
        featured: false,
        complexity: "Simple",
        impact: "Personal",
        timeInvested: "Weekend project",
        lessonsLearned: "Frameworks shape how you think — Angular helped me rethink component structure and app flow.",
        wouldBuildAgain: "Yes, especially with more complex task grouping and animations.",
        metrics: {
            "Version": "2.0 — complete visual refresh",
            "Time Invested": "1 week + design polish weekend",
        },
        year: "2023 (original) / 2025(revamp)",
        teamSize: "Solo",
        role: "Frontend Developer",
        tags: ["task-management", "animations", "revamp", "fun-project"],
        videoDemo: "",
    },
    {
        id: 5,
        title: "🚗 Valet Parking System",
        tagline: "A car parking simulation powered by plain text and pure logic",
        description: "Built as a backend logic challenge, this project simulates car check-in/check-out in a valet parking system — with everything stored in plain `.txt` files.",
        details: [
            {
                heading: "The Why",
                content: [
                    "Created to test backend logic under constraints — no database, no frameworks, just file manipulation and TypeScript.",
                    "Aimed to simulate a real-world scenario with check-in, check-out, and fee calculation workflows."
                ]
            },
            {
                heading: "Features",
                content: [
                    "CLI-based interaction for parking operations",
                    "File-based state management with separate logs for check-in and check-out",
                    "Dynamic fee calculation based on entry/exit time",
                    "Plate number tracking with timestamps",
                    "Custom rate configuration for parking logic"
                ]
            },
            {
                heading: "Technical Highlights",
                content: [
                    "Written in TypeScript using `readline-sync` for CLI input",
                    "Uses Node.js `fs` module to persist car data in plain `.txt` files",
                    "Timestamp logic to calculate total time and fee on exit",
                    "Structured and commented for clarity and maintainability"
                ]
            },
            {
                heading: "Reflections",
                content: [
                    "Simulating persistence using text files made me think deeply about state handling, data flow, and race conditions.",
                    "Surprisingly satisfying to build something so tangible without databases or web UIs.",
                    "This was less about infrastructure, more about core backend logic and problem-solving."
                ]
            }
        ],
        image: "/api/placeholder/600/400",
        stack: ["Node.js", "TypeScript", "File System"],
        github: "https://github.com/ftiannn/valet-car-parking-system",
        demo: "#",
        category: "Learning",
        status: "Complete",
        featured: false,
        complexity: "Moderate",
        impact: "Learning",
        timeInvested: "3 days",
        lessonsLearned: "Pure backend logic builds muscle memory for data flow and state tracking. Not relying on a DB makes you think twice about every read/write.",
        wouldBuildAgain: "Would love to wrap it in a REST API or even a dashboard next time.",
        metrics: {
            "Lines of Code": "500+",
            "Database": "None (by choice)",
            "Race Conditions Avoided": "Hopefully all",
            "Simulation Realism": "Good enough to confuse a valet"
        },
        year: "2020",
        teamSize: "Solo",
        role: "Backend Developer",
        tags: ["backend", "parking-system", "cli-app", "object-oriented"],
    },
    {
        id: 6,
        title: "🎓 Student Management System",
        tagline: "A clean and minimal CRUD app for managing students and results",
        description: "A Java-based Swing desktop app for managing students, subjects, and their results — featuring real-time form validation and a simple relational structure.",
        details: [
            {
                heading: "The Why",
                content: [
                    "Built to practice Java Swing, GUI design, and core object-oriented programming concepts.",
                    "Focused on making a functional and user-friendly admin panel for managing student records."
                ]
            },
            {
                heading: "Features",
                content: [
                    "Add, edit, and delete student records",
                    "Assign subjects and input marks per student",
                    "Dynamic calculation of total and average marks",
                    "Basic result classification (e.g., pass/fail)",
                    "Intuitive tab-based navigation for managing different data views"
                ]
            },
            {
                heading: "Technical Highlights",
                content: [
                    "Java with Swing for the GUI",
                    "Uses object-oriented principles for modularity",
                    "Data stored in memory using collections (no database)",
                    "Focus on clear UI layout, form validation, and clean event handling"
                ]
            },
            {
                heading: "Reflections",
                content: [
                    "Swing taught me how much design matters — aligning components manually is character-building.",
                    "Reinforced how to separate logic from UI in a desktop environment.",
                    "Good starter experience before moving to web-based frontend frameworks."
                ]
            }
        ],
        image: "/api/placeholder/600/400",
        stack: ["Java", "Spring Boot", "JPA", "MySQL", "Maven", "Postman"],
        github: "https://github.com/ftiannn/StudentManagement",
        demo: "#",
        category: "Learning",
        status: "Learning Project",
        featured: false,
        complexity: "Moderate",
        impact: "Learning",
        timeInvested: "2 weeks",
        lessonsLearned: "Enterprise Java has opinions about everything",
        wouldBuildAgain: "If I had to, I'd probably rebuild this as a web app.",
        year: "2018",
        teamSize: "Solo",
        role: "Backend Developer",
        tags: ["java", "crud", "exercise", "oop"],
        designTools: [],
    },
    {
        id: 7,
        title: "🌤️ Today's Weather",
        tagline: "Weather app that needs love",
        description: "A weather application that's crying out for a design makeover",
        details: [
            {
                heading: "Current features",
                content: [
                    "Basic weather data fetching",
                    "Location-based forecasts",
                    "Simple responsive layout",
                    "API integration with weather services"
                ]
            },
            {
                heading: "What needs work",
                content: [
                    "UI/UX design (everything)",
                    "Better data visualization",
                    "Improved mobile experience",
                    "More comprehensive weather data",
                    "Actually decent styling"
                ]
            },
            {
                heading: "Future plans",
                content: [
                    "Complete design overhaul with better color scheme",
                    "Add weather maps and radar",
                    "Implement weather alerts",
                    "Make it actually pleasant to use"
                ]
            },
            {
                content: [
                    "Status: Functional but embarrassing. On the list for a major revamp."
                ]
            },
            {
                content: [
                    "Honest assessment: It tells you the weather, but you won't want to look at it."
                ]
            }
        ],
        image: "/api/placeholder/600/400",
        stack: ["React", "JavaScript", "Weather API", "CSS3"],
        github: "https://github.com/ftiannn/todays-weather",
        demo: "https://ftiannn.github.io/todays-weather/",
        category: "Needs Love",
        status: "Needs Revamp",
        featured: false,
        complexity: "Simple",
        impact: "Personal",
        timeInvested: "1 week years ago",
        lessonsLearned: "Revisiting the basics helps sharpen intuition. Good design doesn't need complexity.",
        wouldBuildAgain: "Would add geolocation and a cleaner way to handle units (C/F).",
    },
    {
        id: 9,
        title: "🤖 LLM Playground",
        tagline: "AI experiments coming soon",
        description: "Exploring Large Language Models and AI integration",
        details: [
            {
                heading: "Planned explorations",
                content: [
                    "LLM API integrations",
                    "Prompt engineering and optimization",
                    "Building AI-powered applications",
                    "Understanding transformer architectures",
                    "Experimenting with different models"
                ]
            },
            {
                heading: "Project ideas brewing",
                content: [
                    "Code review assistant",
                    "Technical writing helper",
                    "Learning companion for developers",
                    "AI-powered debugging tools"
                ]
            },
            {
                heading: "Current status",
                content: [
                    "Research phase, lots of reading and planning."
                ]
            },
            {
                content: [
                    "The goal: Build something genuinely useful, not just another ChatGPT wrapper."
                ]
            },
            {
                content: [
                    "Timeline: Starting soon, once I finish polishing existing projects."
                ]
            }
        ],
        image: "/api/placeholder/600/400",
        stack: ["Python", "OpenAI API", "Transformers", "TensorFlow", "Coming Soon"],
        github: "#",
        demo: "#",
        category: "Coming Soon",
        status: "Planning",
        featured: false,
        complexity: "Complex",
        impact: "Learning",
        timeInvested: "Future",
        lessonsLearned: "AI is everywhere, but good AI products are rare",
        wouldBuildAgain: "Haven't built it yet!",
        year: "2025 (Hopefully!)",
        teamSize: "Solo",
        role: "Full Stack + ML Developer",
        tags: ["AI", "LLM", "transformer agents"],
    },
    {
        id: 10,
        title: "🔫 Game Project (FPS – Unreal Engine)",
        tagline: "The final-year project that fired off my love for building things",
        description: "A first-person shooter built with Unreal Engine as part of my final-year project. What started as an exploration into game mechanics became my entry point into software development.",
        details: [
            {
                heading: "The Why",
                content: [
                    "Built for my final-year project in school, with the goal of understanding game engines, physics, and immersive player experiences.",
                    "This project kickstarted my transition from game development into full-stack engineering."
                ]
            },
            {
                heading: "Gameplay & Features",
                content: [
                    "Health pickup, scoring, and UI overlay",
                    "Level design with environmental physics and collision detection"
                ]
            },
            {
                heading: "Technical Approach",
                content: [
                    "Used Blueprints and Unreal C++ for core mechanics",
                    "Leveraged Unreal Engine's built-in physics and animation systems",
                    "Iterated through level design and testing for playability"
                ]
            },
            {
                heading: "Reflections",
                content: [
                    "Unreal Engine's power is unreal — but so is the learning curve.",
                    "This was my first taste of structured programming logic, debugging hell, and the joy of 'it finally works!'",
                    "Looking back, I can laugh at the bugs… now."
                ]
            }
        ],
        image: "/api/placeholder/600/400",
        stack: ["Unreal Engine", "Blueprints", "Unreal C++"],
        github: "",
        demo: "",
        category: "Learning",
        status: "Complete",
        featured: false,
        complexity: "Complex",
        impact: "Learning",
        timeInvested: "1 year",
        lessonsLearned: "Game dev teaches discipline, precision, and how to think in systems.",
        wouldBuildAgain: "For fun — but not for a deadline again.",
        metrics: {
            "Bugs Squashed": "Countless",
            "Enemies Defeated": "I got defeated.",
            "Caffeine Consumed": "High",
            "Unreal Engine Crashes": "Several (but we made it)"
        },
        year: "2016",
        teamSize: "Team of 3",
        role: "Game Designer and Developer",
        tags: ["unreal", "fps", "game-dev", "3d"],
        designTools: ["Unreal Engine"],
        videoDemo: "https://drive.google.com/file/d/1rKOD60BC3j9qaaBD5m8i_TthQs_w6mpe/view",
    },
    {
        id: 11,
        title: "🕹️ Game Project (VR – Unity)",
        tagline: "My first steps into immersive tech — and a few walls",
        description: "A VR experience built using Unity and Google Cardboard SDK, focused on environmental interaction and immersive feedback. This project was part of my early experimentation with spatial computing and player agency.",
        details: [
            {
                heading: "The Why",
                content: [
                    "I wanted to explore how presence and motion affect the player experience — and what better way than diving into VR?",
                    "This was an experimental project that helped me understand the fundamentals of spatial design, motion input, and immersion."
                ]
            },
            {
                heading: "Technical Approach",
                content: [
                    "Developed in Unity with C# scripts for interaction logic",
                    "Created original 3D models using basic modeling tools",
                    "Used Google VR SDK for device integration",
                    "Faced hardware limitations — laptop crashed multiple times during builds"
                ]
            },
            {
                heading: "Reflections",
                content: [
                    "VR development is humbling — between modeling, motion design, and performance testing, every detail matters.",
                    "Even simple interactions require thoughtful design, especially in immersive spaces.",
                    "Lesson learned: back up often. Crashing Unity scenes don't forgive."
                ]
            }
        ],
        image: "/api/placeholder/600/400",
        stack: ["Unity", "C#", "3D Blender", "Google VR SDK"],
        github: "",
        demo: "",
        category: "Learning",
        status: "Complete",
        featured: false,
        complexity: "Complex",
        impact: "Learning",
        timeInvested: "6 months",
        lessonsLearned: "Performance constraints are real — build light, iterate fast, and smash Ctrl+S before hitting play.",
        wouldBuildAgain: "Yes — especially with latest technology!",
        metrics: {
            "Frames Missed": "More than I'd like to admit",
            "Wow Moments": "Several",
            "Motion Sickness Reports": "One (me)",
            "Creative Ideas Triggered": "Countless"
        },
        year: "2016",
        teamSize: "Team of 6",
        role: "3D Modeller, Developer",
        tags: ["vr", "unity", "game-dev", "final-year-project"],
        designTools: ["Blender", "Unity Editor"],
        videoDemo: "https://drive.google.com/file/d/0BwxJ8OfO6B2PNHhERWc1eko2OEU/view?resourcekey=0-6qWk6WFGIqArHAedvXxgdQ",
    },
    {
        id: 12,
        title: "💸 UX Prototype – Budgeting App",
        tagline: "Managing money without losing your mind",
        description: "A mobile-first budgeting app concept grounded in user research. Created to reduce financial anxiety by simplifying the way users view, track, and plan their budgets.",
        details: [
            {
                heading: "The Why",
                content: [
                    "Personal finance tools often feel overwhelming or guilt-inducing. This project started with a simple question: how might we design a budgeting experience that feels *safe*, not stressful?",
                    "It became an opportunity to apply UX methodology — from research to ideation — in a real-world context."
                ]
            },
            {
                heading: "Research Journey",
                content: [
                    "Conducted qualitative interviews with 5 participants across income levels and budgeting habits.",
                    "Identified 3 distinct personas: the Budget Avoider, the Manual Tracker, and the Guilt-Ridden Spender.",
                    "Mapped emotional pain points around guilt, inconsistency, and information overload in existing budgeting apps.",
                    "Summarized findings in a research deck to guide design decisions.",
                ]
            },
            {
                heading: "Design Process",
                content: [
                    "Synthesized research into user stories and flows.",
                    "Created low-fidelity wireframes to validate direction before building a high-fidelity Figma prototype.",
                    "Used calm colors and progressive disclosure to minimize cognitive load."
                ]
            },
            {
                heading: "Reflections",
                content: [
                    "UX research taught me that emotions drive product stickiness — people abandon tools that make them feel bad, no matter how useful they are.",
                    "This project reminded me that good design listens before it speaks."
                ]
            }
        ],
        image: "/api/placeholder/600/400",
        stack: ["Figma", "UX Research", "Wireframing", "Prototyping"],
        github: "",
        demo: "https://www.figma.com/proto/vuvEJXjJ8NAtVivp1vvKLG/Budgeting-App?node-id=480-2688&starting-point-node-id=2138%3A8005&t=zuM76ezbWdu0V5K8-1",
        category: "Learning",
        status: 'Needs Revamp',
        featured: false,
        complexity: "Simple",
        impact: "Learning",
        timeInvested: "3 weeks",
        lessonsLearned: "UX research grounds creativity in real needs — and emotional insight is just as valuable as usability testing.",
        wouldBuildAgain: "Yes — next step would be a working MVP with real users.",
        metrics: {
            "Research Interviews": "5 conducted",
            "Personas": "3 created",
            "Pain Points": "8+ emotional friction areas identified",
            "Prototype": "High-fidelity, interactive in Figma",
            "Presentation": "Full UX journey documented"
        },
        year: "2024",
        teamSize: "Solo",
        role: "UX Researcher, Designer",
        tags: ["ux", "figma", "budgeting-app", "research"],
        designTools: ["Figma"],
        slidesLink: "https://docs.google.com/presentation/d/1L9zNNnrLT9kbwBrjximdTrmGit9WxQZ1wSMeHoUf_-4/edit?usp=sharing",
    }
];

export const categories: ProjectCategory[] = ["All", "Featured", "Professional", "Learning", "Fun", "Coming Soon", "Needs Love"];

export const statusColors: Record<ProjectStatus, string> = {
    "Live": "bg-green-100 text-green-800 border-green-200",
    "In Progress": "bg-blue-100 text-blue-800 border-blue-200",
    "Complete": "bg-purple-100 text-purple-800 border-purple-200",
    "Learning Project": "bg-yellow-100 text-yellow-800 border-yellow-200",
    "Needs Revamp": "bg-orange-100 text-orange-800 border-orange-200",
    "Planning": "bg-gray-100 text-gray-800 border-gray-200"
};