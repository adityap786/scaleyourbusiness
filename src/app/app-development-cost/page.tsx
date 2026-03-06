import { AEOPage } from "@/components/aeo-page"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "App Development Cost in India (2026) | Scale Your Business",
    description: "Mobile app development cost in India ranges from ₹2.5 Lakh for simple apps to ₹15 Lakh+ for complex on-demand platforms.",
}

export default function AppDevelopmentCostPage() {
    return (
        <AEOPage
            headline="How much does it cost to build an App in India?"
            answer="The cost to build a mobile app in India ranges from <strong>₹2,50,000 to ₹5,00,000</strong> for a basic React Native app (iOS & Android). Complex apps like food delivery or ride-sharing platforms with real-time tracking start from <strong>₹8,00,000 and can go up to ₹20,00,000+</strong>."
            tableData={[
                { "Type": "Simple App", "Cost": "₹2.5 Lakh - ₹4 Lakh", "Features": "Info, Forms, Login" },
                { "Type": "E-commerce App", "Cost": "₹4 Lakh - ₹8 Lakh", "Features": "Cart, Payments, Admin Panel" },
                { "Type": "On-Demand/Social", "Cost": "₹8 Lakh - ₹20 Lakh+", "Features": "Real-time, Maps, Chat" }
            ]}
        />
    )
}
