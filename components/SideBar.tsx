"use client"
import Link from 'next/link'
import { LayoutDashboard, Box, ShoppingCart, Users, Settings, Layers } from 'lucide-react'


const links = [
    { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
    { name: 'Products', href: '/admin/products', icon: Box },
    { name: 'Orders', href: '/admin/orders', icon: ShoppingCart },
    { name: 'Users', href: '/admin/users', icon: Users },
    { name: 'Categories', href: '/admin/categories', icon: Layers },
    { name: 'Settings', href: '/admin/settings', icon: Settings }
]


export default function Sidebar() {
    return (
        <aside className="w-64 bg-white border-r p-5">
            <h1 className="text-xl font-bold mb-6">Admin Panel</h1>
            <nav className="space-y-3">
                {links.map(link => (
                    <Link key={link.name} href={link.href} className="flex items-center gap-3 p-2 rounded hover:bg-slate-100">
                        <link.icon size={18} />
                        {link.name}
                    </Link>
                ))}
            </nav>
        </aside>
    )
}