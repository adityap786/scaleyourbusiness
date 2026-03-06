import { CaseStudyLayout } from "@/components/work/case-study-layout"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Lead Scraper Extension | Digital Agency Tool | Case Study",
    description: "How we built a fast, reliable lead scraping extension for digital marketing agencies that finds targeted business leads by niche and location.",
}

export default function LeadScraperCaseStudy() {
    return (
        <CaseStudyLayout
            title="Lead Scraper Extension"
            subtitle="A fast, reliable browser extension that scrapes hyper-targeted business leads by niche and location — built for digital marketing agencies who need pipeline, not promises."
            role="Product Development"
            timeline="4 Weeks"
            stack={["Chrome Extension", "Web Scraping", "Google Maps API", "Node.js", "PostgreSQL"]}
            metrics={[
                { label: "Leads Scraped Per Query", value: "200+" },
                { label: "Scraping Speed", value: "<15s" },
                { label: "Data Accuracy", value: "97%" }
            ]}
            nextCaseStudy={{
                title: "Agency-Client Portal",
                href: "/work/agency-client-portal"
            }}
        >
            <h2>The Challenge</h2>
            <p>
                Digital marketing agencies live and die by their pipeline. And building pipeline means finding the right businesses to reach out to — <strong>fast, at scale, with accurate contact data.</strong>
            </p>
            <p>
                The traditional process looks like this: An agency BD executive manually searches Google Maps for &ldquo;Dentist in Brampton&rdquo;, opens each listing one by one, copies the phone number, email, website, and address into a spreadsheet. Repeat 200 times. Spend 3 days on what should take 15 seconds.
            </p>
            <p>
                Existing tools were either:
            </p>
            <ul>
                <li><strong>Too expensive:</strong> Enterprise scraping tools charging $300+/month for features agencies don&apos;t need.</li>
                <li><strong>Too unreliable:</strong> Free scrapers that break every week when Google updates their markup.</li>
                <li><strong>Too slow:</strong> Browser-based tools that take 30+ minutes for a single search query.</li>
                <li><strong>Too generic:</strong> Not built for agency workflows — no niche targeting, no location filtering, no CRM export.</li>
            </ul>

            <h2>The Solution</h2>
            <p>
                We built a <strong>Chrome Extension</strong> purpose-built for digital marketing agencies. One input. Thousands of qualified leads.
            </p>

            <h3>1. Hyper-Targeted Search</h3>
            <p>
                The extension accepts natural language queries — exactly how a BD executive thinks:
            </p>
            <ul>
                <li>&ldquo;Dentist in Brampton&rdquo;</li>
                <li>&ldquo;Real Estate Agent in Dubai Marina&rdquo;</li>
                <li>&ldquo;Yoga Studio in Austin Texas&rdquo;</li>
                <li>&ldquo;Restaurant in Connaught Place Delhi&rdquo;</li>
            </ul>
            <p>
                No complex query builders. No API key setup. Type what you&apos;re looking for and hit scrape.
            </p>

            <h3>2. Fast & Reliable Extraction</h3>
            <p>
                The extension scrapes and normalises data in under 15 seconds per query:
            </p>
            <ul>
                <li><strong>Business Name</strong></li>
                <li><strong>Phone Number</strong> (verified format)</li>
                <li><strong>Email Address</strong> (when publicly listed)</li>
                <li><strong>Website URL</strong></li>
                <li><strong>Full Address</strong></li>
                <li><strong>Rating & Review Count</strong> (for prioritising quality leads)</li>
                <li><strong>Business Category</strong></li>
                <li><strong>Operating Hours</strong></li>
            </ul>
            <p>
                Built with resilient scraping logic that handles Google&apos;s dynamic rendering, rate limiting, and pagination automatically.
            </p>

            <h3>3. Agency-Ready Output</h3>
            <p>
                Data is immediately exportable in formats agencies actually use:
            </p>
            <ul>
                <li><strong>CSV Export:</strong> Direct import into any CRM (HubSpot, Zoho, Salesforce).</li>
                <li><strong>Google Sheets Sync:</strong> Auto-push to a shared team spreadsheet.</li>
                <li><strong>Deduplication:</strong> Built-in dedup to avoid scraping the same business twice.</li>
                <li><strong>Enrichment Tags:</strong> Automatically flags businesses without websites (perfect for web design agencies pitching new sites).</li>
            </ul>

            <h2>Use Cases</h2>
            <ul>
                <li><strong>Web Design Agencies:</strong> Find local businesses without websites → pitch redesigns.</li>
                <li><strong>SEO Agencies:</strong> Scrape businesses with low Google ratings → pitch reputation management.</li>
                <li><strong>Social Media Agencies:</strong> Find restaurants and retailers in specific areas → pitch local social media management.</li>
                <li><strong>Cold Email Agencies:</strong> Build targeted lists of 1,000+ businesses in a specific niche in under an hour.</li>
            </ul>

            <h2>The Result</h2>
            <p>
                Agencies using the extension report building prospect lists <strong>50x faster</strong> than manual research. One agency went from 20 outreach emails per day to 200+ — with better targeting and higher response rates because every lead matches their ideal client profile.
            </p>
            <p>
                The extension is purpose-built, lightweight, and does one thing exceptionally well: <strong>turn a niche + location into a qualified lead list in seconds.</strong>
            </p>
        </CaseStudyLayout>
    )
}
