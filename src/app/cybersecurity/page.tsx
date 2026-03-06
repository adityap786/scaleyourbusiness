import { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { CyberContent } from "@/components/services/cyber-content"

export const metadata: Metadata = {
    title: "Cybersecurity Services | Penetration Testing & AI Defense",
    description: "Enterprise-grade security assessments, penetration testing, and AI-driven threat detection for high-growth companies.",
}

export default function CybersecurityPage() {
    return (
        <>
            <Header />
            <CyberContent />
            <Footer />
        </>
    )
}

