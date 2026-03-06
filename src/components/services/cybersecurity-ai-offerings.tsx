"use client"

import { Container } from "@/components/ui/container"
import { motion } from "motion/react"
import { Check, ShieldAlert, Lock, Zap, UserX, BarChart3 } from "lucide-react"

const aiOfferings = [
    {
        title: "AI-Powered Attack Surface Intelligence",
        icon: Zap,
        description: "Continuous AI-driven mapping of a company’s exposed digital assets. Detects new subdomains and leaked credentials automatically.",
        price: "₹3L – ₹8L annually",
        features: [
            "Live attack surface dashboard",
            "Risk score per asset",
            "Immediate high-risk alerts",
            "Quarterly executive review"
        ]
    },
    {
        title: "AI-Enhanced Log Analysis",
        icon: BarChart3,
        description: "A lightweight AI-driven SOC layer tailored for SaaS and FinTech. Detects anomaly patterns and reduces false positives.",
        price: "₹2L – ₹6L per month",
        features: [
            "AI anomaly detection model",
            "Alert classification system",
            "Weekly threat summary",
            "Monthly risk report"
        ]
    },
    {
        title: "AI-Assisted Vuln Prioritization",
        icon: ShieldAlert,
        description: "Context-aware risk scoring to help enterprises know what to fix first among thousands of vulnerabilities.",
        price: "₹4L – ₹10L per engagement",
        features: [
            "AI risk scoring dashboard",
            "Exploit probability model",
            "Fix prioritization list",
            "Executive heatmap"
        ]
    },
    {
        title: "AI-Driven Phishing Simulation",
        icon: UserX,
        description: "Personalized phishing campaigns that use AI to model human risk and behavioral targeting.",
        price: "₹3L – ₹12L annually",
        features: [
            "AI-generated campaigns",
            "Employee risk index",
            "Departmental security score",
            "Training optimization insights"
        ]
    }
]

export function CybersecurityAIOfferings() {
    return (
        <section className="py-24 bg-[var(--color-bg-dark)] border-t border-[var(--color-border)]">
             <Container>
                <div className="mb-16">
                    <span className="text-[#38BDF8] font-mono text-sm tracking-widest uppercase mb-4 block">
                        Next-Gen Defense
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-[var(--color-text)] mb-6">
                        AI-Integrated <span className="text-[#38BDF8]">Service Offerings</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {aiOfferings.map((offering, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-2xl p-8 hover:shadow-lg transition-all group"
                        >
                            <div className="flex items-start justify-between mb-6">
                                <div className="p-3 bg-[#38BDF8]/10 rounded-lg border border-[#38BDF8]/20 group-hover:bg-[#38BDF8]/20 transition-colors">
                                    <offering.icon className="w-6 h-6 text-[#38BDF8]" />
                                </div>
                                <div className="bg-[var(--color-bg-soft)] px-3 py-1 rounded text-xs font-mono text-[var(--color-text-secondary)] border border-[var(--color-border)]">
                                    {offering.price}
                                </div>
                            </div>
                            
                            <h3 className="text-xl font-bold text-[var(--color-text)] mb-3">{offering.title}</h3>
                            <p className="text-[var(--color-text-secondary)] mb-8 leading-relaxed h-[60px]">
                                {offering.description}
                            </p>
                            
                            <div className="space-y-3 border-t border-[var(--color-border)] pt-6">
                                {offering.features.map(f => (
                                    <div key={f} className="flex items-center gap-3 text-sm text-[var(--color-text-secondary)]">
                                        <div className="w-1 h-1 rounded-full bg-[#38BDF8]" />
                                        {f}
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
             </Container>
        </section>
    )
}
