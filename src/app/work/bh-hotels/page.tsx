import { CaseStudyLayout } from "@/components/work/case-study-layout"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "BH Hotels | Direct Booking Cinema Experience",
    description: "A high-end digital transformation to reduce OTA reliance and drive direct luxury bookings.",
}

export default function BhHotelsCaseStudy() {
    return (
        <CaseStudyLayout
            title="BH Hotels"
            subtitle="Engineering a zero-friction, cinematic direct booking engine that bypassed OTA commissions entirely."
            role="Design & Engineering Partner"
            timeline="4 Months"
            stack={["React", "Framer Motion", "Stripe", "Booking Engine APIs"]}
            metrics={[
                { label: "Direct Bookings", value: "+68%" },
                { label: "OTA Commissions", value: "-$120k" },
                { label: "Bounce Rate", value: "-45%" }
            ]}
            nextCaseStudy={{
                title: "AI Lead Generation",
                href: "/work/amrapali-ai-leads"
            }}
        >
            <h2>The Challenge</h2>
            <p>
                BH Hotels was bleeding revenue to massive Online Travel Agencies (OTAs) like Booking.com and Expedia. While their physical properties were breathtaking, their direct booking website was clunky, slow, and completely lacked the luxury feel of walking into one of their lobbies.
            </p>
            <p>
                High-intent luxury travelers were abandoning the site to book via third-party platforms, costing the business hundreds of thousands in commission fees annually.
            </p>

            <h2>The Solution</h2>
            <p>
                We completely overhauled their digital identity, transforming it from a standard corporate site into a true visual experience. We utilized large-viewport immersive video formats and subtle scroll animations to reflect their luxury positioning.
            </p>
            <p>
                Beneath the hood, we built a buttery-smooth custom booking flow featuring real-time scarcity triggers, an intuitive date picker, and a secure payment gateway integration designed to build total trust and finalize reservations in under 60 seconds.
            </p>

            <h2>The Result</h2>
            <p>
                Within the first fiscal quarter post-launch, direct organic bookings increased by 68%. The immersive interface dropped the bounce rate drastically, and the company reclaimed over $120,000 in OTA commission savings. The website became their highest converting sales asset.
            </p>
        </CaseStudyLayout>
    )
}
