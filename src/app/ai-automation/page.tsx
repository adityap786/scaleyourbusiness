import { Metadata } from "next"
import { AIAutomationContent } from "@/components/services/ai-automation-content"

export const metadata: Metadata = {
    title: "AI Automation Agency India | Business Workflow & n8n Experts",
    description: "Scale Your Business provides AI automation services in India. We deploy guided selling chatbots, n8n workflows, Make.com automations, and custom LLM solutions.",
    keywords: "AI automation agency India, business workflow automation, n8n automation experts, Make.com automation agency, business process automation services, Scale Your Business India",
}

export default function AIAutomationPage() {
    return (
        <>
            <AIAutomationContent />
        </>
    )
}
