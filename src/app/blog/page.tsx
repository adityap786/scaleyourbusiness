import { compareDesc, format, parseISO } from "date-fns"
import { Container } from "@/components/ui/container"
import { CTASection } from "@/components/home/cta-section"
import { Metadata } from "next"
import { BlogContent } from "@/components/blog/blog-content"
import { createClient } from "@/utils/supabase/server"

export const metadata: Metadata = {
    title: "Blog | Scale Your Business",
    description: "Insights on AI Automation, SaaS Development, and Scaling your business — actionable, no fluff.",
}

export const revalidate = 60 // Revalidate the page every 60 seconds

export default async function BlogPage() {
    const supabase = await createClient()

    // Fetch all published blogs
    const { data: postsData, error } = await supabase
        .from('blogs')
        .select('*')
        .eq('is_published', true)
        .order('created_at', { ascending: false })

    if (error) {
        console.error("Failed to fetch blogs:", error)
    }

    const posts = (postsData || []).map(post => ({
        _id: post.id,
        title: post.title,
        date: post.created_at,
        description: post.description,
        author: post.author,
        url: `/blog/${post.slug}`,
        tags: post.tags,
        image: post.cover_image_url
    }))

    return (
        <>
            <BlogContent posts={posts} />
            <CTASection />
        </>
    )
}
