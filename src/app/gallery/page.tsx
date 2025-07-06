"use client"

import { allPhotos, countryStats, countries, countryCounts } from "@/constants/gallery"
import { Photo } from "@/types/gallery.type"
import { motion, AnimatePresence } from "framer-motion"
import { Camera, Filter, ChevronRight } from "lucide-react"
import { useState, useMemo, useEffect } from "react"
import { Cta } from "../components"
import dynamic from "next/dynamic"

const Modal = dynamic(() => import("./modal").then(mod => mod.Modal), { ssr: false })
const Grid = dynamic(() => import("./grid"), { ssr: false })

export default function Gallery() {
    const [selectedCountry, setSelectedCountry] = useState<string | null>(null)
    const [showCountryFilter, setShowCountryFilter] = useState(false)
    const [activePhoto, setActivePhoto] = useState<Photo | null>(null)

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && activePhoto) {
                setActivePhoto(null)
            }
        }

        if (activePhoto) {
            document.addEventListener('keydown', handleEscape)
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
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center text-4xl lg:text-6xl font-bold mb-6"
                >
                    <span className="bg-gradient-to-r from-primary-pink via-purple-600 to-secondary-teal bg-clip-text text-transparent">
                        Photography Gallery
                    </span>
                </motion.h1>
                <p className="text-center text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8 mt-8">
                    Capturing authentic moments during my travels.
                    From street portraits to candid scenes, these photos celebrate the people and cultures
                    that make each destination unique.
                </p>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <div className="flex justify-center mb-6">
                        <div className="inline-flex items-center gap-2 px-4 py-1 bg-white/70 dark:bg-slate-700/50 border border-gray-200 dark:border-slate-600 rounded-full text-xs text-gray-600 dark:text-gray-300 font-medium backdrop-blur-sm shadow-sm">
                            <Camera className="w-4 h-4 text-primary-pink" />
                            Canon R10 · Sigma 17–50mm · iPhone 14 Pro
                        </div>
                    </div>

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


                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="mb-16"
                >

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


                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="masonry-container"
                >
                    <Grid photoLayout={photoLayout} setActivePhoto={setActivePhoto} />
                </motion.div>


                <Cta />
            </div>

            <Modal activePhoto={activePhoto} onClose={() => setActivePhoto(null)} />

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
                
                .break-inside-avoid {
                    break-inside: avoid;
                    page-break-inside: avoid;
                }
                
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