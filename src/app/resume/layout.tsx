import { generateMetadata } from "@/constants/seo"
import type { Metadata } from "next"

export const metadata: Metadata = generateMetadata('resume')

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 