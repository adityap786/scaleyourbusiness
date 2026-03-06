import { CaseStudyLayout } from "@/components/work/case-study-layout"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Soshals | Influencer Marketing Agency | Case Study",
    description: "A high-energy portfolio website for a new-age creative agency. Dark mode design with heavy motion graphics.",
}

export default function SoshalsCaseStudy() {
    return (
        <CaseStudyLayout
            title="Soshals"
            subtitle="A website as bold as their creative work."
            role="Design & Dev"
            timeline="3 Weeks"
            stack={["Next.js", "Framer Motion", "Tailwind CSS", "Vercel"]}
            metrics={[
                { label: "Client Inquiries", value: "3x" },
                { label: "Bounce Rate", value: "< 25%" },
                { label: "Design Awards", value: "2" }
            ]}
            nextCaseStudy={{
                title: "Raviraj Realty",
                href: "/work/raviraj-realty"
            }}
        >
            <h2>The Need</h2>
            <p>
                Soshals is a creative agency that manages top influencers. They needed a website that screamed "Cool" and "Credible". A standard corporate template would hurt their brand image.
            </p>

            <h2>The Vibe</h2>
            <p>
                We went with a <strong>Dark Mode, Motion-Heavy</strong> aesthetic. We used Framer Motion for scroll-triggered animations that reveal content dynamically. The typography is large, bold, and unapologetic.
            </p>

            <h3>Showcasing the Work</h3>
            <p>
                The core of the site is the portfolio section, which supports mixed media—TikTok videos, Instagram Reels, and YouTube Shorts embedded natively without improving load times.
            </p>

            <h2>The Result</h2>
            <p>
                The new site positioned Soshals as a premium player. They secured contracts with major D2C brands within weeks of launch, with clients specifically citing the website&apos;s quality as a trust factor.
            </p>
        </CaseStudyLayout>
    )
}
