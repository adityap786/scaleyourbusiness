"use client"

import { Container } from "@/components/ui/container"
import { motion, useScroll, useTransform } from "motion/react"
import { useRef } from "react"

const steps = [
    {
        id: "01",
        title: "Discovery",
        subtitle: "We learn your business, audience, pain points, and goals. Then we craft a clear roadmap.",
    },
    {
        id: "02",
        title: "Design",
        subtitle: "High-fidelity mockups and prototypes. You see exactly what you'll get before a single line of code.",
    },
    {
        id: "03",
        title: "Develop",
        subtitle: "Production-grade code built with modern frameworks. No shortcuts, no compromises.",
    },
    {
        id: "04",
        title: "Launch & Scale",
        subtitle: "We deploy, monitor, optimize, and help you scale. We're with you for the journey.",
    },
]

export function ProcessTimeline() {
    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"],
    })

    // Height of the progress line
    const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

    return (
        <section ref={containerRef} className="py-24 md:py-36 bg-[var(--color-bg)] relative">
            <Container>
                {/* Header */}
                <div className="max-w-3xl mb-24">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight text-[var(--color-text)] mb-6 leading-[1.1]"
                    >
                        Simple. Transparent.<br />
                        <span className="gradient-text">Effective.</span>
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-[var(--color-text-secondary)]"
                    >
                        A battle-tested process that turns your idea into a product.
                    </motion.p>
                </div>

                {/* Timeline */}
                <div className="relative max-w-4xl mx-auto">
                    {/* Wavy Background & Active Line */}
                    <div className="absolute left-[8px] md:left-[20px] top-0 bottom-0 w-[40px] z-0 overflow-hidden" aria-hidden="true">
                        <svg
                            viewBox="0 0 40 100"
                            preserveAspectRatio="none"
                            className="w-full h-full absolute top-0 left-0"
                        >
                            <defs>
                                <linearGradient id="blueline" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
                                    <stop offset="10%" stopColor="#3b82f6" stopOpacity="1" />
                                    <stop offset="90%" stopColor="#8b5cf6" stopOpacity="1" />
                                    <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
                                </linearGradient>
                                <filter id="blueglow" x="-50%" y="-50%" width="200%" height="200%">
                                    <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
                                    <feMerge>
                                        <feMergeNode in="coloredBlur"/>
                                        <feMergeNode in="SourceGraphic"/>
                                    </feMerge>
                                </filter>
                            </defs>
                            <path
                                d="M20,0 Q40,2.5 20,5 Q0,7.5 20,10 Q40,12.5 20,15 Q0,17.5 20,20 Q40,22.5 20,25 Q0,27.5 20,30 Q40,32.5 20,35 Q0,37.5 20,40 Q40,42.5 20,45 Q0,47.5 20,50 Q40,52.5 20,55 Q0,57.5 20,60 Q40,62.5 20,65 Q0,67.5 20,70 Q40,72.5 20,75 Q0,77.5 20,80 Q40,82.5 20,85 Q0,87.5 20,90 Q40,92.5 20,95 Q0,97.5 20,100"
                                fill="none"
                                stroke="var(--color-border)"
                                strokeWidth="2"
                                vectorEffect="non-scaling-stroke"
                                className="opacity-50"
                            />
                            <motion.path
                                d="M20,0 Q40,2.5 20,5 Q0,7.5 20,10 Q40,12.5 20,15 Q0,17.5 20,20 Q40,22.5 20,25 Q0,27.5 20,30 Q40,32.5 20,35 Q0,37.5 20,40 Q40,42.5 20,45 Q0,47.5 20,50 Q40,52.5 20,55 Q0,57.5 20,60 Q40,62.5 20,65 Q0,67.5 20,70 Q40,72.5 20,75 Q0,77.5 20,80 Q40,82.5 20,85 Q0,87.5 20,90 Q40,92.5 20,95 Q0,97.5 20,100"
                                fill="none"
                                stroke="url(#blueline)"
                                strokeWidth="4"
                                filter="url(#blueglow)"
                                vectorEffect="non-scaling-stroke"
                                strokeLinecap="round"
                                style={{
                                    pathLength: scrollYProgress,
                                }}
                            />
                        </svg>
                    </div>

                    <div className="space-y-24 pb-24">
                        {steps.map((step, index) => (
                            <div key={step.id} className="relative flex gap-8 md:gap-16 group pt-4">
                                {/* Dot */}
                                <div className="relative z-20 flex-shrink-0 mt-2">
                                    <motion.div 
                                        className="w-14 h-14 md:w-20 md:h-20 rounded-full border-2 border-[var(--color-border)] bg-[var(--color-bg)] flex items-center justify-center transition-all duration-700 shadow-sm relative overflow-hidden"
                                        whileInView={{
                                            borderColor: "#3b82f6",
                                            boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)",
                                        }}
                                        viewport={{ margin: "-200px 0px -200px 0px", once: false }}
                                    >
                                        <div className="absolute inset-0 bg-[#3b82f6]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        <motion.span 
                                            className="text-sm md:text-base font-bold text-[var(--color-text-secondary)] transition-colors duration-500"
                                            whileInView={{ color: "#3b82f6" }}
                                            viewport={{ margin: "-200px 0px -200px 0px", once: false }}
                                        >
                                            {step.id}
                                        </motion.span>
                                    </motion.div>
                                </div>

                                {/* Content */}
                                <motion.div 
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ margin: "-200px 0px -200px 0px", once: false }}
                                    className="pt-3 md:pt-5"
                                >
                                    <h3 className="text-3xl md:text-5xl font-bold text-[var(--color-text)] mb-4 md:mb-6 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#3b82f6] group-hover:to-[#8b5cf6] transition-all duration-500">
                                        {step.title}
                                    </h3>
                                    <p className="text-lg md:text-2xl text-[var(--color-text-secondary)] leading-relaxed max-w-2xl font-light">
                                        {step.subtitle}
                                    </p>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    )
}
