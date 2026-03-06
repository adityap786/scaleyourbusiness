"use client"

import { Container } from "@/components/ui/container"
import { motion, useMotionValue, useSpring, useTransform } from "motion/react"
import { useRef, useState, useCallback } from "react"

/* ─────────────── Reusable: Mouse-follow glow card ─────────────── */

function GlowCard({
    children,
    className = "",
    delay = 0,
}: {
    children: React.ReactNode
    className?: string
    delay?: number
}) {
    const ref = useRef<HTMLDivElement>(null)
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    const scale = useSpring(1, { stiffness: 300, damping: 25, mass: 0.5 })

    const handleMouseMove = useCallback(
        (e: React.MouseEvent<HTMLDivElement>) => {
            if (!ref.current) return
            const rect = ref.current.getBoundingClientRect()
            mouseX.set(e.clientX - rect.left)
            mouseY.set(e.clientY - rect.top)
        },
        [mouseX, mouseY]
    )

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50, filter: "blur(12px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => scale.set(1.02)}
            onMouseLeave={() => scale.set(1)}
            style={{ scale }}
            className={`group relative bg-[var(--color-bg-card)] rounded-2xl border border-[var(--color-border)] overflow-hidden transition-colors duration-500 hover:border-[var(--color-brand)]/40 ${className}`}
        >
            {/* Mouse-follow radial glow */}
            <motion.div
                className="pointer-events-none absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                    background: useTransform(
                        [mouseX, mouseY],
                        ([x, y]) =>
                            `radial-gradient(350px circle at ${x}px ${y}px, rgba(79,70,229,0.1), transparent 55%)`
                    ),
                }}
            />
            {/* Top border glow */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--color-brand)]/0 group-hover:via-[var(--color-brand)]/50 to-transparent transition-all duration-700" />
            {children}
        </motion.div>
    )
}

/* ─────────────── Star-field particle layer ─────────────── */

function Starfield({ count = 20 }: { count?: number }) {
    // Generate deterministic positions for SSR safety
    const stars = Array.from({ length: count }, (_, i) => ({
        x: ((i * 37 + 13) % 100),
        y: ((i * 53 + 7) % 100),
        size: 0.8 + (i % 3) * 0.4,
        delay: (i * 0.15) % 2,
    }))

    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {stars.map((s, i) => (
                <motion.div
                    key={i}
                    className="absolute rounded-full bg-white"
                    style={{
                        left: `${s.x}%`,
                        top: `${s.y}%`,
                        width: s.size,
                        height: s.size,
                    }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: [0, 0.4, 0.1, 0.5, 0] }}
                    viewport={{ once: true }}
                    transition={{
                        delay: s.delay,
                        duration: 4 + (i % 3),
                        repeat: Infinity,
                        repeatDelay: 1 + (i % 2),
                    }}
                />
            ))}
        </div>
    )
}

/* ─────────────── Illustration: AI Strategy — Horizontal Bar Chart ─────────────── */

function AIStrategyIllustration() {
    const bars = [
        { label: "Design", width: "32%", color: "bg-gray-500/80", delay: 0.35 },
        { label: "Business Plan", width: "58%", color: "bg-gradient-to-r from-[var(--color-brand)] to-[var(--color-brand-light)]", delay: 0.5 },
        { label: "AI Strategy", width: "88%", color: "bg-gradient-to-r from-[var(--color-brand)] via-[var(--color-brand-light)] to-[var(--color-accent)]", delay: 0.65 },
        { label: "CRM", width: "25%", color: "bg-gray-600/60", delay: 0.8 },
    ]

    return (
        <div className="relative w-full h-full flex flex-col justify-center gap-4 px-7 py-5">
            {/* Decorative color blocks — top right */}
            <div className="absolute top-5 right-5 flex gap-1.5">
                <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.2, type: "spring" }} className="w-5 h-5 rounded bg-gray-600/60" />
                <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.3, type: "spring" }} className="w-5 h-5 rounded bg-gray-500/80" />
                <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.4, type: "spring" }} className="w-5 h-5 rounded bg-gradient-to-br from-orange-400 to-pink-500 opacity-70" />
            </div>

            {bars.map((bar, i) => (
                <div key={i} className="flex flex-col gap-1">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: bar.delay - 0.1 }}
                        className="text-[10px] text-[var(--color-text-muted)] tracking-wide"
                    >
                        {bar.label}
                    </motion.span>
                    <div className="h-6 w-full rounded-md overflow-hidden bg-[var(--color-bg-soft)]">
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: bar.width }}
                            viewport={{ once: true }}
                            transition={{ delay: bar.delay, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                            className={`h-full rounded-md ${bar.color}`}
                        />
                    </div>
                </div>
            ))}
        </div>
    )
}

/* ─────────────── Illustration: LLM Fine-Tuning — Converging Beam ─────────────── */

function LLMFineTuningIllustration() {
    const beamCount = 14

    return (
        <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
            <Starfield count={25} />

            <motion.svg
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.8 }}
                viewBox="0 0 200 200"
                className="relative w-4/5 h-4/5"
            >
                <defs>
                    <linearGradient id="beamGrad" x1="0.5" y1="1" x2="0.5" y2="0">
                        <stop offset="0%" stopColor="var(--color-brand)" stopOpacity="0.05" />
                        <stop offset="60%" stopColor="var(--color-brand-light)" stopOpacity="0.5" />
                        <stop offset="100%" stopColor="#fff" stopOpacity="0.9" />
                    </linearGradient>
                </defs>

                {/* Converging beam lines */}
                {Array.from({ length: beamCount }).map((_, i) => {
                    const startX = 40 + (i * 120) / (beamCount - 1)
                    return (
                        <motion.line
                            key={i}
                            x1={startX}
                            y1="185"
                            x2="100"
                            y2="28"
                            stroke="url(#beamGrad)"
                            strokeWidth={0.6 + (i === Math.floor(beamCount / 2) ? 0.4 : 0)}
                            initial={{ pathLength: 0, opacity: 0 }}
                            whileInView={{ pathLength: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                delay: 0.3 + i * 0.04,
                                duration: 1,
                                ease: "easeOut",
                            }}
                        />
                    )
                })}

                {/* Horizontal dashed baseline */}
                <motion.line
                    x1="25" y1="180" x2="175" y2="180"
                    stroke="var(--color-brand)" strokeWidth="1" strokeDasharray="4 4"
                    opacity="0.3"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                />

                {/* Top convergence glow */}
                <motion.circle
                    cx="100" cy="26" r="5"
                    fill="var(--color-brand-light)"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
                />
                <motion.circle
                    cx="100" cy="26" r="12"
                    fill="none"
                    stroke="var(--color-brand-light)"
                    strokeWidth="0.6"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: [0, 2, 1.5], opacity: [0, 0.5, 0.2] }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.4, duration: 1 }}
                />

                {/* Gentle ambient glow */}
                <circle cx="100" cy="26" r="30" fill="var(--color-brand-light)" opacity="0.06" />
            </motion.svg>
        </div>
    )
}

/* ─────────────── Illustration: Automation — 3D Wireframe Cube ─────────────── */

function AutomationCubeIllustration() {
    return (
        <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
            <Starfield count={15} />

            {/* Central glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-[var(--color-brand)]/8 rounded-full blur-[60px] pointer-events-none" />

            {/* Ground reflection */}
            <div className="absolute bottom-8 inset-x-10 h-px bg-gradient-to-r from-transparent via-[var(--color-text-muted)]/20 to-transparent" />

            <motion.svg
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
                viewBox="0 0 200 200"
                className="relative w-3/5 h-3/5"
            >
                {/* Back face */}
                <motion.rect
                    x="75" y="35" width="65" height="65" rx="3"
                    fill="none" stroke="var(--color-brand-light)" strokeWidth="0.8" opacity="0.4"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                />
                {/* Front face */}
                <motion.rect
                    x="45" y="60" width="65" height="65" rx="3"
                    fill="none" stroke="var(--color-accent)" strokeWidth="1" opacity="0.6"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                />
                {/* Connecting edges */}
                {[
                    [45, 60, 75, 35],
                    [110, 60, 140, 35],
                    [45, 125, 75, 100],
                    [110, 125, 140, 100],
                ].map(([x1, y1, x2, y2], i) => (
                    <motion.line
                        key={i}
                        x1={x1} y1={y1} x2={x2} y2={y2}
                        stroke="var(--color-brand-light)" strokeWidth="0.6" opacity="0.35"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 + i * 0.08, duration: 0.5 }}
                    />
                ))}

                {/* Inner triangle nodes */}
                <g>
                    <motion.circle cx="75" cy="68" r="3.5" fill="var(--color-accent)" initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.9, type: "spring" }} />
                    <motion.circle cx="115" cy="55" r="3.5" fill="var(--color-brand)" initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 1.0, type: "spring" }} />
                    <motion.circle cx="95" cy="98" r="3.5" fill="var(--color-brand-light)" initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 1.1, type: "spring" }} />

                    {/* Connecting edges */}
                    <motion.line x1="75" y1="68" x2="115" y2="55" stroke="var(--color-brand-light)" strokeWidth="0.8" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ delay: 1.05 }} />
                    <motion.line x1="115" y1="55" x2="95" y2="98" stroke="var(--color-brand)" strokeWidth="0.8" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ delay: 1.15 }} />
                    <motion.line x1="95" y1="98" x2="75" y2="68" stroke="var(--color-accent)" strokeWidth="0.8" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ delay: 1.25 }} />
                </g>
            </motion.svg>
        </div>
    )
}

/* ─────────────── Illustration: Custom AI Solutions — Flow Diagram ─────────────── */

function CustomAISolutionsIllustration() {
    const floatingIcons = [
        { icon: "⟨/⟩", x: 50, y: 10 },
        { icon: "📁", x: 12, y: 40 },
        { icon: "🔑", x: 22, y: 70 },
        { icon: "⚙️", x: 82, y: 28 },
        { icon: "🔗", x: 88, y: 62 },
    ]

    return (
        <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
            <Starfield count={18} />

            {/* Floating icon badges */}
            {floatingIcons.map((item, i) => (
                <motion.div
                    key={i}
                    className="absolute w-8 h-8 rounded-xl bg-[var(--color-bg-soft)] border border-[var(--color-border)] flex items-center justify-center text-[11px] text-[var(--color-text-muted)]"
                    style={{ left: `${item.x}%`, top: `${item.y}%`, transform: "translate(-50%,-50%)" }}
                    initial={{ opacity: 0, scale: 0, rotate: -20 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1, type: "spring", stiffness: 200, damping: 15 }}
                    whileHover={{ scale: 1.2, borderColor: "var(--color-brand)", y: -2 }}
                >
                    {item.icon}
                </motion.div>
            ))}

            {/* Central cluster */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9, filter: "blur(6px)" }}
                whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="relative z-10 flex flex-col items-center gap-4"
            >
                {/* Start Process button */}
                <motion.div
                    whileHover={{ scale: 1.05, borderColor: "var(--color-brand)" }}
                    className="px-7 py-2.5 rounded-lg bg-[var(--color-bg-soft)] border border-[var(--color-border-hover)] text-sm font-medium text-[var(--color-text)] cursor-default transition-colors shadow-lg shadow-black/20"
                >
                    Start Process
                </motion.div>

                {/* Connecting line */}
                <motion.div
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8, duration: 0.3 }}
                    className="w-px h-4 bg-gradient-to-b from-[var(--color-border-hover)] to-[var(--color-brand)]/30"
                    style={{ transformOrigin: "top" }}
                />

                {/* Code snippet */}
                <motion.div
                    initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.9, duration: 0.5 }}
                    className="bg-[var(--color-bg-soft)]/80 border border-[var(--color-border)] rounded-xl px-5 py-3.5 text-[10px] font-mono leading-relaxed backdrop-blur-sm"
                >
                    <div><span className="text-purple-400">automateProcess</span><span className="text-[var(--color-text-muted)]">.</span><span className="text-[var(--color-accent)]">init</span></div>
                    <div className="text-[var(--color-text-muted)]">  .set <span className="text-amber-400">customer</span></div>
                    <div className="text-[var(--color-text-muted)]">  .add(<span className="text-pink-400">0.001</span>)</div>
                    <div className="text-pink-400/70">  12.55.00.02</div>
                </motion.div>
            </motion.div>
        </div>
    )
}

/* ─────────────── Main Section ─────────────── */

const features = [
    {
        title: "AI Strategy",
        description: "Developing one of the best AI strategy for your business is our goal that 80% of your business tasks can be done with AI",
        illustration: <AIStrategyIllustration />,
    },
    {
        title: "LLM Fine-Tuning",
        description: "Everyone is using LLM models but those are generic models we develop vertical LLM for your business which expands.",
        illustration: <LLMFineTuningIllustration />,
    },
    {
        title: "Automation & AI Integration",
        description: "Reducing redundancy and repetition from your business so your business have more robust processes.",
        illustration: <AutomationCubeIllustration />,
    },
    {
        title: "Custom AI Solutions",
        description: "We help your business to develop custom solutions that a robust and end to end designed for your business",
        illustration: <CustomAISolutionsIllustration />,
    },
]

export function AIImplementationFeatures() {
    return (
        <section className="py-28 bg-[var(--color-bg)] relative overflow-hidden">
            {/* Background ambient glow */}
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[250px] bg-[var(--color-brand)]/4 rounded-full blur-[100px] pointer-events-none" />

            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {features.map((feature, i) => (
                        <GlowCard key={feature.title} delay={i * 0.12}>
                            {/* Star background + illustration */}
                            <div className="relative h-64 overflow-hidden">
                                <Starfield count={14} />
                                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[var(--color-bg-card)] to-transparent z-10 pointer-events-none" />
                                {feature.illustration}
                            </div>

                            {/* Card copy */}
                            <div className="relative z-20 px-7 pb-7">
                                <h3 className="text-lg font-bold text-[var(--color-text)] mb-2 group-hover:text-[var(--color-brand-light)] transition-colors duration-300">
                                    {feature.title}
                                </h3>
                                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        </GlowCard>
                    ))}
                </div>
            </Container>
        </section>
    )
}
