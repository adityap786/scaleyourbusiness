import { CaseStudyLayout } from "@/components/work/case-study-layout"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Aesthetic Clinic Growth | Dermatology & Cosmetic Clinic | Case Study",
    description: "How a specialised aesthetic and dermatology clinic used video content, before/after galleries, and trust-driven web design to 3x consultation bookings.",
}

export default function AestheticClinicCaseStudy() {
    return (
        <CaseStudyLayout
            title="GlowDerm Aesthetic Clinic"
            subtitle="How a specialised dermatology and aesthetic clinic used video-first content, before/after showcases, and a trust-driven website to triple monthly consultation bookings."
            role="Digital Growth Partner"
            timeline="4 Months"
            stack={["Next.js", "YouTube Strategy", "Instagram Reels", "Google Ads", "CRM Automation"]}
            metrics={[
                { label: "Consultation Bookings", value: "3x" },
                { label: "Instagram Followers Growth", value: "12K+" },
                { label: "Video Content Views", value: "2.5M+" }
            ]}
            nextCaseStudy={{
                title: "Orthodontic Practice Digital",
                href: "/work/orthodontic-practice-digital"
            }}
        >
            <h2>The Challenge</h2>
            <p>
                GlowDerm is a premium aesthetic and dermatology clinic offering advanced treatments — laser hair removal, chemical peels, PRP therapy, anti-ageing treatments, and acne scar revision. The doctors are highly qualified and the clinic is equipped with the latest technology.
            </p>
            <p>
                But the clinic was struggling:
            </p>
            <ul>
                <li><strong>Trust deficit:</strong> Aesthetic treatments are high-involvement decisions. Patients research extensively before committing. GlowDerm had no online proof of their expertise — no before/after galleries, no patient testimonials, no educational content explaining procedures.</li>
                <li><strong>Competitor dominance:</strong> Competing clinics were running aggressive Instagram and YouTube campaigns with doctor-led content. GlowDerm&apos;s Instagram was posting stock photos with generic captions.</li>
                <li><strong>No content pipeline:</strong> The doctors were willing to create content but had no strategy, no production support, and no distribution plan.</li>
                <li><strong>Wasted ad spend:</strong> Previous Google Ads campaigns sent traffic to a generic homepage. No dedicated landing pages for specific treatments. High CPC, low conversion.</li>
            </ul>

            <h2>The Strategy</h2>

            <h3>1. Doctor-Led Video Content Engine</h3>
            <p>
                In healthcare, <strong>the doctor IS the brand.</strong> We built a content strategy around GlowDerm&apos;s lead dermatologist:
            </p>
            <ul>
                <li><strong>YouTube Long-Form:</strong> 8-12 minute educational videos — &ldquo;Complete Guide to Laser Hair Removal&rdquo;, &ldquo;Chemical Peel: What Actually Happens to Your Skin&rdquo;, &ldquo;PRP Hair Treatment: Honest Results After 6 Sessions&rdquo;. Filmed professionally in the clinic, showing actual equipment and procedures.</li>
                <li><strong>Instagram Reels:</strong> 30-60 second clips extracted from YouTube videos — procedure snippets, myth-busting (&ldquo;Does laser damage your skin? Dermatologist answers&rdquo;), and before/after transformations. 4 Reels per week.</li>
                <li><strong>Patient Journey Videos:</strong> With consent, documenting real patient transformations from first consultation to final result. These are the highest-performing content pieces — averaging 500K+ views each.</li>
            </ul>

            <h3>2. Trust-Driven Website Redesign</h3>
            <p>
                The website was rebuilt to function as a <strong>digital consultation room:</strong>
            </p>
            <ul>
                <li><strong>Treatment Pages:</strong> Every treatment has its own page — what it is, how it works, who it&apos;s for, expected results, recovery time, pricing range, and most importantly: before/after galleries with real patient photos.</li>
                <li><strong>Doctor Profile:</strong> Full credentials, board certifications, conference appearances, published papers. Not just a photo and a name — a complete authority profile.</li>
                <li><strong>FAQ Sections:</strong> AI-assisted FAQ generation from actual patient questions. &ldquo;Does PRP hurt?&rdquo;, &ldquo;How many laser sessions do I need?&rdquo;, &ldquo;What&apos;s the downtime for a chemical peel?&rdquo;</li>
                <li><strong>Integrated Booking:</strong> Treatment-specific booking forms that pre-fill the patient&apos;s area of interest, reducing friction for the front desk team.</li>
            </ul>

            <h3>3. Precision Paid Advertising</h3>
            <p>
                Instead of generic Google Ads, we ran <strong>treatment-specific campaigns</strong>:
            </p>
            <ul>
                <li><strong>Dedicated Landing Pages:</strong> &ldquo;Laser Hair Removal in [City]&rdquo; → lands on a page showing procedure video, pricing, before/after photos, and a booking CTA. Not the homepage.</li>
                <li><strong>Retargeting:</strong> Anyone who watched 50%+ of a YouTube video was retargeted with a consultation offer on Instagram and Google Display.</li>
                <li><strong>Seasonal Campaigns:</strong> &ldquo;Wedding Season Glow Package&rdquo;, &ldquo;Summer Skin Prep: Laser + Peel Combo&rdquo; — offers timed to when demand naturally peaks.</li>
            </ul>

            <h2>The Result</h2>
            <p>
                Monthly consultation bookings tripled in 4 months. The video content built an authority moat that competitors can&apos;t easily replicate — GlowDerm&apos;s lead dermatologist is now the most-followed skin specialist in their city with 12K+ Instagram followers and 2.5M+ total video views.
            </p>
            <p>
                The before/after gallery page is the #1 most-visited page on the website — patients specifically reference it during consultations: &ldquo;I saw the results you got for acne scars and I want the same treatment.&rdquo;
            </p>
            <p>
                Google Ads cost per consultation booking dropped from ₹2,400 to ₹850 — because treatment-specific landing pages convert at 3x the rate of generic pages.
            </p>
        </CaseStudyLayout>
    )
}
