"use client"

import { Container } from "@/components/ui/container"
import { motion } from "motion/react"
import { useState } from "react"
import { CheckCircle2, ArrowUpRight } from "lucide-react"

const benefits = [
    "Free 30-minute strategy call",
    "Custom roadmap for your project",
    "Transparent pricing — no surprises",
    "Delivered in weeks, not months",
]

const MarqueeText = () => {
    return (
        <div className="absolute top-[15%] w-[120%] -left-[10%] overflow-hidden flex whitespace-nowrap opacity-[0.04] z-0 pointer-events-none select-none -rotate-2">
            <motion.div
                className="flex gap-16 text-[12vw] font-black uppercase tracking-tighter leading-none"
                initial={{ x: "0%" }}
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            >
                <span>READY TO SCALE</span>
                <span className="text-transparent" style={{ WebkitTextStroke: "3px #000" }}>BUILD YOUR EMPIRE</span>
                <span>READY TO SCALE</span>
                <span className="text-transparent" style={{ WebkitTextStroke: "3px #000" }}>BUILD YOUR EMPIRE</span>
                <span>READY TO SCALE</span>
            </motion.div>
        </div>
    )
}

const AmbientBackground = () => {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            <motion.div
                initial={{ scale: 1, x: 0, y: 0 }}
                animate={{
                    scale: [1, 1.2, 1],
                    x: [0, 50, 0],
                    y: [0, 50, 0],
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-[10%] right-[0%] w-[500px] h-[500px] bg-brand/15 rounded-full blur-[120px]"
            />
            <motion.div
                initial={{ scale: 1, x: 0, y: 0 }}
                animate={{
                    scale: [1, 1.5, 1],
                    x: [0, -60, 0],
                    y: [0, -80, 0],
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute bottom-[-10%] right-[15%] w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[100px]"
            />
            {/* Grain Texture removed as noise.svg is missing */}
        </div>
    )
}

import { getDeviceId } from '@/lib/device'

export function CTASection() {
    const [form, setForm] = useState({ name: "", email: "", phone: "", website: "", areaOfInterest: "", budget: "", projectDetails: "" })
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (form.projectDetails.length > 500 || form.name.length > 100 || form.email.length > 100) {
            setStatus("error")
            return
        }

        setStatus("loading")
        try {
            const payload = {
                name: form.name,
                email: form.email,
                phone: form.phone,
                areaOfInterest: form.areaOfInterest,
                projectDetails: form.projectDetails,
                device_id: getDeviceId(),
            }

            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            })
            if (res.ok) {
                setStatus("success")
                setForm({ name: "", email: "", phone: "", website: "", areaOfInterest: "", budget: "", projectDetails: "" })
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
            className="relative py-32 md:py-48 bg-[#FAFAFA] overflow-hidden selection:bg-brand selection:text-white"
        >
            <AmbientBackground />
            <MarqueeText />

            <Container className="relative z-10 max-w-7xl">
                <div className="grid lg:grid-cols-12 gap-16 lg:gap-8 items-center">

                    {/* Left Typography Space */}
                    <div className="lg:col-span-6 relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <span className="inline-block px-4 py-1.5 rounded-full text-[10px] md:text-xs font-bold tracking-widest uppercase text-brand bg-brand/5 border border-brand/10 mb-8 backdrop-blur-md">
                                Let&apos;s Build Together
                            </span>

                            <h2 className="text-5xl md:text-7xl lg:text-[6rem] font-black tracking-tighter text-neutral-900 mb-8 leading-[0.85]">
                                Ready to<br />
                                <span className="relative inline-block mt-2">
                                    <span className="relative z-10 font-serif italic text-brand tracking-tight pr-4">Scale?</span>
                                </span>
                            </h2>

                            <p className="text-lg md:text-xl text-neutral-500 mb-16 max-w-md leading-relaxed font-medium">
                                Drop us a message. We respond within 2 hours, always. Stop hesitating.
                            </p>

                            <div className="space-y-2">
                                {benefits.map((b, i) => (
                                    <motion.div
                                        key={b}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: 0.2 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                                        className="group flex items-center gap-6 py-4 border-b border-black/5"
                                    >
                                        <span className="text-brand/40 font-mono text-xs font-semibold tracking-widest">0{i + 1}</span>
                                        <span className="text-base md:text-lg font-medium text-neutral-800 tracking-tight group-hover:text-brand transition-colors duration-300">{b}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Offset Form - Editorial Style */}
                    <div className="lg:col-span-5 lg:col-start-8">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                            className="relative"
                        >
                            <form
                                onSubmit={handleSubmit}
                                className="relative bg-white/40 backdrop-blur-3xl p-8 md:p-12 rounded-[2rem] border border-white/60 shadow-2xl shadow-brand/5"
                            >
                                {status === "success" ? (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="text-center py-24"
                                    >
                                        <div className="h-24 w-24 mx-auto rounded-full bg-brand/5 flex items-center justify-center mb-6">
                                            <CheckCircle2 className="h-10 w-10 text-brand" />
                                        </div>
                                        <h3 className="text-3xl font-black text-neutral-900 mb-4 tracking-tight">Got It!</h3>
                                        <p className="text-neutral-500 font-medium">
                                            Thank you. Our team has received your enquiry and will get back to you shortly.
                                        </p>
                                    </motion.div>
                                ) : (
                                    <div className="space-y-8">
                                        <div className="relative group">
                                            <input
                                                type="text"
                                                required
                                                maxLength={100}
                                                value={form.name}
                                                onChange={(e) => setForm({ ...form, name: e.target.value })}
                                                className="w-full bg-transparent border-b border-neutral-300 px-0 py-4 text-neutral-900 placeholder:text-neutral-400 text-lg focus:outline-none focus:border-brand transition-colors rounded-none peer"
                                                placeholder="What's your full name?"
                                            />
                                            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-brand transition-all duration-300 group-focus-within:w-full" />
                                        </div>

                                        <div className="relative group">
                                            <input
                                                type="email"
                                                required
                                                maxLength={100}
                                                value={form.email}
                                                onChange={(e) => setForm({ ...form, email: e.target.value })}
                                                className="w-full bg-transparent border-b border-neutral-300 px-0 py-4 text-neutral-900 placeholder:text-neutral-400 text-lg focus:outline-none focus:border-brand transition-colors rounded-none peer"
                                                placeholder="Your email address"
                                            />
                                            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-brand transition-all duration-300 group-focus-within:w-full" />
                                        </div>

                                        <div className="relative group">
                                            <input
                                                type="tel"
                                                maxLength={20}
                                                value={form.phone}
                                                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                                                className="w-full bg-transparent border-b border-neutral-300 px-0 py-4 text-neutral-900 placeholder:text-neutral-400 text-lg focus:outline-none focus:border-brand transition-colors rounded-none peer"
                                                placeholder="Phone number (optional)"
                                            />
                                            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-brand transition-all duration-300 group-focus-within:w-full" />
                                        </div>

                                        <div className="relative group">
                                            <select
                                                required
                                                value={form.areaOfInterest}
                                                onChange={(e) => setForm({ ...form, areaOfInterest: e.target.value })}
                                                className={`w-full bg-transparent border-b border-neutral-300 px-0 py-4 text-lg focus:outline-none focus:border-brand transition-colors rounded-none appearance-none cursor-pointer peer ${form.areaOfInterest ? 'text-neutral-900' : 'text-neutral-400'}`}
                                            >
                                                <option value="" disabled>Select area of interest...</option>
                                                <option value="Website Development" className="text-neutral-900">Website Development</option>
                                                <option value="App Development" className="text-neutral-900">App Development</option>
                                                <option value="SaaS Development" className="text-neutral-900">SaaS Development</option>
                                                <option value="AI Automation" className="text-neutral-900">AI Automation</option>
                                                <option value="Cybersecurity Services" className="text-neutral-900">Cybersecurity Services</option>
                                                <option value="Content Writing" className="text-neutral-900">Content Writing</option>
                                            </select>
                                            <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
                                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-neutral-400">
                                                    <path d="M3.5 5.5L7 9L10.5 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </div>
                                            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-brand transition-all duration-300 group-focus-within:w-full" />
                                        </div>

                                        <div className="relative group pt-4">
                                            <textarea
                                                rows={3}
                                                required
                                                maxLength={500}
                                                value={form.projectDetails}
                                                onChange={(e) => setForm({ ...form, projectDetails: e.target.value })}
                                                className="w-full bg-transparent border-b border-neutral-300 px-0 py-2 text-neutral-900 placeholder:text-neutral-400 text-lg focus:outline-none focus:border-brand transition-colors rounded-none resize-none peer"
                                                placeholder="Tell us about your project... (Max 500 chars)"
                                            />
                                            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-brand transition-all duration-300 group-focus-within:w-full" />
                                        </div>

                                        {status === "error" && (
                                            <p className="text-red-500 font-medium text-sm text-center">
                                                Something went wrong submitting your request. Please try again.
                                            </p>
                                        )}

                                        <button
                                            type="submit"
                                            disabled={status === "loading"}
                                            className="group relative w-full overflow-hidden rounded-full bg-neutral-900 text-white mt-8 py-5 px-8 flex items-center justify-between hover:bg-brand transition-colors duration-500 disabled:opacity-50"
                                        >
                                            <span className="text-lg font-bold tracking-wide z-10">{status === "loading" ? "Sending..." : "Send Message"}</span>

                                            {/* Magnetic arrow animation */}
                                            <div className="relative w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white text-white group-hover:text-brand transition-colors duration-500 z-10 overflow-hidden">
                                                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-[150%] group-hover:-translate-y-[150%] transition-transform duration-500" />
                                                <ArrowUpRight className="absolute w-5 h-5 -translate-x-[150%] translate-y-[150%] group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500" />
                                            </div>
                                        </button>
                                    </div>
                                )}
                            </form>
                        </motion.div>
                    </div>
                </div>
            </Container>
        </section>
    )
}
