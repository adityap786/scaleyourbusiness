import { Metadata } from "next"
import { MarketingServicesContent } from "@/components/services/marketing-services-content"

export const metadata: Metadata = {
    title: "Digital & Performance Marketing Agency India | Lead Gen",
    description: "SYB is a performance and growth marketing agency in India. We run data-driven Meta/Google ad campaigns and SEO to generate high-quality B2B and B2C leads.",
    keywords: "digital marketing agency India, performance marketing services, growth marketing agency, lead generation marketing agency, Scale Your Business",
}

export default function MarketingServicesPage() {
    const serviceSchema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        'name': 'Marketing Services',
        'provider': { '@type': 'Organization', 'name': 'Scale Your Business', 'url': 'https://scaleyourbusiness.online' },
        'areaServed': ['IN', 'AE', 'US'],
        'description': 'AI-generated visual creatives, high-converting video script writing, and Influencer/UGC campaign management.',
        'offers': [
            { '@type': 'Offer', 'name': 'Marketing Retainer', 'priceCurrency': 'INR', 'price': '60000' }
        ]
    }

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
            <MarketingServicesContent />
        </>
    )
}
