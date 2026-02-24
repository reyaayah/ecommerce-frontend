"use client"

import { useState } from "react"
import { MoreVertical, Plus, Search, SlidersHorizontal, ArrowUpDown, MoreHorizontal, TrendingUp, TrendingDown } from "lucide-react"
import PageHeader from "@/components/ui/PageHeader"
import PrimaryButton from "@/components/buttons/primaryButton"
import Pagination from "@/components/ui/Pagination.tsx"

const ALL_TRANSACTIONS = [
    { id: "#CUST001", name: "John Doe", date: "01-01-2025", total: "$2,904", method: "CC", status: "Complete" },
    { id: "#CUST001", name: "John Doe", date: "01-01-2025", total: "$2,904", method: "PayPal", status: "Complete" },
    { id: "#CUST001", name: "John Doe", date: "01-01-2025", total: "$2,904", method: "CC", status: "Complete" },
    { id: "#CUST001", name: "John Doe", date: "01-01-2025", total: "$2,904", method: "Bank", status: "Complete" },
    { id: "#CUST001", name: "Jane Smith", date: "01-01-2025", total: "$2,904", method: "CC", status: "Canceled" },
    { id: "#CUST001", name: "Emily Davis", date: "01-01-2025", total: "$2,904", method: "PayPal", status: "Pending" },
    { id: "#CUST001", name: "Jane Smith", date: "01-01-2025", total: "$2,904", method: "Bank", status: "Canceled" },
    { id: "#CUST001", name: "John Doe", date: "01-01-2025", total: "$2,904", method: "CC", status: "Complete" },
    { id: "#CUST001", name: "Emily Davis", date: "01-01-2025", total: "$2,904", method: "PayPal", status: "Pending" },
    { id: "#CUST001", name: "Jane Smith", date: "01-01-2025", total: "$2,904", method: "Bank", status: "Canceled" },
]

const STATUS_STYLES: Record<string, string> = {
    Complete: "bg-green-100 text-green-700",
    Pending: "bg-yellow-100 text-yellow-700",
    Canceled: "bg-red-100 text-red-600",
}

type Tab = "All order (240)" | "Completed" | "Pending" | "Canceled"
const TABS: Tab[] = ["All order (240)", "Completed", "Pending", "Canceled"]

export default function TransactionPage() {
    const [activeTab, setActiveTab] = useState<Tab>("All order (240)")
    const [page, setPage] = useState(1)
    const [search, setSearch] = useState("")

    const rows = ALL_TRANSACTIONS.filter((t) => {
        const tabMatch =
            activeTab === "All order (240)" ||
            (activeTab === "Completed" && t.status === "Complete") ||
            (activeTab === "Pending" && t.status === "Pending") ||
            (activeTab === "Canceled" && t.status === "Canceled")
        const searchMatch =
            !search ||
            t.name.toLowerCase().includes(search.toLowerCase()) ||
            t.id.toLowerCase().includes(search.toLowerCase())
        return tabMatch && searchMatch
    })

    return (
        <div className="min-h-screen bg-[#f5f6fa]">
            <PageHeader
                title="Transaction"
                searchValue={search}
                onSearchChange={setSearch}
                showSearch
                showBell
            />

            <div className="px-6 pb-6 space-y-5">

                {/* ── Stats + Payment Method ── */}
                <div className="grid grid-cols-3 gap-4">

                    {/* 2×2 stat cards */}
                    <div className="col-span-2 grid grid-cols-2 gap-4">
                        {[
                            { label: "Total Revenue", value: "$15,045", change: "14.4%", up: true },
                            { label: "Completed Transactions", value: "3,150", change: "20%", up: true },
                            { label: "Pending Transactions", value: "150", change: "85%", up: false },
                            { label: "Failed Transactions", value: "75", change: "1.5%", up: false },
                        ].map((card) => (
                            <div key={card.label} className="bg-white rounded-2xl p-5 shadow-lg border border-[#C4C4C4]/20">
                                <div className="flex items-center justify-between mb-1">
                                    <span className="text-xs font-medium text-slate-500">{card.label}</span>
                                    <button className="p-1 hover:bg-[#E0EFF6] rounded-lg transition">
                                        <MoreVertical className="w-4 h-4 text-slate-400" />
                                    </button>
                                </div>
                                <div className="flex items-baseline gap-2 mt-1">
                                    <span className="text-2xl font-bold text-slate-800">{card.value}</span>
                                    <span className={`text-xs font-medium flex items-center gap-0.5 ${card.up ? "text-green-600" : "text-red-500"}`}>
                                        {card.up
                                            ? <TrendingUp className="w-3 h-3" />
                                            : <TrendingDown className="w-3 h-3" />
                                        }
                                        {card.change}
                                    </span>
                                </div>
                                <p className="text-xs text-slate-400 mt-1">Last 7 days</p>
                            </div>
                        ))}
                    </div>

                    {/* Payment Method */}
                    <div className="bg-white rounded-2xl p-5 shadow-lg border border-[#C4C4C4]/20 flex flex-col">
                        <div className="flex items-center justify-between mb-3">
                            <span className="text-sm font-bold text-slate-800">Payment Method</span>
                            <button className="p-1 hover:bg-[#E0EFF6] rounded-lg transition">
                                <MoreVertical className="w-4 h-4 text-slate-400" />
                            </button>
                        </div>

                        <div className="flex gap-3">
                            {/* Card visual */}
                            <div
                                className="flex-shrink-0 w-36 rounded-xl p-3 text-white relative overflow-hidden"
                                style={{ background: "linear-gradient(135deg,#43c59e,#2d9cdb)", minHeight: 90 }}
                            >
                                <div className="font-bold text-xs mb-3">Finact</div>
                                <div className="tracking-widest text-[10px] mb-2">•••• •••• •••• 2345</div>
                                <div className="flex justify-between text-[9px]">
                                    <div>
                                        <div className="opacity-70">Card Holder Name</div>
                                        <div className="font-medium text-[10px]">Noman Mansoor</div>
                                    </div>
                                    <div>
                                        <div className="opacity-70">Expiry Date</div>
                                        <div className="font-medium text-[10px]">02/30</div>
                                    </div>
                                </div>
                                <div className="absolute top-3 right-3 w-7 h-4 bg-white/30 rounded-full flex items-center px-0.5">
                                    <div className="w-3 h-3 bg-white rounded-full ml-auto" />
                                </div>
                            </div>

                            {/* Info */}
                            <div className="space-y-1 text-xs">
                                <div><span className="text-slate-400">Status: </span><span className="text-green-600 font-medium">Active</span></div>
                                <div><span className="text-slate-400">Transactions: </span><span className="text-slate-700">1,250</span></div>
                                <div><span className="text-slate-400">Revenue: </span><span className="text-slate-700">$50,000</span></div>
                                <button className="text-[#70908B] hover:underline text-xs mt-1 block font-medium">View Transactions</button>
                            </div>
                        </div>

                        <div className="flex gap-2 mt-auto pt-3">
                            <button className="flex-1 flex items-center justify-center gap-1 border border-[#C4C4C4]/30 text-slate-600 text-xs py-2 rounded-xl hover:bg-[#E0EFF6] transition font-medium">
                                <Plus className="w-3.5 h-3.5" /> Add Card
                            </button>
                            <button className="px-3 py-2 border border-red-200 text-red-400 text-xs rounded-xl hover:bg-red-50 transition font-medium">
                                Deactivate
                            </button>
                        </div>
                    </div>
                </div>

                {/* ── Table section ── */}

                <h2 className="text-lg font-bold text-slate-800">Transaction List</h2>


                {/* Tabs */}
                <div className="bg-white rounded-t-2xl shadow-lg border border-[#C4C4C4]/20 border-b-0">
                    <div className="flex items-center gap-1 p-2">
                        {TABS.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${activeTab === tab
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
                <div className="bg-white rounded-b-2xl shadow-lg border border-[#C4C4C4]/20 overflow-hidden -mt-5">
                    {/* Search + filter bar */}
                    <div className="flex items-center justify-between px-6 py-4 border-b border-[#E0EFF6]">
                        <div className="relative max-w-xs w-full">
                            <input
                                type="text"
                                placeholder="Search transactions"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="w-full pl-9 pr-4 py-2 bg-[#E0EFF6]/30 border border-[#C4C4C4]/20 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#70908B]/30"
                            />
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#C4C4C4] w-4 h-4" />
                        </div>
                        <div className="flex items-center gap-2">
                            <button className="p-2 hover:bg-[#E0EFF6] rounded-lg transition">
                                <SlidersHorizontal className="w-4 h-4 text-slate-600" />
                            </button>
                            <button className="p-2 hover:bg-[#E0EFF6] rounded-lg transition">
                                <ArrowUpDown className="w-4 h-4 text-slate-600" />
                            </button>
                            <button className="p-2 hover:bg-[#E0EFF6] rounded-lg transition">
                                <MoreHorizontal className="w-4 h-4 text-slate-600" />
                            </button>
                        </div>
                    </div>

                    <table className="w-full">
                        <thead className="bg-[#E0EFF6]/40">
                            <tr>
                                {["Customer Id", "Name", "Date", "Total", "Method", "Status", "Action"].map((h) => (
                                    <th key={h} className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wide">
                                        {h}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-[#E0EFF6]">
                            {rows.map((row, i) => (
                                <tr key={i} className="hover:bg-[#E0EFF6]/20 transition-colors">
                                    <td className="px-6 py-4 text-sm text-slate-500">{row.id}</td>
                                    <td className="px-6 py-4 text-sm font-medium text-slate-700">{row.name}</td>
                                    <td className="px-6 py-4 text-sm text-slate-600">{row.date}</td>
                                    <td className="px-6 py-4 text-sm font-medium text-slate-700">{row.total}</td>
                                    <td className="px-6 py-4 text-sm text-slate-600">{row.method}</td>
                                    <td className="px-6 py-4">
                                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${STATUS_STYLES[row.status]}`}>
                                            {row.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <button className="text-sm text-[#70908B] hover:text-[#5a7a75] hover:underline font-medium transition">
                                            View Details
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            {rows.length === 0 && (
                                <tr>
                                    <td colSpan={7} className="px-6 py-12 text-center text-sm text-slate-400">
                                        No transactions found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>

                    <Pagination currentPage={page} totalPages={24} onPageChange={setPage} />
                </div>
            </div>
        </div>
    )
}