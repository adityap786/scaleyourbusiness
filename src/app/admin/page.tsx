import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowUpRight } from "lucide-react"

export default function AdminDashboard() {
    return (
        <div>
            <h1 className="text-3xl font-bold text-black mb-8">Dashboard</h1>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
                <Card className="bg-white border-gray-200 shadow-sm text-black">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium text-gray-600">Total Revenue</CardTitle>
                        <span className="text-xs text-gray-400 font-medium">Pending Data</span>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">—</div>
                        <p className="text-xs text-gray-500 mt-1">Connect Stripe to view</p>
                    </CardContent>
                </Card>
                <Card className="bg-white border-gray-200 shadow-sm text-black">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium text-gray-600">Active Leads</CardTitle>
                        <span className="text-xs text-gray-400 font-medium">Analytics</span>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">—</div>
                        <p className="text-xs text-gray-500 mt-1">Visit Leads tab</p>
                    </CardContent>
                </Card>
                <Card className="bg-white border-gray-200 shadow-sm text-black">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium text-gray-600">Page Views</CardTitle>
                        <span className="text-xs text-gray-400 font-medium">Vercel Analytics</span>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">—</div>
                        <p className="text-xs text-gray-500 mt-1">Visit Vercel dashboard</p>
                    </CardContent>
                </Card>
                <Card className="bg-white border-gray-200 shadow-sm text-black">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium text-gray-600">Admin</CardTitle>
                        <span className="text-xs text-gray-400 font-medium">System</span>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">Online</div>
                        <p className="text-xs text-green-600 font-medium mt-1">All systems operational</p>
                    </CardContent>
                </Card>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4 bg-white border-gray-200 shadow-sm text-black">
                    <CardHeader>
                        <CardTitle>Recent Leads</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-col items-center justify-center py-12 text-center">
                            <p className="text-gray-500 mb-4">View your full list of contact submissions in the native leads view.</p>
                            <a href="/admin/leads" className="text-sm font-medium text-[var(--color-brand)] hover:underline">Go to Leads →</a>
                        </div>
                    </CardContent>
                </Card>
                <Card className="col-span-3 bg-white border-gray-200 shadow-sm text-black">
                    <CardHeader>
                        <CardTitle>Content Performance</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-col items-center justify-center py-12 text-center">
                            <p className="text-gray-500 mb-4">Integrate Google Analytics to track blog performance metrics.</p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
