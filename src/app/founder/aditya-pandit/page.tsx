import { Container } from "@/components/ui/container"
import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
    title: "Aditya Pandit | Co-Founder & AI Automations Head",
    description: "Aditya Pandit is a Co-Founder at Scale Your Business, specializing in full-stack development, AI automations, and deep neural networks.",
}

export default function AdityaFounderPage() {
    return (
        <main className="bg-white min-h-screen pt-32 pb-24 text-black selection:bg-black selection:text-white">
            <Container className="max-w-6xl">
                {/* Hero Section */}
                <div className="grid md:grid-cols-2 gap-12 lg:gap-24 mb-24 items-center">
                    <div className="order-2 md:order-1">
                        <div className="mb-8">
                            <span className="text-sm font-black uppercase tracking-widest text-black/40 mb-2 block">Co-Founder & AI Architect</span>
                            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] mb-6">
                                Aditya <br />
                                <span className="text-[#3b82f6] italic">Pandit</span>
                            </h1>
                            <div className="h-[6px] w-24 bg-[#3b82f6]"></div>
                        </div>

                        <p className="text-xl md:text-2xl text-black/80 font-medium leading-relaxed mb-6">
                            Deep technology enthusiast with a Bachelor's in Computer Applications from Bennett University. Specializing in advanced software development, AI automations, and the mechanics of deep neural networks.
                        </p>
                    </div>

                    <div className="order-1 md:order-2 relative aspect-[4/5] md:aspect-auto md:h-[600px] border-[3px] border-black shadow-[16px_16px_0px_#000] overflow-hidden group">
                        <div className="absolute inset-0 bg-black/10 z-10 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-0"></div>
                        <Image
                            src="/team/aditya-founder.jpg"
                            alt="Aditya Pandit - Co-Founder"
                            fill
                            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                        />
                    </div>
                </div>

                {/* Experience & Background */}
                <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
                    <div className="prose prose-lg max-w-none prose-headings:font-black prose-headings:uppercase prose-p:font-medium prose-p:text-black/80">
                        <h2 className="text-3xl border-b-[3px] border-black pb-4 mb-8">Work & Vision</h2>
                        <ul className="space-y-6 list-none pl-0">
                            <li className="relative pl-6">
                                <div className="absolute left-0 top-3 w-3 h-3 bg-[#3b82f6]"></div>
                                <strong>Co-Founder & Innovator:</strong> Driving the core engineering and automation efforts for Scale Your Business (BITS AND BYTES). Focuses on removing operational bottlenecks through customized AI solutions and high-performance software.
                            </li>
                            <li className="relative pl-6">
                                <div className="absolute left-0 top-3 w-3 h-3 bg-black"></div>
                                <strong>Development Specialist:</strong> Deeply embedded in modern full-stack development, transitioning traditional businesses into the digital era with scalable, architecture-first approaches.
                            </li>
                        </ul>

                        <h2 className="text-3xl border-b-[3px] border-black pb-4 mt-16 mb-8">AI & Machine Learning Focus</h2>
                        <ul className="space-y-6 list-none pl-0">
                            <li className="relative pl-6">
                                <div className="absolute left-0 top-3 w-3 h-3 bg-black"></div>
                                <strong>Deep Neural Networks:</strong> Currently expanding knowledge in deep learning architectures, focusing on neural network implementation to solve complex business intelligence problems.
                            </li>
                            <li className="relative pl-6">
                                <div className="absolute left-0 top-3 w-3 h-3 bg-black"></div>
                                <strong>AI Automations:</strong> Architecting workflows that bridge LLMs with legacy systems. Building autonomous agents capable of handling everything from customer triage to internal data routing.
                            </li>
                        </ul>
                    </div>

                    <div className="bg-[#f0f0f0] p-10 md:p-14 border-[3px] border-black shadow-[12px_12px_0px_0px_#000] h-max sticky top-32">
                        <h3 className="text-2xl font-black uppercase tracking-tight mb-8">Core Competencies</h3>
                        <div className="flex flex-wrap gap-3">
                            {["AI Automations", "Deep Neural Networks", "Full-Stack Dev", "LLM Integration", "System Architecture", "BCA - Bennett Univ.", "Workflow Engineering"].map((skill, i) => (
                                <span key={i} className="px-4 py-2 bg-white border-[2px] border-black text-sm font-bold uppercase tracking-widest hover:bg-[#3b82f6] hover:text-white transition-colors duration-300">
                                    {skill}
                                </span>
                            ))}
                        </div>

                        <div className="mt-12 pt-8 border-t-[3px] border-black/10">
                            <Link href="/contact" className="group/btn relative inline-flex w-full items-center justify-center overflow-hidden border-[3px] border-black bg-black px-8 py-4 text-white font-black text-lg uppercase tracking-widest transition-transform hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_#3b82f6]">
                                <span className="relative z-10 transition-colors group-hover/btn:text-black">Connect with Aditya</span>
                                <div className="absolute inset-0 -translate-y-full bg-white transition-transform duration-500 ease-[0.16,1,0.3,1] group-hover/btn:translate-y-0 z-0"></div>
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>
        </main>
    )
}
