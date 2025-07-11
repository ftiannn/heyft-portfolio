import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/admin/',
          '/private/',
          '/api/',
          '/_next/',
          '/static/',
          '/*.json$',
          '/manifest.json',
          '/robots.txt',
          '/sitemap.xml'
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: [
          '/admin/',
          '/private/',
          '/api/',
        ],
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: [
          '/admin/',
          '/private/',
          '/api/',
        ],
      }
    ],
    sitemap: 'https://www.heyft.com/sitemap.xml',
    host: 'https://www.heyft.com',
  }
} 