import { CaseStudyLayout } from "@/components/work/case-study-layout"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Healthcare & Telemedicine | Web App & Cybersecurity | Case Study",
    description: "How we built a secure, HIPAA-compliant telemedicine web app with AI-driven patient triage and comprehensive cybersecurity audits.",
}

export default function HealthcareCaseStudy() {
    return (
        <CaseStudyLayout
            title="Healthcare & Telemedicine"
            subtitle="Building a secure, HIPAA-compliant telemedicine web app with AI-driven patient triage and comprehensive cybersecurity audits."
            role="Full-Stack & Security Partner"
            timeline="12 Weeks"
            stack={["Next.js", "Node.js", "WebRTC", "AI Triage", "AWS HIPAA Cloud", "Penetration Testing"]}
            metrics={[
                { label: "Patient Wait Time", value: "-65%" },
                { label: "Security Score", value: "A+" },
                { label: "Monthly Consultations", value: "10k+" }
            ]}
            nextCaseStudy={{
                title: "Beauty & Cosmetics",
                href: "/work/beauty-cosmetics-ai"
            }}
        >
            <h2>The Challenge</h2>
            <p>
                A growing network of clinics needed to transition to a digital-first telemedicine model. However, healthcare data is highly sensitive. They faced three major hurdles:
            </p>
            <ul>
                <li><strong>Security & Compliance:</strong> The platform needed to be strictly HIPAA-compliant, protecting patient records from data breaches.</li>
                <li><strong>Operational Bottlenecks:</strong> Doctors were spending too much time on initial triage, asking the same basic questions before every consultation.</li>
                <li><strong>Technical Debt:</strong> Their existing legacy system couldn&apos;t handle high-quality video calls or scale to thousands of concurrent users.</li>
            </ul>

            <h2>The Solution: Secure Web App & AI Automation</h2>
            <p>
                We engineered a custom telemedicine web application from the ground up, focusing on robust cybersecurity, seamless video communication, and AI-driven efficiency.
            </p>

            <h3>1. Cybersecurity Audit & Hardening</h3>
            <p>
                Before writing a single line of code, we conducted a comprehensive cybersecurity audit of their existing infrastructure. We implemented:
            </p>
            <ul>
                <li><strong>End-to-End Encryption:</strong> All patient data, both in transit and at rest, was encrypted using AES-256.</li>
                <li><strong>Penetration Testing:</strong> Rigorous vulnerability scanning and manual penetration testing to ensure zero exploitable endpoints.</li>
                <li><strong>HIPAA-Compliant Architecture:</strong> Deployed on AWS with strict IAM roles, audit logging, and dedicated instances to meet all regulatory requirements.</li>
            </ul>

            <h3>2. AI-Driven Patient Triage</h3>
            <p>
                To optimize doctor availability, we integrated an AI automation layer:
            </p>
            <ul>
                <li><strong>Smart Intake Forms:</strong> An AI chatbot interacts with patients before the call, gathering symptoms, medical history, and vital signs.</li>
                <li><strong>Risk Stratification:</strong> The AI analyzes the input and flags high-risk patients for immediate attention, routing standard cases to the next available general practitioner.</li>
                <li><strong>Automated Summaries:</strong> Doctors receive a concise, AI-generated summary of the patient&apos;s condition the moment they join the call, saving 5-7 minutes per consultation.</li>
            </ul>

            <h3>3. High-Performance Telemedicine Web App</h3>
            <p>
                We built the frontend using Next.js and React, ensuring a lightning-fast, app-like experience directly in the browser.
            </p>
            <ul>
                <li><strong>WebRTC Integration:</strong> Crystal-clear, low-latency video consultations that work seamlessly on both desktop and mobile browsers without requiring app downloads.</li>
                <li><strong>Real-Time Chat & File Sharing:</strong> Secure channels for sharing lab results and prescriptions during the call.</li>
            </ul>

            <h2>The Impact</h2>
            <p>
                The new platform transformed their operations. The AI triage system reduced patient wait times by 65%, while the robust cybersecurity measures ensured 100% compliance and zero data breaches. The web app now successfully handles over 10,000 secure consultations monthly.
            </p>
        </CaseStudyLayout>
    )
}