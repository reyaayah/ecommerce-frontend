"use client"

import { InputHTMLAttributes, ReactNode } from "react"

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string
    error?: string
    icon?: ReactNode
}

export default function InputField({
    label,
    error,
    icon,
    className = "",
    ...props
}: InputFieldProps) {
    return (
        <div className="w-full">
            {label && (
                <label className="block text-sm font-medium text-slate-700 mb-1">
                    {label}
                </label>
            )}
            <div className="relative">
                {icon && <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">{icon}</span>}
                <input
                    className={`
            w-full px-4 py-2.5 rounded-xl border
            border-[#C4C4C4]/30
            focus:outline-none focus:ring-2 focus:ring-[#70908B]/30
            ${icon ? "pl-10" : "pl-4"}
            ${className}
          `}
                    {...props}
                />
            </div>
            {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
        </div>
    )
}
