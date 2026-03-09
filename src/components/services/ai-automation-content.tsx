"use client"

import { Container } from "@/components/ui/container"
import { Sparkles, MessageSquare, Workflow, Code2, ArrowRight } from "lucide-react"
import { CTASection } from "@/components/home/cta-section"
import { TechStackCarousel } from "@/components/ui/tech-stack-carousel"
import { motion } from "framer-motion"
import { FAQAccordion } from "@/components/ui/faq-accordion"
import { WarpBackground } from "@/components/ui/warp-background"
import { AIAutomationHero } from "@/components/services/ai-automation-hero"
import { AestheticTestimonials } from "@/components/ui/aesthetic-testimonials"
import Link from "next/link"

const faqs = [
    {
        question: "What specific processes can you automate?",
        answer: "We automate lead qualification, customer support queries, invoicing, data entry, email outreach, scheduling, and custom internal workflows unique to your business."
    },
    {
        question: "Is my data secure?",
        answer: "Absolutely. We use enterprise-grade encryption and adhere to strict privacy standards. We never use your proprietary data to train public AI models."
    },
    {
        question: "How quickly can we see results?",
        answer: "Most automation workflows go live in 5-10 days. You'll typically see time-savings and efficiency gains immediately on the first day of deployment."
    },
    {
        question: "Do I need technical knowledge to run this?",
        answer: "None at all. We build the system to run on autopilot. You just enjoy the efficiency, or use simple dashboards we provide to monitor performance."
    }
]

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

export function AIAutomationContent() {
    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': faqs.map(faq => ({
            '@type': 'Question',
            'name': faq.question,
            'acceptedAnswer': {
                '@type': 'Answer',
                'text': faq.answer
            }
        }))
    }

    return (
        <div className="bg-[var(--color-bg)] text-[var(--color-text)]">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            {/* ── Section 1: Original Hero (Preserved but Improved Typographically) ── */}
            <WarpBackground
                className="pt-40 pb-20 border-0 rounded-none bg-[var(--color-bg)] overflow-hidden"
                gridColor="rgba(0,0,0,0.06)"
                beamsPerSide={4}
                beamSize={5}
                beamDelayMax={4}
                beamDelayMin={0}
                beamDuration={4}
                perspective={150}
            >
                <Container>
                    <div className="max-w-5xl mx-auto flex flex-col items-center text-center relative z-10">
                        <FadeReveal delay={0.1}>
                            <div className="inline-flex items-center gap-3 px-4 py-2 border border-[var(--color-border)] text-[11px] font-bold tracking-[0.3em] uppercase text-[var(--color-text-muted)] mb-8 bg-white/50 backdrop-blur-md">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75" />
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
                                </span>
                                AI & AUTOMATION
                            </div>
                        </FadeReveal>

                        <LineReveal delay={0.2}>
                            <h1 className="text-[clamp(3rem,6vw,5.5rem)] font-black tracking-[-.04em] leading-[0.9] text-[var(--color-text)] mb-8">
                                Intelligence that <br />
                                <span className="text-[var(--color-brand)]">drives growth.</span>
                            </h1>
                        </LineReveal>

                        <FadeReveal delay={0.3}>
                            <p className="text-xl text-[var(--color-text-secondary)] leading-relaxed max-w-2xl mx-auto font-light">
                                Transform your business with intelligent agents that qualify leads, automate campaigns, and execute complex workflows without human intervention.
                            </p>
                        </FadeReveal>

                        <FadeReveal delay={0.35}>
                            <div className="text-sm text-[var(--color-text-muted)] leading-relaxed max-w-2xl mx-auto mt-6 font-medium">
                                <p><strong className="text-white/70">Scale Your Business</strong> is a leading AI automation agency in India. We help enterprises across Mumbai, Delhi, and Bangalore automate workflows, build custom AI chatbots, and deploy intelligent operational systems.</p>
                            </div>
                        </FadeReveal>
                    </div>
                </Container>
            </WarpBackground>

            {/* ── Section 2: 3D Boxing Robot + Copy ── */}
            <AIAutomationHero />

            {/* Tech Stack Carousel */}
            <div className="py-20 border-y border-[var(--color-border)] bg-[var(--color-bg-soft)]">
                <TechStackCarousel />
            </div>

            {/* ── Section 3: Core Products (Architectural Showcase) ── */}
            <section className="py-32 md:py-48 overflow-hidden">
                <Container>
                    <div className="mb-24 text-center">
                        <FadeReveal>
                            <div className="text-[11px] font-bold tracking-[0.3em] uppercase text-[var(--color-text-muted)] mb-6">INTELLIGENT SYSTEMS</div>
                        </FadeReveal>
                        <LineReveal delay={0.1}>
                            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[0.95]">
                                Two engines to scale<br />
                                <span className="text-[var(--color-brand)]">your operations.</span>
                            </h2>
                        </LineReveal>
                    </div>

                    <div className="flex flex-col gap-32 max-w-6xl mx-auto">
                        {/* PRODUCT 1 */}
                        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">
                            <FadeReveal className="relative group">
                                <span className="text-[12vw] font-black text-[var(--color-border)] leading-none absolute -top-12 -left-8 z-0 select-none group-hover:text-[var(--color-brand)]/10 transition-colors duration-700">01</span>
                                <div className="relative z-10 border border-[var(--color-border)] bg-white p-12 hover:shadow-[0_20px_60px_rgba(0,0,0,0.05)] transition-all duration-500">
                                    <MessageSquare className="w-10 h-10 text-[var(--color-brand)] mb-8" />
                                    <h3 className="text-2xl md:text-3xl font-black tracking-tight mb-6">
                                        AI Sales & Lead<br />Conversion Systems
                                    </h3>
                                    <p className="text-[var(--color-text-secondary)] leading-relaxed mb-8 font-medium">
                                        Smart LLM-based Chatbot integration for your website and WhatsApp, designed to capture inbound traffic autonomously.
                                    </p>
                                    <div className="space-y-4">
                                        {[
                                            "Nurtures and follows up with prospects",
                                            "Acts as a 24/7 CX support agent",
                                            "Qualifies leads automatically",
                                            "Flows directly into your CRM",
                                            "Perfect for high-volume social & web traffic"
                                        ].map((feature, i) => (
                                            <div key={i} className="flex items-center gap-3 border-b border-[var(--color-border)] pb-3">
                                                <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand)] shrink-0" />
                                                <span className="text-sm font-semibold text-[var(--color-text)]">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </FadeReveal>

                            <div className="pt-12 md:pt-24 md:pl-8">
                                <FadeReveal delay={0.2}>
                                    <div className="text-[11px] font-bold tracking-[0.3em] uppercase text-[var(--color-brand)] mb-6">HOW IT WORKS</div>
                                    <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed mb-8">
                                        When a user visits your site or taps a WhatsApp ad, the AI takes over. It holds natural, context-aware conversations, answers complex product questions, evaluates the lead's intent, and routes qualified prospects directly to your sales team with a full brief. Never let a lead go cold again.
                                    </p>
                                </FadeReveal>
                            </div>
                        </div>

                        {/* PRODUCT 2 */}
                        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">
                            <div className="pt-12 md:pt-24 order-2 md:order-1 md:pr-8">
                                <FadeReveal delay={0.2}>
                                    <div className="text-[11px] font-bold tracking-[0.3em] uppercase text-[var(--color-brand)] mb-6">BEHAVIORAL TRIGGERS</div>
                                    <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed mb-8">
                                        Instead of blasting blind campaigns, our AI reacts to real-time user behavior.
                                    </p>
                                    <div className="space-y-6 flex flex-col pt-4 border-t border-[var(--color-border)]">
                                        {[
                                            { trigger: "Abandoned cart?", action: "Personalized offer" },
                                            { trigger: "Viewed pricing twice?", action: "Sales follow-up email" },
                                            { trigger: "Repeat customer?", action: "Upsell automation" },
                                            { trigger: "High lifetime value?", action: "VIP retention funnel" }
                                        ].map((item, i) => (
                                            <div key={i} className="flex gap-4 items-center">
                                                <div className="text-[var(--color-text-secondary)] font-medium w-44 shrink-0">{item.trigger}</div>
                                                <div className="text-[var(--color-text)] font-semibold flex items-center gap-2">
                                                    <ArrowRight className="w-4 h-4 text-[var(--color-brand)]" />
                                                    {item.action}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </FadeReveal>
                            </div>

                            <FadeReveal className="relative group order-1 md:order-2">
                                <span className="text-[12vw] font-black text-[var(--color-border)] leading-none absolute -top-12 -right-8 z-0 select-none group-hover:text-[var(--color-brand)]/10 transition-colors duration-700 text-right">02</span>
                                <div className="relative z-10 border border-[var(--color-border)] bg-white p-12 hover:shadow-[0_20px_60px_rgba(0,0,0,0.05)] transition-all duration-500">
                                    <Workflow className="w-10 h-10 text-[var(--color-brand)] mb-8" />
                                    <h3 className="text-2xl md:text-3xl font-black tracking-tight mb-6">
                                        AI Personalized<br />Marketing Automation
                                    </h3>
                                    <p className="text-[var(--color-text-secondary)] leading-relaxed mb-8 font-medium">
                                        Hyper-targeted Email, SMS, and Retargeting systems that act on behavior, not just schedules.
                                    </p>
                                    <div className="p-6 bg-[var(--color-bg-soft)] border border-[var(--color-border)] flex items-start gap-4">
                                        <div className="w-2 h-2 rounded-full bg-green-500 mt-2 shrink-0 animate-pulse" />
                                        <p className="text-sm font-medium leading-relaxed italic text-[var(--color-text-secondary)]">
                                            "Campaign intent improved dramatically when we stopped sending newsletters and let the AI send behavioral pings."
                                        </p>
                                    </div>
                                </div>
                            </FadeReveal>
                        </div>
                    </div>
                </Container>
            </section>

            {/* ── Section 4: Custom Automation (Dark Inverse Section) ── */}
            <section className="py-32 bg-black text-white overflow-hidden relative">
                <div className="absolute inset-0 noise-overlay opacity-[0.05] pointer-events-none" />
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--color-brand)]/10 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />

                <Container className="relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
                        <div>
                            <FadeReveal>
                                <div className="text-[11px] font-bold tracking-[0.3em] uppercase text-[var(--color-brand)] mb-6">NICHE USE CASES</div>
                            </FadeReveal>
                            <LineReveal delay={0.1}>
                                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[0.95] mb-8">
                                    Need something <br />
                                    <span className="text-[var(--color-brand)]">custom-built?</span>
                                </h2>
                            </LineReveal>
                            <FadeReveal delay={0.2}>
                                <p className="text-lg text-white/50 leading-relaxed mb-10 max-w-lg">
                                    Logistics routing? Document parsing? Custom internal HR tools? We build specialized AI operations from the ground up for niche opportunities that off-the-shelf software can't handle.
                                </p>
                                <Link href="/contact">
                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="h-16 px-8 bg-[var(--color-brand)] text-white font-bold flex items-center gap-3 transition-colors hover:shadow-[0_0_40px_var(--glow-brand-strong)]"
                                    >
                                        <Code2 className="w-5 h-5" />
                                        Discuss Custom Architecture
                                    </motion.button>
                                </Link>
                            </FadeReveal>
                        </div>

                        <FadeReveal delay={0.4}>
                            <div className="border border-white/10 p-8 md:p-12 relative group backdrop-blur-md bg-white/[0.02]">
                                <div className="absolute -top-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-brand)] to-transparent opacity-50" />

                                <h3 className="text-xl font-bold mb-8 text-white">Recent Custom Implementations</h3>
                                <div className="space-y-8">
                                    {[
                                        { title: "Invoice Processing Pipeline", desc: "Extracts line items from PDF invoices automatically and executes accounting records." },
                                        { title: "Dynamic Pricing Engine", desc: "Adjusts B2B quotes based on real-time inventory and market competitor feeds." },
                                        { title: "Automated QA Specialist", desc: "Reviews customer support transcripts to flag non-compliance and coach reps." }
                                    ].map((item, i) => (
                                        <div key={i} className="flex gap-5 items-start">
                                            <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 mt-0.5">
                                                <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand)]" />
                                            </div>
                                            <div>
                                                <div className="font-bold text-white mb-2 text-lg">{item.title}</div>
                                                <div className="text-sm text-white/50 leading-relaxed font-medium">{item.desc}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </FadeReveal>
                    </div>
                </Container>
            </section>

            {/* FAQs */}
            <section className="py-32 border-t border-[var(--color-border)]">
                <Container>
                    <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">
                        <div className="md:sticky md:top-32">
                            <FadeReveal>
                                <div className="text-[11px] font-bold tracking-[0.3em] uppercase text-[var(--color-text-muted)] mb-6">QUESTIONS</div>
                            </FadeReveal>
                            <LineReveal delay={0.1}>
                                <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-[0.95] mb-6">
                                    Automation<br />clarified.
                                </h2>
                            </LineReveal>
                            <FadeReveal delay={0.2}>
                                <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
                                    Can't find the answer? <Link href="/contact" className="text-[var(--color-brand)] font-semibold hover:underline">Get in touch</Link> — we're happy to explain our tech stack and how we handle integrations.
                                </p>
                            </FadeReveal>
                        </div>
                        <div>
                            <FAQAccordion items={faqs} />
                        </div>
                    </div>
                </Container>
            </section>

            {/* ─── INTERNAL LINKS ───────────────────────────────────────── */}
            <section className="py-16 bg-[#FAFAFA] border-y border-[var(--color-border)]">
                <Container>
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                        <div>
                            <h3 className="text-2xl font-black text-black mb-2 uppercase tracking-tight">Scale Further</h3>
                            <p className="text-gray-500 max-w-xl">Complement your AI systems with a custom SaaS dashboard or secure them with our testing services.</p>
                        </div>
                        <div className="flex gap-4">
                            <Link href="/saas-development" className="text-sm font-bold uppercase tracking-widest text-[#3b82f6] hover:text-black transition-colors flex items-center gap-2">
                                SaaS Platform <ArrowRight className="w-4 h-4" />
                            </Link>
                            <Link href="/cybersecurity" className="text-sm font-bold uppercase tracking-widest text-[#3b82f6] hover:text-black transition-colors flex items-center gap-2">
                                Cyber Security <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </Container>
            </section>

            <AestheticTestimonials />

            <section className="relative">
                <CTASection />
            </section>
        </div>
    )
}
