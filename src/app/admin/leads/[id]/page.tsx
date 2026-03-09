import { createClient } from '@/utils/supabase/server'
import { ArrowLeft, Mail, Phone, Globe, Calendar, Briefcase, DollarSign } from 'lucide-react'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export default async function LeadDetailsPage({ params }: { params: Promise<{ id: string }> }) {
    const supabase = await createClient()
    const unwrappedParams = await params
    const { data: lead, error } = await supabase.from('contact_leads').select('*').eq('id', unwrappedParams.id).single()

    if (error || !lead) {
        notFound()
    }

    return (
        <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-8">
                <Link href="/admin/leads" className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                    <ArrowLeft className="w-5 h-5" />
                </Link>
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">{lead.name}</h1>
                    <p className="text-gray-500">Submitted on {new Date(lead.created_at).toLocaleString()}</p>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-8">
                {/* Left Column - Core Info */}
                <div className="col-span-1 space-y-6">
                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-4">
                        <h2 className="text-lg font-bold border-b pb-2 mb-4">Contact Info</h2>

                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <Mail className="w-5 h-5 text-gray-400 mt-0.5" />
                                <div>
                                    <div className="text-sm font-medium text-gray-900">Email Address</div>
                                    <a href={`mailto:${lead.email}`} className="text-sm text-brand hover:underline">{lead.email}</a>
                                </div>
                            </div>

                            {lead.phone && (
                                <div className="flex items-start gap-3">
                                    <Phone className="w-5 h-5 text-gray-400 mt-0.5" />
                                    <div>
                                        <div className="text-sm font-medium text-gray-900">Phone Number</div>
                                        <a href={`tel:${lead.phone}`} className="text-sm text-gray-600 hover:text-brand transition-colors">{lead.phone}</a>
                                    </div>
                                </div>
                            )}

                            {lead.website && (
                                <div className="flex items-start gap-3">
                                    <Globe className="w-5 h-5 text-gray-400 mt-0.5" />
                                    <div>
                                        <div className="text-sm font-medium text-gray-900">Website</div>
                                        <a href={lead.website.startsWith('http') ? lead.website : `https://${lead.website}`} target="_blank" rel="noreferrer" className="text-sm text-brand hover:underline">{lead.website}</a>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Right Column - Project Details */}
                <div className="col-span-2 space-y-6">
                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-6">
                        <h2 className="text-lg font-bold border-b pb-2 mb-4">Project Requirements</h2>

                        <div className="flex flex-wrap gap-4">
                            {lead.area_of_interest && (
                                <div className="bg-blue-50 border border-blue-100 rounded-lg p-3 flex-1 min-w-[200px]">
                                    <div className="flex items-center gap-2 text-blue-800 text-sm font-medium mb-1">
                                        <Briefcase className="w-4 h-4" /> Area of Interest
                                    </div>
                                    <div className="text-gray-900">{lead.area_of_interest}</div>
                                </div>
                            )}

                            {lead.budget && (
                                <div className="bg-green-50 border border-green-100 rounded-lg p-3 flex-1 min-w-[200px]">
                                    <div className="flex items-center gap-2 text-green-800 text-sm font-medium mb-1">
                                        <DollarSign className="w-4 h-4" /> Expected Budget
                                    </div>
                                    <div className="text-gray-900">{lead.budget}</div>
                                </div>
                            )}
                        </div>

                        <div>
                            <div className="text-sm font-medium text-gray-900 mb-2">Project Details</div>
                            <div className="bg-gray-50 border border-gray-100 rounded-xl p-6 text-gray-800 whitespace-pre-wrap leading-relaxed">
                                {lead.project_details}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
