import { Project, ProjectCategory, ProjectStatus } from "@/types/projects.type";

export const projects: Project[] = [
    {
        id: 1,
        title: "🏆 Habitly",
        slug: "habitly",
        "tagline": "Empathy-led tracking of daily habits",
        description: "A cross-platform habit tracker built to support users with positive reinforcement.",
        "details": [
            {
                "heading": "Project Background",
                "content": [
                    "Built during my career break as a passion project blending product and architecture design - with the goal of promoting emotional wellness.",
                    "Motivated by a gap in the market: habit apps often rely on instilling guilt rather than providing support.",
                    "Habitly aims to celebrate progress, not create perfection."
                ]
            },
            {
                "heading": "Product Thinking & Design",
                "content": [
                    "Led product ideation based on user pain points — especially those who feel discouraged by traditional productivity tools.",
                    "Prioritized tone and emotional UX: every word, animation, and interaction was tested to feel personal.",
                    "Conducted informal interviews and user testing to validate features and UX flows."
                ]
            },
            {
                "heading": "Key Features",
                "content": [
                    "Cross-platform support via React, Vite, and Capacitor for native and PWA experiences.",
                    "Gamification features like streaks, mood tracking, and celebration animations to reinforce positive behavior loops.",
                    "Secure login via Google OAuth and JWT for seamless user flow.",
                    "CI/CD setup with GitHub Actions and Terraform, deploying to a fully managed AWS stack.",
                    "Mobile-first UI with smooth transitions and user-friendly design."
                ]
            },
            {
                "heading": "Technical Implementation",
                "content": [
                    "Backend: Node.js and NestJS with PostgreSQL (Prisma).",
                    "Infra: AWS (Lambda, S3, CloudFront, API Gateway), provisioned using Terraform.",
                    "DevOps: CI/CD via GitHub Actions with zero-downtime deployments.",
                    "Engineered with modularity and scalability in mind."
                ]
            },
            {
                "heading": "Current Status",
                "content": [
                    "Live on web and mobile (PWA).",
                    "Active users include early testers providing feedback for roadmap iterations.",
                    "Future roadmap to include onboarding improvements, retention tracking, and in-app analytics."
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
        timeInvested: "2.5 months",
        lessonsLearned: "Involving real users early on — even in the design phase — made a huge difference. Their feedback helped me shape both UX decisions and feature prioritization. I also learned how much discipline Terraform requires for stable, repeatable deployments.",
        wouldBuildAgain: "Absolutely. If I had to redo this project, I will focus on observability and structured user onboarding from day 1, and continue building with feedback loops - this will create a more user-centric product.",
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
        tagline: "Clean and responsive site for a personal trainer",
        description: "A website showcasing trainer profile and client testimonials, built to convert visitors into clients.",
        "details": [
            {
                "heading": "Project Background",
                "content": [
                    "Commissioned by a fitness coach to improve his personal branding and credibility by building a website, creating a digital channel for client bookings.",
                    "The site needed to reflect the trainer's expertise and credentials while ensuring a seamless user journey from landing page to booking confirmation."
                ]
            },
            {
                "heading": "Product Thinking & Design",
                "content": [
                    "Focused on conversion goals — clear calls-to-action, pricing visibility, and social proof through testimonials.",
                    "Mapped and streamlined user flow from homepage to booking, reducing friction.",
                    "Built a Figma prototype for early client validation, iterated based on direct feedback."
                ]
            },
            {
                "heading": "Key Features",
                "content": [
                    "Pages designed with clear pricing and multiple booking touchpoints — Google Form for consultations, WhatsApp and email for direct enquiries.",
                    "Client success stories and testimonials to build trust and authority.",
                    "SEO-optimized content and metadata to enhance local search discoverability."
                ]
            },
            {
                "heading": "Technical Implementation",
                "content": [
                    "Developed using Next.js, TailwindCSS, and TypeScript for fast, maintainable, and scalable frontend architecture.",
                    "Deployed to Vercel with continuous deployment setup for rapid iteration and previews.",
                    "Performance-optimized with responsive design, semantic HTML, and image handling best practices."
                ]
            },
            {
                "heading": "Current Status",
                "content": [
                    "The page went live in March 2025, and has become a main channel used to attract and engage prospective clients (search engine optimized and posted on social media).",
                    "Client bookings have increased by 30% since launch, with positive feedback on the site's usability and design.",
                    "Ongoing maintenance for content updates and performance monitoring.",
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
        tagline: "A curated collection of my best work, personality, and growth",
        description: "This portfolio is a reflection of my technical capabilities and creative identity",
        details: [
            {
                heading: "Project Background",
                content: [
                    "Created to consolidate my technical work, design interests, and career journey into one cohesive collection.",
                    "Serves as a living document of my capabilities and growth areas."
                ]
            },
            {
                "heading": "Product Thinking & Design",
                "content": [
                    "Focused on user flow for viewers - project presents clear outcomes, decisions, and tech context.",
                    "Tag-based filtering and consistent structure to enable quick scanning and deep dives based on the reader's interest.",
                    "Positioned to highlight both execution and strategic thinking behind each project."
                ]
            },
            {
                "heading": "Research & User Experience",
                "content": [
                    "Researched modern portfolio structures and adapted them to reflect a polished yet personal tone.",
                    "Emphasized clarity, accessibility, and mobile responsiveness across light/dark modes.",
                    "Microcopy and colors convey warmth with personality, balancing credibility with approachability."
                ]
            },
            {
                "heading": "Technical Implementation",
                "content": [
                    "Built using Next.js App Router and TailwindCSS for performance and efficiency.",
                    "CI/CD powered by GitHub and deployed to Vercel for rapid iteration and scalability.",
                    "Optimized for SEO and fast page loads, with modular architecture to support future growth."
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
        lessonsLearned: "Showcasing yourself is harder than it seems — the challenge was to balance tone, content, and UI to create a portfolio that feels authentic yet professional.",
        wouldBuildAgain: "Yes. This portfolio is continuously evolving—next steps include automating content updates via CMS or MDX, and gradually expanding it into a design/dev experimentation playground.",
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
                heading: "Project Background",
                content: [
                    "Built to explore frontend fundamentals using Angular.",
                    "The name 'Dudoo' is a playful spin on 'To-Do' — because productivity apps don't have to sound too serious.",
                    "I wanted to build something simple, fast, and reliable with a clean UI",
                ]
            },
            {
                heading: "Key Features",
                content: [
                    "Add, delete, and mark tasks as complete.",
                    "Task categorisation and category management.",
                    "Persistent local storage to save your list across sessions.",
                    "Responsive and mobile-friendly layout."
                ]
            },
            {
                heading: "Technical Stack",
                content: [
                    "Built with Angular frontend framework.",
                    "Deployed via GitHub Pages."
                ]
            },
            {
                heading: "Reflections",
                content: [
                    "Angular was the first frontend framework I learned as a software engineer — this project was for me to revisit it after years of using React and Vue.",
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
                heading: "Project Background",
                content: [
                    "Created to test backend logic under constraints — no database, no frameworks, just file manipulation and TypeScript.",
                    "Aimed to simulate a real-world scenario with check-in, check-out, and fee calculation workflows."
                ]
            },
            {
                heading: "Key Features",
                content: [
                    "CLI-based interaction for parking operations.",
                    "File-based state management with separate logs for check-in and check-out.",
                    "Dynamic fee calculation based on entry/exit time.",
                    "Plate number tracking with timestamps.",
                    "Custom rate configuration for parking logic."
                ]
            },
            {
                heading: "Technical Implementation",
                content: [
                    "Written in TypeScript using `readline-sync` for CLI input.",
                    "Uses Node.js `fs` module to persist car data in plain `.txt` files.",
                    "Timestamp logic to calculate total time and fee on exit.",
                    "Structured and commented for clarity and maintainability."
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
                heading: "Project Background",
                content: [
                    "Built while I was practising Java Swing, GUI design, and core object-oriented programming concepts.",
                    "Focused on making a functional and user-friendly admin panel for managing student records."
                ]
            },
            {
                heading: "Key Features",
                content: [
                    "Add, edit, and delete student records.",
                    "Assign subjects and input marks per student.",
                    "Dynamic calculation of total and average marks.",
                    "Basic result classification (e.g., pass/fail).",
                    "Intuitive tab-based navigation for managing different data views."
                ]
            },
            {
                heading: "Technical Highlights",
                content: [
                    "Java with Swing for the GUI.",
                    "Uses object-oriented principles for modularity.",
                    "Data stored in memory using collections (no database).",
                    "Focus on clear UI layout, form validation, and clean event handling."
                ]
            },
            {
                heading: "Reflections",
                content: [
                    "Swing taught me how much design matters — to avoid having to continuously align components manually.",
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
                heading: "Key features",
                content: [
                    "Basic weather data fetching.",
                    "Location-based forecast.",
                    "Simple responsive layout.",
                    "API integration with weather services."
                ]
            },
            {
                heading: "Technical implementation",
                content: [
                    "UI/UX design (everything).",
                    "Better data visualization.",
                    "Improved mobile experience.",
                    "More comprehensive weather data.",
                    "Actually decent styling."
                ]
            },
            {
                heading: "Future work",
                content: [
                    "Complete design overhaul with better color scheme.",
                    "Add weather maps and radar.",
                    "Implement weather alerts.",
                    "Make it actually pleasant to use."
                ]
            },
            {
                content: [
                    "Status: Functional but requires more work. On the list for a major revamp."
                ]
            },

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
        timeInvested: "1 week",
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
                heading: "Project Background",
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
                heading: "Project Background",
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
                heading: "Project Background",
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
        slidesLink: "https://drive.google.com/file/d/1QwGPHmlJq45uErax2G_CZ5NPwZSopLTJ/view?usp=sharing",
    }
];

export const categories: ProjectCategory[] = ["All", "Featured", "Professional", "Learning", "Fun", "Coming Soon", "Needs Love"];

export const statusColors: Record<ProjectStatus, string> = {
    "Live": "bg-teal-100 text-teal-800 border-teal-200",
    "In Progress": "bg-blue-100 text-blue-800 border-blue-200",
    "Complete": "bg-purple-100 text-purple-800 border-purple-200",
    "Learning Project": "bg-blue-100 text-blue-800 border-blue-200",
    "Needs Revamp": "bg-pink-100 text-pink-800 border-pink-200",
    "Planning": "bg-gray-100 text-gray-800 border-gray-200"
};