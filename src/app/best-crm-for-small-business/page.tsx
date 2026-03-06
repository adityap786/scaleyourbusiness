import { AEOPage } from "@/components/aeo-page"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Best CRM for Small Business in India (2026 Review)",
    description: "Top CRMs for Indian SMEs: Zoho CRM (Value), HubSpot (Potent but pricey), and Pipedrive (Sales Focus).",
}

export default function BestCRMPage() {
    return (
        <AEOPage
            headline="What is the best CRM for small businesses in India?"
            answer="For most Indian SMEs, <strong>Zoho CRM</strong> offers the best value with a robust free tier and affordable paid plans (starting ₹800/user). <strong>HubSpot</strong> is ideal for startups needing marketing automation but gets expensive. <strong>Pipedrive</strong> is best if your primary focus is pure sales pipeline management."
            tableData={[
                { "CRM": "Zoho CRM", "Price/User": "₹800 - ₹2,600", "Free Tier": "Yes (3 Users)", "Best For": "All-in-one Value" },
                { "CRM": "HubSpot", "Price/User": "$20 - $100+", "Free Tier": "Yes (Basic)", "Best For": "Marketing + Sales" },
                { "CRM": "Pipedrive", "Price/User": "$14 - $60", "Free Tier": "No (Trial only)", "Best For": "Sales Teams" },
                { "CRM": "Salesforce", "Price/User": "$25 - $300+", "Free Tier": "No", "Best For": "Enterprise" }
            ]}
        />
    )
}
