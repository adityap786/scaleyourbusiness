import { createClient } from '@/utils/supabase/server'
import { Plus, Edit2, Search, Link as LinkIcon, Download, Mail } from 'lucide-react'
import Link from 'next/link'

export default async function LeadsAdminPage() {
    const supabase = await createClient()
    const { data: leads, error } = await supabase.from('contact_leads').select('*').order('created_at', { ascending: false })

    return (
        <div>
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Lead Submissions</h1>
                    <p className="text-gray-500">Contact form inquiries from prospective clients.</p>
                </div>
            </div>

            {error && (
                <div className="bg-red-50 text-red-600 p-4 rounded-lg mb-8">
                    Failed to load leads: {error.message}
                </div>
            )}

            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-gray-50/50 border-b border-gray-200 text-gray-500 text-sm">
                            <th className="px-6 py-4 font-medium">Contact</th>
                            <th className="px-6 py-4 font-medium">Interest & Budget</th>
                            <th className="px-6 py-4 font-medium">Date Received</th>
                            <th className="px-6 py-4 font-medium text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {leads?.length === 0 && (
                            <tr>
                                <td colSpan={4} className="px-6 py-8 text-center text-gray-500">
                                    No leads yet. They'll appear here when users submit the contact form.
                                </td>
                            </tr>
                        )}
                        {leads?.map((lead) => (
                            <tr key={lead.id} className="hover:bg-gray-50/50 transition-colors group">
                                <td className="px-6 py-4">
                                    <div className="font-semibold text-gray-900">{lead.name}</div>
                                    <div className="text-sm text-gray-500 flex items-center gap-2 mt-1">
                                        <Mail className="w-3 h-3" /> {lead.email}
                                    </div>
                                    {lead.phone && <div className="text-sm text-gray-500 mt-1">{lead.phone}</div>}
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex flex-wrap gap-2 mb-2">
                                        {lead.area_of_interest && (
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                                {lead.area_of_interest}
                                            </span>
                                        )}
                                        {lead.budget && (
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                                Budget: {lead.budget}
                                            </span>
                                        )}
                                    </div>
                                    <p className="text-sm text-gray-600 line-clamp-2 max-w-sm">{lead.project_details}</p>
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-500">
                                    {new Date(lead.created_at).toLocaleDateString()}
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <a href={`mailto:${lead.email}`} className="p-2 text-gray-400 hover:text-brand hover:bg-brand/10 rounded-md transition-colors" title="Email Lead">
                                            <Mail className="w-4 h-4" />
                                        </a>
                                        <Link href={`/admin/leads/${lead.id}`} className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors" title="View Full Details">
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
