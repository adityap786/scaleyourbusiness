import { createClient } from '@/utils/supabase/server'
import { Plus, Edit2, Search, Link as LinkIcon } from 'lucide-react'
import Link from 'next/link'

export default async function SEOAdminPage() {
    const supabase = await createClient()
    const { data: seoData, error } = await supabase.from('seo_metadata').select('*').order('updated_at', { ascending: false })

    return (
        <div>
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Global SEO & AEO</h1>
                    <p className="text-gray-500">Manage search engine optimization (SEO) and algorithmic engine optimization (AEO) metadata.</p>
                </div>
                <Link href="/admin/seo/new" className="bg-brand hover:bg-brand/90 text-white px-4 py-2 rounded-lg font-medium flex items-center transition-colors">
                    <Plus className="w-4 h-4 mr-2" />
                    New Route Meta
                </Link>
            </div>

            {error && (
                <div className="bg-red-50 text-red-600 p-4 rounded-lg mb-8">
                    Failed to load SEO data: {error.message}
                </div>
            )}

            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-gray-50/50 border-b border-gray-200 text-gray-500 text-sm">
                            <th className="px-6 py-4 font-medium">Route Path</th>
                            <th className="px-6 py-4 font-medium">Meta Title</th>
                            <th className="px-6 py-4 font-medium">AEO Schema</th>
                            <th className="px-6 py-4 font-medium text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {seoData?.length === 0 && (
                            <tr>
                                <td colSpan={4} className="px-6 py-8 text-center text-gray-500">
                                    No SEO metadata rules found. Create one.
                                </td>
                            </tr>
                        )}
                        {seoData?.map((meta) => (
                            <tr key={meta.id} className="hover:bg-gray-50/50 transition-colors group">
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-2">
                                        <LinkIcon className="w-4 h-4 text-gray-400" />
                                        <span className="font-mono text-sm font-medium text-gray-900">{meta.path}</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-sm">
                                    <div className="font-semibold text-gray-900 truncate max-w-xs">{meta.title}</div>
                                    <div className="text-gray-500 truncate max-w-xs">{meta.description}</div>
                                </td>
                                <td className="px-6 py-4">
                                    {meta.aeo_schema ? (
                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                                            JSON-LD Active
                                        </span>
                                    ) : (
                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-600">
                                            None
                                        </span>
                                    )}
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <Link href={`/admin/seo/${meta.id}`} className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors" title="Edit">
                                            <Edit2 className="w-4 h-4" />
                                        </Link>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
