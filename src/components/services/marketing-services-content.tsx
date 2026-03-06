"use client"

import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { CTASection } from "@/components/home/cta-section"
import { motion, useScroll, useTransform } from "motion/react"
import { FAQAccordion } from "@/components/ui/faq-accordion"
import { ArrowRight, Camera, Play, Search, TrendingUp, Zap, Eye, Target, BarChart3 } from "lucide-react"
import Image from "next/image"
import { LiquidChrome } from "@/components/ui/liquid-chrome"
import { AestheticTestimonials } from "@/components/ui/aesthetic-testimonials"
import { useRef } from "react"
import Link from "next/link"

/* ─────────────────────── Utility: Staggered line reveal ─────────────────────── */

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
            initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className={className}
        >
            {children}
        </motion.div>
    )
}

/* ─────────────────────── FAQs Data ─────────────────────── */

const faqs = [
    {
        question: "Do you use AI or human creators for visuals?",
        answer: "We use a hybrid approach. We train bespoke AI models (like Stable Diffusion) on your actual products to generate hyper-realistic, infinite contexts. Our human art directors then compose and refine the final assets for maximum conversion."
    },
    {
        question: "What is your video script writing process?",
        answer: "Every script starts with retention data. We analyze competitor hooks, identify psychographic triggers for your audience, and write a 'Hook, Story, Offer' framework. We deliver ready-to-shoot scripts with visual direction for your creators or ours."
    },
    {
        question: "How do you handle Influencer & UGC campaigns?",
        answer: "We handle the entire pipeline end-to-end. We scrape proprietary data to find creators with real engagement, negotiate rates, handle contracts, send them our high-converting scripts, and finally deploy their content as whitelisted ads on Meta/TikTok."
    },
    {
        question: "What is the turnaround time for a batch of AI creatives?",
        answer: "Once your brand model is trained (which takes 3-5 days), we can generate batches of 30-50 high-quality, on-brand creatives within 48 hours."
    },
    {
        question: "Can I use the UGC for ads?",
        answer: "Yes. All our creator contracts secure full digital usage rights in perpetuity. We specialize in using the UGC specifically for paid acquisition (Dark Posting / Whitelisting) to slash your CPA."
    }
]

/* ─────────────────────── Service Pillars ─────────────────────── */

const SERVICE_PILLARS = [
    {
        id: "visuals",
        number: "01",
        label: "AI VISUALS",
        title: "Generative Product Visuals",
        description: "No more expensive photoshoots. We train custom Stable Diffusion pipelines on your actual products — then place them in impossible, hyper-realistic environments at 1/10th the cost.",
        capabilities: ["Custom AI Model Training", "Infinite Product Contexts", "Hyper-Realistic Rendering", "Batch Generation (50+ / 48hrs)"],
        image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1200&q=80",
        accent: "#2563EB",
    },
    {
        id: "scripts",
        number: "02",
        label: "SCRIPT WRITING",
        title: "Retention-Engineered Scripts",
        description: "A pretty video with a weak script is wasted ad spend. We engineer scripts based on retention graph psychology — hooks that stop the scroll, stories that build trust, CTAs that convert.",
        capabilities: ["Viral TikTok & Reels Formats", "Deep-Dive YouTube Scripts", "Direct Response Ad Copy", "Hook-Story-Offer Framework"],
        image: "https://images.unsplash.com/photo-1516280440502-a2fc9575e9f8?w=800&q=80",
        accent: "#F43F5E",
    },
    {
        id: "ugc",
        number: "03",
        label: "INFLUENCER & UGC",
        title: "Data-Driven Creator Campaigns",
        description: "We source, negotiate, and manage micro and macro creators — then deploy their content as whitelisted ads on Meta & TikTok to bypass ad blindness and slash your CPA.",
        capabilities: ["Proprietary Creator Sourcing", "Full Rights Contracts", "High-Converting Scripts", "Whitelisted Dark Post Ads"],
        image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=600&q=80",
        accent: "#8B5CF6",
    }
]

/* ─────────────────────── METRICS ─────────────────────── */

const METRICS = [
    { value: "3.2x", label: "AVG ROAS", icon: <TrendingUp className="w-5 h-5" /> },
    { value: "-68%", label: "CPA REDUCTION", icon: <Target className="w-5 h-5" /> },
    { value: "50+", label: "BATCHES / 48HRS", icon: <Zap className="w-5 h-5" /> },
    { value: "4.8M", label: "VIEWS GENERATED", icon: <Eye className="w-5 h-5" /> },
]

/* ═════════════════════════════════════════════════════════════════════ */
/*                         MAIN COMPONENT                              */
/* ═════════════════════════════════════════════════════════════════════ */

export function MarketingServicesContent() {
    const heroRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress: heroScroll } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"],
    })
    const heroTextY = useTransform(heroScroll, [0, 1], [0, 200])
    const heroTextOpacity = useTransform(heroScroll, [0, 0.6], [1, 0])

    const intelligenceRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress: intelScroll } = useScroll({
        target: intelligenceRef,
        offset: ["start end", "end start"],
    })
    const intelLineHeight = useTransform(intelScroll, [0, 0.5], ["0%", "100%"])

    return (
        <div className="bg-[var(--color-bg)] text-[var(--color-text)] relative overflow-hidden">

            {/* ═══════════════════════════════════════
                 HERO — IMMERSIVE ENTRY SEQUENCE
                 LiquidChrome background PRESERVED, cinematic entry on top
            ═══════════════════════════════════════ */}
            <section ref={heroRef} className="relative min-h-[100vh] flex flex-col justify-center overflow-hidden">
                {/* Background Layer — LiquidChrome (PRESERVED) */}
                <div className="absolute inset-0 z-0">
                    <LiquidChrome
                        baseColor={[0.05, 0.05, 0.08]}
                        amplitude={0.4}
                        speed={0.3}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/70 to-black pointer-events-none" />
                </div>

                {/* Midground — Grain overlay */}
                <div className="absolute inset-0 z-[2] noise-overlay pointer-events-none opacity-[0.12]" />

                {/* Foreground — Content with parallax */}
                <motion.div
                    className="relative z-10 w-full max-w-[1600px] mx-auto px-6 md:px-12 pt-40 pb-24 flex flex-col justify-between min-h-[100vh]"
                    style={{ y: heroTextY, opacity: heroTextOpacity }}
                >
                    {/* Top row: Badge + Mini nav */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full gap-6">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                            className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-sm font-medium text-white/80 uppercase tracking-widest"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-brand)] opacity-75" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--color-brand)]" />
                            </span>
                            MARKETING OPERATIONS
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                            className="hidden md:flex items-center gap-8 text-sm font-semibold tracking-widest uppercase text-white/40"
                        >
                            <span className="hover:text-white transition-colors cursor-pointer">Visuals</span>
                            <span className="hover:text-white transition-colors cursor-pointer">Scripts</span>
                            <span className="hover:text-white transition-colors cursor-pointer">UGC</span>
                        </motion.div>
                    </div>

                    {/* Center: Giant Typography */}
                    <div className="w-full flex flex-col pt-16 md:pt-0">
                        <div className="overflow-hidden">
                            <motion.h1
                                initial={{ y: "100%", rotate: 2 }}
                                animate={{ y: "0%", rotate: 0 }}
                                transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                className="text-[14vw] md:text-[11vw] leading-[0.85] font-black tracking-tighter text-white uppercase"
                            >
                                Dominate
                            </motion.h1>
                        </div>
                        <div className="overflow-hidden flex flex-col md:flex-row md:items-end md:gap-12 lg:gap-20">
                            <motion.h1
                                initial={{ y: "100%", rotate: -2 }}
                                animate={{ y: "0%", rotate: 0 }}
                                transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                className="text-[14vw] md:text-[11vw] leading-[0.85] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand)] to-blue-300 uppercase"
                            >
                                Attention.
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1.5, delay: 1 }}
                                className="text-white/50 font-medium text-lg md:text-xl max-w-sm mt-6 md:mt-0 md:mb-4 leading-relaxed"
                            >
                                AI Visuals. Retention Scripts. Data-Driven Influencer Campaigns. Engineered to command market share.
                            </motion.p>
                        </div>
                    </div>

                    {/* Bottom Row: CTAs + scroll */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end w-full mt-16 md:mt-0">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="flex items-center gap-6"
                        >
                            <Link href="/contact">
                                <Button
                                    size="lg"
                                    className="h-16 px-10 rounded-full bg-white text-black hover:bg-gray-200 text-lg font-bold tracking-wide flex items-center gap-3 transition-all duration-500 hover:scale-105"
                                >
                                    Scale Your Brand
                                    <ArrowRight className="w-5 h-5" />
                                </Button>
                            </Link>
                            <Link href="/work" className="hidden md:flex group items-center justify-center p-5 rounded-full border border-white/20 text-white hover:bg-white hover:text-black transition-all duration-500 backdrop-blur-md">
                                <span className="sr-only">View Work</span>
                                <ArrowRight className="w-6 h-6 -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                            </Link>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1.5, delay: 1.2 }}
                            className="hidden md:flex flex-col items-center gap-3"
                        >
                            <span className="text-xs font-bold uppercase tracking-[0.3em] text-white/40 rotate-90 origin-bottom mb-8">
                                Scroll
                            </span>
                            <motion.div
                                animate={{ y: [0, 8, 0] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                className="w-5 h-8 rounded-full border-2 border-white/20 flex justify-center pt-1.5"
                            >
                                <motion.div
                                    animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                    className="w-1 h-1.5 rounded-full bg-white"
                                />
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.div>
            </section>

            {/* ═══════════════════════════════════════
                 METRICS RAIL — Floating authority strip  
            ═══════════════════════════════════════ */}
            <section className="relative py-6 border-y border-[var(--color-border)] bg-[var(--color-bg)] overflow-hidden">
                <Container>
                    <div className="flex flex-wrap justify-between items-center gap-8">
                        {METRICS.map((m, i) => (
                            <motion.div
                                key={m.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08, duration: 0.6 }}
                                className="flex items-center gap-4 group"
                            >
                                <div className="text-[var(--color-brand)] opacity-60 group-hover:opacity-100 transition-opacity">{m.icon}</div>
                                <div>
                                    <div className="text-3xl md:text-4xl font-black tracking-tighter text-[var(--color-text)]">{m.value}</div>
                                    <div className="text-[10px] font-bold tracking-[0.25em] uppercase text-[var(--color-text-muted)]">{m.label}</div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* ═══════════════════════════════════════
                 INTELLIGENCE MAP — Service Pillars  
                 Scroll-driven vertical timeline with asymmetric cards
            ═══════════════════════════════════════ */}
            <section ref={intelligenceRef} className="relative py-32 md:py-48">
                {/* Ambient glow */}
                <div className="absolute top-1/4 left-0 w-[40vw] h-[40vw] bg-[var(--color-brand)]/5 rounded-full blur-[150px] pointer-events-none" />
                <div className="absolute bottom-1/4 right-0 w-[30vw] h-[30vw] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />

                <Container>
                    {/* Section Header */}
                    <div className="max-w-3xl mb-24">
                        <FadeReveal>
                            <div className="text-[11px] font-bold tracking-[0.3em] uppercase text-[var(--color-text-muted)] mb-6">WHAT WE BUILD</div>
                        </FadeReveal>
                        <LineReveal delay={0.1}>
                            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[0.95]">
                                Three pillars of<br />
                                <span className="text-[var(--color-brand)]">market dominance.</span>
                            </h2>
                        </LineReveal>
                    </div>

                    {/* Pillars */}
                    <div className="relative">
                        {/* Vertical timeline line */}
                        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-[var(--color-border)]">
                            <motion.div
                                className="w-full bg-[var(--color-brand)] origin-top"
                                style={{ height: intelLineHeight }}
                            />
                        </div>

                        {SERVICE_PILLARS.map((pillar, i) => {
                            const isEven = i % 2 === 0
                            return (
                                <div key={pillar.id} className={`relative grid md:grid-cols-2 gap-8 md:gap-16 mb-32 last:mb-0`}>
                                    {/* Dot on timeline */}
                                    <div className="absolute left-6 md:left-1/2 top-8 w-3 h-3 -translate-x-1/2 rounded-full bg-[var(--color-brand)] border-4 border-[var(--color-bg)] z-10 shadow-[0_0_20px_var(--glow-brand-strong)]" />

                                    {/* Content Side */}
                                    <motion.div
                                        initial={{ opacity: 0, x: isEven ? -60 : 60 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true, margin: "-100px" }}
                                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                        className={`pl-16 md:pl-0 ${isEven ? "md:pr-20 md:text-right" : "md:col-start-2 md:pl-20"}`}
                                    >
                                        <div className={`inline-flex items-center gap-3 mb-6 ${isEven ? "md:flex-row-reverse" : ""}`}>
                                            <span className="text-[11px] font-black tracking-[0.3em] uppercase text-[var(--color-text-muted)]">{pillar.label}</span>
                                            <span className="text-5xl md:text-6xl font-black text-[var(--color-border)] select-none">{pillar.number}</span>
                                        </div>
                                        <h3 className="text-3xl md:text-4xl font-black tracking-tight mb-6">{pillar.title}</h3>
                                        <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed mb-8 max-w-lg">{pillar.description}</p>

                                        {/* Capabilities */}
                                        <div className={`flex flex-wrap gap-3 ${isEven ? "md:justify-end" : ""}`}>
                                            {pillar.capabilities.map((cap, ci) => (
                                                <motion.span
                                                    key={cap}
                                                    initial={{ opacity: 0, scale: 0.8 }}
                                                    whileInView={{ opacity: 1, scale: 1 }}
                                                    viewport={{ once: true }}
                                                    transition={{ delay: 0.3 + ci * 0.06, duration: 0.5 }}
                                                    className="px-4 py-2 text-sm font-semibold border border-[var(--color-border)] hover:border-[var(--color-brand)]/40 hover:bg-[var(--color-brand)]/5 transition-all duration-300 rounded-full text-[var(--color-text)]"
                                                >
                                                    {cap}
                                                </motion.span>
                                            ))}
                                        </div>
                                    </motion.div>

                                    {/* Image Side */}
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.92, y: 40 }}
                                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                        viewport={{ once: true, margin: "-100px" }}
                                        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                                        className={`pl-16 md:pl-0 ${isEven ? "md:col-start-2 md:pl-8" : "md:row-start-1 md:pr-8"}`}
                                    >
                                        <div className="relative aspect-[4/5] md:aspect-[3/4] overflow-hidden group">
                                            <Image
                                                src={pillar.image}
                                                alt={pillar.title}
                                                fill
                                                className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                                            <div className="absolute bottom-0 left-0 w-full h-1" style={{ backgroundColor: pillar.accent }} />
                                        </div>
                                    </motion.div>
                                </div>
                            )
                        })}
                    </div>
                </Container>
            </section>

            {/* ═══════════════════════════════════════
                 PROCESS — Scroll-based transformation story
            ═══════════════════════════════════════ */}
            <section className="relative py-32 bg-black text-white overflow-hidden">
                <div className="absolute inset-0 noise-overlay pointer-events-none opacity-[0.08]" />

                <Container>
                    <div className="mb-20 max-w-3xl">
                        <FadeReveal>
                            <div className="text-[11px] font-bold tracking-[0.3em] uppercase text-white/40 mb-6">HOW IT WORKS</div>
                        </FadeReveal>
                        <LineReveal delay={0.1}>
                            <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-[0.95]">
                                From brief to<br />market domination.
                            </h2>
                        </LineReveal>
                    </div>

                    {/* Process Steps */}
                    <div className="grid md:grid-cols-4 gap-px bg-white/10 overflow-hidden">
                        {[
                            {
                                step: "01",
                                title: "Audit & Strategy",
                                desc: "We dissect your brand, your competition, and your audience psychographics to build a weaponized content strategy.",
                                icon: <BarChart3 className="w-7 h-7" />,
                            },
                            {
                                step: "02",
                                title: "Model Training",
                                desc: "Custom AI models are trained on your products. Scripts are written using retention-first frameworks. Creators are sourced & briefed.",
                                icon: <Zap className="w-7 h-7" />,
                            },
                            {
                                step: "03",
                                title: "Production & Deploy",
                                desc: "Batches of 50+ AI visuals generated. Video scripts shot and edited. UGC deployed as whitelisted ads across all platforms.",
                                icon: <Play className="w-7 h-7" />,
                            },
                            {
                                step: "04",
                                title: "Optimize & Scale",
                                desc: "Real-time performance data drives iteration. Winning creatives are scaled. Losers are killed fast. ROAS compounds monthly.",
                                icon: <TrendingUp className="w-7 h-7" />,
                            },
                        ].map((item, i) => (
                            <motion.div
                                key={item.step}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                                className="bg-black p-8 md:p-10 flex flex-col justify-between group hover:bg-white/[0.03] transition-colors duration-500 relative min-h-[320px]"
                            >
                                <span className="absolute top-4 right-6 text-[6rem] font-black text-white/[0.02] select-none leading-none group-hover:text-white/[0.05] transition-colors duration-500">
                                    {item.step}
                                </span>

                                <div>
                                    <div className="text-[var(--color-brand)] mb-8 opacity-70 group-hover:opacity-100 transition-opacity">{item.icon}</div>
                                    <div className="text-[11px] font-black tracking-[0.25em] uppercase text-white/30 mb-3">{item.step}</div>
                                    <h3 className="text-xl md:text-2xl font-black mb-4">{item.title}</h3>
                                </div>
                                <p className="text-white/50 leading-relaxed text-[15px]">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* ═══════════════════════════════════════
                 VISUAL SHOWCASE — Offset gallery
            ═══════════════════════════════════════ */}
            <section className="relative py-32">
                <Container>
                    <div className="grid grid-cols-12 gap-4 md:gap-6">
                        {/* Large feature */}
                        <motion.div
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.9 }}
                            className="col-span-12 md:col-span-8 relative aspect-[16/10] overflow-hidden group"
                        >
                            <Image
                                src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1200&q=80"
                                alt="AI-generated product visual"
                                fill
                                className="object-cover transition-transform duration-[1.5s] group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                            <div className="absolute bottom-8 left-8 right-8">
                                <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/50 mb-2 block">JEWELLERY PHOTOGRAPHY</span>
                                <h3 className="text-2xl md:text-3xl font-black text-white">Hyper-Realistic Rendering</h3>
                            </div>
                        </motion.div>

                        {/* Side stack */}
                        <div className="col-span-12 md:col-span-4 flex flex-col gap-4 md:gap-6">
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1, duration: 0.8 }}
                                className="relative aspect-square overflow-hidden group"
                            >
                                <Image
                                    src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=600&q=80"
                                    alt="Diamond necklace"
                                    fill
                                    className="object-cover transition-transform duration-[1.2s] group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-700" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="text-xl font-black text-white uppercase tracking-[0.2em]">FLAWLESS DETAIL</span>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2, duration: 0.8 }}
                                className="flex-1 bg-[var(--color-bg-soft)] border border-[var(--color-border)] p-8 flex flex-col justify-between group hover:border-[var(--color-brand)]/30 transition-colors"
                            >
                                <div>
                                    <Camera className="w-7 h-7 text-[var(--color-brand)] mb-4" />
                                    <h3 className="text-xl font-black mb-2">Infinite Contexts</h3>
                                    <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">Place your product on Mars, underwater, or in a minimalist studio. Instantly.</p>
                                </div>
                                <div className="mt-6 h-1 w-full bg-[var(--color-border)] rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: "75%" }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.5, duration: 1.2, ease: "easeOut" }}
                                        className="h-full bg-[var(--color-brand)] rounded-full"
                                    />
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* ═══════════════════════════════════════
                 FAQs — Architectural split layout
            ═══════════════════════════════════════ */}
            <section className="py-32 border-t border-[var(--color-border)]">
                <Container>
                    <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">
                        <div className="md:sticky md:top-32">
                            <FadeReveal>
                                <div className="text-[11px] font-bold tracking-[0.3em] uppercase text-[var(--color-text-muted)] mb-6">QUESTIONS</div>
                            </FadeReveal>
                            <LineReveal delay={0.1}>
                                <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-[0.95] mb-6">
                                    Everything you<br />need to know.
                                </h2>
                            </LineReveal>
                            <FadeReveal delay={0.2}>
                                <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
                                    Can&apos;t find the answer? <Link href="/contact" className="text-[var(--color-brand)] font-semibold hover:underline">Get in touch</Link> — we respond within 4 hours.
                                </p>
                            </FadeReveal>
                        </div>
                        <div>
                            <FAQAccordion items={faqs} />
                        </div>
                    </div>
                </Container>
            </section>

            {/* ═══════════ TESTIMONIALS ═══════════ */}
            <AestheticTestimonials />

            {/* ═══════════ CTA ═══════════ */}
            <CTASection />
        </div>
    )
}
