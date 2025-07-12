import { generateMetadata, getStructuredData } from "@/constants/seo"
import type { Metadata } from "next"
import { StructuredData } from "@/app/components"

export const metadata: Metadata = generateMetadata('home')

export default function RootPageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const structuredData = getStructuredData('home')
  
  return (
    <>
      <StructuredData data={structuredData} />
      {children}
    </>
  )
} 