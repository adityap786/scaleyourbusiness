"use client"

import { Container } from "@/components/ui/container"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { motion, useScroll, useTransform, useSpring } from "motion/react"
import { useRef } from "react"
import Head from "next/head"

const projects = [
    {
        client: "Peak Nutrition",
        category: "Brand Transformation",
        services: ["Web Design", "Packaging", "Brand Strategy"],
        description: "Transforming an offline supplement brand into a premium D2C powerhouse with redesigned packaging and online presence.",
        href: "/work/peak-nutrition",
        color: "bg-lime-600"
    },
    {
        client: "Doner & Gyros India",
        category: "Business Development",
        services: ["Next.js", "Marketing", "GMB", "Lead Gen"],
        description: "End-to-end business development for a Mediterranean QSR — from influencer marketing to centralized ordering across 30+ outlets.",
        href: "/work/doner-gyros-india",
        color: "bg-orange-600"
    },
    {
        client: "Just Smile Hospitality",
        category: "Authority Building",
        services: ["Web Design", "Trust Architecture", "SEO"],
        description: "Building professional credibility for a corporate & luxury catering service through a website that commands enterprise trust.",
        href: "/work/just-smile-catering",
        color: "bg-amber-600"
    },
    {
        client: "Amrapali Real Estate",
        category: "AI Automation",
        services: ["n8n", "LangChain", "Groq LLM", "CRM"],
        description: "AI-powered lead capturing, qualifying, and nurturing system that processes leads from every channel and escalates hot prospects to sales.",
        href: "/work/amrapali-ai-leads",
        color: "bg-cyan-700"
    },
    {
        client: "Lead Scraper Extension",
        category: "Product Development",
        services: ["Chrome Extension", "Scraping", "Node.js"],
        description: "Fast, reliable browser extension that scrapes hyper-targeted business leads by niche and location for digital agencies.",
        href: "/work/lead-scraper-extension",
        color: "bg-violet-600"
    },
    {
        client: "Agency-Client Portal",
        category: "SaaS Product",
        services: ["Next.js", "AI Analytics", "CRM"],
        description: "Dual-dashboard portal for agencies to manage tasks, SOPs, and deliverables while clients track progress and raise tickets.",
        href: "/work/agency-client-portal",
        color: "bg-rose-600"
    },
    {
        client: "Healthcare & Telemedicine",
        category: "Web App & Cybersecurity",
        services: ["Telemedicine App", "HIPAA Audit", "AI Triage"],
        description: "Built a secure, HIPAA-compliant telemedicine web app with AI-driven patient triage and comprehensive cybersecurity audits.",
        href: "/work/healthcare-telemedicine",
        color: "bg-teal-600"
    },
    {
        client: "Beauty & Cosmetics",
        category: "AI Creatives & Web App",
        services: ["Virtual Try-On", "AI Ad Creatives", "Next.js"],
        description: "Developed an AR-powered virtual try-on web app and automated AI creative generation pipeline that reduced ad spend by 40%.",
        href: "/work/beauty-cosmetics-ai",
        color: "bg-pink-500"
    },
    {
        client: "Enterprise E-commerce",
        category: "App Dev & SaaS",
        services: ["Mobile App", "Custom ERP", "Security Audit"],
        description: "Scaled a high-volume D2C brand with a custom React Native app, headless Next.js storefront, and a bespoke SaaS inventory management system.",
        href: "/work/enterprise-ecommerce",
        color: "bg-indigo-600"
    },
    {
        client: "EdTech & E-Learning",
        category: "SaaS & AI Automation",
        services: ["LMS SaaS", "AI Grading", "Cloud Architecture"],
        description: "Engineered a scalable SaaS learning management system featuring AI-automated grading and personalized learning paths for 100k+ students.",
        href: "/work/edtech-saas",
        color: "bg-blue-600"
    },
    {
        client: "Marketing Studios",
        category: "AI Automation & SaaS",
        services: ["Client Dashboard", "AI Copywriting", "API Integrations"],
        description: "Built a white-labeled SaaS client portal with integrated AI automation for campaign reporting and creative asset generation.",
        href: "/work/marketing-studio-automation",
        color: "bg-purple-600"
    }
]

export default function WorkPage() {
    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    })

    const smoothProgress = useSpring(scrollYProgress, { stiffness: 50, damping: 20 })

    return (
        <div className="bg-[#fafafa] selection:bg-black selection:text-white">
            <Head>
                <title>Our Work & Case Studies | Scale Your Business</title>
                <meta name="description" content="Browse our portfolio of high-performance websites, SaaS products, and AI automation systems built for clients in India and Dubai." />
            </Head>
            <Header />
            
            <main ref={containerRef} className="relative z-10 w-full overflow-hidden">
                
                {/* Immersive Entry Sequence */}
                <section className="relative min-h-screen flex flex-col justify-center pb-24 pt-32 px-6 md:px-12 lg:px-24">
                    {/* Background Noise/Grid overlay for spatial depth */}
                    <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03] mix-blend-multiply" 
                         style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}>
                    </div>
                    
                    <div className="relative z-10 max-w-6xl mt-12 md:mt-24">
                        <motion.div 
                            initial={{ opacity: 0, y: 100, rotateX: 20 }}
                            animate={{ opacity: 1, y: 0, rotateX: 0 }}
                            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                            className="origin-bottom pb-4"
                        >
                            <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-black tracking-tighter text-black leading-none uppercase">
                                Work That<br/>
                                <span className="text-[#3b82f6] italic">Drives</span> Revenue
                            </h1>
                        </motion.div>
                        
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                            className="mt-8 md:mt-16 max-w-xl md:ml-auto md:mr-24"
                        >
                            <div className="h-[2px] w-16 bg-black/80 mb-8"></div>
                            <p className="text-xl md:text-2xl text-black/80 font-light leading-relaxed">
                                We don&apos;t do "pretty" for the sake of it. Every project is engineered for a specific business outcome—leads, sales, or efficiency.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Vertical Staggered Deep Scroll Timeline */}
                <section className="relative w-full pb-48 px-4 md:px-12 lg:px-24 bg-white z-20">
                    <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#fafafa] to-white pointer-events-none z-10"></div>
                    
                    <div className="max-w-7xl mx-auto relative pt-24">
                        
                        {/* Central Animated Axis */}
                        <div className="absolute left-[30px] md:left-1/2 top-0 bottom-0 w-[1px] bg-black/10 origin-top hidden md:block" />
                        
                        <motion.div 
                            style={{ scaleY: smoothProgress }}
                            className="absolute left-[30px] md:left-1/2 top-0 bottom-0 w-[2px] bg-[#3b82f6] origin-top z-20 hidden md:block"
                        />

                        {projects.map((project, index) => {
                            const isEven = index % 2 === 0;
                            return (
                                <ProjectNode 
                                    key={project.client} 
                                    project={project} 
                                    index={index} 
                                    isEven={isEven} 
                                />
                            )
                        })}

                    </div>
                </section>

                {/* Massive CTA Reveal at bottom */}
                <section className="relative h-screen bg-black flex items-center justify-center overflow-hidden">
                    <motion.div 
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                        className="text-center z-10 px-6"
                    >
                        <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter mb-8">
                            READY TO SCALE?
                        </h2>
                        <Link href="/contact" className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-white px-10 py-5 text-black font-bold text-xl uppercase tracking-widest transition-transform hover:scale-105 active:scale-95">
                            <span className="relative z-10 transition-colors group-hover:text-white">Start a Project</span>
                            <div className="absolute inset-0 -translate-y-full bg-[#3b82f6] transition-transform duration-500 ease-out group-hover:translate-y-0 z-0"></div>
                        </Link>
                    </motion.div>
                </section>

            </main>
            <Footer />
        </div>
    )
}

function ProjectNode({ project, index, isEven }: { project: any, index: number, isEven: boolean }) {
    const nodeRef = useRef<HTMLDivElement>(null);

    return (
        <motion.div 
            ref={nodeRef}
            initial={{ opacity: 0, y: 150 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "-100px", once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`relative flex flex-col md:flex-row items-center w-full mb-32 md:mb-56 ${isEven ? 'md:justify-start' : 'md:justify-end'}`}
        >
            
            {/* Center Node Dot (Desktop) */}
            <div className="absolute left-[30px] md:left-1/2 md:-translate-x-1/2 w-8 h-8 rounded-full border-[3px] border-[#3b82f6] bg-white z-30 hidden md:flex items-center justify-center transition-all duration-500 shadow-[0_0_15px_rgba(59,130,246,0.4)]">
                <div className="w-3 h-3 rounded-full bg-[#3b82f6]" />
            </div>

            {/* Asymmetrical Floating Card */}
            <div className={`relative w-full md:w-[45%] group z-10 pl-16 md:pl-0 ${isEven ? 'md:pr-24 lg:pr-32' : 'md:pl-24 lg:pl-32'}`}>
                <Link href={project.href} className="block">
                    {/* Abstract Spatial Box - Replacing standard soft shadow cards */}
                    <div className="relative bg-white border-2 border-black transition-all duration-500 group-hover:border-[#3b82f6] overflow-hidden min-h-[400px] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group-hover:shadow-[8px_8px_0px_0px_rgba(59,130,246,1)] group-hover:-translate-y-2">
                        
                        {/* Hover reveal electric accent */}
                        <div className="absolute top-0 left-0 w-full h-[4px] bg-[#3b82f6] scale-x-0 origin-left transition-transform duration-700 ease-out group-hover:scale-x-100 z-20"></div>

                        <div className="relative z-10 p-8 md:p-12 h-full flex flex-col justify-between">
                            
                            <div className="overflow-hidden">
                                <div className="flex justify-between items-start mb-8">
                                    <div className="font-mono text-sm uppercase tracking-widest text-[#3b82f6] font-bold">
                                        [ {project.category} ]
                                    </div>
                                    <div className="w-10 h-10 rounded-full border-2 border-black flex items-center justify-center overflow-hidden group-hover:border-[#3b82f6] group-hover:bg-[#3b82f6] transition-all duration-300">
                                        <ArrowUpRight className="h-5 w-5 text-black group-hover:text-white transition-colors" />
                                    </div>
                                </div>

                                <h3 className="text-4xl md:text-5xl font-black text-black tracking-tighter mb-6 leading-none group-hover:text-[#3b82f6] transition-all duration-500 ease-out">
                                    {project.client}
                                </h3>

                                <p className="text-black text-lg md:text-xl leading-relaxed font-semibold mb-12 max-w-sm">
                                    {project.description}
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-x-6 gap-y-2 mt-auto pt-6 border-t-2 border-black/20 group-hover:border-[#3b82f6]/30 transition-colors">
                                {project.services.map((service: string, i: number) => (
                                    <span key={i} className="text-xs uppercase tracking-widest font-black text-black group-hover:text-[#3b82f6] transition-colors delay-[${i * 100}ms]">
                                        {service}
                                    </span>
                                ))}
                            </div>

                        </div>
                    </div>
                </Link>
            </div>
        </motion.div>
    )
}
