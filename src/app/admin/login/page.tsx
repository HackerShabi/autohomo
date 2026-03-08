"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Bot, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function AdminLogin() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        try {
            const res = await fetch("/api/admin/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            if (res.ok) {
                router.push("/admin");
                router.refresh();
            } else {
                const data = await res.json();
                setError(data.error || "Login failed");
            }
        } catch {
            setError("An unexpected error occurred.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-4">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 p-8 text-center">
                <div className="w-16 h-16 bg-brand-600 rounded-2xl flex justify-center items-center shadow-glow mx-auto mb-6">
                    <Bot className="text-white w-8 h-8" />
                </div>
                <h1 className="text-2xl font-bold text-gray-900 mb-2">Admin Portal</h1>
                <p className="text-gray-500 mb-8 pb-8 border-b border-gray-100">
                    Sign in to manage your eCommerce leads and AI agents.
                </p>

                <form onSubmit={handleLogin} className="space-y-4 text-left">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Admin Email</label>
                        <Input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            disabled={isLoading}
                            placeholder="admin@aiagency.com"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Password</label>
                        <Input
                            type="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            disabled={isLoading}
                            placeholder="••••••••"
                        />
                    </div>

                    {error && (
                        <div className="p-3 bg-red-50 text-red-600 text-sm rounded-lg border border-red-100">
                            {error}
                        </div>
                    )}

                    <Button type="submit" className="w-full h-12 mt-4" disabled={isLoading}>
                        {isLoading ? "Signing in..." : (
                            <span className="flex items-center gap-2">
                                <LogIn className="w-4 h-4" /> Sign In
                            </span>
                        )}
                    </Button>
                </form>
            </div>
        </div>
    );
}
