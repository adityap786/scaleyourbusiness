import { allPosts } from "contentlayer/generated"
import { compareDesc, format, parseISO } from "date-fns"
import Link from "next/link"
import { Container } from "@/components/ui/container"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { CTASection } from "@/components/home/cta-section"
import { Metadata } from "next"
import { BlogContent } from "@/components/blog/blog-content"

export const metadata: Metadata = {
    title: "Blog | Scale Your Business",
    description: "Insights on AI Automation, SaaS Development, and Scaling your business — actionable, no fluff.",
}

export default function BlogPage() {
    const posts = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))

    return (
        <>
            <Header />
            <BlogContent posts={posts} />
            <CTASection />
            <Footer />
        </>
    )
}
