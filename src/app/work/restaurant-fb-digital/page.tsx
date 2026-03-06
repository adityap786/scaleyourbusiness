import { CaseStudyLayout } from "@/components/work/case-study-layout"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Restaurant & F&B Digital Growth | Multi-Outlet Strategy | Case Study",
    description: "How a multi-outlet restaurant chain used centralised ordering, GMB optimisation, and influencer-driven local marketing to double monthly revenue across all locations.",
}

export default function RestaurantFBCaseStudy() {
    return (
        <CaseStudyLayout
            title="Spice Republic"
            subtitle="How a 6-outlet modern Indian restaurant chain built a centralised digital ordering system, dominated local search across every location, and used influencer-driven marketing to double monthly footfall."
            role="Digital & Business Partner"
            timeline="5 Months"
            stack={["Next.js", "Online Ordering", "Google Business", "Influencer Marketing", "Meta Ads"]}
            metrics={[
                { label: "Monthly Revenue Increase", value: "2.1x" },
                { label: "Online Orders Share", value: "35%" },
                { label: "Google Reviews (Total)", value: "2,400+" }
            ]}
            nextCaseStudy={{
                title: "Healthcare & Telemedicine",
                href: "/work/healthcare-telemedicine"
            }}
        >
            <h2>The Challenge</h2>
            <p>
                Spice Republic operates 6 outlets across 3 cities — a modern Indian cuisine restaurant that&apos;s built a loyal dine-in following. But the business was hitting a ceiling:
            </p>
            <ul>
                <li><strong>Zero online ordering:</strong> No way for customers to order directly. 100% of delivery orders went through Zomato and Swiggy — at 25-30% commission. On a ₹500 order, the restaurant kept ₹350-₹375 after commission and packaging costs.</li>
                <li><strong>No centralised digital presence:</strong> Each outlet had its own Google Business profile managed by the local manager — inconsistent information, missing photos, unanswered reviews.</li>
                <li><strong>Marketing fragmentation:</strong> Each outlet ran its own Instagram page. Different content quality, different posting schedules, different brand voice. The brand felt like 6 different restaurants.</li>
                <li><strong>No customer data:</strong> Zomato and Swiggy own the customer relationship. Spice Republic couldn&apos;t retarget, couldn&apos;t send offers, couldn&apos;t even email their own customers.</li>
            </ul>

            <h2>The Strategy</h2>

            <h3>1. Centralised Ordering Website</h3>
            <p>
                We built a single website where customers can order from any Spice Republic outlet:
            </p>
            <ul>
                <li><strong>Location Detection:</strong> Auto-detects the nearest outlet based on the customer&apos;s location. &ldquo;Ordering from Spice Republic, Koramangala&rdquo; — with the option to switch outlets.</li>
                <li><strong>Full Menu with Dynamic Availability:</strong> Real-time menu synced with each outlet&apos;s inventory. If the Indiranagar outlet runs out of Dal Makhani, it shows &ldquo;unavailable&rdquo; without affecting other locations.</li>
                <li><strong>Direct Payment:</strong> Razorpay integration with UPI, cards, and wallets. Zero commission from aggregators. Every ₹500 order = ₹500 revenue (minus payment gateway fees of ~2%).</li>
                <li><strong>Order Tracking:</strong> Live order status from kitchen to delivery — matching the experience customers expect from Zomato/Swiggy.</li>
                <li><strong>Customer Accounts:</strong> Customers create an account, see order history, reorder favourites, and earn loyalty points. Spice Republic now <strong>owns the customer data.</strong></li>
            </ul>

            <h3>2. Google Business Profile Domination</h3>
            <p>
                We took over management of all 6 Google Business profiles and standardised everything:
            </p>
            <ul>
                <li><strong>Professional Photography:</strong> Hired a food photographer for a single shoot — consistent, mouth-watering photos across all profiles. Updated monthly with seasonal dishes.</li>
                <li><strong>Review Management:</strong> Automated post-dining review request via SMS (&ldquo;Thanks for dining with us! Loved the experience? Leave us a review&rdquo;). Every review gets a personalised response within 24 hours.</li>
                <li><strong>Weekly Posts:</strong> New dish highlights, chef specials, weekend offers — posted consistently across all 6 profiles every week.</li>
                <li><strong>Q&A Optimisation:</strong> Pre-populated answers to common questions — &ldquo;Is there parking?&rdquo;, &ldquo;Do you have veg options?&rdquo;, &ldquo;Can I book for large groups?&rdquo;</li>
            </ul>
            <p>
                Result: All 6 outlets now rank in the Google Map Pack for &ldquo;best Indian restaurant near me&rdquo; and &ldquo;restaurant near me&rdquo; in their respective areas.
            </p>

            <h3>3. Influencer & Local Marketing</h3>
            <p>
                Restaurant marketing is hyper-local. We built a <strong>micro-influencer army</strong> in each city:
            </p>
            <ul>
                <li><strong>Food Bloggers:</strong> Monthly invites to 5-10 local food bloggers per outlet for tasting sessions. They create authentic review content — reels, stories, blog posts — reaching 50K-200K local food lovers.</li>
                <li><strong>UGC Content:</strong> Every table has a discrete QR code leading to &ldquo;Share your Spice Republic moment&rdquo; — customers who tag the restaurant get a 10% discount on their next visit.</li>
                <li><strong>Hyper-Local Meta Ads:</strong> 3km radius targeting around each outlet. Ads show the nearest outlet&apos;s address, today&apos;s chef special, and a &ldquo;Order Now&rdquo; CTA linking to the website (not Zomato).</li>
                <li><strong>Weekend Campaigns:</strong> &ldquo;Friday Night Thali Fest&rdquo;, &ldquo;Sunday Brunch Buffet&rdquo; — time-boxed offers that create urgency and fill tables during peak hours.</li>
            </ul>

            <h2>The Result</h2>
            <p>
                Monthly revenue across all outlets doubled in 5 months. The centralised ordering website now accounts for <strong>35% of all delivery orders</strong> — revenue that would have gone to Zomato/Swiggy at 25-30% commission. That translates to ₹4-5 Lakh saved per month in aggregator commissions.
            </p>
            <p>
                Google reviews went from scattered and inconsistent to <strong>2,400+ reviews</strong> across all locations with an average rating of 4.4 stars. Two outlets moved from page 2 to the #1 Map Pack position for their key local keywords.
            </p>
            <p>
                The customer database now has 15,000+ entries — each with order history, preferences, and contact details. Spice Republic can now send personalised offers (&ldquo;Haven&apos;t visited in 30 days? Here&apos;s 20% off your favourite Butter Chicken&rdquo;) without paying a single rupee to aggregators.
            </p>
        </CaseStudyLayout>
    )
}
