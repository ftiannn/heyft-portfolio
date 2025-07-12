import { generateMetadata, getStructuredData } from "@/constants/seo"
import type { Metadata } from "next"
import { StructuredData } from "@/app/components"

export const metadata: Metadata = generateMetadata('gallery')

export default function GalleryLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const structuredData = getStructuredData('gallery')
    
    return (
        <>
            <StructuredData data={structuredData} />
            {children}
        </>
    )
} 