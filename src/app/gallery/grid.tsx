import { motion } from "framer-motion";
import Image from "next/image";
import { Photo } from "@/types/gallery.type";
import React from "react";

interface PhotoWithLayout extends Photo {
    layout: { width: number; minHeight: number };
}

interface GridProps {
    photoLayout: PhotoWithLayout[];
    setActivePhoto: (photo: PhotoWithLayout) => void;
}

const Grid: React.FC<GridProps> = ({ photoLayout, setActivePhoto }) => (
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
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-xl" />
                            <div className="absolute top-4 right-4 glass-tag flex items-center gap-2 opacity-0 group-hover:opacity-100 bg-black/60 px-2 py-1 rounded transition-all duration-300">
                                <span className="text-xs font-medium text-white">{photo.country}</span>
                            </div>
                            <div className="absolute top-0 left-0 w-0 h-0 border-l-[30px] border-t-[30px] border-l-primary-pink/20 border-t-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    </motion.div>
);

export default Grid; 