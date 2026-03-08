"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"
import { Logo } from "@/components/Logo"
import { Button } from "./ui/button"

interface NavbarProps {
    onOpenModal: () => void;
}

export function Navbar({ onOpenModal }: NavbarProps) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 inset-x-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">

                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2">
                        <div className="w-10 h-10 bg-black rounded-xl flex justify-center items-center shadow-glow">
                            <Logo className="text-white w-6 h-6" />
                        </div>
                        <span className="text-xl font-bold text-black uppercase tracking-tight">
                            AUTOHOMO
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <div className="flex space-x-6 text-sm font-medium text-gray-600">
                            {/* Products Dropdown */}
                            <div className="relative group">
                                <button className="hover:text-black transition-colors flex items-center gap-1 py-2">
                                    Products <ChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180" />
                                </button>
                                <div className="absolute left-0 top-full pt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                                    <div className="bg-white border border-gray-100 shadow-xl rounded-xl py-2 flex flex-col">
                                        <Link href="/products/website-chatbots" className="px-4 py-2 hover:bg-gray-50 text-gray-700 hover:text-black">Website Chatbots</Link>
                                        <Link href="/products/messenger-bot" className="px-4 py-2 hover:bg-gray-50 text-gray-700 hover:text-black">Messenger Bot</Link>
                                        <Link href="/products/whatsapp-bot" className="px-4 py-2 hover:bg-gray-50 text-gray-700 hover:text-black">WhatsApp Bot</Link>
                                        <Link href="/products/instagram-bot" className="px-4 py-2 hover:bg-gray-50 text-gray-700 hover:text-black">Instagram Bot</Link>
                                    </div>
                                </div>
                            </div>

                            {/* Solutions Dropdown */}
                            <div className="relative group">
                                <button className="hover:text-black transition-colors flex items-center gap-1 py-2">
                                    Solutions <ChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180" />
                                </button>
                                <div className="absolute left-0 top-full pt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                                    <div className="bg-white border border-gray-100 shadow-xl rounded-xl py-2 flex flex-col">
                                        <Link href="/solutions/ecommerce" className="px-4 py-2 hover:bg-gray-50 text-gray-700 hover:text-black">eCommerce</Link>
                                        <Link href="/solutions/customer-service" className="px-4 py-2 hover:bg-gray-50 text-gray-700 hover:text-black">Customer Service</Link>
                                    </div>
                                </div>
                            </div>

                            <Link href="#features" className="hover:text-black transition-colors py-2">Features</Link>
                            <Link href="#how-it-works" className="hover:text-black transition-colors py-2">How it Works</Link>
                            <Link href="#faqs" className="hover:text-black transition-colors py-2">FAQs</Link>
                        </div>

                        <div className="flex items-center space-x-4">
                            <Button onClick={onOpenModal}>Get Free Demo</Button>
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-gray-600 hover:text-gray-900 p-2"
                        >
                            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-white border-b border-gray-100 absolute w-full px-4 pt-2 pb-6 space-y-4 shadow-xl">
                    <div className="block px-3 py-2 text-base font-medium text-gray-700">
                        Products
                        <div className="mt-2 pl-4 flex flex-col space-y-2 border-l border-gray-200">
                            <Link href="/products/website-chatbots" className="text-sm text-gray-500 hover:text-black" onClick={() => setIsMobileMenuOpen(false)}>Website Chatbots</Link>
                            <Link href="/products/messenger-bot" className="text-sm text-gray-500 hover:text-black" onClick={() => setIsMobileMenuOpen(false)}>Messenger Bot</Link>
                            <Link href="/products/whatsapp-bot" className="text-sm text-gray-500 hover:text-black" onClick={() => setIsMobileMenuOpen(false)}>WhatsApp Bot</Link>
                            <Link href="/products/instagram-bot" className="text-sm text-gray-500 hover:text-black" onClick={() => setIsMobileMenuOpen(false)}>Instagram Bot</Link>
                        </div>
                    </div>
                    <div className="block px-3 py-2 text-base font-medium text-gray-700">
                        Solutions
                        <div className="mt-2 pl-4 flex flex-col space-y-2 border-l border-gray-200">
                            <Link href="/solutions/ecommerce" className="text-sm text-gray-500 hover:text-black" onClick={() => setIsMobileMenuOpen(false)}>eCommerce</Link>
                            <Link href="/solutions/customer-service" className="text-sm text-gray-500 hover:text-black" onClick={() => setIsMobileMenuOpen(false)}>Customer Service</Link>
                        </div>
                    </div>
                    <Link
                        href="#features"
                        className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-black hover:bg-gray-50 rounded-md"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Features
                    </Link>
                    <Link
                        href="#how-it-works"
                        className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-black hover:bg-gray-50 rounded-md"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        How it Works
                    </Link>
                    <Link
                        href="#faqs"
                        className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-black hover:bg-gray-50 rounded-md"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        FAQs
                    </Link>
                    <div className="pt-4 flex flex-col space-y-3 px-3">
                        <Button className="w-full justify-center" onClick={() => { setIsMobileMenuOpen(false); onOpenModal(); }}>
                            Get Free Demo
                        </Button>
                    </div>
                </div>
            )}
        </nav>
    )
}
