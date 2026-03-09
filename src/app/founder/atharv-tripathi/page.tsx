import { Container } from "@/components/ui/container"
import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
    title: "Atharv Tripathi | Founder & Full-Stack Developer",
    description: "Atharv Tripathi is an aspiring cybersecurity specialist, Full-Stack Developer, and Founder at Scale Your Business based in Bhopal. Learn more about his work.",
}

export default function AtharvFounderPage() {
    return (
        <main className="bg-white min-h-screen pt-32 pb-24 text-black selection:bg-black selection:text-white">
            <Container className="max-w-6xl">
                {/* Hero Section */}
                <div className="grid md:grid-cols-2 gap-12 lg:gap-24 mb-24 items-center">
                    <div className="order-2 md:order-1">
                        <div className="mb-8">
                            <span className="text-sm font-black uppercase tracking-widest text-black/40 mb-2 block">Founder & Developer</span>
                            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] mb-6">
                                Atharv <br />
                                <span className="text-[#3b82f6] italic">Tripathi</span>
                            </h1>
                            <div className="h-[6px] w-24 bg-[#3b82f6]"></div>
                        </div>

                        <p className="text-xl md:text-2xl text-black/80 font-medium leading-relaxed mb-6">
                            Aspiring cybersecurity specialist and Full-Stack Developer currently based in Bhopal. Uniting modern web technologies with digital security to construct robust and scalable business infrastructure.
                        </p>

                        <Link href="https://medium.com/@atharvtripathi" target="_blank" className="group inline-flex items-center gap-3 text-lg font-black uppercase tracking-widest text-black hover:text-[#3b82f6] transition-colors">
                            Read Medium Articles
                            <div className="w-8 h-[3px] bg-black group-hover:bg-[#3b82f6] group-hover:w-12 transition-all duration-300"></div>
                        </Link>
                    </div>

                    <div className="order-1 md:order-2 relative aspect-[4/5] md:aspect-auto md:h-[600px] border-[3px] border-black shadow-[16px_16px_0px_#000] overflow-hidden group">
                        <div className="absolute inset-0 bg-black/10 z-10 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-0"></div>
                        <Image
                            src="/team/atharva.jpg"
                            alt="Atharv Tripathi - Founder"
                            fill
                            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                        />
                    </div>
                </div>

                {/* Experience & Background */}
                <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
                    <div className="prose prose-lg max-w-none prose-headings:font-black prose-headings:uppercase prose-p:font-medium prose-p:text-black/80">
                        <h2 className="text-3xl border-b-[3px] border-black pb-4 mb-8">Roles & Work</h2>
                        <ul className="space-y-6 list-none pl-0">
                            <li className="relative pl-6">
                                <div className="absolute left-0 top-3 w-3 h-3 bg-[#3b82f6]"></div>
                                <strong>Founder & Full-Stack Developer:</strong> Founded BITS AND BYTES (Scale Your Business) in April 2024. Focuses on developing scalable web solutions and integrating modern technologies into legacy business products. Leveraging AI-structured prompts to radically improve code quality and deployment efficiency.
                            </li>
                            <li className="relative pl-6">
                                <div className="absolute left-0 top-3 w-3 h-3 bg-black"></div>
                                <strong>Core Team Member:</strong> Part of the Data Science Club at VIT Bhopal, contributing technically to complex projects and driving community initiatives.
                            </li>
                        </ul>

                        <h2 className="text-3xl border-b-[3px] border-black pb-4 mt-16 mb-8">Cybersecurity Focus</h2>
                        <ul className="space-y-6 list-none pl-0">
                            <li className="relative pl-6">
                                <div className="absolute left-0 top-3 w-3 h-3 bg-black"></div>
                                <strong>Education:</strong> Immersed in core networking protocols, ethical hacking, and advanced digital security architecture. Active interest in Governance, Risk & Compliance (GRC) and protecting digital ecosystems.
                            </li>
                            <li className="relative pl-6">
                                <div className="absolute left-0 top-3 w-3 h-3 bg-black"></div>
                                <strong>Certifications:</strong> Currently enrolled in the Google Cybersecurity Professional Certificate program. Holds an "Introduction to Cybersecurity" certificate from Cisco Networking Academy. Actively working towards achieving the highly respected Certified Ethical Hacker (CEH) certification.
                            </li>
                            <li className="relative pl-6">
                                <div className="absolute left-0 top-3 w-3 h-3 bg-black"></div>
                                <strong>Thought Leadership:</strong> Shares his technical journey and insights on Medium, writing technical explainers such as "How HTTP actually works" to help educate the next generation of developers.
                            </li>
                        </ul>
                    </div>

                    <div className="bg-[#f0f0f0] p-10 md:p-14 border-[3px] border-black shadow-[12px_12px_0px_0px_#000] h-max sticky top-32">
                        <h3 className="text-2xl font-black uppercase tracking-tight mb-8">Core Competencies</h3>
                        <div className="flex flex-wrap gap-3">
                            {["Full-Stack Web Dev", "Next.js & React", "Ethical Hacking", "Governance & Compliance", "Network Security", "AI-Assisted Coding", "Technical Writing", "Data Science"].map((skill, i) => (
                                <span key={i} className="px-4 py-2 bg-white border-[2px] border-black text-sm font-bold uppercase tracking-widest hover:bg-[#3b82f6] hover:text-white transition-colors duration-300">
                                    {skill}
                                </span>
                            ))}
                        </div>

                        <div className="mt-12 pt-8 border-t-[3px] border-black/10">
                            <Link href="/contact" className="group/btn relative inline-flex w-full items-center justify-center overflow-hidden border-[3px] border-black bg-black px-8 py-4 text-white font-black text-lg uppercase tracking-widest transition-transform hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_#3b82f6]">
                                <span className="relative z-10 transition-colors group-hover/btn:text-black">Connect with Atharv</span>
                                <div className="absolute inset-0 -translate-y-full bg-white transition-transform duration-500 ease-[0.16,1,0.3,1] group-hover/btn:translate-y-0 z-0"></div>
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>
        </main>
    )
}
