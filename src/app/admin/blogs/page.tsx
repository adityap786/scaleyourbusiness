import { createClient } from '@/utils/supabase/server'
import { Plus, Edit2, Globe, Image, FileText } from 'lucide-react'
import Link from 'next/link'

export default async function BlogsAdminPage() {
    const supabase = await createClient()
    const { data: blogs, error } = await supabase.from('blogs').select('*').order('created_at', { ascending: false })

    return (
        <div>
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Blogs & Articles</h1>
                    <p className="text-gray-500">Manage your content marketing and SEO articles.</p>
                </div>
                <Link href="/admin/blogs/new" className="bg-brand hover:bg-brand/90 text-white px-4 py-2 rounded-lg font-medium flex items-center transition-colors">
                    <Plus className="w-4 h-4 mr-2" />
                    New Article
                </Link>
            </div>

            {error && (
                <div className="bg-red-50 text-red-600 p-4 rounded-lg mb-8">
                    Failed to load blogs: {error.message}
                </div>
            )}

            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-gray-50/50 border-b border-gray-200 text-gray-500 text-sm">
                            <th className="px-6 py-4 font-medium">Article</th>
                            <th className="px-6 py-4 font-medium">Author</th>
                            <th className="px-6 py-4 font-medium">Status</th>
                            <th className="px-6 py-4 font-medium text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {blogs?.length === 0 && (
                            <tr>
                                <td colSpan={4} className="px-6 py-8 text-center text-gray-500">
                                    No articles found. Create one to get started.
                                </td>
                            </tr>
                        )}
                        {blogs?.map((blog) => (
                            <tr key={blog.id} className="hover:bg-gray-50/50 transition-colors group">
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-md bg-gray-100 border border-gray-200 flex items-center justify-center overflow-hidden shrink-0">
                                            {blog.cover_image_url ? (
                                                <img src={blog.cover_image_url} alt="" className="w-full h-full object-cover" />
                                            ) : (
                                                <FileText className="w-4 h-4 text-gray-400" />
                                            )}
                                        </div>
                                        <div>
                                            <div className="font-semibold text-gray-900">{blog.title}</div>
                                            <div className="text-sm text-gray-500">/{blog.slug}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="text-sm text-gray-800">{blog.author}</span>
                                </td>
                                <td className="px-6 py-4">
                                    {blog.is_published ? (
                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                            Published
                                        </span>
                                    ) : (
                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                                            Draft
                                        </span>
                                    )}
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <a href={`/blog/${blog.slug}`} target="_blank" rel="noreferrer" className="p-2 text-gray-400 hover:text-brand hover:bg-brand/10 rounded-md transition-colors" title="View Live Blog">
                                            <Globe className="w-4 h-4" />
                                        </a>
                                        <Link href={`/admin/blogs/${blog.id}`} className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors" title="Edit">
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
