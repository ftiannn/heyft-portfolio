import { Metadata } from 'next'
import links from './link'
import { projects } from './projects'
import { allPhotos } from './gallery'

export const BASE_URL = 'https://www.heyft.com'

export const PERSON = {
  name: 'Fang Tian Tan',
  alternateNames: ['FT Tan', 'Tan Fang Tian'],
  jobTitle: 'Full-Stack Developer',
  description: 'Full-stack developer with 7+ years of experience building scalable web applications',
  location: 'Singapore',
  experience: '7+ years',
  skills: ['React', 'Next.js', 'Node.js', 'TypeScript', 'AWS', 'PostgreSQL', 'Full-Stack Development', 'Cloud Infrastructure', 'DevOps'],
  social: {
    twitter: '@heyft',
    linkedin: 'heyft',
    github: 'heyft'
  }
} as const

const BASE_KEYWORDS = [
  PERSON.name, ...PERSON.alternateNames, 'developer', 'full-stack', 'react', 'next.js', 'singapore',
  'web development', 'software engineer', 'frontend', 'backend', 'typescript', 'node.js', 'aws', 'portfolio',
  'cloud developer', 'javascript engineer', 'software portfolio', 'web developer singapore', 'react developer',
  'nextjs developer', 'typescript developer', 'aws developer', 'full stack developer singapore'
]

const IMAGES = {
  og: {
    url: '/profile.png', 
    width: 799,
    height: 1071,
    alt: `${PERSON.name} - ${PERSON.jobTitle}`,
  },
  avatar: {
    url: '/avatar.png',
    width: 512,
    height: 512,
    alt: `${PERSON.name} - ${PERSON.jobTitle}`,
  },
  photos: {
    main: '/profile.png',
    alt: '/profile-alt.png',
    square: '/profile-square.png'
  }
} as const

const createPersonSchema = () => ({
  "@type": "Person",
  "name": PERSON.name,
  "alternateName": PERSON.alternateNames,
  "jobTitle": PERSON.jobTitle,
  "description": PERSON.description,
  "url": BASE_URL,
  "sameAs": [links.github, links.linkedin, links.instagram],
  "knowsAbout": PERSON.skills,
  "worksFor": {
    "@type": "Organization",
    "name": "Freelance/Contract"
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": PERSON.location,
    "addressCountry": "SG"
  },
  "image": {
    "@type": "ImageObject",
    "url": `${BASE_URL}${IMAGES.avatar.url}`,
    "width": IMAGES.avatar.width,
    "height": IMAGES.avatar.height
  }
})

const createWebsiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": `${PERSON.name} Portfolio`,
  "description": PERSON.description,
  "url": BASE_URL,
  "author": createPersonSchema(),
  "publisher": {
    "@type": "Organization",
    "name": PERSON.name,
    "logo": {
      "@type": "ImageObject",
      "url": `${BASE_URL}${IMAGES.avatar.url}`,
      "width": IMAGES.avatar.width,
      "height": IMAGES.avatar.height
    }
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": `${BASE_URL}/search?q={search_term_string}`
    },
    "query-input": "required name=search_term_string"
  }
})

export const createBaseMetadata = (): Partial<Metadata> => ({
  metadataBase: new URL(BASE_URL),
  title: {
    default: `${PERSON.name} - ${PERSON.jobTitle} & Creator`,
    template: `%s | ${PERSON.name}`
  },
  description: `${PERSON.name} (${PERSON.alternateNames[0]}) is a ${PERSON.location}-based ${PERSON.jobTitle.toLowerCase()} with ${PERSON.experience} of experience in building scalable, secure, and user-friendly web applications using React, Next.js, Node.js, and AWS.`,
  keywords: BASE_KEYWORDS,
  authors: [{ name: PERSON.name, url: BASE_URL }],
  creator: PERSON.name,
  publisher: PERSON.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large' as const,
      'max-snippet': -1,
    },
  },
  category: 'technology',
  classification: 'portfolio',
  referrer: 'origin-when-cross-origin',


  applicationName: `${PERSON.name} Portfolio`,
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: PERSON.alternateNames[0],
  },
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': PERSON.alternateNames[0],
    'msapplication-TileColor': '#ec4899',
    'msapplication-config': '/browserconfig.xml',
  }
})

const PAGE_CONFIGS = {
  home: {
    title: `${PERSON.name} - ${PERSON.jobTitle} & Creator`,
    description: `${PERSON.name} (${PERSON.alternateNames[0]}) is a ${PERSON.jobTitle.toLowerCase()} with ${PERSON.experience} of experience building scalable web applications. Specializing in React, Next.js, Node.js, and cloud infrastructure.`,
    keywords: [PERSON.name, ...PERSON.alternateNames, 'developer', 'full-stack', 'react', 'next.js', 'singapore', 'web development'],
    path: '',
    structuredData: () => [
      createWebsiteSchema(),
      {
        "@context": "https://schema.org",
        ...createPersonSchema()
      }
    ]
  },
  about: {
    title: `About ${PERSON.name} - Professional Journey & Skills`,
    description: `Learn about ${PERSON.name}'s professional journey, skills, and experience as a ${PERSON.jobTitle.toLowerCase()} with ${PERSON.experience} in web development.`,
    keywords: [PERSON.name, ...PERSON.alternateNames, 'about', 'experience', 'skills', 'career', 'full-stack developer', 'singapore'],
    path: 'about',
    structuredData: () => ({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": `About ${PERSON.name}`,
      "description": `Learn about ${PERSON.name}'s professional journey, skills, and experience as a ${PERSON.jobTitle.toLowerCase()} with ${PERSON.experience} in web development.`,
      "url": `${BASE_URL}/about`,
      "mainEntity": createPersonSchema(),
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": BASE_URL
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "About",
            "item": `${BASE_URL}/about`
          }
        ]
      }
    })
  },
  projects: {
    title: `Projects - ${PERSON.name} Portfolio`,
    description: `Explore ${PERSON.name}'s portfolio of web development projects including full-stack applications, frontend interfaces, and cloud infrastructure solutions.`,
    keywords: [PERSON.name, ...PERSON.alternateNames, 'projects', 'portfolio', 'web applications', 'full-stack', 'react', 'next.js'],
    path: 'projects',
    structuredData: () => ({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": `${PERSON.name} Projects`,
      "description": `Explore ${PERSON.name}'s portfolio of web development projects including full-stack applications, frontend interfaces, and cloud infrastructure solutions.`,
      "url": `${BASE_URL}/projects`,
      "mainEntity": {
        "@type": "ItemList",
        "name": `${PERSON.name}'s Project Portfolio`,
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
            "author": createPersonSchema(),
            "dateCreated": project.year ? `${project.year}-01-01` : new Date().toISOString(),
            "genre": "Web Application",
            "keywords": project.stack?.join(', ') || ''
          }
        }))
      },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": BASE_URL
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Projects",
            "item": `${BASE_URL}/projects`
          }
        ]
      }
    })
  },
  gallery: {
    title: `Photography Gallery - ${PERSON.name}`,
    description: `A collection of travel photography by ${PERSON.name} capturing authentic moments from around the world, including street portraits and candid scenes from various countries.`,
    keywords: [PERSON.name, 'photography', 'travel', 'gallery', 'photos', 'travel photography'],
    path: 'gallery',
    structuredData: () => ({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": `${PERSON.name} Photography Gallery`,
      "description": `A collection of travel photography by ${PERSON.name} capturing authentic moments from around the world.`,
      "url": `${BASE_URL}/gallery`,
      "mainEntity": {
        "@type": "ImageGallery",
        "name": "Travel Photography Collection",
        "description": "Photography collection featuring travel photos from various countries",
        "numberOfItems": allPhotos.length,
        "author": createPersonSchema(),
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
            "author": createPersonSchema(),
            "license": "https://creativecommons.org/licenses/by-nc-nd/4.0/",
            "acquireLicensePage": `${BASE_URL}/gallery`
          }
        }))
      },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": BASE_URL
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Gallery",
            "item": `${BASE_URL}/gallery`
          }
        ]
      }
    })
  },
  resume: {
    title: `Resume - ${PERSON.name}`,
    description: `Professional resume and experience of ${PERSON.name}, a ${PERSON.jobTitle.toLowerCase()} with ${PERSON.experience} of experience in web development, cloud infrastructure, and enterprise applications.`,
    keywords: [PERSON.name, ...PERSON.alternateNames, 'resume', 'cv', 'experience', 'full-stack developer', 'singapore'],
    path: 'resume',
    structuredData: () => ({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": `${PERSON.name} Resume`,
      "description": `Professional resume and experience of ${PERSON.name}, a ${PERSON.jobTitle.toLowerCase()} with ${PERSON.experience} of experience.`,
      "url": `${BASE_URL}/resume`,
      "mainEntity": {
        ...createPersonSchema(),
        "alumniOf": {
          "@type": "Organization",
          "name": "GovTech Singapore"
        }
      },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": BASE_URL
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Resume",
            "item": `${BASE_URL}/resume`
          }
        ]
      }
    })
  }
} as const

export function generateMetadata(page: keyof typeof PAGE_CONFIGS): Metadata {
  const pageConfig = PAGE_CONFIGS[page]
  const baseMetadata = createBaseMetadata()
  const url = pageConfig.path ? `${BASE_URL}/${pageConfig.path}` : BASE_URL
  
  return {
    ...baseMetadata,
    title: pageConfig.title,
    description: pageConfig.description,
    keywords: [...BASE_KEYWORDS, ...pageConfig.keywords],
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: `${BASE_URL}${url}`,
      siteName: `${PERSON.name} Portfolio`,
      title: pageConfig.title,
      description: pageConfig.description,
      images: [
        {
          url: IMAGES.og.url, 
          width: IMAGES.og.width,
          height: IMAGES.og.height,
          alt: IMAGES.og.alt,
        },
        {
          url: `${BASE_URL}${IMAGES.avatar.url}`, 
          width: IMAGES.avatar.width,
          height: IMAGES.avatar.height,
          alt: IMAGES.og.alt,
        },
      ],
      countryName: 'Singapore',
    },
    alternates: {
      canonical: `${BASE_URL}${url}`,
      languages: {
        'en-US': `${BASE_URL}${url}`,
      },
    },
    other: {
      'application/ld+json': (() => {
        const data = pageConfig.structuredData()
        if (Array.isArray(data)) {
          return data.map((item: Record<string, unknown>) => JSON.stringify(item)).join('\n')
        }
        return JSON.stringify(data)
      })()
    }
  }
}

export const LAYOUT_CONFIG = {
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    colorScheme: 'light dark',
    themeColor: [
      { media: '(prefers-color-scheme: light)', color: '#ec4899' },
      { media: '(prefers-color-scheme: dark)', color: '#ec4899' }
    ],
  },
  theme: {
    color: '#ec4899',
    defaultTheme: 'light',
  },
  app: {
    name: PERSON.alternateNames[0], 
    manifest: '/manifest.json',
    appleTouchIcon: '/avatar.png',
  }
} as const

export type PageType = keyof typeof PAGE_CONFIGS
export { PAGE_CONFIGS as pages } 