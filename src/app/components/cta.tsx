"use client"

import links from "@/constants/link"
import { motion } from "framer-motion"
import { usePathname } from "next/navigation"
import React from "react"
import { ctaButtonConfig, ctaStyleConfig } from "@/constants/cta"

export function Cta({ variant }: { variant?: "light" | "dark" }) {
    const pathname = usePathname()

    const getSecondButton = () => {
        if (pathname === '/projects') {
            return ctaButtonConfig.projects
        } else if (pathname === '/gallery') {
            return ctaButtonConfig.gallery
        } else {
            return ctaButtonConfig.default
        }
    }

    const secondButton = getSecondButton()
    const styles = variant === "dark" ? ctaStyleConfig.dark : ctaStyleConfig.light

    return (
        <section className={`section-padding pb-0 ${styles.sectionBg}`}>
            <div className="container-custom">
                <motion.section
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="text-center"
                >
                    <div className={`${styles.cardBg} p-8 rounded-xl shadow-lg`}>
                        <h3 className="text-2xl font-bold mb-4 flex items-center justify-center gap-2">
                            Ready to Collaborate
                        </h3>
                        <p className="text-md leading-relaxed mb-6 max-w-3xl mx-auto">
                            Whether you&apos;re seeking a technical collaborator who can align delivery with product goals, or just want to chat about building impactful solutions at the intersection of tech, design, and strategy — I&apos;d love to connect.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href={links.email}
                                className={`btn-secondary ${styles.btnBg} transition-colors duration-200`}
                            >
                                Get In Touch
                            </a>
                            <a
                                href={secondButton.href}
                                className={`btn-secondary ${styles.btnBg} transition-colors duration-200`}
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