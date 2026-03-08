"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Search, Trash2, LogOut, Loader2, Globe, Mail, Phone, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// Interface for Lead Document
interface Lead {
    _id: string;
    name: string;
    email: string;
    phone: string;
    website: string;
    traffic: string;
    message?: string;
    createdAt: string;
}

export default function AdminDashboard() {
    const router = useRouter();
    const [leads, setLeads] = useState<Lead[]>([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    // Fetch leads on mount
    useEffect(() => {
        fetchLeads();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const fetchLeads = async () => {
        setIsLoading(true);
        try {
            const res = await fetch("/api/admin/leads");
            if (res.ok) {
                const data = await res.json();
                setLeads(data.leads || []);
            } else if (res.status === 401) {
                router.push("/admin/login");
            }
        } catch (error) {
            console.error("Failed to fetch leads:", error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleLogout = async () => {
        await fetch("/api/admin/logout", { method: "POST" });
        router.push("/admin/login");
        router.refresh();
    };

    const handleDelete = async (id: string) => {
        if (!confirm("Are you sure you want to delete this lead?")) return;

        try {
            const res = await fetch(`/api/admin/leads/${id}`, { method: "DELETE" });
            if (res.ok) {
                setLeads(leads.filter(lead => lead._id !== id));
            } else {
                alert("Failed to delete lead");
            }
        } catch (error) {
            console.error("Error deleting lead:", error);
        }
    };

    // Filter leads based on search (email or website)
    const filteredLeads = leads.filter(lead =>
        lead.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        lead.website.toLowerCase().includes(searchQuery.toLowerCase()) ||
        lead.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="p-6 md:p-10 max-w-7xl mx-auto w-full">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Leads Dashboard</h1>
                    <p className="text-gray-500 mt-1">Manage your incoming eCommerce leads.</p>
                </div>
                <div className="flex gap-3 w-full sm:w-auto">
                    <Button variant="outline" onClick={handleLogout} className="w-full sm:w-auto">
                        <LogOut className="w-4 h-4 mr-2" /> Logout
                    </Button>
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                {/* Toolbar */}
                <div className="p-4 border-b border-gray-200 flex items-center justify-between">
                    <div className="relative w-full max-w-md">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <Input
                            placeholder="Search by name, email, or website..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="pl-9 bg-gray-50 border-transparent focus:bg-white"
                        />
                    </div>
                    <div className="text-sm text-gray-500 hidden sm:block">
                        {filteredLeads.length} total leads
                    </div>
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                    {isLoading ? (
                        <div className="p-12 flex flex-col items-center justify-center text-gray-400">
                            <Loader2 className="w-8 h-8 animate-spin mb-4 text-brand-500" />
                            <p>Loading leads...</p>
                        </div>
                    ) : filteredLeads.length === 0 ? (
                        <div className="p-12 text-center text-gray-500">
                            {searchQuery ? "No leads matching your search." : "No leads yet. They will appear here when submitted."}
                        </div>
                    ) : (
                        <table className="w-full text-sm text-left">
                            <thead className="bg-gray-50 text-gray-600 font-medium border-b border-gray-200">
                                <tr>
                                    <th className="px-6 py-4">Contact Detail</th>
                                    <th className="px-6 py-4">Store Details</th>
                                    <th className="px-6 py-4">Message</th>
                                    <th className="px-6 py-4">Submitted At</th>
                                    <th className="px-6 py-4 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {filteredLeads.map((lead) => (
                                    <tr key={lead._id} className="hover:bg-gray-50/50 transition-colors">
                                        <td className="px-6 py-4">
                                            <div className="font-medium text-gray-900 mb-1">{lead.name}</div>
                                            <div className="flex items-center text-gray-500 text-xs mb-1">
                                                <Mail className="w-3 h-3 mr-1" />
                                                <a href={`mailto:${lead.email}`} className="hover:text-brand-600">{lead.email}</a>
                                            </div>
                                            <div className="flex items-center text-gray-500 text-xs">
                                                <Phone className="w-3 h-3 mr-1" />
                                                {lead.phone}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-gray-600">
                                            <div className="flex items-center text-gray-900 font-medium mb-1">
                                                <Globe className="w-3 h-3 mr-1 text-gray-400" />
                                                <a href={lead.website.startsWith('http') ? lead.website : `https://${lead.website}`} target="_blank" rel="noopener noreferrer" className="hover:text-brand-600 hover:underline">
                                                    {lead.website.replace(/^https?:\/\//, '')}
                                                </a>
                                            </div>
                                            <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-brand-50 text-brand-700">
                                                Traffic: {lead.traffic}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            {lead.message ? (
                                                <p className="text-gray-600 text-xs line-clamp-3 max-w-xs" title={lead.message}>
                                                    {lead.message}
                                                </p>
                                            ) : (
                                                <span className="text-gray-400 italic text-xs">No message provided</span>
                                            )}
                                        </td>
                                        <td className="px-6 py-4 text-gray-500 whitespace-nowrap">
                                            <div className="flex items-center text-xs">
                                                <Clock className="w-3 h-3 mr-1" />
                                                {new Date(lead.createdAt).toLocaleDateString()}
                                            </div>
                                            <div className="text-xs text-gray-400 mt-1 ml-4">
                                                {new Date(lead.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <button
                                                onClick={() => handleDelete(lead._id)}
                                                className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors inline-flex focus:outline-none"
                                                title="Delete Lead"
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
        </div>
    );
}
