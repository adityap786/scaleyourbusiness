"use client"

import Link from "next/link"
import { Container } from "@/components/ui/container"
import { motion, useScroll, useTransform } from "motion/react"
import { ArrowUpRight } from "lucide-react"
import { useRef } from "react"

const footerLinks = {
    Services: [
        { name: "Website Development", href: "/website-development" },
        { name: "App Development", href: "/app-development" },
        { name: "SaaS Development", href: "/saas-development" },
        { name: "AI Automation", href: "/ai-automation" },
        { name: "Marketing Services", href: "/marketing-services" },
    ],
    Company: [
        { name: "About", href: "/about" },
        { name: "Careers", href: "/careers" },
        { name: "Blog", href: "/blog" },
        { name: "Pricing", href: "/pricing" },
        { name: "Contact", href: "/contact" },
    ],
    Resources: [
        { name: "Portfolio", href: "/work" },
        { name: "App Development Cost", href: "/app-development-cost" },
        { name: "AI Automation Cost", href: "/ai-automation-cost" },
        { name: "Best CRM for Small Business", href: "/best-crm-for-small-business" },
    ],
}

export function Footer() {
    const footerRef = useRef<HTMLElement>(null)
    const { scrollYProgress } = useScroll({
        target: footerRef,
        offset: ["start end", "end end"]
    })

    const y = useTransform(scrollYProgress, [0, 1], ["-50%", "0%"])
    const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1])
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.5, 1])

    return (
        <footer 
            ref={footerRef} 
            className="bg-[#FAFAFA] text-zinc-900 relative overflow-hidden border-t border-black/5"
            style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
        >
            <motion.div style={{ y, scale, opacity }} className="relative w-full h-full">
                
                {/* Immersive Depth & Grain Backdrops */}
                <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-[0.03] pointer-events-none mix-blend-multiply" />
                <div className="absolute -top-[20%] left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] bg-gradient-to-b from-blue-50/50 to-transparent rounded-full blur-[120px] pointer-events-none -z-10" />
                <div className="absolute -bottom-[50%] left-[20%] w-[60vw] h-[60vw] bg-indigo-100/40 rounded-full blur-[180px] pointer-events-none -z-10" />

                <Container className="pt-32 pb-12 relative z-10">
                    
                    {/* Top Call to Action Frame */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-16 mb-32">
                        <div className="max-w-2xl">
                            <h2 className="text-6xl md:text-7xl lg:text-[7rem] font-black tracking-tighter leading-[0.85] text-zinc-950 mb-8">
                                LET'S BUILD
                                <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500 italic pr-4 pb-2 -mr-4">SOMETHING GREAT.</span>
                            </h2>
                            <Link
                                href="/contact"
                                className="group relative inline-flex items-center gap-3 px-10 py-5 rounded-full bg-zinc-950 text-white font-bold tracking-widest text-sm uppercase overflow-hidden hover:scale-105 transition-all duration-500"
                            >
                                <span className="relative z-10">Start a Conversation</span>
                                <ArrowUpRight className="relative z-10 h-5 w-5 group-hover:rotate-45 group-hover:text-blue-400 transition-all duration-300" />
                                <div className="absolute inset-0 bg-blue-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
                            </Link>
                        </div>
                    </div>

                    {/* Architectural Links Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-8 pt-16 border-t border-black/5">
                        
                        {/* Brand Space */}
                        <div className="col-span-1 md:col-span-1">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="h-10 w-10 text-white bg-blue-600 rounded-[10px] flex items-center justify-center font-black tracking-tighter text-sm shadow-lg shadow-blue-600/30">
                                    SYB
                                </div>
                                <span className="font-black tracking-tight text-lg text-zinc-900">Scale Your Business</span>
                            </div>
                            <p className="text-sm text-zinc-500 leading-relaxed max-w-[280px] font-medium">
                                Engineering & creative team operating across
                                <br />
                                <strong className="text-zinc-900">India · Dubai · United States</strong>
                            </p>
                        </div>

                        {/* Navigation Columns */}
                        {Object.entries(footerLinks).map(([category, links], i) => (
                            <div key={category} className="col-span-1">
                                <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-600 mb-8">
                                    {category}
                                </h4>
                                <ul className="space-y-4">
                                    {links.map((link) => (
                                        <li key={link.name}>
                                            <Link
                                                href={link.href}
                                                className="group relative inline-block text-sm font-semibold text-zinc-600 hover:text-zinc-950 transition-colors duration-300"
                                            >
                                                <span className="relative z-10">{link.name}</span>
                                                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-500 transition-all duration-500 group-hover:w-full" />
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Massive Background Typography Footer Bottom */}
                    <div className="mt-32 pt-8 border-t border-black/5 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
                        <p className="text-xs font-semibold tracking-widest text-zinc-400 uppercase">
                            © {new Date().getFullYear()} SCALE YOUR BUSINESS.
                        </p>
                        <div className="flex gap-8">
                            <Link href="/privacy-policy" className="text-xs font-bold tracking-widest text-zinc-400 uppercase hover:text-blue-600 transition-colors">
                                Privacy
                            </Link>
                            <Link href="/terms" className="text-xs font-bold tracking-widest text-zinc-400 uppercase hover:text-blue-600 transition-colors">
                                Terms
                            </Link>
                        </div>
                        
                        {/* Hidden massive "SYB" watermark behind footer base */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-black text-zinc-900/5 tracking-tighter pointer-events-none select-none -z-10">
                            SCALE YOUR BUSINESS
                        </div>
                    </div>

                </Container>
            </motion.div>
        </footer>
    )
}