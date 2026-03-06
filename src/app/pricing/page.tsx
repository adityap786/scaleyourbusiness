"use client"

import { Container } from "@/components/ui/container"
import Link from "next/link"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { FAQSection } from "@/components/pricing/faq-section"
import { motion, useScroll, useTransform } from "motion/react"
import { useRef } from "react"
import Head from "next/head"

const pricingTiers = [
    {
        name: "AI Automation",
        description: "Automate manual workflows and save 15+ hours/week.",
        price: "25k",
        currency: "₹",
        suffix: "Starts From",
        features: [
            "Custom n8n/Make Workflows",
            "Lead Gen Automation",
            "CRM Integration",
            "Slack/WhatsApp Alerts",
            "30 Days Support"
        ],
        cta: "Automate Now",
        href: "/ai-automation"
    },
    {
        name: "Website Build",
        description: "High-performance Next.js sites that convert visitors.",
        price: "45k",
        currency: "₹",
        suffix: "Starts From",
        features: [
            "Next.js 16 + Tailwind",
            "SEO Optimization",
            "CMS Integration",
            "Google Analytics 4",
            "Hosting Setup",
            "Performance Score 95+"
        ],
        cta: "Start Build",
        popular: true,
        href: "/website-development"
    },
    {
        name: "SaaS MVP",
        description: "Go from idea to launched product in 4 weeks.",
        price: "3L",
        currency: "₹",
        suffix: "Starts From",
        features: [
            "Full-Stack React/Node",
            "Auth & Database",
            "Payment Gateway",
            "Admin Dashboard",
            "Mobile Responsive",
            "Source Code Ownership"
        ],
        cta: "Launch Startup",
        href: "/saas-development"
    }
]

export default function PricingPage() {
    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    })

    const headerY = useTransform(scrollYProgress, [0, 0.2], [0, -100]);
    const headerOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

    return (
        <div className="bg-[#f0f0f0] min-h-screen selection:bg-black selection:text-white" ref={containerRef}>
            <Head>
                <title>Pricing Packages | Scale Your Business</title>
                <meta name="description" content="Transparent pricing for Web Development, AI Automation, and SaaS builds. Starter packages from ₹25,000." />
            </Head>
            <Header />

            <main className="relative z-10 w-full">
                {/* Hero Section */}
                <motion.section 
                    className="relative min-h-[75vh] flex flex-col items-center justify-center pt-40 pb-20 px-6 md:px-12 bg-[#f0f0f0]"
                    style={{ y: headerY, opacity: headerOpacity }}
                >
                    {/* Noise Filter */}
                    <div className="absolute inset-0 pointer-events-none z-0" 
                         style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22 opacity=%220.03%22 mix-blend-mode=%22multiply%22/%3E%3C/svg%3E")' }}>
                    </div>

                    <div className="relative z-10 max-w-6xl mx-auto text-center w-full mt-12 md:mt-0">
                        <motion.h1 
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                            className="text-[4rem] md:text-[6.5rem] lg:text-[7.5rem] font-black tracking-tighter text-black leading-none uppercase mb-8"
                        >
                            Transparent <br/>
                            <span className="text-[#3b82f6] italic">Pricing.</span>
                        </motion.h1>

                        <motion.div 
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                            className="mt-12"
                        >
                            <div className="h-[3px] w-16 bg-black mx-auto mb-8"></div>
                            <p className="text-xl md:text-2xl text-black/80 font-medium max-w-2xl mx-auto leading-relaxed">
                                We believe in honest, outcome-based pricing. Choose the package that fits your growth stage. No surprises.
                            </p>
                        </motion.div>
                    </div>
                </motion.section>

                {/* Side-by-side Cards Grid */}
                <section className="relative z-20 bg-[#f0f0f0] pb-32 pt-12 isolate">
                    <Container>
                        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative items-stretch">
                            {pricingTiers.map((tier, index) => (
                                <PricingCard key={tier.name} tier={tier} index={index} />
                            ))}
                        </div>
                    </Container>
                </section>

                {/* Social Impact / Donation (Dark Mode Section) */}
                <section className="bg-black text-white relative py-32 overflow-hidden shadow-[0_-20px_50px_rgba(0,0,0,0.2)] z-30">
                    <div className="absolute inset-0 bg-[#3b82f6] scale-y-0 origin-bottom transition-transform duration-[1.5s] hover:scale-y-100 mix-blend-multiply pointer-events-none" />
                    <Container>
                        <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">
                            <motion.div 
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="inline-flex items-center justify-center p-6 bg-white/5 rounded-full mb-12 border-2 border-white/20 text-[#3b82f6] shadow-[0_0_30px_rgba(59,130,246,0.3)] hover:shadow-[0_0_50px_rgba(59,130,246,0.5)] transition-shadow duration-500"
                            >
                                <svg className="w-10 h-10 fill-current" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                            </motion.div>
                            
                            <motion.h2 
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-10 leading-[0.9]"
                            >
                                When You Grow,<br/><span className="text-[#3b82f6]">They Grow Too.</span>
                            </motion.h2>

                            <motion.p 
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                className="text-xl md:text-3xl font-light text-white/80 leading-relaxed max-w-3xl"
                            >
                                We donate <span className="font-bold text-white border-b-4 border-[#3b82f6] pb-1 mx-1">10% of our revenue</span> to underprivileged children's education.
                            </motion.p>
                        </div>
                    </Container>
                </section>

                <section className="bg-white py-32 relative z-20">
                    <Container>
                        <div className="max-w-4xl mx-auto">
                            <div className="mb-16">
                                <h2 className="text-5xl md:text-6xl font-black text-black uppercase tracking-tighter mb-6">Questions?</h2>
                                <div className="h-[6px] w-24 bg-[#3b82f6]"></div>
                            </div>
                            <div className="prose prose-lg max-w-none prose-headings:font-black prose-headings:uppercase prose-p:font-medium prose-p:text-black/80">
                                <FAQSection />
                            </div>
                        </div>
                        
                        <div className="mt-32 p-12 bg-white border-[3px] border-black relative overflow-hidden group shadow-[12px_12px_0px_0px_#000] hover:-translate-y-2 transition-transform duration-500 max-w-5xl mx-auto">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#3b82f6] rounded-full blur-[100px] opacity-10 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none"></div>
                            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10 text-center md:text-left">
                                <div>
                                    <h3 className="text-4xl font-black text-black uppercase tracking-tight mb-4 leading-none">Need an enterprise pack?</h3>
                                    <p className="text-xl text-black/80 font-semibold mb-0">Bespoke architecture, dedicated teams, unlimited scale.</p>
                                </div>
                                <Link href="/contact" className="group/btn relative inline-flex w-full md:w-auto shrink-0 items-center justify-center overflow-hidden border-[3px] border-black bg-[#3b82f6] px-10 py-5 text-white font-black text-lg uppercase tracking-widest transition-transform hover:-translate-y-1">
                                    <span className="relative z-10 transition-colors group-hover/btn:text-black">Contact Custom Team</span>
                                    <div className="absolute inset-0 -translate-y-full bg-white transition-transform duration-500 ease-[0.16,1,0.3,1] group-hover/btn:translate-y-0 z-0"></div>
                                </Link>
                            </div>
                        </div>
                    </Container>
                </section>

            </main>
            <Footer />
        </div>
    )
}

function PricingCard({ tier, index }: { tier: any, index: number }) {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
            className={`relative flex flex-col bg-white border-[3px] transition-all duration-500 overflow-hidden group 
                ${tier.popular 
                    ? 'border-black shadow-[10px_10px_0px_0px_#3b82f6] lg:-mt-4 lg:mb-4 z-10' 
                    : 'border-black/20 hover:border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,0.1)] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]'
                }
            `}
        >
            {/* Hover Background Shift */}
            <div className={`absolute top-0 left-0 w-full h-[6px] ${tier.popular ? 'bg-black' : 'bg-[#3b82f6]'} scale-x-0 origin-left transition-transform duration-500 ease-[0.16,1,0.3,1] group-hover:scale-x-100 z-20`}></div>

            {/* Information Section (Top) */}
            <div className="p-8 flex flex-col border-b-[3px] border-black/10 bg-[#fdfdfd] relative h-[220px]">
                {tier.popular && (
                    <div className="absolute top-0 right-0 bg-[#3b82f6] text-white px-4 py-1.5 text-xs font-black uppercase tracking-widest border-b-[3px] border-l-[3px] border-black shadow-[-4px_4px_0px_0px_rgba(0,0,0,1)]">
                        Most Popular
                    </div>
                )}
                <h3 className="text-3xl lg:text-4xl font-black text-black tracking-tighter mb-3 mt-4 leading-[1] uppercase group-hover:text-[#3b82f6] transition-colors duration-500">
                    {tier.name}
                </h3>
                <p className="text-base text-black/70 font-semibold leading-relaxed mt-auto">
                    {tier.description}
                </p>
            </div>

            {/* Features (Middle) */}
            <div className="p-8 flex-1 flex flex-col relative bg-white">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-700 pointer-events-none"></div>
                <ul className="space-y-4 relative z-10 w-full">
                    {tier.features.map((feature: string, i: number) => (
                        <li key={i} className="flex items-start gap-4 text-base font-bold text-black/80 group-hover:text-black transition-colors">
                            <span className="mt-0.5 w-5 h-5 flex items-center justify-center border-[2px] border-black shrink-0 text-white bg-black group-hover:bg-[#3b82f6] group-hover:border-[#3b82f6] transition-colors">
                                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="square" strokeLinejoin="miter"><polyline points="20 6 9 17 4 12"></polyline></svg>
                            </span>
                            <span className="leading-tight">{feature}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Price & CTA (Bottom) */}
            <div className="p-8 flex flex-col border-t-[3px] border-black/10 bg-[#fdfdfd] mt-auto">
                <div className="mb-8 flex flex-col">
                    <span className="text-xs font-black uppercase tracking-widest text-black/40 group-hover:text-[#3b82f6] mb-1 transition-colors">{tier.suffix}</span>
                    <div className="flex items-start">
                        <span className="text-xl font-black text-black mt-2 mr-1">{tier.currency}</span>
                        <span className="text-5xl lg:text-6xl font-black text-black tracking-tighter leading-none">{tier.price}</span>
                    </div>
                </div>
                
                <Link href={tier.href} className={`w-full relative group/btn inline-flex items-center justify-center overflow-hidden border-[3px] border-black ${tier.popular ? 'bg-black text-white' : 'bg-white text-black'} px-4 py-4 font-black uppercase tracking-widest transition-transform hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(59,130,246,1)]`}>
                    <span className={`relative z-10 transition-colors ${tier.popular ? 'group-hover/btn:text-black' : 'group-hover/btn:text-white'}`}>{tier.cta}</span>
                    <div className={`absolute inset-0 -translate-y-full ${tier.popular ? 'bg-[#3b82f6]' : 'bg-[#3b82f6]'} transition-transform duration-500 ease-[0.16,1,0.3,1] group-hover/btn:translate-y-0 z-0`}></div>
                </Link>
            </div>
        </motion.div>
    )
}
