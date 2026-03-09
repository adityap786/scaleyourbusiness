"use client"

import Link from "next/link"
import { Container } from "@/components/ui/container"
import { motion } from "motion/react"
import { ArrowUpRight } from "lucide-react"
import { usePathname } from "next/navigation"

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

// Staggered animation variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
}

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } }
}

export function Footer() {
    const pathname = usePathname()

    if (pathname?.startsWith('/admin') || pathname?.startsWith('/login')) {
        return null;
    }

    return (
        <footer className="bg-zinc-950 text-zinc-300 relative overflow-hidden z-20 border-t border-zinc-900">
            {/* Ambient Background Glows */}
            <div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-[var(--color-brand)]/10 rounded-full blur-[140px] pointer-events-none -z-10" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-indigo-500/10 rounded-full blur-[160px] pointer-events-none -z-10" />

            {/* Massive Background Typography centered vertically/horizontally */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex flex-col justify-center items-end pointer-events-none select-none -z-10 px-8 md:px-12">
                <span className="text-[15.5vw] font-black text-white/[0.02] tracking-tighter leading-[0.85]">
                    SCALE YOUR
                </span>
                <span className="text-[15.5vw] font-black text-white/[0.02] tracking-tighter leading-[0.85]">
                    BUSINESS
                </span>
            </div>

            <Container className="pt-24 pb-8 md:pt-32 md:pb-12 relative z-10">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={containerVariants}
                    className="flex flex-col gap-20"
                >
                    {/* Top CTA Section */}
                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12">
                        <motion.div variants={itemVariants} className="max-w-4xl">
                            <h2 className="text-5xl sm:text-7xl lg:text-[7rem] font-black tracking-tighter leading-[0.85] text-white mb-6">
                                LET'S BUILD
                                <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 italic pr-6 pb-2 inline-block">SOMETHING GREAT.</span>
                            </h2>
                        </motion.div>
                        <motion.div variants={itemVariants} className="shrink-0 lg:pb-6">
                            <Link
                                href="/contact"
                                className="group relative inline-flex items-center gap-3 px-8 py-4 sm:px-10 sm:py-5 rounded-full bg-white text-zinc-950 font-bold tracking-widest text-xs sm:text-sm uppercase overflow-hidden hover:scale-105 shadow-[0_4px_30px_rgba(255,255,255,0.1)] hover:shadow-[0_4px_40px_rgba(255,255,255,0.2)] transition-all duration-500 ease-out"
                            >
                                <span className="relative z-10 group-hover:text-white transition-colors duration-500">Start a Conversation</span>
                                <ArrowUpRight className="relative z-10 h-5 w-5 group-hover:rotate-45 group-hover:text-white transition-all duration-500" />
                                <div className="absolute inset-0 bg-[var(--color-brand)] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
                            </Link>
                        </motion.div>
                    </div>

                    {/* Links & Info Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-16 lg:gap-8 pt-16 border-t border-white/10">
                        {/* Brand Column */}
                        <motion.div variants={itemVariants} className="md:col-span-12 lg:col-span-4">
                            <div className="flex items-center gap-3 mb-6">
                                <img
                                    src="/SYB-logo-dark-theme-1.png"
                                    alt="Scale Your Business Logo"
                                    className="h-10 w-10 object-contain"
                                />
                                <span className="font-black tracking-tight text-xl text-white">Scale Your Business</span>
                            </div>
                            <p className="text-zinc-400 leading-relaxed font-medium mb-8 max-w-sm">
                                Engineering & creative team operating across <span className="text-white font-semibold">India · Dubai · USA</span>. We partner with founders to build scalable digital infrastructure.
                            </p>
                        </motion.div>

                        {/* Navigation Columns */}
                        <div className="md:col-span-12 lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-10">
                            {Object.entries(footerLinks).map(([category, links]) => (
                                <motion.div key={category} variants={itemVariants} className="flex flex-col">
                                    <h4 className="text-[11px] font-black uppercase tracking-[0.25em] text-blue-400 mb-6">
                                        {category}
                                    </h4>
                                    <ul className="flex flex-col gap-4">
                                        {links.map((link) => (
                                            <li key={link.name}>
                                                <Link
                                                    href={link.href}
                                                    className="group text-sm font-semibold text-zinc-400 hover:text-white transition-colors duration-300 inline-flex items-center gap-1.5"
                                                >
                                                    {link.name}
                                                    <ArrowUpRight className="h-3.5 w-3.5 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 text-blue-400 transition-all duration-300" />
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Footer Bottom */}
                    <motion.div variants={itemVariants} className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
                        <p className="text-xs font-semibold tracking-widest text-zinc-500 uppercase text-center md:text-left">
                            © {new Date().getFullYear()} SCALE YOUR BUSINESS.
                        </p>
                        <div className="flex gap-6">
                            <Link href="/privacy-policy" className="text-xs font-bold tracking-widest text-zinc-500 uppercase hover:text-white transition-colors">
                                Privacy
                            </Link>
                            <Link href="/terms-of-service" className="text-xs font-bold tracking-widest text-zinc-500 uppercase hover:text-white transition-colors">
                                Terms
                            </Link>
                        </div>
                    </motion.div>
                </motion.div>
            </Container>
        </footer>
    )
}