"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "motion/react"
import { Container } from "@/components/ui/container"
import { ArrowUpRight } from "lucide-react"

const clients = [
    { id: "saas", label: "SaaS Founders", index: "01", impact: "Build recurring revenue engines that don't need your presence to grow.", metric: "3x avg MRR growth in 6 months", tag: "Product Engineering" },
    { id: "ecom", label: "eCommerce Brands", index: "02", impact: "Turn browsers into buyers. Maximize LTV, reduce churn, compound revenue.", metric: "40% conversion uplift on avg", tag: "CRO + Infrastructure" },
    { id: "agency", label: "Marketing Agencies", index: "03", impact: "White-label technical horsepower your team doesn't need to build in-house.", metric: "2-3x project capacity unlocked", tag: "White-Label Systems" },
    { id: "health", label: "Healthcare Clinics", index: "04", impact: "Automate intake, scheduling, and patient comms. Reduce staff overhead by half.", metric: "50% fewer manual admin hours", tag: "Automation + HIPAA UX" },
    { id: "real", label: "Real Estate", index: "05", impact: "AI-driven lead routing, automated follow-up, instant qualifying pipelines.", metric: "5x lead response speed", tag: "Lead Intelligence" },
    { id: "edtech", label: "EdTech Startups", index: "06", impact: "Platforms that adapt, retain learners, and make learning feel effortless.", metric: "68% learner retention", tag: "Experience Engineering" },
    { id: "local", label: "Local Businesses", index: "07", impact: "Own your local search. Automate reviews, leads, and follow-up at scale.", metric: "Top 3 GMB rank in 90 days", tag: "Local Dominance" },
    { id: "d2c", label: "D2C Brands", index: "08", impact: "End-to-end brand + tech stack. From storefront to post-purchase, built right.", metric: "55% repeat purchase rate", tag: "Full-Stack Branding" },
]

const cardOffsets = [
    { x: 30, y: 0, rotate: -2, delay: 0 },
    { x: -30, y: 60, rotate: 3, delay: 0.1 },
    { x: 40, y: -40, rotate: -4, delay: 0.2 },
    { x: -50, y: 80, rotate: 2, delay: 0.3 },
    { x: 20, y: 20, rotate: -1, delay: 0.4 },
    { x: 60, y: 120, rotate: 4, delay: 0.5 },
    { x: -20, y: -20, rotate: -3, delay: 0.6 },
    { x: 50, y: 40, rotate: 1, delay: 0.7 },
]

export function TrustBuilder() {
    const sectionRef = useRef<HTMLElement>(null)
    const [hoveredId, setHoveredId] = useState<string | null>(null)
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768)
        checkMobile()
        window.addEventListener("resize", checkMobile)
        return () => window.removeEventListener("resize", checkMobile)
    }, [])

    const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] })

    // Very subtle parallax for the text, completely disabled on mobile
    const titleY = useTransform(scrollYProgress, [0, 1], ["0%", isMobile ? "0%" : "20%"])
    const titleOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [1, 1, 1, isMobile ? 1 : 0.5])

    return (
        <section ref={sectionRef} className="relative bg-[#FAFAFA] min-h-0 md:min-h-[140vh] py-16 md:py-24 overflow-hidden flex flex-col items-center">
            {/* Ambient Background & Deep Blur */}
            <div className="absolute inset-0 opacity-[0.04] pointer-events-none mix-blend-multiply" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E')" }} />
            <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[60vw] h-[60vw] bg-blue-100/50 rounded-full blur-[140px] pointer-events-none -z-10" />

            {/* Typography - Now statically placed sequentially at the top */}
            <div className="relative w-full flex flex-col justify-start items-center pt-8 md:pt-0 pointer-events-none z-20 md:z-0 px-4 md:px-0 mb-12 md:mb-32">
                <motion.div style={{ y: titleY, opacity: titleOpacity }} className="text-center">
                    <p className="text-[11px] sm:text-sm font-bold tracking-[0.4em] uppercase text-blue-600 mb-6 md:mb-8">
                        Who We Serve
                    </p>
                    <h2 className="text-[14vw] sm:text-[9vw] font-black tracking-tighter leading-[0.85] text-zinc-900">
                        WE PARTNER WITH <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-br from-zinc-400 to-zinc-200">10X THINKERS.</span>
                    </h2>
                </motion.div>
            </div>

            <Container className="relative z-10 w-full max-w-7xl">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 relative pb-16 md:pb-64 px-4 md:px-0">
                    {clients.map((client, i) => {
                        const offset = cardOffsets[i % cardOffsets.length]
                        // Scroll-based depth & parallax mapping
                        const yParallax = useTransform(scrollYProgress, [0, 1], [0, i % 2 === 0 ? -120 : -250])
                        const isHovered = hoveredId === client.id
                        const isSomethingHovered = hoveredId !== null && !isHovered

                        // On mobile, lock cards cleanly in place
                        const currentY = isMobile ? 0 : yParallax
                        const currentX = isMobile ? 0 : offset.x
                        const initialY = isMobile ? 50 : 100 // Gentler fade-in Y on mobile
                        const currentRotate = isMobile ? 0 : offset.rotate

                        return (
                            <motion.div
                                key={client.id}
                                style={{ y: currentY, x: currentX }}
                                initial={{ opacity: 0, y: initialY, rotate: isMobile ? 0 : currentRotate * 2 }}
                                whileInView={{ opacity: 1, y: 0, rotate: currentRotate }}
                                viewport={{ once: true, margin: isMobile ? "10%" : "-5%" }}
                                transition={{ duration: 1.2, delay: isMobile ? 0 : offset.delay, ease: [0.16, 1, 0.3, 1] }}
                                onMouseEnter={() => setHoveredId(client.id)}
                                onMouseLeave={() => setHoveredId(null)}
                                className={`
                                    relative p-6 md:p-8 rounded-[2rem] bg-white/60 backdrop-blur-3xl border border-white 
                                    shadow-[0_20px_40px_-20px_rgba(0,0,0,0.08)] cursor-crosshair
                                    transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
                                    ${isHovered ? "z-50 scale-105 md:scale-110 shadow-[0_40px_80px_-20px_rgba(37,99,235,0.2)] bg-white/95 border-blue-100" : "z-10"}
                                    ${isSomethingHovered ? "opacity-40 blur-sm md:blur-[8px] scale-95 md:scale-95 saturate-0" : "opacity-100"}
                                `}
                            >
                                <div className="flex items-center justify-between mb-10">
                                    <span className="text-[10px] font-bold tracking-[0.2em] text-zinc-300">
                                        {client.index}
                                    </span>
                                    <span className="text-[9px] uppercase font-bold tracking-[0.2em] px-3 py-1.5 rounded-full bg-blue-50/80 text-blue-600 border border-blue-100 shadow-sm">
                                        {client.tag}
                                    </span>
                                </div>

                                <h3 className="text-2xl font-black tracking-tight text-zinc-950 mb-5 leading-none">
                                    {client.label}
                                </h3>

                                <p className="text-sm text-zinc-500 leading-relaxed font-medium">
                                    {client.impact}
                                </p>

                                <AnimatePresence>
                                    {isHovered && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0, marginTop: 0 }}
                                            animate={{ opacity: 1, height: "auto", marginTop: 28 }}
                                            exit={{ opacity: 0, height: 0, marginTop: 0 }}
                                            className="overflow-hidden border-t border-blue-50/50 pt-7"
                                        >
                                            <div className="flex items-center justify-between text-blue-600">
                                                <span className="text-sm font-bold tracking-tight">
                                                    {client.metric}
                                                </span>
                                                <div className="p-2 rounded-full bg-blue-50"><ArrowUpRight className="w-4 h-4" /></div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        )
                    })}
                </div>
            </Container>
        </section>
    )
}
