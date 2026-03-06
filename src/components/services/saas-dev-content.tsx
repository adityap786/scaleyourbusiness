"use client"

import { Container } from "@/components/ui/container"
import { ArrowRight, ArrowUpRight, CheckCircle2, Rocket, Code2, AppWindow, Database, Workflow, Shield, Zap } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"
import AnimatedGradientBackground from "@/components/ui/animated-gradient-background"
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
        question: "How much does it cost to build a custom SaaS?",
        answer: "Costs vary wildly based on complexity. A straightforward specialized tool might start around $10k–$15k, whereas heavy multi-sided marketplaces or data-intensive platforms range from $30k–$80k+. We scope everything out during discovery so there are zero surprises."
    },
    {
        question: "Who owns the IP and source code?",
        answer: "You do, 100%. Once the project is complete and invoices are paid, we hand over full repository access. You are never locked into staying with us (though most clients do because they love our work)."
    },
    {
        question: "Do you offer post-launch support and maintenance?",
        answer: "Yes. Launching a SaaS is just day one. We offer targeted retainer plans to act as your continuous engineering team—handling bug fixes, server scaling, security updates, and building new features as your user base demands them."
    },
    {
        question: "How long does it take to build an MVP?",
        answer: "Depending on scope, we target 6–12 weeks to get your Minimum Viable Product (MVP) live and into the hands of real users. We prioritize core revenue-generating features first."
    },
    {
        question: "What tech stack do you use?",
        answer: "We focus on modern, highly scalable React-based stacks. Typically Next.js, Node.js/Express, PostgreSQL or Supabase, and AWS or Vercel for infrastructure. We choose reliable tools that won't bottleneck you at scale."
    }
]

/* ═════════════════════════════════════════════════════════════════════ */
/*                         MAIN COMPONENT                              */
/* ═════════════════════════════════════════════════════════════════════ */

export function SaaSDevContent() {
    const heroRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress: heroScroll } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"],
    })
    const heroTextY = useTransform(heroScroll, [0, 1], [0, 180])
    const heroTextOpacity = useTransform(heroScroll, [0, 0.6], [1, 0])

    return (
        <div className="bg-[var(--color-bg)] text-[var(--color-text)] relative overflow-hidden">

            {/* ═══════════════════════════════════════
                 HERO — Preserved Gradient, Redesigned Copy & Space
            ═══════════════════════════════════════ */}
            <section ref={heroRef} className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#0A0A0A]">
                {/* Immersive animated background from previous design */}
                <AnimatedGradientBackground
                    startingGap={120}
                    Breathing={true}
                    breathingRange={6}
                    animationSpeed={0.015}
                    gradientColors={[
                        "#0A0A0A",
                        "#1a0533",
                        "#2979FF",
                        "#6a0dad",
                        "#0A0A0A",
                        "#0A0A0A",
                        "#0A0A0A",
                    ]}
                    gradientStops={[30, 45, 58, 70, 80, 90, 100]}
                    topOffset={10}
                />

                <div className="absolute inset-0 noise-overlay opacity-[0.03] pointer-events-none mix-blend-overlay" />

                <Container className="relative z-10 w-full pt-32 pb-24">
                    <motion.div style={{ y: heroTextY, opacity: heroTextOpacity }} className="max-w-5xl">
                        <FadeReveal>
                            <div className="inline-flex items-center gap-3 px-4 py-2 border border-white/20 bg-white/5 backdrop-blur-md text-[11px] font-bold tracking-[0.3em] uppercase text-white/70 mb-8">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
                                </span>
                                CUSTOM SAAS ARCHITECTURE
                            </div>
                        </FadeReveal>

                        <LineReveal delay={0.1}>
                            <h1 className="text-[clamp(3.5rem,7vw,7rem)] font-black tracking-[-.04em] leading-[0.9] text-white/90 mb-8">
                                Turn industry insight <br />
                                into <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400">recurring revenue.</span>
                            </h1>
                        </LineReveal>

                        <FadeReveal delay={0.3}>
                            <p className="text-xl md:text-2xl text-white/60 font-light max-w-2xl leading-relaxed mb-12">
                                We design and engineer highly scalable custom software platforms, influencer marketplaces, and outreach tools for founders who see a gap in the market.
                            </p>
                        </FadeReveal>

                        <FadeReveal delay={0.4}>
                            <div className="flex flex-wrap items-center gap-6">
                                <Link href="/contact">
                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="h-16 px-10 bg-white text-black text-sm font-bold tracking-wide uppercase flex items-center gap-3 transition-shadow duration-500 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]"
                                    >
                                        Scope Your Project
                                        <ArrowRight className="w-5 h-5" />
                                    </motion.button>
                                </Link>
                                <div className="flex items-center gap-4 text-white/40">
                                    <div className="w-12 h-px bg-white/20" />
                                    <span className="text-[11px] font-bold tracking-widest uppercase">100% Free Strategy Session</span>
                                </div>
                            </div>
                        </FadeReveal>
                    </motion.div>
                </Container>
            </section>

            {/* ═══════════════════════════════════════
                 PSYCHOLOGY / THE HOOK
            ═══════════════════════════════════════ */}
            <section className="py-32 md:py-48 bg-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-[var(--color-brand)]/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                
                <Container>
                    <div className="grid lg:grid-cols-[1fr_1fr] gap-16 md:gap-24 items-center">
                        <div>
                            <FadeReveal>
                                <div className="text-[11px] font-bold tracking-[0.3em] uppercase text-[var(--color-text-muted)] mb-6">THE REALITY</div>
                            </FadeReveal>
                            <LineReveal delay={0.1}>
                                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[0.95] mb-8">
                                    The hardest part isn&apos;t the idea.<br />
                                    <span className="text-[var(--color-brand)]">It&apos;s the execution.</span>
                                </h2>
                            </LineReveal>
                            <FadeReveal delay={0.2}>
                                <div className="space-y-6 text-lg text-[var(--color-text-secondary)] leading-relaxed font-medium">
                                    <p>
                                        You know your industry inside out. You know what workflow is broken, what data is missing, and what people will gladly pay a monthly subscription to solve.
                                    </p>
                                    <p>
                                        But spinning up a fragile no-code template won't survive real user volume. And hiring fragmented freelancers often ends in vaporware.
                                    </p>
                                </div>
                            </FadeReveal>
                        </div>

                        <div className="relative">
                            <FadeReveal delay={0.3}>
                                <div className="p-10 md:p-14 border border-[var(--color-border)] bg-[var(--color-bg-soft)] relative z-10 group hover:border-[var(--color-brand)]/30 transition-colors duration-500">
                                    {/* Accent corner */}
                                    <div className="absolute top-0 left-0 w-20 h-20 bg-[var(--color-brand)]/5 border-b border-r border-[var(--color-border)] pointer-events-none" />
                                    
                                    <h3 className="text-2xl font-black mb-6">We are the execution engine.</h3>
                                    <p className="text-[var(--color-text-secondary)] leading-relaxed mb-10">
                                        We operate as your shadow technical co-founder. We map the data architecture, design the UI natively, build the backend, and deploy it to production.
                                    </p>
                                    
                                    <div className="space-y-4">
                                        {["Transparent scoping & timelines", "Production-grade tech stack", "Revenue-ready architecture"].map((itm) => (
                                            <div key={itm} className="flex items-center gap-3">
                                                <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center border border-blue-100">
                                                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                                                </div>
                                                <span className="text-sm font-bold text-[var(--color-text)]">{itm}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </FadeReveal>
                            
                            {/* Decorative background blocks */}
                            <div className="absolute -top-6 -right-6 w-full h-full border border-[var(--color-border)] bg-white z-0" />
                            <div className="absolute -bottom-6 -left-6 w-full h-full border border-[var(--color-border)]/50 bg-[var(--color-bg)] z-0" />
                        </div>
                    </div>
                </Container>
            </section>

            {/* ═══════════════════════════════════════
                 USE CASES (Influencer, Outreach, etc)
            ═══════════════════════════════════════ */}
            <section className="py-32 bg-black text-white relative overflow-hidden">
                <div className="absolute inset-0 noise-overlay opacity-[0.08] pointer-events-none" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[50vh] bg-blue-900/10 blur-[150px] pointer-events-none" />
                
                <Container className="relative z-10">
                    <div className="text-center mb-24">
                        <FadeReveal>
                            <div className="text-[11px] font-bold tracking-[0.3em] uppercase text-white/40 mb-6">WHAT WE BUILD</div>
                        </FadeReveal>
                        <LineReveal delay={0.1}>
                            <h2 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tight leading-[0.95] mb-6">
                                Specialized problems require<br />
                                <span className="text-[var(--color-brand)]">specialized software.</span>
                            </h2>
                        </LineReveal>
                        <FadeReveal delay={0.2}>
                            <p className="text-xl text-white/50 max-w-2xl mx-auto font-light">
                                We don't build basic to-do list apps. We build heavy-duty software designed to process deep logic and handle high-volume activity.
                            </p>
                        </FadeReveal>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Box 1: Marketplace */}
                        <FadeReveal delay={0.1} className="group">
                            <div className="h-full border border-white/10 bg-white/[0.02] p-8 md:p-10 hover:bg-white/[0.04] hover:border-white/20 transition-all duration-500">
                                <AppWindow className="w-10 h-10 text-[var(--color-brand)] mb-8 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" />
                                <h3 className="text-2xl font-black mb-4">Multi-Sided<br />Marketplaces</h3>
                                <p className="text-white/50 leading-relaxed font-medium mb-8">
                                    Complex platforms matching supply and demand. Example: <strong className="text-white">Influencer booking networks</strong> with escrow payments, real-time messaging, and campaign analytics.
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="text-[10px] uppercase tracking-wider border border-white/10 px-3 py-1 text-white/40 group-hover:text-white/70 transition-colors">Split Payments</span>
                                    <span className="text-[10px] uppercase tracking-wider border border-white/10 px-3 py-1 text-white/40 group-hover:text-white/70 transition-colors">User Roles</span>
                                </div>
                            </div>
                        </FadeReveal>

                        {/* Box 2: Outreach */}
                        <FadeReveal delay={0.2} className="group">
                            <div className="h-full border border-white/10 bg-white/[0.02] p-8 md:p-10 hover:bg-white/[0.04] hover:border-white/20 transition-all duration-500 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-brand)]/10 rounded-full blur-2xl group-hover:bg-[var(--color-brand)]/20 transition-colors" />
                                <Zap className="w-10 h-10 text-[var(--color-brand)] mb-8 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 relative z-10" />
                                <h3 className="text-2xl font-black mb-4 relative z-10">Outreach & <br />Automation</h3>
                                <p className="text-white/50 leading-relaxed font-medium mb-8 relative z-10">
                                    High-volume outbound systems. Example: <strong className="text-white">B2B Lead Scrapers</strong> that pull custom data points, run them through LLMs for personalization, and orchestrate cold email sequences.
                                </p>
                                <div className="flex flex-wrap gap-2 relative z-10">
                                    <span className="text-[10px] uppercase tracking-wider border border-white/10 px-3 py-1 text-white/40 group-hover:text-white/70 transition-colors">Data Pipelines</span>
                                    <span className="text-[10px] uppercase tracking-wider border border-white/10 px-3 py-1 text-white/40 group-hover:text-white/70 transition-colors">API Sync</span>
                                </div>
                            </div>
                        </FadeReveal>

                        {/* Box 3: Operations */}
                        <FadeReveal delay={0.3} className="group">
                            <div className="h-full border border-white/10 bg-white/[0.02] p-8 md:p-10 hover:bg-white/[0.04] hover:border-white/20 transition-all duration-500">
                                <Workflow className="w-10 h-10 text-[var(--color-brand)] mb-8 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" />
                                <h3 className="text-2xl font-black mb-4">Internal Biz<br />Operations</h3>
                                <p className="text-white/50 leading-relaxed font-medium mb-8">
                                    Replacing 30 scattered spreadsheets with one source of truth. Custom CRM extensions, logistics trackers, and highly secure patient or client portals designed exactly for how your business works.
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="text-[10px] uppercase tracking-wider border border-white/10 px-3 py-1 text-white/40 group-hover:text-white/70 transition-colors">Dashboards</span>
                                    <span className="text-[10px] uppercase tracking-wider border border-white/10 px-3 py-1 text-white/40 group-hover:text-white/70 transition-colors">RBAC</span>
                                </div>
                            </div>
                        </FadeReveal>
                    </div>
                </Container>
            </section>

            {/* ═══════════════════════════════════════
                 AGENCY MANAGER / "READY TO SHIP"
            ═══════════════════════════════════════ */}
            <section className="py-24 bg-[var(--color-bg-soft)] border-y border-[var(--color-border)]">
                <Container>
                    <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24">
                        <FadeReveal className="w-full md:w-1/2">
                            <div className="aspect-square max-h-[500px] w-full bg-white border border-[var(--color-border)] shadow-2xl rounded-2xl overflow-hidden relative group">
                                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center opacity-[0.05] group-hover:opacity-[0.1] transition-opacity duration-700 mix-blend-multiply grayscale" />
                                <div className="absolute inset-4 border border-[var(--color-border)] flex flex-col p-8 bg-white/90 backdrop-blur-sm">
                                    <div className="flex justify-between items-center mb-8 border-b border-[var(--color-border)] pb-4">
                                        <div className="flex gap-2">
                                            <div className="w-3 h-3 rounded-full bg-red-400" />
                                            <div className="w-3 h-3 rounded-full bg-yellow-400" />
                                            <div className="w-3 h-3 rounded-full bg-green-400" />
                                        </div>
                                        <div className="text-[10px] font-bold text-[var(--color-text-muted)] tracking-widest">AGENCY PORTAL.EXE</div>
                                    </div>
                                    <div className="flex-1 flex flex-col justify-center">
                                        <h4 className="text-3xl font-black mb-4">You run an agency.</h4>
                                        <p className="text-[var(--color-text-secondary)] font-medium leading-relaxed">
                                            Stop sharing Google Docs with clients paying you thousands of dollars. We have pre-built modules for client tracking, ticketing, and invoicing that we can white-label and deploy for your agency in under 2 weeks.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </FadeReveal>

                        <div className="w-full md:w-1/2 space-y-8">
                            <FadeReveal>
                                <div className="inline-block px-3 py-1 bg-[var(--color-brand)]/10 text-[var(--color-brand)] text-[10px] font-bold tracking-[0.2em] uppercase rounded-full mb-4">
                                    Ready to deploy
                                </div>
                                <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-[1] mb-6">
                                    The white-label<br />Client Portal.
                                </h2>
                                <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed mb-8">
                                    Instantly elevate your agency's perceived value. A fully functioning web app that your clients log into natively, carrying your domain and your brand.
                                </p>
                            </FadeReveal>

                            <FadeReveal delay={0.2} className="space-y-4">
                                {[
                                    { title: "Project Tracking", desc: "Clients see exactly what stage their deliverables are in." },
                                    { title: "Support Ticketing", desc: "Built-in desk to prevent your WhatsApp from blowing up." },
                                    { title: "Stripe Invoicing", desc: "One-click invoice generation tied directly to their portal." }
                                ].map((feature) => (
                                    <div key={feature.title} className="flex gap-4 p-4 border border-[var(--color-border)] bg-white hover:border-[var(--color-brand)]/30 transition-colors">
                                        <div className="w-10 h-10 bg-[var(--color-bg-soft)] flex items-center justify-center shrink-0 border border-[var(--color-border)]">
                                            <Database className="w-4 h-4 text-[var(--color-brand)]" />
                                        </div>
                                        <div>
                                            <div className="font-bold text-[var(--color-text)] text-sm mb-1">{feature.title}</div>
                                            <div className="text-[12px] text-[var(--color-text-secondary)] font-medium leading-relaxed">{feature.desc}</div>
                                        </div>
                                    </div>
                                ))}
                            </FadeReveal>
                        </div>
                    </div>
                </Container>
            </section>

            {/* ═══════════════════════════════════════
                 FAQs / ARCHITECTURE Split
            ═══════════════════════════════════════ */}
            <section className="py-32 bg-white">
                <Container>
                    <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">
                        <div className="md:sticky md:top-32">
                            <FadeReveal>
                                <div className="text-[11px] font-bold tracking-[0.3em] uppercase text-[var(--color-text-muted)] mb-6">CLARITY</div>
                            </FadeReveal>
                            <LineReveal delay={0.1}>
                                <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-[0.95] mb-6">
                                    Answers for<br />founders.
                                </h2>
                            </LineReveal>
                            <FadeReveal delay={0.2}>
                                <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed mb-8">
                                    Software development requires immense trust. We over-communicate scoping, architecture, and financials before you pay a dime.
                                </p>
                                <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-bold text-[var(--color-brand)] hover:opacity-70 transition-opacity uppercase tracking-wider">
                                    Ask a specific question <ArrowUpRight className="w-4 h-4" />
                                </Link>
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
