"use client"

import { Container } from "@/components/ui/container"
import { motion, useScroll, useTransform } from "motion/react"
import { useRef } from "react"
import Link from "next/link"
import dynamic from "next/dynamic"
import { AestheticTestimonials } from "@/components/ui/aesthetic-testimonials"
import { CTASection } from "@/components/home/cta-section"

const LightPillar = dynamic(() => import("@/components/ui/light-pillar"), { ssr: false })

const SERVICES = [
    {
        id: "01",
        title: "Penetration Testing",
        desc: "Comprehensive black-box and gray-box testing aligned with OWASP Top 10, business logic flaws, and zero-day exposure.",
        tags: ["Web App", "APIs", "Mobile"],
        price: "Starts at ₹1.5L"
    },
    {
        id: "02",
        title: "Red Team Ops",
        desc: "Simulated real-world attacker scenarios. External attack surface mapping, credential leak discovery, and privilege escalation.",
        tags: ["Phishing", "Physical", "Network"],
        price: "Starts at ₹6.0L"
    },
    {
        id: "03",
        title: "SaaS Auditing",
        desc: "Architecture review focusing on authentication bypass, JWT manipulation, IDOR, and multi-tenant isolation.",
        tags: ["FinTech", "HealthTech", "Enterprise"],
        price: "Starts at ₹2.5L"
    }
]

export function CyberContent() {
    const heroRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"]
    })

    const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
    const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
    
    return (
        <main className="bg-white selection:bg-black selection:text-white pb-0">
            {/* HERO SECTION */}
            <section ref={heroRef} className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden bg-gradient-to-b from-[#000511] to-black text-white isolate border-b-[3px] border-black">
                {/* LightPillar Background */}
                <div className="absolute inset-0 pointer-events-none z-[-1]">
                    <LightPillar
                        topColor="#0033FF"
                        bottomColor="#FFFFFF"
                        intensity={1}
                        rotationSpeed={0.3}
                        glowAmount={0.002}
                        pillarWidth={3}
                        pillarHeight={0.4}
                        noiseIntensity={0.5}
                        pillarRotation={0}
                        interactive={false}
                        mixBlendMode="screen"
                        quality="high"
                    />
                </div>
                
                {/* Subtle overlay to ensure text readability */}
                <div className="absolute inset-0 bg-black/20 pointer-events-none z-[-1]" />

                <Container className="relative z-10 w-full flex-1 flex flex-col justify-center">
                    <motion.div style={{ y: heroY, opacity: heroOpacity }} className="w-full max-w-[1200px] mx-auto relative">
                        
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                            className="inline-flex items-center gap-3 px-4 py-2 border-[2px] border-white/20 mb-8"
                        >
                            <div className="w-2 h-2 bg-[#3b82f6] shadow-[0_0_10px_#3b82f6] animate-pulse rounded-none"></div>
                            <span className="text-xs font-black uppercase tracking-widest text-white/80">Enterprise Defense</span>
                        </motion.div>

                        <motion.h1 
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                            className="text-[4rem] md:text-[8rem] lg:text-[10rem] font-black uppercase tracking-tighter leading-[0.85] mb-8"
                        >
                            Digital <br/> <span className="text-[#3b82f6] italic">Armor.</span>
                        </motion.h1>

                        <div className="flex flex-col md:flex-row gap-10 items-start md:items-end justify-between border-t-[3px] border-white/20 pt-8 mt-12 w-full">
                            <motion.p 
                                initial={{ y: 30, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                className="text-xl md:text-3xl font-bold text-white/70 max-w-xl leading-snug"
                            >
                                Advanced risk assessment, payload mapping, and zero-day threat elimination designed for high-growth enterprises.
                            </motion.p>
                            
                            <motion.div 
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                className="shrink-0"
                            >
                                <Link href="/contact" className="group relative inline-flex items-center justify-center border-[3px] border-[#3b82f6] bg-[#3b82f6] px-10 py-5 font-black uppercase tracking-widest text-white overflow-hidden hover:shadow-[10px_10px_0px_#fff] hover:-translate-y-1 transition-all duration-500">
                                    <span className="relative z-10 group-hover:text-[#3b82f6] transition-colors duration-500 text-lg">Deploy Assessment</span>
                                    <div className="absolute inset-0 bg-white translate-y-[101%] transition-transform duration-500 ease-[0.16,1,0.3,1] group-hover:translate-y-0 z-0"></div>
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                </Container>
            </section>

            {/* THE ARCHITECTURE / SERVICES */}
            <section className="bg-white py-32 relative z-20 overflow-hidden">
                <Container>
                    <div className="flex flex-col md:flex-row justify-between items-end mb-24 pb-8 border-b-[4px] border-black">
                        <motion.h2 
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="text-5xl md:text-8xl font-black uppercase tracking-tighter text-black leading-none"
                        >
                            Threat <br/> <span className="text-[#3b82f6] italic">Vector.</span>
                        </motion.h2>
                        <p className="text-xl font-bold uppercase tracking-widest text-black/40 hidden md:block">Core Tactics</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {SERVICES.map((srv, idx) => (
                            <motion.div 
                                key={srv.id}
                                initial={{ opacity: 0, y: 100 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-10%" }}
                                transition={{ duration: 1, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                                className="group relative bg-white border-[3px] border-black p-8 md:p-12 shadow-[8px_8px_0px_0px_#000] hover:shadow-[16px_16px_0px_0px_#3b82f6] hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between h-[500px]"
                            >
                                {/* Expanding blue cover on hover */}
                                <div className="absolute inset-0 bg-[#3b82f6] scale-y-0 origin-top transition-transform duration-[0.8s] ease-[0.16,1,0.3,1] group-hover:scale-y-100 z-0 border-b-[3px] border-transparent group-hover:border-black"></div>

                                <div className="relative z-10">
                                    <div className="text-[5rem] font-black tracking-tighter leading-none opacity-10 mb-8 max-w-min group-hover:opacity-30 group-hover:text-black transition-all">
                                        {srv.id}
                                    </div>
                                    <h3 className="text-3xl font-black uppercase tracking-tight text-black mb-4 group-hover:text-white transition-colors">{srv.title}</h3>
                                    <p className="text-lg font-bold text-black/60 group-hover:text-black/80 transition-colors leading-relaxed">
                                        {srv.desc}
                                    </p>
                                </div>

                                <div className="relative z-10 w-full mt-auto pt-8 border-t-[3px] border-black border-dashed group-hover:border-solid transition-all">
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {srv.tags.map(tag => (
                                            <span key={tag} className="text-[10px] font-black uppercase tracking-widest px-2 py-1 bg-black text-white group-hover:bg-white group-hover:text-black transition-colors border-[2px] border-transparent group-hover:border-black">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm font-black uppercase tracking-widest text-[#3b82f6] group-hover:text-white transition-colors">Investment</span>
                                        <span className="text-xl font-black text-black transition-colors">{srv.price}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* AESTHETIC TESTIMONIALS */}
            <AestheticTestimonials />

            <div className="bg-white">
                <CTASection />
            </div>
        </main>
    )
}
