import { MetadataRoute } from 'next'

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
    sitemap: 'https://heyft.com/sitemap.xml',
    host: 'https://heyft.com',
  }
} 