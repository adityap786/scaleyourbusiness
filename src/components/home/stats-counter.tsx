"use client"

import { Container } from "@/components/ui/container"
import { motion, useMotionValue, useTransform, animate } from "motion/react"
import { useEffect, useRef, useState } from "react"
import { useInView } from "motion/react"

interface StatProps {
    number: number
    suffix?: string
    label: string
    decimals?: number
}

const stats: StatProps[] = [
    { number: 50, suffix: "+", label: "Projects Delivered" },
    { number: 15, suffix: "+", label: "Hours Saved / Week" },
    { number: 98, suffix: "%", label: "Client Retention" },
    { number: 3, suffix: "", label: "Countries Served" },
]

function AnimatedCounter({ number, suffix = "", label, decimals = 0 }: StatProps) {
    const ref = useRef<HTMLDivElement>(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })
    const count = useMotionValue(0)
    const rounded = useTransform(count, (latest) =>
        decimals > 0 ? latest.toFixed(decimals) : Math.round(latest).toString()
    )
    const [displayValue, setDisplayValue] = useState("0")

    useEffect(() => {
        if (isInView) {
            const controls = animate(count, number, {
                duration: 2,
                ease: [0.25, 0.1, 0.25, 1],
            })
            const unsubscribe = rounded.on("change", (v) => setDisplayValue(v))
            return () => { controls.stop(); unsubscribe() }
        }
    }, [isInView, count, number, rounded])

    return (
        <div ref={ref} className="text-center group">
            <div className="relative">
                <span className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter gradient-text-dark">
                    {displayValue}
                </span>
                {suffix && (
                    <span className="text-3xl md:text-4xl font-bold text-[var(--color-brand)] ml-1">
                        {suffix}
                    </span>
                )}
            </div>
            <p className="mt-2 text-sm md:text-base font-medium text-[var(--color-text-secondary)] tracking-wide uppercase">
                {label}
            </p>
        </div>
    )
}

export function StatsCounter() {
    return (
        <section className="py-20 md:py-32 bg-[var(--color-bg-soft)] relative overflow-hidden">
            {/* Decorative borders */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-brand)]/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-brand)]/10 to-transparent" />

            <Container>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15, duration: 0.6, type: "spring" }}
                            className="relative"
                        >
                            <AnimatedCounter {...stat} />
                            {/* Divider between stats */}
                            {i < stats.length - 1 && (
                                <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-16 w-px bg-gradient-to-b from-transparent via-[var(--color-border)] to-transparent" />
                            )}
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    )
}
