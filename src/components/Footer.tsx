import { Logo } from "@/components/Logo"
import Link from "next/link"

export function Footer() {
    return (
        <footer className="bg-white border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="flex flex-col md:flex-row justify-between items-center">

                    <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
                        <Link href="/" className="flex items-center space-x-2 mb-4">
                            <div className="w-8 h-8 bg-black rounded-lg flex justify-center items-center">
                                <Logo className="text-white w-5 h-5" />
                            </div>
                            <span className="text-lg font-bold text-gray-900 uppercase tracking-tight">
                                AUTOHOMO
                            </span>
                        </Link>
                        <p className="text-gray-500 text-sm text-center md:text-left max-w-xs">
                            Empowering eCommerce brands with beautiful, intelligent AI automation.
                            Increase conversions and provide 24/7 support automatically.
                        </p>
                    </div>

                    <div className="flex gap-x-8 text-sm font-medium text-gray-500">
                        <Link href="#" className="hover:text-brand-600 transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-brand-600 transition-colors">Terms of Service</Link>
                        <Link href="/admin" className="hover:text-brand-600 transition-colors">Admin Login</Link>
                    </div>

                </div>

                <div className="mt-12 pt-8 border-t border-gray-100 text-center text-sm text-gray-400">
                    © {new Date().getFullYear()} AUTOHOMO. All rights reserved.
                </div>
            </div>
        </footer>
    )
}
