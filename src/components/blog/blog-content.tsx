"use client"

import { motion, useScroll, useTransform } from "motion/react"
import { useRef } from "react"
import { Container } from "@/components/ui/container"
import Link from "next/link"
import { ArrowRight, ArrowUpRight, Clock } from "lucide-react"
import { format, parseISO } from "date-fns"

/* ─── Types ─── */

interface Post {
    _id: string
    title: string
    date: string
    description: string
    author: string
    url: string
    tags?: string[]
    image?: string
}

/* ─── Motion Utilities ─── */

function LineReveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
    return (
        <div className="overflow-hidden">
            <motion.div
                initial={{ y: "110%", rotate: 2 }}
                whileInView={{ y: "0%", rotate: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className={className}
            >
                {children}
            </motion.div>
        </div>
    )
}

function FadeReveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className={className}
        >
            {children}
        </motion.div>
    )
}

/* ─── Estimated read time ─── */
function estimateReadTime(desc: string): string {
    const words = desc.split(" ").length
    // Rough estimate: description length * 15 as approximation
    const minutes = Math.max(3, Math.ceil((words * 15) / 200))
    return `${minutes} min read`
}

/* ─── Tag color map ─── */
function getTagColor(tag: string): string {
    const map: Record<string, string> = {
        "Web Development": "border-blue-400/40 text-blue-600",
        "SEO": "border-emerald-400/40 text-emerald-600",
        "AI Automation": "border-purple-400/40 text-purple-600",
        "Business Strategy": "border-amber-400/40 text-amber-600",
        "Marketing": "border-rose-400/40 text-rose-600",
        "Productivity": "border-cyan-400/40 text-cyan-600",
        "Technical Guide": "border-indigo-400/40 text-indigo-600",
    }
    return map[tag] || "border-[var(--color-border)] text-[var(--color-text-muted)]"
}

/* ═════════════════════════════════════════════════════════ */
/*                    MAIN BLOG CONTENT                     */
/* ═════════════════════════════════════════════════════════ */

export function BlogContent({ posts }: { posts: Post[] }) {
    const heroRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"],
    })
    const heroY = useTransform(scrollYProgress, [0, 1], [0, 120])
    const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

    const featuredPost = posts[0]
    const remainingPosts = posts.slice(1)

    return (
        <div className="bg-[var(--color-bg)] text-[var(--color-text)] overflow-hidden">

            {/* ═══════════════════════════════════════
                 HERO — Editorial entry
            ═══════════════════════════════════════ */}
            <section ref={heroRef} className="relative pt-32 pb-24 md:pt-44 md:pb-32 overflow-hidden">
                {/* Subtle background depth */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 right-0 w-[60vw] h-[60vw] bg-[var(--color-brand)]/[0.03] rounded-full blur-[120px] -translate-y-1/3 translate-x-1/4" />
                    <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-purple-500/[0.02] rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4" />
                    <div className="absolute inset-0 dot-grid opacity-30" />
                </div>

                <motion.div style={{ y: heroY, opacity: heroOpacity }}>
                    <Container>
                        <div className="max-w-5xl">
                            <FadeReveal>
                                <div className="text-[11px] font-bold tracking-[0.3em] uppercase text-[var(--color-text-muted)] mb-8">
                                    INSIGHTS & INTELLIGENCE
                                </div>
                            </FadeReveal>

                            <LineReveal delay={0.1}>
                                <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-black tracking-tight leading-[0.9] mb-8">
                                    Ideas that<br />
                                    <span className="text-[var(--color-brand)]">compound.</span>
                                </h1>
                            </LineReveal>

                            <FadeReveal delay={0.3}>
                                <p className="text-xl md:text-2xl text-[var(--color-text-secondary)] max-w-2xl leading-relaxed font-light">
                                    No fluff. Actionable insights on technology, business strategy, and the infrastructure behind companies that scale.
                                </p>
                            </FadeReveal>
                        </div>
                    </Container>
                </motion.div>
            </section>

            {/* ═══════════════════════════════════════
                 FEATURED POST — Full-width cinematic card
            ═══════════════════════════════════════ */}
            {featuredPost && (
                <section className="relative pb-16 md:pb-24">
                    <Container>
                        <Link href={featuredPost.url} className="group block">
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                className="relative border border-[var(--color-border)] overflow-hidden group-hover:border-[var(--color-brand)]/30 transition-colors duration-500"
                            >
                                {/* Split layout: content left, visual right */}
                                <div className="grid md:grid-cols-5">
                                    {/* Content */}
                                    <div className="md:col-span-3 p-8 md:p-12 lg:p-16 flex flex-col justify-between min-h-[400px] md:min-h-[480px]">
                                        <div>
                                            <div className="flex items-center gap-4 mb-8">
                                                <span className="text-[10px] font-black tracking-[0.3em] uppercase text-[var(--color-brand)] bg-[var(--color-brand)]/5 px-3 py-1.5 border border-[var(--color-brand)]/20">
                                                    FEATURED
                                                </span>
                                                {featuredPost.tags?.[0] && (
                                                    <span className={`text-[10px] font-bold tracking-[0.2em] uppercase px-3 py-1.5 border ${getTagColor(featuredPost.tags[0])}`}>
                                                        {featuredPost.tags[0]}
                                                    </span>
                                                )}
                                            </div>

                                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-[1.05] mb-6 group-hover:text-[var(--color-brand)] transition-colors duration-500">
                                                {featuredPost.title}
                                            </h2>

                                            <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed max-w-xl line-clamp-3">
                                                {featuredPost.description}
                                            </p>
                                        </div>

                                        <div className="flex items-center justify-between mt-8 pt-8 border-t border-[var(--color-border)]">
                                            <div className="flex items-center gap-6 text-sm text-[var(--color-text-muted)]">
                                                <time dateTime={featuredPost.date}>
                                                    {format(parseISO(featuredPost.date), "MMM d, yyyy")}
                                                </time>
                                                <span className="flex items-center gap-1.5">
                                                    <Clock className="w-3.5 h-3.5" />
                                                    {estimateReadTime(featuredPost.description)}
                                                </span>
                                                <span>{featuredPost.author}</span>
                                            </div>

                                            <div className="flex items-center gap-2 text-sm font-bold text-[var(--color-brand)] group-hover:gap-3 transition-all duration-300">
                                                Read Article
                                                <ArrowRight className="w-4 h-4" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Visual side — abstract gradient + number */}
                                    <div className="md:col-span-2 relative bg-gradient-to-br from-[var(--color-bg-soft)] to-[var(--color-bg-dark)] overflow-hidden min-h-[200px] md:min-h-0">
                                        <div className="absolute inset-0 bg-[var(--color-brand)]/[0.03]" />
                                        <div className="absolute inset-0 dot-grid opacity-20" />
                                        {/* Giant number watermark */}
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <span className="text-[20rem] font-black text-[var(--color-text)]/[0.02] select-none leading-none group-hover:text-[var(--color-brand)]/[0.06] transition-colors duration-700">
                                                01
                                            </span>
                                        </div>
                                        {/* Corner accent */}
                                        <div className="absolute top-0 left-0 w-16 h-px bg-[var(--color-brand)]" />
                                        <div className="absolute top-0 left-0 w-px h-16 bg-[var(--color-brand)]" />
                                    </div>
                                </div>
                            </motion.div>
                        </Link>
                    </Container>
                </section>
            )}

            {/* ═══════════════════════════════════════
                 POST INDEX — Asymmetric editorial grid
            ═══════════════════════════════════════ */}
            <section className="relative py-16 md:py-24">
                <Container>
                    {/* Section label */}
                    <FadeReveal>
                        <div className="flex items-center gap-6 mb-16">
                            <div className="text-[11px] font-bold tracking-[0.3em] uppercase text-[var(--color-text-muted)]">ALL ARTICLES</div>
                            <div className="flex-1 h-px bg-[var(--color-border)]" />
                            <div className="text-[11px] font-bold tracking-[0.2em] text-[var(--color-text-muted)]">{posts.length} POSTS</div>
                        </div>
                    </FadeReveal>

                    {/* Posts — each is a full-width row with asymmetric internal layout */}
                    <div className="space-y-0">
                        {remainingPosts.map((post, i) => (
                            <motion.div
                                key={post._id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-60px" }}
                                transition={{ delay: i * 0.05, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                            >
                                <Link href={post.url} className="group block">
                                    <div className="grid md:grid-cols-12 gap-6 md:gap-8 py-10 md:py-14 border-b border-[var(--color-border)] group-hover:border-[var(--color-brand)]/30 transition-colors duration-500">
                                        {/* Left: Number + Meta */}
                                        <div className="md:col-span-2 flex md:flex-col items-start gap-4 md:gap-6">
                                            <span className="text-5xl md:text-6xl font-black text-[var(--color-border)] group-hover:text-[var(--color-brand)]/30 transition-colors duration-500 select-none leading-none">
                                                {String(i + 2).padStart(2, "0")}
                                            </span>
                                            <div className="flex flex-wrap gap-2">
                                                {post.tags?.slice(0, 2).map((tag) => (
                                                    <span key={tag} className={`text-[9px] font-bold tracking-[0.15em] uppercase px-2.5 py-1 border ${getTagColor(tag)}`}>
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Center: Title + Description */}
                                        <div className="md:col-span-8">
                                            <h3 className="text-2xl md:text-3xl font-black tracking-tight leading-[1.1] mb-4 group-hover:text-[var(--color-brand)] transition-colors duration-500">
                                                {post.title}
                                            </h3>
                                            <p className="text-[var(--color-text-secondary)] leading-relaxed line-clamp-2 max-w-2xl">
                                                {post.description}
                                            </p>
                                        </div>

                                        {/* Right: Date + Arrow */}
                                        <div className="md:col-span-2 flex md:flex-col items-center md:items-end justify-between md:justify-between">
                                            <div className="text-sm text-[var(--color-text-muted)] text-right">
                                                <time dateTime={post.date}>
                                                    {format(parseISO(post.date), "MMM d")}
                                                </time>
                                                <div className="flex items-center gap-1.5 mt-1 text-xs">
                                                    <Clock className="w-3 h-3" />
                                                    {estimateReadTime(post.description)}
                                                </div>
                                            </div>
                                            <div className="w-10 h-10 rounded-full border border-[var(--color-border)] flex items-center justify-center group-hover:bg-[var(--color-brand)] group-hover:border-[var(--color-brand)] transition-all duration-500">
                                                <ArrowUpRight className="w-4 h-4 text-[var(--color-text-muted)] group-hover:text-white transition-colors duration-500" />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* ═══════════════════════════════════════
                 SUBSCRIBE — Decision moment
            ═══════════════════════════════════════ */}
            <section className="relative py-32 bg-black text-white overflow-hidden">
                <div className="absolute inset-0 noise-overlay pointer-events-none opacity-[0.08]" />
                <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-[var(--color-brand)]/[0.06] rounded-full blur-[150px] -translate-y-1/3 translate-x-1/4 pointer-events-none" />

                <Container>
                    <div className="max-w-3xl">
                        <FadeReveal>
                            <div className="text-[11px] font-bold tracking-[0.3em] uppercase text-white/40 mb-8">STAY SHARP</div>
                        </FadeReveal>
                        <LineReveal delay={0.1}>
                            <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-[0.95] mb-8">
                                Get insights before<br />your competition does.
                            </h2>
                        </LineReveal>
                        <FadeReveal delay={0.25}>
                            <p className="text-xl text-white/50 leading-relaxed mb-12 max-w-xl">
                                One email per week. No spam. Just the strategies, frameworks, and technical insights we use to build products that scale.
                            </p>
                        </FadeReveal>
                        <FadeReveal delay={0.35}>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <input
                                    type="email"
                                    placeholder="you@company.com"
                                    className="h-14 px-6 bg-white/5 border border-white/10 text-white placeholder:text-white/30 text-base font-medium tracking-wide focus:outline-none focus:border-[var(--color-brand)]/50 transition-colors flex-1 max-w-md"
                                />
                                <button className="h-14 px-8 bg-white text-black font-bold text-base tracking-wide hover:bg-gray-200 transition-colors flex items-center gap-3 shrink-0">
                                    Subscribe
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>
                        </FadeReveal>
                    </div>
                </Container>
            </section>
        </div>
    )
}
