import { CaseStudyLayout } from "@/components/work/case-study-layout"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Enterprise E-commerce | App Dev & SaaS | Case Study",
    description: "Scaling a high-volume D2C brand with a custom React Native app, headless Next.js storefront, and a bespoke SaaS inventory management system.",
}

export default function EnterpriseEcommerceCaseStudy() {
    return (
        <CaseStudyLayout
            title="Enterprise E-commerce"
            subtitle="Scaling a high-volume D2C brand with a custom React Native app, headless Next.js storefront, and a bespoke SaaS inventory management system."
            role="Enterprise Engineering Partner"
            timeline="16 Weeks"
            stack={["React Native", "Next.js", "Node.js", "PostgreSQL", "Redis", "Cybersecurity Audit"]}
            metrics={[
                { label: "Mobile Revenue", value: "+210%" },
                { label: "Inventory Errors", value: "0%" },
                { label: "Page Load Time", value: "< 1s" }
            ]}
            nextCaseStudy={{
                title: "EdTech & E-Learning",
                href: "/work/edtech-saas"
            }}
        >
            <h2>The Challenge</h2>
            <p>
                An enterprise-level e-commerce brand processing over 5,000 orders daily had outgrown their off-the-shelf Shopify setup.
            </p>
            <ul>
                <li><strong>Mobile Friction:</strong> Their mobile web experience was sluggish, leading to high cart abandonment rates among smartphone users.</li>
                <li><strong>Inventory Chaos:</strong> Their third-party inventory apps couldn&apos;t sync fast enough across multiple warehouses, resulting in overselling and stockouts.</li>
                <li><strong>Security Vulnerabilities:</strong> With high transaction volumes, they needed a comprehensive cybersecurity audit to ensure customer payment data was bulletproof.</li>
            </ul>

            <h2>The Solution: Custom App Dev & Internal SaaS</h2>
            <p>
                We architected a complete digital overhaul, replacing fragmented plugins with a unified, high-performance ecosystem.
            </p>

            <h3>1. Native Mobile App Development</h3>
            <p>
                We built a premium, lightning-fast mobile application using React Native for both iOS and Android.
            </p>
            <ul>
                <li><strong>Seamless Checkout:</strong> Integrated one-tap Apple Pay and Google Pay, reducing the checkout process from 2 minutes to 15 seconds.</li>
                <li><strong>Push Notification Engine:</strong> Implemented personalized, AI-driven push notifications for abandoned carts and restock alerts, driving massive re-engagement.</li>
                <li><strong>Offline Mode:</strong> Users can browse the catalog even with poor connectivity, syncing their cart once back online.</li>
            </ul>

            <h3>2. Bespoke SaaS Inventory Management</h3>
            <p>
                We replaced their failing third-party apps with a custom internal SaaS dashboard built on Node.js and PostgreSQL.
            </p>
            <ul>
                <li><strong>Real-Time Sync:</strong> Utilizing Redis for high-speed caching, inventory levels now sync across the mobile app, web storefront, and 4 physical warehouses in milliseconds.</li>
                <li><strong>Predictive Restocking:</strong> The system analyzes historical sales data to predict when specific SKUs will run out, automatically generating purchase orders for suppliers.</li>
            </ul>

            <h3>3. Headless Web App & Cybersecurity</h3>
            <p>
                We decoupled their frontend from Shopify, building a blazing-fast headless Next.js web app.
            </p>
            <ul>
                <li><strong>Sub-Second Loads:</strong> Static site generation (SSG) and edge caching reduced page load times to under 1 second, significantly boosting SEO rankings.</li>
                <li><strong>Cybersecurity Audit:</strong> Conducted a deep-dive security audit, implementing strict Content Security Policies (CSP), rate limiting, and advanced bot protection to secure the checkout flow against card testing attacks.</li>
            </ul>

            <h2>The Impact</h2>
            <p>
                The custom React Native app became their highest-converting channel, driving a 210% increase in mobile revenue. The internal SaaS inventory system completely eliminated overselling errors, and the headless web app provided a secure, ultra-fast experience that scaled effortlessly during Black Friday traffic spikes.
            </p>
        </CaseStudyLayout>
    )
}