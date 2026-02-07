"use client"

import { useState, FormEvent } from "react"
import InputField from "@/components/ui/InputField"
import ImageInput from "@/components/ui/ImageInput"
import { useRouter } from "next/navigation"

export default function AddCategoryPage() {
    const router = useRouter()

    const [name, setName] = useState("")
    const [image, setImage] = useState<File | null>(null)

    const handleImageSelect = (file: File | null) => {
        setImage(file)
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        if (!name || !image) {
            alert("Please provide both name and image")
            return
        }
        console.log({ name, image })
        alert("Category added! (form submission logic not implemented)")
    }

    return (
        <div className="max-w-3xl mx-auto">
            {/* Header */}
            <div className="mb-6">
                <h1 className="text-3xl font-semibold text-[#70908B]">
                    Add New Category
                </h1>
                <p className="text-sm text-gray-500 mt-1">
                    Create a new category to organize your products
                </p>
            </div>

            {/* Card */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-[#C4C4C4]/20">
                <form onSubmit={handleSubmit} className="space-y-6">

                    {/* Image Upload */}
                    <div>
                        <h2 className="text-sm font-medium text-gray-600 mb-2">
                            Category Image
                        </h2>
                        <ImageInput
                            onImageSelect={handleImageSelect}
                            maxSizeMB={10}
                        />
                        <p className="text-xs text-gray-400 mt-2">
                            Recommended size: square image, max 10MB
                        </p>
                    </div>

                    {/* Category Name */}
                    <InputField
                        label="Category Name"
                        placeholder="e.g. Beverages, Desserts"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    {/* Actions */}
                    <div className="flex justify-end gap-3 pt-6 border-t border-gray-100">
                        <button
                            type="button"
                            className="px-6 py-2.5 rounded-xl border border-[#C4C4C4]/40 text-gray-600 hover:bg-gray-50 transition"
                            onClick={() => router.back()}
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            disabled={!name || !image}
                            className="px-6 py-2.5 bg-[#70908B] text-white rounded-xl 
                                       hover:bg-[#70908B]/90 transition
                                       disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            Save Category
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
