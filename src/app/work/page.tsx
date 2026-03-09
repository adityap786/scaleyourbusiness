import { createClient } from "@/utils/supabase/server"
import { WorkClient } from "./work-client"

export const revalidate = 60

export default async function WorkPage() {
    const supabase = await createClient()
    const { data: projects } = await supabase
        .from('portfolio_projects')
        .select('*')
        .order('order_index', { ascending: true })

    const formattedProjects = (projects || []).map((p) => ({
        client: p.title,
        category: p.category,
        services: p.stack || [],
        description: p.subtitle || p.role,
        href: `/work/${p.slug}`,
        color: p.brand_color || "#3b82f6"
    }))

    return <WorkClient projects={formattedProjects} />
}
