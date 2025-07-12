import { getStructuredData } from '@/constants/seo'

interface StructuredDataProps {
  page: 'home' | 'about' | 'projects' | 'gallery' | 'resume'
}

export function StructuredData({ page }: StructuredDataProps) {
  const data = getStructuredData(page)
  const dataArray = Array.isArray(data) ? data : [data]
  
  return (
    <>
      {dataArray.map((item, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(item)
          }}
        />
      ))}
    </>
  )
} 