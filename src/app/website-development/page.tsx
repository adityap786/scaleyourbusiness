import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Metadata } from "next"
import { WebDevContent } from "@/components/services/web-dev-content"

export const metadata: Metadata = {
    title: "Website Development | Next.js, Shopify, Wix Studio & More",
    description: "We build custom Next.js websites, Shopify stores, and Wix Studio sites. From affordable custom coding to enterprise-grade admin panels.",
}

export default function WebsiteDevelopmentPage() {
    return (
        <>
            <Header />
            <WebDevContent />
            <Footer />
        </>
    )
}
