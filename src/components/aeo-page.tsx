import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import Link from "next/link"

interface AEOPageProps {
    headline: string
    answer: string
    tableData?: Array<{ [key: string]: string }>
    children?: React.ReactNode
}

export function AEOPage({ headline, answer, tableData, children }: AEOPageProps) {
    const articleSchema = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        'headline': headline,
        'datePublished': '2026-01-15',
        'dateModified': '2026-02-15',
        'author': { '@type': 'Organization', 'name': 'Scale Your Business' }
    }

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />

            <Header />
            <div className="pt-24 pb-12 bg-white">
                <Container className="max-w-4xl">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-8">
                        {headline}
                    </h1>

                    {/* AEO Answer Block */}
                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-12 backdrop-blur-sm">
                        <h2 className="text-sm font-bold text-gray-700 uppercase tracking-wider mb-2">Quick Answer</h2>
                        <div className="text-xl text-gray-900 font-medium leading-relaxed" dangerouslySetInnerHTML={{ __html: answer }} />
                    </div>

                    <div className="prose prose-invert max-w-none">
                        {tableData && tableData.length > 0 && (
                            <div className="overflow-x-auto rounded-lg border border-gray-200 mb-8">
                                <table className="w-full text-left text-sm text-gray-600">
                                    <thead className="bg-gray-100 text-gray-900 uppercase tracking-wider">
                                        <tr>
                                            {Object.keys(tableData[0]).map((key) => (
                                                <th key={key} className="px-6 py-4 font-semibold capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200">
                                        {tableData.map((row, i) => (
                                            <tr key={i}>
                                                {Object.values(row).map((val, idx) => (
                                                    <td key={idx} className={`px-6 py-4 ${idx === 0 ? 'font-medium text-gray-900' : ''}`}>
                                                        {val}
                                                    </td>
                                                ))}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}

                        {children}
                    </div>

                    <div className="mt-12 p-8 bg-blue-50 border border-blue-100 rounded-2xl text-center">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Need a custom quote?</h3>
                        <p className="text-gray-600 mb-6 max-w-lg mx-auto">
                            Get a detailed breakdown for your specific project requirements in 24 hours.
                        </p>
                        <Link href="/contact">
                            <Button size="lg">Get Your Free Quote</Button>
                        </Link>
                    </div>

                    <div className="mt-16 pt-8 border-t border-gray-200 text-sm text-gray-500">
                        Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                    </div>
                </Container>
            </div>
            <Footer />
        </>
    )
}
