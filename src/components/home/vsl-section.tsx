"use client"

import { Container } from "@/components/ui/container"
import { motion, useScroll, useTransform } from "motion/react"
import { useRef, useState } from "react"
import { Play } from "lucide-react"

export function VSLSection() {
    const sectionRef = useRef<HTMLDivElement>(null)
    const [isPlaying, setIsPlaying] = useState(false)

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "center center"],
    })

    const scale = useTransform(scrollYProgress, [0, 1], [0.85, 1])
    const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1])
    const borderRadius = useTransform(scrollYProgress, [0, 1], [48, 24])

    return (
        <section ref={sectionRef} className="py-12 md:py-24 bg-[var(--color-bg)] overflow-hidden">
            <Container>
                <motion.div
                    style={{ scale, opacity, borderRadius }}
                    className="relative mx-auto max-w-6xl overflow-hidden bg-[var(--color-bg-dark)] shadow-[0_20px_80px_rgba(0,0,0,0.2)] rounded-3xl glow-border"
                >
                    {/* Animated glow border */}
                    <div className="absolute -inset-[1px] rounded-[inherit] bg-gradient-to-br from-[var(--color-brand)]/20 via-transparent to-[var(--color-accent)]/20 -z-10 blur-sm" />

                    <div
                        className="relative aspect-video w-full cursor-pointer group"
                        onClick={() => setIsPlaying(true)}
                    >
                        {isPlaying ? (
                            <iframe
                                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&rel=0"
                                className="absolute inset-0 w-full h-full"
                                allow="autoplay; encrypted-media"
                                allowFullScreen
                                title="Scale Your Business — Our Story"
                            />
                        ) : (
                            <>
                                {/* Gradient fill background */}
                                <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-brand)]/40 via-[#0A0A0F] to-[var(--color-accent)]/20" />

                                {/* Dot grid overlay */}
                                <div className="absolute inset-0 dot-grid-dark opacity-40" />

                                {/* Play button */}
                                <div className="absolute inset-0 flex flex-col items-center justify-center">
                                    <motion.div
                                        className="relative"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        {/* Pulsing rings */}
                                        <div
                                            className="absolute inset-0 rounded-full bg-white/10"
                                            style={{
                                                animation: "pulse-glow 3s ease-in-out infinite",
                                            }}
                                        />
                                        <div
                                            className="absolute -inset-6 rounded-full bg-white/5"
                                            style={{
                                                animation: "pulse-glow 4s ease-in-out infinite 0.5s",
                                            }}
                                        />

                                        <div className="relative h-20 w-20 md:h-24 md:w-24 rounded-full bg-white flex items-center justify-center shadow-[0_0_40px_rgba(255,255,255,0.3)] group-hover:shadow-[0_0_60px_rgba(255,255,255,0.5)] transition-all duration-500">
                                            <Play
                                                className="h-8 w-8 md:h-10 md:w-10 text-[var(--color-brand)] ml-1"
                                                fill="currentColor"
                                            />
                                        </div>
                                    </motion.div>
                                    <motion.p
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        className="mt-6 text-sm font-medium text-white/80 tracking-wider uppercase"
                                    >
                                        Watch our 2-min story
                                    </motion.p>
                                </div>

                                {/* Floating badge */}
                                <motion.div
                                    className="absolute top-6 right-6 px-4 py-2 rounded-full glass-card-dark text-xs font-medium text-white/70"
                                    animate={{ y: [0, -8, 0] }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                >
                                    ▶ 2:14
                                </motion.div>
                            </>
                        )}
                    </div>
                </motion.div>
            </Container>
        </section>
    )
}
