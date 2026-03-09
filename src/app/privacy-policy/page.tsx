import { Container } from "@/components/ui/container"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Privacy Policy | Scale Your Business",
    description: "Privacy Policy for Scale Your Business. Learn how we collect, use, and protect your data.",
}

export default function PrivacyPolicyPage() {
    return (
        <main className="bg-white min-h-screen pt-32 pb-24 text-black">
            <Container className="max-w-4xl">
                <div className="mb-16">
                    <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6">
                        Privacy <span className="text-[#3b82f6] italic">Policy</span>
                    </h1>
                    <div className="h-[6px] w-24 bg-[#3b82f6]"></div>
                </div>

                <div className="prose prose-lg max-w-none prose-headings:font-black prose-headings:uppercase prose-p:font-medium prose-p:text-black/80 prose-a:text-[#3b82f6] hover:prose-a:text-black transition-colors">
                    <p className="text-sm font-bold uppercase tracking-widest text-black/40 mb-8">Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</p>

                    <h2>1. Introduction</h2>
                    <p>At Scale Your Business ("we," "our," or "us"), we respect your privacy and are committed to protecting the personal information you share with us. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you visit our website (scaleyourbusiness.online) or engage with our services.</p>

                    <h2>2. Information We Collect</h2>
                    <p>We may collect information about you in a variety of ways, including:</p>
                    <ul>
                        <li><strong>Personal Data:</strong> Personally identifiable information, such as your name, shipping address, email address, and telephone number, that you voluntarily give to us when booking a consultation or contacting us.</li>
                        <li><strong>Derivative Data:</strong> Information our servers automatically collect when you access the site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the site.</li>
                        <li><strong>Financial Data:</strong> Financial information related to your payment method, collected directly by our payment processors when you engage our services.</li>
                    </ul>

                    <h2>3. Use of Your Information</h2>
                    <p>Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the site to:</p>
                    <ul>
                        <li>Administer our business and provide services to you.</li>
                        <li>Respond to customer service requests and provide support.</li>
                        <li>Send you promotional communications, quotes, and marketing material (with your consent).</li>
                        <li>Improve our website and service offerings.</li>
                    </ul>

                    <h2>4. Disclosure of Your Information</h2>
                    <p>We may share information we have collected about you in certain situations. Your information may be disclosed as follows:</p>
                    <ul>
                        <li><strong>By Law or to Protect Rights:</strong> If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others.</li>
                        <li><strong>Third-Party Service Providers:</strong> We may share your information with third parties that perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.</li>
                    </ul>

                    <h2>5. Contact Us</h2>
                    <p>If you have questions or comments about this Privacy Policy, please contact us at:</p>
                    <p>Email: <a href="mailto:hello@enquiries.scaleyourbusiness.online">hello@enquiries.scaleyourbusiness.online</a><br />Phone: +91 99905 57753</p>
                </div>
            </Container>
        </main>
    )
}
