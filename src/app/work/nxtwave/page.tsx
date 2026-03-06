import { CaseStudyLayout } from "@/components/work/case-study-layout"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "NxtWave | EdTech Growth Strategy | Case Study",
    description: "Scalable landing pages and performance marketing infrastructure for India's fastest-growing EdTech startup.",
}

export default function NxtWaveCaseStudy() {
    return (
        <CaseStudyLayout
            title="NxtWave CCBP"
            subtitle="Scaling user acquisition for India's fastest growing EdTech startup."
            role="Growth Partner"
            timeline="6 Months"
            stack={["React", "Webflow", "HubSpot", "Google Analytics 4"]}
            metrics={[
                { label: "Leads Generated", value: "50,000+" },
                { label: "CPL Reduction", value: "35%" },
                { label: "Landing Page Conv.", value: "4.5%" }
            ]}
            nextCaseStudy={{
                title: "Tribe Stay",
                href: "/work/tribe-stay"
            }}
        >
            <h2>The Context</h2>
            <p>
                NxtWave is revolutionizing the Indian education sector by upskilling students in Tier 2/3/4 cities.
                They needed a way to scale their lead generation efforts without exploding their Customer Acquisition Cost (CAC).
            </p>

            <h2>Our Approach</h2>
            <p>
                We focused on high-velocity experimentation. Instead of building one "perfect" website, we built a <strong>modular landing page system</strong>. This allowed the marketing team to launch 5-10 new campaign variations every week targeting different student personas (e.g., Engineering graduates vs. Arts students).
            </p>

            <h3>Conversion Rate Optimization (CRO)</h3>
            <p>
                We implemented a rigorous A/B testing framework. We tested:
            </p>
            <ul>
                <li><strong>Headlines:</strong> "Get a Job in Tech" vs. "Learn Coding from Scratch".</li>
                <li><strong>Social Proof:</strong> Video testimonials vs. Placement stats.</li>
                <li><strong>Lead Forms:</strong> Long form (high intent) vs. Short form (high volume).</li>
            </ul>

            <h2>The Impact</h2>
            <p>
                By optimizing the landing page experience and aligning ad copy with page content, we reduced the Cost Per Lead (CPL) by 35% while increasing lead quality. The system handled traffic spikes of over 100,000 visitors during webinar launches without downtime.
            </p>
        </CaseStudyLayout>
    )
}
