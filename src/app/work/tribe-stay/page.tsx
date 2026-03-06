import { CaseStudyLayout } from "@/components/work/case-study-layout"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Tribe Stay | Student Housing Platform | Case Study",
    description: "Digital transformation for a luxury student housing brand. Booking engine, virtual tours, and tenant management.",
}

export default function TribeStayCaseStudy() {
    return (
        <CaseStudyLayout
            title="Tribe Stay"
            subtitle="Redefining student living with a digital-first booking experience."
            role="Full Stack Dev"
            timeline="4 Months"
            stack={["Next.js", "Strapi CMS", "Razorpay", "Google Maps"]}
            metrics={[
                { label: "Online Bookings", value: "85%" },
                { label: "Occupancy Rate", value: "98%" },
                { label: "Site Speed", value: "0.8s" }
            ]}
            nextCaseStudy={{
                title: "Soshals",
                href: "/work/soshals"
            }}
        >
            <h2>The Challenge</h2>
            <p>
                Tribe Stay offers premium student accommodation. Their previous website was just a brochure; bookings happened offline via phone calls and spreadsheets. This led to double bookings and lost leads during peak admission season.
            </p>

            <h2>The Solution</h2>
            <p>
                We built a <strong>Real-time Inventory & Booking Engine</strong>.
            </p>

            <h3>Seamless Booking Flow</h3>
            <p>
                Students can now:
            </p>
            <ol>
                <li>Select their city (Pune/Mumbai).</li>
                <li>Filter hostels by proximity to their college.</li>
                <li>View 360-degree virtual tours of the rooms.</li>
                <li>Select a bed, pay a token amount via Razorpay, and secure their booking instantly.</li>
            </ol>

            <h2>The Result</h2>
            <p>
                Tribe Stay achieved 98% occupancy within 3 months of launch. The automated system saved the sales team ~40 hours/week of manual data entry, allowing them to focus on vital tasks like student community building.
            </p>
        </CaseStudyLayout>
    )
}
