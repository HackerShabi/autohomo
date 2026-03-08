import * as React from "react"
import { X } from "lucide-react"

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    description?: string;
    children: React.ReactNode;
}

export function Modal({ isOpen, onClose, title, description, children }: ModalProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-[0] z-[50] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <div
                className="w-full max-w-lg bg-white rounded-2xl shadow-xl overflow-hidden"
                role="dialog"
                aria-modal="true"
            >
                <div className="flex items-center justify-between p-6 border-b border-gray-100">
                    <div>
                        <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
                        {description && (
                            <p className="mt-1 text-sm text-gray-500">{description}</p>
                        )}
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 text-gray-400 hover:text-gray-500 hover:bg-gray-100 rounded-full transition-colors"
                        aria-label="Close modal"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>
                <div className="p-6">
                    {children}
                </div>
            </div>
        </div>
    )
}
