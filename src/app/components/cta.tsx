"use client"

import { motion } from "framer-motion"
import { usePathname } from "next/navigation"

export function Cta() {
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

    return (
        <section className="section-padding bg-gradient-light dark:bg-gradient-dark">
            <div className="container-custom">
                <motion.section
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="section-padding text-center"
                >
                    <div className="bg-gradient-to-r from-primary-pink to-accent-blue p-8 rounded-xl text-white shadow-lg">
                        <h3 className="text-2xl font-bold mb-4 flex items-center justify-center gap-2">
                            Ready to Collaborate
                        </h3>
                        <p className="text-md leading-relaxed mb-6 max-w-3xl mx-auto">
                            Whether you’re seeking a technical collaborator who can align delivery with product goals, or just want to chat about building impactful solutions at the intersection of tech, design, and strategy — I’d love to connect.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="mailto:tanft25@gmail.com"
                                className="btn-secondary bg-white text-primary-pink border-white hover:bg-gray-100 transition-colors duration-200"
                            >
                                Get In Touch
                            </a>
                            <a
                                href={secondButton.href}
                                className="btn-secondary bg-white text-primary-pink border-white hover:bg-gray-100 transition-colors duration-200"
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