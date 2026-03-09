"use client"

import Link from "next/link"
import AnimatedGradientBackground from "@/components/ui/animated-gradient-background"
import { motion } from "motion/react"

export function MobileHero() {
    return (
        <section className="relative w-full min-h-[100svh] flex flex-col items-center justify-center overflow-hidden bg-black px-6">

            {/* React Bits Premium Gradient Background */}
            <div className="absolute inset-0 z-0">
                <AnimatedGradientBackground
                    Breathing={true}
                    animationSpeed={0.03}
                    startingGap={100}
                    breathingRange={20}
                    topOffset={20}
                    gradientColors={["#000000", "#1e1e1e", "#3b82f6", "#8b5cf6", "#1e1e1e", "#000000"]}
                    containerClassName="opacity-80"
                />
            </div>

            {/* Dark overlay to ensure text contrast */}
            <div className="absolute inset-0 bg-black/40 z-[1] pointer-events-none" />

            {/* Main Foreground Content */}
            <div className="relative z-10 w-full flex flex-col items-center justify-center text-center mt-[-10vh]">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                >
                    <span className="inline-block px-4 py-1.5 rounded-full text-[10px] font-black tracking-widest uppercase text-blue-400 bg-blue-500/10 border border-blue-500/20 mb-6 backdrop-blur-md">
                        AI • Software • Growth
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
                    className="text-[clamp(2.5rem,10vw,4rem)] font-black tracking-tight leading-[1.05] text-white drop-shadow-[0_0_30px_rgba(59,130,246,0.3)] mb-6"
                >
                    SCALE YOUR <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                        BUSINESS
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
                    className="text-base sm:text-lg text-white/70 font-medium whitespace-pre-line max-w-sm mb-10 leading-relaxed"
                >
                    Most businesses don't fail because of bad ideas. They fail because their systems don't scale.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "backOut", delay: 0.8 }}
                >
                    <Link
                        href="#services"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold text-sm sm:text-base rounded-full shadow-[0_0_40px_rgba(59,130,246,0.4)] hover:shadow-[0_0_60px_rgba(59,130,246,0.8)] active:scale-95 transition-all duration-300"
                    >
                        Start Building
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </Link>
                </motion.div>

            </div>

        </section>
    )
}
