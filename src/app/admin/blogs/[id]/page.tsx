'use client'

import { useState, useEffect, use } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/utils/supabase/client'
import { ArrowLeft, Save, Trash2, Loader2, Image as ImageIcon, Sparkles, Brain } from 'lucide-react'
import Link from 'next/link'

export default function BlogEditor({ params }: { params: Promise<{ id: string }> }) {
    const router = useRouter()
    const supabase = createClient()
    const unwrappedParams = use(params)
    const isNew = unwrappedParams.id === 'new'

    const [loading, setLoading] = useState(true)
    const [saving, setSaving] = useState(false)
    const [formData, setFormData] = useState({
        title: '', slug: '', description: '', author: '',
        cover_image_url: '', tags: '[]', content_markdown: '', is_published: true,
        seo_title: '', seo_description: '', seo_keywords: '', canonical_url: '',
        og_image_url: '', aeo_schema: '{}', geo_prompt_optimization: ''
    })

    useEffect(() => {
        if (!isNew) {
            supabase.from('blogs').select('*').eq('id', unwrappedParams.id).single()
                .then(({ data, error }) => {
                    if (data) {
                        setFormData({
                            ...data,
                            tags: JSON.stringify(data.tags),
                            aeo_schema: data.aeo_schema ? JSON.stringify(data.aeo_schema, null, 2) : '{}'
                        })
                    }
                    setLoading(false)
                })
        } else {
            setLoading(false)
        }
    }, [unwrappedParams.id, isNew, supabase])

    const handleSave = async (e: React.FormEvent) => {
        e.preventDefault()
        setSaving(true)

        let parsedTags;
        try {
            parsedTags = JSON.parse(formData.tags || '[]');
        } catch (err) {
            alert('Invalid JSON formatting in Tags. Please make sure they are formatted as a valid JSON array like ["SaaS", "Next.js"].');
            setSaving(false);
            return;
        }

        let parsedAeoSchema = null
        try {
            parsedAeoSchema = JSON.parse(formData.aeo_schema || '{}')
        } catch (e) {
            alert('Invalid JSON in AEO Schema. Please fix before saving.')
            setSaving(false)
            return
        }

        const payload = {
            ...formData,
            tags: parsedTags,
            aeo_schema: parsedAeoSchema
        }

        if (isNew) {
            const { error } = await supabase.from('blogs').insert([payload])
            if (!error) router.push('/admin/blogs')
            else alert(error.message)
        } else {
            const { error } = await supabase.from('blogs').update(payload).eq('id', unwrappedParams.id)
            if (!error) router.push('/admin/blogs')
            else alert(error.message)
        }
        setSaving(false)
    }

    const handleDelete = async () => {
        if (!confirm('Are you sure you want to delete this article?')) return
        setSaving(true)
        await supabase.from('blogs').delete().eq('id', unwrappedParams.id)
        router.push('/admin/blogs')
    }

    if (loading) return <div className="flex h-64 items-center justify-center"><Loader2 className="w-8 h-8 animate-spin text-brand" /></div>

    return (
        <form onSubmit={handleSave} className="max-w-5xl">
            <div className="flex justify-between items-center mb-8">
                <div className="flex items-center gap-4">
                    <Link href="/admin/blogs" className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                        <ArrowLeft className="w-5 h-5" />
                    </Link>
                    <h1 className="text-3xl font-bold text-gray-900">{isNew ? 'New Article' : 'Edit Article'}</h1>
                </div>
                <div className="flex items-center gap-4">
                    {!isNew && (
                        <button type="button" onClick={handleDelete} className="text-red-500 hover:bg-red-50 px-4 py-2 rounded-lg font-medium transition-colors flex items-center">
                            <Trash2 className="w-4 h-4 mr-2" /> Delete
                        </button>
                    )}
                    <button type="submit" disabled={saving} className="bg-brand hover:bg-brand/90 text-white px-6 py-2 rounded-lg font-medium flex items-center transition-colors disabled:opacity-50">
                        {saving ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <Save className="w-4 h-4 mr-2" />}
                        {saving ? 'Saving...' : 'Save Article'}
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-8">
                {/* Left Column - Content */}
                <div className="col-span-2 space-y-6">
                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-4">
                        <h2 className="text-lg font-bold border-b pb-2 mb-4">Core Settings</h2>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Headline</label>
                            <input required type="text" value={formData.title} onChange={e => setFormData({ ...formData, title: e.target.value })} className="w-full text-xl font-bold border rounded-lg px-3 py-2" placeholder="Catchy title..." />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">SEO Description</label>
                            <textarea required value={formData.description} onChange={e => setFormData({ ...formData, description: e.target.value })} className="w-full border rounded-lg px-3 py-2 h-20" placeholder="1-2 sentences summarizing the article for Google." />
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-4">
                        <h2 className="text-lg font-bold border-b pb-2 mb-4">Article Body (Markdown)</h2>
                        <div>
                            <textarea required value={formData.content_markdown} onChange={e => setFormData({ ...formData, content_markdown: e.target.value })} className="w-full border rounded-lg px-3 py-2 h-[500px] font-mono text-sm" placeholder="Write the blog post here..." />
                        </div>
                    </div>
                </div>

                {/* Right Column - Meta */}
                <div className="col-span-1 space-y-6">
                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-4">
                        <h2 className="text-lg font-bold border-b pb-2 mb-4">Publishing</h2>
                        <label className="flex items-center gap-3 cursor-pointer">
                            <input type="checkbox" checked={formData.is_published} onChange={e => setFormData({ ...formData, is_published: e.target.checked })} className="w-5 h-5 text-brand rounded focus:ring-brand" />
                            <span className="text-sm font-medium text-gray-900">Publish immediately to live site</span>
                        </label>
                    </div>

                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-4">
                        <h2 className="text-lg font-bold border-b pb-2 mb-4">Metadata</h2>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">URL Slug</label>
                            <input required type="text" value={formData.slug} onChange={e => setFormData({ ...formData, slug: e.target.value })} className="w-full border rounded-lg px-3 py-2 font-mono text-sm" placeholder="my-awesome-post" />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Author Name</label>
                            <input required type="text" value={formData.author} onChange={e => setFormData({ ...formData, author: e.target.value })} className="w-full border rounded-lg px-3 py-2 text-sm" placeholder="e.g. Atharv Tripathi" />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Cover Image URL</label>
                            <input required type="text" value={formData.cover_image_url} onChange={e => setFormData({ ...formData, cover_image_url: e.target.value })} className="w-full border rounded-lg px-3 py-2 text-sm" placeholder="https://" />
                            {formData.cover_image_url && (
                                <img src={formData.cover_image_url} alt="Cover Preview" className="mt-3 w-full h-32 object-cover rounded-lg border" />
                            )}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Tags (JSON Array)</label>
                            <textarea value={formData.tags} onChange={e => setFormData({ ...formData, tags: e.target.value })} className="w-full border rounded-lg px-3 py-2 h-24 font-mono text-xs" placeholder='["SaaS", "Next.js"]' />
                            <p className="text-xs text-gray-500 mt-1">Must be formatted as valid JSON.</p>
                        </div>
                    </div>
                </div>

                {/* Full Width SEO Config Row */}
                <div className="col-span-3 space-y-6 mt-6">
                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-4">
                        <h2 className="text-lg font-bold border-b pb-2 mb-4 flex items-center gap-2">
                            <Sparkles className="w-5 h-5 text-brand" /> Advanced SEO / Metadata
                        </h2>

                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">SEO Title (Overrides Headline)</label>
                                <input type="text" value={formData.seo_title} onChange={e => setFormData({ ...formData, seo_title: e.target.value })} className="w-full border rounded-lg px-3 py-2" placeholder="Optimized Title for Search" />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Canonical URL</label>
                                <input type="text" value={formData.canonical_url} onChange={e => setFormData({ ...formData, canonical_url: e.target.value })} className="w-full border rounded-lg px-3 py-2" placeholder="https://scaleyourbusiness.com/..." />
                            </div>

                            <div className="col-span-2">
                                <label className="block text-sm font-medium text-gray-700 mb-1">SEO Description</label>
                                <textarea value={formData.seo_description} onChange={e => setFormData({ ...formData, seo_description: e.target.value })} className="w-full border rounded-lg px-3 py-2 h-20" placeholder="Meta description for search results" />
                            </div>

                            <div className="col-span-1">
                                <label className="block text-sm font-medium text-gray-700 mb-1">SEO Keywords</label>
                                <input type="text" value={formData.seo_keywords} onChange={e => setFormData({ ...formData, seo_keywords: e.target.value })} className="w-full border rounded-lg px-3 py-2" placeholder="Comma separated keywords" />
                            </div>

                            <div className="col-span-1">
                                <label className="block text-sm font-medium text-gray-700 mb-1">OG Image URL</label>
                                <input type="text" value={formData.og_image_url} onChange={e => setFormData({ ...formData, og_image_url: e.target.value })} className="w-full border rounded-lg px-3 py-2" placeholder="Specific image for social sharing" />
                            </div>
                        </div>
                    </div>

                    <div className="bg-[#1a1a1a] text-white p-6 rounded-xl shadow-xl space-y-4 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-brand/20 blur-3xl rounded-full translate-x-10 -translate-y-10 pointer-events-none"></div>
                        <h2 className="text-lg font-bold border-b border-white/10 pb-2 mb-4 flex items-center gap-2">
                            <Brain className="w-5 h-5 text-brand" /> AEO & GEO Config
                        </h2>

                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-1">Generative Engine Prompt (GEO)</label>
                                <textarea value={formData.geo_prompt_optimization} onChange={e => setFormData({ ...formData, geo_prompt_optimization: e.target.value })} className="w-full bg-black/50 border border-white/20 rounded-lg px-3 py-2 h-32 text-sm text-gray-300 placeholder-gray-600 focus:border-brand focus:ring-1 focus:ring-brand outline-none" placeholder="Provide context specifically formatted for LLMs reading this page..." />
                                <p className="text-xs text-gray-500 mt-1">Hidden text optimized for ChatGPT/Perplexity crawling.</p>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-1">JSON-LD Schema</label>
                                <textarea value={formData.aeo_schema} onChange={e => setFormData({ ...formData, aeo_schema: e.target.value })} className="w-full bg-black/50 border border-white/20 rounded-lg px-3 py-2 h-32 font-mono text-xs text-green-400 focus:border-brand focus:ring-1 focus:ring-brand outline-none" placeholder='{ "@context": "https://schema.org", "@type": "Article" }' />
                                <p className="text-xs text-gray-500 mt-1">Structured data for rich snippets.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}
