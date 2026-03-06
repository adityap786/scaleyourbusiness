import { CaseStudyLayout } from "@/components/work/case-study-layout"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Proton | Enterprise SaaS | Case Study",
    description: "Refactoring a localized legacy app into a global SaaS product.",
}

export default function ProtonCaseStudy() {
    return (
        <CaseStudyLayout
            title="Proton ERP"
            subtitle="From legacy Windows app to cloud-native SaaS."
            role="Cloud Migration"
            timeline="8 Months"
            stack={["React", "Node.js", "AWS Lambda", "DynamoDB"]}
            metrics={[
                { label: "Speed Improvement", value: "10x" },
                { label: "Maintenance Cost", value: "-60%" },
                { label: "New Markets", value: "4" }
            ]}
            nextCaseStudy={{
                title: "Doner & Gyros",
                href: "/work/doner-gyros-india"
            }}
        >
            <h2>The Legacy</h2>
            <p>
                Proton was a successful ERP for manufacturing units but was stuck as a desktop-based Windows application. This limited them to on-premise installations and prevented remote access—a dealbreaker post-2020.
            </p>

            <h2>The Transformation</h2>
            <p>
                We re-engineered Proton as a <strong>Cloud-Native SaaS</strong>.
            </p>

            <h3>Serverless Architecture</h3>
            <p>
                We used AWS Lambda for backend logic to ensure infinite scalability without managing servers. We migrated data from local SQL servers to DynamoDB for high-speed access.
            </p>

            <h3>Modern UI/UX</h3>
            <p>
                We replaced the clunky grey forms with a React-based implementation using Ant Design, improving data entry speed by 40% for the end users.
            </p>

            <h2>The Result</h2>
            <p>
                Proton SaaS launched successfully, allowing the company to expand into the Middle East and SE Asia markets without physical deployment teams. Maintenance costs dropped by 60% as manual patches were replaced by CI/CD.
            </p>
        </CaseStudyLayout>
    )
}
