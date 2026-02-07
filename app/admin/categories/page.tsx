"use client"

import { useRef, useState } from "react"
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
import PageHeader from "@/components/ui/PageHeader"
import Pagination from "@/components/ui/Pagination.tsx"

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
    { id: 9, name: "Health & Fitness", icon: "💪", color: "bg-red-100" },
    { id: 10, name: "Books", icon: "📚", color: "bg-indigo-100" },
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
    const categoryScrollRef = useRef<HTMLDivElement | null>(null)

    const [page, setPage] = useState<number>(1)
    const scrollCategories = () => {
        if (!categoryScrollRef.current) return

        categoryScrollRef.current.scrollBy({
            left: 300,
            behavior: "smooth",
        })
    }

    const tabs = ["All Product (345)", "Featured Products", "On Sale", "Out of Stock"]

    return (
        <div className="min-h-screen ">
            {/* Header */}
            <PageHeader
                title="Categories"
                searchValue={searchQuery}
                onSearchChange={setSearchQuery}
                showSearch={true}
                showBell={true}
                showFilter={true}
            />

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
                <div className="relative">
                    <div
                        ref={categoryScrollRef}
                        className="flex gap-4 overflow-x-auto scroll-smooth pb-2 no-scrollbar"
                    >
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                className="min-w-[220px] flex items-center gap-3 p-4 bg-[#E0EFF6]/40 hover:bg-[#E0EFF6] rounded-xl transition-all border border-[#C4C4C4]/20 hover:shadow-md group"
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

                    {/* Right Arrow */}
                    <button
                        onClick={scrollCategories}
                        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-md border border-[#C4C4C4]/30 p-2 rounded-full hover:bg-[#E0EFF6] transition"
                    >
                        <ChevronRight size={20} className="text-[#70908B]" />
                    </button>
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

                <Pagination
                    currentPage={page}
                    totalPages={24}
                    onPageChange={setPage}
                />

            </div>
        </div >
    )
}