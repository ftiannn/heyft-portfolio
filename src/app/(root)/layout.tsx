import { generateMetadata } from "@/constants/seo"
import type { Metadata } from "next"
import { StructuredData } from "@/app/components"

export const metadata: Metadata = generateMetadata('home')

export default function RootPageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <StructuredData page="home" />
      {children}
    </>
  )
} 