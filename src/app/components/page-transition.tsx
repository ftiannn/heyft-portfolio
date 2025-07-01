"use client"

import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"
import { useRef, useEffect } from "react"

interface PageTransitionProps {
    children: React.ReactNode
}

const getTransitionForRoute = (pathname: string, previousPath: string | null) => {
    if (previousPath === '/' && pathname === '/about') {
        return {
            variants: {
                initial: { opacity: 0, y: 100, scale: 0.96 },
                in: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                        duration: 1.2,
                        ease: [0.16, 1, 0.3, 1],
                        opacity: { duration: 0.8 },
                        y: { duration: 1.2 },
                        scale: { duration: 1.0 }
                    }
                },
                out: {
                    opacity: 0,
                    y: -30,
                    scale: 1.02,
                    transition: {
                        duration: 0.4,
                        ease: [0.4, 0, 0.2, 1]
                    }
                }
            },
            hasCustomTransition: true
        }
    }

    if (previousPath === '/about' && pathname === '/') {
        return {
            variants: {
                initial: { opacity: 0, y: -100, scale: 0.96 },
                in: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                        duration: 1.0,
                        ease: [0.16, 1, 0.3, 1],
                        opacity: { duration: 0.6 },
                        y: { duration: 1.0 },
                        scale: { duration: 0.8 }
                    }
                },
                out: {
                    opacity: 0,
                    y: 30,
                    scale: 1.02,
                    transition: {
                        duration: 0.4,
                        ease: [0.4, 0, 0.2, 1]
                    }
                }
            },
            hasCustomTransition: true
        }
    }

    return {
        variants: {
            initial: { opacity: 1 },
            in: { opacity: 1 },
            out: { opacity: 1 }
        },
        hasCustomTransition: false
    }
}

export function PageTransition({ children }: Readonly<PageTransitionProps>) {
    const pathname = usePathname()
    const previousPath = useRef<string | null>(null)
    const isFirstRender = useRef(true)

    const { variants, hasCustomTransition } = getTransitionForRoute(pathname, previousPath.current)

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false
            previousPath.current = pathname
            return
        }

        const timeoutId = setTimeout(() => {
            previousPath.current = pathname
        }, 100)

        return () => clearTimeout(timeoutId)
    }, [pathname])

    if (!hasCustomTransition) {
        return <div className="relative min-h-screen">{children}</div>
    }

    return (
        <AnimatePresence mode="wait" initial={false}>
            <motion.div
                key={pathname}
                initial="initial"
                animate="in"
                exit="out"
                variants={variants}
                className="relative min-h-screen"
            >
                {children}
            </motion.div>
        </AnimatePresence>
    )
}