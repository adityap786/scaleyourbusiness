import { CaseStudyLayout } from "@/components/work/case-study-layout"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Raviraj Realty | Real Estate Lead Gen | Case Study",
    description: "Generating ₹50 Cr+ in pipeline value for a luxury real estate developer using automated lead nurturing.",
}

export default function RavirajRealtyCaseStudy() {
    return (
        <CaseStudyLayout
            title="Raviraj Realty"
            subtitle="Generating qualified leads for luxury 3 & 4 BHK apartments."
            role="Digital Marketing"
            timeline="Ongoing"
            stack={["Facebook Ads", "Zoho CRM", "WhatsApp API", "Unbounce"]}
            metrics={[
                { label: "Site Visits", value: "12,000+" },
                { label: "Qualified Leads", value: "450+" },
                { label: "Sales Closed", value: "₹50 Cr+" }
            ]}
            nextCaseStudy={{
                title: "Healthcare & Telemedicine",
                href: "/work/healthcare-telemedicine"
            }}
        >
            <h2>The Challenge</h2>
            <p>
                Raviraj Realty was launching a premium project in Pune. Traditional print ads were expensive and unmeasurable. They needed a digital channel to reach HNI (High Net-worth Individuals).
            </p>

            <h2>The Strategy</h2>
            <p>
                We implemented a <strong>Hyper-Local Performance Marketing</strong> campaign.
            </p>

            <h3>Targeting & Creative</h3>
            <p>
                We targeted users interested in "Luxury Real Estate" within a 5km radius of the project site. The ad creatives highlighted the "Life Improvement" aspect rather than just floor plans.
            </p>

            <h3>Nurturing Automation</h3>
            <p>
                Leads from Facebook/Insta were instantly pushed to Zoho CRM.
            </p>
            <ul>
                <li><strong>Instant WhatsApp Welcome:</strong> "Here is the brochure for Raviraj 93 Avenue."</li>
                <li><strong>Sales Alert:</strong> The sales team received a notification to call the lead within 5 minutes.</li>
            </ul>

            <h2>The Result</h2>
            <p>
                The campaign generated over 450 site visits in 3 months. The sales team closed 15 units, resulting in a revenue pipeline of over ₹50 Crores.
            </p>
        </CaseStudyLayout>
    )
}
