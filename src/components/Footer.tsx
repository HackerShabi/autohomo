import { Logo } from "@/components/Logo"
import Link from "next/link"

export function Footer() {
    return (
        <footer className="bg-black text-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center md:items-start text-center md:text-left">
                    <div className="mb-8 md:mb-0">
                        <Link href="/" className="flex justify-center md:justify-start items-center space-x-2 mb-4">
                            <div className="w-8 h-8 bg-white rounded-lg flex justify-center items-center">
                                <Logo className="text-black w-5 h-5" />
                            </div>
                            <span className="text-lg font-bold text-white uppercase tracking-tight">
                                AUTOHOMO
                            </span>
                        </Link>
                        <p className="text-gray-400 text-sm max-w-sm mb-4">
                            Empowering eCommerce brands with beautiful, intelligent AI automation. Increase conversions and provide 24/7 support.
                        </p>
                        <a href="mailto:autohomoo@gmail.com" className="text-brand-400 hover:text-white transition-colors text-sm font-medium">
                            autohomoo@gmail.com
                        </a>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 mt-4 md:mt-0">
                        <div className="flex flex-col items-center sm:items-start gap-3">
                            <div className="text-gray-200 font-bold mb-1">Company</div>
                            <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy Policy</Link>
                            <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Terms of Service</Link>
                        </div>
                        <div className="flex flex-col items-center sm:items-start gap-3">
                            <div className="text-gray-200 font-bold mb-1">Resources</div>
                            <Link href="/admin" className="text-gray-400 hover:text-white transition-colors text-sm">Admin Login</Link>
                            <Link href="#faqs" className="text-gray-400 hover:text-white transition-colors text-sm">FAQs</Link>
                        </div>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
                    © {new Date().getFullYear()} AUTOHOMO. All rights reserved.
                </div>
            </div>
        </footer>
    )
}
