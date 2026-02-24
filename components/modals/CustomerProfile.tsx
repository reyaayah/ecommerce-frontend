"use client";

import { Phone, MapPin, Mail } from "lucide-react";

interface Props {
    customer: any;
}

export default function CustomerProfile({ customer }: Props) {
    if (!customer) {
        return (
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 text-center text-gray-400">
                Select a customer to view details
            </div>
        );
    }

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 space-y-6">
            {/* Header */}
            <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center text-xl font-semibold text-gray-600">
                    {customer.name.charAt(0)}
                </div>

                <div>
                    <h2 className="font-semibold text-lg text-gray-800">
                        {customer.name}
                    </h2>
                    <p className="text-sm text-gray-500 flex items-center gap-1">
                        <Mail size={14} />
                        {customer.id.toLowerCase()}@example.com
                    </p>
                </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3 border rounded-xl p-3 text-gray-600">
                    <Phone size={16} />
                    {customer.phone}
                </div>

                <div className="flex items-center gap-3 border rounded-xl p-3 text-gray-600">
                    <MapPin size={16} />
                    123 Main St, NY
                </div>
            </div>

            {/* Status */}
            <div>
                <p className="text-sm text-gray-500 mb-2">Status</p>
                <span
                    className={`px-3 py-1 rounded-full text-xs font-medium
                        ${customer.status === "Active"
                            ? "bg-green-50 text-green-600"
                            : customer.status === "VIP"
                                ? "bg-yellow-50 text-yellow-600"
                                : "bg-red-50 text-red-600"
                        }`}
                >
                    {customer.status}
                </span>
            </div>

            {/* Activity */}
            <div>
                <p className="text-sm text-gray-500 mb-3">Activity</p>

                <div className="space-y-1 text-sm text-gray-600">
                    <p>Registration: 15.01.2025</p>
                    <p>Last purchase: 10.01.2025</p>
                </div>
            </div>

            {/* Order Overview */}
            <div>
                <p className="text-sm text-gray-500 mb-3">Order Overview</p>

                <div className="grid grid-cols-3 gap-3">
                    <div className="border rounded-xl p-3 text-center">
                        <p className="font-semibold text-gray-800">150</p>
                        <p className="text-xs text-gray-500">Total</p>
                    </div>

                    <div className="border rounded-xl p-3 text-center">
                        <p className="font-semibold text-green-600">140</p>
                        <p className="text-xs text-gray-500">Completed</p>
                    </div>

                    <div className="border rounded-xl p-3 text-center">
                        <p className="font-semibold text-red-500">10</p>
                        <p className="text-xs text-gray-500">Canceled</p>
                    </div>
                </div>
            </div>
        </div>
    );
}