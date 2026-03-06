import { CaseStudyLayout } from "@/components/work/case-study-layout"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Agency-Client Portal | SaaS Product | Case Study",
    description: "How we built a full-featured agency-client portal with task management, SOPs, progress tracking, ticket system, and AI-driven analytics.",
}

export default function AgencyClientPortalCaseStudy() {
    return (
        <CaseStudyLayout
            title="Agency-Client Portal"
            subtitle="A purpose-built SaaS portal where agency teams manage tasks, SOPs, and deliverables — while clients track progress, raise tickets, and view AI-driven analytics in real time."
            role="Product Development"
            timeline="8 Weeks"
            stack={["Next.js", "PostgreSQL", "Redis", "OpenAI API", "Stripe", "Resend"]}
            metrics={[
                { label: "Client Satisfaction Score", value: "96%" },
                { label: "Support Ticket Volume Drop", value: "60%" },
                { label: "Team Productivity Gain", value: "40%" }
            ]}
            nextCaseStudy={{
                title: "Peak Nutrition",
                href: "/work/peak-nutrition"
            }}
        >
            <h2>The Challenge</h2>
            <p>
                Digital marketing agencies have a universal problem: <strong>client communication is a mess.</strong>
            </p>
            <p>
                Projects live in Slack threads. SOPs are buried in Google Docs. Task updates happen over WhatsApp. Clients call the account manager 5 times a week asking &ldquo;what&apos;s the status?&rdquo; And when a client has a complaint? It gets lost in email chains with no tracking or accountability.
            </p>
            <p>
                We interviewed 12 agency owners and the pain points were identical:
            </p>
            <ul>
                <li><strong>Zero visibility:</strong> Clients don&apos;t know what&apos;s happening on their project until the monthly report.</li>
                <li><strong>SOP chaos:</strong> Team members execute the same service differently every time. No standardised processes.</li>
                <li><strong>No ticket system:</strong> Client complaints and revision requests get lost in chat threads.</li>
                <li><strong>Gut-feel analytics:</strong> Agencies can&apos;t tell which clients are profitable, which are at risk of churning, or where bottlenecks exist.</li>
            </ul>

            <h2>The Solution</h2>
            <p>
                We built a <strong>dual-dashboard portal</strong> — one view for the agency team, another for clients. Same data, different perspectives, zero confusion.
            </p>

            <h3>1. Agency Team Dashboard</h3>
            <p>
                The command centre for agency operations:
            </p>
            <ul>
                <li><strong>Task Management:</strong> Create, assign, and track tasks with deadlines, priority levels, and status tracking (To Do → In Progress → Review → Done). Tasks are grouped by client and service type.</li>
                <li><strong>SOP Library:</strong> Standardised operating procedures for every service — SEO audits, ad campaign setup, content calendar creation, website QA checklists. Team members follow step-by-step processes that ensure consistent quality.</li>
                <li><strong>Team Workload View:</strong> Bird&apos;s-eye view of who&apos;s overloaded and who has capacity. Prevents burnout and ensures even distribution.</li>
                <li><strong>Internal Notes:</strong> Private notes per client that the client never sees — context about preferences, past issues, relationship health.</li>
            </ul>

            <h3>2. Client Dashboard</h3>
            <p>
                The transparency layer that eliminates &ldquo;what&apos;s the status?&rdquo; calls:
            </p>
            <ul>
                <li><strong>Project Progress:</strong> Real-time visibility into what&apos;s being worked on, what&apos;s completed, and what&apos;s coming next. Visual progress bars and timelines — not raw task lists.</li>
                <li><strong>Deliverable Access:</strong> All deliverables (reports, designs, content) accessible in one place. No more digging through email attachments.</li>
                <li><strong>Ticket System:</strong> Clients can raise tickets for revision requests, complaints, or new scope. Every ticket is tracked, timestamped, and assigned to a team member with SLA visibility.</li>
                <li><strong>Communication Log:</strong> Complete history of every interaction — no more &ldquo;I told you last week&rdquo; disputes.</li>
            </ul>

            <h3>3. AI-Driven Analytics</h3>
            <p>
                The intelligence layer that turns operational data into strategic decisions:
            </p>
            <ul>
                <li><strong>Client Health Score:</strong> AI analyses ticket frequency, response times, deliverable delays, and communication patterns to flag clients at risk of churning — before they actually churn.</li>
                <li><strong>Profitability Analysis:</strong> Automatic calculation of time spent per client vs. retainer value. Identifies which clients are profitable and which are draining resources.</li>
                <li><strong>Bottleneck Detection:</strong> AI identifies recurring delays — &ldquo;Content approval takes an average of 4.2 days across all clients&rdquo; — so agency owners can fix systemic issues.</li>
                <li><strong>Performance Reports:</strong> Auto-generated monthly reports for clients using AI summaries — pulling data from Google Analytics, Meta Ads, and Search Console APIs.</li>
            </ul>

            <h2>The Result</h2>
            <p>
                Agencies using the portal report a <strong>60% drop in &ldquo;status update&rdquo; calls</strong> from clients — because clients can see everything in real time. The SOP system reduced onboarding time for new team members from 2 weeks to 3 days.
            </p>
            <p>
                The AI health score predicted 4 out of 5 potential client churns in the first quarter — giving agencies enough time to intervene and save the relationship. The profitability analysis led several agencies to renegotiate contracts with underpriced clients, increasing average retainer value by 25%.
            </p>
            <p>
                This isn&apos;t project management software trying to be everything. It&apos;s a <strong>purpose-built system for the agency-client relationship</strong> — the most critical and most neglected part of agency operations.
            </p>
        </CaseStudyLayout>
    )
}
