"use client"

import { Container } from "@/components/ui/container"
import { motion } from "motion/react"
import { ShieldCheck, Lock, Users, Briefcase, TrendingUp } from "lucide-react"

const reasons = [
    {
        icon: TrendingUp,
        title: "Revenue Protection",
        points: ["Downtime = Direct revenue loss", "Ransomware = Operational halt", "Data breach = Customer churn"]
    },
    {
        icon: Lock,
        title: "Regulatory Exposure",
        points: ["GDPR penalties", "PCI-DSS non-compliance", "Data protection violations"]
    },
    {
        icon: Briefcase,
        title: "Investor & Due Diligence",
        points: ["Security posture affects valuation", "Audits required for funding", "Enterprise clients demand reports"]
    },
    {
        icon: Users,
        title: "Brand Reputation",
        points: ["Customer trust damage", "Market credibility loss", "Partnership opportunities risk"]
    },
    {
        icon: ShieldCheck,
        title: "Competitive Advantage",
        points: ["Win enterprise contracts faster", "Close deals quicker", "Pass vendor security reviews"]
    }
]

export function CybersecurityWhyRec() {
    return (
        <section className="py-24 bg-[var(--color-bg)] relative">
            <Container>
                <div className="flex flex-col lg:flex-row gap-16">
                    <div className="lg:w-1/3">
                        <div className="sticky top-32">
                            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-6">
                                Why Cybersecurity <br />
                                <span className="text-[#38BDF8]">Matters Now</span>
                            </h2>
                            <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed mb-8">
                                Cybersecurity is no longer an IT concern — it is a board-level risk management function tailored for mid & large businesses.
                            </p>
                            <div className="h-1 w-20 bg-[#38BDF8] rounded-full" />
                        </div>
                    </div>
                    
                    <div className="lg:w-2/3 grid gap-8">
                        {reasons.map((reason, i) => (
                             <motion.div 
                                key={i}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="flex gap-6 p-6 rounded-2xl bg-[var(--color-bg-soft)] border border-[var(--color-border)] hover:border-[#38BDF8]/20 transition-colors"
                             >
                                 <div className="shrink-0">
                                     <div className="w-12 h-12 rounded-xl bg-[var(--color-bg)] border border-[var(--color-border)] flex items-center justify-center text-[#38BDF8]">
                                         <reason.icon className="w-6 h-6" />
                                     </div>
                                 </div>
                                 <div>
                                     <h3 className="text-xl font-bold text-[var(--color-text)] mb-4">{reason.title}</h3>
                                     <ul className="space-y-2">
                                         {reason.points.map(p => (
                                             <li key={p} className="flex gap-2 text-[var(--color-text-secondary)] text-sm">
                                                 <span className="text-[#38BDF8]">•</span>
                                                 {p}
                                             </li>
                                         ))}
                                     </ul>
                                 </div>
                             </motion.div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    )
}
