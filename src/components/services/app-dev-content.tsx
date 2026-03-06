"use client"

import { Container } from "@/components/ui/container"
import { PhoneMockup, MockupPhilosophyUI, MockupFinanceSplitUI, MockupFinanceUI } from "@/components/ui/phone-mockup"
import { ArrowRight, ArrowUpRight, CheckCircle2, Smartphone, Layers, Zap, Shield, Rocket, Code2, BarChart3, Globe } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"
import { CTASection } from "@/components/home/cta-section"
import { AestheticTestimonials } from "@/components/ui/aesthetic-testimonials"
import { FAQAccordion } from "@/components/ui/faq-accordion"

/* ─────────────────────── Motion Utilities ─────────────────────── */

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

/* ─────────────────────── FAQs ─────────────────────── */

const faqs = [
    {
        question: "Do you build for iOS and Android?",
        answer: "Yes, we primarily use React Native to build high-performance cross-platform apps that work perfectly on both iPhone and Android devices from a single codebase, saving you time and budget."
    },
    {
        question: "How much does an app cost?",
        answer: "Simple apps start around $3k, while complex platforms like Uber clones, marketplaces, or social networks can range from $10k-$50k depending on features, integrations, and scale requirements."
    },
    {
        question: "Who owns the code?",
        answer: "You do. Once the project is paid for, you own 100% of the Intellectual Property (IP) and source code. Full repository handover, no lock-in."
    },
    {
        question: "Do you help with App Store submission?",
        answer: "Yes, we handle the entire submission process for Apple App Store and Google Play Store, ensuring all guidelines are met for a smooth first-time approval."
    },
    {
        question: "What happens after launch?",
        answer: "We offer ongoing maintenance, performance monitoring, and iteration cycles. Most of our clients retain us on a monthly basis to ship updates, fix bugs, and scale infrastructure as their user base grows."
    },
    {
        question: "Can you redesign or fix an existing app?",
        answer: "Absolutely. We regularly rescue apps built by other teams. We audit the codebase, identify bottlenecks, redesign the UI, and rebuild modules that need it — without starting from scratch unless necessary."
    }
]

/* ─────────────────────── Results Data ─────────────────────── */

const RESULTS = [
    { metric: "50+", label: "APPS SHIPPED", description: "Across iOS, Android & Web" },
    { metric: "4.8★", label: "AVG STORE RATING", description: "Across all published apps" },
    { metric: "2.3M+", label: "USERS ONBOARDED", description: "Across client applications" },
    { metric: "3–6wk", label: "MVP DELIVERY", description: "Idea to App Store ready" },
]

/* ─────────────────────── Process Steps ─────────────────────── */

const PROCESS = [
    {
        step: "01",
        title: "Discovery & Strategy",
        desc: "We dissect your idea, map user flows, define the MVP scope, and build a technical architecture that scales. No code until the plan is bulletproof.",
        icon: <Layers className="w-7 h-7" />,
    },
    {
        step: "02",
        title: "Design & Prototype",
        desc: "High-fidelity UI/UX in Figma — interactive prototypes you can tap through before a single line of code is written. You see exactly what you're getting.",
        icon: <Smartphone className="w-7 h-7" />,
    },
    {
        step: "03",
        title: "Build & Test",
        desc: "React Native or Swift/Kotlin development with CI/CD pipelines, automated testing, and weekly demo builds. You're in the loop at every sprint.",
        icon: <Code2 className="w-7 h-7" />,
    },
    {
        step: "04",
        title: "Launch & Scale",
        desc: "App Store optimization, submission handling, analytics setup, and post-launch iteration. We don't disappear after deploy — we help you grow.",
        icon: <Rocket className="w-7 h-7" />,
    },
]

/* ─────────────────────── Capabilities ─────────────────────── */

const CAPABILITIES = [
    { icon: <Globe className="w-5 h-5" />, label: "Cross-Platform (React Native)" },
    { icon: <Shield className="w-5 h-5" />, label: "Native iOS (Swift)" },
    { icon: <Zap className="w-5 h-5" />, label: "Native Android (Kotlin)" },
    { icon: <BarChart3 className="w-5 h-5" />, label: "Backend & API Development" },
    { icon: <Layers className="w-5 h-5" />, label: "UI/UX Design Systems" },
    { icon: <Rocket className="w-5 h-5" />, label: "App Store Optimization" },
]

/* ═════════════════════════════════════════════════════════════════════ */
/*                         MAIN COMPONENT                              */
/* ═════════════════════════════════════════════════════════════════════ */

export function AppDevContent() {
    const heroRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress: heroScroll } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"],
    })
    const heroTextY = useTransform(heroScroll, [0, 1], [0, 180])
    const heroTextOpacity = useTransform(heroScroll, [0, 0.6], [1, 0])
    const phoneY = useTransform(heroScroll, [0, 1], [0, -60])

    const timelineRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress: timelineScroll } = useScroll({
        target: timelineRef,
        offset: ["start end", "end start"],
    })
    const timelineProgress = useTransform(timelineScroll, [0, 0.5], ["0%", "100%"])

    return (
        <div className="bg-[var(--color-bg)] text-[var(--color-text)] relative overflow-hidden">

            {/* ═══════════════════════════════════════
                 HERO — Immersive entry with phone mockup
            ═══════════════════════════════════════ */}
            <section ref={heroRef} className="relative min-h-[100vh] overflow-hidden bg-white">
                {/* Background depth layers */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute inset-0 dot-grid opacity-30" />
                    <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-blue-500/[0.04] rounded-full blur-[120px] -translate-y-1/4 translate-x-1/4" />
                    <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-indigo-500/[0.03] rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4" />
                </div>

                <div className="max-w-[1600px] mx-auto px-6 md:px-12 pt-36 pb-24 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
                        {/* Left: Content */}
                        <motion.div style={{ y: heroTextY, opacity: heroTextOpacity }}>
                            <FadeReveal>
                                <div className="inline-flex items-center gap-3 px-4 py-2 border border-[var(--color-border)] text-[11px] font-bold tracking-[0.3em] uppercase text-[var(--color-text-muted)] mb-10">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75" />
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
                                    </span>
                                    APP DEVELOPMENT
                                </div>
                            </FadeReveal>

                            <LineReveal delay={0.1}>
                                <h1 className="text-[clamp(3rem,6vw,5.5rem)] font-black tracking-tight leading-[0.9] mb-8">
                                    We build apps<br />
                                    <span className="text-[var(--color-brand)]">people actually use.</span>
                                </h1>
                            </LineReveal>

                            <FadeReveal delay={0.3}>
                                <p className="text-xl text-[var(--color-text-secondary)] leading-relaxed max-w-lg mb-10 font-light">
                                    From fintech to marketplaces to AI-powered tools — we design, develop, and ship production-grade mobile apps that generate revenue and retain users.
                                </p>
                            </FadeReveal>

                            <FadeReveal delay={0.4}>
                                <div className="flex items-center gap-6">
                                    <Link href="/contact">
                                        <motion.button
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            className="h-16 px-10 bg-[var(--color-brand)] text-white text-lg font-bold flex items-center gap-3 transition-all duration-500 hover:shadow-[0_8px_40px_var(--glow-brand-strong)] group"
                                        >
                                            Start Your App
                                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                        </motion.button>
                                    </Link>
                                    <Link href="/work" className="group flex items-center gap-2 text-sm font-bold text-[var(--color-text-muted)] hover:text-[var(--color-brand)] transition-colors">
                                        View Portfolio
                                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                    </Link>
                                </div>
                            </FadeReveal>

                            {/* Capability pills */}
                            <FadeReveal delay={0.55}>
                                <div className="flex flex-wrap gap-3 mt-12 pt-12 border-t border-[var(--color-border)]">
                                    {["React Native", "Swift", "Kotlin", "Node.js", "Firebase", "AWS"].map((tech, i) => (
                                        <span key={tech} className="px-4 py-2 text-[11px] font-bold tracking-[0.15em] uppercase border border-[var(--color-border)] text-[var(--color-text-muted)] hover:border-[var(--color-brand)]/40 hover:text-[var(--color-brand)] transition-all duration-300">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </FadeReveal>
                        </motion.div>

                        {/* Right: Phone Mockup (PRESERVED) */}
                        <div className="relative flex items-center justify-center">
                            <motion.div style={{ y: phoneY }} className="relative z-10 rotate-[8deg]">
                                <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                    className="drop-shadow-[0_40px_80px_rgba(37,99,235,0.12)]"
                                >
                                    <PhoneMockup>
                                        <MockupFinanceUI />
                                    </PhoneMockup>
                                </motion.div>
                            </motion.div>

                            {/* Floating stat badge */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.85, y: 10 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.9, ease: "backOut" }}
                                className="absolute bottom-16 right-4 lg:right-8 z-30"
                            >
                                <div className="bg-white border border-[var(--color-border)] shadow-2xl p-4 flex flex-col gap-1 min-w-[130px]">
                                    <div className="flex -space-x-2 mb-1">
                                        {[11, 22, 33].map((s) => (
                                            <div key={s} className="h-7 w-7 rounded-full border-2 border-white bg-blue-100 overflow-hidden shadow-sm">
                                                <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${s}`} alt="" />
                                            </div>
                                        ))}
                                    </div>
                                    <div className="text-xl font-black text-[var(--color-text)]">2.3M<span className="text-[var(--color-brand)]">+</span></div>
                                    <div className="text-[9px] text-[var(--color-text-muted)] leading-tight font-bold uppercase tracking-wider">Users onboarded across apps</div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════
                 RESULTS RAIL — Trust-building authority strip
            ═══════════════════════════════════════ */}
            <section className="relative py-6 border-y border-[var(--color-border)] bg-[var(--color-bg)]">
                <Container>
                    <div className="flex flex-wrap justify-between items-center gap-8">
                        {RESULTS.map((r, i) => (
                            <motion.div
                                key={r.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08, duration: 0.6 }}
                                className="group"
                            >
                                <div className="text-3xl md:text-4xl font-black tracking-tighter text-[var(--color-text)]">{r.metric}</div>
                                <div className="text-[10px] font-bold tracking-[0.25em] uppercase text-[var(--color-text-muted)]">{r.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* ═══════════════════════════════════════
                 PHILOSOPHY — Phone mockup preserved, content rebuilt
                 Spatial center-phone with asymmetric corner text
            ═══════════════════════════════════════ */}
            <section className="relative py-32 md:py-40 bg-[#FAFAFA] overflow-hidden">
                {/* Background parallax text */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <span className="text-[18vw] font-black text-black/[0.015] uppercase tracking-[0.2em] whitespace-nowrap select-none">
                        PHILOSOPHY
                    </span>
                </div>

                <Container>
                    <div className="text-center mb-20">
                        <FadeReveal>
                            <div className="text-[11px] font-bold tracking-[0.3em] uppercase text-[var(--color-text-muted)] mb-6">OUR APPROACH</div>
                        </FadeReveal>
                        <LineReveal delay={0.1}>
                            <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-[0.95]">
                                We don&apos;t just build apps.<br />
                                <span className="text-[var(--color-brand)]">We architect products.</span>
                            </h2>
                        </LineReveal>
                    </div>

                    {/* Center phone with corner philosophy blocks */}
                    <div className="relative flex items-center justify-center min-h-[700px] max-w-6xl mx-auto">
                        {/* Phone (PRESERVED) */}
                        <FadeReveal delay={0.2} className="relative z-20">
                            <motion.div whileHover={{ scale: 1.02 }} className="relative group">
                                <PhoneMockup>
                                    <MockupPhilosophyUI />
                                </PhoneMockup>
                                <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[110%] h-48 pointer-events-none">
                                    <div className="w-full h-full bg-gradient-to-t from-[#FAFAFA] via-transparent to-transparent z-30" />
                                </div>
                            </motion.div>
                        </FadeReveal>

                        {/* Corner text blocks */}
                        <div className="absolute inset-0 flex flex-col justify-between py-8 pointer-events-none">
                            <div className="flex justify-between items-start">
                                <FadeReveal delay={0.3} className="max-w-[260px]">
                                    <div className="text-[10px] font-black tracking-[0.25em] uppercase text-[var(--color-brand)] mb-3">01 — HUMAN FOCUSED</div>
                                    <p className="text-[14px] text-[var(--color-text-secondary)] leading-relaxed font-medium">
                                        Every layout, motion, and interaction is shaped around real human behavior — not assumptions. Lasting impact over short-term hype.
                                    </p>
                                </FadeReveal>
                                <FadeReveal delay={0.4} className="max-w-[260px] text-right">
                                    <div className="text-[10px] font-black tracking-[0.25em] uppercase text-[var(--color-brand)] mb-3">02 — BUILT FOR SCALE</div>
                                    <p className="text-[14px] text-[var(--color-text-secondary)] leading-relaxed font-medium">
                                        Our systems grow with your product, team, and evolving business needs — maintaining performance and stability over time.
                                    </p>
                                </FadeReveal>
                            </div>
                            <div className="flex justify-between items-end">
                                <FadeReveal delay={0.5} className="max-w-[260px]">
                                    <div className="text-[10px] font-black tracking-[0.25em] uppercase text-[var(--color-brand)] mb-3">03 — CLARITY DRIVEN</div>
                                    <p className="text-[14px] text-[var(--color-text-secondary)] leading-relaxed font-medium">
                                        Interfaces that feel instantly understandable. Guiding users naturally through each interaction without friction or confusion.
                                    </p>
                                </FadeReveal>
                                <FadeReveal delay={0.6} className="max-w-[260px] text-right">
                                    <div className="text-[10px] font-black tracking-[0.25em] uppercase text-[var(--color-brand)] mb-3">04 — PRECISION CRAFTED</div>
                                    <p className="text-[14px] text-[var(--color-text-secondary)] leading-relaxed font-medium">
                                        From spacing to interaction timing — every detail is refined to create a polished, reliable product experience users trust.
                                    </p>
                                </FadeReveal>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* ═══════════════════════════════════════
                 CAPABILITIES — What we build
            ═══════════════════════════════════════ */}
            <section className="relative py-32">
                <Container>
                    <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">
                        {/* Left: Sticky header */}
                        <div className="md:sticky md:top-32">
                            <FadeReveal>
                                <div className="text-[11px] font-bold tracking-[0.3em] uppercase text-[var(--color-text-muted)] mb-6">CAPABILITIES</div>
                            </FadeReveal>
                            <LineReveal delay={0.1}>
                                <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-[0.95] mb-6">
                                    Full-stack mobile<br />engineering.
                                </h2>
                            </LineReveal>
                            <FadeReveal delay={0.2}>
                                <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed mb-10">
                                    We handle every layer of your app — from pixel-perfect UI to robust backend infrastructure. One team, zero handoffs, complete accountability.
                                </p>
                            </FadeReveal>
                            <FadeReveal delay={0.3}>
                                <div className="flex flex-wrap gap-3">
                                    {CAPABILITIES.map((cap) => (
                                        <div key={cap.label} className="flex items-center gap-3 px-5 py-3 border border-[var(--color-border)] hover:border-[var(--color-brand)]/40 hover:bg-[var(--color-brand)]/5 transition-all duration-300">
                                            <span className="text-[var(--color-brand)]">{cap.icon}</span>
                                            <span className="text-sm font-semibold text-[var(--color-text)]">{cap.label}</span>
                                        </div>
                                    ))}
                                </div>
                            </FadeReveal>
                        </div>

                        {/* Right: Types of apps we build */}
                        <div className="space-y-6">
                            {[
                                {
                                    category: "FINTECH & PAYMENTS",
                                    examples: "Payment wallets, banking dashboards, crypto platforms, lending apps",
                                    detail: "PCI-DSS compliant architecture. Real-time transaction processing. Complex financial logic handled at scale."
                                },
                                {
                                    category: "MARKETPLACES & E-COMMERCE",
                                    examples: "Multi-vendor platforms, booking systems, on-demand services",
                                    detail: "Real-time matching, payment splitting, review systems, and logistics tracking built into the core."
                                },
                                {
                                    category: "AI-POWERED TOOLS",
                                    examples: "Chatbots, recommendation engines, image recognition, workflow automation",
                                    detail: "LLM integration, custom model deployment, on-device ML with Core ML / TensorFlow Lite."
                                },
                                {
                                    category: "SAAS & INTERNAL TOOLS",
                                    examples: "CRM companions, project management, analytics dashboards, field ops",
                                    detail: "Offline-first architecture, role-based access, push notifications, and deep linking."
                                },
                                {
                                    category: "SOCIAL & COMMUNITY",
                                    examples: "Social networks, creator platforms, messaging apps, community forums",
                                    detail: "Real-time chat (WebSockets), media processing pipelines, content moderation, and feed algorithms."
                                },
                            ].map((item, i) => (
                                <motion.div
                                    key={item.category}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-60px" }}
                                    transition={{ delay: i * 0.06, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                                    className="border border-[var(--color-border)] p-8 hover:border-[var(--color-brand)]/30 transition-colors duration-500 group"
                                >
                                    <div className="text-[10px] font-black tracking-[0.25em] uppercase text-[var(--color-brand)] mb-3">{item.category}</div>
                                    <h3 className="text-lg font-black mb-2 text-[var(--color-text)] group-hover:text-[var(--color-brand)] transition-colors">{item.examples}</h3>
                                    <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{item.detail}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </Container>
            </section>

            {/* ═══════════════════════════════════════
                 FEATURE SHOWCASE — Split layout with phone (PRESERVED)
            ═══════════════════════════════════════ */}
            <section className="relative flex flex-col overflow-hidden">
                {/* Top half: Light */}
                <div className="bg-[#F8FAFB] pt-24 pb-0 overflow-hidden relative">
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.02]">
                        <span className="text-[18vw] font-black text-black tracking-[0.2em] whitespace-nowrap select-none">
                            FEATURES
                        </span>
                    </div>

                    <Container className="relative z-10">
                        <div className="text-center mb-16">
                            <FadeReveal>
                                <div className="text-[11px] font-bold tracking-[0.3em] uppercase text-[var(--color-text-muted)] mb-6">YOUR VISION, SCALED</div>
                            </FadeReveal>
                            <LineReveal delay={0.1}>
                                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[0.95] mb-6">
                                    People have brilliant ideas to<br />
                                    <span className="text-[var(--color-brand)]">make life better.</span>
                                </h2>
                            </LineReveal>
                            <FadeReveal delay={0.2}>
                                <p className="text-lg md:text-xl text-[var(--color-text-secondary)] leading-relaxed max-w-2xl mx-auto font-light">
                                    We help you build exactly that, ship it to your users, and scale it further. Production-grade features come standard.
                                </p>
                            </FadeReveal>
                        </div>

                        <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
                            {[
                                { icon: <Shield className="text-[var(--color-brand)]" />, title: "Authentication", desc: "Biometric, OAuth, MFA — bulletproof security" },
                                { icon: <BarChart3 className="text-[var(--color-brand)]" />, title: "Analytics", desc: "User behavior tracking from day one" },
                                { icon: <Zap className="text-[var(--color-brand)]" />, title: "Push Notifications", desc: "Targeted, scheduled, retention-driving" },
                                { icon: <Globe className="text-[var(--color-brand)]" />, title: "Offline Mode", desc: "Works without internet, syncs when connected" },
                                { icon: <Layers className="text-[var(--color-brand)]" />, title: "CI/CD Pipeline", desc: "Automated builds, testing, and deploys" },
                                { icon: <Rocket className="text-[var(--color-brand)]" />, title: "Store Optimization", desc: "ASO for higher visibility and downloads" },
                            ].map((f, i) => (
                                <FadeReveal key={f.title} delay={i * 0.06}>
                                    <div className="flex items-start gap-4 group">
                                        <div className="h-11 w-11 border border-[var(--color-border)] flex items-center justify-center flex-shrink-0 group-hover:border-[var(--color-brand)]/40 transition-colors">
                                            {f.icon}
                                        </div>
                                        <div className="text-left">
                                            <h4 className="text-[14px] font-bold text-[var(--color-text)] mb-0.5">{f.title}</h4>
                                            <p className="text-[12px] text-[var(--color-text-muted)] font-medium leading-tight">{f.desc}</p>
                                        </div>
                                    </div>
                                </FadeReveal>
                            ))}
                        </div>

                        {/* Phone spanning both sections (PRESERVED) */}
                        <div className="flex justify-center relative -bottom-48 z-20">
                            <FadeReveal delay={0.2}>
                                <motion.div whileHover={{ scale: 1.02 }} className="drop-shadow-2xl">
                                    <PhoneMockup className="!h-[640px]">
                                        <MockupFinanceSplitUI />
                                    </PhoneMockup>
                                </motion.div>
                            </FadeReveal>
                        </div>
                    </Container>
                </div>

                {/* Bottom half: Dark brand */}
                <div className="bg-black pt-64 pb-32 text-white overflow-hidden">
                    <div className="absolute inset-0 noise-overlay pointer-events-none opacity-[0.06]" />
                    <Container>
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <FadeReveal>
                                    <div className="text-[11px] font-bold tracking-[0.3em] uppercase text-white/40 mb-6">WHY US</div>
                                </FadeReveal>
                                <LineReveal delay={0.1}>
                                    <h2 className="text-4xl lg:text-6xl font-black leading-[0.95] tracking-tight mb-6">
                                        Your app is a<br />
                                        <span className="text-[var(--color-brand)]">revenue machine.</span>
                                    </h2>
                                </LineReveal>
                                <FadeReveal delay={0.2}>
                                    <p className="text-lg text-white/50 leading-relaxed mb-8 max-w-lg">
                                        We don&apos;t build apps that sit in the store collecting dust. We engineer retention loops, monetization layers, and growth mechanics into every screen.
                                    </p>
                                </FadeReveal>
                                <FadeReveal delay={0.3}>
                                    <div className="h-px w-full bg-white/10 mb-8" />
                                    <div className="space-y-4">
                                        {["Built for conversion, not just aesthetics", "Post-launch growth strategy included", "Average 4.8★ across all shipped apps", "Full code ownership & repository handover"].map(item => (
                                            <div key={item} className="flex items-center gap-3">
                                                <CheckCircle2 className="h-4 w-4 text-[var(--color-brand)] shrink-0" />
                                                <span className="text-[15px] text-white/70 font-medium">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </FadeReveal>
                            </div>

                            <FadeReveal delay={0.3}>
                                <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 lg:p-10 relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />
                                    <div className="text-[10px] font-black tracking-[0.25em] uppercase text-[var(--color-brand)] mb-6">CLIENT RESULT</div>
                                    <h3 className="text-2xl font-black text-white mb-4">FinEdge — Payments App</h3>
                                    <p className="text-white/50 text-[15px] leading-relaxed mb-8">
                                        Built a cross-platform payments app from zero to App Store in 5 weeks. 78% user activation rate in the first month. $1.2M processed in the first quarter.
                                    </p>
                                    <div className="grid grid-cols-3 gap-6 mb-8">
                                        {[
                                            { val: "78%", lbl: "Activation" },
                                            { val: "$1.2M", lbl: "Processed Q1" },
                                            { val: "4.9★", lbl: "Store Rating" },
                                        ].map(s => (
                                            <div key={s.lbl}>
                                                <div className="text-2xl font-black text-white">{s.val}</div>
                                                <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/30">{s.lbl}</div>
                                            </div>
                                        ))}
                                    </div>
                                    <Link href="/contact">
                                        <motion.button
                                            whileHover={{ scale: 1.02 }}
                                            className="bg-white text-black px-8 py-4 text-sm font-bold tracking-wide flex items-center gap-3 transition-all duration-500 hover:shadow-2xl group"
                                        >
                                            Build Something Like This
                                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </motion.button>
                                    </Link>
                                </div>
                            </FadeReveal>
                        </div>
                    </Container>
                </div>
            </section>

            {/* ═══════════════════════════════════════
                 PROCESS — Scroll-based transformation story
            ═══════════════════════════════════════ */}
            <section ref={timelineRef} className="relative py-32 md:py-48 bg-[#FAFAFA] overflow-hidden">
                <div className="absolute top-[10%] -left-[10%] w-[50vw] h-[50vw] bg-blue-100/40 rounded-full blur-[160px] pointer-events-none mix-blend-multiply" />
                <div className="absolute bottom-[10%] -right-[10%] w-[50vw] h-[50vw] bg-indigo-100/40 rounded-full blur-[160px] pointer-events-none mix-blend-multiply" />
                <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-[0.03] pointer-events-none mix-blend-multiply" />

                <Container>
                    <div className="max-w-4xl mb-32 relative z-10">
                        <FadeReveal>
                            <div className="text-[10px] font-bold tracking-[0.4em] uppercase text-blue-600 mb-8 pl-1">THE TRANSFORMATION</div>
                        </FadeReveal>
                        <LineReveal delay={0.1}>
                            <h2 className="text-5xl md:text-7xl lg:text-[6.5rem] font-black tracking-tighter leading-[0.85] text-zinc-900">
                                FROM IDEA TO<br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500 italic pr-2">APP STORE.</span>
                            </h2>
                        </LineReveal>
                    </div>

                    <div className="relative pt-10 pb-40">
                        {PROCESS.map((item, i) => {
                            const isEven = i % 2 === 0
                            return (
                                <motion.div
                                    key={item.step}
                                    initial={{ opacity: 0, y: 150, rotateX: 20 }}
                                    whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                                    viewport={{ once: true, margin: "-20%" }}
                                    transition={{ duration: 1.2, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                                    className={`relative z-[${10 + i}] mb-[-12vh] md:mb-[-15vh] group`}
                                >
                                    <div className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${isEven ? "" : "md:flex-row-reverse"}`}>
                                        
                                        {/* Number + Graphic Side */}
                                        <div className="w-full md:w-5/12 relative flex justify-center items-center">
                                            <motion.div 
                                                whileHover={{ scale: 1.05 }}
                                                className="relative w-full aspect-square max-w-[320px] rounded-[3rem] bg-white/40 backdrop-blur-2xl border border-white/60 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] overflow-hidden flex items-center justify-center p-8 group-hover:border-blue-100/80 transition-all duration-700"
                                            >
                                                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                                <div className="absolute -top-10 -right-10 text-[12rem] font-black text-zinc-900/5 leading-none select-none transition-transform duration-700 group-hover:scale-110 group-hover:-rotate-12">
                                                    {item.step}
                                                </div>
                                                <div className="relative z-10 text-blue-600/80 group-hover:text-blue-600 group-hover:scale-110 transition-all duration-700">
                                                    {item.icon}
                                                </div>
                                            </motion.div>
                                        </div>

                                        {/* Content Side */}
                                        <div className={`w-full md:w-7/12 ${isEven ? "md:pl-10" : "md:pr-10 text-left md:text-right"}`}>
                                            <div className="inline-flex items-center gap-3 mb-6">
                                                <span className="text-[11px] font-bold tracking-widest text-zinc-400">PHASE {item.step}</span>
                                                <div className="h-[1px] w-12 bg-zinc-200" />
                                            </div>
                                            <h3 className="text-3xl md:text-5xl font-black tracking-tight mb-6 text-zinc-900">
                                                {item.title}
                                            </h3>
                                            <p className="text-lg md:text-xl text-zinc-500 leading-relaxed max-w-xl font-medium">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            )
                        })}
                    </div>
                </Container>
            </section>

            {/* ═══════════════════════════════════════
                 FAQs — Architectural split
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

