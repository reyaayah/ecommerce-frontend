// components/special-package/SpecialPackageSection.tsx
import Image from "next/image"
import { ShoppingCart } from "lucide-react"
import PackageItemCard from "./PackageItemCArd"

export default function SpecialPackageSection() {
    return (
        <section className="bg-[#f5f6f4] py-16">
            <div className="max-w-7xl mx-auto px-6">
                {/* Title */}
                <h2 className="text-4xl font-serif text-center text-teal-900 mb-12">
                    Special Package
                </h2>

                <div className="grid lg:grid-cols-2 gap-10">
                    {/* LEFT SIDE */}
                    <div>
                        {/* Main Image */}
                        <div className="relative w-full h-[420px] rounded-xl overflow-hidden">
                            <Image
                                src="/sofa.png"
                                alt="Main package"
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Info */}
                        <div className="flex items-center justify-between mt-6">
                            <div>
                                <h3 className="text-xl font-semibold text-teal-900">
                                    Larkin Wood Full Set
                                </h3>

                                {/* Stars */}
                                <div className="flex text-yellow-500 my-2">
                                    {"★★★★★"}
                                </div>

                                <p className="text-lg font-semibold text-teal-900">
                                    $729.99
                                </p>
                            </div>

                            <button className="flex items-center gap-2 bg-teal-700 text-white px-5 py-3 rounded-lg hover:bg-teal-800 transition">
                                Add to cart
                                <ShoppingCart size={18} />
                            </button>
                        </div>
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="space-y-6">
                        {/* Description */}
                        <div>
                            <h4 className="text-lg font-semibold text-teal-900 mb-2">
                                Description
                            </h4>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Cast Aluminum Outdoor Chaise Lounge. An elegant and classic
                                touch to your outdoor space. This aluminum chaise lounge
                                combines appearance, function and quality all together.
                            </p>
                            <button className="text-teal-700 mt-2 text-sm hover:underline">
                                See More
                            </button>
                        </div>

                        {/* List Items */}
                        <div className="space-y-4 max-h-[380px] overflow-y-auto pr-2 no-scrollbar">
                            <PackageItemCard
                                title="Living Room Family Set"
                                price="$229.99"
                                image="/room1.png"
                            />

                            <PackageItemCard
                                title="Living Room Special Set"
                                price="$329.99"
                                image="/room2.png"
                                description="Modern interior furniture set for your home."
                            />

                            <PackageItemCard
                                title="Dining Special Set"
                                price="$587.99"
                                image="/room3.png"
                                description="Elegant dining setup for family and guests."
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
