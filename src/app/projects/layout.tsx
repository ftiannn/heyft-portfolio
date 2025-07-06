import { generateMetadata } from "@/constants/seo"
import type { Metadata } from "next"

export const metadata: Metadata = generateMetadata('projects')

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 