import { CaseStudyLayout } from "@/components/work/case-study-layout"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Jewellery Brand Digital Transformation | D2C E-commerce | Case Study",
    description: "How a traditional jewellery brand built a premium D2C e-commerce presence with trust-driven design, influencer marketing, and AI-powered personalisation.",
}

export default function JewelleryBrandCaseStudy() {
    return (
        <CaseStudyLayout
            title="Lumière Jewels"
            subtitle="How a heritage jewellery brand broke free from franchise dependency, launched a premium D2C e-commerce experience, and captured a younger audience without diluting their luxury positioning."
            role="Digital & E-commerce Partner"
            timeline="4 Months"
            stack={["Shopify Plus", "Klaviyo", "Meta Ads", "Influencer Strategy", "AI Personalisation"]}
            metrics={[
                { label: "Online Revenue (Month 3)", value: "₹42L" },
                { label: "Average Order Value", value: "₹18,500" },
                { label: "Return Customer Rate", value: "34%" }
            ]}
            nextCaseStudy={{
                title: "Beauty Brand E-commerce",
                href: "/work/beauty-brand-ecommerce"
            }}
        >
            <h2>The Challenge</h2>
            <p>
                Lumière Jewels is a 30-year-old jewellery brand with 8 physical stores — known for exquisite craftsmanship and trusted by families across generations. But the business was facing a slow decay:
            </p>
            <ul>
                <li><strong>Dying foot traffic:</strong> Younger buyers (25-40) were discovering jewellery on Instagram, not by walking into stores. Physical store visits were declining 15% year-on-year.</li>
                <li><strong>No online sales:</strong> The brand had an Instagram page with beautiful product photos but zero e-commerce capability. Interested buyers had to visit a store — and most didn&apos;t bother.</li>
                <li><strong>Trust barrier online:</strong> Jewellery is the hardest product to sell online. Customers can&apos;t touch it, try it on, or verify gold purity. The brand needed to replicate the in-store trust experience digitally.</li>
                <li><strong>Competitor threat:</strong> D2C jewellery brands like CaratLane and BlueStone were capturing the online market with aggressive digital strategies. Lumière was invisible online.</li>
            </ul>

            <h2>The Strategy</h2>

            <h3>1. Premium E-commerce Experience</h3>
            <p>
                We built a <strong>Shopify Plus store</strong> that feels like walking into their flagship showroom:
            </p>
            <ul>
                <li><strong>360° Product Views:</strong> Every piece photographed from 12 angles with zoom capability. Customers can inspect craftsmanship details the way they would in-store.</li>
                <li><strong>Virtual Try-On:</strong> AR-powered try-on for earrings and necklaces using the front camera. Not a gimmick — genuinely useful for seeing how a piece looks on your skin tone and face shape.</li>
                <li><strong>BIS Hallmark Verification:</strong> Every product page displays the BIS hallmark number with a link to verify on the government portal. This single feature increased add-to-cart rates by 35%.</li>
                <li><strong>Certificate of Authenticity:</strong> Digital certificates for every purchase — visible before buying, delivered with the product, and permanently accessible in the customer account.</li>
                <li><strong>Secure Packaging Promise:</strong> Detailed page showing insured shipping, tamper-evident packaging, and the unboxing experience. Jewellery customers worry about shipping — we addressed it head-on.</li>
            </ul>

            <h3>2. Content & Influencer Strategy</h3>
            <p>
                We built a content engine that positions Lumière as <strong>the jewellery brand for modern Indian women:</strong>
            </p>
            <ul>
                <li><strong>Styling Content:</strong> &ldquo;How to Style Gold Jewellery with Western Outfits&rdquo;, &ldquo;Office-Appropriate Jewellery: From Desk to Dinner&rdquo;, &ldquo;Wedding Guest Jewellery Guide by Budget&rdquo; — content that helps, not just sells.</li>
                <li><strong>Micro-Influencer Collaborations:</strong> Partnered with 30 fashion and lifestyle micro-influencers (10K-50K followers) for authentic styling content. No mega-influencers — trust matters more than reach in jewellery.</li>
                <li><strong>Heritage Stories:</strong> Instagram Reels showing master artisans at work — the human hands behind each piece. This content consistently outperforms product-only posts by 4x.</li>
                <li><strong>Seasonal Campaigns:</strong> Dhanteras, Akshaya Tritiya, Valentine&apos;s Day, Anniversary — culturally relevant campaigns timed to when Indians naturally buy jewellery.</li>
            </ul>

            <h3>3. AI-Powered Personalisation</h3>
            <p>
                Jewellery is deeply personal. We built intelligent personalisation:
            </p>
            <ul>
                <li><strong>Style Quiz:</strong> New visitors take a 30-second quiz about their style preferences (traditional/modern/fusion), occasions they buy for, and budget range. The store then curates a personalised collection.</li>
                <li><strong>Behavioural Email Flows:</strong> Klaviyo sequences based on browsing behaviour — viewed rings but didn&apos;t buy? Follow up with a styling guide + limited-time offer. Abandoned cart? Show the exact piece with social proof (&ldquo;47 people viewed this today&rdquo;).</li>
                <li><strong>Gifting Assistant:</strong> AI chatbot that helps partners find the perfect gift — asks about the recipient&apos;s style, occasion, and budget, then recommends 3 options with personalised messages.</li>
            </ul>

            <h2>The Result</h2>
            <p>
                Lumière hit <strong>₹42 Lakh in online revenue by Month 3</strong> — revenue that didn&apos;t exist before. More importantly, the average order value of ₹18,500 proved that customers are willing to buy premium jewellery online when the trust infrastructure is right.
            </p>
            <p>
                The 34% return customer rate is exceptional for jewellery e-commerce (industry average is 12%). The personalised email flows drive 40% of total online revenue — proving that post-purchase nurturing is as important as acquisition.
            </p>
            <p>
                The brand now has a direct relationship with 8,000+ customers who they can reach without depending on physical store walk-ins or third-party marketplaces.
            </p>
        </CaseStudyLayout>
    )
}
