"use client"

import Image from "next/image"

interface ProductCardProps {
    name: string
    description: string
    price: string
    image: string
    bgColor?: string
}

export default function ProductCard({
    name,
    description,
    price,
    image,
    bgColor = "bg-gray-100",
}: ProductCardProps) {
    return (
        <div
            className={`rounded-2xl p-6 ${bgColor} hover:scale-[1.02] transition duration-300`}
        >
            {/* Image */}
            <div className="flex justify-center mb-6">
                <Image
                    src={image}
                    alt={name}
                    width={180}
                    height={180}
                    className="object-contain"
                />
            </div>

            {/* Content */}
            <h3 className="font-semibold text-lg text-[#244a48]">{name}</h3>
            <p className="text-sm text-gray-600">{description}</p>
            <p className="mt-2 font-semibold text-[#244a48]">{price}</p>
        </div>
    )
}
