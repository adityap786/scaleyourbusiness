import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Metadata } from "next"
import { MarketingServicesContent } from "@/components/services/marketing-services-content"

export const metadata: Metadata = {
    title: "AI Visuals, Script Writing & Influencer Marketing | Scale Your Business",
    description: "Immersive marketing operations: scale your brand with stunning AI-generated product visuals, high-converting video scripts, and data-driven Influencer campaigns.",
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
            <Header />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
            <MarketingServicesContent />
            <Footer />
        </>
    )
}
