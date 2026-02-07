'use client'

import Link from 'next/link'
import { Search, ShoppingCart, User } from 'lucide-react'
import { useState } from 'react'
import AuthModal from './modals/AuthModal'

export default function Navbar() {
    const [openAuth, setOpenAuth] = useState(false)

    return (
        <>
            <header className="absolute top-0 left-0 w-full z-50">
                <div className="max-w-7xl mx-auto px-6 md:px-12 py-6 flex items-center justify-between">

                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 font-semibold text-[#0b3d3a]">
                        <span className="text-xl tracking-wide">INWOOD</span>
                    </Link>

                    {/* Nav Links */}
                    <nav className="hidden md:flex items-center gap-8 text-sm text-[#0b3d3a]/80">
                        <Link href="/" className="hover:text-[#0b3d3a] font-medium">
                            Home
                        </Link>
                        <Link href="/products" className="hover:text-[#0b3d3a]">
                            Products
                        </Link>
                        <Link href="/categories" className="hover:text-[#0b3d3a]">
                            Categories
                        </Link>
                        <Link href="/about" className="hover:text-[#0b3d3a]">
                            About
                        </Link>
                        <Link href="/contact" className="hover:text-[#0b3d3a]">
                            Contact Us
                        </Link>
                    </nav>

                    {/* Icons */}
                    <div className="flex items-center gap-5 text-[#0b3d3a]">
                        <Search size={18} className="cursor-pointer" />
                        <ShoppingCart size={18} className="cursor-pointer" />
                        <User
                            size={18}
                            className="cursor-pointer"
                            onClick={() => setOpenAuth(true)}
                        />

                    </div>

                </div>
            </header>
            {/* Auth Modal */}
            <AuthModal
                isOpen={openAuth}
                onClose={() => setOpenAuth(false)}
            /></>
    )
}
