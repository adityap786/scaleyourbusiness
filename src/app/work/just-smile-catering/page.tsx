import { CaseStudyLayout } from "@/components/work/case-study-layout"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Just Smile Hospitality | Corporate & Luxury Catering | Case Study",
    description: "How we built professional credibility and authority for Just Smile Hospitality through a premium website that positions them as the top corporate catering service.",
}

export default function JustSmileCaseStudy() {
    return (
        <CaseStudyLayout
            title="Just Smile Hospitality"
            subtitle="Building professional credibility and authority for a corporate & luxury catering service through a website that commands trust from enterprise clients."
            role="Web Design & Strategy"
            timeline="3 Weeks"
            stack={["Next.js", "Cloudinary", "Responsive Design", "SEO", "WhatsApp API"]}
            metrics={[
                { label: "Enquiry Rate Increase", value: "280%" },
                { label: "Corporate Client Conversion", value: "45%" },
                { label: "Average Deal Size Increase", value: "3.2x" }
            ]}
            nextCaseStudy={{
                title: "Amrapali Real Estate AI",
                href: "/work/amrapali-ai-leads"
            }}
        >
            <h2>The Challenge</h2>
            <p>
                Just Smile Hospitality & Management Private Limited is a 15+ year veteran in the corporate and luxury catering space — FSSAI certified, 500+ daily meals, 50+ expert staff, and a client list that includes major corporate offices in Greater Noida and NCR.
            </p>
            <p>
                But there was a disconnect: <strong>their reputation offline didn&apos;t exist online.</strong>
            </p>
            <p>
                When potential corporate clients Googled them, they found nothing. No website. No reviews aggregation. No digital proof that this company handles 1,000+ events and serves Fortune 500 companies. They were losing high-value contracts to competitors who simply <em>looked</em> more professional online.
            </p>
            <ul>
                <li>No digital presence despite 15+ years of operations.</li>
                <li>Losing enterprise RFPs to competitors with professional websites.</li>
                <li>No way for clients to verify certifications (GST, MCA, FSSAI) online.</li>
                <li>Relied entirely on word-of-mouth and personal network for new business.</li>
            </ul>

            <h2>The Strategy</h2>
            <p>
                This wasn&apos;t about building &ldquo;a website.&rdquo; This was about <strong>building a digital authority system</strong> that turns a Google search into a signed contract.
            </p>

            <h3>1. Authority-First Website Architecture</h3>
            <p>
                We structured the website to answer every question a procurement manager would ask before shortlisting a vendor:
            </p>
            <ul>
                <li><strong>Hero Section:</strong> &ldquo;Curating Unforgettable Moments&rdquo; — immediately communicates positioning as a luxury service, not a budget caterer.</li>
                <li><strong>Certification Section:</strong> GST Registration, Certificate of Incorporation, Memorandum of Association, Articles of Association — all displayed as verifiable PDF documents. This alone closed deals with compliance-heavy corporate clients.</li>
                <li><strong>Service Pages:</strong> Dedicated pages for Corporate Catering, Event Catering, Hospitality Manpower, and Menu — each optimised for specific search queries.</li>
                <li><strong>Social Proof:</strong> 98% client satisfaction badge, 15+ years experience counter, 1,000+ events served — numbers that build instant credibility.</li>
            </ul>

            <h3>2. The &ldquo;Trust Architecture&rdquo;</h3>
            <p>
                Enterprise clients don&apos;t buy from websites — they buy from <strong>trustworthy institutions</strong>. We built trust signals into every touchpoint:
            </p>
            <ul>
                <li><strong>5-Step Process Section:</strong> Consultation → Curation → Preparation → Execution → Celebration. This shows methodical professionalism — exactly what corporate procurement teams want to see.</li>
                <li><strong>Manpower Solutions Section:</strong> 500+ trained staff, certified excellence, 24/7 availability, verified backgrounds. This addresses the #1 concern for corporate events: reliability.</li>
                <li><strong>Real Photography:</strong> Professional shots of actual setups, not stock photos. Every image reinforces the premium positioning.</li>
            </ul>

            <h3>3. Lead Capture & Conversion</h3>
            <p>
                Multiple conversion paths for different buyer personas:
            </p>
            <ul>
                <li><strong>WhatsApp Quick Quote:</strong> For decision-makers who want fast answers without filling forms.</li>
                <li><strong>Contact Form:</strong> Detailed enquiry form for procurement teams who need documentation.</li>
                <li><strong>Direct Phone:</strong> Prominently displayed for high-intent leads.</li>
                <li><strong>Sticky WhatsApp Button:</strong> Available on every page for impulse enquiries.</li>
            </ul>

            <h2>The Result</h2>
            <p>
                The website became Just Smile&apos;s most powerful sales tool. Corporate clients now send the link directly in RFP responses. The certification section alone led to 3 enterprise contracts in the first month — clients who specifically mentioned they chose Just Smile because they could verify credentials online.
            </p>
            <p>
                The average deal size increased 3.2x because the website attracts premium clients who associate the brand with luxury and professionalism — not the budget enquiries they used to get through word-of-mouth.
            </p>
            <p>
                Just Smile now ranks for &ldquo;corporate catering Greater Noida&rdquo;, &ldquo;luxury event catering NCR&rdquo;, and &ldquo;FSSAI certified catering services&rdquo; — keywords that bring in high-value leads on autopilot.
            </p>
        </CaseStudyLayout>
    )
}
