"use client"

import { Container } from "@/components/ui/container"
import { motion, useMotionValue, useSpring, useTransform } from "motion/react"
import { useRef, useState, useCallback, useEffect } from "react"

/* ─────────────── Mouse-follow glow card wrapper ─────────────── */

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
    const [isHovered, setIsHovered] = useState(false)

    const handleMouseMove = useCallback(
        (e: React.MouseEvent<HTMLDivElement>) => {
            if (!ref.current) return
            const rect = ref.current.getBoundingClientRect()
            mouseX.set(e.clientX - rect.left)
            mouseY.set(e.clientY - rect.top)
        },
        [mouseX, mouseY]
    )

    // Smooth spring scale on hover
    const scale = useSpring(1, { stiffness: 300, damping: 25, mass: 0.5 })

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => {
                setIsHovered(true)
                scale.set(1.015)
            }}
            onMouseLeave={() => {
                setIsHovered(false)
                scale.set(1)
            }}
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
                            `radial-gradient(400px circle at ${x}px ${y}px, rgba(79,70,229,0.12), transparent 60%)`
                    ),
                }}
            />
            {/* Top border glow on hover */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--color-brand)]/0 group-hover:via-[var(--color-brand)]/60 to-transparent transition-all duration-700" />
            {children}
        </motion.div>
    )
}

/* ─────────────── Animated heading with word-by-word reveal ─────────────── */

function RevealHeading({ text, className = "" }: { text: string; className?: string }) {
    const words = text.split(" ")
    return (
        <h2 className={className}>
            {words.map((word, i) => (
                <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.08 * i, duration: 0.5, ease: "easeOut" }}
                    className="inline-block mr-[0.3em]"
                >
                    {word}
                </motion.span>
            ))}
        </h2>
    )
}

/* ─────────────── Illustration: Chat Conversation ─────────────── */

function ChatBubbleIllustration() {
    return (
        <div className="relative w-full h-full flex flex-col gap-3 p-5">
            {/* User bubble */}
            <motion.div
                initial={{ opacity: 0, x: 30, filter: "blur(6px)" }}
                whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
                className="self-end max-w-[80%]"
            >
                <div className="bg-[var(--color-brand)] text-white text-[11px] leading-relaxed rounded-2xl rounded-br-sm px-4 py-3 shadow-lg shadow-[var(--color-brand)]/20">
                    Hey, I need help scheduling a team meeting that works well for everyone. Any suggestions for finding an optimal time slot?
                </div>
                <div className="flex justify-end mt-1.5">
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.7, type: "spring", stiffness: 300 }}
                        className="w-7 h-7 rounded-full bg-gradient-to-br from-[var(--color-brand)] to-[var(--color-brand-dark)] flex items-center justify-center shadow-md"
                    >
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                    </motion.div>
                </div>
            </motion.div>

            {/* AI bubble */}
            <motion.div
                initial={{ opacity: 0, x: -30, filter: "blur(6px)" }}
                whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
                className="self-start max-w-[85%]"
            >
                <div className="flex items-start gap-2.5">
                    <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 1.0, type: "spring", stiffness: 200, damping: 12 }}
                        className="w-7 h-7 mt-0.5 shrink-0 rounded-full bg-gradient-to-br from-[var(--color-accent)] to-emerald-700 flex items-center justify-center shadow-md shadow-[var(--color-accent)]/20"
                    >
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                    </motion.div>
                    <div className="bg-[var(--color-bg-soft)] border border-[var(--color-border)] text-[var(--color-text-secondary)] text-[11px] leading-relaxed rounded-2xl rounded-tl-sm px-4 py-3">
                        Based on your calendar patterns and preferences, I recommend scheduling the team meeting for Tuesday at 2pm. This time slot has historically had the highest attendance rate, and it avoids conflicts with other recurring meetings.
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

/* ─────────────── Illustration: Integration Orbs ─────────────── */

function IntegrationOrbs() {
    const orbs = [
        { color: "from-amber-400 to-orange-500", emoji: "🔗", x: 52, y: 18, size: 42, delay: 0.3 },
        { color: "from-blue-500 to-blue-700", emoji: "📊", x: 75, y: 38, size: 34, delay: 0.45 },
        { color: "from-emerald-400 to-emerald-600", emoji: "⚡", x: 52, y: 58, size: 46, delay: 0.6 },
        { color: "from-gray-500 to-gray-700", emoji: "🔒", x: 30, y: 42, size: 30, delay: 0.7 },
        { color: "from-gray-200 to-white", emoji: "▲", x: 78, y: 65, size: 36, delay: 0.8 },
    ]

    return (
        <div className="relative w-full h-full">
            {/* Connecting lines */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 200">
                {[
                    [104, 36, 150, 76],
                    [150, 76, 104, 116],
                    [104, 116, 60, 84],
                    [60, 84, 104, 36],
                ].map(([x1, y1, x2, y2], i) => (
                    <motion.line
                        key={i}
                        x1={x1} y1={y1} x2={x2} y2={y2}
                        stroke="var(--color-border-hover)"
                        strokeWidth="0.6"
                        initial={{ pathLength: 0, opacity: 0 }}
                        whileInView={{ pathLength: 1, opacity: 0.3 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + i * 0.15, duration: 0.8 }}
                    />
                ))}
            </svg>

            {orbs.map((orb, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0, filter: "blur(8px)" }}
                    whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    viewport={{ once: true }}
                    transition={{ delay: orb.delay, type: "spring", stiffness: 180, damping: 14 }}
                    whileHover={{ scale: 1.15, y: -3 }}
                    className={`absolute rounded-full bg-gradient-to-br ${orb.color} flex items-center justify-center shadow-lg cursor-default`}
                    style={{
                        left: `${orb.x}%`,
                        top: `${orb.y}%`,
                        width: orb.size,
                        height: orb.size,
                        transform: "translate(-50%,-50%)",
                    }}
                >
                    <span className="text-sm">{orb.emoji}</span>
                </motion.div>
            ))}
        </div>
    )
}

/* ─────────────── Illustration: Line Chart ─────────────── */

function LineChartIllustration() {
    return (
        <div className="relative w-full h-full flex items-end px-5 pb-5">
            {/* Counter */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, type: "spring" }}
                className="absolute top-5 left-5"
            >
                <div className="flex items-center gap-2">
                    <motion.div
                        className="w-2.5 h-2.5 rounded-full bg-[var(--color-accent)]"
                        animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                    <span className="text-2xl font-bold text-[var(--color-text)] tabular-nums">2,534</span>
                </div>
            </motion.div>

            {/* Chart */}
            <motion.svg
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 1 }}
                viewBox="0 0 300 100"
                className="w-full h-28"
                preserveAspectRatio="none"
            >
                <defs>
                    <linearGradient id="wfChartGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="var(--color-brand)" stopOpacity="0.25" />
                        <stop offset="100%" stopColor="var(--color-brand)" stopOpacity="0" />
                    </linearGradient>
                </defs>
                {/* Area fill */}
                <motion.path
                    d="M0,82 C30,78 55,72 85,58 C115,44 135,50 165,36 C195,22 225,26 255,16 C275,10 292,6 300,4 L300,100 L0,100 Z"
                    fill="url(#wfChartGrad)"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6, duration: 1 }}
                />
                {/* Line */}
                <motion.path
                    d="M0,82 C30,78 55,72 85,58 C115,44 135,50 165,36 C195,22 225,26 255,16 C275,10 292,6 300,4"
                    fill="none"
                    stroke="var(--color-brand)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 1.4, ease: "easeOut" }}
                />
                {/* Glowing dot at end */}
                <motion.circle
                    cx="300" cy="4" r="4"
                    fill="var(--color-brand-light)"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.8, type: "spring" }}
                />
                <motion.circle
                    cx="300" cy="4" r="8"
                    fill="var(--color-brand-light)"
                    opacity="0.3"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: [0, 1.5, 1] }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.9, duration: 0.6 }}
                />
            </motion.svg>
        </div>
    )
}

/* ─────────────── Illustration: Task Scheduler ─────────────── */

function TaskSchedulerIllustration() {
    const days = ["Tue", "Wed", "Thu", "Fri", "Sat"]

    return (
        <div className="relative w-full h-full flex flex-col items-center justify-center px-5 gap-3">
            {/* Days bar */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="flex items-center gap-5 text-[10px] text-[var(--color-text-muted)] tracking-widest uppercase"
            >
                {days.map((d, i) => (
                    <motion.span
                        key={d}
                        initial={{ opacity: 0, y: 8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + i * 0.06 }}
                    >
                        {d}
                    </motion.span>
                ))}
            </motion.div>

            {/* Time label */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.5 }}
                viewport={{ once: true }}
                transition={{ delay: 0.55 }}
                className="text-xs text-[var(--color-text-secondary)] font-mono"
            >
                12:00 AM
            </motion.div>

            {/* Task pills */}
            <div className="flex flex-col items-center gap-2.5 w-full max-w-[210px]">
                <motion.div
                    initial={{ opacity: 0, x: -20, filter: "blur(4px)" }}
                    whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    whileHover={{ scale: 1.03, x: 3 }}
                    className="w-full bg-[var(--color-brand)] text-white text-xs font-medium rounded-lg px-4 py-2.5 text-center shadow-lg shadow-[var(--color-brand)]/20"
                >
                    Bento grid
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 20, filter: "blur(4px)" }}
                    whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.75, duration: 0.5 }}
                    whileHover={{ scale: 1.03, x: -3 }}
                    className="w-full bg-[var(--color-bg-soft)] border border-[var(--color-border)] text-[var(--color-text)] text-xs font-medium rounded-lg px-4 py-2.5 text-center"
                >
                    Landing Page
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.9 }}
                    whileHover={{ borderColor: "var(--color-brand)", scale: 1.02 }}
                    className="w-full border border-dashed border-[var(--color-text-muted)]/40 text-[var(--color-text-muted)] text-xs rounded-lg px-4 py-2.5 text-center cursor-default transition-colors"
                >
                    Add Task
                </motion.div>
            </div>
        </div>
    )
}

/* ─────────────── Main Section ─────────────── */

const cards = [
    {
        title: "Real-time AI Collaboration",
        description: "Experience real-time assistance. Ask your AI Agent to coordinate tasks, answer questions, and maintain team alignment.",
        illustration: <ChatBubbleIllustration />,
    },
    {
        title: "Seamless Integrations",
        description: "Unite your favorite tools for effortless connectivity. Boost productivity through interconnected workflows.",
        illustration: <IntegrationOrbs />,
    },
    {
        title: "Instant Insight Reporting",
        description: "Transform raw data into clear insights in seconds. Empower smarter decisions with real-time, always-learning intelligence.",
        illustration: <LineChartIllustration />,
    },
    {
        title: "Smart Automation",
        description: "Set it, forget it. Your AI Agent tackles repetitive tasks so you can focus on strategy, innovation, and growth.",
        illustration: <TaskSchedulerIllustration />,
    },
]

export function AIWorkflowFeatures() {
    return (
        <section className="py-28 bg-[var(--color-bg)] relative overflow-hidden">
            {/* Section background glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[var(--color-brand)]/5 rounded-full blur-[120px] pointer-events-none" />

            <Container>
                {/* Heading */}
                <div className="text-center mb-20 max-w-2xl mx-auto">
                    <RevealHeading
                        text="Empower Your Workflow with AI"
                        className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-text)] mb-5 tracking-tight"
                    />
                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                        className="text-[var(--color-text-secondary)] leading-relaxed text-lg"
                    >
                        Ask your AI Agent for real-time collaboration, seamless integrations, and actionable insights to streamline your operations.
                    </motion.p>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {cards.map((card, i) => (
                        <GlowCard key={card.title} delay={i * 0.12}>
                            {/* Illustration area */}
                            <div className="relative h-60 overflow-hidden">
                                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[var(--color-bg-card)] to-transparent z-10 pointer-events-none" />
                                {card.illustration}
                            </div>

                            {/* Copy */}
                            <div className="relative z-20 px-7 pb-7">
                                <h3 className="text-lg font-bold text-[var(--color-text)] mb-2 group-hover:text-[var(--color-brand-light)] transition-colors duration-300">
                                    {card.title}
                                </h3>
                                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                                    {card.description}
                                </p>
                            </div>
                        </GlowCard>
                    ))}
                </div>
            </Container>
        </section>
    )
}
