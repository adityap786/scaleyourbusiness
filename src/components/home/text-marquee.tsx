"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, useSpring } from "motion/react"

const words = [
    "Websites", "•", "Apps", "•", "AI Automation", "•",
    "SaaS Products", "•", "Content Writing", "•", "Marketing", "•", "Growth", "•",
    "Websites", "•", "Apps", "•", "AI Automation", "•",
    "SaaS Products", "•", "Content Writing", "•", "Marketing", "•", "Growth", "•",
]

const wordsReverse = [
    "India", "•", "Dubai", "•", "USA", "•", "Startups", "•", "Founders", "•",
    "React Native", "•", "Next.js", "•", "n8n", "•", "Scale", "•", "Revenue", "•",
    "India", "•", "Dubai", "•", "USA", "•", "Startups", "•", "Founders", "•",
    "React Native", "•", "Next.js", "•", "n8n", "•", "Scale", "•", "Revenue", "•",
]

export function TextMarquee() {
    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    })

    const x1 = useSpring(useTransform(scrollYProgress, [0, 1], [0, -400]), {
        stiffness: 80,
        damping: 30,
    })
    const x2 = useSpring(useTransform(scrollYProgress, [0, 1], [-400, 0]), {
        stiffness: 80,
        damping: 30,
    })

    return (
        <section
            ref={containerRef}
            className="py-16 md:py-32 bg-[var(--color-bg)] overflow-hidden select-none relative z-10"
        >
            {/* Ambient backlight */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-[200px] bg-[var(--color-brand)]/5 blur-[120px] rounded-full pointer-events-none" />

            {/* Edge rule lines */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[var(--color-brand)]/20 to-transparent" />
            <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[var(--color-brand)]/20 to-transparent" />

            {/* Row 1 – forward */}
            <motion.div style={{ x: x1 }} className="mb-4 md:mb-8 flex will-change-transform">
                <div className="flex animate-marquee whitespace-nowrap">
                    {words.map((word, i) => (
                        <span
                            key={`${word}-${i}`}
                            className={`mx-4 md:mx-6 text-6xl md:text-8xl lg:text-[7rem] font-black tracking-tighter uppercase ${word === "•"
                                    ? "text-[var(--color-brand)]/30"
                                    : "text-transparent bg-clip-text bg-gradient-to-b from-white/20 to-white/5 opacity-50 transition-all duration-500 hover:opacity-100 hover:from-[var(--color-brand)] hover:to-[var(--color-accent)] cursor-default"
                                }`}
                            style={word !== "•" ? { WebkitTextStroke: "1px rgba(255,255,255,0.05)" } : undefined}
                        >
                            {word}
                        </span>
                    ))}
                </div>
            </motion.div>

            {/* Row 2 – reverse */}
            <motion.div style={{ x: x2 }} className="flex will-change-transform">
                <div className="flex animate-marquee-reverse whitespace-nowrap">
                    {wordsReverse.map((word, i) => (
                        <span
                            key={`${word}-${i}`}
                            className={`mx-4 md:mx-6 text-6xl md:text-8xl lg:text-[7rem] font-black tracking-tighter uppercase ${word === "•"
                                    ? "text-[var(--color-accent)]/30"
                                    : "text-transparent bg-clip-text bg-gradient-to-t from-white/20 to-white/5 opacity-50 transition-all duration-500 hover:opacity-100 hover:from-[var(--color-accent)] hover:to-[var(--color-brand)] cursor-default"
                                }`}
                            style={word !== "•" ? { WebkitTextStroke: "1px rgba(255,255,255,0.05)" } : undefined}
                        >
                            {word}
                        </span>
                    ))}
                </div>
            </motion.div>

            {/* Side fades */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-32 md:w-64 bg-gradient-to-r from-[var(--color-bg)] to-transparent z-10" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-32 md:w-64 bg-gradient-to-l from-[var(--color-bg)] to-transparent z-10" />
        </section>
    )
}
