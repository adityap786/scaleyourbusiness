"use client"

import { Container } from "@/components/ui/container"
import { motion, useScroll, useTransform } from "motion/react"
import { useRef } from "react"
import Link from "next/link"
import dynamic from "next/dynamic"
import { AestheticTestimonials } from "@/components/ui/aesthetic-testimonials"
import { CTASection } from "@/components/home/cta-section"
import { FAQAccordion } from "@/components/ui/faq-accordion"
import { ArrowRight } from "lucide-react"
import { DecryptedText } from "@/components/ui/DecryptedText"

const LightPillar = dynamic(() => import("@/components/ui/light-pillar"), { ssr: false })

const CYBER_SERVICES = [
    {
        id: "01",
        label: "ASSESSMENT",
        title: "Vulnerability Assessment",
        text: "Identify weaknesses in your infrastructure before attackers do.",
        features: [
            "Network Security Audits",
            "Application Vulnerability Scanning",
            "Security Risk Reports",
            "Infrastructure Weakness Detection",
            "Remediation Recommendations",
            "Compliance Preparation"
        ],
        price: "Starting from ₹45k",
        stats: "Web • Apps • Networks",
        best: true
    },
    {
        id: "02",
        label: "RED TEAM",
        title: "Penetration Testing",
        text: "Simulated real-world attacks to test the strength of your systems.",
        features: [
            "Web Application Pen Testing",
            "API Security Testing",
            "Network Penetration Testing",
            "Manual Exploit Simulation",
            "Threat Surface Analysis",
            "Detailed Security Reporting"
        ],
        price: "Starting from ₹75k",
        stats: "Black Box • Gray Box",
        best: false
    },
    {
        id: "03",
        label: "HARDENING",
        title: "Website & Application Security",
        text: "Protect your websites and apps against modern cyber threats.",
        features: [
            "OWASP Security Hardening",
            "Authentication Security",
            "Input Validation Protection",
            "Secure Deployment Setup",
            "API Security Controls",
            "Continuous Monitoring Setup"
        ],
        price: "Starting from ₹55k",
        stats: "OWASP • Zero-Day Defense",
        best: false
    },
    {
        id: "04",
        label: "INFRASTRUCTURE",
        title: "Security Infrastructure Setup",
        text: "Build a secure digital foundation for your business systems.",
        features: [
            "Firewall Configuration",
            "Access Control Systems",
            "Secure Cloud Infrastructure",
            "Identity & Role Management",
            "Security Monitoring Tools",
            "Incident Response Setup"
        ],
        price: "Starting from ₹95k",
        stats: "AWS • Azure • Local Server",
        best: false
    },
    {
        id: "05",
        label: "MONITORING",
        title: "Continuous Security Monitoring",
        text: "Ongoing monitoring and threat detection for growing businesses.",
        features: [
            "Real-Time Threat Monitoring",
            "Security Event Logging",
            "Attack Detection Alerts",
            "Server Security Monitoring",
            "Regular Security Audits",
            "Incident Response Support"
        ],
        price: "Starting from ₹15k / month",
        stats: "24/7 Security Uptime",
        best: false
    }
]

const faqs = [
    {
        question: "Why does my company need penetration testing?",
        answer: "As your user base and infrastructure grow, so does your attack surface. Penetration testing identifies business logic flaws and vulnerabilities before malicious actors exploit them, preventing costly data breaches and reputation damage."
    },
    {
        question: "What is Gray-Box vs Black-Box testing?",
        answer: "Black-box testing simulates an external attack where the tester has no prior knowledge of the system. Gray-box testing is when the tester is provided partial knowledge or user-level access to find vulnerabilities that only authenticated users can see."
    },
    {
        question: "How long does a security assessment take?",
        answer: "A standard web or mobile application penetration test usually takes 1 to 3 weeks, depending on the complexity of the application, followed by a detailed remediation report."
    },
    {
        question: "Do you help fix the vulnerabilities?",
        answer: "Yes. We don't just hand you a PDF. We provide actionable remediation steps, code-level recommendations, and offer re-testing once your development team has applied the patches."
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

    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': faqs.map(faq => ({
            '@type': 'Question',
            'name': faq.question,
            'acceptedAnswer': {
                '@type': 'Answer',
                'text': faq.answer
            }
        }))
    }

    return (
        <main className="bg-white selection:bg-black selection:text-white pb-0">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            {/* HERO SECTION */}
            <section ref={heroRef} className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 overflow-hidden bg-[#000511] text-white isolate border-b-[3px] border-black">
                {/* Background Noise & Abstract SVG */}
                <div className="absolute inset-0 pointer-events-none z-[-1]"
                    style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22 opacity=%220.08%22 mix-blend-mode=%22overlay%22/%3E%3C/svg%3E")' }}>
                </div>

                <div className="absolute top-[20%] lg:right-[10%] w-[300px] lg:w-[600px] h-[300px] lg:h-[600px] bg-[#3b82f6] rounded-full blur-[100px] opacity-10 mix-blend-screen pointer-events-none animate-pulse"></div>

                {/* LightPillar Background */}
                <div className="absolute inset-0 pointer-events-none z-0 mix-blend-screen">
                    <LightPillar
                        topColor="#0033FF"
                        bottomColor="#000000"
                        intensity={0.8}
                        rotationSpeed={0.2}
                        glowAmount={0.003}
                        pillarWidth={4}
                        pillarHeight={0.5}
                        noiseIntensity={0.6}
                        pillarRotation={0}
                        interactive={false}
                        quality="high"
                    />
                </div>

                <Container className="relative z-10 w-full flex-1 flex flex-col justify-center mt-12 md:mt-0">
                    <motion.div style={{ y: heroY, opacity: heroOpacity }} className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-end justify-between gap-12">

                        <div className="flex-1 text-center lg:text-left">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                                className="inline-flex items-center gap-3 px-4 py-2 border-[2px] border-white/10 bg-white/5 backdrop-blur-sm mb-8"
                            >
                                <div className="w-2 h-2 bg-[#3b82f6] shadow-[0_0_10px_#3b82f6] animate-pulse"></div>
                                <span className="text-xs font-black uppercase tracking-widest text-[#3b82f6]">Enterprise Defense</span>
                            </motion.div>

                            <motion.h1
                                initial={{ y: 50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                                className="text-[3.5rem] md:text-[6.5rem] lg:text-[8rem] font-black uppercase tracking-tighter leading-[0.85] mb-8"
                            >
                                <DecryptedText text="UNBREAKABLE" speed={60} maxIterations={12} animateOn="view" className="block" />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/40 italic"><DecryptedText text="SECURITY." speed={60} maxIterations={12} animateOn="view" /></span>
                            </motion.h1>

                            <motion.p
                                initial={{ y: 30, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                className="text-xl md:text-2xl font-medium text-white/60 max-w-2xl leading-relaxed mx-auto lg:mx-0 mb-10"
                            >
                                <DecryptedText text="Advanced risk assessment, targeted payload mapping, and zero-day threat elimination designed for high-growth enterprises." speed={20} maxIterations={5} animateOn="view" />
                            </motion.p>

                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start"
                            >
                                <Link href="/contact" className="group relative inline-flex items-center justify-center border-[3px] border-[#3b82f6] bg-[#3b82f6] px-10 py-5 font-black uppercase tracking-widest text-white w-full sm:w-auto hover:shadow-[10px_10px_0px_rgba(255,255,255,0.1)] hover:-translate-y-1 transition-all duration-500 overflow-hidden">
                                    <span className="relative z-10 group-hover:text-black transition-colors duration-500 text-base">Secure Your Stack</span>
                                    <div className="absolute inset-0 bg-white translate-y-[101%] transition-transform duration-500 ease-[0.16,1,0.3,1] group-hover:translate-y-0 z-0"></div>
                                </Link>
                                <div className="flex items-center gap-4 text-white/50 hidden sm:flex">
                                    <div className="w-[2px] h-12 bg-white/10 hidden md:block"></div>
                                    <p className="text-sm font-bold max-w-[200px] leading-snug">Elite Penetration Testing & Defense Setup in India</p>
                                </div>
                            </motion.div>
                        </div>

                        {/* Visual Right Side Elements */}
                        <motion.div
                            initial={{ x: 50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                            className="hidden lg:flex flex-col gap-6 shrink-0 w-[400px] relative z-10"
                        >
                            <div className="border-[2px] border-white/5 bg-white/5 backdrop-blur-md p-6 relative overflow-hidden group">
                                <div className="absolute inset-0 bg-gradient-to-tr from-[#3b82f6]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                                <h3 className="text-white font-black tracking-widest uppercase text-sm mb-4 border-b-[2px] border-white/10 pb-4">Security Vectors</h3>
                                <ul className="space-y-3">
                                    <li className="flex items-center justify-between font-mono text-xs text-white/70">
                                        <span>[01] Network Audit</span>
                                        <span className="text-[#3b82f6] font-bold">ACTIVE</span>
                                    </li>
                                    <li className="flex items-center justify-between font-mono text-xs text-white/70">
                                        <span>[02] Web/App Pentest</span>
                                        <span className="text-[#3b82f6] font-bold">READY</span>
                                    </li>
                                    <li className="flex items-center justify-between font-mono text-xs text-white/70">
                                        <span>[03] Architecture Hardening</span>
                                        <span className="text-[#3b82f6] font-bold">READY</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="border-[2px] border-[#3b82f6]/30 bg-[#3b82f6]/5 p-6 backdrop-blur-md">
                                <p className="text-white/80 font-mono text-sm leading-relaxed">
                                    <span className="text-[#3b82f6] font-black">{"> "}</span>
                                    Don't wait for a breach. We proactively simulate attacks to expose vulnerabilities before hackers exploit them.
                                    <span className="animate-pulse shadow-[0_0_5px_#3b82f6]">_</span>
                                </p>
                            </div>
                        </motion.div>

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
                            <DecryptedText text="DEFENSE" speed={60} maxIterations={10} animateOn="view" className="block" />
                            <span className="text-[#3b82f6] italic"><DecryptedText text="MATRIX." speed={60} maxIterations={10} animateOn="view" /></span>
                        </motion.h2>
                        <p className="text-xl font-bold uppercase tracking-widest text-black/40 hidden md:block">Core Services</p>
                    </div>

                    <div className="space-y-24 md:space-y-40 w-full relative">
                        {/* Central visual tracking line */}
                        <div className="absolute left-[30px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[4px] bg-black/5 -z-10 hidden md:block" />

                        {CYBER_SERVICES.map((srv, idx) => {
                            const isEven = idx % 2 !== 0;
                            return (
                                <motion.div
                                    key={srv.id}
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
                                                {srv.id}
                                            </div>
                                            <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mix-blend-difference">{srv.label}</h3>
                                        </div>
                                        <div className="relative z-10 mt-16 md:mt-32">
                                            <span className="block text-sm font-bold tracking-widest uppercase opacity-60 mb-3 mix-blend-difference">Coverage</span>
                                            <span className="text-xl md:text-2xl font-black tracking-tight mix-blend-difference">{srv.stats}</span>
                                        </div>

                                        {srv.best && (
                                            <div className="absolute top-6 right-6 z-10 bg-[#3b82f6] text-white px-5 py-2 text-sm font-black uppercase tracking-widest border-2 border-white shadow-[-6px_6px_0px_0px_#fff] rotate-3 group-hover:-rotate-3 group-hover:scale-110 transition-transform duration-500">
                                                Best Choice
                                            </div>
                                        )}
                                    </div>

                                    {/* Main Content Panel */}
                                    <div className="w-full lg:w-[65%] p-8 md:p-16 flex flex-col justify-center relative bg-white overflow-hidden">
                                        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-700 pointer-events-none" />

                                        <h4 className="text-4xl md:text-5xl font-black text-black tracking-tighter uppercase mb-4 leading-[1.1] group-hover:text-[#3b82f6] transition-colors duration-500 relative z-10">
                                            {srv.title}
                                        </h4>
                                        <p className="text-xl md:text-2xl font-bold text-black/70 mb-12 max-w-2xl leading-relaxed relative z-10">
                                            {srv.text}
                                        </p>

                                        <div className="grid md:grid-cols-2 gap-x-8 gap-y-6 mb-16 relative z-10">
                                            {srv.features.map((f, i) => (
                                                <div key={i} className="flex items-start gap-3">
                                                    <div className="w-6 h-6 border-[3px] border-black bg-black group-hover:bg-[#3b82f6] group-hover:border-[#3b82f6] shrink-0 flex items-center justify-center transition-colors duration-500 mt-0.5">
                                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4" strokeLinecap="square" strokeLinejoin="miter"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                                    </div>
                                                    <span className="text-lg font-black text-black/90 leading-tight">{f}</span>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="mt-auto pt-8 border-t-[3px] border-black/10 flex flex-col xl:flex-row items-start xl:items-center justify-between gap-8 h-full relative z-10">
                                            <div className="w-full xl:w-auto">
                                                <span className="block text-sm font-black uppercase tracking-widest text-[#3b82f6] mb-1">Pricing</span>
                                                <div className="text-4xl md:text-4xl font-black tracking-tighter text-black w-full xl:w-auto text-left">
                                                    {srv.price}
                                                </div>
                                            </div>
                                            <Link href="/contact" className="w-full xl:w-auto shrink-0 relative group/btn inline-flex items-center justify-center border-[3px] border-black bg-white px-8 py-5 font-black text-black uppercase tracking-widest overflow-hidden hover:text-white transition-colors duration-500">
                                                <span className="relative z-10 transition-colors duration-500 text-[15px]">Explore Security Services</span>
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

            {/* FAQs */}
            <section className="py-32 bg-[#F8FAFB] border-t-[3px] border-black">
                <Container>
                    <div className="grid md:grid-cols-2 gap-16 items-start">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-black mb-6">
                                Security<br />Questions.
                            </h2>
                            <p className="text-lg text-black/60 font-bold mb-8 max-w-md">
                                Don't see what you're looking for? Reach out to our security engineers directly.
                            </p>
                        </div>
                        <div className="bg-white border-[3px] border-black p-8 shadow-[8px_8px_0px_0px_#000]">
                            <FAQAccordion items={faqs} />
                        </div>
                    </div>
                </Container>
            </section>

            {/* ─── INTERNAL LINKS ───────────────────────────────────────── */}
            <section className="py-16 bg-white border-t-[3px] border-black">
                <Container>
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                        <div>
                            <h3 className="text-2xl font-black text-black mb-2 uppercase tracking-tighter">Build it Secure</h3>
                            <p className="text-black/60 font-bold max-w-xl">Need a platform rebuilt from scratch with security-first architecture?</p>
                        </div>
                        <div className="flex gap-4">
                            <Link href="/web-development" className="text-sm font-black uppercase tracking-widest text-[#3b82f6] hover:text-black transition-colors flex items-center gap-2">
                                Web Development <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                </Container>
            </section>

            {/* AESTHETIC TESTIMONIALS */}
            <AestheticTestimonials />

            {/* CUSTOM CTA SECTION */}
            <section className="bg-black text-white py-32 relative z-20 overflow-hidden border-t-[8px] border-[#3b82f6]">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-[0.2] pointer-events-none"></div>
                <Container className="relative z-10">
                    <div className="max-w-5xl mx-auto text-center">
                        <motion.h2
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter mb-8 leading-[0.9]"
                        >
                            Secure Your Business <br /> <span className="text-[#3b82f6] italic">Infrastructure.</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-xl md:text-3xl font-bold text-white/70 max-w-3xl mx-auto mb-16 leading-relaxed"
                        >
                            Talk to our security experts to identify vulnerabilities and protect your digital systems.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            <Link href="/contact" className="group relative inline-flex items-center justify-center border-[4px] border-[#3b82f6] bg-[#3b82f6] px-12 py-6 font-black uppercase tracking-widest text-white overflow-hidden hover:shadow-[16px_16px_0px_#fff] hover:-translate-y-2 transition-all duration-500 w-full md:w-auto">
                                <span className="relative z-10 group-hover:text-[#3b82f6] transition-colors duration-500 text-xl">Start Security Audit</span>
                                <div className="absolute inset-0 bg-white translate-y-[101%] transition-transform duration-500 ease-[0.16,1,0.3,1] group-hover:translate-y-0 z-0"></div>
                            </Link>
                        </motion.div>
                    </div>
                </Container>
            </section>
        </main>
    )
}
