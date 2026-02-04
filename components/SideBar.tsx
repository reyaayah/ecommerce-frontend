"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
    LayoutDashboard,
    Box,
    ShoppingCart,
    Users,
    Settings,
    Layers,
} from "lucide-react"

const links = [
    { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
    { name: "Products", href: "/admin/products", icon: Box },
    { name: "Orders", href: "/admin/orders", icon: ShoppingCart },
    { name: "Users", href: "/admin/users", icon: Users },
    { name: "Categories", href: "/admin/categories", icon: Layers },
    { name: "Settings", href: "/admin/settings", icon: Settings },
]

export default function Sidebar() {
    const pathname = usePathname()

    return (
        <aside className="w-64 min-h-screen bg-gradient-to-b from-[#E0EFF6] to-white border-r border-[#C4C4C4]/30 px-5 py-8">
            {/* Brand */}
            <div className="mb-10">
                <div className="flex items-center gap-3 px-2">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#70908B] to-[#70908B]/80 flex items-center justify-center shadow-lg">
                        <span className="text-xl">🛒</span>
                    </div>
                    <h1 className="text-xl font-bold text-[#70908B]">
                        Ecom Admin
                    </h1>
                </div>
                <div className="mt-3 h-1 w-16 bg-[#70908B]  rounded-full ml-2"></div>
            </div>

            {/* Navigation */}
            <nav className="space-y-2">
                {links.map((link) => {
                    const isActive = pathname === link.href
                    const Icon = link.icon

                    return (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`group flex items-center gap-3 px-4 py-3.5 rounded-lg transition-all duration-200
                ${isActive
                                    ? "bg-[#70908B] text-white shadow-lg shadow-[#70908B]/30"
                                    : "text-slate-700 hover:bg-white hover:shadow-md"
                                }
              `}
                        >
                            <div
                                className={`p-2 rounded-xl transition-all duration-200
                  ${isActive
                                        ? "bg-white/20"
                                        : "bg-[#E0EFF6] group-hover:bg-[#70908B]/10"
                                    }
                `}
                            >
                                <Icon
                                    size={20}
                                    className={`transition-colors ${isActive ? "text-white" : "text-[#70908B]"
                                        }`}
                                />
                            </div>

                            <span className="text-sm font-semibold tracking-wide">
                                {link.name}
                            </span>


                        </Link>
                    )
                })}
            </nav>


        </aside>
    )
}