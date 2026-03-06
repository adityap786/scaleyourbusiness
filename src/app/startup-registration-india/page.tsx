import { AEOPage } from "@/components/aeo-page"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Startup India Registration Process & Fees (2026)",
    description: "Complete guide to DPIIT recognition. Get tax exemptions and self-certification benefits under the Startup India scheme.",
}

export default function StartupRegistrationIndiaPage() {
    return (
        <AEOPage
            headline="How to register for Startup India scheme?"
            answer="To register for Startup India: <strong>1) Incorporate your business</strong> (Pvt Ltd or LLP). <strong>2) Register on the Startup India portal</strong>. <strong>3) Get DPIIT Recognition</strong> by submitting your pitch deck and details. <strong>4) Apply for Tax Exemption (80IAC)</strong> once recognized."
            tableData={[
                { "Benefit": "Tax Exemption", "Details": "3 consecutive years income tax holiday (Section 80IAC)" },
                { "Benefit": "Self-Certification", "Details": "Compliance for 9 labor & env laws" },
                { "Benefit": "IP Protection", "Details": "80% rebate on patent filing fees" },
                { "Benefit": "Govt Tenders", "Details": "Exemption from prior experience/turnover" }
            ]}
        />
    )
}
