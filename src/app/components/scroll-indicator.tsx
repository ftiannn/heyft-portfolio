"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

interface HeroSectionProps {
    children: React.ReactNode;
    className?: string;
    scrollTo?: string;
    scrollOffset?: number;
    backgroundElements?: React.ReactNode;
}

export function ScrollIndicator({
    children,
    className = "",
    scrollTo,
    scrollOffset = 0,
    backgroundElements
}: Readonly<HeroSectionProps>) {
    const heroRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"]
    });

    const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "5%"]);
    const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    const handleScrollClick = () => {
        if (scrollTo) {
            const element = document.querySelector(scrollTo);
            if (element) {
                const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                window.scrollTo({
                    top: elementPosition + scrollOffset,
                    behavior: 'smooth'
                });
            }
        } else {
            window.scrollTo({
                top: window.innerHeight + scrollOffset,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div ref={heroRef} className={`relative min-h-0 flex items-center justify-center overflow-hidden ${className}`}>

            <div className="absolute inset-0 overflow-hidden">
                {backgroundElements || (
                    <>
                        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-pink/10 rounded-full blur-2xl animate-pulse"></div>
                        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-accent-blue/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                    </>
                )}
            </div>

            <motion.div
                style={{ y: heroY, opacity: heroOpacity }}
                className="relative z-10 text-center px-8 max-w-4xl pb-16"
            >
                {children}
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                onClick={handleScrollClick}
                className="absolute bottom-4 left-1/2 transform -translate-x-1/2 cursor-pointer group"
            >
                <div className="w-6 h-10 border-2 border-text-gray dark:border-gray-500 rounded-full flex justify-center glass hover:border-primary-pink/50 transition-all duration-300 group-hover:scale-110">
                    <motion.div
                        className="w-1 h-3 bg-gradient-primary rounded-full mt-2"
                        animate={{
                            y: [0, 6, 0],
                            opacity: [0.7, 1, 0.7]
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                </div>
            </motion.div>
        </div>
    );
}
