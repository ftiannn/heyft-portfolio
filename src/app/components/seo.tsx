import Head from 'next/head'
import { getStructuredData } from '@/constants/seo'

interface SEOProps {
  page: 'home' | 'about' | 'projects' | 'gallery' | 'resume'
}

export const SEO = ({ page }: SEOProps) => {
  const structuredData = getStructuredData(page)

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
    </Head>
  )
} 