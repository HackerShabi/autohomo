"use client"

import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { ContactFormModal } from "@/components/ContactFormModal"
import { Button } from "@/components/ui/button"
import { ShoppingCart, TrendingUp, Zap } from "lucide-react"
import { useState } from "react"

export default function EcommerceSolution() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <Navbar onOpenModal={() => setIsModalOpen(true)} />
            <main className="flex-grow pt-24 pb-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16">
                    <h1 className="text-5xl md:text-6xl font-extrabold text-black tracking-tight mb-6 uppercase">
                        AI for eCommerce
                    </h1>
                    <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Scale your direct-to-consumer brand with AI agents trained to sell. Increase your conversion rate, recover abandoned carts, and turn shoppers into repeat buyers.
                    </p>
                    <div className="flex justify-center gap-4 mb-20">
                        <Button size="lg" onClick={() => setIsModalOpen(true)} className="bg-black text-white hover:bg-gray-800 uppercase tracking-wide px-8">
                            Transform Your Store
                        </Button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mb-24">
                        <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                            <TrendingUp className="w-8 h-8 text-black mb-4" />
                            <h3 className="text-xl font-bold text-black mb-2">Increase AOV</h3>
                            <p className="text-gray-600">Our deep-learning algorithms analyze intent to recommend the perfect upsells in real-time chat.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                            <ShoppingCart className="w-8 h-8 text-black mb-4" />
                            <h3 className="text-xl font-bold text-black mb-2">Cart Recovery</h3>
                            <p className="text-gray-600">Send personalized, automated reminders across WhatsApp and Messenger to finalize checkouts.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                            <Zap className="w-8 h-8 text-black mb-4" />
                            <h3 className="text-xl font-bold text-black mb-2">1-Click Integration</h3>
                            <p className="text-gray-600">Works flawlessly with Shopify, WooCommerce, and BigCommerce straight out of the box.</p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
            <ContactFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    )
}
