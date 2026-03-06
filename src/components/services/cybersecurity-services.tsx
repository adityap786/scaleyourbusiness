"use client"

import { Container } from "@/components/ui/container"
import { motion, useMotionValue, useSpring, useTransform } from "motion/react"
import { useRef, useState, useCallback, useEffect } from "react"

const playerStyle = {
    width: "100%",
    height: "100%",
    borderRadius: "1rem",
    overflow: "hidden"
};

// Placeholder for Remotion player - in a real app you'd use @remotion/player
// Since we might not want to hydrate the full player immediately or handling SSR issues
const AnimatedPreview = ({ id, color }: { id: string, color: string }) => {
    return (
        <div className={`w-full h-full bg-[var(--color-bg-soft)] flex items-center justify-center relative overflow-hidden group-hover:border-[var(--color-brand)]/50 transition-colors`}>
             <div className="absolute inset-0 opacity-20" style={{
                 background: `radial-gradient(circle at center, ${color}, transparent 70%)`
             }} />
             <div className="text-xs text-[var(--color-text-muted)] p-4 text-center border border-[var(--color-border)] rounded bg-[var(--color-bg)]/80 backdrop-blur-sm">
                 Animation: {id} loaded
             </div>
        </div>
    )
}

function GlowCard({
    children,
    className = "",
    delay = 0,
}: {
    children: React.ReactNode
    className?: string
    delay?: number
}) {
    const ref = useRef<HTMLDivElement>(null)
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    const handleMouseMove = useCallback(
        (e: React.MouseEvent<HTMLDivElement>) => {
            if (!ref.current) return
            const rect = ref.current.getBoundingClientRect()
            mouseX.set(e.clientX - rect.left)
            mouseY.set(e.clientY - rect.top)
        },
        [mouseX, mouseY]
    )

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50, filter: "blur(12px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay, duration: 0.8 }}
            onMouseMove={handleMouseMove}
            className={`group relative bg-[var(--color-bg-card)] rounded-2xl border border-[var(--color-border)] overflow-hidden transition-colors duration-500 hover:border-[#38BDF8]/40 ${className}`}
        >
            <motion.div
                className="pointer-events-none absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                    background: useTransform(
                        [mouseX, mouseY],
                        ([x, y]) =>
                            `radial-gradient(350px circle at ${x}px ${y}px, rgba(56,189,248,0.15), transparent 55%)`
                    ),
                }}
            />
            {children}
        </motion.div>
    )
}

const services = [
    {
        title: "Web Application Penetration Test",
        subtitle: "Enterprise Standard – OWASP + Business Logic",
        description: "Comprehensive black-box and gray-box testing aligned with OWASP Top 10, business logic flaws, and API endpoint security.",
        icon: "🥉",
        deliverables: [
            "Executive Summary (Board-Level)",
            "Technical Vulnerability Report",
            "Proof-of-Concept Exploits",
            "30-Minute Security Debrief Call"
        ],
        price: "₹1.5L – ₹2.2L",
        animationId: "CyberShieldLogic",
        color: "#38BDF8"
    },
    {
        title: "API & SaaS Security Assessment",
        subtitle: "For SaaS platforms, Mobile-backend APIs, FinTech",
        description: "Focus on authentication bypass, JWT manipulation, IDOR, and multi-tenant isolation testing.",
        icon: "🥈",
        deliverables: [
            "API Attack Surface Map",
            "Endpoint Risk Matrix",
            "Remediation Playbook",
            "Secure architecture recommendations"
        ],
        price: "₹2.5L – ₹4L",
        animationId: "NetworkScanNode",
        color: "#38BDF8"
    },
    {
        title: "Advanced Security Assessment",
        subtitle: "Red-Team Lite | Simulated real-world attacker",
        description: "External attack surface mapping, credential leak discovery, phishing simulation, and privilege escalation testing.",
        icon: "🥇",
        deliverables: [
            "Attack Narrative & Impact Analysis",
            "Strategic Risk Mitigation Roadmap",
            "Remediation Workshop",
            "2 Retest Cycles"
        ],
        price: "₹6L – ₹15L",
        animationId: "PhishingSimulation",
        color: "#38BDF8"
    }
]

export function CybersecurityServices() {
    return (
        <section className="py-24 bg-[var(--color-bg)] relative overflow-hidden">
             
            <Container>
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.span 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-[#38BDF8] font-mono text-sm tracking-widest uppercase mb-4 block"
                    >
                        Core Service Packages
                    </motion.span>
                    <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-text)] mb-6">
                        Productized & <span className="text-[#38BDF8]">Premium Security</span>
                    </h2>
                    <p className="text-[var(--color-text-secondary)] text-lg">
                        Defensive strategies tailored for high-growth companies that cannot afford reputational or financial exposure.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, i) => (
                        <GlowCard key={i} delay={i * 0.1}>
                            <div className="h-48 bg-black/50 relative overflow-hidden border-b border-[var(--color-border)]">
                                <AnimatedPreview id={service.animationId} color={service.color} />
                                <div className="absolute top-4 right-4 text-4xl opacity-20 grayscale grayscale-0 transition-all font-serif">
                                    {service.icon}
                                </div>
                            </div>
                            
                            <div className="p-8">
                                <h3 className="text-xl font-bold text-[var(--color-text)] mb-1 group-hover:text-[#38BDF8] transition-colors">
                                    {service.title}
                                </h3>
                                <div className="text-xs font-mono text-[var(--color-text-muted)] mb-4 uppercase tracking-wide">
                                    {service.subtitle}
                                </div>
                                
                                <p className="text-sm text-[var(--color-text-secondary)] mb-6 leading-relaxed min-h-[80px]">
                                    {service.description}
                                </p>
                                
                                <div className="space-y-3 mb-8">
                                    {service.deliverables.map(d => (
                                        <div key={d} className="flex gap-3 text-sm text-[var(--color-text)]">
                                            <span className="text-[#38BDF8] shrink-0">✔</span>
                                            <span className="opacity-80">{d}</span>
                                        </div>
                                    ))}
                                </div>
                                
                                <div className="mt-auto pt-6 border-t border-[var(--color-border)] flex items-center justify-between">
                                    <div>
                                        <span className="text-[10px] text-[var(--color-text-muted)] uppercase block mb-1">Estimated Investment</span>
                                        <span className="text-lg font-bold text-[var(--color-text)]">{service.price}</span>
                                    </div>
                                </div>
                            </div>
                        </GlowCard>
                    ))}
                </div>

                {/* Retainer Card */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-8 p-1 rounded-2xl bg-gradient-to-r from-[#38BDF8]/20 via-[#38BDF8]/20 to-[#38BDF8]/20"
                >
                    <div className="bg-[var(--color-bg-card)] rounded-[14px] p-8 md:p-12 flex flex-col md:flex-row items-center gap-10">
                        <div className="flex-1">
                             <h3 className="text-2xl font-bold text-[var(--color-text)] mb-2 flex items-center gap-3">
                                🔁 Continuous Security Program
                                <span className="text-xs bg-[#38BDF8]/10 text-[#38BDF8] px-3 py-1 rounded-full border border-[#38BDF8]/20">Retainer Model</span>
                             </h3>
                             <p className="text-[var(--color-text-secondary)] mb-6">
                                 For companies that want ongoing protection. Includes quarterly pentests, monthly attack surface monitoring, and incident response guidance.
                             </p>
                             <div className="grid grid-cols-2 gap-4">
                                 {["Monthly Attack Surface Monitoring", "Vulnerability Advisory", "Security Consultation Hours", "Cloud Misconfig Monitoring"].map(f =>(
                                     <div key={f} className="flex gap-2 text-sm text-[var(--color-text-muted)]">
                                         <div className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] mt-2" />
                                         {f}
                                     </div>
                                 ))}
                             </div>
                        </div>
                        <div className="text-center md:text-right shrink-0">
                            <div className="text-3xl font-bold text-[var(--color-text)] mb-1">₹2L – ₹6L</div>
                            <div className="text-sm text-[var(--color-text-muted)]">per month</div>
                        </div>
                    </div>
                </motion.div>
                
            </Container>
        </section>
    )
}
