"use client"

import { Container } from "@/components/ui/container"
import { motion } from "motion/react"
import Link from "next/link"
import { ArrowRight, Bot, Cpu, Globe, Smartphone, FileText, Megaphone } from "lucide-react"
import { useRef, useState } from "react"

const services = [
    {
        title: "AI Automation",
        description: "Cut 15+ hours a week. We automate your lead gen, invoicing, and support with AI.",
        icon: Bot,
        href: "/ai-automation",
        gradient: "from-[var(--color-brand)] to-cyan-500",
        span: "bento-large",
    },
    {
        title: "SaaS Development",
        description: "From MVP to full product. We build SaaS platforms your users love.",
        icon: Cpu,
        href: "/saas-development",
        gradient: "from-purple-500 to-violet-500",
        span: "",
    },
    {
        title: "Website Development",
        description: "Fast, SEO-ready websites that turn visitors into paying customers.",
        icon: Globe,
        href: "/website-development",
        gradient: "from-[var(--color-brand)] to-blue-500",
        span: "",
    },
    {
        title: "App Development",
        description: "iOS and Android apps your customers actually use. Built on React Native.",
        icon: Smartphone,
        href: "/app-development",
        gradient: "from-[var(--color-accent)] to-emerald-400",
        span: "bento-large",
    },
    {
        title: "Marketing Services",
        description: "AI-generated visuals, viral video hooks, and influencer campaign management.",
        icon: Megaphone,
        href: "/marketing-services",
        gradient: "from-rose-500 to-pink-500",
        span: "",
    },
]

function TiltCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
    const ref = useRef<HTMLDivElement>(null)
    const [transform, setTransform] = useState("perspective(1000px) rotateX(0deg) rotateY(0deg)")

    const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return
        const { left, top, width, height } = ref.current.getBoundingClientRect()
        const x = (e.clientX - left) / width - 0.5
        const y = (e.clientY - top) / height - 0.5
        setTransform(`perspective(1000px) rotateX(${-y * 8}deg) rotateY(${x * 8}deg)`)
    }

    const reset = () => setTransform("perspective(1000px) rotateX(0deg) rotateY(0deg)")

    return (
        <div
            ref={ref}
            onMouseMove={handleMouse}
            onMouseLeave={reset}
            className={className}
            style={{ transform, transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)" }}
        >
            {children}
        </div>
    )
}

export function ServicesGrid() {
    return (
        <section className="py-24 md:py-36 bg-[var(--color-bg-soft)] relative overflow-hidden">
            {/* Subtle dot grid */}
            <div className="absolute inset-0 dot-grid-dark opacity-40" />

            {/* Decorative gradient */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse,rgba(79,70,229,0.06),transparent_70%)]" />

            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mx-auto max-w-2xl text-center mb-20"
                >
                    <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase text-[var(--color-brand)] bg-[var(--color-brand)]/10 border border-[var(--color-brand)]/20 mb-6">
                        Our Services
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-[var(--color-text)] mb-4">
                        Six Ways We Help You{" "}
                        <span className="gradient-text">Grow</span>
                    </h2>
                    <p className="text-lg text-[var(--color-text-secondary)]">
                        Pick what you need. We handle the rest.
                    </p>
                </motion.div>

                {/* Bento Grid */}
                <div className="bento-grid relative z-10">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 40, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: index * 0.1, duration: 0.7, type: "spring", bounce: 0.3 }}
                            className={service.span}
                        >
                            <TiltCard className="h-full">
                                <Link
                                    href={service.href}
                                    className="group relative block h-full overflow-hidden rounded-3xl bg-[var(--color-bg-card)] border border-[var(--color-border)] p-8 md:p-10 transition-all duration-500 hover:border-transparent hover:shadow-[0_8px_40px_rgba(79,70,229,0.1)] glow-card"
                                >
                                    {/* Gradient accent on hover */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-700`} />

                                    {/* Content */}
                                    <div className="relative z-10">
                                        <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--color-bg-soft)] border border-[var(--color-border)] text-[var(--color-brand)] group-hover:bg-[var(--color-brand)] group-hover:text-white group-hover:border-transparent group-hover:shadow-[0_4px_20px_var(--glow-brand)] transition-all duration-500">
                                            <service.icon className="h-7 w-7" />
                                        </div>
                                        <h3 className="mb-3 text-xl md:text-2xl font-bold text-[var(--color-text)] group-hover:text-[var(--color-text)] transition-colors">
                                            {service.title}
                                        </h3>
                                        <p className="mb-8 text-sm md:text-base leading-relaxed text-[var(--color-text-secondary)] transition-colors">
                                            {service.description}
                                        </p>
                                        <div className="flex items-center text-sm font-semibold text-[var(--color-brand)] transition-colors">
                                            Learn more
                                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-2 duration-300" />
                                        </div>
                                    </div>

                                    {/* Corner glow shine */}
                                    <div className="absolute -top-1 -right-1 h-40 w-40 bg-gradient-to-br from-[var(--color-brand)]/5 to-transparent rounded-bl-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                </Link>
                            </TiltCard>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    )
}
