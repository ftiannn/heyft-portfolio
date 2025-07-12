import { generateMetadata, getStructuredData } from "@/constants/seo"
import type { Metadata } from "next"
import { StructuredData } from "@/app/components"

export const metadata: Metadata = generateMetadata('about')

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const structuredData = getStructuredData('about')
  
  return (
    <>
      <StructuredData data={structuredData} />
      {children}
    </>
  )
} 