import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
    title: "Careers | Join Scale Your Business",
    description: "We are hiring Web Developers, AI Engineers, and Content Strategists in India.",
}

export default function CareersPage() {
    return (
        <div className="pt-24 pb-24 bg-white">
            <Container className="max-w-4xl text-center">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
                    Join the Builders
                </h1>
                <p className="text-xl text-gray-600 mb-12">
                    We are always looking for obsessive problem solvers. If you love shipping high-quality code and automating boring work, you belong here.
                </p>

                <div className="bg-gray-50 border border-gray-200 rounded-2xl p-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">No Open Roles Currently</h2>
                    <p className="text-gray-600 mb-8">
                        However, we are always open to meeting talent. If you are an n8n expert, Next.js developer, or B2B copywriter, drop us a line.
                    </p>
                    <Link href="/contact">
                        <Button size="lg" variant="outline">Email Your Portfolio</Button>
                    </Link>
                </div>
            </Container>
        </div>
    )
}
