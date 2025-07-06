import { Metadata } from 'next'
import links from './link'
import { projects } from './projects'
import { allPhotos } from './gallery'

// Base URL for the website
export const BASE_URL = 'https://heyft.com'

// Default metadata for the website
export const defaultMetadata: Metadata = {
    metadataBase: new URL(BASE_URL),
    title: {
        default: 'FT Tan - Full-Stack Developer & Creator',
        template: '%s | FT Tan'
    },
    description: 'FT Tan is a Singapore-based full-stack developer with 7+ years of experience in building scalable, secure, and user-friendly web applications using React, Next.js, Node.js, and AWS.',
    keywords: [
        'developer', 'full-stack', 'react', 'next.js', 'singapore',
        'web development', 'software engineer', 'frontend', 'backend',
        'typescript', 'node.js', 'aws', 'portfolio',
        'cloud developer', 'javascript engineer', 'software portfolio'
    ],
    authors: [{ name: 'FT Tan', url: BASE_URL }],
    creator: 'FT Tan',
    publisher: 'FT Tan',
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: BASE_URL,
        siteName: 'FT Tan Portfolio',
        title: 'FT Tan - Full-Stack Developer & Creator',
        description: 'Full-stack developer with 7+ years of experience building scalable web applications. Specializing in React, Next.js, Node.js, and cloud infrastructure.',
        images: [
            {
                url: '/avatar.png',
                width: 1200,
                height: 630,
                alt: 'FT Tan - Full-Stack Developer',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'FT Tan - Full-Stack Developer & Creator',
        description: 'Full-stack developer with 7+ years of experience building scalable web applications.',
        images: ['/avatar.png'],
        creator: '@heyft',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    verification: {
        google: 'your-google-verification-code', // Add your Google Search Console verification code
    },
    alternates: {
        canonical: BASE_URL,
    },
}

// Page-specific metadata
export const pageMetadata = {
    home: {
        title: 'FT Tan - Full-Stack Developer & Creator',
        description: 'Full-stack developer with 7+ years of experience building scalable web applications. Specializing in React, Next.js, Node.js, and cloud infrastructure.',
        keywords: ['developer', 'full-stack', 'react', 'next.js', 'singapore', 'web development'],
        openGraph: {
            title: 'FT Tan - Full-Stack Developer & Creator',
            description: 'Full-stack developer with 7+ years of experience building scalable web applications.',
            url: `${BASE_URL}/`,
        }
    },
    about: {
        title: 'About FT Tan - Professional Journey & Skills',
        description: 'Learn about FT Tan\'s professional journey, skills, and experience as a full-stack developer with 7+ years in web development.',
        keywords: ['about', 'experience', 'skills', 'career', 'full-stack developer', 'singapore'],
        openGraph: {
            title: 'About FT Tan - Professional Journey & Skills',
            description: 'Learn about FT Tan\'s professional journey, skills, and experience as a full-stack developer.',
            url: `${BASE_URL}/about`,
        }
    },
    projects: {
        title: 'Projects - FT Tan Portfolio',
        description: 'Explore FT Tan\'s portfolio of web development projects including full-stack applications, frontend interfaces, and cloud infrastructure solutions.',
        keywords: ['projects', 'portfolio', 'web applications', 'full-stack', 'react', 'next.js'],
        openGraph: {
            title: 'Projects - FT Tan Portfolio',
            description: 'Explore FT Tan\'s portfolio of web development projects including full-stack applications.',
            url: `${BASE_URL}/projects`,
        }
    },
    gallery: {
        title: 'Photography Gallery - FT Tan',
        description: 'A collection of travel photography capturing authentic moments from around the world, including street portraits and candid scenes from various countries.',
        keywords: ['photography', 'travel', 'gallery', 'photos', 'travel photography'],
        openGraph: {
            title: 'Photography Gallery - FT Tan',
            description: 'A collection of travel photography capturing authentic moments from around the world.',
            url: `${BASE_URL}/gallery`,
        }
    },
    resume: {
        title: 'Resume - FT Tan',
        description: 'Professional resume and experience of FT Tan, a full-stack developer with 7+ years of experience in web development, cloud infrastructure, and enterprise applications.',
        keywords: ['resume', 'cv', 'experience', 'full-stack developer', 'singapore'],
        openGraph: {
            title: 'Resume - FT Tan',
            description: 'Professional resume and experience of FT Tan, a full-stack developer with 7+ years of experience.',
            url: `${BASE_URL}/resume`,
        }
    }
}

// Structured data for each page
export const structuredData = {
    home: {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "FT Tan",
        "jobTitle": "Full-Stack Developer",
        "description": "Full-stack developer with 7+ years of experience building scalable web applications",
        "url": BASE_URL,
        "sameAs": [
            links.github,
            links.linkedin,
            links.instagram
        ],
        "knowsAbout": [
            "React", "Next.js", "Node.js", "TypeScript", "AWS", "PostgreSQL", "Full-Stack Development"
        ],
        "worksFor": {
            "@type": "Organization",
            "name": "Freelance/Contract"
        },
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Singapore",
            "addressCountry": "SG"
        }
    },
    about: {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "About FT Tan",
        "description": "Learn about FT Tan's professional journey, skills, and experience as a full-stack developer with 7+ years in web development.",
        "url": `${BASE_URL}/about`,
        "mainEntity": {
            "@type": "Person",
            "name": "FT Tan",
            "jobTitle": "Full-Stack Developer",
            "description": "Full-stack developer with expertise in React, Next.js, Node.js, and cloud infrastructure",
            "knowsAbout": [
                "React", "Next.js", "Node.js", "TypeScript", "AWS", "PostgreSQL",
                "Full-Stack Development", "Cloud Infrastructure", "DevOps"
            ],
            "hasOccupation": {
                "@type": "Occupation",
                "name": "Software Developer",
                "occupationLocation": {
                    "@type": "City",
                    "name": "Singapore"
                }
            }
        }
    },
    projects: {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "FT Tan Projects",
        "description": "Explore FT Tan's portfolio of web development projects including full-stack applications, frontend interfaces, and cloud infrastructure solutions.",
        "url": `${BASE_URL}/projects`,
        "mainEntity": {
            "@type": "ItemList",
            "name": "FT Tan's Project Portfolio",
            "description": "A collection of web development projects showcasing full-stack development skills",
            "numberOfItems": projects.length,
            "itemListElement": projects.map((project, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "item": {
                    "@type": "CreativeWork",
                    "name": project.title,
                    "description": project.description,
                    "url": project.demo !== "#" ? project.demo : undefined,
                    "author": {
                        "@type": "Person",
                        "name": "FT Tan"
                    },
                    "dateCreated": project.year,
                    "keywords": project.stack.join(", ")
                }
            }))
        }
    },
    gallery: {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "FT Tan Photography Gallery",
        "description": "A collection of travel photography capturing authentic moments from around the world, including street portraits and candid scenes from various countries.",
        "url": `${BASE_URL}/gallery`,
        "mainEntity": {
            "@type": "ImageGallery",
            "name": "FT Tan's Travel Photography",
            "description": "Photography collection from travels around the world",
            "numberOfItems": allPhotos.length,
            "itemListElement": allPhotos.map((photo, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "item": {
                    "@type": "ImageObject",
                    "name": `${photo.country} Photography`,
                    "description": `Travel photography from ${photo.country}`,
                    "contentUrl": `/assets/photography/${photo.src}`,
                    "creator": {
                        "@type": "Person",
                        "name": "FT Tan"
                    }
                }
            }))
        }
    },
    resume: {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "FT Tan Resume",
        "description": "Professional resume and experience of FT Tan, a full-stack developer with 7+ years of experience in web development, cloud infrastructure, and enterprise applications.",
        "url": `${BASE_URL}/resume`,
        "mainEntity": {
            "@type": "Person",
            "name": "FT Tan",
            "jobTitle": "Full-Stack Developer",
            "description": "Full-stack developer with 7+ years of experience building scalable web applications",
            "url": BASE_URL,
            "sameAs": [
                links.github,
                links.linkedin
            ],
            "knowsAbout": [
                "React", "Next.js", "Node.js", "TypeScript", "AWS", "PostgreSQL",
                "Full-Stack Development", "Cloud Infrastructure", "DevOps", "Microservices"
            ],
            "hasOccupation": {
                "@type": "Occupation",
                "name": "Software Developer",
                "occupationLocation": {
                    "@type": "City",
                    "name": "Singapore"
                }
            },
            "workExperience": [
                {
                    "@type": "Organization",
                    "name": "Freelance/Contract",
                    "description": "Full-stack development and consulting"
                }
            ]
        }
    }
}

// Helper function to get page metadata
export const getPageMetadata = (page: keyof typeof pageMetadata): Metadata => {
    const pageMeta = pageMetadata[page]
    return {
        ...defaultMetadata,
        title: pageMeta.title,
        description: pageMeta.description,
        keywords: [...(defaultMetadata.keywords as string[]), ...pageMeta.keywords],
        openGraph: {
            ...defaultMetadata.openGraph,
            ...pageMeta.openGraph,
        },
        alternates: {
            canonical: pageMeta.openGraph.url,
        },
    }
}

// Helper function to get structured data
export const getStructuredData = (page: keyof typeof structuredData) => {
    return structuredData[page]
} 