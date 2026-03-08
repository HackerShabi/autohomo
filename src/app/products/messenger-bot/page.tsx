"use client"

import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { ContactFormModal } from "@/components/ContactFormModal"
import { Button } from "@/components/ui/button"
import { MessageSquare, Users, Globe } from "lucide-react"
import { useState } from "react"

export default function MessengerBot() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <Navbar onOpenModal={() => setIsModalOpen(true)} />
            <main className="flex-grow pt-24 pb-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16">
                    <h1 className="text-5xl md:text-6xl font-extrabold text-black tracking-tight mb-6 uppercase">
                        Messenger Bots
                    </h1>
                    <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Turn your Facebook Page traffic into real revenue. Automate responses to ad comments and guide users through your catalog directly inside Messenger.
                    </p>
                    <div className="flex justify-center gap-4 mb-20">
                        <Button size="lg" onClick={() => setIsModalOpen(true)} className="bg-black text-white hover:bg-gray-800 uppercase tracking-wide px-8">
                            Get Free Demo
                        </Button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mb-24">
                        <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                            <MessageSquare className="w-8 h-8 text-black mb-4" />
                            <h3 className="text-xl font-bold text-black mb-2">Automated Replies</h3>
                            <p className="text-gray-600">Instantly reply to Facebook ad comments with personalized messages that push users into the DMs.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                            <Users className="w-8 h-8 text-black mb-4" />
                            <h3 className="text-xl font-bold text-black mb-2">List Building</h3>
                            <p className="text-gray-600">Capture leads automatically from ongoing conversations for future retargeting campaigns.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                            <Globe className="w-8 h-8 text-black mb-4" />
                            <h3 className="text-xl font-bold text-black mb-2">Omni-Channel Support</h3>
                            <p className="text-gray-600">Syncs seamlessly with your website bot so customers get a unified experience across platforms.</p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
            <ContactFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    )
}
