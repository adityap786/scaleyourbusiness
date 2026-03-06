"use client"

import dynamic from "next/dynamic"
import { Container } from "@/components/ui/container"
import { motion, type Variants } from "motion/react"
import { ArrowRight, Check } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

/* ─── Lazy-load the 3D scene (SSR disabled) ─── */
const BoxingRobotScene = dynamic(
    () => import("@/components/three/boxing-robot-scene").then((mod) => mod.BoxingRobotScene),
    { ssr: false }
)

/* ─── Stagger animation variants ─── */
const containerVariants: Variants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.1, delayChildren: 0.15 },
    },
}

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
    },
}

/* ─── Capabilities list ─── */
const capabilities = [
    "Qualify and respond to leads instantly",
    "Automate WhatsApp and CRM workflows",
    "Integrate seamlessly with your existing tools",
    "Eliminate operational bottlenecks",
    "Run 24/7 without supervision",
]

/* ─── Device detection hook ─── */
function useIsMobile(breakpoint = 1024) {
    const [isMobile, setIsMobile] = useState(false)
    useEffect(() => {
        const mq = window.matchMedia(`(max-width: ${breakpoint}px)`)
        setIsMobile(mq.matches)
        const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches)
        mq.addEventListener("change", handler)
        return () => mq.removeEventListener("change", handler)
    }, [breakpoint])
    return isMobile
}

export function AIAutomationHero() {
    const isMobile = useIsMobile()

    return (
        <section className="relative py-16 lg:py-24 bg-[var(--color-bg)] overflow-hidden">
            {/* Subtle grid */}
            <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" />

            {/* Radial glow behind robot */}
            <div className="absolute top-1/2 right-0 w-[600px] h-[600px] lg:w-[800px] lg:h-[800px] -translate-y-1/2 translate-x-1/3 rounded-full bg-[radial-gradient(circle,rgba(79,70,229,0.1)_0%,transparent_70%)] pointer-events-none" />

            {/*
             * Desktop layout: min-h-screen, side-by-side
             * Mobile layout: auto height, stacked (3D below copy)
             */}
            <Container className="relative z-10">
                <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-4">

                    {/* ─── Left / Top column: Copy ─── */}
                    <motion.div
                        className="flex-1 lg:max-w-[55%] space-y-6 lg:space-y-8"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >


                        {/* Headline */}
                        <motion.h2
                            variants={itemVariants}
                            className="text-3xl sm:text-4xl lg:text-[2.8rem] font-bold tracking-tight leading-[1.12] text-[var(--color-text)]"
                        >
                            Your business shouldn&apos;t depend on{" "}
                            <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-blue-500 bg-clip-text text-transparent">
                                repetitive tasks
                            </span>
                            , delayed responses, or fragile workflows.
                        </motion.h2>

                        {/* Intro text */}
                        <motion.p
                            variants={itemVariants}
                            className="text-base lg:text-lg text-[var(--color-text-secondary)] leading-relaxed max-w-xl"
                        >
                            We engineer structured AI systems that:
                        </motion.p>

                        {/* Capability bullets */}
                        <motion.ul variants={itemVariants} className="space-y-2.5 lg:space-y-3">
                            {capabilities.map((item, i) => (
                                <motion.li
                                    key={i}
                                    variants={itemVariants}
                                    className="flex items-start gap-3 text-[var(--color-text-secondary)]"
                                >
                                    <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-blue-500/15 flex items-center justify-center">
                                        <Check className="w-3 h-3 text-blue-400" />
                                    </span>
                                    <span className="text-sm sm:text-base lg:text-lg">{item}</span>
                                </motion.li>
                            ))}
                        </motion.ul>

                        {/* Subtext */}
                        <motion.p
                            variants={itemVariants}
                            className="text-sm lg:text-base text-[var(--color-text-muted)] leading-relaxed max-w-lg border-l-2 border-blue-500/30 pl-4"
                        >
                            This isn&apos;t surface-level automation. This is{" "}
                            <span className="text-[var(--color-text)] font-medium">
                                production-grade AI infrastructure
                            </span>{" "}
                            built for performance, scale, and long-term growth.
                        </motion.p>

                        {/* CTA */}
                        <motion.div variants={itemVariants} className="pt-1">
                            <Link href="/contact">
                                <button className="group relative inline-flex items-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white font-semibold text-sm sm:text-base rounded-xl transition-all duration-300 shadow-lg shadow-blue-600/25 hover:shadow-blue-500/40 hover:-translate-y-0.5 active:scale-[0.98]">
                                    Deploy Intelligent Automation
                                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" />
                                    <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500" />
                                </button>
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* ─── Right / Bottom column: 3D Robot ─── */}
                    <motion.div
                        className="
                            flex-1 w-full
                            /* Mobile: compact strip below text */
                            h-[380px] sm:h-[420px]
                            /* Tablet */
                            md:h-[500px]
                            /* Desktop: full height column */
                            lg:max-w-[45%] lg:h-auto lg:self-stretch lg:min-h-[560px]
                            /* Negative margin pulls canvas flush with section bottom on desktop */
                            lg:-mb-0
                        "
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
                    >
                        <BoxingRobotScene
                            className="w-full h-full"
                            isMobile={isMobile}
                        />
                    </motion.div>
                </div>
            </Container>

            {/* Bottom fade */}
            <div className="absolute bottom-0 left-0 right-0 h-16 lg:h-20 bg-gradient-to-t from-[var(--color-bg)] to-transparent pointer-events-none z-10" />
        </section>
    )
}
