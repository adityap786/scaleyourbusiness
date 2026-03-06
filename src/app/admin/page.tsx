import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowUpRight } from "lucide-react"

export default function AdminDashboard() {
    return (
        <div>
            <h1 className="text-3xl font-bold text-white mb-8">Dashboard</h1>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
                <Card className="bg-white/5 border-white/10 text-white">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                        <span className="text-xs text-green-500 font-bold">+20.1%</span>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">₹45,231.89</div>
                        <p className="text-xs text-gray-400">from last month</p>
                    </CardContent>
                </Card>
                <Card className="bg-white/5 border-white/10 text-white">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Active Leads</CardTitle>
                        <span className="text-xs text-green-500 font-bold">+180.1%</span>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">+2350</div>
                        <p className="text-xs text-gray-400">from last month</p>
                    </CardContent>
                </Card>
                <Card className="bg-white/5 border-white/10 text-white">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Sales</CardTitle>
                        <span className="text-xs text-green-500 font-bold">+19%</span>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">+12,234</div>
                        <p className="text-xs text-gray-400">from last month</p>
                    </CardContent>
                </Card>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4 bg-white/5 border-white/10 text-white">
                    <CardHeader>
                        <CardTitle>Recent Leads</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-8">
                            {[
                                { name: "Rahul Sharma", email: "rahul@techstart.in", amount: "₹25,000", status: "Interested" },
                                { name: "Priya Patel", email: "priya@designstudio.com", amount: "₹15,000", status: "Negotiating" },
                                { name: "Amit Kumar", email: "amit@construct.io", amount: "₹1,50,000", status: "Closed" },
                                { name: "Sneha Gupta", email: "sneha@marketing.agency", amount: "₹45,000", status: "New" },
                                { name: "Vikram Singh", email: "vikram@logistics.co", amount: "₹80,000", status: "Interested" },
                            ].map((lead, i) => (
                                <div key={i} className="flex items-center">
                                    <div className="ml-4 space-y-1">
                                        <p className="text-sm font-medium leading-none">{lead.name}</p>
                                        <p className="text-sm text-gray-400">{lead.email}</p>
                                    </div>
                                    <div className="ml-auto font-medium">{lead.amount}</div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
                <Card className="col-span-3 bg-white/5 border-white/10 text-white">
                    <CardHeader>
                        <CardTitle>Content Performance</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-8">
                            {[
                                { name: "SaaS MVP Guide", views: "2,345", trend: "+12%" },
                                { name: "AI Agents 2026", views: "1,982", trend: "+8%" },
                                { name: "Next.js vs WP", views: "1,432", trend: "+24%" },
                            ].map((post, i) => (
                                <div key={i} className="flex items-center justify-between">
                                    <span className="text-sm font-medium text-gray-300">{post.name}</span>
                                    <div className="flex items-center gap-4">
                                        <span className="text-sm text-white">{post.views}</span>
                                        <span className="text-xs text-green-500">{post.trend}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
