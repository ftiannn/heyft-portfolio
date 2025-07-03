"use client";

import React, { useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { personalInterests } from "@/constants/about";
import { PersonalInterest } from "@/types/about.type";
import { allPhotos, countries } from "@/constants/gallery";

const useMagnetic = (strength = 0.3) => {
    const ref = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    React.useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!ref.current) return;
            const rect = ref.current.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            const deltaX = e.clientX - centerX;
            const deltaY = e.clientY - centerY;
            const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
            if (distance < 150) {
                setPosition({ x: deltaX * strength, y: deltaY * strength });
            } else {
                setPosition({ x: 0, y: 0 });
            }
        };
        document.addEventListener("mousemove", handleMouseMove);
        return () => document.removeEventListener("mousemove", handleMouseMove);
    }, [strength]);
    return { ref, position };
};

const ModernInterestCard = ({ interest }: { interest: PersonalInterest }) => {
    const { ref, position } = useMagnetic(0.2);
    const cardRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(cardRef, { once: true, margin: "-50px" });
    const [isHovered, setIsHovered] = useState(false);
    const { scrollYProgress } = useScroll({ target: cardRef, offset: ["start end", "end start"] });
    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
    const handleClick = () => {
        if (interest.link) {
            if (interest.link.startsWith("http") || interest.link.startsWith("/")) {
                window.open(interest.link, "_blank");
            }
        }
    };

    const getSpotifyEmbedSrc = (url: string) => {
        const match = url.match(/open\.spotify\.com\/playlist\/([a-zA-Z0-9]+)/);
        if (match) {
            return `https://open.spotify.com/embed/playlist/${match[1]}?utm_source=generator&theme=0&view=coverart`;
        }
        return url;
    };

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)", y: 60 }}
            animate={isInView ? { opacity: 1, scale: 1, filter: "blur(0px)", y: 0 } : {}}
            style={{ y, opacity }}
            className="h-full w-full p-2"
        >
            <motion.div
                ref={ref}
                animate={{ x: position.x, y: position.y }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                whileHover={{ scale: interest.link ? 1.02 : 1, transition: { duration: 0.2 } }}
                whileTap={{ scale: interest.link ? 0.98 : 1, transition: { duration: 0.1 } }}
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
                onClick={handleClick}
                className={`h-full w-full rounded-[2rem] ${interest.link ? 'cursor-pointer' : 'cursor-default'} overflow-hidden group relative min-h-[320px] md:min-h-[380px] flex flex-col`}
                style={{ boxShadow: isHovered ? `0 25px 50px ${interest.color.replace('text-', '#')}40` : '0 10px 30px rgba(0,0,0,0.1)' }}
            >
                {/* Glass reflection effect */}
                <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100"
                    animate={isHovered ? {
                        background: [
                            `linear-gradient(45deg, transparent, ${interest.color.replace('text-', '#')}20, transparent)`,
                            `linear-gradient(135deg, transparent, ${interest.color.replace('text-', '#')}20, transparent)`,
                            `linear-gradient(225deg, transparent, ${interest.color.replace('text-', '#')}20, transparent)`,
                            `linear-gradient(315deg, transparent, ${interest.color.replace('text-', '#')}20, transparent)`,
                            `linear-gradient(45deg, transparent, ${interest.color.replace('text-', '#')}20, transparent)`
                        ]
                    } : {}}
                    transition={{ duration: 2, repeat: Infinity }}
                />
                <div className="relative z-10 p-3 sm:p-5 h-full flex flex-col flex-1">
                    {/* Header with magnetic icon */}
                    <motion.div className="flex items-start justify-between mb-3">
                        <motion.div
                            className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center text-white relative overflow-hidden"
                            style={{ backgroundColor: interest.color.replace('text-', '#') }}
                            whileHover={{ boxShadow: `0 0 20px ${interest.color.replace('text-', '#')}80` }}
                        >
                            {interest.icon && React.createElement(interest.icon, { className: "w-5 h-5 sm:w-6 sm:h-6 relative z-10" })}
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            animate={isHovered && interest.link ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            {interest.link && <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 text-white/70" />}
                        </motion.div>
                    </motion.div>
                    {/* Title */}
                    <motion.h3
                        className="text-lg sm:text-xl font-bold text-white mb-2"
                        whileHover={{
                            textShadow: [
                                "0 0 0px transparent",
                                `2px 0 0px ${interest.color.replace('text-', '#')}`,
                                "-2px 0 0px cyan",
                                "0 0 0px transparent"
                            ]
                        }}
                        transition={{ duration: 0.3, repeat: isHovered ? Infinity : 0, repeatDelay: 0.1 }}
                    >
                        {interest.title}
                    </motion.h3>
                    {/* Special content for gallery, playlist, etc. */}
                    <div className="flex-1 mb-3 flex flex-col">
                        {interest.preview && interest.preview.length > 0 && (
                            <div className="flex-1 rounded-xl overflow-hidden mb-4 relative">
                                <motion.div
                                    animate={{ x: ["0%", "-50%"] }}
                                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                                    className="flex gap-2 h-full"
                                >
                                    {interest.preview.map((img: string, i: number) => (
                                        <motion.img
                                            key={i}
                                            src={img}
                                            className="h-full w-24 sm:w-32 object-cover rounded-lg flex-shrink-0"
                                            whileHover={{ scale: 1.1, filter: "brightness(1.2)" }}
                                        />
                                    ))}
                                </motion.div>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                                <div className="absolute bottom-3 left-3 text-white">
                                    <div className="text-sm font-semibold">{allPhotos.length} photos</div>
                                    <div className="text-xs opacity-80">{countries.length} countries explored</div>
                                </div>
                            </div>
                        )}
                        {interest.embed && (
                            <div className="flex-1 flex flex-col space-y-3">
                                <div className="flex-1 rounded-xl overflow-hidden min-h-[160px] sm:min-h-[180px] relative group">
                                    <iframe
                                        src={getSpotifyEmbedSrc(interest.embed)}
                                        width="100%"
                                        height="100%"
                                        frameBorder="0"
                                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                                        loading="lazy"
                                        className="rounded-xl"
                                    />
                                    {/* Click indicator overlay */}
                                    <motion.div
                                        className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 flex items-center justify-center rounded-xl transition-opacity duration-300"
                                        whileHover={{ backgroundColor: "rgba(0,0,0,0.3)" }}
                                    >
                                        <motion.div
                                            className="bg-white/20 backdrop-blur-sm rounded-full p-2 sm:p-3 flex items-center gap-2"
                                            whileHover={{ scale: 1.1 }}
                                        >
                                            <ExternalLink className="w-4 h-4 text-white" />
                                            <span className="text-white text-sm font-medium">Open Spotify</span>
                                        </motion.div>
                                    </motion.div>
                                </div>
                                <div className="flex justify-center gap-4 text-xs text-white/60">
                                    <span>42 tracks</span>
                                    <span>•</span>
                                    <span>2.5 hours</span>
                                </div>
                            </div>
                        )}
                    </div>
                    {/* Description, Details, and Action Indicator improved */}
                    <div className="flex flex-col min-h-[120px] gap-y-2 h-full">
                        <div className="flex flex-col gap-y-2">
                            <motion.p
                                className="text-sm text-white/80 leading-relaxed px-2 py-2 rounded-xl transition-all duration-300 text-center"
                                initial={{ opacity: 0.7 }}
                                whileHover={{ opacity: 1 }}
                            >
                                {interest.description}
                            </motion.p>
                            {interest.details && (
                                <>
                                    <div className="w-full h-4 flex items-center justify-center">
                                        <div className="w-10 h-1 rounded-full bg-gradient-to-r from-white/0 via-white/20 to-white/0" />
                                    </div>
                                    <motion.p
                                        className="text-xs text-white/60 leading-relaxed px-2 py-1 rounded-lg transition-all duration-300 text-center"
                                        initial={{ opacity: 0.7 }}
                                        whileHover={{ opacity: 1 }}
                                    >
                                        {interest.details}
                                    </motion.p>
                                </>
                            )}
                        </div>
                        <motion.div
                            className="flex items-center justify-between mt-auto pt-2"
                        >
                            {interest.link ? (
                                <span className="inline-flex items-center text-white/90 text-xs font-medium select-none">
                                    Click to explore
                                    <ArrowUpRight className="w-4 h-4 text-white/60 ml-1" />
                                </span>
                            ) : (
                                <span className="inline-flex items-center text-white/30 text-xs font-normal select-none">
                                    No link available
                                </span>
                            )}
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

const BeyondCodeSection = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
    const { scrollYProgress } = useScroll();
    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    return (
        <section
            ref={sectionRef}
            id="beyond"
            className="py-16 sm:py-24 px-4 relative overflow-visible"
        >
            <motion.div
                className="absolute inset-0 z-0"
                style={{ y: backgroundY }}
                animate={{
                    background: [
                        "radial-gradient(circle at 20% 80%, #ec489920 0%, transparent 50%)",
                        "radial-gradient(circle at 80% 20%, #f59e0b20 0%, transparent 50%)",
                        "radial-gradient(circle at 40% 40%, #14b8a620 0%, transparent 50%)",
                        "radial-gradient(circle at 60% 80%, #3b82f620 0%, transparent 50%)",
                    ],
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="relative z-10 max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 1 }}
                    className="text-center mb-12 sm:mb-16"
                >
                    <motion.div
                        className="inline-block bg-white/10 px-4 sm:px-5 py-2 sm:py-3 rounded-full text-white text-sm mb-4 sm:mb-6 backdrop-blur-sm border border-white/10"
                        initial={{ scale: 0 }}
                        animate={isInView ? { scale: 1 } : {}}
                        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    >
                        ✨ Personal Universe
                    </motion.div>
                    <motion.h2
                        className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-amber-400 to-teal-300 mb-4 sm:mb-6"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ delay: 0.4, duration: 1 }}
                    >
                        Beyond Code
                    </motion.h2>
                    <motion.p
                        className="max-w-2xl mx-auto text-white/60 text-base sm:text-lg leading-relaxed"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ delay: 0.6, duration: 0.8 }}
                    >
                        The passions that fuel creativity and keep life interesting
                    </motion.p>
                </motion.div>
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-6"
                    initial="hidden"
                    animate="visible"
                    variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
                >
                    {/* 1st row: 2col photo + 1col spotify */}
                    <div className="md:col-span-2 h-full">
                        <ModernInterestCard interest={personalInterests[0]} />
                    </div>
                    <div className="h-full">
                        <ModernInterestCard interest={personalInterests[1]} />
                    </div>
                    {/* 2nd row: 1col each for the rest */}
                    <div className="h-full">
                        <ModernInterestCard interest={personalInterests[2]} />
                    </div>
                    <div className="h-full">
                        <ModernInterestCard interest={personalInterests[3]} />
                    </div>
                    <div className="h-full">
                        <ModernInterestCard interest={personalInterests[4]} />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default BeyondCodeSection; 