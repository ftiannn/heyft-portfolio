import { generateMetadata } from "@/constants/seo"
import type { Metadata } from "next"

export const metadata: Metadata = generateMetadata('about')

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 