import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Metadata } from "next"
import { AIAutomationContent } from "@/components/services/ai-automation-content"

export const metadata: Metadata = {
    title: "AI Solutions | Intelligent Chatbots & Automation",
    description: "Deploy guided selling chatbots, WhatsApp campaign managers, and custom AI solutions using Langchain, n8n, and LLMs.",
}

export default function AIAutomationPage() {
    return (
        <>
            <Header />
            <AIAutomationContent />
            <Footer />
        </>
    )
}
