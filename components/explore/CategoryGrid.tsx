'use client'

import Image from "next/image"

const categories = [
    { name: "Bedroom", image: "/room1.png", highlight: true },
    { name: "Living Room", image: "/room2.png" },
    { name: "Workspace", image: "/room3.png" },
    { name: "Office", image: "/room1.png" },
    { name: "Meeting Room", image: "/room2.png" },
    { name: "Dining Room", image: "/room3.png" },
]

export default function CategoryGrid() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {categories.map((cat, i) => (
                <div
                    key={i}
                    className="relative rounded-xl overflow-hidden group h-60 cursor-pointer"
                >
                    {/* Image */}
                    <Image
                        src={cat.image}
                        alt={cat.name}
                        fill
                        className="object-cover group-hover:scale-105 transition duration-500"
                    />

                    {/* Overlay only for first card */}
                    {cat.highlight && (
                        <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-white">
                            <h2 className="text-3xl font-serif mb-4">{cat.name}</h2>
                            <button className="px-6 py-2 bg-white text-[#0b3d3a] rounded-md text-sm hover:bg-gray-100">
                                Explore
                            </button>
                        </div>
                    )}
                </div>
            ))}
        </div>
    )
}
