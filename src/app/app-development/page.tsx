import { Metadata } from "next"
import { AppDevContent } from "@/components/services/app-dev-content"

export const metadata: Metadata = {
    title: "Mobile App Development Company India | iOS & Android Agency",
    description: "Scale Your Business builds scalable, native-feeling iOS and Android apps using React Native and Expo. Top startup app development services in India.",
    keywords: "mobile app development company India, iOS and Android app development agency, startup app development services, cross platform app development India, Scale Your Business agency",
}

export default function AppDevelopmentPage() {
    return (
        <>
            <AppDevContent />
        </>
    )
}
