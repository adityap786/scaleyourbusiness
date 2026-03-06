"use client"

import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { motion, useScroll, useTransform } from "motion/react"
import { useRef } from "react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

interface CaseStudyLayoutProps {
    title: string
    subtitle: string
    role: string
    timeline: string
    stack: string[]
    metrics: { label: string; value: string }[]
    children: React.ReactNode
    nextCaseStudy?: {
        title: string
        href: string
    }
}

export function CaseStudyLayout({
    title,
    subtitle,
    role,
    timeline,
    stack,
    metrics,
    children,
    nextCaseStudy
}: CaseStudyLayoutProps) {
    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    })

    const headerY = useTransform(scrollYProgress, [0, 0.1], [0, -150]);
    const opVal = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

    return (
        <div className="bg-[#f0f0f0] min-h-screen text-black font-sans selection:bg-black selection:text-white" ref={containerRef}>
            <Header />
            
            {/* Cinematic Hero Header */}
            <motion.div 
                className="relative pt-40 pb-20 overflow-hidden bg-[#f0f0f0]"
                style={{ y: headerY, opacity: opVal }}
            >
                <div className="absolute inset-0 pointer-events-none z-0 mix-blend-multiply opacity-[0.03]" 
                     style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}>
                </div>

                <Container>
                    <Link href="/work" className="group inline-flex items-center text-sm uppercase tracking-widest text-black/50 hover:text-black mb-12 transition-colors font-bold z-10 relative">
                        <ArrowLeft className="w-5 h-5 mr-3 group-hover:-translate-x-2 transition-transform" />
                        Back to Work
                    </Link>
                    
                    <div className="relative z-10 max-w-6xl">
                        <motion.h1 
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="text-[4rem] md:text-[6rem] lg:text-[7rem] font-black tracking-tighter leading-[0.9] uppercase mb-8"
                        >
                            {title}
                        </motion.h1>
                        <motion.div 
                            initial={{ x: -30, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                            className="flex"
                        >
                            <div className="w-2 bg-[#3b82f6] mr-6 hidden md:block"></div>
                            <p className="text-xl md:text-3xl text-black/80 font-medium leading-relaxed max-w-4xl">
                                {subtitle}
                            </p>
                        </motion.div>
                    </div>
                </Container>
            </motion.div>

            {/* Breaking the Grid: Meta Data Strip */}
            <div className="relative z-20 border-y-2 border-black bg-white">
                <Container>
                    <div className="flex flex-col md:flex-row md:items-center py-10 gap-10 md:gap-16">
                        <div className="flex-1">
                            <div className="text-xs text-[#3b82f6] uppercase tracking-widest font-black mb-2">Role</div>
                            <div className="font-bold text-xl uppercase tracking-tight">{role}</div>
                        </div>
                        <div className="flex-1">
                            <div className="text-xs text-[#3b82f6] uppercase tracking-widest font-black mb-2">Timeline</div>
                            <div className="font-bold text-xl uppercase tracking-tight">{timeline}</div>
                        </div>
                        <div className="flex-[2]">
                            <div className="text-xs text-[#3b82f6] uppercase tracking-widest font-black mb-3">Tech Stack</div>
                            <div className="flex flex-wrap gap-2">
                                {stack.map((tech) => (
                                    <span key={tech} className="inline-flex items-center px-3 py-1 bg-black text-white text-xs font-bold uppercase tracking-widest">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </Container>
            </div>

            {/* Asymmetrical Content Area */}
            <div className="relative bg-white pt-24 pb-32">
                <Container>
                    <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 relative">
                        
                        {/* Main Reading Flow */}
                        <div className="lg:col-span-8 group prose prose-lg md:prose-xl max-w-none text-black/80 
                            prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tighter prose-headings:text-black 
                            prose-h2:text-4xl md:prose-h2:text-5xl prose-h2:mt-16 prose-h2:mb-8 prose-h2:border-b-4 prose-h2:border-[#3b82f6] prose-h2:pb-4 prose-h2:inline-block
                            prose-h3:text-2xl md:prose-h3:text-3xl prose-h3:mt-12 prose-h3:mb-6
                            prose-p:leading-relaxed prose-p:font-medium prose-p:mb-8
                            prose-strong:font-black prose-strong:text-black
                            prose-ul:list-none prose-ul:pl-0 prose-li:relative prose-li:pl-6 prose-li:mb-4
                            prose-li:before:content-[''] prose-li:before:absolute prose-li:before:left-0 prose-li:before:top-[12px] prose-li:before:w-2 prose-li:before:h-2 prose-li:before:bg-[#3b82f6]
                        ">
                            {children}
                        </div>

                        {/* Staggered Sidebar Elements */}
                        <div className="lg:col-span-4 relative">
                            <div className="sticky top-40 space-y-16">
                                
                                {/* Metrics Node */}
                                <div>
                                    <h3 className="text-sm font-black uppercase tracking-widest text-[#3b82f6] border-b-2 border-black/10 pb-4 mb-8">Key Impact</h3>
                                    <div className="space-y-10">
                                        {metrics.map((metric, i) => (
                                            <motion.div 
                                                key={i}
                                                initial={{ opacity: 0, x: 20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: i * 0.1, duration: 0.5 }}
                                                className="relative pl-6 border-l-4 border-black group-hover:border-[#3b82f6] transition-colors"
                                            >
                                                <div className="text-5xl md:text-6xl font-black text-black tracking-tighter mb-2 leading-none">{metric.value}</div>
                                                <div className="text-sm font-bold text-black/60 uppercase tracking-widest">{metric.label}</div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>

                                {/* Start Project Interrupt */}
                                <div className="bg-[#3b82f6] text-white p-10 relative overflow-hidden group hover:scale-[1.02] transition-transform duration-500">
                                    <div className="absolute -right-10 -top-10 text-[10rem] font-black opacity-10 pointer-events-none group-hover:rotate-12 transition-transform duration-700">↗</div>
                                    <h3 className="text-3xl font-black uppercase tracking-tight mb-4 relative z-10">Ready to break the rules?</h3>
                                    <p className="text-white/80 font-medium mb-8 relative z-10">Stop blending in. Let's design an experience that forces your industry to pay attention.</p>
                                    <Link href="/contact" className="inline-block bg-white text-black font-black uppercase tracking-widest text-sm px-8 py-4 hover:bg-black hover:text-white transition-colors relative z-10">
                                        Start a Project
                                    </Link>
                                </div>

                            </div>
                        </div>
                    </div>
                </Container>
            </div>

            {/* Immersive Next Case Study */}
            {nextCaseStudy && (
                <Link href={nextCaseStudy.href} className="block relative group overflow-hidden bg-black text-white py-32">
                    <div className="absolute inset-0 bg-[#3b82f6] scale-y-0 origin-bottom transition-transform duration-700 ease-[0.16,1,0.3,1] group-hover:scale-y-100 z-0"></div>
                    <Container className="relative z-10 text-center">
                        <div className="text-sm text-white/50 uppercase tracking-widest font-bold mb-6 group-hover:text-white transition-colors">Launch Next Mission</div>
                        <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter group-hover:scale-105 transition-transform duration-700 ease-[0.16,1,0.3,1]">
                            {nextCaseStudy.title}
                        </h2>
                    </Container>
                </Link>
            )}

            <Footer />
        </div>
    )
}
