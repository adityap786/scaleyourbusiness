import { CaseStudyLayout } from "@/components/work/case-study-layout"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Krux | Creative Studio | Case Study",
    description: "Rebranding a legacy design studio into a modern creative powerhouse.",
}

export default function KruxCaseStudy() {
    return (
        <CaseStudyLayout
            title="Krux Studio"
            subtitle="Modernizing a 20-year-old design legacy."
            role="Rebranding"
            timeline="2 Months"
            stack={["Brand Identity", "Webflow", "Spline 3D"]}
            metrics={[
                { label: "Deal Size", value: "+40%" },
                { label: "Intl Clients", value: "3 New" },
                { label: "Site Awards", value: "1" }
            ]}
            nextCaseStudy={{
                title: "Kreate",
                href: "/work/kreate"
            }}
        >
            <h2>The Challenge</h2>
            <p>
                Krux had been designing for 20 years but was perceived as "old school". They were losing bids to younger, hip agencies. They needed a facelift that respected their heritage but screamed innovation.
            </p>

            <h2>The Solution</h2>
            <p>
                We executed a complete <strong>Brand Overhaul</strong>.
            </p>

            <h3>Visual Identity</h3>
            <p>
                We moved from a serif-heavy logo to a custom geometric sans-serif that felt architectural and precise. The color palette shifted from maroon (traditional) to electric blue and charcoal (modern).
            </p>

            <h3>The Website</h3>
            <p>
                We built a Webflow site featuring 3D interactive elements using Spline. The "Our Process" section is a 3D journey that users can navigate, symbolizing the depth of Krux&apos;s thinking.
            </p>

            <h2>The Result</h2>
            <p>
                Post-rebrand, Krux closed 3 international contracts within a quarter, with clients citing the "modern and trustworthy" web presence as a key differentiator. Their average deal size increased by 40%.
            </p>
        </CaseStudyLayout>
    )
}
