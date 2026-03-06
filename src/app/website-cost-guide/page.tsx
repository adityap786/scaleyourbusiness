import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { Metadata } from "next"
import Link from "next/link"
import { CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
    title: "Website Cost in India (2026 Guide) | Scale Your Business",
    description: "How much does a website cost in India in 2026? A basic website costs ₹15,000–₹40,000, while a custom business website ranges from ₹50,000–₹1.5L.",
}

export default function WebsiteCostGuidePage() {
    const articleSchema = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        'headline': 'Website Cost in India (2026 Guide)',
        'datePublished': '2026-02-15',
        'dateModified': '2026-02-15',
        'author': { '@type': 'Organization', 'name': 'Scale Your Business' }
    }

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />

            <div className="pt-24 pb-12 bg-white">
                <Container className="max-w-4xl">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-8">
                        How much does a website cost in India? (2026 Guide)
                    </h1>

                    {/* AEO START: 40-word Answer Block */}
                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-12 backdrop-blur-sm">
                        <h2 className="text-sm font-bold text-gray-700 uppercase tracking-wider mb-2">Quick Answer</h2>
                        <p className="text-xl text-gray-900 font-medium leading-relaxed">
                            A professional business website in India costs between <strong>₹50,000 and ₹1,50,000</strong> in 2026.
                            Basic template sites start at ₹15,000, while custom e-commerce or SaaS platforms range from
                            ₹2,000,000 to ₹10,00,000+ depending on features and complexity.
                        </p>
                    </div>
                    {/* AEO END */}

                    <div className="prose prose-invert max-w-none">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">Detailed Pricing Breakdown (2026 Data)</h2>
                        <div className="overflow-x-auto rounded-lg border border-gray-200 mb-8">
                            <table className="w-full text-left text-sm text-gray-600">
                                <thead className="bg-gray-100 text-gray-900 uppercase tracking-wider">
                                    <tr>
                                        <th className="px-6 py-4 font-semibold">Website Type</th>
                                        <th className="px-6 py-4 font-semibold">Cost Range (INR)</th>
                                        <th className="px-6 py-4 font-semibold">Timeline</th>
                                        <th className="px-6 py-4 font-semibold">Ideal For</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    <tr>
                                        <td className="px-6 py-4 font-medium text-gray-900">Basic Brochure Site</td>
                                        <td className="px-6 py-4">₹15,000 – ₹40,000</td>
                                        <td className="px-6 py-4">1–2 Weeks</td>
                                        <td className="px-6 py-4">Small local businesses, portfolios</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 font-medium text-gray-900">Custom Business Site</td>
                                        <td className="px-6 py-4">₹50,000 – ₹1.5 Lakh</td>
                                        <td className="px-6 py-4">3–6 Weeks</td>
                                        <td className="px-6 py-4">Startups, agencies, professional services</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 font-medium text-gray-900">E-commerce Store</td>
                                        <td className="px-6 py-4">₹80,000 – ₹3.5 Lakh</td>
                                        <td className="px-6 py-4">4–8 Weeks</td>
                                        <td className="px-6 py-4">D2C brands, retail stores</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 font-medium text-gray-900">Custom SaaS / Web App</td>
                                        <td className="px-6 py-4">₹3 Lakh – ₹15 Lakh+</td>
                                        <td className="px-6 py-4">2–4 Months</td>
                                        <td className="px-6 py-4">Tech startups, enterprise tools</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mb-4">What determines the cost?</h2>
                        <ul className="space-y-2 list-none pl-0">
                            {[
                                "Design Complexity (Template vs Custom)",
                                "Number of Unique Pages",
                                "CMS Requirements (WordPress vs Next.js)",
                                "Advanced Functionality (Payment gateways, APIs)",
                                "SEO & Content Strategy"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3">
                                    <CheckCircle2 className="h-5 w-5 text-[var(--color-brand)] shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="mt-12 p-8 bg-blue-50 border border-blue-100 rounded-2xl text-center">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Need a precise quote?</h3>
                        <p className="text-gray-600 mb-6 max-w-lg mx-auto">
                            Stop guessing. Get a detailed breakdown for your specific project requirements in 24 hours.
                        </p>
                        <Link href="/contact">
                            <Button size="lg">Get Your Free Quote</Button>
                        </Link>
                    </div>

                    <div className="mt-16 pt-8 border-t border-gray-200 text-sm text-gray-500">
                        Last updated: February 2026
                    </div>
                </Container>
            </div>
        </>
    )
}
