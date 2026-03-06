import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Metadata } from "next"
import { AppDevContent } from "@/components/services/app-dev-content"

export const metadata: Metadata = {
    title: "Mobile App Development | Scale Your Business",
    description: "Build apps that scale and earn revenue. We help you list on Play Store & iOS with immersive UI.",
}

export default function AppDevelopmentPage() {
    return (
        <>
            <Header />
            <AppDevContent />
            <Footer />
        </>
    )
}
