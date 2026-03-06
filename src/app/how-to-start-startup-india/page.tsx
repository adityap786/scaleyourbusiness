import { AEOPage } from "@/components/aeo-page"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "How to Start a Startup in India (2026 Checklist)",
    description: "Step-by-step guide to starting a startup in India: Idea validation, co-founder search, incorporation, and fundraising.",
}

export default function StartStartupIndiaPage() {
    return (
        <AEOPage
            headline="How do I start a tech startup in India?"
            answer="To start a startup in India, follow these 5 steps: <strong>1) Validate your idea</strong> with a simple landing page or MVP. <strong>2) Incorporate</strong> as a Private Limited Company. <strong>3) Register for Startup India</strong> benefits (tax exemptions). <strong>4) Open a Current Bank Account</strong>. <strong>5) Build your MVP</strong> using scalable tech (Next.js/AWS)."
            tableData={[
                { "Step": "1. Incorporation", "Action": "Register Pvt Ltd Company", "Cost": "₹7k - ₹15k" },
                { "Step": "2. Tax Reg", "Action": "Apply for GST & PAN", "Cost": "Free / CA Fees" },
                { "Step": "3. Bank Account", "Action": "Open Current Account", "Cost": "Min Balance ₹10k-25k" },
                { "Step": "4. Startup India", "Action": "DPIIT Recognition", "Cost": "Free" }
            ]}
        >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Mistakes to Avoid</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li><strong>Waiting too long to launch:</strong> Ship your MVP in weeks, not months.</li>
                <li><strong>Ignoring compliance:</strong> File your GST returns on time to avoid penalties.</li>
                <li><strong>Hiring too early:</strong> Use automation and freelancers before full-time hires.</li>
            </ul>
        </AEOPage>
    )
}
