"use client"

import links from "@/constants/link"
import { motion } from "framer-motion"
import { usePathname } from "next/navigation"
import React from "react"

export function Cta({ variant }: { variant?: "light" | "dark" }) {
    const pathname = usePathname()

    const getSecondButton = () => {
        if (pathname === '/projects') {
            return { href: '/resume', text: 'View My Background' }
        } else if (pathname === '/gallery') {
            return { href: '/projects', text: 'View My Technical Work' }
        } else {
            return { href: '/projects', text: 'Browse My Work' }
        }
    }

    const secondButton = getSecondButton()

    let sectionBg = "bg-transparent";
    let cardBg = "bg-gradient-to-r from-primary-pink to-accent-blue text-white";
    let btnBg = "bg-white text-primary-pink border-white hover:bg-gray-100";
    if (variant === "dark") {
        sectionBg = "bg-[#181926] dark:bg-[#181926]";
        cardBg = "bg-gradient-to-r from-[#23263a] to-[#181926] text-white";
        btnBg = "bg-white/10 text-white border-white/20 hover:bg-white/20";
    }

    return (
        <section className={`section-padding pb-0 ${sectionBg}`}>
            <div className="container-custom">
                <motion.section
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="text-center"
                >
                    <div className={`${cardBg} p-8 rounded-xl shadow-lg`}>
                        <h3 className="text-2xl font-bold mb-4 flex items-center justify-center gap-2">
                            Ready to Collaborate
                        </h3>
                        <p className="text-md leading-relaxed mb-6 max-w-3xl mx-auto">
                            Whether you&apos;re seeking a technical collaborator who can align delivery with product goals, or just want to chat about building impactful solutions at the intersection of tech, design, and strategy — I&apos;d love to connect.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href={links.email}
                                className={`btn-secondary ${btnBg} transition-colors duration-200`}
                            >
                                Get In Touch
                            </a>
                            <a
                                href={secondButton.href}
                                className={`btn-secondary ${btnBg} transition-colors duration-200`}
                            >
                                {secondButton.text}
                            </a>
                        </div>
                    </div>
                </motion.section>
            </div>
        </section>
    )
}