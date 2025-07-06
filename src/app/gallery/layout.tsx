import { generateMetadata } from "@/constants/seo"
import type { Metadata } from "next"

export const metadata: Metadata = generateMetadata('gallery')

export default function GalleryLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
} 