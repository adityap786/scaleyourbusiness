"use client"

import { Container } from "@/components/ui/container"
import { motion } from "motion/react"
import { Button } from "@/components/ui/button"
import dynamic from "next/dynamic"

const LightPillar = dynamic(() => import("@/components/ui/light-pillar"), { ssr: false })

export function CybersecurityHero() {
    return (
        <section className="relative min-h-[700px] overflow-hidden bg-[var(--color-bg)]">
            {/* LightPillar Background - adjusted for light mode */}
            <div className="absolute inset-0 w-full h-full">
                <LightPillar
                    topColor="#38BDF8"
                    bottomColor="#cbd5e1"
                    intensity={1.5}
                    rotationSpeed={1}
                    glowAmount={0.007}
                    pillarWidth={2.9}
                    pillarHeight={0.9}
                    noiseIntensity={1.4}
                    pillarRotation={167}
                    interactive={false}
                    mixBlendMode="normal"
                    quality="high"
                />
            </div>

            {/* Gradient overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-white/80 pointer-events-none z-[1]" />

            <Container>
                <div className="relative z-10 pt-40 pb-24 max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#38BDF8]/10 text-[#38BDF8] text-sm font-medium mb-8 border border-[#38BDF8]/30 backdrop-blur-md"
                    >
                        <div className="w-2 h-2 rounded-full bg-[#38BDF8] animate-pulse" />
                        <span>Enterprise Grade Defense</span>
                    </motion.div>
                    
                    <motion.h1 
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-bold tracking-tight text-[var(--color-text)] mb-8"
                    >
                        Secure Your <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#38BDF8] to-[#38BDF8]">Digital Legacy</span>
                    </motion.h1>
                    
                    <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed"
                    >
                         Advanced Penetration Testing, Risk Assessment, and AI-Driven Security for high-growth enterprises tailored to board-level standards.
                    </motion.p>
                    
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <Button size="lg" className="bg-[#38BDF8] hover:bg-[#38BDF8]/90 text-white rounded-full px-8 h-12 text-base shadow-[0_0_30px_rgba(56,189,248,0.4)] transition-all hover:shadow-[0_0_50px_rgba(56,189,248,0.6)]">
                            Schedule Security Debrief
                        </Button>
                        <Button variant="outline" size="lg" className="rounded-full px-8 h-12 text-base bg-transparent border-[var(--color-border)] text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-soft)]">
                            View Compliance Standards
                        </Button>
                    </motion.div>
                </div>
            </Container>
        </section>
    )
}
