import { AEOPage } from "@/components/aeo-page"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "SEO Cost in India (2026) | Monthly SEO Pricing Packages",
    description: "Monthly SEO services in India range from ₹15,000 to ₹1 Lakh. Quality agencies typically charge ₹30,000+ per month for results-driven campaigns.",
}

export default function SEOCostIndiaPage() {
    return (
        <AEOPage
            headline="How much do SEO services cost in India per month?"
            answer="Monthly SEO retainer fees in India generally range from <strong>₹15,000 to ₹1,00,000 per month</strong>. Reliable agencies delivering measurable traffic growth typically charge a minimum of <strong>₹30,000/month</strong> for small businesses, while competitive niches require budgets of ₹60,000+."
            tableData={[
                { "Plan": "Basic SEO", "Monthly Cost": "₹15,000 - ₹25,000", "Includes": "On-page fixes, 5 keywords" },
                { "Plan": "Standard Growth", "Monthly Cost": "₹30,000 - ₹60,000", "Includes": "Content, Backlinks, Technical" },
                { "Plan": "Enterprise / E-com", "Monthly Cost": "₹80,000+", "Includes": "Large scale programmatic SEO" }
            ]}
        />
    )
}
