"use client"

import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { ModernButton } from "@/components/ui/modern-button"
import { CheckCircle2, Star, Quote, ArrowRight, Zap, Globe2, ShoppingBag, Layers } from "lucide-react"
import Link from "next/link"
import { CTASection } from "@/components/home/cta-section"
import { InfiniteSlider } from "@/components/ui/infinite-slider"
import { ReasonsSection } from "@/components/website-dev/reasons-section"
import { motion, useScroll, useTransform } from "motion/react"
import { FAQAccordion } from "@/components/ui/faq-accordion"
import { useRef } from "react"
import { LiquidChrome } from "@/components/ui/liquid-chrome"
import Image from "next/image"
import { AestheticTestimonials } from "@/components/ui/aesthetic-testimonials"

/* ────────────────────────────── Scroll-powered parallax image ────────────────────────────── */

function ParallaxImage({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
    const ref = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    })
    const y = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"])

    return (
        <div ref={ref} className={`overflow-hidden rounded-3xl ${className}`}>
            <motion.div style={{ y }} className="relative w-full h-full">
                <Image
                    src={src}
                    alt={alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                />
            </motion.div>
        </div>
    )
}

/* ────────────────────────────── Feature row (alternating) ────────────────────────────── */

function FeatureSection({
    eyebrow,
    title,
    description,
    bullets,
    imageSrc,
    imageAlt,
    reverse = false,
    accent = "blue",
    delay = 0,
}: {
    eyebrow: string
    title: string
    description: string
    bullets: string[]
    imageSrc: string
    imageAlt: string
    reverse?: boolean
    accent?: string
    delay?: number
}) {
    return (
        <section className="py-20 md:py-28 bg-[var(--color-bg)] text-[var(--color-text)] relative overflow-hidden">
            <Container>
                <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${reverse ? "lg:direction-rtl" : ""}`}>
                    {/* Text side */}
                    <motion.div
                        initial={{ opacity: 0, x: reverse ? 40 : -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className={`${reverse ? "lg:order-2 lg:direction-ltr" : ""}`}
                    >
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 text-[var(--color-brand-light)]`}
                            style={{ background: "rgba(79,70,229,0.12)", border: "1px solid rgba(79,70,229,0.2)" }}>
                            {eyebrow}
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-[var(--color-text)] tracking-tight leading-[1.15] mb-5">
                            {title}
                        </h2>
                        <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed mb-8 max-w-lg">
                            {description}
                        </p>
                        <ul className="space-y-3.5">
                            {bullets.map((b, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: -15 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + i * 0.08 }}
                                    className="flex items-start gap-3 text-[var(--color-text-secondary)]"
                                >
                                    <span className={`mt-1.5 w-2 h-2 rounded-full shrink-0 bg-[var(--color-accent)]`} />
                                    <span className="text-[15px] leading-relaxed">{b}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Image side */}
                    <motion.div
                        initial={{ opacity: 0, x: reverse ? -40 : 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.15 }}
                        className={`relative aspect-[4/3] ${reverse ? "lg:order-1 lg:direction-ltr" : ""}`}
                    >
                        <ParallaxImage
                            src={imageSrc}
                            alt={imageAlt}
                            className="absolute inset-0 shadow-2xl shadow-black/40 ring-1 ring-white/10"
                        />
                    </motion.div>
                </div>
            </Container>
        </section>
    )
}

const techStack = [
    { name: "Next.js", logo: "https://cdn.simpleicons.org/nextdotjs/white" },
    { name: "React", logo: "https://cdn.simpleicons.org/react/61DAFB" },
    { name: "Vercel", logo: "https://cdn.simpleicons.org/vercel/white" },
    { name: "Cloudflare", logo: "https://cdn.simpleicons.org/cloudflare/F38020" },
    { name: "Wix", logo: "https://cdn.simpleicons.org/wix/white" },
    { name: "Shopify", logo: "https://cdn.simpleicons.org/shopify/96BF48" },
    { name: "Framer", logo: "https://cdn.simpleicons.org/framer/white" },
    { name: "Python", logo: "https://cdn.simpleicons.org/python/3776AB" },
]

const faqs = [
    {
        question: "How long does it take to build a website?",
        answer: "Typically 2–4 weeks for custom Next.js sites depending on complexity, and 1–2 weeks for Shopify or Wix Studio projects. We provide a detailed timeline before starting."
    },
    {
        question: "Will my website be SEO friendly?",
        answer: "100%. We build with semantic HTML, server-side rendering, and aim for perfect Core Web Vitals. Schema markup, GEO signals, and AEO-ready content structure are included by default."
    },
    {
        question: "Can I update content myself?",
        answer: "Yes. For custom sites we build a tailored admin panel or integrate a headless CMS like Sanity. For Shopify/Wix, you get full access to their intuitive dashboards from day one."
    },
    {
        question: "Do you offer maintenance?",
        answer: "We include 30 days of free post-launch support. Beyond that, flexible monthly retainer packages cover updates, security patches, performance monitoring, and content changes."
    }
]

const testimonials = [
    {
        quote: "Our lead count doubled within the first month. The website doesn't just look incredible — it actually converts. Best investment we've made.",
        name: "Arjun Mehta",
        role: "Founder",
        company: "NovaTech Solutions",
        avatar: "AM",
        featured: true,
    },
    {
        quote: "The Shopify store they built for us hit ₹10L in sales in the first week of launch. The checkout flow is buttery smooth.",
        name: "Priya Sharma",
        role: "CEO",
        company: "Velvet Bloom",
        avatar: "PS",
        featured: false,
    },
    {
        quote: "Zero monthly fees, lightning-fast load times, and Google loves it. Outranked our competitor in 3 weeks. Phenomenal.",
        name: "Rahul Iyer",
        role: "Marketing Head",
        company: "CoreFit India",
        avatar: "RI",
        featured: false,
    },
    {
        quote: "The Framer site they built for our studio is absolutely jaw-dropping. Clients literally message us asking about it. Pure art.",
        name: "Noor Fatima",
        role: "Creative Director",
        company: "Lumiere Studio",
        avatar: "NF",
        featured: false,
    },
    {
        quote: "We needed a website that could handle thousands of visitors during our product drops. Custom Next.js handled 50k users simultaneously without breaking a sweat.",
        name: "Karan Singh",
        role: "CTO",
        company: "DropZone",
        avatar: "KS",
        featured: false,
    },
]

const stats = [
    { value: "120+", label: "Websites Delivered" },
    { value: "4.9/5", label: "Average Rating" },
    { value: "3×", label: "Avg. Lead Increase" },
    { value: "2 Weeks", label: "Average Launch Time" },
]

export function WebDevContent() {
    const heroRef = useRef<HTMLDivElement>(null)

    return (
        <div className="bg-[var(--color-bg)]">

            {/* ─── HERO ─────────────────────────────────────────────────── */}
            <div ref={heroRef} className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">

                {/* LiquidChrome full-bleed background */}
                <div className="absolute inset-0">
                    <LiquidChrome
                        baseColor={[0.1, 0.2, 1]}
                        speed={0.3}
                        amplitude={0.31}
                        interactive={true}
                        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
                    />
                    
                    <div className="absolute inset-0 pointer-events-none bg-black/40" />
                </div>

                <Container className="relative z-10 w-full flex-1 flex flex-col items-center justify-center pt-32 pb-16">
                    <div className="max-w-6xl mx-auto px-4 sm:px-10 md:px-16 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full mb-8 text-xs sm:text-sm font-semibold text-white/90 bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl"
                        >
                            <span className="w-2 h-2 rounded-full bg-blue-500 animate-[pulse_2s_ease-in-out_infinite]" />
                            Bespoke Digital Experiences
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
                            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                            transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
                            className="text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] font-black tracking-[-0.04em] text-white leading-[0.9] text-balance mb-8"
                        >
                            WEBSITES THAT <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600 block sm:inline italic pr-2 py-2">CONVERT.</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7, duration: 0.8, ease: "easeOut" }}
                            className="max-w-3xl mx-auto text-xl md:text-2xl text-white/70 mb-12 font-medium leading-relaxed tracking-tight text-balance"
                        >
                            High-performance, ultra-fast, visually stunning web platforms designed to 
                            <span className="text-white"> captivate users</span> and 
                            <span className="text-white"> scale businesses.</span>
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.9, duration: 0.6, ease: "easeOut" }}
                            className="flex flex-col sm:flex-row gap-5 justify-center items-center"
                        >
                            <Link href="/contact" className="group relative w-full sm:w-auto px-10 py-5 bg-white text-black font-bold uppercase tracking-wider text-sm rounded-none overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.7)] text-center">
                                <span className="relative z-10 group-hover:text-blue-600 transition-colors duration-300">Start Your Project</span>
                                <div className="absolute inset-0 bg-black/5 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
                            </Link>
                            <Link href="/work" className="w-full sm:w-auto px-10 py-5 bg-transparent text-white font-bold uppercase tracking-wider text-sm rounded-none border-2 border-white/20 hover:border-white transition-colors duration-300 text-center backdrop-blur-sm">
                                View Our Work
                            </Link>
                        </motion.div>

                        {/* Trust badges */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.2, duration: 1 }}
                            className="mt-16 flex flex-wrap gap-8 justify-center items-center opacity-80"
                        >
                            {["120+ Websites Launched", "4.9★ Client Rating", "Ultra-Fast Delivery", "SEO & AEO Built-in"].map((t) => (
                                <span key={t} className="text-sm font-semibold tracking-wide text-white/80 uppercase flex items-center gap-2 glass-effect rounded-full px-4 py-2 bg-white/5 border border-white/10">
                                    <CheckCircle2 className="h-4 w-4 text-blue-500" />
                                    {t}
                                </span>
                            ))}
                        </motion.div>
                    </div>
                </Container>

                {/* Bottom fade */}
                <div className="absolute bottom-0 inset-x-0 h-32 pointer-events-none"
                    style={{ background: "linear-gradient(to bottom, transparent, var(--color-bg))" }} />
            </div>

            {/* ─── TECH SLIDER ──────────────────────────────────────────── */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 1 }}
                className="py-12 bg-black border-y border-[var(--color-border)] overflow-hidden relative"
            >
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-50 pointer-events-none" />
                <div className="absolute left-0 top-0 w-24 md:w-48 h-full bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 w-24 md:w-48 h-full bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

                <InfiniteSlider gap={64} reverse className="w-full">
                    {techStack.map((tech) => (
                        <div key={tech.name} className="flex items-center gap-4 px-2 py-2 group cursor-pointer filter grayscale hover:grayscale-0 transition-all duration-500 opacity-60 hover:opacity-100">
                            <img src={tech.logo} alt={tech.name} className="h-9 w-9 object-contain" />
                            <span className="text-xl md:text-2xl font-bold tracking-tight text-white uppercase">{tech.name}</span>
                        </div>
                    ))}
                </InfiniteSlider>
            </motion.div>

            {/* ─── ARCHITECTURAL STACK ────────────────────────────── */}
            <section className="bg-white py-32 md:py-48 relative z-20 overflow-hidden isolate border-y-[3px] border-black">
                {/* SVG Noise Overlay */}
                <div className="absolute inset-0 pointer-events-none z-[-1] opacity-[0.03] mix-blend-multiply" 
                    style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}>
                </div>

                <Container>
                    <div className="mb-24 md:mb-40 flex flex-col md:flex-row gap-10 justify-between items-start md:items-end relative z-10 w-full">
                        <motion.h2 
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            className="text-[4.5rem] md:text-[8rem] xl:text-[10rem] font-black uppercase tracking-tighter text-black leading-[0.8] selection:bg-[#3b82f6] selection:text-white"
                        >
                            The <br/> <span className="text-[#3b82f6] italic">Stack.</span>
                        </motion.h2>
                        
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                            className="max-w-md border-l-[4px] border-black pl-6 py-2"
                        >
                            <p className="text-xl md:text-2xl font-bold text-black leading-tight">
                                We don't do generic templates. We build high-performance architectural systems. Choose your engine.
                            </p>
                        </motion.div>
                    </div>

                    <div className="space-y-24 md:space-y-40 w-full relative">
                        {/* Central visual tracking line */}
                        <div className="absolute left-[30px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[4px] bg-black/5 -z-10 hidden md:block" />

                        {[
                            {
                                id: "01",
                                label: "CUSTOM-CODED",
                                title: "The Ultimate Engine.",
                                text: "Built from scratch with Next.js & React. No platform lock-in. No recurring fees. Infinite scale constraint-free.",
                                features: ["Zero monthly fees — own it outright", "API & CRM Backend Integrations", "Perfect SEO, GEO & AEO signals", "100/100 Core Web Vitals"],
                                price: "Starts at ₹45,000",
                                stats: "Next.js • React • PostgreSQL",
                                best: true
                            },
                            {
                                id: "02",
                                label: "SHOPIFY",
                                title: "E-Commerce King.",
                                text: "The undisputed heavyweight for brands that sell. Powerful inventory, one-click checkout, 8,000+ ecosystems.",
                                features: ["Custom theme architecture", "Abandoned cart upselling", "Multi-currency scaling", "Klaviyo & Review Integrations"],
                                price: "Custom Pricing",
                                stats: "Liquid • Hydrogen • Oxygen",
                                best: false
                            },
                            {
                                id: "03",
                                label: "WIX STUDIO",
                                title: "Rapid Deployment.",
                                text: "The most cost-effective way to get a professional, scroll-animated website live fast. Self-editable architecture.",
                                features: ["Fluid scroll animations", "Visual self-editing engine", "Fastest time to market", "Built-in marketing tools"],
                                price: "Starts at ₹25,000",
                                stats: "Velo • Editor X",
                                best: false
                            },
                            {
                                id: "04",
                                label: "FRAMER",
                                title: "Motion & Art.",
                                text: "Jaw-dropping immersive websites for studios, creatives, and startups that refuse to be visually ordinary.",
                                features: ["Cinematic spatial animations", "Micro-interaction engines", "Art-direction level UI", "Seamless 3D integrations"],
                                price: "Starts at ₹35,000",
                                stats: "React • Framer Motion",
                                best: false
                            }
                        ].map((plat, idx) => {
                            const isEven = idx % 2 !== 0;
                            return (
                                <motion.div 
                                    key={plat.id}
                                    initial={{ opacity: 0, y: 120 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-10%" }}
                                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                                    className={`relative flex flex-col ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'} bg-white border-[3px] border-black shadow-[12px_12px_0px_0px_#000] hover:shadow-[20px_20px_0px_0px_#3b82f6] hover:-translate-y-2 transition-all duration-500 group z-10 w-full max-w-[1400px] mx-auto`}
                                >
                                    {/* Abstract background scaling bar */}
                                    <div className={`absolute top-0 ${isEven ? 'right-full' : 'left-full'} w-[10vw] h-full bg-[#3b82f6]/10 scale-x-0 origin-${isEven ? 'right' : 'left'} transition-transform duration-[1.5s] ease-[0.16,1,0.3,1] group-hover:scale-x-100 -z-10`} />

                                    {/* Prefix Meta Panel */}
                                    <div className={`w-full lg:w-[35%] bg-black p-8 md:p-14 flex flex-col justify-between text-white relative overflow-hidden transition-colors duration-700`}>
                                        <div className="absolute inset-0 bg-[#3b82f6] scale-y-0 origin-bottom transition-transform duration-[1s] ease-[0.16,1,0.3,1] group-hover:scale-y-100 z-0" />
                                        <div className="relative z-10">
                                            <div className="text-[7rem] md:text-[10rem] font-black opacity-[0.15] tracking-tighter leading-none mb-2 md:-ml-4 group-hover:opacity-[0.35] transition-opacity duration-700 select-none">
                                                {plat.id}
                                            </div>
                                            <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mix-blend-difference">{plat.label}</h3>
                                        </div>
                                        <div className="relative z-10 mt-16 md:mt-32">
                                            <span className="block text-sm font-bold tracking-widest uppercase opacity-60 mb-3 mix-blend-difference">Core Base</span>
                                            <span className="text-xl md:text-2xl font-black tracking-tight mix-blend-difference">{plat.stats}</span>
                                        </div>
                                        
                                        {plat.best && (
                                            <div className="absolute top-6 right-6 z-10 bg-[#3b82f6] text-white px-5 py-2 text-sm font-black uppercase tracking-widest border-2 border-white shadow-[-6px_6px_0px_0px_#fff] rotate-3 group-hover:-rotate-3 group-hover:scale-110 transition-transform duration-500">
                                                Best Choice
                                            </div>
                                        )}
                                    </div>

                                    {/* Main Content Panel */}
                                    <div className="w-full lg:w-[65%] p-8 md:p-16 flex flex-col justify-center relative bg-white overflow-hidden">
                                        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-700 pointer-events-none" />

                                        <h4 className="text-4xl md:text-6xl font-black text-black tracking-tighter uppercase mb-6 leading-[0.9] group-hover:text-[#3b82f6] transition-colors duration-500 relative z-10">
                                            {plat.title}
                                        </h4>
                                        <p className="text-xl md:text-2xl font-bold text-black/70 mb-12 max-w-2xl leading-relaxed relative z-10">
                                            {plat.text}
                                        </p>

                                        <div className="grid md:grid-cols-2 gap-x-8 gap-y-6 mb-16 relative z-10">
                                            {plat.features.map((f, i) => (
                                                <div key={i} className="flex items-start gap-4">
                                                    <div className="w-6 h-6 border-[3px] border-black bg-black group-hover:bg-[#3b82f6] group-hover:border-[#3b82f6] shrink-0 flex items-center justify-center transition-colors duration-500 mt-1">
                                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4" strokeLinecap="square" strokeLinejoin="miter"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                                    </div>
                                                    <span className="text-lg font-black text-black/90 leading-tight">{f}</span>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="mt-auto pt-8 border-t-[3px] border-black/10 flex flex-col xl:flex-row items-start xl:items-center justify-between gap-8 h-full relative z-10">
                                            <div className="w-full xl:w-auto">
                                                <span className="block text-sm font-black uppercase tracking-widest text-[#3b82f6] mb-1">Pricing</span>
                                                <div className="text-4xl md:text-5xl font-black tracking-tighter text-black w-full xl:w-auto text-left">
                                                    {plat.price}
                                                </div>
                                            </div>
                                            <Link href="/contact" className="w-full xl:w-auto shrink-0 relative group/btn inline-flex items-center justify-center border-[3px] border-black bg-white px-10 py-5 font-black text-black uppercase tracking-widest overflow-hidden hover:text-white transition-colors duration-500">
                                                <span className="relative z-10 transition-colors duration-500">Select Engine</span>
                                                <div className="absolute inset-0 bg-black translate-y-[101%] transition-transform duration-500 ease-[0.16,1,0.3,1] group-hover/btn:translate-y-0 z-0" />
                                            </Link>
                                        </div>
                                    </div>
                                </motion.div>
                            )
                        })}
                    </div>
                </Container>
            </section>

            <ReasonsSection />

            {/* ─── SEO SECTION ────────────────────────────────────────────── */}
            <FeatureSection
                eyebrow="SEO Optimized Architecture"
                title="Rank higher. Get found. Drive organic traffic that converts."
                description="We don't build standard brochure websites — we engineer search-optimized platforms that establish your topical authority and capture high-intent traffic across every stage of the buyer journey."
                bullets={[
                    "Deep technical SEO & site speed optimization",
                    "AEO-ready content structure for AI overviews",
                    "On-page SEO: metadata, schema markup, and advanced taxonomy",
                    "Flawless core web vitals and crawling hygiene",
                ]}
                imageSrc="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
                imageAlt="SEO analytics dashboard showing growth"
            />

            {/* ─── FAQs ─────────────────────────────────────────────────── */}
            <section className="py-24 bg-[var(--color-bg)]">
                <Container>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-[var(--color-text)] mb-4">Frequently Asked Questions</h2>
                        <p className="text-[var(--color-text-secondary)]">Everything you need to know about our web development process.</p>
                    </div>
                    <FAQAccordion items={faqs} />
                </Container>
            </section>

            <AestheticTestimonials />
            <CTASection />
        </div>
    )
}
