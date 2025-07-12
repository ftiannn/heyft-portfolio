import { generateMetadata, getStructuredData } from "@/constants/seo"
import type { Metadata } from "next"
import { StructuredData } from "@/app/components"

export const metadata: Metadata = generateMetadata('projects')

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const structuredData = getStructuredData('projects')
  
  return (
    <>
      <StructuredData data={structuredData} />
      {children}
    </>
  )
} 