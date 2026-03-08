import { cookies } from "next/headers";
import Link from "next/link";
import { Bot, LayoutDashboard, Users } from "lucide-react";

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const cookieStore = cookies();
    const isAuthenticated = cookieStore.get("admin_session")?.value === "authenticated";

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row">
            {/* Sidebar Navigation */}
            {isAuthenticated && (
                <aside className="w-full md:w-64 bg-white border-r border-gray-200 flex flex-col h-auto md:h-screen sticky top-0 md:fixed md:left-0 z-20">
                    <div className="p-6 border-b border-gray-100 flex items-center justify-between md:justify-start space-x-3">
                        <Link href="/" className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-brand-600 rounded-lg flex justify-center items-center shadow-sm">
                                <Bot className="text-white w-5 h-5" />
                            </div>
                            <span className="text-lg font-bold text-gray-900">Admin</span>
                        </Link>
                    </div>

                    <nav className="flex-grow p-4 space-y-2 hidden md:block">
                        <Link href="/admin" className="flex items-center space-x-3 px-4 py-3 bg-brand-50 text-brand-700 rounded-lg font-medium transition-colors">
                            <LayoutDashboard className="w-5 h-5" />
                            <span>Dashboard</span>
                        </Link>
                        <div className="flex items-center space-x-3 px-4 py-3 text-gray-500 hover:bg-gray-50 rounded-lg font-medium transition-colors cursor-not-allowed opacity-50">
                            <Users className="w-5 h-5" />
                            <span>Settings (Soon)</span>
                        </div>
                    </nav>
                </aside>
            )}

            {/* Main Content Area */}
            <main className={`flex-grow ${isAuthenticated ? 'md:ml-64' : ''}`}>
                {children}
            </main>
        </div>
    );
}
