import { CaseStudyLayout } from "@/components/work/case-study-layout"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Marketing Studios | AI Automation & SaaS | Case Study",
    description: "Built a white-labeled SaaS client portal with integrated AI automation for campaign reporting and creative asset generation.",
}

export default function MarketingStudioCaseStudy() {
    return (
        <CaseStudyLayout
            title="Marketing Studios"
            subtitle="Built a white-labeled SaaS client portal with integrated AI automation for campaign reporting and creative asset generation."
            role="SaaS & Automation Partner"
            timeline="10 Weeks"
            stack={["Next.js", "n8n", "Meta API", "Google Ads API", "OpenAI", "TailwindCSS"]}
            metrics={[
                { label: "Reporting Time", value: "0 hrs" },
                { label: "Client Retention", value: "98%" },
                { label: "Agency Capacity", value: "3x" }
            ]}
            nextCaseStudy={{
                title: "Peak Nutrition",
                href: "/work/peak-nutrition"
            }}
        >
            <h2>The Challenge</h2>
            <p>
                A high-end performance marketing studio was drowning in operational overhead. Despite driving great results for clients, their internal processes were highly manual.
            </p>
            <ul>
                <li><strong>Reporting Nightmare:</strong> Account managers spent 15+ hours every week manually pulling data from Meta, Google, and TikTok to build client reports.</li>
                <li><strong>Creative Bottlenecks:</strong> Writing ad copy and generating variations for A/B testing was a slow, manual process that delayed campaign launches.</li>
                <li><strong>Fragmented Communication:</strong> Client approvals, asset sharing, and feedback were scattered across emails, Slack, and WhatsApp.</li>
            </ul>

            <h2>The Solution: Custom SaaS Portal & AI Workflows</h2>
            <p>
                We developed a centralized, white-labeled SaaS platform that automated their entire reporting and creative pipeline.
            </p>

            <h3>1. White-Labeled Client SaaS Dashboard</h3>
            <p>
                We built a secure, high-performance web app using Next.js where clients can log in and view their campaign performance in real-time.
            </p>
            <ul>
                <li><strong>Live Data Aggregation:</strong> Integrated directly with Meta, Google Ads, and TikTok APIs to pull live spend, ROAS, and CPA metrics into a unified, beautiful dashboard.</li>
                <li><strong>Approval Workflows:</strong> A built-in Kanban board where the agency uploads creatives, and clients can click to approve or leave pinpointed feedback directly on the images/videos.</li>
                <li><strong>Role-Based Access:</strong> Secure authentication ensuring clients only see their own data, while agency admins have a bird&apos;s-eye view of all accounts.</li>
            </ul>

            <h3>2. AI Automation for Reporting</h3>
            <p>
                We eliminated manual reporting entirely using n8n and AI automation.
            </p>
            <ul>
                <li><strong>Automated Insights:</strong> Every Monday at 8 AM, an n8n workflow pulls the previous week&apos;s data, feeds it into an LLM, and generates a human-readable summary of performance, highlighting wins and areas for optimization.</li>
                <li><strong>Slack & Email Delivery:</strong> These AI-generated insights are automatically formatted into a polished PDF and sent to the client via email, while simultaneously alerting the account manager in Slack.</li>
            </ul>

            <h3>3. AI Creative & Copy Generation</h3>
            <p>
                To speed up campaign launches, we integrated an AI creative assistant directly into the agency&apos;s internal dashboard.
            </p>
            <ul>
                <li><strong>Bulk Copywriting:</strong> Account managers input a product URL and target audience, and the AI instantly generates 20 variations of primary text, headlines, and descriptions optimized for different platforms.</li>
                <li><strong>Asset Resizing:</strong> Automated workflows that take a single hero image and intelligently crop/resize it for Instagram Stories, Feed, and Display network formats.</li>
            </ul>

            <h2>The Impact</h2>
            <p>
                By automating reporting and creative generation, the agency reclaimed hundreds of hours per month. Account managers transitioned from data-entry clerks to strategic advisors. The professional SaaS portal elevated the agency&apos;s perceived value, boosting client retention to 98% and allowing them to triple their client capacity without hiring additional staff.
            </p>
        </CaseStudyLayout>
    )
}