"use client"

import { Container } from "@/components/ui/container"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Heart, Users, Zap, Target } from "lucide-react"
import { motion, useScroll, useTransform } from "motion/react"
import { useRef } from "react"
import Head from "next/head"

export default function AboutPage() {
    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    })

    const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.85]);
    const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
    const heroY = useTransform(scrollYProgress, [0, 0.2], [0, -100]);

    return (
        <div className="bg-[#f0f0f0] selection:bg-black selection:text-white" ref={containerRef}>
            <Head>
                <title>About Us | Scale Your Business</title>
                <meta name="description" content="Meet the team dedicated to scaling your business. Founded by best friends Atharva Tripathi & Aditya Pandit." />
            </Head>
            <Header />
            
            <main className="relative w-full z-10">
                {/* Anti-Template Hero */}
                <motion.section 
                    className="sticky top-0 h-[100vh] min-h-[850px] flex flex-col items-center justify-center pt-32 pb-24 p-6 md:p-12 overflow-hidden bg-[#f0f0f0]"
                    style={{ scale: heroScale, opacity: heroOpacity, y: heroY }}
                >
                    <div className="absolute inset-0 pointer-events-none z-0" 
                         style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 400 400%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22 opacity=%220.04%22/%3E%3C/svg%3E")' }}>
                    </div>

                    <div className="relative z-10 max-w-6xl mx-auto text-center w-full mt-4 md:mt-12">
                        <motion.h1 
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                            className="text-[3.5rem] md:text-[6rem] lg:text-[7.5rem] font-black tracking-custom-tight text-black leading-[1.05] uppercase pb-4"
                            style={{ letterSpacing: "-0.04em" }}
                        >
                            More Than <br />
                            Just A <span className="text-[#3b82f6] italic">Business</span>
                        </motion.h1>

                        <motion.div 
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                            className="mt-10 md:mt-20 space-y-6"
                        >
                            <h2 className="text-3xl md:text-5xl font-light text-black/80 tracking-tight">
                                We Are A <span className="font-bold border-b-4 border-black pb-1">Family.</span>
                            </h2>
                            <p className="text-xl md:text-2xl text-black/80 max-w-2xl mx-auto font-light leading-relaxed mt-8">
                                Empowering offline businesses to flourish online. We don't just run ads; we build the future of your operations.
                            </p>
                        </motion.div>
                    </div>
                </motion.section>

                {/* Spatial Founders Section */}
                <section className="relative bg-black text-white pt-48 pb-32 z-20 rounded-t-[3rem] shadow-[0_-20px_50px_rgba(0,0,0,0.1)]">
                    <Container>
                        <div className="grid md:grid-cols-2 gap-24 max-w-6xl mx-auto">
                            
                            {/* Atharva */}
                            <motion.div 
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ margin: "-100px", once: true }}
                                transition={{ duration: 1, ease: "circOut" }}
                                className="relative group perspective-1000"
                            >
                                <div className="absolute top-8 -left-8 w-full h-full bg-[#111] z-0 transform group-hover:-translate-x-4 group-hover:translate-y-4 transition-transform duration-700 ease-out border border-white/5" />
                                <div className="relative z-10 aspect-[3/4] bg-white/5 border border-white/10 overflow-hidden flex flex-col justify-end p-8 transform-style-3d transition-transform duration-700 ease-out group-hover:rotate-y-[-5deg] group-hover:rotate-x-[5deg]">
                                    
                                    {/* Placeholder specific image layer */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10" />
                                    <img src="/team/atharva.jpg" alt="Atharva Tripathi" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-80 transition-opacity duration-700 grayscale group-hover:grayscale-0" />
                                    
                                    <div className="relative z-20 translate-z-10">
                                        <div className="w-12 h-[2px] bg-[#3b82f6] mb-4 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 delay-100" />
                                        <h3 className="text-4xl font-black uppercase tracking-tighter mb-1">Atharva Tripathi</h3>
                                        <p className="text-white/60 font-mono text-sm tracking-widest uppercase">Founder</p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Aditya */}
                            <motion.div 
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ margin: "-100px", once: true }}
                                transition={{ duration: 1, ease: "circOut", delay: 0.2 }}
                                className="relative group perspective-1000 mt-0 md:mt-32"
                            >
                                <div className="absolute top-8 -left-8 w-full h-full bg-[#111] z-0 transform group-hover:-translate-x-4 group-hover:translate-y-4 transition-transform duration-700 ease-out border border-white/5" />
                                <div className="relative z-10 aspect-[3/4] bg-white/5 border border-white/10 overflow-hidden flex flex-col justify-end p-8 transform-style-3d transition-transform duration-700 ease-out group-hover:rotate-y-[5deg] group-hover:rotate-x-[5deg]">
                                    
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10" />
                                    <img src="/team/aditya.jpg" alt="Aditya Pandit" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-80 transition-opacity duration-700 grayscale group-hover:grayscale-0" />
                                    
                                    <div className="relative z-20 translate-z-10">
                                        <div className="w-12 h-[2px] bg-[#3b82f6] mb-4 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500 delay-100" />
                                        <h3 className="text-4xl font-black uppercase tracking-tighter mb-1">Aditya Pandit</h3>
                                        <p className="text-white/60 font-mono text-sm tracking-widest uppercase">Co-Founder</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Origin Story Text */}
                        <div className="max-w-4xl mx-auto mt-40">
                            <motion.div 
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                className="flex items-center gap-4 mb-12"
                            >
                                <Users className="w-6 h-6 text-[#3b82f6]" />
                                <span className="font-mono text-sm tracking-[0.2em] uppercase text-white/50">Best Friends for 5+ Years</span>
                            </motion.div>

                            <motion.p 
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true, margin: "-100px" }}
                                className="text-3xl md:text-5xl font-light leading-[1.2] tracking-tight mb-12"
                            >
                                Our story starts long before Scale Your Business. We've been friends for over 5 years, sharing a common vision: <span className="font-bold text-white">to create value that actually matters.</span>
                            </motion.p>
                            
                            <motion.p 
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true, margin: "-100px" }}
                                className="text-xl text-white/60 font-light leading-relaxed max-w-2xl ml-auto"
                            >
                                Our inspiration wasn't just to start another agency. It was to let people experience how they can grow beyond traditional methods. To take their offline success and amplify it online, removing the bottlenecks that hold them back.
                            </motion.p>
                        </div>
                    </Container>
                </section>

                {/* Abstract Core Values Layer  */}
                <section className="relative bg-white py-32 md:py-48 z-10 isolate">
                    <Container>
                        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
                            
                            <div className="lg:col-span-5 flex flex-col justify-center">
                                <motion.div
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="sticky top-32"
                                >
                                    <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-12">
                                        Grateful <br/><span className="text-[#3b82f6]">& Blessed</span>
                                    </h2>
                                    <div className="space-y-6 text-xl text-black/70 font-light leading-relaxed">
                                        <p>
                                            We are incredibly grateful for our team—they are more than just employees; they are family. Most have been here since the very beginning, when we were just starting to scale ourselves.
                                        </p>
                                        <p>
                                            It is their unwavering support and dedication that has allowed us to build an organization capable of helping thousands of others scale their businesses online.
                                        </p>
                                        <p className="font-medium text-black border-l-2 border-[#3b82f6] pl-6 py-2">
                                            We don't believe in AI copy-paste solutions. We believe in human connection, emotion, and customized strategies that solve real problems.
                                        </p>
                                    </div>
                                </motion.div>
                            </div>

                            <div className="lg:col-span-7 flex justify-end">
                                <div className="w-full max-w-2xl space-y-8">
                                    <ValueNode 
                                        icon={<Zap className="w-8 h-8" />}
                                        title="Streamlined Operations"
                                        desc="We optimize your workflows, lead qualification, and nurturing processes to save you time."
                                    />
                                    <ValueNode 
                                        icon={<Target className="w-8 h-8" />}
                                        title="Value-Driven Campaigns"
                                        desc="Marketing that focuses on delivering real value to your customers, not just noise."
                                    />
                                    <ValueNode 
                                        icon={<Heart className="w-8 h-8" />}
                                        title="Building Bonds"
                                        desc="We work with you, not just for you. We support you in your journey as partners."
                                    />
                                </div>
                            </div>
                        </div>
                    </Container>
                </section>
            </main>
            <Footer />
        </div>
    )
}

function ValueNode({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="group relative p-10 bg-[#fafafa] border border-black/5 hover:border-black/20 transition-colors duration-500 overflow-hidden"
        >
            <div className="absolute top-0 left-0 w-2 h-full bg-[#3b82f6] scale-y-0 origin-bottom transition-transform duration-500 ease-out group-hover:scale-y-100" />
            
            <div className="text-black/30 group-hover:text-[#3b82f6] transition-colors duration-500 mb-8 pl-4">
                {icon}
            </div>
            <h3 className="text-2xl font-bold text-black mb-4 pl-4 tracking-tight">{title}</h3>
            <p className="text-lg text-black/60 font-light pl-4 leading-relaxed">{desc}</p>
        </motion.div>
    )
}
