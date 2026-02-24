"use client"

import { useState } from "react"
import { Search, Filter, Download, MoreVertical, Plus } from "lucide-react"
import PageHeader from "@/components/ui/PageHeader"
import PrimaryButton from "@/components/buttons/primaryButton"
import { useRouter } from "next/navigation"
import Pagination from "@/components/ui/Pagination.tsx"

const orders = [
    {
        id: "#ORD0001",
        product: "Wireless Bluetooth Headphones",
        date: "01-01-2025",
        price: 49.99,
        payment: "Paid",
        status: "Delivered",
    },
    {
        id: "#ORD0002",
        product: "Men's T-Shirt",
        date: "01-01-2025",
        price: 14.99,
        payment: "Unpaid",
        status: "Pending",
    },
    {
        id: "#ORD0003",
        product: "Coffee Maker",
        date: "01-01-2025",
        price: 79.99,
        payment: "Unpaid",
        status: "Canceled",
    },
]

export default function OrdersPage() {
    const [searchQuery, setSearchQuery] = useState("")
    const [page, setPage] = useState(1)
    const router = useRouter()

    const tabs = ["All order (240)", "Completed", "Pending", "Canceled"]
    const [activeTab, setActiveTab] = useState(tabs[0])

    return (
        <div className="min-h-screen">
            {/* Header */}
            <PageHeader
                title="Order Management"
                searchValue={searchQuery}
                onSearchChange={setSearchQuery}
                showSearch
                showBell
                showFilter
            />

            {/* Top Card */}
            <div className="bg-white rounded-2xl shadow-lg border border-[#C4C4C4]/20 p-6 mb-6">
                <div className="flex items-center justify-between">
                    <h2 className="text-lg font-bold text-slate-800">Order List</h2>

                    <div className="flex gap-2">
                        <PrimaryButton
                            icon={<Plus size={18} />}
                            onClick={() => router.push("/admin/orders/add")}
                        >
                            Add Order
                        </PrimaryButton>

                        <button className="px-6 py-2.5 bg-white border border-[#C4C4C4]/30 text-slate-700 rounded-xl font-medium hover:bg-[#E0EFF6] transition-colors">
                            More Action
                        </button>
                    </div>
                </div>
            </div>

            {/* Tabs */}
            <div className="bg-white rounded-t-2xl shadow-lg border border-[#C4C4C4]/20 border-b-0">
                <div className="flex items-center gap-1 p-2">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-6 py-3 rounded-xl text-sm font-medium transition-all ${activeTab === tab
                                ? "bg-[#E0EFF6] text-[#70908B]"
                                : "text-slate-600 hover:bg-slate-50"
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </div>

            {/* Table */}
            <div className="bg-white rounded-b-2xl shadow-lg border border-[#C4C4C4]/20 overflow-hidden">
                {/* Table Header */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-[#E0EFF6]">
                    <div className="relative flex-1 max-w-xs">
                        <input
                            type="text"
                            placeholder="Search orders"
                            className="w-full pl-10 pr-4 py-2 bg-[#E0EFF6]/30 border border-[#C4C4C4]/20 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#70908B]/30"
                        />
                        <Search
                            className="absolute left-3 top-1/2 -translate-y-1/2 text-[#C4C4C4]"
                            size={16}
                        />
                    </div>

                    <div className="flex items-center gap-2">
                        <button className="p-2 hover:bg-[#E0EFF6] rounded-lg transition-colors">
                            <Filter size={18} className="text-slate-600" />
                        </button>
                        <button className="p-2 hover:bg-[#E0EFF6] rounded-lg transition-colors">
                            <Download size={18} className="text-slate-600" />
                        </button>
                        <button className="p-2 hover:bg-[#E0EFF6] rounded-lg transition-colors">
                            <MoreVertical size={18} className="text-slate-600" />
                        </button>
                    </div>
                </div>

                {/* Table Content */}
                <table className="w-full">
                    <thead className="bg-[#E0EFF6]/40">
                        <tr>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase">
                                No.
                            </th>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase">
                                Order Id
                            </th>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase">
                                Product
                            </th>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase">
                                Date
                            </th>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase">
                                Price
                            </th>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase">
                                Payment
                            </th>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase">
                                Status
                            </th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-[#E0EFF6]">
                        {orders.map((order, index) => (
                            <tr
                                key={order.id}
                                className="hover:bg-[#E0EFF6]/20 transition-colors"
                            >
                                <td className="px-6 py-4 text-sm text-slate-600">
                                    {index + 1}
                                </td>
                                <td className="px-6 py-4 text-sm font-medium text-slate-700">
                                    {order.id}
                                </td>
                                <td className="px-6 py-4 text-sm text-slate-700">
                                    {order.product}
                                </td>
                                <td className="px-6 py-4 text-sm text-slate-600">
                                    {order.date}
                                </td>
                                <td className="px-6 py-4 text-sm text-slate-600">
                                    ${order.price}
                                </td>
                                <td className="px-6 py-4">
                                    <StatusBadge type="payment" value={order.payment} />
                                </td>
                                <td className="px-6 py-4">
                                    <StatusBadge type="status" value={order.status} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <Pagination currentPage={page} totalPages={24} onPageChange={setPage} />
            </div>
        </div>
    )
}

function StatusBadge({
    type,
    value,
}: {
    type: "payment" | "status"
    value: string
}) {
    const styles: any = {
        Paid: "bg-green-100 text-green-700",
        Unpaid: "bg-red-100 text-red-600",
        Delivered: "bg-green-100 text-green-700",
        Pending: "bg-yellow-100 text-yellow-700",
        Canceled: "bg-red-100 text-red-600",
    }

    return (
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${styles[value]}`}>
            {value}
        </span>
    )
}