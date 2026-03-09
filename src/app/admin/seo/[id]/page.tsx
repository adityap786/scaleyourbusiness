'use client'

import { useState, useEffect, use } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/utils/supabase/client'
import { ArrowLeft, Save, Trash2, Loader2, Sparkles, Brain } from 'lucide-react'
import Link from 'next/link'

export default function SEOEditor({ params }: { params: Promise<{ id: string }> }) {
    const router = useRouter()
    const supabase = createClient()
    const unwrappedParams = use(params)
    const isNew = unwrappedParams.id === 'new'

    const [loading, setLoading] = useState(true)
    const [saving, setSaving] = useState(false)
    const [formData, setFormData] = useState({
        path: '/', title: '', description: '',
        og_image_url: '', keywords: '', aeo_schema: '{}',
        geo_prompt_optimization: '', canonical_url: ''
    })

    useEffect(() => {
        if (!isNew) {
            supabase.from('seo_metadata').select('*').eq('id', unwrappedParams.id).single()
                .then(({ data, error }) => {
                    if (data) {
                        setFormData({
                            ...data,
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
            aeo_schema: parsedAeoSchema
        }

        if (isNew) {
            const { error } = await supabase.from('seo_metadata').insert([payload])
            if (!error) router.push('/admin/seo')
            else alert(error.message)
        } else {
            const { error } = await supabase.from('seo_metadata').update(payload).eq('id', unwrappedParams.id)
            if (!error) router.push('/admin/seo')
            else alert(error.message)
        }
        setSaving(false)
    }

    const handleDelete = async () => {
        if (!confirm('Are you sure you want to delete this SEO configuration?')) return
        setSaving(true)
        await supabase.from('seo_metadata').delete().eq('id', unwrappedParams.id)
        router.push('/admin/seo')
    }

    if (loading) return <div className="flex h-64 items-center justify-center"><Loader2 className="w-8 h-8 animate-spin text-brand" /></div>

    return (
        <form onSubmit={handleSave} className="max-w-5xl">
            <div className="flex justify-between items-center mb-8">
                <div className="flex items-center gap-4">
                    <Link href="/admin/seo" className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                        <ArrowLeft className="w-5 h-5" />
                    </Link>
                    <h1 className="text-3xl font-bold text-gray-900">{isNew ? 'New SEO Route' : 'Edit SEO Rule'}</h1>
                </div>
                <div className="flex items-center gap-4">
                    {!isNew && (
                        <button type="button" onClick={handleDelete} className="text-red-500 hover:bg-red-50 px-4 py-2 rounded-lg font-medium transition-colors flex items-center">
                            <Trash2 className="w-4 h-4 mr-2" /> Delete
                        </button>
                    )}
                    <button type="submit" disabled={saving} className="bg-brand hover:bg-brand/90 text-white px-6 py-2 rounded-lg font-medium flex items-center transition-colors disabled:opacity-50">
                        {saving ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <Save className="w-4 h-4 mr-2" />}
                        {saving ? 'Saving...' : 'Save Meta Data'}
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-8">
                {/* Left Column - Core SEO */}
                <div className="col-span-2 space-y-6">
                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-4">
                        <h2 className="text-lg font-bold border-b pb-2 mb-4 flex items-center gap-2">
                            <Sparkles className="w-5 h-5 text-brand" /> Traditional SEO Meta
                        </h2>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Route Path (Exact Match)</label>
                            <input required type="text" value={formData.path} onChange={e => setFormData({ ...formData, path: e.target.value })} className="w-full border rounded-lg px-3 py-2 font-mono text-sm" placeholder="e.g. /pricing or /about" />
                            <p className="text-xs text-gray-500 mt-1">The URL path where these meta tags should be injected.</p>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Meta Title</label>
                            <input required type="text" value={formData.title} onChange={e => setFormData({ ...formData, title: e.target.value })} className="w-full border rounded-lg px-3 py-2" placeholder="Scale Your Business | AI Agency" />
                            <p className="text-xs text-gray-500 mt-1">Recommended: 50-60 characters. Current: {formData.title.length}</p>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Meta Description</label>
                            <textarea required value={formData.description} onChange={e => setFormData({ ...formData, description: e.target.value })} className="w-full border rounded-lg px-3 py-2 h-24" placeholder="Leading AI automation agency helping B2B companies..." />
                            <p className="text-xs text-gray-500 mt-1">Recommended: 150-160 characters. Current: {formData.description.length}</p>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Meta Keywords (Comma Separated)</label>
                            <input type="text" value={formData.keywords} onChange={e => setFormData({ ...formData, keywords: e.target.value })} className="w-full border rounded-lg px-3 py-2" placeholder="AI Agency, Web Development, India" />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Open Graph / Social Share Image URL</label>
                            <input type="text" value={formData.og_image_url} onChange={e => setFormData({ ...formData, og_image_url: e.target.value })} className="w-full border rounded-lg px-3 py-2 text-sm" placeholder="https://" />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Canonical URL</label>
                            <input type="text" value={formData.canonical_url} onChange={e => setFormData({ ...formData, canonical_url: e.target.value })} className="w-full border rounded-lg px-3 py-2 text-sm" placeholder="https://scaleyourbusiness.com/" />
                        </div>
                    </div>
                </div>

                {/* Right Column - AEO / GEO */}
                <div className="col-span-1 space-y-6">
                    <div className="bg-[#1a1a1a] text-white p-6 rounded-xl shadow-xl space-y-4 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-brand/20 blur-3xl rounded-full translate-x-10 -translate-y-10 pointer-events-none"></div>
                        <h2 className="text-lg font-bold border-b border-white/10 pb-2 mb-4 flex items-center gap-2">
                            <Brain className="w-5 h-5 text-brand" /> AEO & GEO Config
                        </h2>

                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-1">Generative Engine Prompt (GEO)</label>
                            <textarea value={formData.geo_prompt_optimization} onChange={e => setFormData({ ...formData, geo_prompt_optimization: e.target.value })} className="w-full bg-black/50 border border-white/20 rounded-lg px-3 py-2 h-32 text-sm text-gray-300 placeholder-gray-600 focus:border-brand focus:ring-1 focus:ring-brand outline-none" placeholder="Provide context specifically formatted for LLMs reading this page..." />
                            <p className="text-xs text-gray-500 mt-1">Hidden text optimized for ChatGPT/Perplexity crawling.</p>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-1">JSON-LD Schema</label>
                            <textarea value={formData.aeo_schema} onChange={e => setFormData({ ...formData, aeo_schema: e.target.value })} className="w-full bg-black/50 border border-white/20 rounded-lg px-3 py-2 h-64 font-mono text-xs text-green-400 focus:border-brand focus:ring-1 focus:ring-brand outline-none" placeholder='{ "@context": "https://schema.org", "@type": "Organization" }' />
                            <p className="text-xs text-gray-500 mt-1">Structured data for rich snippets.</p>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}
