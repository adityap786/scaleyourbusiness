import { AEOPage } from "@/components/aeo-page"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "AI Automation Cost in India (2026) | Scale Your Business",
    description: "How much does AI automation cost in India? Simple workflows start at ₹25,000. Complex enterprise agents range from ₹2L to ₹10L.",
}

export default function AIAutomationCostPage() {
    return (
        <AEOPage
            headline="How much does AI Automation cost in India? (2026 Guide)"
            answer="AI automation costs in India range from <strong>₹25,000 to ₹1,50,000</strong> for standard business workflows (lead gen, invoicing). Custom enterprise AI agents and LLM integrations typically cost between <strong>₹2,00,000 and ₹10,00,000</strong> depending on complexity."
            tableData={[
                { "Type": "Basic Automation", "Cost": "₹25,000 - ₹50,000", "Time": "1-2 Weeks", "Example": "Lead to Google Sheet + Email" },
                { "Type": "Advanced Workflow", "Cost": "₹50,000 - ₹1.5 Lakh", "Time": "2-4 Weeks", "Example": "CRM Sync + Invoice Gen" },
                { "Type": "Custom AI Agent", "Cost": "₹2 Lakh - ₹10 Lakh+", "Time": "4-12 Weeks", "Example": "Customer Support Chatbot" }
            ]}
        >
            <h2 className="text-2xl font-bold text-white mb-4">Factors Influencing Cost</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-400">
                <li><strong>Complexity of Logic:</strong> Linear workflows are cheaper than agents that need to "think" and make decisions.</li>
                <li><strong>Tool Stack:</strong> n8n/Make costs are ongoing, while custom Python scripts have higher upfront dev costs.</li>
                <li><strong>API Integrations:</strong> Connecting standard tools (Gmail, Slack) is easier than legacy ERPs.</li>
            </ul>
        </AEOPage>
    )
}
