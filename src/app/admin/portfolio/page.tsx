import { createClient } from '@/utils/supabase/server'
import { Plus } from 'lucide-react'
import Link from 'next/link'
import { PortfolioListClient } from './portfolio-list-client'

export default async function PortfolioAdminPage() {
    const supabase = await createClient()
    const { data: projects, error } = await supabase
        .from('portfolio_projects')
        .select('*')
        .order('order_index', { ascending: true })

    return (
        <div>
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Portfolio Projects</h1>
                    <p className="text-gray-500">Manage case studies and the homepage Immersive Experiences carousel.</p>
                </div>
                <Link href="/admin/portfolio/new" className="bg-brand hover:bg-brand/90 text-white px-4 py-2 rounded-lg font-medium flex items-center transition-colors">
                    <Plus className="w-4 h-4 mr-2" />
                    New Project
                </Link>
            </div>

            {error && (
                <div className="bg-red-50 text-red-600 p-4 rounded-lg mb-8">
                    Failed to load projects: {error.message}
                </div>
            )}

            <PortfolioListClient initialProjects={projects || []} />
        </div>
    )
}
