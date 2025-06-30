"use client"

import { allPhotos, countryStats, countries, countryCounts } from "@/constants/gallery"
import { Photo } from "@/types/gallery.type"
import { motion, AnimatePresence } from "framer-motion"
import { Camera, Filter, ChevronRight, MapPin } from "lucide-react"
import Image from "next/image"
import { useState, useMemo, useEffect } from "react"

export default function Gallery() {
    const [selectedCountry, setSelectedCountry] = useState<string | null>(null)
    const [showCountryFilter, setShowCountryFilter] = useState(false)
    const [activePhoto, setActivePhoto] = useState<Photo | null>(null)

    // Handle escape key to close modal
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && activePhoto) {
                setActivePhoto(null)
            }
        }

        if (activePhoto) {
            document.addEventListener('keydown', handleEscape)
            // Prevent background scrolling when modal is open
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }

        return () => {
            document.removeEventListener('keydown', handleEscape)
            document.body.style.overflow = 'unset'
        }
    }, [activePhoto])

    const filteredPhotos = selectedCountry
        ? allPhotos.filter(photo => photo.country === selectedCountry)
        : allPhotos

    // Create irregular grid pattern with natural aspect ratios
    const photoLayout = useMemo(() => {
        const patterns = [
            { width: 300, minHeight: 200 },
            { width: 400, minHeight: 250 },
            { width: 280, minHeight: 350 },
            { width: 320, minHeight: 180 },
            { width: 350, minHeight: 280 },
            { width: 290, minHeight: 400 },
        ]

        return filteredPhotos.map((photo, index) => ({
            ...photo,
            layout: patterns[index % patterns.length]
        }))
    }, [filteredPhotos])

    return (
        <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
            <div className="container-custom section-padding">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                        <span className="bg-gradient-to-r from-primary-pink via-purple-600 to-secondary-teal bg-clip-text text-transparent">
                            Photography Gallery
                        </span>
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                        Capturing authentic moments and genuine connections during my travels.
                        From street portraits to candid scenes, these photos celebrate the people and cultures
                        that make each destination unique.
                    </p>

                    {/* Gear Spec */}
                    <div className="flex justify-center mb-6">
                        <div className="inline-flex items-center gap-2 px-4 py-1 bg-white/70 dark:bg-slate-700/50 border border-gray-200 dark:border-slate-600 rounded-full text-xs text-gray-600 dark:text-gray-300 font-medium backdrop-blur-sm shadow-sm">
                            <Camera className="w-4 h-4 text-primary-pink" />
                            Canon R10 · Sigma 17–50mm · iPhone 14 Pro
                        </div>
                    </div>




                    {/* Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
                        {countryStats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.1 * index, duration: 0.6 }}
                                className="glass-card p-4 text-center"
                            >
                                <div className={`text-2xl font-bold ${stat.color} mb-1`}>
                                    {stat.value}
                                </div>
                                <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Country Filter */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="mb-16"
                >
                    {/* Toggle Control */}
                    <div className="flex justify-center mb-6">
                        <button
                            onClick={() => setShowCountryFilter(!showCountryFilter)}
                            className="inline-flex items-center gap-2 text-sm px-5 py-2 border border-gray-300 dark:border-slate-600 rounded-full text-gray-700 dark:text-gray-200 hover:border-primary-pink transition-all"
                        >
                            <Filter className="w-4 h-4 text-primary-pink" />
                            {selectedCountry
                                ? `${selectedCountry} (${countryCounts[selectedCountry]})`
                                : `All Photos (${allPhotos.length})`}
                            <ChevronRight
                                className={`w-3 h-3 transition-transform duration-300 ${showCountryFilter ? "rotate-90" : ""
                                    }`}
                            />
                        </button>
                    </div>

                    {/* Filter Pills */}
                    <AnimatePresence>
                        {showCountryFilter && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                            >
                                <div className="flex flex-wrap justify-center gap-3 px-4 py-4 bg-white/70 dark:bg-slate-800/40 backdrop-blur-md rounded-2xl border border-gray-200 dark:border-slate-700 max-w-5xl mx-auto">
                                    {/* All Photos Pill */}
                                    <button
                                        onClick={() => {
                                            setSelectedCountry(null)
                                            setShowCountryFilter(false)
                                        }}
                                        className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 ${!selectedCountry
                                            ? "bg-primary-pink text-white border-primary-pink"
                                            : "bg-transparent text-gray-700 dark:text-gray-200 border-gray-300 dark:border-slate-600 hover:border-primary-pink"
                                            }`}
                                    >
                                        All Photos ({allPhotos.length})
                                    </button>

                                    {/* Country Pills */}
                                    {countries.map((country) => (
                                        <button
                                            key={country}
                                            onClick={() => {
                                                setSelectedCountry(country)
                                                setShowCountryFilter(false)
                                            }}
                                            className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 ${selectedCountry === country
                                                ? "bg-secondary-teal text-white border-secondary-teal"
                                                : "bg-transparent text-gray-700 dark:text-gray-200 border-gray-300 dark:border-slate-600 hover:border-secondary-teal"
                                                }`}
                                        >
                                            {country} ({countryCounts[country]})
                                        </button>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>

                {/* Artistic Masonry Gallery */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="masonry-container"
                >
                    <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
                        {photoLayout.map((photo, index) => (
                            <motion.div
                                key={photo.id}
                                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                transition={{
                                    delay: 0.1 * (index % 8),
                                    duration: 0.6,
                                    type: "spring",
                                    damping: 25,
                                    stiffness: 200
                                }}
                                className="break-inside-avoid mb-6 group"
                            >
                                <div
                                    onClick={() => setActivePhoto(photo)}
                                    className="glass-card overflow-hidden hover:shadow-2xl transition-all duration-700 hover:scale-[1.02] relative cursor-zoom-in"
                                >
                                    {/* Photo Container - maintains aspect ratio */}
                                    <div className="relative w-full">
                                        <Image
                                            src={photo.src}
                                            alt={photo.title}
                                            width={photo.layout.width}
                                            height={photo.layout.minHeight}
                                            className="w-full h-auto rounded-xl group-hover:scale-105 transition-transform duration-1000"
                                            loading={index < 8 ? 'eager' : 'lazy'}
                                            style={{
                                                minHeight: `${photo.layout.minHeight}px`,
                                                objectFit: 'cover'
                                            }}
                                        />

                                        {/* Elegant overlay with photo info */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-xl" />

                                        {/* Country Tag */}
                                        <div className="absolute top-4 right-4 glass-tag flex items-center gap-2 opacity-0 group-hover:opacity-100 bg-black/60 px-2 py-1 rounded transition-all duration-300">
                                            <MapPin className="h-3 w-3 text-white" />
                                            <span className="text-xs font-medium text-white">{photo.country}</span>
                                        </div>

                                        {/* Artistic corner accent */}
                                        <div className="absolute top-0 left-0 w-0 h-0 border-l-[30px] border-t-[30px] border-l-primary-pink/20 border-t-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.0, duration: 0.8 }}
                    className="mt-24 text-center"
                >
                    <div className="bg-gradient-to-r from-primary-pink via-purple-600 to-secondary-teal p-12 rounded-3xl text-white shadow-2xl glass-card border border-white/20">
                        <h3 className="text-3xl font-bold mb-6 flex items-center justify-center gap-3">
                            <Camera className="h-8 w-8" />
                            More Adventures Ahead
                        </h3>
                        <p className="text-xl leading-relaxed mb-8 max-w-3xl mx-auto opacity-90">
                            This collection grows with every journey. Follow along as I continue documenting
                            the beauty, culture, and stories found in every corner of the world.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <a href="/about" className="bg-white text-primary-pink px-8 py-4 rounded-2xl font-semibold hover:bg-gray-100 transition-all duration-200 hover:scale-105 shadow-lg">
                                About the Photographer
                            </a>
                            <a href="/projects" className="border-2 border-white text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:text-primary-pink transition-all duration-200 hover:scale-105">
                                Technical Projects
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Fullscreen Modal */}
            <AnimatePresence>
                {activePhoto && (
                    <motion.div
                        key="modal"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
                        onClick={() => setActivePhoto(null)}
                    >
                        <div
                            className="relative max-w-6xl max-h-[90vh] w-full h-[90vh] overflow-hidden rounded-lg shadow-lg"
                            onClick={(e) => e.stopPropagation()} // prevent closing when clicking the image
                        >
                            <Image
                                src={activePhoto.src}
                                alt={activePhoto.title}
                                fill
                                className="object-contain"
                            />
                            <button
                                className="absolute top-4 right-4 text-white text-3xl font-bold hover:text-primary-pink transition-colors duration-200"
                                onClick={() => setActivePhoto(null)}
                            >
                                ×
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <style jsx global>{`
                .glass-card {
                    @apply bg-white/70 dark:bg-slate-800/70 backdrop-blur-md border border-white/20 dark:border-slate-700/50 rounded-2xl shadow-lg;
                }
                .glass-tag {
                    @apply bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full text-white text-xs font-medium;
                }
                
                .masonry-container {
                    max-width: 1400px;
                    margin: 0 auto;
                    padding: 0 20px;
                }
                
                /* Consistent column gaps and spacing */
                .columns-1 {
                    column-gap: 1.5rem;
                }
                
                .columns-2 {
                    column-gap: 1.5rem;
                }
                
                .columns-3 {
                    column-gap: 1.5rem;
                }
                
                .columns-4 {
                    column-gap: 1.5rem;
                }
                
                /* Prevent images from breaking across columns */
                .break-inside-avoid {
                    break-inside: avoid;
                    page-break-inside: avoid;
                }
                
                /* Ensure consistent spacing between items */
                .space-y-6 > * + * {
                    margin-top: 1.5rem;
                }
                
                @media (min-width: 768px) {
                    .masonry-container {
                        padding: 0 24px;
                    }
                    
                    .columns-2,
                    .columns-3,
                    .columns-4 {
                        column-gap: 2rem;
                    }
                    
                    .space-y-6 > * + * {
                        margin-top: 2rem;
                    }
                }
                
                @media (min-width: 1024px) {
                    .columns-3,
                    .columns-4 {
                        column-gap: 2.5rem;
                    }
                    
                    .space-y-6 > * + * {
                        margin-top: 2.5rem;
                    }
                }
                
                .line-clamp-2 {
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }
            `}</style>
        </main>
    )
}