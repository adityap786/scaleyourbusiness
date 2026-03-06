import { CaseStudyLayout } from "@/components/work/case-study-layout"
import { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
    title: "Peak Nutrition | Brand Transformation & Online Presence | Case Study",
    description: "How we transformed Peak Nutrition from a local offline supplement brand into a premium online D2C brand with redesigned packaging, website, and digital presence.",
}

export default function PeakNutritionCaseStudy() {
    return (
        <CaseStudyLayout
            title="Peak Nutrition"
            subtitle="Transforming an offline supplement brand into a premium D2C powerhouse with redesigned packaging, a high-converting website, and a complete online presence overhaul."
            role="Brand & Digital Partner"
            timeline="2 Months"
            stack={["Wix Studio", "Brand Design", "Packaging Design", "SEO", "Social Media"]}
            metrics={[
                { label: "Online Revenue Growth", value: "340%" },
                { label: "Brand Perception Score", value: "4.8/5" },
                { label: "Organic Traffic Increase", value: "520%" }
            ]}
            nextCaseStudy={{
                title: "Doner & Gyros India",
                href: "/work/doner-gyros-india"
            }}
        >
            <h2>The Challenge</h2>
            <p>
                Peak Nutrition was already doing well in the offline supplement market, selling through gyms, local retailers, and fitness events in Jaipur. But the brand had a problem: <strong>it looked like every other generic supplement brand on the shelf.</strong>
            </p>
            <p>
                The founders knew the product quality was excellent — FSSAI certified, lab-tested, and trusted by local athletes. But the packaging, branding, and digital presence did not reflect that quality. They wanted to:
            </p>
            <ul>
                <li>Reposition themselves as a <strong>premium, trustworthy</strong> supplement brand.</li>
                <li>Launch a professional e-commerce website to sell PAN India.</li>
                <li>Redesign packaging of their hero products to compete with established brands.</li>
                <li>Build credibility through online reviews, content, and social proof.</li>
            </ul>

            <h2>The Strategy</h2>
            <p>
                We approached this as a full <strong>brand elevation project</strong> — not just a &ldquo;make it look nice&rdquo; exercise. Every decision was tied to a business outcome: higher perceived value, more online conversions, and stronger shelf presence.
            </p>

            <h3>1. Packaging & Label Redesign</h3>
            <p>
                We started with the products that drive the most revenue — the <strong>Loaded EAAs (Fruit Punch), Real BCAA (Watermelon), and Peanut Butter range</strong>. The existing labels were cluttered and lacked visual hierarchy.
            </p>
            <p>
                Our design team created packaging that communicates premium quality at first glance:
            </p>
            <ul>
                <li><strong>EAAs:</strong> Clean white container with vibrant fruit splash photography, clear nutritional callouts (EAAs 8G, 30 servings), and a modern typography system.</li>
                <li><strong>Real BCAA:</strong> Bold black container with dynamic watermelon splash art, creating an immediate &ldquo;sports nutrition&rdquo; association. Clear product hierarchy — brand → product → flavour → key stats.</li>
                <li><strong>Peanut Butter Range:</strong> Warm, appetising kraft-style packaging with flavour-specific colour coding (Mango, Chocolate Crunchy, Malai Chikki). Presented in a premium wooden crate for gift sets and bulk orders.</li>
            </ul>
            <p>
                The result: products that <strong>look like they belong on Amazon&apos;s bestseller shelf</strong>, not a local store counter.
            </p>

            <h3>2. Website Design & Development</h3>
            <p>
                We built a professional e-commerce storefront on <strong>Wix Studio</strong> optimised for conversion:
            </p>
            <ul>
                <li><strong>Hero sections</strong> featuring lifestyle photography with athletes — not stock photos.</li>
                <li><strong>Product pages</strong> with detailed nutritional breakdowns, trust badges (FSSAI, lab-tested), and customer reviews.</li>
                <li><strong>Loyalty program integration</strong> to drive repeat purchases.</li>
                <li><strong>Blog section</strong> with SEO-optimised content on supplements, fitness tips, and ingredient transparency.</li>
                <li><strong>PAN India shipping</strong> prominently featured to build confidence for first-time online buyers.</li>
            </ul>

            <h3>3. Online Presence & Credibility Building</h3>
            <p>
                A premium website means nothing without traffic and trust. We built Peak Nutrition&apos;s digital credibility from scratch:
            </p>
            <ul>
                <li><strong>Instagram Strategy:</strong> Athlete-first content featuring real Peak Nutrition users, workout content, and product education. Consistent visual identity across all posts.</li>
                <li><strong>SEO Foundation:</strong> Targeted local keywords (&ldquo;authentic supplements Jaipur&rdquo;, &ldquo;FSSAI certified whey protein India&rdquo;) with blog content that positions Peak Nutrition as an authority.</li>
                <li><strong>Social Proof:</strong> Curated testimonials from athletes like Arjun Nair, Rahul Mehrotra, and Priya Iyer — placed strategically on the website and social media.</li>
                <li><strong>Newsletter System:</strong> Built an email capture system to own the customer relationship and drive repeat sales without depending on ads.</li>
            </ul>

            <h2>The Result</h2>
            <p>
                Within 60 days of the new packaging and website launch, Peak Nutrition saw a fundamental shift in how customers perceived the brand. Online orders from outside Jaipur started flowing in — something that never happened before. The brand now competes visually with MuscleBlaze and Optimum Nutrition on digital shelves.
            </p>
            <p>
                The redesigned packaging alone increased shelf pickup rates at partner gyms by over 2x — gym owners reported customers specifically asking for &ldquo;the new Peak Nutrition look.&rdquo;
            </p>
            <p>
                Most importantly, Peak Nutrition now owns its customer relationship through the website and email list — reducing dependency on third-party marketplaces and gym partnerships for sales.
            </p>
        </CaseStudyLayout>
    )
}
