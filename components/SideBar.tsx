"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import {
    ShoppingCart,

    ChevronDown,
} from "lucide-react"
import { PRIMARY_COLOR } from "@/constants/colors"
import { links } from "@/constants/sidebarLinks"

export default function Sidebar() {
    const pathname = usePathname()
    const [openMenu, setOpenMenu] = useState<string | null>("Products")

    return (
        <aside
            className="w-64 h-screen overflow-y-auto no-scrollbar border-r px-5 py-8"
            style={{
                background: "linear-gradient(to bottom, #E0EFF6, white)",
                borderColor: `${PRIMARY_COLOR}4D`,
            }}
        >


            {/* Brand */}
            <div className="mb-10">
                <div className="flex items-center gap-3 px-2">
                    <ShoppingCart size={20} style={{ color: PRIMARY_COLOR }} />
                    <h1 className="text-xl font-bold" style={{ color: PRIMARY_COLOR }}>
                        Admin Panel
                    </h1>
                </div>
                <div
                    className="mt-3 h-1 w-16 rounded-full ml-2"
                    style={{ backgroundColor: PRIMARY_COLOR }}
                />
            </div>

            {/* Navigation */}
            <nav className="space-y-2">
                {links.map((link) => {
                    const Icon = link.icon
                    const isActive = pathname === link.href
                    const hasChildren = !!link.children
                    const isOpen = openMenu === link.name

                    if (hasChildren) {
                        return (
                            <div key={link.name}>
                                {/* Parent */}
                                <button
                                    onClick={() =>
                                        setOpenMenu(isOpen ? null : link.name)
                                    }
                                    className="w-full flex items-center justify-between px-4 py-3.5 rounded-lg text-slate-700 hover:bg-white hover:shadow-md transition"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 rounded-xl bg-[#E0EFF6]">
                                            <Icon size={20} style={{ color: PRIMARY_COLOR }} />
                                        </div>
                                        <span className="text-sm font-semibold">
                                            {link.name}
                                        </span>
                                    </div>

                                    <ChevronDown
                                        size={16}
                                        className={`transition-transform ${isOpen ? "rotate-180" : ""
                                            }`}
                                    />
                                </button>

                                {/* Children */}
                                {isOpen && (
                                    <div className="ml-11 mt-2 space-y-1">
                                        {link.children.map((child) => {
                                            const isChildActive =
                                                pathname === child.href

                                            return (
                                                <Link
                                                    key={child.name}
                                                    href={child.href}
                                                    className={`flex items-center px-4 py-2 rounded-lg text-sm transition
                                                        ${isChildActive
                                                            ? "text-white"
                                                            : "text-slate-600 hover:bg-white"
                                                        }`}
                                                    style={{
                                                        backgroundColor:
                                                            isChildActive
                                                                ? PRIMARY_COLOR
                                                                : "transparent",
                                                    }}
                                                >
                                                    {child.name}
                                                </Link>
                                            )
                                        })}
                                    </div>
                                )}
                            </div>
                        )
                    }

                    return (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`group flex items-center gap-3 px-4 py-3.5 rounded-lg transition-all
                                ${isActive
                                    ? "text-white shadow-lg"
                                    : "text-slate-700 hover:bg-white hover:shadow-md"
                                }`}
                            style={{
                                backgroundColor: isActive
                                    ? PRIMARY_COLOR
                                    : "transparent",
                            }}
                        >
                            <div
                                className="p-2 rounded-xl"
                                style={{
                                    backgroundColor: isActive
                                        ? "rgba(255,255,255,0.2)"
                                        : "#E0EFF6",
                                }}
                            >
                                <Icon
                                    size={20}
                                    style={{
                                        color: isActive ? "white" : PRIMARY_COLOR,
                                    }}
                                />
                            </div>

                            <span className="text-sm font-semibold">
                                {link.name}
                            </span>
                        </Link>
                    )
                })}
            </nav>
        </aside>
    )
}
