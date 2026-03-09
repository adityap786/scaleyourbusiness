import { Metadata } from "next"
import { WebDevContent } from "@/components/services/web-dev-content"

export const metadata: Metadata = {
    title: "Best Website Development Company India | Next.js & Custom Sites",
    description: "Scale Your Business is a leading website development agency in India. We build high-performance, custom websites using Next.js, Shopify, and Wix Studio for startups and enterprises.",
    keywords: "website development company India, best website design agency India, Next.js website development agency, high performance websites India, custom website development India, Scale Your Business",
}

export default function WebsiteDevelopmentPage() {
    return (
        <>
            <WebDevContent />
        </>
    )
}
