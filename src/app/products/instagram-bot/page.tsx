"use client"

import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { ContactFormModal } from "@/components/ContactFormModal"
import { Button } from "@/components/ui/button"
import { Share2, Heart, TrendingUp } from "lucide-react"
import { useState } from "react"

export default function InstagramBot() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <Navbar onOpenModal={() => setIsModalOpen(true)} />
            <main className="flex-grow pt-24 pb-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16">
                    <h1 className="text-5xl md:text-6xl font-extrabold text-black tracking-tight mb-6 uppercase">
                        Instagram Bots
                    </h1>
                    <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Convert followers into loyal customers. Automate your DMs, respond to story replies instantly, and drive sales directly from your Instagram profile.
                    </p>
                    <div className="flex justify-center gap-4 mb-20">
                        <Button size="lg" onClick={() => setIsModalOpen(true)} className="bg-black text-white hover:bg-gray-800 uppercase tracking-wide px-8">
                            Get Free Demo
                        </Button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mb-24">
                        <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                            <Heart className="w-8 h-8 text-black mb-4" />
                            <h3 className="text-xl font-bold text-black mb-2">Automate DMs</h3>
                            <p className="text-gray-600">Instantly answer product questions sent to your inbox, never leaving a customer waiting.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                            <Share2 className="w-8 h-8 text-black mb-4" />
                            <h3 className="text-xl font-bold text-black mb-2">Story Engagement</h3>
                            <p className="text-gray-600">Trigger automated funnels when users reply to your stories or mention you, delivering promo codes instantly.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                            <TrendingUp className="w-8 h-8 text-black mb-4" />
                            <h3 className="text-xl font-bold text-black mb-2">Scale Influencer ROI</h3>
                            <p className="text-gray-600">Automatically handle the flood of traffic generated from viral posts and influencer shoutouts.</p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
            <ContactFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    )
}
