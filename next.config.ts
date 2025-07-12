import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },
  compress: true,
  poweredByHeader: false,
  generateEtags: true,
  reactStrictMode: true,
  experimental: {
    optimizeCss: true,
  },
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; img-src 'self' data: https:; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com; style-src 'self' 'unsafe-inline'; font-src 'self' data:; connect-src 'self' https://www.google-analytics.com; frame-src 'self' https://open.spotify.com; frame-ancestors 'self';",
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          { type: 'host', value: 'heyft.com' },
        ],
        destination: 'https://www.heyft.com/:path*',
        permanent: true,
      },
      {
        source: '/from-linkedin',
        destination: '/?utm_source=linkedin&utm_medium=social&utm_campaign=portfolio',
        permanent: false,
      },
      {
        source: '/from-github',
        destination: '/?utm_source=github&utm_medium=social&utm_campaign=portfolio',
        permanent: false,
      },
      {
        source: '/from-resume',
        destination: '/?utm_source=resume&utm_medium=referral&utm_campaign=portfolio',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
