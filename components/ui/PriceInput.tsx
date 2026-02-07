"use client"

import { InputHTMLAttributes } from "react"

interface PriceInputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string
    helperText?: string
    currency?: string
}

export default function PriceInput({
    label,
    helperText,
    currency = "$",
    ...props
}: PriceInputProps) {
    return (
        <div>
            <label className="text-sm text-slate-600">{label}</label>

            <div className="relative mt-1">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">
                    {currency}
                </span>
                <input
                    {...props}
                    className="w-full pl-7 pr-4 py-2 rounded-lg border border-slate-200 text-sm focus:ring-2 focus:ring-emerald-200 focus:outline-none"
                />
            </div>

            {helperText && (
                <p className="text-xs text-slate-400 mt-1">{helperText}</p>
            )}
        </div>
    )
}
