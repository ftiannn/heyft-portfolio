"use client"

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

export interface NavigationSection {
    id: string;
    label: string;
    icon: LucideIcon;
    color?: string;
}

export interface FloatingNavigationProps {
    sections: NavigationSection[];
    activeSection: string;
    onNavigate: (sectionId: string) => void;
    scrollProgress?: number;
    className?: string;
}

interface DesktopLeftFloatingNavProps {
    activeSection: string;
    onNavigate: (sectionId: string) => void;
    scrollProgress: number;
    sections: NavigationSection[];
}

interface MobileCollapsibleNavProps {
    activeSection: string;
    onNavigate: (sectionId: string) => void;
    sections: NavigationSection[];
}

const DesktopLeftFloatingNav = ({
    activeSection,
    onNavigate,
    scrollProgress,
    sections,
}: DesktopLeftFloatingNavProps) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden md:block"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-xl px-3 py-4 shadow-xl border border-gray-200/60 dark:border-gray-700/50">
                <div className="space-y-2">
                    {sections.map((section) => {
                        const isActive = activeSection === section.id;
                        const Icon = section.icon;

                        return (
                            <motion.div
                                key={section.id}
                                className="relative group"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <motion.button
                                    onClick={() => onNavigate(section.id)}
                                    className={`relative w-9 h-9 rounded-lg transition-all duration-300 flex items-center justify-center ${isActive
                                        ? 'bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 shadow-md'
                                        : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600 hover:text-gray-900 dark:hover:text-gray-200'
                                        }`}
                                    animate={{ scale: isActive ? 1.1 : 1 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <Icon className="w-4 h-4" />

                                    {isActive && (
                                        <svg className="absolute inset-0 w-9 h-9 transform -rotate-90">
                                            <circle
                                                cx="18"
                                                cy="18"
                                                r="16"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="1"
                                                className="opacity-20"
                                            />
                                            <motion.circle
                                                cx="18"
                                                cy="18"
                                                r="16"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="1"
                                                strokeLinecap="round"
                                                className="opacity-60"
                                                initial={{ pathLength: 0 }}
                                                animate={{ pathLength: scrollProgress / 100 }}
                                                transition={{ duration: 0.3 }}
                                                style={{ strokeDasharray: "1 1" }}
                                            />
                                        </svg>
                                    )}
                                </motion.button>

                                <AnimatePresence>
                                    {(isHovered || isActive) && (
                                        <motion.div
                                            initial={{ opacity: 0, x: -6, scale: 0.96 }}
                                            animate={{ opacity: 1, x: 0, scale: 1 }}
                                            exit={{ opacity: 0, x: -6, scale: 0.96 }}
                                            transition={{ duration: 0.15 }}
                                            className="absolute left-full top-1/2 -translate-y-1/2 ml-2 z-50"
                                        >
                                            <div className="relative bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 px-3 py-1.5 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 text-sm font-medium whitespace-nowrap">
                                                {section.label}
                                                {isActive && (
                                                    <div className="text-[11px] font-normal text-gray-500 mt-0.5">
                                                        {Math.round(scrollProgress)}% complete
                                                    </div>
                                                )}
                                                <div className="absolute top-1/2 right-full -translate-y-1/2 pr-[1px]">
                                                    <div className="w-2 h-2 bg-white dark:bg-gray-900 border-t border-l border-gray-200 dark:border-gray-700 rotate-45 shadow-sm"></div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                {isActive && (
                                    <motion.div
                                        layoutId="activeDesktopIndicator"
                                        className="absolute -right-1 top-1/2 -translate-y-1/2 w-2 h-2 bg-gray-900 dark:bg-gray-100 rounded-full"
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    />
                                )}
                            </motion.div>
                        );
                    })}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isHovered ? 1 : 0.4 }}
                    className="mt-4 pt-3 border-t border-gray-200 dark:border-gray-700 text-center"
                >
                    <div className="text-xs font-medium text-gray-600 dark:text-gray-400">
                        {Math.round(scrollProgress)}%
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};


const MobileCollapsibleNav = ({
    activeSection,
    onNavigate,
    sections
}: MobileCollapsibleNavProps) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const navRef = useRef<HTMLDivElement>(null);
    const currentSection = sections.find((s) => s.id === activeSection);
    const currentIndex = sections.findIndex((s) => s.id === activeSection);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent | TouchEvent) => {
            if (navRef.current && !navRef.current.contains(event.target as Node)) {
                setIsExpanded(false);
            }
        };

        if (isExpanded) {
            document.addEventListener("mousedown", handleClickOutside);
            document.addEventListener("touchstart", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("touchstart", handleClickOutside);
        };
    }, [isExpanded]);

    const handleNavigation = (sectionId: string) => {
        onNavigate(sectionId);
        setIsExpanded(false);
    };

    return (
        <div className="md:hidden">
            <motion.button
                onClick={() => setIsExpanded((prev) => !prev)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="fixed bottom-4 right-4 z-50 bg-white dark:bg-slate-800 shadow-xl border border-gray-200 dark:border-gray-700 rounded-full p-3 backdrop-blur-xl"
            >
                <div className="relative">
                    <div className="w-6 h-6 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                        {currentSection && (
                            <currentSection.icon className="w-4 h-4 text-gray-800 dark:text-gray-100" />
                        )}
                    </div>
                </div>
            </motion.button>

            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        ref={navRef}
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "100%" }}
                        transition={{ duration: 0.25 }}
                        className="fixed bottom-0 left-0 w-full z-40"
                    >
                        <div className="w-full bg-white dark:bg-slate-800 rounded-t-2xl p-4 shadow-2xl border-t border-gray-200 dark:border-gray-700 backdrop-blur-xl">
                            <div className="text-center mb-4">
                                <div className="text-sm font-medium text-gray-600 dark:text-gray-400">
                                    Navigate to Section
                                </div>
                            </div>

                            <div className="grid grid-cols-3 gap-3">
                                {sections.map((section, index) => {
                                    const isActive = activeSection === section.id;
                                    const Icon = section.icon;

                                    return (
                                        <motion.button
                                            key={section.id}
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: index * 0.04 }}
                                            onClick={() => handleNavigation(section.id)}
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            className={`relative p-3 rounded-xl transition-all text-sm ${isActive
                                                ? "bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900"
                                                : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                                                }`}
                                        >
                                            <div className="flex flex-col items-center">
                                                <Icon className="w-5 h-5 mb-1" />
                                                <span className="text-xs text-center">{section.label}</span>
                                            </div>

                                            {isActive && (
                                                <motion.div
                                                    layoutId="activeMobileIndicator"
                                                    className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-gray-900 dark:bg-gray-100 rounded-full"
                                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                                />
                                            )}
                                        </motion.button>
                                    );
                                })}
                            </div>

                            <div className="mt-4">
                                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 overflow-hidden">
                                    <motion.div
                                        className="h-full bg-gray-900 dark:bg-gray-100 rounded-full"
                                        initial={{ width: 0 }}
                                        animate={{ width: `${((currentIndex + 1) / sections.length) * 100}%` }}
                                        transition={{ duration: 0.4 }}
                                    />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export const FloatingNavigation: React.FC<FloatingNavigationProps> = ({
    sections,
    activeSection,
    onNavigate,
    scrollProgress = 0,
    className = "",
}) => {
    return (
        <div className={className}>
            <DesktopLeftFloatingNav
                activeSection={activeSection}
                onNavigate={onNavigate}
                scrollProgress={scrollProgress}
                sections={sections}
            />

            <MobileCollapsibleNav
                activeSection={activeSection}
                onNavigate={onNavigate}
                sections={sections}
            />
        </div>
    );
};

export default FloatingNavigation;