"use client"

import { Container } from "@/components/ui/container"
import { motion, useScroll, useTransform } from "motion/react"
import { useRef } from "react"

const TESTIMONIALS = [
    {
        quote: "They completely redefined our infrastructure. We didn't just get an agency, we got an architectural partner. Revenue doubled in 3 months.",
        author: "ALEXANDER CHEN",
        role: "FOUNDER, NEXUS",
        offset: 0
    },
    {
        quote: "No fluff. Pure execution. The speed at which they deployed our SaaS MVP while maintaining zero technical debt was terrifyingly good.",
        author: "SARAH JENKINS",
        role: "CTO, FINEDGE",
        offset: 50
    },
    {
        quote: "We were stuck scaling our operations. Their AI automation injected 40 hours back into our week. It felt like we hired 5 invisible employees.",
        author: "TARIQ AL MANSOORI",
        role: "CEO, VELOCITY",
        offset: -30
    },
    {
        quote: "The visual language they brought is unmatched. It doesn't look like a website, it feels like an experience. Absolute brilliance.",
        author: "RAHUL SHARMA",
        role: "DIRECTOR, ALT-STUDIO",
        offset: 20
    }
]

export function AestheticTestimonials() {
    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    })

    const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])
    const textX = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"])

    return (
        <section
            ref={containerRef}
            className="relative pt-32 md:pt-48 bg-white border-y-[3px] border-black overflow-hidden isolate"
        >
            {/* Background Noise & Absolute Watermark */}
            <div className="absolute inset-0 pointer-events-none z-[-1] opacity-[0.03] mix-blend-multiply"
                style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}>
            </div>

            <motion.div
                className="absolute top-0 right-0 text-[15rem] md:text-[30rem] font-black text-black/5 leading-none tracking-tighter select-none pointer-events-none origin-right rotate-90 translate-x-1/2"
                style={{ y: bgY }}
            >
                PROOF.
            </motion.div>

            <Container>
                <div className="mb-24 flex items-end justify-between border-b-[4px] border-black pb-8 relative z-10 w-full">
                    <motion.h2
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="text-5xl md:text-8xl font-black uppercase tracking-tighter text-black leading-none"
                    >
                        Industry <br /> <span className="text-[#3b82f6] italic">Voices.</span>
                    </motion.h2>
                    <div className="hidden md:block text-right">
                        <p className="text-xl font-bold uppercase tracking-widest text-black/40">Verified Impact</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 md:gap-y-32 relative z-10">
                    {TESTIMONIALS.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-10%" }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
                            style={{ '--card-offset': `${t.offset}px` } as React.CSSProperties}
                            className="group relative flex flex-col justify-between p-8 md:p-12 bg-white border-[3px] border-black shadow-[12px_12px_0px_0px_#000] hover:shadow-[16px_16px_0px_0px_#3b82f6] hover:-translate-y-2 transition-all duration-500 overflow-hidden md:mt-[var(--card-offset)]"
                        >
                            <div className="absolute top-0 right-0 w-24 h-24 bg-[#3b82f6] rounded-bl-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"></div>

                            <svg className="w-12 h-12 md:w-16 md:h-16 text-black/20 group-hover:text-[#3b82f6] transition-colors duration-500 mb-8" fill="currentColor" viewBox="0 0 32 32">
                                <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8.2c.4-1.8 2-3.2 3.8-3.2h2V8h-4zm16 0c-3.3 0-6 2.7-6 6v10h10V14h-5.8c.4-1.8 2-3.2 3.8-3.2h2V8h-4z" />
                            </svg>

                            <p className="text-2xl md:text-3xl font-black text-black leading-[1.1] tracking-tight mb-12">
                                "{t.quote}"
                            </p>

                            <div className="flex items-center gap-4 mt-auto border-t-[3px] border-black pt-6">
                                <div className="w-12 h-12 bg-black border-[2px] border-black text-white shrink-0 flex items-center justify-center font-black group-hover:bg-[#3b82f6] transition-colors duration-500">
                                    {t.author.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="text-black font-black uppercase tracking-widest text-sm leading-none mb-1 group-hover:text-[#3b82f6] transition-colors">{t.author}</h4>
                                    <p className="text-black/50 font-bold uppercase tracking-wider text-[10px] m-0">{t.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>

            {/* Huge scrolling ticker at the bottom */}
            <div className="w-full overflow-hidden border-t-[3px] border-black mt-32 py-4 bg-black relative flex items-center">
                <motion.div
                    className="flex whitespace-nowrap gap-8 items-center"
                    style={{ x: textX }}
                >
                    {[...Array(6)].map((_, i) => (
                        <div key={i} className="flex items-center gap-8">
                            <span className="text-white font-black italic uppercase tracking-tighter text-4xl leading-none">NO TEMPLATES</span>
                            <div className="w-4 h-4 bg-[#3b82f6]"></div>
                            <span className="text-white font-black italic uppercase tracking-tighter text-4xl leading-none">ONLY EXECUTION</span>
                            <div className="w-4 h-4 bg-[#3b82f6]"></div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
