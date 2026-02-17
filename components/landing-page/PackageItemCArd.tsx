// components/special-package/PackageItemCard.tsx
import Image from "next/image"
import { Star } from "lucide-react"

interface Props {
    title: string
    price: string
    image: string
    description?: string
}

export default function PackageItemCard({
    title,
    price,
    image,
    description,
}: Props) {
    return (
        <div className="flex gap-4 bg-white rounded-xl p-3 shadow-sm hover:shadow-md transition">
            <div className="relative w-32 h-24 rounded-lg overflow-hidden">
                <Image src={image} alt={title} fill className="object-cover" />
            </div>

            <div className="flex flex-col justify-between flex-1">
                <div>
                    <h4 className="font-semibold text-sm text-gray-800">{title}</h4>

                    {/* Rating */}
                    <div className="flex text-yellow-500 my-1">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} size={14} fill="currentColor" />
                        ))}
                    </div>

                    {description && (
                        <p className="text-xs text-gray-500 line-clamp-2">
                            {description}
                        </p>
                    )}
                </div>

                <div className="flex justify-between items-center mt-1">
                    <span className="font-semibold text-teal-700">{price}</span>
                    <button className="text-xs text-teal-700 hover:underline">
                        See Details
                    </button>
                </div>
            </div>
        </div>
    )
}
