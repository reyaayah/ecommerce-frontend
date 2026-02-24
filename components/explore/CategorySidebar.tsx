'use client'

import { Search, ArrowUp, ArrowDown } from 'lucide-react'
import { useRef } from 'react'

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
    const listRef = useRef<HTMLUListElement>(null)

    const scroll = (direction: 'up' | 'down') => {
        if (!listRef.current) return
        listRef.current.scrollBy({
            top: direction === 'down' ? 80 : -80,
            behavior: 'smooth',
        })
    }

    return (
        <aside className="space-y-8">
            {/* Search */}
            <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                <input
                    type="text"
                    placeholder="Search"
                    className="w-full pl-10 pr-4 py-3 rounded-md bg-white border text-sm outline-none"
                />
            </div>

            {/* Category list */}
            <div className="relative">
                <ul
                    ref={listRef}
                    className="space-y-6 text-sm text-[#0b3d3a] max-h-[260px] overflow-hidden relative pl-4"
                >
                    <span className="absolute left-0 top-0 h-full w-[2px] bg-[#c7d3cf]" />

                    {categories.map((cat, i) => (
                        <li
                            key={cat}
                            className={`cursor-pointer ${i === 0
                                    ? 'font-semibold text-[#0b3d3a]'
                                    : 'opacity-80 hover:opacity-100'
                                }`}
                        >
                            {cat}
                        </li>
                    ))}
                </ul>

                {/* Scroll buttons */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col gap-2">
                    <button
                        onClick={() => scroll('up')}
                        className="w-7 h-7 rounded-full bg-[#d6e5e2] flex items-center justify-center hover:bg-[#c5d8d4]"
                    >
                        <ArrowUp size={14} />
                    </button>
                    <button
                        onClick={() => scroll('down')}
                        className="w-7 h-7 rounded-full bg-[#f1cfcf] flex items-center justify-center hover:bg-[#e7bcbc]"
                    >
                        <ArrowDown size={14} />
                    </button>
                </div>
            </div>

            {/* Button */}
            <button className="mt-10 w-full bg-[#6f8f88] text-white py-3 rounded-md flex items-center justify-center gap-2 hover:bg-[#5e7d76] transition">
                All Categories →
            </button>
        </aside>
    )
}
