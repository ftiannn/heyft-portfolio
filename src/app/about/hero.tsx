import Image from "next/image";
import { motion } from "framer-motion";
import { quickFacts } from "@/constants/about";
import { ScrollIndicator } from "../components";
import React from "react";

interface HeroProps {
    imageLoaded: boolean;
    setImageLoaded: (loaded: boolean) => void;
}

const Hero: React.FC<HeroProps> = ({ imageLoaded, setImageLoaded }) => (
    <section id="hero">
        <ScrollIndicator scrollOffset={-20}>
            <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="mb-8 mt-8"
            >
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-6 shadow-large ring-4 ring-primary-pink/20 hover:ring-primary-pink/40 transition-all duration-300">
                    <Image
                        src="/avatar.png"
                        onLoad={() => setImageLoaded(true)}
                        className={`object-cover object-center transition-all duration-500 hover:scale-110 ${imageLoaded ? "opacity-100" : "opacity-0"
                            }`}
                        alt="FT Tan - Developer Avatar"
                        width={128}
                        height={128}
                        priority
                    />
                </div>
            </motion.div>
            <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
            >
                <span className="gradient-text">FT Tan</span>
            </motion.h1>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-xl md:text-2xl text-text-gray dark:text-gray-300 mb-6 font-medium"
            >
                I turn complex problems into simple, beautiful solutions
            </motion.div>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-base md:text-xl text-text-gray dark:text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed"
            >
                Product-focused developer who enjoys bridging technology and business to
                build impactful solutions. 7+ years of experience aligning
                cross-functional teams and delivering nationwide platforms.
            </motion.p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {quickFacts.map((fact, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.9 + index * 0.1, type: "spring" }}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="glass px-4 py-2 rounded-full text-sm font-medium text-text-gray dark:text-gray-300 border border-primary-pink/20 shadow-soft hover:shadow-pink hover:border-primary-pink/40 transition-all duration-300"
                    >
                        <span className="mr-2">{fact.icon}</span>
                        {fact.text}
                    </motion.div>
                ))}
            </div>
        </ScrollIndicator>
    </section>
);

export default Hero;
