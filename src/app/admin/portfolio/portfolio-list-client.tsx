"use client"

import { useState } from 'react'
import { createClient } from '@/utils/supabase/client'
import { Edit2, Globe, Image, ArrowUp, ArrowDown, Loader2 } from 'lucide-react'
import Link from 'next/link'

interface Project {
    id: string
    title: string
    slug: string
    category: string
    is_featured_on_home: boolean
    cover_image_url: string
    project_url: string
    order_index: number
}

export function PortfolioListClient({ initialProjects }: { initialProjects: Project[] }) {
    const supabase = createClient()
    const [projects, setProjects] = useState(initialProjects)
    const [loadingId, setLoadingId] = useState<string | null>(null)

    const moveProject = async (index: number, direction: 'up' | 'down') => {
        if (direction === 'up' && index === 0) return
        if (direction === 'down' && index === projects.length - 1) return

        const newIndex = direction === 'up' ? index - 1 : index + 1
        const currentProject = projects[index]
        const swapProject = projects[newIndex]

        setLoadingId(currentProject.id)

        // Optimistic update
        const newProjects = [...projects]
        newProjects[index] = swapProject
        newProjects[newIndex] = currentProject
        setProjects(newProjects)

        // Supabase bulk update for order_index
        // Assign new order_index based on position
        const updates = newProjects.map((proj, i) => ({
            id: proj.id,
            order_index: i
        }))

        for (const update of updates) {
            await supabase
                .from('portfolio_projects')
                .update({ order_index: update.order_index })
                .eq('id', update.id)
        }

        setLoadingId(null)
    }

    if (projects.length === 0) {
        return (
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm p-8 text-center text-gray-500">
                No projects found. Create one to get started.
            </div>
        )
    }

    return (
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
            <table className="w-full text-left border-collapse">
                <thead>
                    <tr className="bg-gray-50/50 border-b border-gray-200 text-gray-500 text-sm">
                        <th className="px-6 py-4 font-medium">Order</th>
                        <th className="px-6 py-4 font-medium">Project</th>
                        <th className="px-6 py-4 font-medium">Category</th>
                        <th className="px-6 py-4 font-medium">Featured (Home)</th>
                        <th className="px-6 py-4 font-medium text-right">Actions</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                    {projects.map((project, index) => (
                        <tr key={project.id} className="hover:bg-gray-50/50 transition-colors group">
                            <td className="px-6 py-4 w-24">
                                <div className="flex flex-col items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <button
                                        onClick={() => moveProject(index, 'up')}
                                        disabled={index === 0 || loadingId === project.id}
                                        className="p-1 text-gray-400 hover:text-brand bg-gray-50 hover:bg-brand/10 rounded disabled:opacity-30 transition-colors"
                                    >
                                        <ArrowUp className="w-4 h-4" />
                                    </button>
                                    <button
                                        onClick={() => moveProject(index, 'down')}
                                        disabled={index === projects.length - 1 || loadingId === project.id}
                                        className="p-1 text-gray-400 hover:text-brand bg-gray-50 hover:bg-brand/10 rounded disabled:opacity-30 transition-colors"
                                    >
                                        <ArrowDown className="w-4 h-4" />
                                    </button>
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-md bg-gray-100 border border-gray-200 flex items-center justify-center overflow-hidden shrink-0">
                                        {project.cover_image_url ? (
                                            <img src={project.cover_image_url} alt="" className="w-full h-full object-cover" />
                                        ) : (
                                            <Image className="w-4 h-4 text-gray-400" />
                                        )}
                                    </div>
                                    <div>
                                        <div className="font-semibold text-gray-900 flex items-center gap-2">
                                            {project.title}
                                            {loadingId === project.id && <Loader2 className="w-3 h-3 animate-spin text-brand" />}
                                        </div>
                                        <div className="text-sm text-gray-500">{project.slug}</div>
                                    </div>
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                                    {project.category}
                                </span>
                            </td>
                            <td className="px-6 py-4">
                                {project.is_featured_on_home ? (
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                        Featured
                                    </span>
                                ) : (
                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-600">
                                        Hidden
                                    </span>
                                )}
                            </td>
                            <td className="px-6 py-4 text-right">
                                <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                    {project.project_url && (
                                        <a href={project.project_url} target="_blank" rel="noreferrer" className="p-2 text-gray-400 hover:text-brand hover:bg-brand/10 rounded-md transition-colors" title="View Live Site">
                                            <Globe className="w-4 h-4" />
                                        </a>
                                    )}
                                    <Link href={`/admin/portfolio/${project.id}`} className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors" title="Edit">
                                        <Edit2 className="w-4 h-4" />
                                    </Link>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
