import { Container } from "@/components/ui/container"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Terms of Service | Scale Your Business",
    description: "Terms of Service for Scale Your Business. Read our operating agreements and terms of engagement.",
}

export default function TermsOfServicePage() {
    return (
        <main className="bg-white min-h-screen pt-32 pb-24 text-black">
            <Container className="max-w-4xl">
                <div className="mb-16">
                    <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6">
                        Terms of <span className="text-[#3b82f6] italic">Service</span>
                    </h1>
                    <div className="h-[6px] w-24 bg-[#3b82f6]"></div>
                </div>

                <div className="prose prose-lg max-w-none prose-headings:font-black prose-headings:uppercase prose-p:font-medium prose-p:text-black/80 prose-a:text-[#3b82f6] hover:prose-a:text-black transition-colors">
                    <p className="text-sm font-bold uppercase tracking-widest text-black/40 mb-8">Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>

                    <h2>1. Agreement to Terms</h2>
                    <p>By accessing or using our website and services, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access the service.</p>

                    <h2>2. Services</h2>
                    <p>Scale Your Business provides web development, application development, AI automation, SaaS development, and related consulting services. All services are subject to specific project agreements or statements of work (SOW) which will outline the deliverables, timelines, and costs.</p>

                    <h2>3. Intellectual Property Rights</h2>
                    <p>Upon full payment for our services, you will own the intellectual property rights to the final deliverables as outlined in your specific project agreement. Scale Your Business retains the right to use the work for portfolio and promotional purposes unless a non-disclosure agreement (NDA) states otherwise.</p>

                    <h2>4. Client Responsibilities</h2>
                    <p>To ensure timely delivery of services, you agree to provide timely feedback, necessary assets, and requested information. Delays on the client's end may result in corresponding delays in project delivery.</p>

                    <h2>5. Payments and Refunds</h2>
                    <p>Payment terms are established in individual project proposals. Unless otherwise specified, a deposit is required before work commences. Due to the custom nature of our services, refunds are generally not provided once work has begun. Any exceptions are determined solely at our discretion.</p>

                    <h2>6. Limitation of Liability</h2>
                    <p>In no event shall Scale Your Business, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.</p>

                    <h2>7. Changes to Terms</h2>
                    <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.</p>

                    <h2>8. Contact Us</h2>
                    <p>If you have any questions about these Terms, please contact us at:</p>
                    <p>Email: <a href="mailto:hello@enquiries.scaleyourbusiness.online">hello@enquiries.scaleyourbusiness.online</a></p>
                </div>
            </Container>
        </main>
    )
}
