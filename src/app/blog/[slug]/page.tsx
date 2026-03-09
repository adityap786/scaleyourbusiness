import { notFound } from "next/navigation"
import { Container } from "@/components/ui/container"
import { format, parseISO } from "date-fns"
import { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { MDXRemote } from 'next-mdx-remote/rsc'
import rehypePrettyCode from "rehype-pretty-code"
import { createClient } from "@/utils/supabase/server"

interface BlogPostProps {
    params: Promise<{ slug: string }>
}

export const revalidate = 60

export async function generateMetadata({ params }: BlogPostProps): Promise<Metadata> {
    const { slug } = await params
    const supabase = await createClient()
    const { data: post } = await supabase.from('blogs').select('*').eq('slug', slug).single()

    if (!post) return {}

    return {
        title: `${post.title} | Scale Your Business`,
        description: post.description,
        openGraph: {
            images: [post.cover_image_url]
        }
    }
}

export default async function BlogPost({ params }: BlogPostProps) {
    const { slug } = await params
    const supabase = await createClient()

    const { data: post, error } = await supabase
        .from('blogs')
        .select('*')
        .eq('slug', slug)
        .eq('is_published', true)
        .single()

    if (error || !post) {
        notFound()
    }

    const mdxOptions = {
        mdxOptions: {
            rehypePlugins: [
                [
                    rehypePrettyCode,
                    {
                        theme: "github-dark",
                    },
                ] as any,
            ],
        },
    }

    return (
        <article className="pt-32 pb-24 bg-white min-h-screen">
            <div className="border-b border-gray-200 pb-12 mb-12">
                <Container>
                    <Link href="/blog" className="inline-flex items-center text-sm text-gray-500 hover:text-black mb-8 transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Blog
                    </Link>
                    <div className="max-w-3xl mx-auto text-center">
                        <div className="mb-6 flex items-center justify-center gap-2 text-sm text-gray-500">
                            <time dateTime={post.created_at}>
                                {format(parseISO(post.created_at), 'MMMM d, yyyy')}
                            </time>
                            <span>•</span>
                            <span>{post.author}</span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-black mb-6 leading-tight">
                            {post.title}
                        </h1>
                        <p className="text-xl text-gray-500 leading-relaxed">
                            {post.description}
                        </p>
                    </div>
                </Container>
            </div>

            <Container>
                {post.cover_image_url && (
                    <div className="max-w-4xl mx-auto mb-16 rounded-2xl overflow-hidden shadow-xl border border-gray-100">
                        <img src={post.cover_image_url} alt={post.title} className="w-full h-auto object-cover max-h-[500px]" />
                    </div>
                )}

                <div className="max-w-3xl mx-auto prose prose-lg prose-headings:text-black prose-p:text-gray-700 prose-a:text-[var(--color-brand)] prose-strong:text-black prose-img:rounded-xl">
                    <MDXRemote source={post.content_markdown} options={mdxOptions} />
                </div>
            </Container>
        </article>
    )
}
