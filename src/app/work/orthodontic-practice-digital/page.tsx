import { CaseStudyLayout } from "@/components/work/case-study-layout"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Orthodontic Practice Digital Transformation | Case Study",
    description: "How a solo orthodontic practice used patient education content, community marketing, and a streamlined digital experience to fill their appointment calendar 3 months in advance.",
}

export default function OrthodonticPracticeCaseStudy() {
    return (
        <CaseStudyLayout
            title="AlignRight Orthodontics"
            subtitle="How a solo orthodontic practice built a 3-month waitlist through patient education content, community-first marketing, and a digital experience that converts website visitors into consultation requests."
            role="Digital Strategy & Execution"
            timeline="5 Months"
            stack={["WordPress", "Local SEO", "Content Strategy", "Google Business", "WhatsApp Business"]}
            metrics={[
                { label: "Appointment Waitlist", value: "3 Months" },
                { label: "Organic Leads Per Month", value: "85+" },
                { label: "Revenue Growth", value: "220%" }
            ]}
            nextCaseStudy={{
                title: "Jewellery Brand Digital",
                href: "/work/jewellery-brand-digital"
            }}
        >
            <h2>The Challenge</h2>
            <p>
                Dr. Mehta runs a solo orthodontic practice specialising in braces, Invisalign, and jaw alignment. She&apos;s one of the most qualified orthodontists in her region — but her practice was operating at 40% capacity.
            </p>
            <p>
                The core issues:
            </p>
            <ul>
                <li><strong>Invisalign confusion:</strong> Patients didn&apos;t understand the difference between Invisalign from a certified orthodontist vs. mail-order aligner kits. Cheaper alternatives were stealing market share — and often causing more harm than good.</li>
                <li><strong>Long decision cycle:</strong> Orthodontic treatment is a 12-24 month commitment costing ₹50K-₹3L. Patients take weeks to decide. There was no system to nurture them during the decision period.</li>
                <li><strong>Parent targeting gap:</strong> 60% of orthodontic patients are children/teens. The decision-maker is the parent, but all marketing was addressed to the patient. Wrong audience, wrong messaging.</li>
                <li><strong>No digital ecosystem:</strong> No website. No booking system. A Google Business profile with 8 reviews and no photos.</li>
            </ul>

            <h2>The Strategy</h2>

            <h3>1. Parent-Focused Content Strategy</h3>
            <p>
                We reframed the entire content approach around the <strong>parent as decision-maker:</strong>
            </p>
            <ul>
                <li><strong>Blog Content:</strong> &ldquo;When Should Your Child See an Orthodontist? 7 Signs Parents Miss&rdquo;, &ldquo;Mail-Order Aligners vs. Orthodontist-Supervised Treatment: What Parents Need to Know&rdquo;, &ldquo;How to Make Braces Fun for Your Pre-Teen: A Parent&apos;s Guide&rdquo;</li>
                <li><strong>Instagram for Parents:</strong> Short educational videos shot in the clinic — explaining common myths, showing the treatment process, introducing the team. Warm, approachable, and informative — not clinical and scary.</li>
                <li><strong>WhatsApp Groups:</strong> Created &ldquo;Orthodontics for Parents&rdquo; WhatsApp community where Dr. Mehta answers questions weekly. Became a trusted resource, not a sales pitch.</li>
            </ul>

            <h3>2. Treatment Journey Transparency</h3>
            <p>
                The biggest barrier to orthodontic consultation is <strong>fear of the unknown</strong> — what will it cost, will it hurt, how long will it take. We eliminated every unknown:
            </p>
            <ul>
                <li><strong>Treatment Timeline Page:</strong> Visual step-by-step of the entire braces/Invisalign journey — from first consultation to final reveal. Month-by-month with photos.</li>
                <li><strong>Pricing Transparency:</strong> Honest price ranges displayed on the website (₹40K-₹60K for metal braces, ₹1.2L-₹2.5L for Invisalign) with EMI options prominently featured.</li>
                <li><strong>Patient Stories:</strong> Video testimonials from parents and teens who completed treatment — showing the emotional transformation, not just the dental one.</li>
                <li><strong>Virtual Consultation:</strong> Free 15-minute video consultation option — parents can ask all their questions from home before committing to an in-clinic visit.</li>
            </ul>

            <h3>3. Community & Referral Engine</h3>
            <p>
                Orthodontics thrives on community trust. We leveraged this:
            </p>
            <ul>
                <li><strong>School Partnership Program:</strong> Free dental screening camps at local schools. Parents receive a professional assessment report for their child — naturally funnels into consultations.</li>
                <li><strong>Referral Rewards:</strong> Existing patients who refer friends receive teeth whitening sessions. Every satisfied parent becomes a marketing channel.</li>
                <li><strong>Google Review Engine:</strong> Automated follow-up at treatment milestones (braces adjustment, treatment completion) asking for reviews. Went from 8 to 175+ reviews in 5 months.</li>
            </ul>

            <h2>The Result</h2>
            <p>
                Dr. Mehta&apos;s practice went from 40% capacity to a <strong>3-month waitlist</strong> in 5 months. The parent-focused content strategy was the game-changer — parents who read the blog content before their consultation arrive with their questions already answered, making the conversion rate from consultation to treatment 78%.
            </p>
            <p>
                The WhatsApp community now has 400+ parents — and regularly generates 15-20 consultation requests per month without any ad spend. The school screening program resulted in 35 new patients from a single camp.
            </p>
            <p>
                Revenue grew 220% — not from seeing more patients, but from attracting patients who choose Invisalign and premium treatment options over basic braces, because the content educated them on the value difference.
            </p>
        </CaseStudyLayout>
    )
}
