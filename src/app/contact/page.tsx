"use client"

import { Container } from "@/components/ui/container"
import { CTASection } from "@/components/home/cta-section"
import { AestheticTestimonials } from "@/components/ui/aesthetic-testimonials"
import { motion, useScroll, useTransform } from "motion/react"
import { useRef } from "react"
import Head from "next/head"
import { Phone, ArrowRight, Mail, MapPin } from "lucide-react"

export default function ContactPage() {
    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    })

    const headerY = useTransform(scrollYProgress, [0, 0.2], [0, -100]);
    const headerOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

    const contactSchema = {
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        'mainEntity': {
            '@type': 'Organization',
            'name': 'Scale Your Business',
            'telephone': '+91-9990557753',
            'email': 'hello@enquiries.scaleyourbusiness.online',
            'areaServed': ['India', 'Dubai', 'USA']
        }
    }

    return (
        <div className="bg-[#f0f0f0] min-h-screen selection:bg-black selection:text-white" ref={containerRef}>
            <Head>
                <title>Contact Us | Scale Your Business</title>
                <meta name="description" content="Start your project with Scale Your Business. Offices in India, Dubai, and USA. Book a free strategy call today." />
            </Head>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
            />

            <main className="relative z-10 w-full overflow-hidden">
                {/* Hero Section */}
                <motion.section
                    className="relative min-h-[85vh] flex flex-col items-center justify-center pt-40 pb-20 px-6 md:px-12 bg-[#f0f0f0]"
                    style={{ y: headerY, opacity: headerOpacity }}
                >
                    {/* Noise Filter */}
                    <div className="absolute inset-0 pointer-events-none z-0"
                        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22 opacity=%220.04%22 mix-blend-mode=%22multiply%22/%3E%3C/svg%3E")' }}>
                    </div>

                    <div className="relative z-10 max-w-7xl mx-auto w-full mt-12 md:mt-0 flex flex-col md:flex-row items-center md:items-start justify-between gap-12">
                        <div className="w-full md:w-[60%] flex flex-col justify-center">
                            <motion.h1
                                initial={{ y: 50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                                className="text-[5rem] md:text-[8vw] font-black tracking-tighter text-black leading-[0.85] uppercase mb-8"
                            >
                                START <br />
                                <span className="text-[#3b82f6] italic">TALKING.</span>
                            </motion.h1>

                            <motion.div
                                initial={{ y: 30, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                                className="mt-8"
                            >
                                <div className="h-[4px] w-24 bg-black mb-8"></div>
                                <p className="text-xl md:text-3xl text-black/80 font-bold max-w-xl leading-snug">
                                    Ready to automate your operations or build your next scalable product? We're ready to engineer it.
                                </p>
                            </motion.div>
                        </div>

                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 1.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                            className="w-full md:w-[40%] flex justify-center md:justify-end"
                        >
                            <a
                                href="https://wa.me/919990557753?text=Hi!%20I%20would%20like%20to%20get%20an%20instant%20quote%20%26%20book%20a%20free%20consultation%20meeting."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative w-full max-w-sm aspect-square bg-[#25D366] border-[4px] border-black shadow-[16px_16px_0px_#000] flex flex-col items-center justify-center p-10 hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[24px_24px_0px_#000] transition-all duration-500 overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-black translate-y-[101%] transition-transform duration-[0.7s] ease-[0.16,1,0.3,1] group-hover:translate-y-0 z-0"></div>
                                <div className="relative z-10 flex flex-col items-center text-center">
                                    <svg className="w-24 h-24 text-black group-hover:text-white transition-colors duration-500 mb-6 drop-shadow-[4px_4px_0px_rgba(0,0,0,0.2)] group-hover:drop-shadow-[4px_4px_0px_rgba(255,255,255,0.3)]" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.305-.885-.656-1.482-1.466-1.656-1.764-.173-.298-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                    </svg>
                                    <span className="text-3xl font-black text-black group-hover:text-white uppercase tracking-tighter leading-none mb-2 transition-colors duration-500">Instant Quote</span>
                                    <span className="text-lg font-bold text-black/70 group-hover:text-white/80 uppercase tracking-widest transition-colors duration-500">& Free Consultation</span>
                                </div>
                            </a>
                        </motion.div>
                    </div>
                </motion.section>

                {/* Staggered Vertical Contact Infrastructure */}
                <section className="relative z-20 bg-white py-32 isolate border-t-[3px] border-black">
                    <Container>
                        <div className="max-w-[1400px] mx-auto space-y-32 relative">
                            {/* Central tracking line connecting the tiers visually */}
                            <div className="absolute left-[30px] lg:left-[50%] lg:-translate-x-[2px] top-0 bottom-0 w-[4px] bg-black/5 -z-10 hidden lg:block" />

                            {/* Block 1: Call Us */}
                            <motion.div
                                initial={{ opacity: 0, y: 100 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-10%" }}
                                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                                className="relative flex flex-col lg:flex-row bg-white border-[3px] border-black shadow-[12px_12px_0px_#000] overflow-hidden group z-10 mx-auto w-full lg:w-[80%]"
                            >
                                <div className="absolute inset-0 bg-[#3b82f6] scale-y-0 origin-bottom transition-transform duration-[1s] ease-[0.16,1,0.3,1] group-hover:scale-y-100 z-0"></div>
                                <div className="lg:w-[40%] bg-black p-10 md:p-14 flex flex-col justify-end text-white relative z-10 border-b-[3px] lg:border-b-0 lg:border-r-[3px] border-black">
                                    <div className="text-[5rem] font-black opacity-[0.2] tracking-tighter leading-none absolute top-4 left-4 pointer-events-none">01</div>
                                    <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-[0.9] mt-16">Direct <br />Line</h3>
                                </div>
                                <div className="lg:w-[60%] p-10 md:p-14 flex flex-col justify-center relative z-10 transition-colors duration-500">
                                    <div className="space-y-6">
                                        <div className="flex items-center gap-6 group-hover:translate-x-4 transition-transform duration-500">
                                            <div className="w-12 h-12 bg-black flex items-center justify-center shrink-0 border-[3px] border-black group-hover:bg-white transition-colors duration-500">
                                                <Phone className="w-6 h-6 text-white group-hover:text-black" strokeWidth={3} />
                                            </div>
                                            <a href="tel:+919990557753" className="text-3xl md:text-5xl font-black text-black group-hover:text-white tracking-tighter hover:underline decoration-4 underline-offset-8 transition-colors duration-500 block">
                                                +91 99905 57753
                                            </a>
                                        </div>
                                        <div className="flex items-center gap-6 group-hover:translate-x-4 transition-transform duration-500 delay-100">
                                            <div className="w-12 h-12 bg-black flex items-center justify-center shrink-0 border-[3px] border-black group-hover:bg-white transition-colors duration-500">
                                                <Phone className="w-6 h-6 text-white group-hover:text-black" strokeWidth={3} />
                                            </div>
                                            <a href="tel:+919312089752" className="text-3xl md:text-5xl font-black text-black group-hover:text-white tracking-tighter hover:underline decoration-4 underline-offset-8 transition-colors duration-500 block">
                                                +91 93120 89752
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Block 2: Email */}
                            <motion.div
                                initial={{ opacity: 0, y: 100 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-10%" }}
                                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                                className="relative flex flex-col lg:flex-row-reverse bg-white border-[3px] border-black shadow-[-12px_12px_0px_#000] lg:shadow-[12px_12px_0px_#000] overflow-hidden group z-10 mx-auto w-full lg:w-[80%]"
                            >
                                <div className="absolute inset-0 bg-[#3b82f6] scale-y-0 origin-top transition-transform duration-[1s] ease-[0.16,1,0.3,1] group-hover:scale-y-100 z-0"></div>
                                <div className="lg:w-[40%] bg-black p-10 md:p-14 flex flex-col justify-end text-white relative z-10 border-b-[3px] lg:border-b-0 lg:border-l-[3px] border-black">
                                    <div className="text-[5rem] font-black opacity-[0.2] tracking-tighter leading-none absolute top-4 lg:right-4 left-4 lg:left-auto pointer-events-none">02</div>
                                    <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-[0.9] mt-16 text-left lg:text-right">Digital <br />Mail</h3>
                                </div>
                                <div className="lg:w-[60%] p-10 md:p-14 flex flex-col justify-center relative z-10 transition-colors duration-500 text-left lg:text-right">
                                    <div className="space-y-6">
                                        <div className="flex flex-row lg:flex-row-reverse items-center justify-start lg:justify-start gap-6 group-hover:-translate-x-4 transition-transform duration-500">
                                            <div className="w-12 h-12 bg-black flex items-center justify-center shrink-0 border-[3px] border-black group-hover:bg-white transition-colors duration-500">
                                                <Mail className="w-6 h-6 text-white group-hover:text-black" strokeWidth={3} />
                                            </div>
                                            <a href="mailto:hello@enquiries.scaleyourbusiness.online" className="text-2xl md:text-4xl font-black text-black group-hover:text-white tracking-widest hover:underline decoration-4 underline-offset-8 transition-colors duration-500 block break-words break-all">
                                                hello@enquiries.scaleyourbusiness.online
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Block 3: HQ Location */}
                            <motion.div
                                initial={{ opacity: 0, y: 100 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-10%" }}
                                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                                className="relative flex flex-col lg:flex-row bg-white border-[3px] border-black shadow-[12px_12px_0px_#000] overflow-hidden group z-10 mx-auto w-full lg:w-[80%]"
                            >
                                <div className="absolute inset-0 bg-[#3b82f6] scale-y-0 origin-bottom transition-transform duration-[1s] ease-[0.16,1,0.3,1] group-hover:scale-y-100 z-0"></div>
                                <div className="lg:w-[40%] bg-black p-10 md:p-14 flex flex-col justify-end text-white relative z-10 border-b-[3px] lg:border-b-0 lg:border-r-[3px] border-black">
                                    <div className="text-[5rem] font-black opacity-[0.2] tracking-tighter leading-none absolute top-4 left-4 pointer-events-none">03</div>
                                    <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-[0.9] mt-16">Global <br />Nodes</h3>
                                </div>
                                <div className="lg:w-[60%] p-10 md:p-14 flex flex-col justify-center relative z-10 transition-colors duration-500">
                                    <div className="space-y-6">
                                        <div className="flex items-center gap-6 group-hover:translate-x-4 transition-transform duration-500">
                                            <div className="w-12 h-12 bg-black flex items-center justify-center shrink-0 border-[3px] border-black group-hover:bg-white transition-colors duration-500">
                                                <MapPin className="w-6 h-6 text-white group-hover:text-black" strokeWidth={3} />
                                            </div>
                                            <div className="text-3xl md:text-5xl font-black text-black group-hover:text-white tracking-tighter transition-colors duration-500 flex items-center gap-4">
                                                INDIA <span className="opacity-30">•</span> DUBAI <span className="opacity-30">•</span> USA
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                        </div>
                    </Container>
                </section>

                <AestheticTestimonials />

                <div className="border-t-[3px] border-black relative z-30 bg-white">
                    <CTASection />
                </div>
            </main>
        </div>
    )
}
