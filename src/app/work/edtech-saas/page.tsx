import { CaseStudyLayout } from "@/components/work/case-study-layout"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "EdTech & E-Learning | SaaS & AI Automation | Case Study",
    description: "Engineered a scalable SaaS learning management system featuring AI-automated grading and personalized learning paths.",
}

export default function EdTechCaseStudy() {
    return (
        <CaseStudyLayout
            title="EdTech & E-Learning"
            subtitle="Engineered a scalable SaaS learning management system featuring AI-automated grading and personalized learning paths for 100k+ students."
            role="SaaS & AI Partner"
            timeline="14 Weeks"
            stack={["React", "NestJS", "OpenAI API", "AWS", "WebSockets", "PostgreSQL"]}
            metrics={[
                { label: "Grading Time", value: "-90%" },
                { label: "Student Retention", value: "+45%" },
                { label: "Active Users", value: "100k+" }
            ]}
            nextCaseStudy={{
                title: "Marketing Studios",
                href: "/work/marketing-studio-automation"
            }}
        >
            <h2>The Challenge</h2>
            <p>
                A rapidly expanding EdTech startup was struggling to scale their operations. As their student base grew past 50,000, their infrastructure began to crack.
            </p>
            <ul>
                <li><strong>Manual Grading Bottleneck:</strong> Instructors were spending 80% of their time grading subjective assignments, delaying feedback to students by up to a week.</li>
                <li><strong>One-Size-Fits-All Learning:</strong> Students were dropping out because the curriculum didn&apos;t adapt to their individual learning speeds or knowledge gaps.</li>
                <li><strong>Platform Instability:</strong> Their monolithic legacy platform crashed frequently during peak exam hours.</li>
            </ul>

            <h2>The Solution: Scalable SaaS & AI Automation</h2>
            <p>
                We rebuilt their entire platform as a modern, microservices-based SaaS application, heavily integrating AI automation to handle the heavy lifting.
            </p>

            <h3>1. AI-Automated Grading System</h3>
            <p>
                We implemented a sophisticated AI pipeline to automate the evaluation of complex, subjective assignments.
            </p>
            <ul>
                <li><strong>Contextual Analysis:</strong> Using fine-tuned LLMs, the system evaluates essays and coding assignments not just for correctness, but for logic, structure, and style.</li>
                <li><strong>Instant Feedback:</strong> Students now receive detailed, constructive feedback within seconds of submission, rather than waiting days.</li>
                <li><strong>Instructor Override:</strong> Instructors review AI-flagged edge cases via a streamlined dashboard, reducing their grading workload by 90%.</li>
            </ul>

            <h3>2. Adaptive Learning Web App</h3>
            <p>
                We built a dynamic React-based web application that personalizes the educational journey.
            </p>
            <ul>
                <li><strong>Knowledge Graphing:</strong> The system tracks every interaction, quiz result, and video watched, building a real-time knowledge graph for each student.</li>
                <li><strong>Dynamic Curriculum:</strong> If a student struggles with a specific concept, the AI automatically adjusts their learning path, serving prerequisite modules or alternative explanations before moving forward.</li>
            </ul>

            <h3>3. Enterprise-Grade SaaS Architecture</h3>
            <p>
                To ensure stability, we migrated them to a robust cloud infrastructure.
            </p>
            <ul>
                <li><strong>Microservices & Auto-Scaling:</strong> Built with NestJS and deployed on AWS ECS, the platform automatically scales up server resources during high-traffic exam periods and scales down to save costs during off-hours.</li>
                <li><strong>Real-Time Collaboration:</strong> Integrated WebSockets for live, interactive whiteboard sessions and peer-to-peer study groups.</li>
            </ul>

            <h2>The Impact</h2>
            <p>
                The AI automation completely eliminated the grading bottleneck, allowing instructors to focus on high-value 1-on-1 mentoring. The personalized learning paths increased student retention by 45%, and the new SaaS architecture effortlessly supports over 100,000 active users with 99.99% uptime.
            </p>
        </CaseStudyLayout>
    )
}