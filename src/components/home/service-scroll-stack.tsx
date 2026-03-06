"use client"

import { useRef } from "react"
import { ArrowRight, Globe, Zap, Search, Gauge, Bot, Workflow, Clock, Sparkles, ShieldAlert, Lock, Server, Smartphone, Layers, Megaphone, Video, TrendingUp, Users, RefreshCw } from "lucide-react"
import { motion } from "motion/react"
import Link from "next/link"
import { Player } from "@remotion/player"
import { WebsiteServiceComposition } from "../../../remotion/compositions/WebsiteService"
import { PhoneMockup, MockupChatUI } from "@/components/ui/phone-mockup"
import Image from "next/image"

// ─── Card 1 — Website Development ─────────────────────────────────────────────
const webFeatures = [
    { icon: Zap, title: "Lightning Fast", desc: "Sub-second loads via Next.js static generation & edge caching." },
    { icon: Search, title: "Built-in SEO", desc: "Schema markup, sitemaps, and Core Web Vitals baked in from day one." },
    { icon: Gauge, title: "95+ Lighthouse", desc: "No bloated plugins. Every site ships with a perfect performance score." },
]

function WebsiteCard() {
    return (
        <div className="relative w-full h-full flex flex-col lg:flex-row items-center gap-0 overflow-hidden rounded-[2.5rem] bg-[var(--color-bg)] border border-[var(--color-border)] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)]">
            <div className="relative z-10 flex flex-col justify-center px-8 lg:px-16 py-12 lg:py-0 lg:w-[50%] h-full">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] md:text-[11px] font-bold tracking-[0.2em] uppercase text-[var(--color-brand)] bg-[var(--color-brand)]/10 border border-[var(--color-brand)]/20 mb-6 w-fit">
                    <Globe className="w-3.5 h-3.5" />
                    Website Architecture
                </span>
                <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-black tracking-tight text-[var(--color-text)] mb-6 leading-[1.05] uppercase">
                    Websites That<br />
                    <span
                        className="bg-clip-text text-transparent"
                        style={{ backgroundImage: "linear-gradient(90deg,var(--color-brand),var(--color-accent))" }}
                    >
                        Convert Cold Traffic
                    </span>
                </h2>
                <p className="text-sm md:text-base lg:text-lg text-[var(--color-text-muted)] mb-10 max-w-md leading-relaxed font-medium">
                    Most websites are digital brochures. We build high-converting sales engines engineered with buyer psychology and blazing-fast architecture to turn clicks into reliable revenue.
                </p>

                <div className="space-y-4 mb-10">
                    {webFeatures.map((f, i) => (
                        <motion.div
                            key={f.title}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.12, duration: 0.5 }}
                            className="flex items-start gap-4 group"
                        >
                            <div className="h-10 w-10 rounded-xl bg-[var(--color-bg-soft)] border border-[var(--color-border)] flex items-center justify-center shrink-0 group-hover:bg-[var(--color-brand)] group-hover:border-[var(--color-brand)] transition-all duration-400">
                                <f.icon className="h-4 w-4 text-[var(--color-brand)] group-hover:text-white transition-colors duration-400" />
                            </div>
                            <div>
                                <p className="text-sm md:text-base font-bold text-[var(--color-text)]">{f.title}</p>
                                <p className="text-xs text-[var(--color-text-muted)] leading-relaxed mt-0.5 font-medium">{f.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="flex flex-wrap items-center gap-4">
                    <Link href="/website-development" className="inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-[var(--color-brand)] hover:opacity-90 text-white text-xs md:text-sm font-black uppercase tracking-wider w-fit transition-all duration-300 shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:shadow-[0_0_30px_rgba(79,70,229,0.5)] group z-20">
                        View Web Dev
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-transparent border-2 border-[var(--color-border)] hover:border-[var(--color-text)] text-[var(--color-text)] text-xs md:text-sm font-black uppercase tracking-wider w-fit transition-all duration-300 z-20">
                        Consult Instantly
                    </Link>
                </div>
            </div>

            <div className="relative lg:w-[50%] h-full hidden lg:flex items-center justify-center bg-[var(--color-bg-soft)] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-brand)]/5 via-transparent to-[var(--color-accent)]/5 pointer-events-none" />
                <div className="relative w-[85%] max-w-[420px] aspect-[4/3] rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg)] flex flex-col items-center justify-center gap-3 shadow-2xl overflow-hidden">
                    <div className="absolute inset-0 opacity-20">
                        <div className="w-full h-full" style={{
                            backgroundImage: "linear-gradient(var(--color-border) 1px,transparent 1px),linear-gradient(90deg,var(--color-border) 1px,transparent 1px)",
                            backgroundSize: "40px 40px"
                        }} />
                    </div>
                    <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none mix-blend-multiply opacity-80">
                        <Player
                            component={WebsiteServiceComposition}
                            durationInFrames={300}
                            fps={60}
                            compositionWidth={1200}
                            compositionHeight={800}
                            style={{ width: "100%", height: "100%", objectFit: "cover" }}
                            loop autoPlay controls={false}
                        />
                    </div>
                </div>

                <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[20%] right-[5%] h-16 w-16 rounded-2xl bg-white border border-[var(--color-border)] flex flex-col items-center justify-center shadow-xl">
                    <span className="text-xl font-black text-green-500">99</span>
                    <span className="text-[8px] font-bold text-[var(--color-text-muted)] uppercase tracking-wider">Perf.</span>
                </motion.div>
                <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-[20%] left-[5%] px-4 py-2 rounded-xl bg-white border border-[var(--color-border)] text-xs font-black text-[var(--color-brand)] shadow-xl tracking-wider">
                    ⚡ Next.js
                </motion.div>
            </div>
        </div>
    )
}

// ─── Card 2 — SaaS / App Development ─────────────────────────────────────────────
const appFeatures = [
    { icon: Smartphone, title: "Native Feel, Infinite Scale", desc: "Cross-platform mobile apps with silky 60fps animations." },
    { icon: Layers, title: "SaaS Architecture", desc: "Microservices and multi-tenant databases built to handle millions." },
    { icon: Zap, title: "Habit-Forming UX", desc: "Behavioral design principles that keep your users coming back." },
]

function AppDevCard() {
    return (
        <div className="relative w-full h-full flex flex-col lg:flex-row items-center gap-0 overflow-hidden rounded-[2.5rem] bg-[var(--color-bg)] border border-[var(--color-border)] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)]">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-[0.03] pointer-events-none mix-blend-multiply" />

            <div className="relative z-10 flex flex-col justify-center px-8 lg:px-16 py-12 lg:py-0 lg:w-[50%] h-full">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] md:text-[11px] font-bold tracking-[0.2em] uppercase text-cyan-600 bg-cyan-600/10 border border-cyan-600/20 mb-6 w-fit">
                    <Smartphone className="w-3.5 h-3.5" />
                    Custom Software
                </span>
                <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-black tracking-tight text-[var(--color-text)] mb-6 leading-[1.05] uppercase">
                    Apps That<br />
                    <span
                        className="bg-clip-text text-transparent"
                        style={{ backgroundImage: "linear-gradient(90deg, #06b6d4, #3b82f6)" }}
                    >
                        Become Habits
                    </span>
                </h2>
                <p className="text-sm md:text-base lg:text-lg text-[var(--color-text-muted)] mb-10 max-w-md leading-relaxed font-medium">
                    Stop building tools no one uses. We engineer frictionless, habit-forming software with enterprise-grade architecture that your users will refuse to live without.
                </p>

                <div className="space-y-4 mb-10">
                    {appFeatures.map((f, i) => (
                        <motion.div
                            key={f.title}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.12, duration: 0.5 }}
                            className="flex items-start gap-4 group"
                        >
                            <div className="h-10 w-10 rounded-xl bg-[var(--color-bg-soft)] border border-[var(--color-border)] flex items-center justify-center shrink-0 group-hover:bg-cyan-500 group-hover:border-cyan-500 transition-all duration-400">
                                <f.icon className="h-4 w-4 text-cyan-600 group-hover:text-white transition-colors duration-400" />
                            </div>
                            <div>
                                <p className="text-sm md:text-base font-bold text-[var(--color-text)]">{f.title}</p>
                                <p className="text-xs text-[var(--color-text-muted)] leading-relaxed mt-0.5 font-medium">{f.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="flex flex-wrap items-center gap-4">
                    <Link href="/saas-development" className="inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-cyan-600 hover:opacity-90 text-white text-xs md:text-sm font-black uppercase tracking-wider w-fit transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] group z-20">
                        View SaaS Dev
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-transparent border-2 border-[var(--color-border)] hover:border-[var(--color-text)] text-[var(--color-text)] text-xs md:text-sm font-black uppercase tracking-wider w-fit transition-all duration-300 z-20">
                        Consult Instantly
                    </Link>
                </div>
            </div>

            <div className="relative lg:w-[50%] h-full hidden lg:flex items-center justify-center overflow-hidden bg-[#0A0A0A]">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle,rgba(6,182,212,0.15),transparent_60%)] pointer-events-none" />

                <motion.div animate={{ scale: [1, 1.05, 1], opacity: [0.6, 0.8, 0.6] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute left-[5%] top-[20%] w-[200px] h-[200px] bg-[#D9FA50]/30 blur-[70px] rounded-full z-0" />
                <div className="absolute top-[30%] left-[10%] w-14 h-14 rounded-full bg-[#D9FA50] flex items-center justify-center shadow-[0_0_40px_rgba(217,250,80,0.4)] z-10">
                    <Users className="w-6 h-6 text-[#111]" />
                </div>

                <motion.div animate={{ scale: [1, 1.05, 1], opacity: [0.6, 0.8, 0.6] }} transition={{ duration: 4, delay: 2, repeat: Infinity, ease: "easeInOut" }} className="absolute right-[-2%] bottom-[15%] w-[250px] h-[250px] bg-[#8B5CF6]/30 blur-[80px] rounded-full z-0" />
                <div className="absolute bottom-[20%] right-[10%] w-14 h-14 rounded-full bg-[#8B5CF6] flex items-center justify-center shadow-[0_0_40px_rgba(139,92,246,0.4)] z-10">
                    <RefreshCw className="w-6 h-6 text-white" />
                </div>

                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="relative z-20 origin-bottom scale-[0.9] lg:scale-[1.0] translate-y-20 shadow-[0_0_60px_rgba(0,0,0,0.5)] rounded-[3.5rem] border-4 border-white/5"
                >
                    <PhoneMockup color="dark">
                        <MockupChatUI />
                    </PhoneMockup>
                </motion.div>
            </div>
        </div>
    )
}


// ─── Card 3 — Cybersecurity ──────────────────────────────────────────────────
const cyberFeatures = [
    { icon: ShieldAlert, title: "Zero-Day Defense", desc: "Proactive threat hunting before vulnerabilities are exploited." },
    { icon: Lock, title: "Military-Grade Encryption", desc: "End-to-end encryption for your most sensitive customer data." },
    { icon: Server, title: "24/7 SOC Monitoring", desc: "Continuous surveillance and incident response by elite teams." },
]

function CyberCard() {
    return (
        <div className="relative w-full h-full flex flex-col lg:flex-row items-center gap-0 overflow-hidden rounded-[2.5rem] bg-black border border-white/10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)]">
            <div className="absolute inset-0 bg-red-500/[0.02] pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(239, 68, 68, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(239, 68, 68, 0.05) 1px, transparent 1px)", backgroundSize: "30px 30px" }} />

            <div className="relative z-10 flex flex-col justify-center px-8 lg:px-16 py-12 lg:py-0 lg:w-[50%] h-full">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] md:text-[11px] font-bold tracking-[0.2em] uppercase text-red-500 bg-red-500/10 border border-red-500/20 mb-6 w-fit">
                    <ShieldAlert className="w-3.5 h-3.5" />
                    Offensive Security
                </span>
                <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-black tracking-tight text-white mb-6 leading-[1.05] uppercase">
                    Don't Be<br />
                    <span
                        className="bg-clip-text text-transparent"
                        style={{ backgroundImage: "linear-gradient(90deg,#EF4444,#F97316)" }}
                    >
                        Tomorrow's Headline
                    </span>
                </h2>
                <p className="text-sm md:text-base lg:text-lg text-white/60 mb-10 max-w-md leading-relaxed font-medium">
                    A single breach erases years of trust in seconds. We deploy elite offensive security teams to shatter your defenses internally, patching critical vulnerabilities before they explode.
                </p>

                <div className="space-y-4 mb-10">
                    {cyberFeatures.map((f, i) => (
                        <motion.div
                            key={f.title}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.12, duration: 0.5 }}
                            className="flex items-start gap-4 group"
                        >
                            <div className="h-10 w-10 rounded-xl bg-red-500/5 border border-red-500/20 flex items-center justify-center shrink-0 group-hover:bg-red-600 group-hover:border-red-600 transition-all duration-400">
                                <f.icon className="h-4 w-4 text-red-500 group-hover:text-white transition-colors duration-400" />
                            </div>
                            <div>
                                <p className="text-sm md:text-base font-bold text-white/90">{f.title}</p>
                                <p className="text-xs text-white/50 leading-relaxed mt-0.5 font-medium">{f.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="flex flex-wrap items-center gap-4">
                    <Link href="/cybersecurity" className="inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-red-600 hover:opacity-90 text-white text-xs md:text-sm font-black uppercase tracking-wider w-fit transition-all duration-300 shadow-[0_0_20px_rgba(239,68,68,0.3)] hover:shadow-[0_0_30px_rgba(239,68,68,0.5)] group z-20">
                        View Security
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-transparent border-2 border-white/20 hover:border-white text-white text-xs md:text-sm font-black uppercase tracking-wider w-fit transition-all duration-300 z-20">
                        Consult Instantly
                    </Link>
                </div>
            </div>

            <div className="relative lg:w-[50%] h-full hidden lg:flex items-center justify-center overflow-hidden bg-black/50">
                <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none" />

                <motion.div initial={{ opacity: 0, scale: 1.05 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1, ease: "easeOut" }} className="absolute inset-0 z-0">
                    <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-60 mix-blend-screen" poster="https://res.cloudinary.com/dl4mlw1dl/video/upload/so_2,w_800,q_auto,f_jpg/v1772459204/Cinematic_4k_documentarystyle_hero_video_a_senior__8a9c7c508c_pr4gy6.jpg">
                        <source src="https://res.cloudinary.com/dl4mlw1dl/video/upload/w_960,q_auto:good,f_webm,vc_vp9/v1772459204/Cinematic_4k_documentarystyle_hero_video_a_senior__8a9c7c508c_pr4gy6.webm" type="video/webm" />
                        <source src="https://res.cloudinary.com/dl4mlw1dl/video/upload/w_960,q_auto:good,vc_h264/v1772459204/Cinematic_4k_documentarystyle_hero_video_a_senior__8a9c7c508c_pr4gy6.mp4" type="video/mp4" />
                    </video>
                </motion.div>

                <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 0.6 }} viewport={{ once: true }} className="absolute z-20 right-[10%] bottom-[15%] bg-black/80 backdrop-blur-xl border border-red-500/40 p-5 rounded-xl font-mono text-xs text-red-400 shadow-2xl">
                    <div className="flex items-center gap-2 border-b border-red-500/30 pb-3 mb-3">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
                        <span className="text-white font-bold tracking-widest uppercase">THREAT INTERCEPTED</span>
                    </div>
                    <div className="space-y-1.5 opacity-90 text-[10px] md:text-xs">
                        <p>{`>`} connection attempt from 182.44.xx.xx</p>
                        <p>{`>`} analyzing payload signature...</p>
                        <p>{`>`} <span className="text-white">MATCH: CVE-2023-XXXX</span></p>
                        <p className="text-green-400">{`>`} BLOCK RULE APPLIED (0.012ms)</p>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

// ─── Card 4 — AI Solutions ──────────────────────────────────────────────────
const aiTasks = [
    { task: "Lead Follow-ups", saved: "4 hrs/week", icon: Bot },
    { task: "Invoice Gen", saved: "3 hrs/week", icon: Workflow },
    { task: "Support Triage", saved: "8 hrs/week", icon: Clock },
]

function AICard() {
    return (
        <div className="relative w-full h-full flex flex-col lg:flex-row items-center gap-0 overflow-hidden rounded-[2.5rem] bg-[#050505] border border-white/10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)]">
            <div className="absolute top-0 left-[30%] w-96 h-96 bg-[radial-gradient(ellipse,rgba(79,70,229,0.1),transparent_70%)] pointer-events-none" />
            <div className="absolute bottom-0 right-[20%] w-72 h-72 bg-[radial-gradient(ellipse,rgba(16,185,129,0.1),transparent_70%)] pointer-events-none" />

            <div className="relative z-10 flex flex-col justify-center px-8 lg:px-16 py-12 lg:py-0 lg:w-[50%] h-full">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] md:text-[11px] font-bold tracking-[0.2em] uppercase text-[#34D399] bg-[#10B981]/10 border border-[#10B981]/20 mb-6 w-fit">
                    <Sparkles className="w-3.5 h-3.5" />
                    AI Automation
                </span>
                <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-black tracking-tight text-white mb-6 leading-[1.05] uppercase">
                    Stop Doing<br />
                    <span
                        className="bg-clip-text text-transparent"
                        style={{ backgroundImage: "linear-gradient(90deg,#34D399,#3B82F6)" }}
                    >
                        Robotic Work
                    </span>
                </h2>
                <p className="text-sm md:text-base lg:text-lg text-white/60 mb-10 max-w-md leading-relaxed font-medium">
                    Stop burning human capital on repetitive tasks. We deploy custom LLM agents and autonomous workflows that run 24/7, permanently eliminating operational bottlenecks.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-10">
                    <div className="p-4 md:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                        <div className="text-2xl md:text-3xl font-black text-white">15+</div>
                        <div className="text-[10px] md:text-xs font-bold text-white/40 uppercase tracking-widest mt-1">Hrs Saved/Wk</div>
                    </div>
                    <div className="p-4 md:p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                        <div className="text-2xl md:text-3xl font-black text-white">24/7</div>
                        <div className="text-[10px] md:text-xs font-bold text-white/40 uppercase tracking-widest mt-1">Always Active</div>
                    </div>
                </div>

                <div className="flex flex-wrap items-center gap-4">
                    <Link href="/ai-automation" className="inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-[#10B981] hover:opacity-90 text-white text-xs md:text-sm font-black uppercase tracking-wider w-fit transition-all duration-300 shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] group z-20">
                        View AI systems
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-transparent border-2 border-white/20 hover:border-white text-white text-xs md:text-sm font-black uppercase tracking-wider w-fit transition-all duration-300 z-20">
                        Consult Instantly
                    </Link>
                </div>
            </div>

            <div className="relative lg:w-[50%] h-full hidden lg:flex items-center justify-center overflow-hidden">
                <div className="absolute left-0 inset-y-0 w-24 pointer-events-none z-10 bg-gradient-to-r from-[#050505] to-transparent" />
                <div className="absolute bottom-0 inset-x-0 h-24 pointer-events-none z-10 bg-gradient-to-t from-[#050505] to-transparent" />

                <div className="absolute inset-0 overflow-hidden opacity-90 mix-blend-screen mix-blend-plus-lighter">
                    <iframe
                        src="https://my.spline.design/nexbotrobotcharacterconcept-y7jbaYpO8YA7CLvIkrh1K18n/"
                        loading="lazy"
                        frameBorder="0"
                        title="AI Robot"
                        className="w-[140%] h-[140%] -ml-[10%] -mt-[20%] border-0 opacity-80"
                    />
                </div>

                <div className="absolute bottom-10 right-10 z-20 space-y-3 w-56">
                    {aiTasks.map((item, i) => (
                        <motion.div
                            key={item.task}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 + i * 0.12 }}
                            className="flex items-center justify-between p-3.5 rounded-xl bg-black/80 backdrop-blur-xl border border-white/20 shadow-2xl"
                        >
                            <div className="flex items-center gap-3">
                                <item.icon className="h-4 w-4 text-[#3B82F6]" />
                                <span className="text-[11px] font-bold text-white tracking-wide">{item.task}</span>
                            </div>
                            <span className="text-[10px] font-black text-[#34D399] bg-[#10B981]/20 px-2 py-1 rounded-md">{item.saved}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}

// ─── Card 5 — Marketing Services ─────────────────────────────────────────────
const marketingFeatures = [
    { icon: Video, title: "Viral Scripts & Content", desc: "Retention-engineered short form that dominates algorithms." },
    { icon: Megaphone, title: "Creator Networks", desc: "Authentic UGC through real handles for microscopic CPAs." },
    { icon: TrendingUp, title: "Predictable ROAS", desc: "Data-driven media buying that mathematically scales MRR." },
]

function MarketingCard() {
    return (
        <div className="relative w-full h-full flex flex-col lg:flex-row items-center gap-0 overflow-hidden rounded-[2.5rem] bg-[var(--color-bg)] border border-[var(--color-border)] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)]">
            <div className="absolute inset-0 bg-fuchsia-500/[0.02] pointer-events-none" />

            <div className="relative z-10 flex flex-col justify-center px-8 lg:px-16 py-12 lg:py-0 lg:w-[50%] h-full">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] md:text-[11px] font-bold tracking-[0.2em] uppercase text-fuchsia-600 bg-fuchsia-600/10 border border-fuchsia-600/20 mb-6 w-fit">
                    <TrendingUp className="w-3.5 h-3.5" />
                    Growth & Traffic
                </span>
                <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-black tracking-tight text-[var(--color-text)] mb-6 leading-[1.05] uppercase">
                    Influence &
                    <span
                        className="bg-clip-text text-transparent drop-shadow-sm ml-2 md:ml-0 md:block"
                        style={{ backgroundImage: "linear-gradient(90deg,#D946EF,#8B5CF6)" }}
                    >
                        Dominate
                    </span>
                </h2>
                <p className="text-sm md:text-base lg:text-lg text-[var(--color-text-muted)] mb-10 max-w-md leading-relaxed font-medium">
                    Attention is the only currency that matters. We engineer hook-driven content and brutal data-backed media buying strategies to flood your funnels.
                </p>

                <div className="space-y-4 mb-10">
                    {marketingFeatures.map((f, i) => (
                        <motion.div
                            key={f.title}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.12, duration: 0.5 }}
                            className="flex items-start gap-4 group"
                        >
                            <div className="h-10 w-10 rounded-xl bg-fuchsia-600/5 border border-fuchsia-600/20 flex items-center justify-center shrink-0 group-hover:bg-fuchsia-600 group-hover:border-fuchsia-600 transition-all duration-400">
                                <f.icon className="h-4 w-4 text-fuchsia-600 group-hover:text-white transition-colors duration-400" />
                            </div>
                            <div>
                                <p className="text-sm md:text-base font-bold text-[var(--color-text)]">{f.title}</p>
                                <p className="text-xs text-[var(--color-text-muted)] leading-relaxed mt-0.5 font-medium">{f.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="flex flex-wrap items-center gap-4">
                    <Link href="/marketing-services" className="inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-fuchsia-600 hover:opacity-90 text-white text-xs md:text-sm font-black uppercase tracking-wider w-fit transition-all duration-300 shadow-[0_0_20px_rgba(217,70,239,0.3)] hover:shadow-[0_0_30px_rgba(217,70,239,0.5)] group z-20">
                        Scale Audiences
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-transparent border-2 border-[var(--color-border)] hover:border-[var(--color-text)] text-[var(--color-text)] text-xs md:text-sm font-black uppercase tracking-wider w-fit transition-all duration-300 z-20">
                        Consult Instantly
                    </Link>
                </div>
            </div>

            <div className="relative lg:w-[50%] h-full hidden lg:flex items-center justify-center overflow-hidden bg-[var(--color-bg-soft)]">
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-bg)] via-transparent to-transparent z-10" />

                <div className="absolute inset-0 opacity-[0.6] mix-blend-multiply overflow-hidden rounded-r-[2.5rem] border-l border-[var(--color-border)]">
                    <Image
                        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop"
                        alt="Data Graph"
                        fill
                        className="object-cover hue-rotate-[-45deg] contrast-125 saturate-[1.5]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)] via-transparent to-transparent opacity-90" />
                </div>

                <motion.div initial={{ y: -20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }} className="absolute z-20 left-[10%] top-[25%] bg-white/90 backdrop-blur-xl border border-fuchsia-500/20 p-5 rounded-2xl shadow-2xl">
                    <p className="text-[10px] uppercase font-black text-fuchsia-600 tracking-widest mb-2">CPA Reduced</p>
                    <div className="flex items-end gap-2 text-black">
                        <span className="text-4xl font-black">-42%</span>
                        <TrendingUp className="w-6 h-6 text-green-500 pb-1" />
                    </div>
                </motion.div>

                <motion.div initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 0.6 }} className="absolute z-20 right-[15%] bottom-[20%] bg-white/90 backdrop-blur-xl border border-fuchsia-500/20 p-5 rounded-2xl shadow-2xl">
                    <p className="text-[10px] uppercase font-black text-fuchsia-600 tracking-widest mb-2">Blended ROAS</p>
                    <div className="flex items-end gap-3 text-black">
                        <span className="text-4xl font-black">4.8x</span>
                        <div className="flex gap-1.5 pb-2">
                            {[1, 2, 3].map(i => <div key={i} className="w-2 h-4 bg-green-500 rounded-sm" />)}
                            <div className="w-2 h-5 bg-fuchsia-500 rounded-sm" />
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

// ─── Scroll Stack Wrapper ───────────────────────────────────────────────────
const CARDS = [
    { id: "web", Component: WebsiteCard },
    { id: "app", Component: AppDevCard },
    { id: "cyber", Component: CyberCard },
    { id: "ai", Component: AICard },
    { id: "marketing", Component: MarketingCard },
]

export function ServiceScrollStack() {
    return (
        <section className="relative bg-[var(--color-bg)] w-full py-24 md:py-32" id="services">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 mb-16 text-center">
                <span className="inline-block px-4 py-1.5 rounded-full text-xs font-black tracking-widest uppercase text-[var(--color-brand)] bg-[var(--color-brand)]/10 border border-[var(--color-brand)]/20 mb-6">
                    Our Core Services
                </span>
                <h2 className="text-[clamp(3rem,6vw,5.5rem)] font-black tracking-tighter text-[var(--color-text)] leading-[1] uppercase">
                    Built to{" "}
                    <span
                        className="bg-clip-text text-transparent"
                        style={{ backgroundImage: "linear-gradient(90deg,var(--color-brand),var(--color-accent))" }}
                    >
                        Scale You
                    </span>
                </h2>
            </div>
            
            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 pb-[25vh] flex flex-col gap-[8vh] lg:gap-[12vh]">
                {CARDS.map(({ id, Component }, i) => (
                    <StickyCard key={id} index={i} total={CARDS.length}>
                        <Component />
                    </StickyCard>
                ))}
            </div>
        </section>
    )
}

function StickyCard({ index, total, children }: { index: number, total: number, children: React.ReactNode }) {
    return (
        <div 
            className="sticky w-full h-[75vh] min-h-[600px] max-h-[850px] flex items-center justify-center transform-gpu"
            style={{ 
                top: `calc(10vh + ${index * 40}px)`, 
                zIndex: index + 10 
            }}
        >
            <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="w-full h-full origin-top"
            >
                {children}
            </motion.div>
        </div>
    )
}
