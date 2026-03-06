import { CaseStudyLayout } from "@/components/work/case-study-layout"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Natura | D2C Skincare Brand | Case Study",
    description: "Launching an organic skincare brand with Shopify and Influencer Marketing.",
}

export default function NaturaCaseStudy() {
    return (
        <CaseStudyLayout
            title="Natura Skincare"
            subtitle="From kitchen recipes to a national D2C brand."
            role="E-commerce Dev"
            timeline="2 Months"
            stack={["Shopify", "Klaviyo", "Meta Ads", "Yotpo"]}
            metrics={[
                { label: "First Month Sales", value: "₹5 Lakh" },
                { label: "ROAS", value: "4.5x" },
                { label: "Email Revenue", value: "20%" }
            ]}
            nextCaseStudy={{
                title: "Doner & Gyros",
                href: "/work/doner-gyros-india"
            }}
        >
            <h2>The Concept</h2>
            <p>
                Natura creates organic, chemical-free skincare products. The founder wanted to launch a Direct-to-Consumer (D2C) brand that felt honest and premium.
            </p>

            <h2>The Build</h2>
            <p>
                We chose <strong>Shopify</strong> for its robust e-commerce features. We customized a premium theme to reflect the brand's "earthy and pure" aesthetic.
            </p>

            <h3>Retention Marketing</h3>
            <p>
                We integrated <strong>Klaviyo</strong> for email marketing.
            </p>
            <ul>
                <li><strong>Welcome Flow:</strong> 10% off first order.</li>
                <li><strong>Abandoned Cart:</strong> "Did you forget your glowing skin?" reminders.</li>
                <li><strong>Post-Purchase:</strong> Education on how to use the products.</li>
            </ul>

            <h2>The Result</h2>
            <p>
                Natura launched with a bang. Combining Meta Ads with our email flows, they achieved a Return on Ad Spend (ROAS) of 4.5x in the first month. 20% of their revenue now comes from automated emails (free traffic).
            </p>
        </CaseStudyLayout>
    )
}
