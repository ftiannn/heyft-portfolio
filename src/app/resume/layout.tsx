import { generateMetadata, getStructuredData } from "@/constants/seo"
import type { Metadata } from "next"
import { StructuredData } from "@/app/components"

export const metadata: Metadata = generateMetadata('resume')

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const structuredData = getStructuredData('resume')
  
  return (
    <>
      <StructuredData data={structuredData} />
      {children}
    </>
  )
} 