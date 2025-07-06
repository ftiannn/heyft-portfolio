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
        default: 'Fang Tian Tan - Full-Stack Developer & Creator',
        template: '%s | Fang Tian Tan'
    },
    description: 'Fang Tian Tan (FT Tan) is a Singapore-based full-stack developer with 7+ years of experience in building scalable, secure, and user-friendly web applications using React, Next.js, Node.js, and AWS.',
    keywords: [
        'Fang Tian Tan', 'Tan Fang Tian', 'FT Tan', 'developer', 'full-stack', 'react', 'next.js', 'singapore',
        'web development', 'software engineer', 'frontend', 'backend',
        'typescript', 'node.js', 'aws', 'portfolio',
        'cloud developer', 'javascript engineer', 'software portfolio'
    ],
    authors: [{ name: 'Fang Tian Tan', url: BASE_URL }],
    creator: 'Fang Tian Tan',
    publisher: 'Fang Tian Tan',
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: BASE_URL,
        siteName: 'Fang Tian Tan Portfolio',
        title: 'Fang Tian Tan - Full-Stack Developer & Creator',
        description: 'Fang Tian Tan (FT Tan) is a full-stack developer with 7+ years of experience building scalable web applications. Specializing in React, Next.js, Node.js, and cloud infrastructure.',
        images: [
            {
                url: '/avatar.png',
                width: 1200,
                height: 630,
                alt: 'Fang Tian Tan - Full-Stack Developer',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Fang Tian Tan - Full-Stack Developer & Creator',
        description: 'Fang Tian Tan (FT Tan) is a full-stack developer with 7+ years of experience building scalable web applications.',
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
        title: 'Fang Tian Tan - Full-Stack Developer & Creator',
        description: 'Fang Tian Tan (FT Tan) is a full-stack developer with 7+ years of experience building scalable web applications. Specializing in React, Next.js, Node.js, and cloud infrastructure.',
        keywords: ['Fang Tian Tan', 'Tan Fang Tian', 'FT Tan', 'developer', 'full-stack', 'react', 'next.js', 'singapore', 'web development'],
        openGraph: {
            title: 'Fang Tian Tan - Full-Stack Developer & Creator',
            description: 'Fang Tian Tan (FT Tan) is a full-stack developer with 7+ years of experience building scalable web applications.',
            url: `${BASE_URL}/`,
        }
    },
    about: {
        title: 'About Fang Tian Tan - Professional Journey & Skills',
        description: 'Learn about Fang Tian Tan\'s professional journey, skills, and experience as a full-stack developer with 7+ years in web development.',
        keywords: ['Fang Tian Tan', 'Tan Fang Tian', 'about', 'experience', 'skills', 'career', 'full-stack developer', 'singapore'],
        openGraph: {
            title: 'About Fang Tian Tan - Professional Journey & Skills',
            description: 'Learn about Fang Tian Tan\'s professional journey, skills, and experience as a full-stack developer.',
            url: `${BASE_URL}/about`,
        }
    },
    projects: {
        title: 'Projects - Fang Tian Tan Portfolio',
        description: 'Explore Fang Tian Tan\'s portfolio of web development projects including full-stack applications, frontend interfaces, and cloud infrastructure solutions.',
        keywords: ['Fang Tian Tan', 'Tan Fang Tian', 'projects', 'portfolio', 'web applications', 'full-stack', 'react', 'next.js'],
        openGraph: {
            title: 'Projects - Fang Tian Tan Portfolio',
            description: 'Explore Fang Tian Tan\'s portfolio of web development projects including full-stack applications.',
            url: `${BASE_URL}/projects`,
        }
    },
    gallery: {
        title: 'Photography Gallery - Fang Tian Tan',
        description: 'A collection of travel photography by Fang Tian Tan capturing authentic moments from around the world, including street portraits and candid scenes from various countries.',
        keywords: ['Fang Tian Tan', 'photography', 'travel', 'gallery', 'photos', 'travel photography'],
        openGraph: {
            title: 'Photography Gallery - Fang Tian Tan',
            description: 'A collection of travel photography by Fang Tian Tan capturing authentic moments from around the world.',
            url: `${BASE_URL}/gallery`,
        }
    },
    resume: {
        title: 'Resume - Fang Tian Tan',
        description: 'Professional resume and experience of Fang Tian Tan, a full-stack developer with 7+ years of experience in web development, cloud infrastructure, and enterprise applications.',
        keywords: ['Fang Tian Tan', 'Tan Fang Tian', 'resume', 'cv', 'experience', 'full-stack developer', 'singapore'],
        openGraph: {
            title: 'Resume - Fang Tian Tan',
            description: 'Professional resume and experience of Fang Tian Tan, a full-stack developer with 7+ years of experience.',
            url: `${BASE_URL}/resume`,
        }
    }
}

// Structured data for each page
export const structuredData = {
    home: {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Fang Tian Tan",
        "alternateName": ["FT Tan", "Tan Fang Tian"],
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
        "name": "About Fang Tian Tan",
        "description": "Learn about Fang Tian Tan's professional journey, skills, and experience as a full-stack developer with 7+ years in web development.",
        "url": `${BASE_URL}/about`,
        "mainEntity": {
            "@type": "Person",
            "name": "Fang Tian Tan",
            "alternateName": ["FT Tan", "Tan Fang Tian"],
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
        "name": "Fang Tian Tan Projects",
        "description": "Explore Fang Tian Tan's portfolio of web development projects including full-stack applications, frontend interfaces, and cloud infrastructure solutions.",
        "url": `${BASE_URL}/projects`,
        "mainEntity": {
            "@type": "ItemList",
            "name": "Fang Tian Tan's Project Portfolio",
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
                        "name": "Fang Tian Tan",
                        "alternateName": ["FT Tan", "Tan Fang Tian"]
                    }
                }
            }))
        }
    },
    gallery: {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Fang Tian Tan Photography Gallery",
        "description": "A collection of travel photography by Fang Tian Tan capturing authentic moments from around the world.",
        "url": `${BASE_URL}/gallery`,
        "mainEntity": {
            "@type": "ImageGallery",
            "name": "Travel Photography Collection",
            "description": "Photography collection featuring travel photos from various countries",
            "numberOfItems": allPhotos.length,
            "author": {
                "@type": "Person",
                "name": "Fang Tian Tan",
                "alternateName": ["FT Tan", "Tan Fang Tian"]
            },
            "itemListElement": allPhotos.map((photo, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "item": {
                    "@type": "ImageObject",
                    "name": photo.title,
                    "description": photo.description,
                    "url": `${BASE_URL}/${photo.src}`,
                    "contentUrl": `${BASE_URL}/${photo.src}`,
                    "thumbnailUrl": `${BASE_URL}/${photo.src}`,
                    "author": {
                        "@type": "Person",
                        "name": "Fang Tian Tan",
                        "alternateName": ["FT Tan", "Tan Fang Tian"]
                    }
                }
            }))
        }
    },
    resume: {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Fang Tian Tan Resume",
        "description": "Professional resume and experience of Fang Tian Tan, a full-stack developer with 7+ years of experience.",
        "url": `${BASE_URL}/resume`,
        "mainEntity": {
            "@type": "Person",
            "name": "Fang Tian Tan",
            "alternateName": ["FT Tan", "Tan Fang Tian"],
            "jobTitle": "Full-Stack Developer",
            "description": "Full-stack developer with 7+ years of experience in web development and cloud infrastructure",
            "knowsAbout": [
                "React", "Next.js", "Node.js", "TypeScript", "AWS", "PostgreSQL",
                "Full-Stack Development", "Cloud Infrastructure", "DevOps", "Vue.js"
            ],
            "hasOccupation": {
                "@type": "Occupation",
                "name": "Software Developer",
                "occupationLocation": {
                    "@type": "City",
                    "name": "Singapore"
                }
            },
            "alumniOf": {
                "@type": "Organization",
                "name": "GovTech Singapore"
            }
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