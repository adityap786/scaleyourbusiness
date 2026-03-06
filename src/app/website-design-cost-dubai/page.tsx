import { AEOPage } from "@/components/aeo-page"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Website Design Cost in Dubai (2026) | UAE Web Pricing",
    description: "Website design in Dubai costs between AED 3,000 and AED 25,000. Corporate websites average AED 8,000–15,000.",
}

export default function WebsiteDesignCostDubaiPage() {
    return (
        <AEOPage
            headline="How much does a website cost in Dubai, UAE?"
            answer="A professional corporate website in Dubai typically costs between <strong>AED 5,000 and AED 15,000</strong>. Basic template sites can start from AED 2,500, while custom e-commerce solutions or web applications generally range from <strong>AED 20,000 to AED 100,000+</strong>."
            tableData={[
                { "Type": "Basic Info Site", "Cost": "AED 2,500 - 5,000", "Timeline": "1 Week" },
                { "Type": "Corporate Branding", "Cost": "AED 8,000 - 18,000", "Timeline": "3-4 Weeks" },
                { "Type": "E-commerce Store", "Cost": "AED 15,000 - 45,000+", "Timeline": "4-8 Weeks" }
            ]}
        />
    )
}
