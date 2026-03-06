import { CaseStudyLayout } from "@/components/work/case-study-layout"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Eggeto | India's First Instant Omelette Premix E-Commerce",
    description: "How we engineered a blazing-fast Next.js e-commerce storefront for an innovative D2C food tech brand.",
}

export default function EggetoCaseStudy() {
    return (
        <CaseStudyLayout
            title="Eggeto"
            subtitle="Launching India's first Instant Omelette Premix with a high-converting Next.js e-commerce experience."
            role="Technical & Design Partner"
            timeline="3 Months"
            stack={["Next.js", "Strapi CMS", "Shopify Plus", "Tailwind CSS"]}
            metrics={[
                { label: "Conversion Rate", value: "+4.2%" },
                { label: "Page Load Speed", value: "0.8s" },
                { label: "Mobile Sales", value: "3.5x" }
            ]}
            nextCaseStudy={{
                title: "BH Hotels",
                href: "/work/bh-hotels"
            }}
        >
            <h2>The Challenge</h2>
            <p>
                Eggeto had developed an incredibly innovative product: <strong>India's first Instant Omelette premix.</strong> However, they lacked a digital storefront that communicated the speed, ease, and quality of their food tech to modern Indian consumers.
            </p>
            <p>
                As a D2C food brand launching entirely online, they needed:
            </p>
            <ul>
                <li>An explosive e-commerce presence that emphasized mouth-watering visuals and brand excitement.</li>
                <li>A blazing fast mobile experience, knowing over 80% of their ad traffic would come from smartphones.</li>
                <li>Frictionless 1-click checkout flows to capitalize on impulse food purchases.</li>
            </ul>

            <h2>The Solution</h2>
            <p>
                We engineered a custom Next.js e-commerce storefront integrated with a headless CMS for seamless product management. Leveraging edge caching and static generation, we ensured the site loaded instantaneously regardless of the end-user's device or network.
            </p>
            <p>
                Our design language prioritized high-contrast, energetic brand colors (yellows and crisp whites) paired with large, high-res lifestyle product imagery to drive hunger and curiosity.
            </p>

            <h2>The Result</h2>
            <p>
                By treating their storefront as a premium digital product instead of a basic template, Eggeto achieved an incredible 4.2% conversion rate out of the gate. Page load speeds hovered stably under 0.8 seconds, acting directly as a sales catalyst for their aggressive mobile ad campaigns.
            </p>
        </CaseStudyLayout>
    )
}
