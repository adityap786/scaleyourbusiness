'use client'

import { useState, useEffect, use } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/utils/supabase/client'
import { ArrowLeft, Save, Trash2, Loader2, Image as ImageIcon } from 'lucide-react'
import Link from 'next/link'

export default function PortfolioEditor({ params }: { params: Promise<{ id: string }> }) {
    const router = useRouter()
    const supabase = createClient()
    const unwrappedParams = use(params)
    const isNew = unwrappedParams.id === 'new'

    const [loading, setLoading] = useState(true)
    const [saving, setSaving] = useState(false)
    const [formData, setFormData] = useState({
        slug: '', title: '', subtitle: '', category: '', role: '',
        timeline: '', stack: '[]', metrics: '[]', brand_color: '#000000',
        brand_bg: '#ffffff', cover_image_url: '', reference_image_url: '',
        project_url: '', content_markdown: '', is_featured_on_home: false
    })

    useEffect(() => {
        if (!isNew) {
            supabase.from('portfolio_projects').select('*').eq('id', unwrappedParams.id).single()
                .then(({ data, error }) => {
                    if (data) {
                        setFormData({
                            ...data,
                            stack: JSON.stringify(data.stack),
                            metrics: JSON.stringify(data.metrics)
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

        let parsedStack, parsedMetrics;
        try {
            parsedStack = JSON.parse(formData.stack || '[]');
            parsedMetrics = JSON.parse(formData.metrics || '[]');
        } catch (err) {
            alert('Invalid JSON formatting in Tech Stack or Metrics. Please make sure they are formatted as a valid JSON array like ["React", "Next.js"].');
            setSaving(false);
            return;
        }

        const payload = {
            ...formData,
            stack: parsedStack,
            metrics: parsedMetrics
        }

        if (isNew) {
            const { error } = await supabase.from('portfolio_projects').insert([payload])
            if (!error) router.push('/admin/portfolio')
            else alert(error.message)
        } else {
            const { error } = await supabase.from('portfolio_projects').update(payload).eq('id', unwrappedParams.id)
            if (!error) router.push('/admin/portfolio')
            else alert(error.message)
        }
        setSaving(false)
    }

    const handleDelete = async () => {
        if (!confirm('Are you sure you want to delete this project?')) return
        setSaving(true)
        await supabase.from('portfolio_projects').delete().eq('id', unwrappedParams.id)
        router.push('/admin/portfolio')
    }

    if (loading) return <div className="flex h-64 items-center justify-center"><Loader2 className="w-8 h-8 animate-spin text-brand" /></div>

    return (
        <form onSubmit={handleSave} className="max-w-5xl">
            <div className="flex justify-between items-center mb-8">
                <div className="flex items-center gap-4">
                    <Link href="/admin/portfolio" className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                        <ArrowLeft className="w-5 h-5" />
                    </Link>
                    <h1 className="text-3xl font-bold text-gray-900">{isNew ? 'New Project' : 'Edit Project'}</h1>
                </div>
                <div className="flex items-center gap-4">
                    {!isNew && (
                        <button type="button" onClick={handleDelete} className="text-red-500 hover:bg-red-50 px-4 py-2 rounded-lg font-medium transition-colors flex items-center">
                            <Trash2 className="w-4 h-4 mr-2" /> Delete
                        </button>
                    )}
                    <button type="submit" disabled={saving} className="bg-brand hover:bg-brand/90 text-white px-6 py-2 rounded-lg font-medium flex items-center transition-colors disabled:opacity-50">
                        {saving ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <Save className="w-4 h-4 mr-2" />}
                        {saving ? 'Saving...' : 'Save Changes'}
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-8">
                {/* Left Column - Main Details */}
                <div className="col-span-2 space-y-6">
                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-4">
                        <h2 className="text-lg font-bold border-b pb-2 mb-4">Core Information</h2>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                                <input required type="text" value={formData.title} onChange={e => setFormData({ ...formData, title: e.target.value })} className="w-full border rounded-lg px-3 py-2" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">URL Slug</label>
                                <input required type="text" value={formData.slug} onChange={e => setFormData({ ...formData, slug: e.target.value })} className="w-full border rounded-lg px-3 py-2 font-mono text-sm" />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Subtitle</label>
                            <input type="text" value={formData.subtitle} onChange={e => setFormData({ ...formData, subtitle: e.target.value })} className="w-full border rounded-lg px-3 py-2" />
                        </div>

                        <div className="grid grid-cols-3 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                                <input required type="text" value={formData.category} onChange={e => setFormData({ ...formData, category: e.target.value })} className="w-full border rounded-lg px-3 py-2" placeholder="e.g. Healthcare" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
                                <input required type="text" value={formData.role} onChange={e => setFormData({ ...formData, role: e.target.value })} className="w-full border rounded-lg px-3 py-2" placeholder="e.g. Engineering" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Timeline</label>
                                <input required type="text" value={formData.timeline} onChange={e => setFormData({ ...formData, timeline: e.target.value })} className="w-full border rounded-lg px-3 py-2" placeholder="e.g. 4 Months" />
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-4">
                        <h2 className="text-lg font-bold border-b pb-2 mb-4">Content (Markdown)</h2>
                        <div>
                            <textarea required value={formData.content_markdown} onChange={e => setFormData({ ...formData, content_markdown: e.target.value })} className="w-full border rounded-lg px-3 py-2 h-96 font-mono text-sm" placeholder="Write the case study using markdown (<h2>, <p>)..." />
                        </div>
                    </div>
                </div>

                {/* Right Column - Media & Settings */}
                <div className="col-span-1 space-y-6">
                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-4">
                        <h2 className="text-lg font-bold border-b pb-2 mb-4">Visibility</h2>
                        <label className="flex items-center gap-3 cursor-pointer">
                            <input type="checkbox" checked={formData.is_featured_on_home} onChange={e => setFormData({ ...formData, is_featured_on_home: e.target.checked })} className="w-5 h-5 text-brand rounded focus:ring-brand" />
                            <span className="text-sm font-medium text-gray-900">Feature on Home Carousel</span>
                        </label>
                        <p className="text-xs text-gray-500">Checking this box will display this project in the "Immersive Experiences" 3D slider on the index page.</p>
                    </div>

                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-4">
                        <h2 className="text-lg font-bold border-b pb-2 mb-4">Media & Colors</h2>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Cover Image URL</label>
                            <input required type="text" value={formData.cover_image_url} onChange={e => setFormData({ ...formData, cover_image_url: e.target.value })} className="w-full border rounded-lg px-3 py-2 text-sm" placeholder="https://" />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Reference Image URL (Optional)</label>
                            <input type="text" value={formData.reference_image_url} onChange={e => setFormData({ ...formData, reference_image_url: e.target.value })} className="w-full border rounded-lg px-3 py-2 text-sm" placeholder="https://" />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Live Project URL (Optional)</label>
                            <input type="text" value={formData.project_url} onChange={e => setFormData({ ...formData, project_url: e.target.value })} className="w-full border rounded-lg px-3 py-2 text-sm" placeholder="https://" />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Brand Color</label>
                                <input type="color" value={formData.brand_color} onChange={e => setFormData({ ...formData, brand_color: e.target.value })} className="w-full h-10 rounded-lg cursor-pointer" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Hover BG Color</label>
                                <input type="color" value={formData.brand_bg} onChange={e => setFormData({ ...formData, brand_bg: e.target.value })} className="w-full h-10 rounded-lg cursor-pointer" />
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-4">
                        <h2 className="text-lg font-bold border-b pb-2 mb-4">JSON Data</h2>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Tech Stack (JSON Array)</label>
                            <textarea value={formData.stack} onChange={e => setFormData({ ...formData, stack: e.target.value })} className="w-full border rounded-lg px-3 py-2 h-24 font-mono text-xs" placeholder='["React", "Next.js"]' />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Metrics (JSON Array)</label>
                            <textarea value={formData.metrics} onChange={e => setFormData({ ...formData, metrics: e.target.value })} className="w-full border rounded-lg px-3 py-2 h-32 font-mono text-xs" placeholder='[{"label": "Growth", "value": "+50%"}]' />
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}
