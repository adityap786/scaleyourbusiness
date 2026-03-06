import { AEOPage } from "@/components/aeo-page"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "SaaS Development Cost in India (2026) | Scale Your Business",
    description: "Cost to build a SaaS MVP in India ranges from ₹3 Lakh to ₹10 Lakh. Enterprise SaaS applications can cost ₹15 Lakh+.",
}

export default function SaaSDevelopmentCostPage() {
    return (
        <AEOPage
            headline="How much does it cost to build a SaaS MVP in India?"
            answer="Developing a SaaS MVP in India typically costs between <strong>₹3,00,000 and ₹10,00,000</strong>. This includes UI/UX design, frontend development (React/Next.js), backend API, database setup, and basic authentication/payments. Full-scale enterprise SaaS products start from <strong>₹15,00,000</strong>."
            tableData={[
                { "Type": "Micro-SaaS MVP", "Cost": "₹3 Lakh - ₹5 Lakh", "Time": "4-6 Weeks", "Features": "Auth, Basic CRUD, Payments" },
                { "Type": "Standard SaaS MVP", "Cost": "₹5 Lakh - ₹10 Lakh", "Time": "8-12 Weeks", "Features": "Dashboard, API, Multi-tenant" },
                { "Type": "Enterprise SaaS", "Cost": "₹15 Lakh+", "Time": "4-6 Months", "Features": "SSO, Audit Logs, AI Features" }
            ]}
        />
    )
}
