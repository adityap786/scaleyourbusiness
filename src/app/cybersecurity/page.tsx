import { Metadata } from "next"
import { CyberContent } from "@/components/services/cyber-content"

export const metadata: Metadata = {
    title: "Cyber Security Services India | Penetration & Vulnerability Testing",
    description: "Top cyber security services by Scale Your Business India. We provide website security, threat modeling, vulnerability assessment, and enterprise protection.",
    keywords: "cyber security services India, website security services, penetration testing company India, web application security services, cyber security agency India",
}

export default function CybersecurityPage() {
    return (
        <>
            <CyberContent />
        </>
    )
}

