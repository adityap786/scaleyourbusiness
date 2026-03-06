import { CaseStudyLayout } from "@/components/work/case-study-layout"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Beauty Brand E-commerce | D2C Cosmetics Growth | Case Study",
    description: "How an indie cosmetics brand used UGC-driven marketing, a shoppable content experience, and retention automation to build a loyal community of 25,000+ customers.",
}

export default function BeautyBrandCaseStudy() {
    return (
        <CaseStudyLayout
            title="Aura Cosmetics"
            subtitle="How an indie beauty brand used UGC-driven marketing, a shoppable content experience, and retention automation to grow from ₹3L/month to ₹28L/month in online revenue — profitably."
            role="D2C Growth Partner"
            timeline="6 Months"
            stack={["Shopify", "Klaviyo", "Meta Ads", "UGC Strategy", "Loyalty Program"]}
            metrics={[
                { label: "Monthly Revenue Growth", value: "₹3L → ₹28L" },
                { label: "ROAS (Meta Ads)", value: "5.2x" },
                { label: "Customer Community Size", value: "25K+" }
            ]}
            nextCaseStudy={{
                title: "Restaurant & F&B Digital",
                href: "/work/restaurant-fb-digital"
            }}
        >
            <h2>The Challenge</h2>
            <p>
                Aura Cosmetics is a clean beauty brand — vegan, cruelty-free, dermatologist-approved formulations for the Indian skin and climate. The products are genuinely excellent. But the brand was drowning in a sea of D2C cosmetics brands doing the exact same thing:
            </p>
            <ul>
                <li><strong>Undifferentiated positioning:</strong> &ldquo;Clean beauty&rdquo;, &ldquo;natural ingredients&rdquo;, &ldquo;dermatologist-tested&rdquo; — every brand says this. Aura had no unique brand voice or visual identity that set them apart.</li>
                <li><strong>Paid ads addiction:</strong> 95% of sales came from Meta Ads. ROAS was 1.8x — barely breaking even after accounting for product costs, shipping, and returns. Turning off ads meant turning off revenue.</li>
                <li><strong>Zero retention:</strong> First-time buyers rarely came back. No email flows, no loyalty program, no community. Every customer had to be re-acquired at full cost.</li>
                <li><strong>Low AOV:</strong> Average order was ₹650 — a single lipstick or moisturiser. Not enough margin to sustain profitable growth.</li>
            </ul>

            <h2>The Strategy</h2>

            <h3>1. UGC-First Brand Identity</h3>
            <p>
                We stopped creating studio content and went <strong>100% UGC (User Generated Content):</strong>
            </p>
            <ul>
                <li><strong>Creator Seeding Program:</strong> Sent free products to 200 micro-creators (5K-30K followers) — not for sponsored posts, but for honest reviews. 70% created content organically because the products are genuinely good.</li>
                <li><strong>Customer Content Strategy:</strong> Every package includes a card: &ldquo;Share your Aura look on Instagram with #MyAuraGlow and get ₹200 off your next order.&rdquo; This generates 50+ pieces of UGC per week.</li>
                <li><strong>Shoppable UGC Gallery:</strong> Website homepage and product pages feature a live grid of real customer photos/videos — tagged directly to the products featured. Conversion rate on products with UGC is 2.8x higher than without.</li>
                <li><strong>Brand Voice Overhaul:</strong> Moved from generic &ldquo;clean beauty&rdquo; messaging to a bold, witty personality — &ldquo;Skincare that doesn&apos;t cost your entire paycheck&rdquo;, &ldquo;Your skin is Indian. Your skincare should be too.&rdquo;</li>
            </ul>

            <h3>2. Retention Machine</h3>
            <p>
                The foundation of profitable D2C is <strong>getting customers to come back without paying to re-acquire them:</strong>
            </p>
            <ul>
                <li><strong>Klaviyo Email Flows:</strong> 12 automated sequences including welcome series, post-purchase education (&ldquo;How to get the best results from your new serum&rdquo;), replenishment reminders (your moisturiser runs out in ~45 days, here&apos;s 10% off), and win-back campaigns.</li>
                <li><strong>Loyalty Program:</strong> Points on every purchase, birthday rewards, bonus points for referrals and reviews. Top-tier members get early access to new launches. The program now drives 22% of monthly revenue.</li>
                <li><strong>WhatsApp Community:</strong> 25K+ members in a WhatsApp broadcast list. Product launch announcements, skincare tips, exclusive discount codes. Open rate is 85% — unmatched by any email campaign.</li>
                <li><strong>Bundle & Subscribe:</strong> Curated product bundles (AM Routine Kit, Night Repair Set) at 15% discount. Subscription option for everyday products (cleanser, moisturiser) with auto-delivery every 45 days.</li>
            </ul>

            <h3>3. Profitable Paid Acquisition</h3>
            <p>
                We restructured the ad strategy to be <strong>profitable from day one:</strong>
            </p>
            <ul>
                <li><strong>UGC as Ad Creative:</strong> Top-performing organic UGC repurposed as ad creatives — authentic, relatable, and high-converting. Production cost: ₹0. These outperform studio ads by 3x on ROAS.</li>
                <li><strong>Bundle-First Advertising:</strong> Instead of advertising individual ₹650 products, we advertise ₹1,800-₹2,400 bundles. Higher AOV = more margin = profitable ads.</li>
                <li><strong>Lookalike Audiences from Loyal Customers:</strong> Meta Lookalike audiences built from the top 5% of customers (repeat buyers, high LTV) instead of all purchasers. Quality over quantity.</li>
                <li><strong>Retargeting with Social Proof:</strong> Cart abandoners see ads featuring UGC from other customers using the exact product they left behind.</li>
            </ul>

            <h2>The Result</h2>
            <p>
                Aura went from ₹3 Lakh to <strong>₹28 Lakh in monthly online revenue in 6 months</strong> — and it&apos;s profitable. ROAS climbed from 1.8x to 5.2x because the average order value doubled (from ₹650 to ₹1,350) and the repeat purchase rate hit 42%.
            </p>
            <p>
                The UGC strategy created a flywheel: more customers → more UGC → better ad creatives → more customers. The brand now receives 50+ pieces of organic customer content per week — an asset that compounds over time.
            </p>
            <p>
                Most importantly, revenue dependency on paid ads dropped from 95% to 55%. Email, loyalty, WhatsApp, and organic search now drive 45% of revenue — channels with nearly zero marginal cost.
            </p>
        </CaseStudyLayout>
    )
}
