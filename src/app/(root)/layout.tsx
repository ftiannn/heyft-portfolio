import { generateMetadata } from "@/constants/seo"
import type { Metadata } from "next"

export const metadata: Metadata = generateMetadata('home')

export default function RootPageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
} 