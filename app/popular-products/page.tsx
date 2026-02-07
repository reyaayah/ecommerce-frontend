"use client"

import { useRef } from "react"
import ProductCard from "@/components/cards/ProductCard"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"

const products = [
    { id: 1, name: "Armchair", description: "Light single chair", price: "$145", image: "/chair1.png", bgColor: "bg-[#A8CFC3]" },
    { id: 2, name: "Premium Sofa", description: "Light single chair", price: "$145", image: "/chair.png", bgColor: "bg-[#C7D4DB]" },
    { id: 3, name: "Minimal Sofa", description: "Light single chair", price: "$145", image: "/bgchair.png", bgColor: "bg-[#D7D3E5]" },
    { id: 4, name: "Dining Chair", description: "Light single chair", price: "$145", image: "/chair.png", bgColor: "bg-[#E7D8C7]" },
    { id: 5, name: "Dining Chair", description: "Light single chair", price: "$145", image: "/chair.png", bgColor: "bg-[#E7D8C7]" },
]

const CARD_WIDTH = 300
const GAP = 24

export default function PopularProducts() {
    const scrollRef = useRef<HTMLDivElement>(null)

    const scroll = (direction: "left" | "right") => {
        if (!scrollRef.current) return

        scrollRef.current.scrollBy({
            left: direction === "right"
                ? CARD_WIDTH + GAP
                : -(CARD_WIDTH + GAP),
            behavior: "smooth",
        })
    }

    return (
        <section className="w-full py-16 bg-[#f5f5f3]">
            <div className="max-w-7xl mx-auto px-6">

                <h2 className="text-4xl font-semibold text-center text-[#1f4d4a] mb-12">
                    Popular Products
                </h2>

                <div className="relative">



                    {/* Scroll Area */}
                    <div
                        ref={scrollRef}
                        className="
                            flex gap-6 overflow-x-auto scroll-smooth
                            snap-x snap-mandatory
                            no-scrollbar
                        "
                    >
                        {products.map((product) => (
                            <div
                                key={product.id}
                                className="min-w-[300px] snap-start"
                            >
                                <ProductCard {...product} />
                            </div>
                        ))}
                    </div>

                    {/* Arrows */}
                    <div className="justify-center flex gap-3 mt-6">
                        <button
                            onClick={() => scroll("left")}
                            className="w-9 h-9 rounded-full bg-white shadow flex items-center justify-center hover:bg-gray-100"
                        >
                            <ChevronLeft size={18} />
                        </button>

                        <button
                            onClick={() => scroll("right")}
                            className="w-9 h-9 rounded-full bg-white shadow flex items-center justify-center hover:bg-gray-100"
                        >
                            <ChevronRight size={18} />
                        </button>
                    </div>
                </div>

                <div className="flex justify-center mt-20">
                    <button className="flex items-center gap-2 bg-[#5B7F86] text-white px-8 py-3 rounded-md hover:opacity-90 transition">
                        Explore all items
                        <ArrowRight size={18} />
                    </button>
                </div>

            </div>
        </section>
    )
}
