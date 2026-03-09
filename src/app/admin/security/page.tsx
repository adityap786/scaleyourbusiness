import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import { ShieldAlert, Clock, AlertTriangle } from 'lucide-react'

export const dynamic = 'force-dynamic'

export default async function SecurityPage() {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
        redirect('/login')
    }

    const { data: logs, error } = await supabase
        .from('device_submissions')
        .select('*')
        .order('last_submission_at', { ascending: false })
        .limit(100)

    return (
        <div className="space-y-8">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-black tracking-tight text-neutral-900 flex items-center gap-3">
                        <ShieldAlert className="w-8 h-8 text-brand" />
                        Security & Rate Limiting Logs
                    </h1>
                    <p className="text-neutral-500 mt-2">
                        Monitoring API abuse and rapid submissions. Data is automatically wiped on the 1st of every month.
                    </p>
                </div>
            </div>

            {error ? (
                <div className="p-4 bg-red-50 text-red-600 rounded-lg flex items-center gap-3">
                    <AlertTriangle className="w-5 h-5" />
                    Failed to load security logs: {error.message}
                </div>
            ) : (
                <div className="bg-white rounded-xl border border-neutral-200 overflow-hidden shadow-sm">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b border-neutral-200 bg-neutral-50/50">
                                    <th className="px-6 py-4 text-xs font-bold text-neutral-500 uppercase tracking-wider">Device Identifier</th>
                                    <th className="px-6 py-4 text-xs font-bold text-neutral-500 uppercase tracking-wider">Submission Count</th>
                                    <th className="px-6 py-4 text-xs font-bold text-neutral-500 uppercase tracking-wider">Last Submission</th>
                                    <th className="px-6 py-4 text-xs font-bold text-neutral-500 uppercase tracking-wider">First Seen</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-neutral-200">
                                {!logs || logs.length === 0 ? (
                                    <tr>
                                        <td colSpan={4} className="px-6 py-12 text-center text-neutral-500">
                                            No device logs found.
                                        </td>
                                    </tr>
                                ) : (
                                    logs.map((log) => (
                                        <tr key={log.id} className="hover:bg-neutral-50/50 transition-colors">
                                            <td className="px-6 py-4">
                                                <div className="font-mono text-sm text-neutral-900 truncate max-w-[300px]" title={log.device_identifier}>
                                                    {log.device_identifier}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className={`inline-flex items-center justify-center px-2.5 py-1 rounded-full text-xs font-bold ${log.submission_count >= 3 ? 'bg-red-100 text-red-700' : 'bg-neutral-100 text-neutral-700'
                                                    }`}>
                                                    {log.submission_count} / 3
                                                </span>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex items-center text-sm text-neutral-600 gap-2">
                                                    <Clock className="w-4 h-4 text-neutral-400" />
                                                    {new Date(log.last_submission_at).toLocaleString()}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 text-sm text-neutral-500">
                                                {new Date(log.created_at).toLocaleString()}
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </div>
    )
}
