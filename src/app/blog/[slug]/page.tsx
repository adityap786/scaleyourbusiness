import { allPosts } from "contentlayer/generated"
import { notFound } from "next/navigation"
import { Container } from "@/components/ui/container"
import { format, parseISO } from "date-fns"
import { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { MdxContent } from "@/components/mdx-content"

interface BlogPostProps {
    params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
    return allPosts.map((post) => ({
        slug: post.slug,
    }))
}

export async function generateMetadata({ params }: BlogPostProps): Promise<Metadata> {
    const { slug } = await params
    const post = allPosts.find((post) => post.slug === slug)
    if (!post) return {}
    return {
        title: `${post.title} | Scale Your Business`,
        description: post.description,
    }
}

export default async function BlogPost({ params }: BlogPostProps) {
    const { slug } = await params
    const post = allPosts.find((post) => post.slug === slug)

    if (!post) notFound()

    return (
        <article className="pt-32 pb-24 bg-white min-h-screen">
            <div className="border-b border-white/10 pb-12 mb-12">
                <Container>
                    <Link href="/blog" className="inline-flex items-center text-sm text-gray-400 hover:text-white mb-8 transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Blog
                    </Link>
                    <div className="max-w-3xl mx-auto text-center">
                        <div className="mb-6 flex items-center justify-center gap-2 text-sm text-gray-500">
                            <time dateTime={post.date}>
                                {format(parseISO(post.date), 'MMMM d, yyyy')}
                            </time>
                            <span>•</span>
                            <span>{post.author}</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
                            {post.title}
                        </h1>
                        <p className="text-xl text-gray-400 leading-relaxed">
                            {post.description}
                        </p>
                    </div>
                </Container>
            </div>

            <Container>
                <div className="max-w-3xl mx-auto prose prose-invert prose-lg prose-headings:text-white prose-p:text-gray-300 prose-a:text-[var(--color-brand)] prose-strong:text-white">
                    <MdxContent code={post.body.code} />
                </div>
            </Container>
        </article>
    )
}
