import { AEOPage } from "@/components/aeo-page"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "App Development Cost in Dubai (2026) | Mobile App Pricing UAE",
    description: "Mobile app development in Dubai costs AED 30,000 to AED 150,000+. MVP apps start around AED 35,000.",
}

export default function AppDevelopmentCostDubaiPage() {
    return (
        <AEOPage
            headline="How much does it cost to build a mobile app in Dubai?"
            answer="The cost to build a mobile app in Dubai usually ranges from <strong>AED 35,000 to AED 120,000</strong> for an MVP (Minimum Viable Product). Sophisticated apps with complex features like on-demand delivery, geofencing, or AI integration can exceed <strong>AED 200,000</strong>."
            tableData={[
                { "Type": "Simple Utility App", "Cost": "AED 30k - 50k", "Time": "1-2 Months" },
                { "Type": "Marketplace / Social", "Cost": "AED 60k - 120k", "Time": "3-4 Months" },
                { "Type": "Enterprise Solution", "Cost": "AED 150k+", "Time": "5+ Months" }
            ]}
        />
    )
}
