"use client"

import { Search, Bell, Filter } from "lucide-react"

interface PageHeaderProps {
    title: string
    searchValue?: string
    onSearchChange?: (value: string) => void
    showSearch?: boolean
    showBell?: boolean
    showFilter?: boolean
    profileInitials?: string
}

export default function PageHeader({
    title,
    searchValue = "",
    onSearchChange,
    showSearch,
    showBell,
    showFilter,
    profileInitials = "JD",
}: PageHeaderProps) {
    return (
        <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold text-[#70908B]">{title}</h1>

            <div className="flex items-center gap-4">
                {/* Search */}
                {showSearch && (
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search data, users, or reports"
                            className="w-96 pl-10 pr-4 py-2.5 bg-white border border-[#C4C4C4]/30 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#70908B]/30 focus:border-[#70908B]"
                            value={searchValue}
                            onChange={(e) => onSearchChange?.(e.target.value)}
                        />
                        <Search
                            className="absolute left-3 top-1/2 -translate-y-1/2 text-[#C4C4C4]"
                            size={18}
                        />
                    </div>
                )}

                {/* Icons */}
                {showBell && (
                    <button className="p-2.5 bg-white border border-[#C4C4C4]/30 rounded-xl hover:bg-[#E0EFF6] transition-colors">
                        <Bell size={20} className="text-slate-600" />
                    </button>
                )}

                {showFilter && (
                    <button className="p-2.5 bg-white border border-[#C4C4C4]/30 rounded-xl hover:bg-[#E0EFF6] transition-colors">
                        <Filter size={20} className="text-slate-600" />
                    </button>
                )}

                {/* Profile */}
                <div className="w-10 h-10 bg-gradient-to-br from-[#70908B] to-[#70908B]/80 rounded-full flex items-center justify-center text-white font-semibold">
                    {profileInitials}
                </div>
            </div>
        </div>
    )
}
