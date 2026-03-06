"use client"

import Link from "next/link"
import { useRef, useEffect, useState } from "react"
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "motion/react"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { Container } from "@/components/ui/container"

// ─── Data ─────────────────────────────────────────────────────────────────────
const STATS = [
    { value: "50+", label: "Global Clients" },
    { value: "3×", label: "Revenue Growth" },
    { value: "<6wk", label: "Time to Launch" },
    { value: "4.9★", label: "Satisfaction" },
]

const WORDS_LINE1 = ["We", "Build"]
const WORDS_LINE2 = ["Digital", "Products"]
const WORDS_LINE3 = ["That", "Scale."]

// ─── Cursor-tracked spotlight ──────────────────────────────────────────────────
function CursorLight() {
    const ref = useRef<HTMLDivElement>(null)
    const mx = useMotionValue(0)
    const my = useMotionValue(0)

    useEffect(() => {
        const handle = (e: MouseEvent) => {
            mx.set(e.clientX)
            my.set(e.clientY)
        }
        window.addEventListener("mousemove", handle)
        return () => window.removeEventListener("mousemove", handle)
    }, [mx, my])

    return (
        <motion.div
            ref={ref}
            className="pointer-events-none fixed inset-0 z-0"
            style={{
                background: useTransform(
                    [mx, my],
                    ([x, y]) =>
                        `radial-gradient(600px circle at ${x}px ${y}px, rgba(37,99,235,0.06), transparent 70%)`
                ),
            }}
        />
    )
}

// ─── Single animated word ─────────────────────────────────────────────────────
function Word({ text, delay, accent }: { text: string; delay: number; accent?: boolean }) {
    return (
        <span className="inline-block overflow-hidden align-bottom">
            <motion.span
                className={`inline-block ${accent
                        ? "text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand)] via-[#818cf8] to-[var(--color-accent)]"
                        : ""
                    }`}
                initial={{ y: "105%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
            >
                {text}
            </motion.span>
        </span>
    )
}

// ─── Floating stat chip ───────────────────────────────────────────────────────
function StatChip({
    stat,
    index,
    scrollY,
}: {
    stat: (typeof STATS)[number]
    index: number
    scrollY: ReturnType<typeof useMotionValue<number>>
}) {
    const y = useTransform(scrollY, [0, 600], [0, -(20 + index * 12)])

    return (
        <motion.div
            style={{ y }}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 1.3 + index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-start px-5 py-3.5 rounded-2xl bg-white border border-zinc-100 shadow-[0_2px_24px_rgba(0,0,0,0.06)] backdrop-blur-sm"
        >
            <span className="text-xl font-black tracking-tight text-[var(--color-text)] tabular-nums leading-none">
                {stat.value}
            </span>
            <span className="text-[11px] text-[var(--color-text-muted)] font-medium mt-0.5 whitespace-nowrap">
                {stat.label}
            </span>
        </motion.div>
    )
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
export function Hero() {
    const sectionRef = useRef<HTMLElement>(null)
    const scrollY = useMotionValue(0)

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end start"],
    })

    // Scroll tracking for StatChips
    useEffect(() => {
        const u = scrollYProgress.on("change", (v) => scrollY.set(v * 600))
        return u
    }, [scrollYProgress, scrollY])

    // Parallax layers driven by scroll
    const bgY = useSpring(useTransform(scrollYProgress, [0, 1], [0, 160]), { stiffness: 60, damping: 20 })
    const midY = useSpring(useTransform(scrollYProgress, [0, 1], [0, 80]), { stiffness: 60, damping: 20 })
    const scaleOut = useTransform(scrollYProgress, [0, 0.6], [1, 0.94])
    const fadeOut = useTransform(scrollYProgress, [0, 0.5], [1, 0])

    return (
        <section
            ref={sectionRef}
            className="relative min-h-[100svh] overflow-hidden bg-white flex items-center"
        >
            <CursorLight />

            {/* ── BG LAYER 0: Ruled line grid ─────────────────────────────────────── */}
            <motion.div style={{ y: bgY }} className="absolute inset-0 pointer-events-none select-none">
                {/* Vertical ruled lines */}
                <svg
                    className="absolute inset-0 w-full h-full opacity-[0.035]"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <defs>
                        <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
                            <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#0f172a" strokeWidth="0.5" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>

                {/* Diagonal accent rail — breaks symmetry */}
                <div className="absolute top-0 right-[14%] w-px h-full bg-gradient-to-b from-[var(--color-brand)]/20 via-[var(--color-brand)]/5 to-transparent" />
                <div className="absolute top-0 right-[28%] w-px h-[60%] bg-gradient-to-b from-transparent via-[var(--color-brand)]/8 to-transparent" />

                {/* Single volumetric light — positioned top-right, NOT centered */}
                <div className="absolute top-[-20%] right-[-5%] w-[70vw] h-[70vw] rounded-full bg-[radial-gradient(circle,rgba(37,99,235,0.09)_0%,transparent_70%)]" />
                <div className="absolute bottom-[-10%] left-[-8%] w-[50vw] h-[50vw] rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.06)_0%,transparent_70%)]" />
            </motion.div>

            {/* ── MIDGROUND: Headline + copy ────────────────────────────────────────── */}
            <motion.div style={{ y: midY, scale: scaleOut, opacity: fadeOut }} className="relative z-10 w-full">
                <Container>
                    <div className="pt-40 pb-32">

                        {/* Status pill — leftmost, not centered */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="mb-10"
                        >
                            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-zinc-50 border border-zinc-200 text-xs font-semibold text-zinc-500 tracking-wide">
                                <span className="relative flex h-1.5 w-1.5">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
                                </span>
                                Available for new projects · India &amp; UAE
                            </div>
                        </motion.div>

                        {/* ── HEADLINE — Massive, asymmetric, word-by-word ─────────────────── */}
                        <h1 className="text-[clamp(3.5rem,9.5vw,8.5rem)] font-black tracking-tighter leading-[0.9] text-[var(--color-text)] mb-10 max-w-[18ch]">
                            <div className="flex flex-wrap gap-x-[0.22em] gap-y-0 mb-1">
                                {WORDS_LINE1.map((w, i) => <Word key={w} text={w} delay={0.2 + i * 0.1} />)}
                            </div>
                            <div className="flex flex-wrap gap-x-[0.22em] gap-y-0 mb-1">
                                {WORDS_LINE2.map((w, i) => <Word key={w} text={w} delay={0.38 + i * 0.1} />)}
                            </div>
                            <div className="flex flex-wrap gap-x-[0.22em] gap-y-0">
                                {WORDS_LINE3.map((w, i) => (
                                    <Word key={w} text={w} delay={0.56 + i * 0.1} accent />
                                ))}
                            </div>
                        </h1>

                        {/* ── Two-column below headline — asymmetric ───────────────────────── */}
                        <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-24">

                            {/* Copy */}
                            <motion.p
                                initial={{ opacity: 0, y: 24 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.78 }}
                                className="max-w-md text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed"
                            >
                                Websites, apps, and AI automation built to generate revenue — not just look good.
                                We ship fast, iterate faster, and grow with you.
                            </motion.p>

                            {/* CTAs + stats column */}
                            <div className="flex flex-col gap-8 shrink-0">
                                {/* CTA row */}
                                <motion.div
                                    initial={{ opacity: 0, y: 24 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.92 }}
                                    className="flex gap-3"
                                >
                                    <Link href="/contact">
                                        <motion.button
                                            whileHover={{ scale: 1.03 }}
                                            whileTap={{ scale: 0.97 }}
                                            className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-[var(--color-brand)] text-white text-sm font-semibold shadow-[0_4px_24px_rgba(37,99,235,0.3)] hover:shadow-[0_8px_40px_rgba(37,99,235,0.45)] transition-shadow duration-400"
                                        >
                                            Start Your Project <ArrowRight className="w-4 h-4" />
                                        </motion.button>
                                    </Link>
                                    <Link href="/work">
                                        <motion.button
                                            whileHover={{ scale: 1.03 }}
                                            whileTap={{ scale: 0.97 }}
                                            className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-white border border-zinc-200 text-[var(--color-text)] text-sm font-semibold hover:border-zinc-300 hover:bg-zinc-50 transition-all duration-300"
                                        >
                                            See Our Work <ArrowUpRight className="w-4 h-4 opacity-50" />
                                        </motion.button>
                                    </Link>
                                </motion.div>

                                {/* Stats — inline row, compact */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.7, delay: 1.15 }}
                                    className="flex flex-wrap gap-3"
                                >
                                    {STATS.map((s, i) => (
                                        <StatChip key={s.value} stat={s} index={i} scrollY={scrollY} />
                                    ))}
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </Container>
            </motion.div>

            {/* ── FOREGROUND: Oblique accent shard — visual asymmetry ──────────────── */}
            <motion.div
                style={{ y: useTransform(scrollYProgress, [0, 1], [0, -40]) }}
                className="absolute right-0 top-0 h-full w-[38vw] pointer-events-none hidden xl:block"
                aria-hidden
            >
                {/* Vertical counter-text — typographic decoration */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.045 }}
                    transition={{ delay: 1.6 }}
                    className="absolute top-48 right-20 flex flex-col gap-8"
                    style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
                >
                    <span className="text-[13px] font-bold tracking-[0.3em] uppercase text-[var(--color-text)]">
                        India · Dubai · USA
                    </span>
                    <span className="text-[13px] font-bold tracking-[0.3em] uppercase text-[var(--color-text)]">
                        Websites · Apps · AI
                    </span>
                </motion.div>

                {/* Abstract geometric slash */}
                <svg
                    className="absolute top-0 right-0 h-full w-full opacity-[0.025]"
                    viewBox="0 0 400 800"
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <line x1="380" y1="0" x2="20" y2="800" stroke="#2563eb" strokeWidth="1" />
                    <line x1="360" y1="0" x2="0" y2="800" stroke="#2563eb" strokeWidth="0.5" />
                </svg>
            </motion.div>

            {/* ── Scroll cue — bottom center ────────────────────────────────────────── */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.2 }}
                style={{ opacity: fadeOut }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
            >
                <motion.div
                    animate={{ y: [0, 7, 0] }}
                    transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                    className="w-[1px] h-12 bg-gradient-to-b from-[var(--color-brand)]/40 to-transparent"
                />
            </motion.div>
        </section>
    )
}
