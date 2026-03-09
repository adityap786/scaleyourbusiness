import { createClient } from "@/utils/supabase/server"
import { notFound } from "next/navigation"
import { CaseStudyLayout } from "@/components/work/case-study-layout"
import { MDXRemote } from "next-mdx-remote/rsc"

export const revalidate = 60

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const supabase = await createClient()

    const { data: project } = await supabase
        .from('portfolio_projects')
        .select('*')
        .eq('slug', slug)
        .single()

    if (!project) {
        notFound()
    }

    // Get the next project to suggest
    const { data: nextProject } = await supabase
        .from('portfolio_projects')
        .select('title, slug')
        .neq('id', project.id)
        .limit(1)
        .single()

    const nextCaseStudy = nextProject ? {
        title: nextProject.title,
        href: `/work/${nextProject.slug}`
    } : undefined

    return (
        <CaseStudyLayout
            title={project.title}
            subtitle={project.subtitle}
            role={project.role}
            timeline={project.timeline}
            stack={project.stack || []}
            metrics={project.metrics || []}
            nextCaseStudy={nextCaseStudy}
        >
            <div className="prose prose-lg prose-neutral max-w-none hover:prose-a:text-[#3b82f6]">
                <MDXRemote source={project.content_markdown || ''} />
            </div>
        </CaseStudyLayout>
    )
}
