"use client"

import { useState } from "react"
import {
    Search,
    Bell,
    ChevronRight,
    Edit2,
    Trash2,
    Filter,
    Download,
    MoreVertical,
    Plus
} from "lucide-react"
import Image from "next/image"
import PrimaryButton from "@/components/buttons/primaryButton"
import { useRouter } from "next/navigation"

// Category data
const categories = [
    { id: 1, name: "Electronics", icon: "📱", color: "bg-blue-100" },
    { id: 2, name: "Fashion", icon: "👔", color: "bg-pink-100" },
    { id: 3, name: "Accessories", icon: "⌚", color: "bg-purple-100" },
    { id: 4, name: "Home & Kitchen", icon: "🏠", color: "bg-orange-100" },
    { id: 5, name: "Sports & Outdoors", icon: "⚽", color: "bg-green-100" },
    { id: 6, name: "Toys & Games", icon: "🎮", color: "bg-yellow-100" },
    { id: 7, name: "Health & Fitness", icon: "💪", color: "bg-red-100" },
    { id: 8, name: "Books", icon: "📚", color: "bg-indigo-100" },
]

// Product data
const products = [
    { id: 1, name: "Wireless Bluetooth Headphones", image: "🎧", createdDate: "01-01-2025", order: 25 },
    { id: 2, name: "Men's T-Shirt", image: "👕", createdDate: "01-01-2025", order: 30 },
    { id: 3, name: "Men's Leather Wallet", image: "👛", createdDate: "01-01-2025", order: 35 },
    { id: 4, name: "Memory Foam Pillow", image: "🛏️", createdDate: "01-01-2025", order: 40 },
    { id: 5, name: "Coffee Maker", image: "☕", createdDate: "01-01-2025", order: 45 },
    { id: 6, name: "Casual Baseball Cap", image: "🧢", createdDate: "01-01-2025", order: 55 },
    { id: 7, name: "Full HD Webcam", image: "📹", createdDate: "01-01-2025", order: 20 },
    { id: 8, name: "Smart LED Color Bulb", image: "💡", createdDate: "01-01-2025", order: 16 },
    { id: 9, name: "Men's T-Shirt", image: "👕", createdDate: "01-01-2025", order: 10 },
    { id: 10, name: "Men's Leather Wallet", image: "👛", createdDate: "01-01-2025", order: 35 },
]

export default function CategoriesPage() {
    const [activeTab, setActiveTab] = useState("All Product (345)")
    const [searchQuery, setSearchQuery] = useState("")
    const router = useRouter()

    const tabs = ["All Product (345)", "Featured Products", "On Sale", "Out of Stock"]

    return (
        <div className="min-h-screen ">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
                <h1 className="text-3xl font-bold text-[#70908B]">Categories</h1>

                <div className="flex items-center gap-4">
                    {/* Search Bar */}
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search data, users, or reports"
                            className="w-96 pl-10 pr-4 py-2.5 bg-white border border-[#C4C4C4]/30 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#70908B]/30 focus:border-[#70908B]"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#C4C4C4]" size={18} />
                    </div>

                    {/* Icons */}
                    <button className="p-2.5 bg-white border border-[#C4C4C4]/30 rounded-xl hover:bg-[#E0EFF6] transition-colors">
                        <Bell size={20} className="text-slate-600" />
                    </button>
                    <button className="p-2.5 bg-white border border-[#C4C4C4]/30 rounded-xl hover:bg-[#E0EFF6] transition-colors">
                        <Filter size={20} className="text-slate-600" />
                    </button>

                    {/* Profile */}
                    <div className="w-10 h-10 bg-gradient-to-br from-[#70908B] to-[#70908B]/80 rounded-full flex items-center justify-center text-white font-semibold">
                        JD
                    </div>
                </div>
            </div>

            {/* Discover Section */}
            <div className="bg-white rounded-2xl shadow-lg border border-[#C4C4C4]/20 p-6 mb-6">
                <div className="flex-row mb-4 flex items-center justify-between">
                    <h2 className="text-lg font-bold text-slate-800 mb-6">Discover</h2>
                    {/* Action Bar */}
                    <div className="flex-row flex items-center gap-2">
                        <PrimaryButton
                            icon={<Plus size={18} />}
                            onClick={() => router.push("/admin/categories/add")}
                        >
                            Add Category
                        </PrimaryButton>

                        <button className="px-6 py-2.5 bg-white border border-[#C4C4C4]/30 text-slate-700 rounded-xl font-medium hover:bg-[#E0EFF6] transition-colors">
                            More Action
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-4 gap-4 mb-4">
                    {categories.map((category) => (
                        <button
                            key={category.id}
                            className="flex items-center gap-3 p-4 bg-[#E0EFF6]/40 hover:bg-[#E0EFF6] rounded-xl transition-all border border-[#C4C4C4]/20 hover:shadow-md group"
                        >
                            <div className={`${category.color} p-3 rounded-lg text-2xl`}>
                                {category.icon}
                            </div>
                            <span className="text-sm font-semibold text-slate-700 group-hover:text-[#70908B]">
                                {category.name}
                            </span>
                        </button>
                    ))}
                </div>

                {/* Scroll Indicator */}
                <button className="w-full flex items-center justify-center gap-2 text-[#70908B] hover:text-[#70908B]/80 transition-colors">
                    <ChevronRight size={20} />
                </button>
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
                            placeholder="Search your product"
                            className="w-full pl-10 pr-4 py-2 bg-[#E0EFF6]/30 border border-[#C4C4C4]/20 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#70908B]/30"
                        />
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#C4C4C4]" size={16} />
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
                            <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
                                No.
                            </th>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
                                Product
                            </th>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
                                Created Date
                            </th>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
                                Order
                            </th>
                            <th className="px-6 py-4 text-left text-xs font-semibold text-slate-600 uppercase tracking-wider">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E0EFF6]">
                        {products.map((product, index) => (
                            <tr key={product.id} className="hover:bg-[#E0EFF6]/20 transition-colors">
                                <td className="px-6 py-4 text-sm text-slate-600">
                                    {index + 1}
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-[#E0EFF6] rounded-lg flex items-center justify-center text-xl">
                                            {product.image}
                                        </div>
                                        <span className="text-sm font-medium text-slate-700">
                                            {product.name}
                                        </span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-sm text-slate-600">
                                    {product.createdDate}
                                </td>
                                <td className="px-6 py-4 text-sm text-slate-600">
                                    {product.order}
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-2">
                                        <button className="p-2 hover:bg-[#E0EFF6] rounded-lg transition-colors group">
                                            <Edit2 size={16} className="text-slate-400 group-hover:text-[#70908B]" />
                                        </button>
                                        <button className="p-2 hover:bg-red-50 rounded-lg transition-colors group">
                                            <Trash2 size={16} className="text-slate-400 group-hover:text-red-500" />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/* Pagination */}
                <div className="flex items-center justify-between px-6 py-4 border-t border-[#E0EFF6]">
                    <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-600 hover:text-[#70908B] transition-colors">
                        <ChevronRight size={16} className="rotate-180" />
                        Previous
                    </button>

                    <div className="flex items-center gap-2">
                        {[1, 2, 3, 4, 5].map((page) => (
                            <button
                                key={page}
                                className={`w-8 h-8 rounded-lg text-sm font-medium transition-colors ${page === 1
                                    ? "bg-[#70908B] text-white shadow-md"
                                    : "bg-[#E0EFF6] text-slate-600 hover:bg-[#70908B] hover:text-white"
                                    }`}
                            >
                                {page}
                            </button>
                        ))}
                        <span className="px-2 text-slate-400">...</span>
                        <button className="w-8 h-8 rounded-lg text-sm font-medium bg-[#E0EFF6] text-slate-600 hover:bg-[#70908B] hover:text-white transition-colors">
                            24
                        </button>
                    </div>

                    <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-600 hover:text-[#70908B] transition-colors">
                        Next
                        <ChevronRight size={16} />
                    </button>
                </div>
            </div>
        </div >
    )
}