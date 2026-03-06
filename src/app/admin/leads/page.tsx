import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const leads = [
    { id: 1, name: "Rahul Sharma", company: "TechStart India", email: "rahul@techstart.in", service: "App Development", budget: "₹5,00,000", status: "New", date: "2026-02-15" },
    { id: 2, name: "Priya Patel", company: "Luxury Designs", email: "priya@designstudio.com", service: "Website Dev", budget: "₹1,50,000", status: "Negotiating", date: "2026-02-14" },
    { id: 3, name: "Amit Kumar", company: "Construct Co", email: "amit@construct.io", service: "SaaS Dev", budget: "₹12,00,000", status: "Closed", date: "2026-02-12" },
    { id: 4, name: "Sneha Gupta", company: "Marketing Pro", email: "sneha@marketing.agency", service: "AI Automation", budget: "₹45,000", status: "New", date: "2026-02-10" },
    { id: 5, name: "Vikram Singh", company: "Global Logistics", email: "vikram@logistics.co", service: "App Development", budget: "₹8,00,000", status: "Interested", date: "2026-02-08" },
    { id: 6, name: "Anjali Desai", company: "EduTech", email: "anjali@edutech.com", service: "Website Dev", budget: "₹2,00,000", status: "Closed", date: "2026-02-05" },
]

export default function LeadsPage() {
    return (
        <div>
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold text-white">Leads</h1>
                <div className="bg-white/10 px-4 py-2 rounded text-sm text-gray-300">
                    Total Leads: {leads.length}
                </div>
            </div>

            <Card className="bg-white/5 border-white/10 text-white">
                <CardContent className="p-0">
                    <div className="relative w-full overflow-auto">
                        <table className="w-full caption-bottom text-sm">
                            <thead className="[&_tr]:border-b [&_tr]:border-white/10">
                                <tr className="border-b transition-colors hover:bg-white/5 data-[state=selected]:bg-white/5">
                                    <th className="h-12 px-4 text-left align-middle font-medium text-gray-400">Name</th>
                                    <th className="h-12 px-4 text-left align-middle font-medium text-gray-400">Company</th>
                                    <th className="h-12 px-4 text-left align-middle font-medium text-gray-400">Service</th>
                                    <th className="h-12 px-4 text-left align-middle font-medium text-gray-400">Budget</th>
                                    <th className="h-12 px-4 text-left align-middle font-medium text-gray-400">Date</th>
                                    <th className="h-12 px-4 text-left align-middle font-medium text-gray-400">Status</th>
                                </tr>
                            </thead>
                            <tbody className="[&_tr:last-child]:border-0">
                                {leads.map((lead) => (
                                    <tr key={lead.id} className="border-b border-white/10 transition-colors hover:bg-white/5 data-[state=selected]:bg-white/5">
                                        <td className="p-4 align-middle font-medium">{lead.name}</td>
                                        <td className="p-4 align-middle text-gray-300">{lead.company}</td>
                                        <td className="p-4 align-middle text-gray-300">{lead.service}</td>
                                        <td className="p-4 align-middle font-medium">{lead.budget}</td>
                                        <td className="p-4 align-middle text-gray-400">{lead.date}</td>
                                        <td className="p-4 align-middle">
                                            <Badge variant={
                                                lead.status === "Closed" ? "default" :
                                                    lead.status === "New" ? "secondary" : "outline"
                                            } className={
                                                lead.status === "Closed" ? "bg-green-500/10 text-green-500 hover:bg-green-500/20" :
                                                    lead.status === "New" ? "bg-blue-500/10 text-blue-500 hover:bg-blue-500/20" :
                                                        "bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20"
                                            }>
                                                {lead.status}
                                            </Badge>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
