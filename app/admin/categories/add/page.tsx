"use client"

import { useState, FormEvent } from "react"
import PrimaryButton from "@/components/buttons/primaryButton"
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
        // TODO: submit form to backend
        console.log({ name, image })
        alert("Category added! (form submission logic not implemented)")
    }

    return (
        <div className="bg-white p-6 rounded-2xl shadow border border-[#C4C4C4]/20">
            <h1 className="text-2xl font-bold text-[#70908B] mb-6">Add Category</h1>

            <form onSubmit={handleSubmit} className="space-y-4">
                <ImageInput
                    onImageSelect={handleImageSelect}
                    maxSizeMB={10}
                    className="my-4"
                />

                <InputField
                    label="Category Name"
                    placeholder="Enter category name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <div className="flex justify-end gap-3 pt-4">
                    <button
                        type="button"
                        className="px-6 py-2.5 rounded-xl border border-[#C4C4C4]/30 hover:bg-[#E0EFF6]"
                        onClick={() => { router.back() }
                        }
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="px-6 py-2.5 bg-[#70908B] text-white rounded-xl hover:bg-[#70908B]/90"
                    >
                        Save Category
                    </button>
                </div>
            </form>
        </div>
    )
}
