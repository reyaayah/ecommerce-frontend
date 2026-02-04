'use client'

import { Search } from 'lucide-react'

const categories = [
    'Bedroom',
    'Dining Room',
    'Meeting Room',
    'Workspace',
    'Living Room',
    'Kitchen',
    'Living Space'
]

export default function CategorySidebar() {
    return (
        <aside className="space-y-8">
            {/* Search */}
            <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                <input
                    type="text"
                    placeholder="Search"
                    className="w-full pl-10 pr-4 py-2 rounded-md bg-white border text-sm outline-none"
                />
            </div>

            {/* Category list */}
            <ul className="space-y-6 text-sm text-[#0b3d3a] relative pl-4">
                <span className="absolute left-0 top-0 h-full w-[2px] bg-[#c7d3cf]" />
                {categories.map((cat, i) => (
                    <li
                        key={cat}
                        className={`cursor-pointer ${i === 0 ? 'font-semibold text-[#0b3d3a]' : 'opacity-80'
                            }`}
                    >
                        {cat}
                    </li>
                ))}
            </ul>

            {/* Button */}
            <button className="mt-10 w-full bg-[#6f8f88] text-white py-3 rounded-md flex items-center justify-center gap-2 hover:bg-[#5e7d76] transition">
                All Categories →
            </button>
        </aside>
    )
}
