"use client"

import { useState } from "react"
import { Search } from "lucide-react"
import PriceInput from "@/components/ui/PriceInput"
import ImageInput from "@/components/ui/ImageInput"

export default function AddProductPage() {
    const [featured, setFeatured] = useState(true)
    const [unlimited, setUnlimited] = useState(true)
    const [image, setImage] = useState<File | null>(null)

    const handleImageSelect = (file: File | null) => {
        setImage(file)
    }
    return (
        <div className="min-h-screen ">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <h1 className="text-xl font-semibold text-slate-800">
                    Add Product
                </h1>

                <div className="flex items-center gap-4">
                    <div className="relative">
                        <Search
                            size={16}
                            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                        />
                        <input
                            placeholder="Search data, users, or reports"
                            className="pl-9 pr-4 py-2 w-72 rounded-lg border border-slate-200 text-sm focus:ring-2 focus:ring-emerald-200"
                        />
                    </div>

                    <button className="px-4 py-2 rounded-lg bg-emerald-500 text-white text-sm font-medium">
                        Publish Product
                    </button>

                    <button className="px-4 py-2 rounded-lg border border-slate-200 text-sm">
                        Save to draft
                    </button>
                </div>
            </div>

            {/* Page Title */}
            <h2 className="text-lg font-semibold text-slate-700 mb-6">
                Add New Product
            </h2>

            {/* Content */}
            <div className="grid grid-cols-3 gap-6">
                {/* LEFT COLUMN */}
                <div className="col-span-2 space-y-6">
                    {/* Basic Details */}
                    <div className="bg-white rounded-xl border border-slate-200 p-6">
                        <h3 className="font-semibold text-slate-700 mb-4">
                            Basic Details
                        </h3>

                        <div className="space-y-4">
                            <div>
                                <label className="text-sm text-slate-600">
                                    Product Name
                                </label>
                                <input
                                    placeholder="iPhone 15"
                                    className="mt-1 w-full rounded-lg border border-slate-200 px-4 py-2 text-sm"
                                />
                            </div>

                            <div>
                                <label className="text-sm text-slate-600">
                                    Product Description
                                </label>
                                <textarea
                                    rows={4}
                                    className="mt-1 w-full rounded-lg border border-slate-200 px-4 py-2 text-sm"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Pricing */}
                    <div className="bg-white rounded-xl border border-slate-200 p-6">
                        <h3 className="font-semibold text-slate-700 mb-4">
                            Pricing
                        </h3>

                        <div className="grid grid-cols-2 gap-4">
                            <PriceInput
                                label="Product Price"
                                placeholder="999.89"
                            />

                            <PriceInput
                                label="Discounted Price (Optional)"
                                placeholder="899"
                                helperText="Sale price will override regular price"
                            />

                        </div>
                    </div>

                    {/* Inventory */}
                    <div className="bg-white rounded-xl border border-slate-200 p-6">
                        <h3 className="font-semibold text-slate-700 mb-4">
                            Inventory
                        </h3>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="text-sm text-slate-600">
                                    Stock Quantity
                                </label>
                                <input
                                    disabled={unlimited}
                                    placeholder="Unlimited"
                                    className="mt-1 w-full rounded-lg border border-slate-200 px-4 py-2 text-sm disabled:bg-slate-50"
                                />
                            </div>

                            <div>
                                <label className="text-sm text-slate-600">
                                    Stock Status
                                </label>
                                <select className="mt-1 w-full rounded-lg border border-slate-200 px-4 py-2 text-sm">
                                    <option>In Stock</option>
                                    <option>Out of Stock</option>
                                </select>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 mt-4">
                            <input
                                type="checkbox"
                                checked={unlimited}
                                onChange={() => setUnlimited(!unlimited)}
                            />
                            <span className="text-sm text-slate-600">
                                Unlimited
                            </span>
                        </div>

                        <div className="flex items-center gap-3 mt-2">
                            <input
                                type="checkbox"
                                checked={featured}
                                onChange={() => setFeatured(!featured)}
                            />
                            <span className="text-sm text-slate-600">
                                Highlight this product in a featured section
                            </span>
                        </div>
                    </div>
                </div>

                {/* RIGHT COLUMN */}
                <div className="space-y-6">
                    {/* Image Upload */}
                    <ImageInput
                        onImageSelect={handleImageSelect}
                        maxSizeMB={10}
                    />

                    {/* Categories */}
                    <div className="bg-white rounded-xl border border-slate-200 p-6">
                        <h3 className="font-semibold text-slate-700 mb-4">
                            Categories
                        </h3>

                        <div className="space-y-4">
                            <select className="w-full rounded-lg border border-slate-200 px-4 py-2 text-sm">
                                <option>Select product category</option>
                            </select>

                            <select className="w-full rounded-lg border border-slate-200 px-4 py-2 text-sm">
                                <option>Select product tag</option>
                            </select>

                            <div>
                                <p className="text-sm text-slate-600 mb-2">
                                    Select your color
                                </p>
                                <div className="flex gap-2">
                                    {["bg-green-200", "bg-pink-200", "bg-slate-200", "bg-yellow-200", "bg-slate-700"].map(
                                        (color) => (
                                            <div
                                                key={color}
                                                className={`w-6 h-6 rounded-full ${color} cursor-pointer`}
                                            />
                                        )
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
