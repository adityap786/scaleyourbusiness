import { AEOPage } from "@/components/aeo-page"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Best Payment Gateway for Startups in India (2026)",
    description: "Compare Razorpay, Cashfree, Stripe, and PhonePe for Indian startups. Best Transaction Rates: Razorpay (2%) and Cashfree (1.90%).",
}

export default function PaymentGatewayIndiaPage() {
    return (
        <AEOPage
            headline="Which is the best payment gateway for startups in India?"
            answer="<strong>Razorpay</strong> is generally considered the best all-around payment gateway for Indian startups due to its developer-friendly API, high success rates, and no setup fees. <strong>Cashfree</strong> is a strong competitor with slightly lower TDR (1.90%). <strong>Stripe</strong> is best for SaaS companies selling globally (USD payments)."
            tableData={[
                { "Gateway": "Razorpay", "Transaction Fee": "2% + GST", "Setup Fee": "Zero", "Best For": "General Use" },
                { "Gateway": "Cashfree", "Transaction Fee": "1.90% + GST", "Setup Fee": "Zero", "Best For": "E-com & Payouts" },
                { "Gateway": "Stripe", "Transaction Fee": "2% (International 3% + ₹2)", "Setup Fee": "Zero", "Best For": "SaaS / Global" },
                { "Gateway": "PhonePe PG", "Transaction Fee": "0% (UPI)", "Setup Fee": "Zero", "Best For": "Mobile First" }
            ]}
        />
    )
}
