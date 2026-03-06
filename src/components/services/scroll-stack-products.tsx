"use client"

import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { ArrowRight, Search } from "lucide-react"
import { motion, useScroll, useTransform } from "motion/react"
import { useRef } from "react"

/* ───────── Card data ───────── */

const products = [
    {
        id: "chatbot",
        ordinal: "01",
        title: "Guided Seller Chatbot",
        subtitle: "Intelligent Sales Agent",
        description:
            "Not just a generic support bot. An intelligent sales agent that actively qualifies leads, escalates critical info, and guides visitors to purchase with LLM smartness.",
        features: [
            "Engaging & Human-like",
            "Lead Qualification",
            "Smart Escalation",
            "Perfect for E-commerce",
        ],
        cta: "Launch Your Bot",
        ctaVariant: "primary" as const,
        accentColor: "blue",
        gradient: "from-blue-600/20 via-indigo-500/10 to-transparent",
        borderHover: "hover:border-blue-500/40",
        accentDot: "bg-blue-500",
        featureDot: "bg-blue-400/60",
        ctaClass: "bg-blue-600 hover:bg-blue-500 text-white",
        // Creative visual element — a stylised conversation thread
        visual: (
            <div className="absolute top-6 right-6 w-48 h-48 opacity-[0.07] pointer-events-none select-none">
                <svg viewBox="0 0 200 200" fill="none" className="w-full h-full">
                    <rect x="20" y="10" rx="16" ry="16" width="120" height="36" stroke="currentColor" strokeWidth="1.5" />
                    <rect x="60" y="60" rx="16" ry="16" width="130" height="36" stroke="currentColor" strokeWidth="1.5" />
                    <rect x="20" y="110" rx="16" ry="16" width="100" height="36" stroke="currentColor" strokeWidth="1.5" />
                    <rect x="80" y="155" rx="12" ry="12" width="80" height="28" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 3" />
                    <circle cx="30" cy="28" r="4" fill="currentColor" opacity="0.5" />
                    <circle cx="180" cy="78" r="4" fill="currentColor" opacity="0.5" />
                    <circle cx="30" cy="128" r="4" fill="currentColor" opacity="0.5" />
                </svg>
            </div>
        ),
    },
    {
        id: "whatsapp",
        ordinal: "02",
        title: "WhatsApp Campaign Manager",
        subtitle: "Scalable Outreach Engine",
        description:
            "Scale your outreach without the risk. Interact with 5,000 to 10,000 contacts monthly using the Official WhatsApp API. Secure, ban-free, and effective.",
        features: [
            "Reach 10k Contacts/Mo",
            "Official API (Ban-Free)",
            "Automated Follow-ups",
            "High Open Rates",
        ],
        cta: "Start Campaign",
        ctaVariant: "secondary" as const,
        accentColor: "emerald",
        gradient: "from-emerald-600/20 via-green-500/10 to-transparent",
        borderHover: "hover:border-emerald-500/40",
        accentDot: "bg-emerald-500",
        featureDot: "bg-emerald-400/60",
        ctaClass: "bg-white hover:bg-gray-100 text-black",
        // Creative visual — broadcast wave ripples
        visual: (
            <div className="absolute top-6 right-6 w-48 h-48 opacity-[0.07] pointer-events-none select-none">
                <svg viewBox="0 0 200 200" fill="none" className="w-full h-full">
                    <circle cx="100" cy="100" r="20" stroke="currentColor" strokeWidth="1.5" />
                    <circle cx="100" cy="100" r="40" stroke="currentColor" strokeWidth="1" />
                    <circle cx="100" cy="100" r="60" stroke="currentColor" strokeWidth="0.8" />
                    <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="0.6" />
                    <circle cx="100" cy="100" r="95" stroke="currentColor" strokeWidth="0.4" />
                    <path d="M100 80 L100 60 M120 100 L140 100 M100 120 L100 140 M80 100 L60 100" stroke="currentColor" strokeWidth="1" />
                    <circle cx="100" cy="100" r="6" fill="currentColor" opacity="0.4" />
                </svg>
            </div>
        ),
    },
    {
        id: "custom",
        ordinal: "03",
        title: "Custom AI Solutions",
        subtitle: "Bespoke Architecture",
        description:
            "Have a unique problem? Drop your requirements and we'll architect a custom AI solution. No charges for the initial consultation.",
        features: [],
        tags: ["RAG", "Agents", "Workflows", "Data Extraction"],
        cta: "Book Free Consult",
        ctaVariant: "outline" as const,
        accentColor: "violet",
        gradient: "from-violet-600/20 via-purple-500/10 to-transparent",
        borderHover: "hover:border-violet-500/40",
        accentDot: "bg-violet-500",
        featureDot: "bg-violet-400/60",
        ctaClass: "border-[var(--color-border)] hover:bg-[var(--color-bg-soft)] text-[var(--color-text)]",
        // Creative visual — neural network graph
        visual: (
            <div className="absolute top-6 right-6 w-48 h-48 opacity-[0.07] pointer-events-none select-none">
                <svg viewBox="0 0 200 200" fill="none" className="w-full h-full">
                    {/* Layer 1 */}
                    <circle cx="40" cy="50" r="6" stroke="currentColor" strokeWidth="1.5" />
                    <circle cx="40" cy="100" r="6" stroke="currentColor" strokeWidth="1.5" />
                    <circle cx="40" cy="150" r="6" stroke="currentColor" strokeWidth="1.5" />
                    {/* Layer 2 */}
                    <circle cx="100" cy="70" r="6" stroke="currentColor" strokeWidth="1.5" />
                    <circle cx="100" cy="130" r="6" stroke="currentColor" strokeWidth="1.5" />
                    {/* Layer 3 */}
                    <circle cx="160" cy="100" r="8" stroke="currentColor" strokeWidth="1.5" />
                    {/* Connections */}
                    <line x1="46" y1="50" x2="94" y2="70" stroke="currentColor" strokeWidth="0.8" />
                    <line x1="46" y1="50" x2="94" y2="130" stroke="currentColor" strokeWidth="0.5" />
                    <line x1="46" y1="100" x2="94" y2="70" stroke="currentColor" strokeWidth="0.5" />
                    <line x1="46" y1="100" x2="94" y2="130" stroke="currentColor" strokeWidth="0.8" />
                    <line x1="46" y1="150" x2="94" y2="70" stroke="currentColor" strokeWidth="0.5" />
                    <line x1="46" y1="150" x2="94" y2="130" stroke="currentColor" strokeWidth="0.8" />
                    <line x1="106" y1="70" x2="152" y2="100" stroke="currentColor" strokeWidth="1" />
                    <line x1="106" y1="130" x2="152" y2="100" stroke="currentColor" strokeWidth="1" />
                    <circle cx="160" cy="100" r="3" fill="currentColor" opacity="0.4" />
                </svg>
            </div>
        ),
    },
]

/* ───────── Single stacking card ───────── */

function StackCard({
    product,
    index,
    total,
}: {
    product: (typeof products)[0]
    index: number
    total: number
}) {
    const cardRef = useRef<HTMLDivElement>(null)

    // Each card stacks with increasing top offset
    const stickyTop = 100 + index * 28 // px offset — cards peek below each other

    return (
        <div
            ref={cardRef}
            className="h-[85vh] flex items-start"
            style={{ position: "sticky", top: stickyTop }}
        >
            <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-15%" }}
                transition={{
                    duration: 0.7,
                    ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className={`
                    group relative w-full
                    bg-[var(--color-bg-card)] backdrop-blur-sm
                    border border-[var(--color-border)] ${product.borderHover}
                    rounded-3xl overflow-hidden
                    transition-all duration-500
                    hover:shadow-2xl hover:shadow-${product.accentColor}-500/10
                `}
                style={{
                    // Subtle scale reduction for cards behind (visual depth)
                    boxShadow: "0 -8px 30px -6px rgba(0,0,0,0.35)",
                }}
            >
                {/* Ambient gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} pointer-events-none`} />

                {/* Creative SVG visual (replaces overused icons) */}
                {product.visual}

                {/* Content layout — horizontal on lg */}
                <div className="relative z-10 grid lg:grid-cols-2 gap-8 p-8 md:p-12 lg:p-16">
                    {/* Left: text content */}
                    <div className="flex flex-col justify-center">
                        {/* Ordinal + subtitle */}
                        <div className="flex items-center gap-3 mb-5">
                            <span className="text-xs font-mono tracking-widest text-[var(--color-text-muted)] uppercase">
                                {product.ordinal}
                            </span>
                            <div className="w-8 h-px bg-[var(--color-border-hover)]" />
                            <span className="text-xs tracking-widest text-[var(--color-text-muted)] uppercase">
                                {product.subtitle}
                            </span>
                        </div>

                        {/* Title with accent dot */}
                        <div className="flex items-center gap-3 mb-4">
                            <div className={`w-2.5 h-2.5 rounded-full ${product.accentDot} shrink-0`} />
                            <h3 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] tracking-tight">
                                {product.title}
                            </h3>
                        </div>

                        {/* Description */}
                        <p className="text-[var(--color-text-secondary)] leading-relaxed text-base mb-8 max-w-md">
                            {product.description}
                        </p>

                        {/* CTA */}
                        {product.ctaVariant === "outline" ? (
                            <Button
                                variant="outline"
                                className={`w-fit ${product.ctaClass} rounded-xl h-12 px-8 text-sm font-medium`}
                            >
                                {product.cta}
                                <Search className="w-4 h-4 ml-2" />
                            </Button>
                        ) : (
                            <Button className={`w-fit ${product.ctaClass} rounded-xl h-12 px-8 text-sm font-medium shadow-lg`}>
                                {product.cta}
                                <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                        )}
                    </div>

                    {/* Right: features / tags panel */}
                    <div className="flex flex-col justify-center">
                        {product.features.length > 0 ? (
                            <div className="space-y-4">
                                <span className="text-[10px] tracking-[0.2em] uppercase text-[var(--color-text-muted)] font-medium">
                                    Capabilities
                                </span>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {product.features.map((feat, fi) => (
                                        <motion.div
                                            key={fi}
                                            initial={{ opacity: 0, x: 20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.3 + fi * 0.08, duration: 0.4 }}
                                            className="flex items-center gap-3 bg-[var(--color-bg-soft)]/50 border border-[var(--color-border)]/50 rounded-xl px-4 py-3 group/feat hover:border-[var(--color-border-hover)] transition-colors"
                                        >
                                            <div className={`w-1.5 h-1.5 rounded-full ${product.featureDot} shrink-0`} />
                                            <span className="text-sm text-[var(--color-text-secondary)] group-hover/feat:text-[var(--color-text)] transition-colors">
                                                {feat}
                                            </span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        ) : product.tags ? (
                            <div className="space-y-5">
                                <span className="text-[10px] tracking-[0.2em] uppercase text-[var(--color-text-muted)] font-medium">
                                    We specialize in
                                </span>
                                <div className="flex flex-wrap gap-3">
                                    {product.tags.map((tag, ti) => (
                                        <motion.span
                                            key={tag}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.3 + ti * 0.07, type: "spring", stiffness: 200 }}
                                            className="px-4 py-2 bg-[var(--color-bg-soft)]/60 border border-[var(--color-border)] rounded-xl text-sm text-[var(--color-text-muted)] hover:border-violet-500/30 hover:text-[var(--color-text)] transition-all cursor-default"
                                        >
                                            {tag}
                                        </motion.span>
                                    ))}
                                </div>
                                <div className="mt-4 p-4 rounded-xl border border-dashed border-[var(--color-border)] bg-[var(--color-bg-soft)]/30">
                                    <p className="text-xs text-[var(--color-text-muted)] leading-relaxed italic">
                                        &quot;We architected a RAG pipeline that reduced support costs by 60% within 30 days.&quot;
                                    </p>
                                </div>
                            </div>
                        ) : null}
                    </div>
                </div>

                {/* Bottom edge line */}
                <div className="h-px w-full bg-gradient-to-r from-transparent via-[var(--color-border)]/30 to-transparent" />
            </motion.div>
        </div>
    )
}

/* ───────── Main export ───────── */

export function ScrollStackProducts() {
    const containerRef = useRef<HTMLDivElement>(null)

    return (
        <section ref={containerRef} className="relative bg-[var(--color-bg)]">
            {/* Section heading */}
            <div className="pt-28 pb-12">
                <Container>
                    <div className="flex flex-col items-center text-center mb-4">
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-[10px] tracking-[0.25em] uppercase text-[var(--color-text-muted)] font-medium mb-4"
                        >
                            Products
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-text)] tracking-tight"
                        >
                            What We Build
                        </motion.h2>
                    </div>
                </Container>
            </div>

            {/* Scroll-stack cards */}
            <Container>
                <div className="pb-[30vh]">
                    {products.map((product, i) => (
                        <StackCard
                            key={product.id}
                            product={product}
                            index={i}
                            total={products.length}
                        />
                    ))}
                </div>
            </Container>
        </section>
    )
}
