"use client"

import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { ContactFormModal } from "@/components/ContactFormModal"
import { Button } from "@/components/ui/button"
import { ShoppingCart, BarChart, Zap, ArrowRight } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

export default function WebsiteChatbots() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <Navbar onOpenModal={() => setIsModalOpen(true)} />
            <main className="flex-grow pt-24 pb-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16">
                    <h1 className="text-5xl md:text-6xl font-extrabold text-black tracking-tight mb-6 uppercase">
                        AI Website Chatbots
                    </h1>
                    <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Transform your eCommerce website into a 24/7 sales engine. Our AI chatbots engage visitors instantly, answer product queries, and recommend items based on conversational context.
                    </p>
                    <div className="flex justify-center gap-4 mb-20">
                        <Button size="lg" onClick={() => setIsModalOpen(true)} className="bg-black text-white hover:bg-gray-800 uppercase tracking-wide px-8">
                            Get Free Demo
                        </Button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mb-24">
                        <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                            <ShoppingCart className="w-8 h-8 text-black mb-4" />
                            <h3 className="text-xl font-bold text-black mb-2">Drive Direct Sales</h3>
                            <p className="text-gray-600">The AI actively guides users through your catalog, directly adding recommended products to their cart.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                            <BarChart className="w-8 h-8 text-black mb-4" />
                            <h3 className="text-xl font-bold text-black mb-2">Reduce Bounce Rates</h3>
                            <p className="text-gray-600">Proactively engage hesitant shoppers before they leave, answering questions that block conversions.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                            <Zap className="w-8 h-8 text-black mb-4" />
                            <h3 className="text-xl font-bold text-black mb-2">Instant Setup</h3>
                            <p className="text-gray-600">Plugs directly into Shopify or WooCommerce with a simple script block. Zero coding required.</p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
            <ContactFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    )
}
