import { Container } from "@/components/ui/container"
import Link from "next/link"
import { BarChart3, Users, Settings, LogOut, FileText, Briefcase, Search, Mail, Shield } from "lucide-react"
import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'

export default async function AdminLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
        redirect('/login')
    }

    return (
        <div className="min-h-screen bg-gray-50 flex">
            {/* Sidebar */}
            <div className="w-64 border-r border-gray-200 p-6 hidden md:block fixed h-full bg-white">
                <div className="mb-8">
                    <Link href="/" className="font-black tracking-tight text-xl text-black">SYB Admin</Link>
                </div>
                <nav className="space-y-2">
                    <Link href="/admin" className="flex items-center px-4 py-2 text-gray-600 hover:text-black hover:bg-gray-100 rounded-md transition-colors font-medium">
                        <BarChart3 className="w-4 h-4 mr-3" />
                        Dashboard
                    </Link>
                    <Link href="/admin/leads" className="flex items-center px-4 py-2 text-gray-600 hover:text-black hover:bg-gray-100 rounded-md transition-colors font-medium">
                        <Users className="w-4 h-4 mr-3" />
                        Leads
                    </Link>
                    <Link href="/admin/portfolio" className="flex items-center px-4 py-2 text-gray-600 hover:text-black hover:bg-gray-100 rounded-md transition-colors font-medium">
                        <Briefcase className="w-4 h-4 mr-3" />
                        Portfolio
                    </Link>
                    <Link href="/admin/blogs" className="flex items-center px-4 py-2 text-gray-600 hover:text-black hover:bg-gray-100 rounded-md transition-colors font-medium">
                        <FileText className="w-4 h-4 mr-3" />
                        Blogs
                    </Link>
                    <Link href="/admin/seo" className="flex items-center px-4 py-2 text-gray-600 hover:text-black hover:bg-gray-100 rounded-md transition-colors font-medium">
                        <Search className="w-4 h-4 mr-3" />
                        SEO & GEO
                    </Link>
                    <Link href="/admin/newsletter" className="flex items-center px-4 py-2 text-gray-600 hover:text-black hover:bg-gray-100 rounded-md transition-colors font-medium">
                        <Mail className="w-4 h-4 mr-3" />
                        Newsletter
                    </Link>
                    <Link href="/admin/security" className="flex items-center px-4 py-2 text-gray-600 hover:text-black hover:bg-gray-100 rounded-md transition-colors font-medium">
                        <Shield className="w-4 h-4 mr-3" />
                        Security Logs
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
