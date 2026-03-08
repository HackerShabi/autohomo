"use client"

import { useState } from "react"
import { Modal } from "./ui/modal"
import { Button } from "./ui/button"
import { Input } from "./ui/input"

interface ContactFormModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function ContactFormModal({ isOpen, onClose }: ContactFormModalProps) {
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error('Failed to submit form');
            }

            setIsSuccess(true);
            setTimeout(() => {
                setIsSuccess(false);
                onClose();
            }, 3000);
        } catch (err) {
            setError('Something went wrong. Please try again later.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            title="Get Your Free AI Demo"
            description="Fill out the form below and we'll show you how AI can double your store's conversions."
        >
            {isSuccess ? (
                <div className="text-center py-8">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                    </div>
                    <h3 className="text-xl font-medium text-gray-900 mb-2">Message Received!</h3>
                    <p className="text-gray-500">We'll be in touch with you shortly to schedule your demo.</p>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-gray-700">Full Name *</label>
                        <Input id="name" name="name" required placeholder="John Doe" disabled={isLoading} />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium text-gray-700">Business Email *</label>
                            <Input id="email" name="email" type="email" required placeholder="john@company.com" disabled={isLoading} />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone / WhatsApp *</label>
                            <Input id="phone" name="phone" type="tel" required placeholder="+1 (555) 000-0000" disabled={isLoading} />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="website" className="text-sm font-medium text-gray-700">Store Website URL *</label>
                        <Input id="website" name="website" type="url" required placeholder="https://yourstore.com" disabled={isLoading} />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="traffic" className="text-sm font-medium text-gray-700">Monthly Traffic *</label>
                        <select
                            id="traffic"
                            name="traffic"
                            required
                            disabled={isLoading}
                            className="flex h-11 w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                            <option value="">Select your traffic</option>
                            <option value="<10k">&lt;10k visitors</option>
                            <option value="10k-50k">10k-50k visitors</option>
                            <option value="50k-100k">50k-100k visitors</option>
                            <option value="100k+">100k+ visitors</option>
                        </select>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium text-gray-700">Message (Optional)</label>
                        <textarea
                            id="message"
                            name="message"
                            disabled={isLoading}
                            rows={3}
                            className="flex w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm shadow-sm transition-colors placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 disabled:cursor-not-allowed disabled:opacity-50 resize-none"
                            placeholder="Tell us about your biggest challenges..."
                        />
                    </div>

                    {error && <p className="text-sm text-red-500">{error}</p>}

                    <Button type="submit" className="w-full h-12 text-base" disabled={isLoading}>
                        {isLoading ? "Submitting..." : "Get Free Demo"}
                    </Button>
                </form>
            )}
        </Modal>
    )
}
