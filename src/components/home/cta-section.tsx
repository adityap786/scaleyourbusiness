"use client"

import { Container } from "@/components/ui/container"
import { motion, useScroll, useTransform } from "motion/react"
import { useState, useRef } from "react"
import { CheckCircle2, ArrowRight } from "lucide-react"

const benefits = [
    "Free 30-minute strategy call",
    "Custom roadmap for your project",
    "Transparent pricing — no surprises",
    "Delivered in weeks, not months",
]

export function CTASection() {
    const [form, setForm] = useState({ name: "", email: "", service: "", message: "" })
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
    
    const containerRef = useRef<HTMLElement>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    })

    const yBackground = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"])
    const scaleImage = useTransform(scrollYProgress, [0, 1], [0.95, 1.05])
    const yForm = useTransform(scrollYProgress, [0, 1], [100, -100])

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setStatus("loading")
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            })
            if (res.ok) {
                setStatus("success")
                setForm({ name: "", email: "", service: "", message: "" })
            } else {
                setStatus("error")
            }
        } catch {
            setStatus("error")
        }
    }

    return (
        <section 
            id="cta"
            ref={containerRef}
            className="relative py-32 md:py-48 bg-[#FAFAFA] overflow-hidden selection:bg-brand selection:text-white"
        >
            {/* Massive Watermark Typography */}
            <motion.div 
                style={{ y: yBackground }}
                className="absolute top-10 md:-top-10 left-[-5%] w-[110%] flex flex-col pointer-events-none select-none opacity-[0.03] z-0"
            >
                <span className="text-[15vw] font-black leading-none tracking-tighter whitespace-nowrap uppercase">
                    Scale Up
                </span>
                <span className="text-[15vw] font-black leading-none tracking-tighter whitespace-nowrap uppercase ml-[10vw]">
                    Scale Up
                </span>
            </motion.div>

            {/* Grain Texture */}
            <div 
                className="absolute inset-0 z-0 pointer-events-none opacity-[0.4] mix-blend-overlay"
                style={{ backgroundImage: "url('/noise.svg')", backgroundRepeat: 'repeat' }}
            />

            <Container className="relative z-10 max-w-7xl">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-start">
                    
                    {/* Left Typography Space */}
                    <div className="lg:col-span-5 relative mt-12 lg:mt-24">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <span className="inline-block px-4 py-1.5 rounded-full text-[10px] md:text-xs font-bold tracking-widest uppercase text-brand bg-brand/5 border border-brand/10 mb-8 backdrop-blur-md">
                                Let&apos;s Build Together
                            </span>
                            
                            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-neutral-900 mb-8 leading-[0.9]">
                                Ready to<br />
                                <span className="text-brand block mt-2">Scale?</span>
                            </h2>
                            
                            <p className="text-lg md:text-xl text-neutral-500 mb-12 max-w-sm leading-relaxed font-medium">
                                Drop us a message. We respond within 2 hours, always. Stop hesitating.
                            </p>

                            <div className="space-y-6">
                                {benefits.map((b, i) => (
                                    <motion.div
                                        key={b}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.8, delay: 0.2 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                                        className="flex items-center gap-4"
                                    >
                                        <div className="w-8 h-8 rounded-full bg-brand/5 flex items-center justify-center shrink-0">
                                            <div className="w-2 h-2 rounded-full bg-brand" />
                                        </div>
                                        <span className="text-sm md:text-base font-medium text-neutral-600 tracking-wide">{b}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Offset Form */}
                    <div className="lg:col-span-6 lg:col-start-7 lg:-mt-24">
                        <motion.div 
                            style={{ y: yForm }}
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                            className="relative"
                        >
                            {/* Blur ambient drop */}
                            <div className="absolute -inset-10 bg-brand/5 rounded-[40px] blur-3xl -z-10 opacity-50" />
                            
                            <form
                                onSubmit={handleSubmit}
                                className="relative bg-white/70 backdrop-blur-2xl p-8 md:p-12 rounded-[2rem] border border-white/20 shadow-2xl space-y-8"
                            >
                                {status === "success" ? (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="text-center py-20"
                                    >
                                        <div className="h-24 w-24 mx-auto rounded-full bg-brand/5 flex items-center justify-center mb-6">
                                            <CheckCircle2 className="h-10 w-10 text-brand" />
                                        </div>
                                        <h3 className="text-3xl font-black text-neutral-900 mb-4 tracking-tight">Got It!</h3>
                                        <p className="text-neutral-500 font-medium">
                                            We&apos;ll get back to you within 2 hours.
                                        </p>
                                    </motion.div>
                                ) : (
                                    <>
                                        <div className="grid md:grid-cols-2 gap-8">
                                            <div className="space-y-3">
                                                <label className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest ml-1">Name</label>
                                                <input
                                                    type="text"
                                                    required
                                                    value={form.name}
                                                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                                                    className="w-full px-5 py-4 rounded-2xl bg-white/50 border border-neutral-200/50 text-neutral-900 placeholder:text-neutral-400 text-sm focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand/40 transition-all duration-300 shadow-sm"
                                                    placeholder="John Doe"
                                                />
                                            </div>
                                            <div className="space-y-3">
                                                <label className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest ml-1">Email</label>
                                                <input
                                                    type="email"
                                                    required
                                                    value={form.email}
                                                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                                                    className="w-full px-5 py-4 rounded-2xl bg-white/50 border border-neutral-200/50 text-neutral-900 placeholder:text-neutral-400 text-sm focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand/40 transition-all duration-300 shadow-sm"
                                                    placeholder="john@company.com"
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-3">
                                            <label className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest ml-1">Service</label>
                                            <div className="relative">
                                                <select
                                                    value={form.service}
                                                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                                                    className="w-full px-5 py-4 rounded-2xl bg-white/50 border border-neutral-200/50 text-neutral-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand/40 transition-all duration-300 shadow-sm appearance-none cursor-pointer"
                                                >
                                                    <option value="" disabled className="text-neutral-400">Select area of interest...</option>
                                                    <option value="website">Website Development</option>
                                                    <option value="app">App Development</option>
                                                    <option value="saas">SaaS Development</option>
                                                    <option value="ai">AI Automation</option>
                                                    <option value="content">Content Writing</option>
                                                </select>
                                                <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none">
                                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-neutral-400">
                                                        <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="space-y-3">
                                            <label className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest ml-1">Message</label>
                                            <textarea
                                                rows={4}
                                                required
                                                value={form.message}
                                                onChange={(e) => setForm({ ...form, message: e.target.value })}
                                                className="w-full px-5 py-4 rounded-2xl bg-white/50 border border-neutral-200/50 text-neutral-900 placeholder:text-neutral-400 text-sm focus:outline-none focus:ring-2 focus:ring-brand/20 focus:border-brand/40 transition-all duration-300 shadow-sm resize-none"
                                                placeholder="Tell us about your next project..."
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={status === "loading"}
                                            className="w-full group relative overflow-hidden py-5 rounded-2xl bg-brand font-bold text-white text-sm tracking-wide shadow-xl shadow-brand/20 hover:shadow-2xl hover:shadow-brand/40 transition-all duration-500 disabled:opacity-60"
                                        >
                                            <motion.div 
                                                className="absolute inset-0 bg-white/20"
                                                initial={{ scale: 0, opacity: 0 }}
                                                whileHover={{ scale: 1.5, opacity: 1 }}
                                                transition={{ duration: 0.4 }}
                                                style={{ originX: 0.5, originY: 0.5, borderRadius: '100%' }}
                                                key="hover-overlay"
                                            />
                                            <span className="relative flex items-center justify-center gap-3">
                                                {status === "loading" ? "Sending..." : "Send Message"}
                                                {status !== "loading" && (
                                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                                )}
                                            </span>
                                        </button>
                                    </>
                                )}
                            </form>
                        </motion.div>
                    </div>
                </div>
            </Container>
        </section>
    )
}
