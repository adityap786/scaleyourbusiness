import { CaseStudyLayout } from "@/components/work/case-study-layout"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Beauty & Cosmetics | AI Creatives & Web App | Case Study",
    description: "How we developed an AR-powered virtual try-on web app and automated AI creative generation pipeline for a leading beauty brand.",
}

export default function BeautyCosmeticsCaseStudy() {
    return (
        <CaseStudyLayout
            title="Beauty & Cosmetics"
            subtitle="Developing an AR-powered virtual try-on web app and an automated AI creative generation pipeline that slashed ad spend and boosted conversions."
            role="AI & Web App Partner"
            timeline="8 Weeks"
            stack={["Next.js", "WebGL", "Stable Diffusion", "ComfyUI", "Python", "Shopify Plus"]}
            metrics={[
                { label: "Conversion Rate", value: "+140%" },
                { label: "Creative Production", value: "10x Faster" },
                { label: "Ad CPA", value: "-40%" }
            ]}
            nextCaseStudy={{
                title: "Enterprise E-commerce",
                href: "/work/enterprise-ecommerce"
            }}
        >
            <h2>The Challenge</h2>
            <p>
                A fast-growing D2C beauty brand was struggling with two massive bottlenecks:
            </p>
            <ul>
                <li><strong>High Return Rates:</strong> Customers were buying makeup online, finding the shade didn&apos;t match their skin tone, and returning the products.</li>
                <li><strong>Creative Burnout:</strong> Their marketing team couldn&apos;t produce high-quality ad creatives fast enough to test new campaigns on Meta and TikTok, leading to ad fatigue and soaring CPAs.</li>
            </ul>

            <h2>The Solution: AR Web App & AI Creatives</h2>
            <p>
                We tackled both problems simultaneously by building a custom AR web application for the storefront and an internal AI automation pipeline for the marketing team.
            </p>

            <h3>1. AR Virtual Try-On Web App</h3>
            <p>
                We integrated a high-performance WebGL-based augmented reality engine directly into their Next.js headless Shopify storefront.
            </p>
            <ul>
                <li><strong>Real-Time Face Tracking:</strong> Users can open their mobile or desktop camera and instantly &ldquo;try on&rdquo; different shades of lipstick, foundation, and eyeshadow.</li>
                <li><strong>Lighting Adaptation:</strong> The AR engine dynamically adjusts the product color based on the user&apos;s ambient lighting, ensuring a highly accurate representation.</li>
                <li><strong>Frictionless Experience:</strong> Built entirely as a web app—no downloads required. The feature loads in under 2 seconds, keeping bounce rates low.</li>
            </ul>

            <h3>2. Automated AI Creative Pipeline</h3>
            <p>
                To solve the creative bottleneck, we built a custom AI image generation workflow using Stable Diffusion and ComfyUI.
            </p>
            <ul>
                <li><strong>Product Training:</strong> We trained custom LoRA (Low-Rank Adaptation) models on their specific product catalog, ensuring the AI perfectly replicates their packaging and textures.</li>
                <li><strong>Automated Generation:</strong> The marketing team simply inputs a prompt (e.g., &ldquo;Lipstick on a marble podium with tropical sunlight&rdquo;), and the system generates dozens of photorealistic, brand-aligned ad creatives in minutes.</li>
                <li><strong>A/B Testing at Scale:</strong> This allowed the brand to test 10x more creatives per week, rapidly identifying winning ads and scaling them.</li>
            </ul>

            <h2>The Impact</h2>
            <p>
                The virtual try-on web app gave customers the confidence to buy, increasing the overall conversion rate by 140% and drastically reducing returns. Meanwhile, the AI creative pipeline eliminated the need for expensive weekly photoshoots, dropping their Cost Per Acquisition (CPA) by 40% through rapid, high-volume ad testing.
            </p>
        </CaseStudyLayout>
    )
}