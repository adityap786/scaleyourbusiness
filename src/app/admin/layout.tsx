import { Container } from "@/components/ui/container"
import Link from "next/link"
import { BarChart3, Users, Settings, LogOut } from "lucide-react"

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="min-h-screen bg-gray-50 flex">
            {/* Sidebar */}
            <div className="w-64 border-r border-gray-200 p-6 hidden md:block fixed h-full bg-white">
                <div className="mb-8">
                    <Link href="/" className="font-bold text-xl text-white">SYB Admin</Link>
                </div>
                <nav className="space-y-2">
                    <Link href="/admin" className="flex items-center px-4 py-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-md transition-colors">
                        <BarChart3 className="w-4 h-4 mr-3" />
                        Dashboard
                    </Link>
                    <Link href="/admin/leads" className="flex items-center px-4 py-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-md transition-colors">
                        <Users className="w-4 h-4 mr-3" />
                        Leads
                    </Link>
                    <Link href="/admin/settings" className="flex items-center px-4 py-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-md transition-colors">
                        <Settings className="w-4 h-4 mr-3" />
                        Settings
                    </Link>
                </nav>
                <div className="absolute bottom-6 w-full pr-12">
                    <Link href="/" className="flex items-center px-4 py-2 text-red-400 hover:bg-red-400/10 rounded-md transition-colors">
                        <LogOut className="w-4 h-4 mr-3" />
                        Logout
                    </Link>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 md:ml-64 p-8">
                {children}
            </div>
        </div>
    )
}
