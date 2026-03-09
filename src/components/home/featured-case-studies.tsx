"use client"

import React, { useRef } from "react"
import { motion, useScroll, useTransform } from "motion/react"
import { Container } from "@/components/ui/container"
import { ArrowUpRight } from "lucide-react"
import dynamic from "next/dynamic"

const DigitalFoundationsScene = dynamic(
    () => import("./digital-foundations-scene").then(m => m.DigitalFoundationsScene),
    { ssr: false, loading: () => <div className="w-full h-full bg-[#fafafa] animate-pulse rounded-2xl" /> }
)

const KnowledgeAbsorptionScene = dynamic(
    () => import("./knowledge-absorption-scene").then(m => m.KnowledgeAbsorptionScene),
    { ssr: false, loading: () => <div className="w-full h-full bg-[#fafafa] animate-pulse rounded-2xl" /> }
)

const FrictionEliminationScene = dynamic(
    () => import("./friction-elimination-scene").then(m => m.FrictionEliminationScene),
    { ssr: false, loading: () => <div className="w-full h-full bg-[#fafafa] animate-pulse rounded-2xl" /> }
)

type CaseStudy = {
    id: string;
    title: string;
    category: string;
    hook: string;
    description: string;
    metrics: { label: string; value: string }[];
    image: string;
    link: string;
}

const caseStudies: CaseStudy[] = [
    {
        id: "amrapali",
        title: "Amrapali Group",
        category: "Real Estate & Luxury",
        hook: "Building digital foundations for physical empires.",
        description: "How we engineered an immersive property exploration platform that brought the visceral feeling of luxury real estate directly to buyers' screens, accelerating high-ticket conversations.",
        metrics: [
            { label: "Increase in Lead Quality", value: "340%" },
            { label: "Faster Booking Velocity", value: "2.5x" }
        ],
        image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
        link: "/work/amrapali"
    },
    {
        id: "edtech",
        title: "Pioneer eLearning",
        category: "EdTech & Education",
        hook: "Transforming how minds absorb the future of knowledge.",
        description: "Education shouldn't feel like a chore. We redesigned the entire learning management experience to feel as engaging as consumer entertainment, driving unprecedented course completion rates.",
        metrics: [
            { label: "Course Completion", value: "89%" },
            { label: "Student Retention", value: "+45%" }
        ],
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
        link: "/work/edtech"
    },
    {
        id: "agency",
        title: "Nexus Portal",
        category: "Agency Operations",
        hook: "Eliminating the friction between creative agencies and elite clients.",
        description: "When an agency scales, communication breaks down. We built a bespoke client portal that centralized approvals, analytics, and billing into one devastatingly beautiful interface.",
        metrics: [
            { label: "Client Satisfaction", value: "99.8%" },
            { label: "Admin Hours Saved", value: "120/mo" }
        ],
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
        link: "/work/agency-portal"
    },
]

function CaseStudyRow({ study, index }: { study: CaseStudy, index: number }) {
    const isEven = index % 2 === 0;
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.2 1"]
    });

    const scale = useTransform(scrollYProgress, [0, 1], [0.85, 1]);
    const opacity = useTransform(scrollYProgress, [0, 1], [0.3, 1]);

    return (
        <motion.div
            ref={ref}
            style={{ scale, opacity }}
            className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-20 py-20 lg:py-32 group border-b border-[var(--color-border)] last:border-0`}
        >
            {/* Image / 3D Scene Container */}
            <div className="w-full lg:w-1/2 relative">
                <div className="aspect-[4/3] lg:aspect-[16/10] w-full rounded-2xl overflow-hidden relative">
                    {/* The glowing underlay */}
                    <div className="absolute inset-0 bg-[var(--color-brand)]/20 blur-3xl rounded-full opacity-0 group-hover:opacity-50 transition-opacity duration-1000" />

                    <motion.div
                        className="w-full h-full relative z-10 overflow-hidden rounded-2xl border border-[var(--color-border)]"
                        whileHover="hover"
                    >
                        {study.id === "amrapali" ? (
                            <div className="w-full h-full bg-[#fafafa]">
                                <DigitalFoundationsScene />
                            </div>
                        ) : study.id === "edtech" ? (
                            <div className="w-full h-full bg-[#fafafa]">
                                <KnowledgeAbsorptionScene />
                            </div>
                        ) : study.id === "agency" ? (
                            <div className="w-full h-full bg-[#fafafa]">
                                <FrictionEliminationScene />
                            </div>
                        ) : (
                            <>
                                <motion.img
                                    src={study.image}
                                    alt={study.title}
                                    className="w-full h-full object-cover origin-center bg-[var(--color-bg-card)]"
                                    variants={{
                                        hover: { scale: 1.05 }
                                    }}
                                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-60" />
                            </>
                        )}
                    </motion.div>
                </div>
            </div>

            {/* Typography and Emotional Hook */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <div className="flex items-center gap-3 mb-6">
                        <span className="h-[1px] w-8 bg-[var(--color-brand)]" />
                        <span className="text-sm font-bold tracking-[0.2em] text-[var(--color-brand)] uppercase">
                            {study.category}
                        </span>
                    </div>

                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-[var(--color-text)] leading-[1.1] tracking-tight mb-6">
                        {study.hook}
                    </h3>

                    <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed mb-10 max-w-lg font-light">
                        {study.description}
                    </p>

                    {/* Metrics Grid */}
                    <div className="grid grid-cols-2 gap-8 mb-12 border-l-2 border-[var(--color-border)] pl-6">
                        {study.metrics.map((metric, i) => (
                            <div key={i}>
                                <div className="text-3xl font-bold text-[var(--color-text)] mb-1 tracking-tight">
                                    {metric.value}
                                </div>
                                <div className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">
                                    {metric.label}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Emotional CTA */}
                    <a
                        href={study.link}
                        className="group/cta inline-flex items-center gap-4 text-[var(--color-text)] hover:text-[var(--color-brand)] transition-colors duration-300"
                    >
                        <span className="text-lg font-semibold tracking-wide">Read the Full Story</span>
                        <span className="h-12 w-12 rounded-full border border-[var(--color-border)] group-hover/cta:border-[var(--color-brand)] group-hover/cta:bg-[var(--color-brand)]/10 flex items-center justify-center transition-all duration-300">
                            <ArrowUpRight className="w-5 h-5 group-hover/cta:-translate-y-1 group-hover/cta:translate-x-1 transition-transform duration-300" />
                        </span>
                    </a>
                </motion.div>
            </div>
        </motion.div>
    )
}

export function FeaturedCaseStudies() {
    return (
        <section className="py-24 md:py-36 bg-[var(--color-bg)] relative z-10">
            <Container>
                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20 md:mb-32">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="max-w-2xl"
                    >
                        <h2 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-[var(--color-text)] mb-6 leading-[1.05]">
                            Behind every <br />
                            <span className="text-[var(--color-text-muted)]">metric</span> is a <span className="gradient-text italic">story.</span>
                        </h2>
                        <p className="text-xl text-[var(--color-text-secondary)] font-light leading-relaxed">
                            We don't just build software. We engineer operational breakthroughs.
                            Discover how we've transformed chaos into clarity for bold visionaries.
                        </p>
                    </motion.div>
                </div>

                {/* Editorial Case Studies List */}
                <div className="flex flex-col">
                    {caseStudies.map((study, index) => (
                        <CaseStudyRow key={study.id} study={study} index={index} />
                    ))}
                </div>
            </Container>
        </section>
    )
}
