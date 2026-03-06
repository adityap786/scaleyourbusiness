import { CaseStudyLayout } from "@/components/work/case-study-layout"
import { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
    title: "Amrapali Real Estate | AI Lead Automation System | Case Study",
    description: "How we built an AI-powered lead capturing, qualifying, and nurturing workflow for Amrapali Real Estate using n8n, LangChain, Groq LLM, and Redis.",
}

export default function AmrapaliAILeadsCaseStudy() {
    return (
        <CaseStudyLayout
            title="Amrapali Real Estate"
            subtitle="Building an AI-powered lead automation system that captures, qualifies, and nurtures leads from every channel — then escalates hot prospects to human agents."
            role="AI Automation Partner"
            timeline="6 Weeks"
            stack={["n8n", "LangChain", "Groq LLM", "Redis", "CRM Integration", "WhatsApp API"]}
            metrics={[
                { label: "Lead Response Time", value: "<30s" },
                { label: "Qualification Accuracy", value: "92%" },
                { label: "Sales Team Efficiency", value: "3.5x" }
            ]}
            nextCaseStudy={{
                title: "Lead Scraper Extension",
                href: "/work/lead-scraper-extension"
            }}
        >
            <h2>The Challenge</h2>
            <p>
                Amrapali is a major real estate developer with leads flowing in from multiple channels — their website, chatbot interactions, paid ads (Meta & Google), and API integrations. The problem wasn&apos;t lead volume. <strong>The problem was lead chaos.</strong>
            </p>
            <ul>
                <li><strong>Leads fell through cracks:</strong> Website form submissions sat in email inboxes for hours. Chatbot conversations ended without follow-up. Ad leads got a generic WhatsApp message 2 days later.</li>
                <li><strong>No qualification system:</strong> Sales agents spent 70% of their time calling unqualified leads — people who couldn&apos;t afford the property, were &ldquo;just browsing,&rdquo; or lived in the wrong city.</li>
                <li><strong>No nurturing pipeline:</strong> Warm leads that weren&apos;t ready to buy today were lost forever. No drip campaigns. No follow-up sequences.</li>
                <li><strong>CRM was a graveyard:</strong> Thousands of leads dumped in with no scoring, no categorisation, no actionable data.</li>
            </ul>

            <h2>The Solution: AI-Powered Lead Automation</h2>
            <p>
                We designed and built a complete <strong>AI Lead Qualification & Nurturing System</strong> that automates the entire journey from first touch to sales handoff.
            </p>

            <h3>System Architecture</h3>
            <p>
                <em>Note: This project is under compliance, so we&apos;re showcasing the architecture and logic rather than the live system.</em>
            </p>

            <div className="my-8 rounded-xl border border-gray-200 overflow-hidden bg-white p-4">
                <div className="text-center">
                    <Image
                        src="/work/amrapali-ai-architecture.svg"
                        alt="AI-Powered Real Estate Lead Automation System Architecture — showing lead capture, AI qualification with n8n, LangChain, Groq LLM, Redis Memory, lead scoring (Hot/Warm/Cold), and human escalation flow"
                        width={1100}
                        height={700}
                        className="rounded-lg mx-auto"
                    />
                    <p className="text-sm text-gray-500 mt-3">System Architecture: AI-Powered Real Estate Lead Automation</p>
                </div>
            </div>

            <h3>1. Lead Capture & Ingestion</h3>
            <p>
                Every lead entry point flows into a single unified pipeline:
            </p>
            <ul>
                <li><strong>Website Forms:</strong> Contact forms, property enquiry forms, callback requests.</li>
                <li><strong>Chatbot:</strong> AI chatbot conversations on the website that capture intent and contact details.</li>
                <li><strong>Ads & Website Traffic:</strong> Meta Lead Ads, Google Ads lead extensions — all piped in via webhooks.</li>
                <li><strong>API & Webhooks:</strong> Third-party integrations (99acres, MagicBricks, Housing.com) sending leads via API.</li>
            </ul>
            <p>
                All leads are normalised, deduplicated, and stored with a timestamp and source attribution.
            </p>

            <h3>2. AI Qualification & Nurturing Engine</h3>
            <p>
                The core intelligence layer built on <strong>n8n</strong> (workflow automation), <strong>LangChain</strong> (AI orchestration), <strong>Groq LLM</strong> (fast inference), and <strong>Redis</strong> (conversation memory):
            </p>
            <ul>
                <li><strong>Instant AI Conversation:</strong> Within 30 seconds of a lead coming in, the AI engages via WhatsApp or SMS. It asks qualifying questions naturally — budget range, preferred location, timeline, family size, current residence status.</li>
                <li><strong>Context-Aware Memory:</strong> Redis stores conversation history so the AI remembers previous interactions. If a lead returns 3 days later, the AI picks up where they left off.</li>
                <li><strong>Smart Scoring:</strong> Based on responses, each lead is classified into three categories:</li>
            </ul>

            <h3>3. Lead Classification & Routing</h3>
            <ul>
                <li><strong>🔥 Hot Leads:</strong> Budget confirmed, timeline within 3 months, actively looking. → <em>Instant Alert</em> to sales team via WhatsApp, Email, and CRM task creation. Sales agent calls within 5 minutes.</li>
                <li><strong>🟠 Warm Leads:</strong> Interested but not ready — maybe 6-12 month timeline, or still comparing. → <em>Automated Nurturing</em> sequences. Weekly property updates, market insights, virtual tour invitations.</li>
                <li><strong>❄️ Cold Leads:</strong> Just browsing, wrong budget, or no clear intent. → <em>Long-Term Drip Campaigns</em>. Monthly newsletters, market reports, EMI calculator links. Re-engaged after 90 days with fresh offers.</li>
            </ul>

            <h3>4. Human Escalation & CRM</h3>
            <p>
                When the AI determines a lead is sales-ready, it triggers a multi-channel escalation:
            </p>
            <ul>
                <li><strong>Sales Team Alert:</strong> WhatsApp message + Email notification + CRM task auto-created with full lead context (conversation transcript, qualification score, preferences).</li>
                <li><strong>Site Visit Scheduling:</strong> For hot leads, the AI proactively offers to schedule a site visit and books it directly in the sales team&apos;s calendar.</li>
                <li><strong>Call Booking:</strong> If the lead prefers a call, it&apos;s auto-scheduled and the sales agent receives a brief with all AI-gathered information.</li>
            </ul>
            <p>
                Every interaction — AI and human — is logged in the CRM, creating a complete lead lifecycle record.
            </p>

            <h2>The Result</h2>
            <p>
                The system transformed Amrapali&apos;s sales operation from a reactive, manual process into a <strong>proactive, AI-driven machine</strong>.
            </p>
            <p>
                Lead response time dropped from an average of 4+ hours to under 30 seconds. The AI qualification reduced the sales team&apos;s wasted call time by 65% — they now only speak to leads who are genuinely interested and financially qualified.
            </p>
            <p>
                The nurturing pipeline turned &ldquo;dead&rdquo; leads into a revenue source — warm leads that previously would have been forgotten are now converting at a 12% rate after 60-90 days of automated nurturing.
            </p>
            <p>
                Most importantly, <strong>zero leads fall through the cracks now.</strong> Every single interaction is captured, scored, and actioned — either by AI or human.
            </p>
        </CaseStudyLayout>
    )
}
