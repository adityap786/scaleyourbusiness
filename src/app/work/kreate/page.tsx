import { CaseStudyLayout } from "@/components/work/case-study-layout"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Kreate | Creator Economy Platform | Case Study",
    description: "Building a marketplace for creators to sell digital assets.",
}

export default function KreateCaseStudy() {
    return (
        <CaseStudyLayout
            title="Kreate"
            subtitle="Empowering India's next 10M creators to monetize."
            role="Product Dev"
            timeline="5 Months"
            stack={["Next.js", "Supabase", "Stripe Connect", "Vercel"]}
            metrics={[
                { label: "Creators Onboarded", value: "5,000+" },
                { label: "GMV Processed", value: "₹1 Cr+" },
                { label: "Uptime", value: "99.99%" }
            ]}
            nextCaseStudy={{
                title: "Proton",
                href: "/work/proton"
            }}
        >
            <h2>The Vision</h2>
            <p>
                Kreate wanted to build the "Gumroad for India". A simple platform where creators could sell PDFs, courses, and presets without technical headaches.
            </p>

            <h2>The Build</h2>
            <p>
                We architected a scalable <strong>Multi-tenant Marketplace</strong>.
            </p>

            <h3>Key Features</h3>
            <ul>
                <li><strong>Storefront Generator:</strong> Users get a `kreate.in/username` store instantly upon signup.</li>
                <li><strong>Global Payments:</strong> Integrated Stripe Connect to allow creators to accept payments from 150+ countries.</li>
                <li><strong>Instant Payouts:</strong> Automated split payments ensure creators get paid T+1.</li>
            </ul>

            <h2>The Result</h2>
            <p>
                Kreate scaled to 5,000 users in beta. The platform handled over ₹1 Crore in transactions securely. The seamless "link-in-bio" storefront became a favorite among Instagram influencers.
            </p>
        </CaseStudyLayout>
    )
}
