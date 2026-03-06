"use client"

import { Container } from "@/components/ui/container"
import { motion } from "motion/react"
import Link from "next/link"
import { ArrowRight, ExternalLink } from "lucide-react"

const projects = [

    {
        title: "AI Lead Generation",
        description: "Automated lead discovery and outreach system saving 20+ hours/week.",
        services: ["AI Automation", "SaaS"],
        gradient: "from-purple-500/10 to-violet-500/10",
        href: "/work",
    },
    {
        title: "E-Commerce App",
        description: "Cross-platform mobile app with 10k+ downloads in first month.",
        services: ["App Development", "UI/UX"],
        gradient: "from-[var(--color-accent)]/10 to-emerald-500/10",
        href: "/work",
    },
]

export function WorkPreview() {
    return (
        <section className="py-24 md:py-36 bg-[var(--color-bg)] relative overflow-hidden">
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase text-[var(--color-brand)] bg-[var(--color-brand)]/10 border border-[var(--color-brand)]/20 mb-6">
                        Our Work
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-[var(--color-text)] mb-4">
                        Real Results for{" "}
                        <span className="gradient-text">Real Founders</span>
                    </h2>
                    <p className="text-lg text-[var(--color-text-secondary)] max-w-xl mx-auto">
                        Featured projects from startups and brands we've helped grow.
                    </p>
                </motion.div>

                <div className="space-y-6">
                    {projects.map((project, i) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ delay: i * 0.15, duration: 0.7, type: "spring", bounce: 0.3 }}
                        >
                            <Link href={project.href} className="group block">
                                <div className="relative overflow-hidden rounded-3xl border border-[var(--color-border)] bg-[var(--color-bg-card)] transition-all duration-500 hover:border-transparent hover:shadow-[0_12px_50px_rgba(79,70,229,0.08)] glow-card p-0">
                                    <div className="flex flex-col md:flex-row items-stretch">
                                        {/* Image/Gradient area */}
                                        <div className={`w-full md:w-2/5 min-h-[220px] bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                                            <div className="absolute inset-0 dot-grid-dark opacity-30" />
                                            {/* Noise texture */}
                                            <div className="absolute inset-0 noise-overlay pointer-events-none" />
                                            {/* Floating external icon */}
                                            <motion.div
                                                className="absolute top-6 right-6 h-10 w-10 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                            >
                                                <ExternalLink className="h-4 w-4 text-[var(--color-brand)]" />
                                            </motion.div>
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1 p-8 md:p-10 flex flex-col justify-center">
                                            <h3 className="text-2xl md:text-3xl font-bold text-[var(--color-text)] mb-3 group-hover:text-[var(--color-brand)] transition-colors duration-300">
                                                {project.title}
                                            </h3>
                                            <p className="text-[var(--color-text-secondary)] mb-6 max-w-lg leading-relaxed">
                                                {project.description}
                                            </p>
                                            <div className="flex flex-wrap gap-2 mb-6">
                                                {project.services.map((s) => (
                                                    <span
                                                        key={s}
                                                        className="px-3 py-1 text-xs font-medium rounded-full bg-[var(--color-bg-soft)] border border-[var(--color-border)] text-[var(--color-text-secondary)]"
                                                    >
                                                        {s}
                                                    </span>
                                                ))}
                                            </div>
                                            <div className="flex items-center text-sm font-semibold text-[var(--color-brand)]">
                                                View case study
                                                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform duration-300" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* View all */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <Link
                        href="/work"
                        className="inline-flex items-center gap-2 text-[var(--color-brand)] font-semibold hover:underline underline-offset-4 transition-all"
                    >
                        View all case studies
                        <ArrowRight className="h-4 w-4" />
                    </Link>
                </motion.div>
            </Container>
        </section>
    )
}
