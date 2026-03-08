"use client"

import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { ContactFormModal } from "@/components/ContactFormModal"
import { Button } from "@/components/ui/button"
import { MessageSquare, ShoppingBag, ShieldCheck } from "lucide-react"
import { useState } from "react"

export default function WhatsAppBot() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <Navbar onOpenModal={() => setIsModalOpen(true)} />
            <main className="flex-grow pt-24 pb-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16">
                    <h1 className="text-5xl md:text-6xl font-extrabold text-black tracking-tight mb-6 uppercase">
                        WhatsApp Bots
                    </h1>
                    <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Reach your customers where they spend their time. Recover abandoned carts and process orders securely via WhatsApp with our custom AI integration.
                    </p>
                    <div className="flex justify-center gap-4 mb-20">
                        <Button size="lg" onClick={() => setIsModalOpen(true)} className="bg-black text-white hover:bg-gray-800 uppercase tracking-wide px-8">
                            Get Free Demo
                        </Button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mb-24">
                        <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                            <ShoppingBag className="w-8 h-8 text-black mb-4" />
                            <h3 className="text-xl font-bold text-black mb-2">Cart Recovery</h3>
                            <p className="text-gray-600">Send automated messages to users who abandoned checkout, with a direct link to finalize their purchase.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                            <MessageSquare className="w-8 h-8 text-black mb-4" />
                            <h3 className="text-xl font-bold text-black mb-2">Order Updates</h3>
                            <p className="text-gray-600">Automatically ping customers with shipping and tracking notifications via WhatsApp.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                            <ShieldCheck className="w-8 h-8 text-black mb-4" />
                            <h3 className="text-xl font-bold text-black mb-2">Secure & Verified</h3>
                            <p className="text-gray-600">Utilize the official WhatsApp Business API for reliable delivery rates and verified business profiles.</p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
            <ContactFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    )
}
