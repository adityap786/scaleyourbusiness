import { CaseStudyLayout } from "@/components/work/case-study-layout"
import { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
    title: "Doner & Gyros India | Full Business Development | Case Study",
    description: "How we helped Doner & Gyros expand from a single franchise to 30+ outlets across 15+ cities — with influencer marketing, targeted ads, GMB optimisation, centralised ordering, and lead capture.",
}

export default function DonerGyrosCaseStudy() {
    return (
        <CaseStudyLayout
            title="Doner & Gyros India"
            subtitle="End-to-end business development for India's fastest-growing Mediterranean QSR — from influencer marketing and targeted ads to a centralised website, GMB optimisation across every outlet, and lead capture systems."
            role="Business Development Partner"
            timeline="Ongoing"
            stack={["Next.js", "Cloudinary", "Google Business", "Meta Ads", "WhatsApp API", "Lead Capture"]}
            metrics={[
                { label: "Outlets Expanded To", value: "30+" },
                { label: "Cities Across India", value: "15+" },
                { label: "Monthly Lead Capture", value: "500+" }
            ]}
            nextCaseStudy={{
                title: "Just Smile Hospitality",
                href: "/work/just-smile-catering"
            }}
        >
            <h2>The Challenge</h2>
            <p>
                Doner & Gyros was born in Dubai and entered India as a single Mediterranean restaurant franchise. When we met them, they had a handful of outlets and a big ambition: <strong>become India&apos;s largest Mediterranean QSR chain.</strong>
            </p>
            <p>
                But ambition without infrastructure is just a dream. They faced multiple challenges:
            </p>
            <ul>
                <li><strong>No centralised digital presence:</strong> Each outlet was running its own Instagram, its own local website (or no website at all), and its own Google listing — all inconsistent.</li>
                <li><strong>Franchise lead generation was manual:</strong> People interested in opening a franchise had no clear way to enquire. Leads came through word-of-mouth and random Instagram DMs.</li>
                <li><strong>No online ordering:</strong> Customers couldn&apos;t order directly — everything went through Zomato and Swiggy at 25-30% commission rates.</li>
                <li><strong>Marketing fragmentation:</strong> 25+ outlet managers hiring local designers, creating inconsistent social media content, and wasting ₹3.75 Lakh/month on redundant design work.</li>
                <li><strong>GMB chaos:</strong> Google Business profiles for each outlet were either unclaimed, incomplete, or managed poorly by local staff. They were invisible in &ldquo;restaurant near me&rdquo; searches.</li>
            </ul>

            <h2>The Solution: Complete Business Development</h2>
            <p>
                We didn&apos;t just build a website. We built the entire digital infrastructure for scaling a franchise brand across India.
            </p>

            <h3>1. Centralised Website with Multi-Outlet Ordering</h3>
            <p>
                We built <strong>donergyrosindia.com</strong> — a single, high-performance website that serves every outlet:
            </p>
            <ul>
                <li><strong>Location-Aware Ordering:</strong> Customers select their nearest outlet (or auto-detected) and order directly — no aggregator commissions. Full menu with dynamic availability per location.</li>
                <li><strong>Outlet Directory:</strong> Interactive map showing all 30+ outlets across 15+ cities (Delhi NCR, Mumbai, Rajasthan, and expanding) with individual pages for each location.</li>
                <li><strong>Franchise Enquiry System:</strong> Dedicated franchise page highlighting ROI (12-18 month breakeven), ₹25L+ starting investment, complete training program details, and a structured lead capture form.</li>
                <li><strong>Brand Storytelling:</strong> &ldquo;Born in Dubai, Doner & Gyros brings authentic Mediterranean cuisine to India&ldquo; — with health messaging (30% lower fat, 100% trans-fat free, 365 fresh daily), premium food photography, and social proof from press features (Forbes India, Times of India, Zomato, Swiggy).</li>
            </ul>

            <h3>2. Influencer Marketing Engine</h3>
            <p>
                Restaurant growth in India runs on food influencers. We built a systematic influencer program:
            </p>
            <ul>
                <li><strong>Local Food Blogger Network:</strong> Identified and onboarded 50+ food micro-influencers across every city where Doner & Gyros operates. Monthly tasting sessions at new and existing outlets generating authentic review content (Reels, Stories, blog posts).</li>
                <li><strong>Launch Campaigns:</strong> Every new outlet opening gets a dedicated influencer launch event — 10-15 local food bloggers invited for an exclusive preview. This generates 30-50 pieces of UGC content and 200K-500K local impressions on day one.</li>
                <li><strong>UGC Integration:</strong> Best influencer content repurposed across the website, social media, and paid ads — authentic content that outperforms studio shots by 3x on engagement.</li>
            </ul>

            <h3>3. Targeted Ads & Lead Capture</h3>
            <p>
                Two distinct ad funnels — one for customers, one for franchise leads:
            </p>
            <ul>
                <li><strong>Customer Acquisition Ads:</strong> Hyper-local Meta Ads (3-5km radius around each outlet) featuring mouth-watering food photography and influencer reviews. CTAs drive to the ordering website, not Zomato.</li>
                <li><strong>Franchise Lead Ads:</strong> Targeted at entrepreneurs and business investors in Tier 1 and Tier 2 cities. Ads highlight franchise ROI, brand power, and support system. Leads captured through dedicated landing pages and pushed to CRM with instant WhatsApp follow-up.</li>
                <li><strong>Retargeting:</strong> Website visitors who browsed the menu but didn&apos;t order get retargeted with time-limited offers. Franchise page visitors who didn&apos;t enquire get retargeted with success stories and testimonials.</li>
            </ul>

            <h3>4. Google Business Profile Optimisation (All Outlets)</h3>
            <p>
                We took over GMB management for every single outlet and standardised:
            </p>
            <ul>
                <li><strong>Professional Photography:</strong> Consistent, high-quality food and interior photos across all listings.</li>
                <li><strong>Review Generation:</strong> Automated post-visit SMS/WhatsApp asking customers to leave Google reviews. Went from scattered reviews to 4.2+ average rating across all locations.</li>
                <li><strong>Weekly Posts:</strong> New menu items, special offers, and outlet-specific promotions posted consistently across all 30+ profiles.</li>
                <li><strong>Q&A Management:</strong> Pre-populated answers to common questions — parking, veg options, group bookings, delivery options — across every profile.</li>
            </ul>

            <h3>5. Centralised Marketing Portal</h3>
            <p>
                To solve the design fragmentation problem, we built a custom marketing portal:
            </p>
            <ul>
                <li><strong>Template Generator:</strong> Outlet managers select from approved templates, enter offer details, and instantly generate brand-compliant creatives. No local designers needed.</li>
                <li><strong>Approval Workflow:</strong> Custom creative requests routed to Head Office for approval. Status tracked via SMS and email.</li>
                <li><strong>Cost Savings:</strong> Eliminated ₹12 Lakh/year in redundant local designer contracts. Brand consistency went from 40% to 100% across all outlets.</li>
            </ul>

            <h2>The Result</h2>
            <p>
                Doner & Gyros went from a small franchise operation to <strong>30+ outlets across 15+ cities</strong> — and the digital infrastructure we built is the backbone of that expansion. Every new outlet launches with a pre-built GMB profile, website integration, influencer network, and ad campaign — reducing new outlet ramp-up time from 3 months to 3 weeks.
            </p>
            <p>
                The centralised website now captures <strong>500+ leads per month</strong> — split between customer orders (driving revenue) and franchise enquiries (driving expansion). The franchise funnel alone has contributed to the opening of multiple new outlets.
            </p>
            <p>
                Featured in Forbes India, Times of India, and recognised on Zomato, Swiggy, JustDial, and MagicPin — the brand now has the digital credibility that matches its physical expansion. The website footer proudly states &ldquo;Powered by Bits And Bytes&rdquo; — because this isn&apos;t just a website, it&apos;s the growth engine for India&apos;s fastest-growing Mediterranean food chain.
            </p>
        </CaseStudyLayout>
    )
}
