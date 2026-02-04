import { ReactNode } from "react"

interface PrimaryButtonProps {
    children: ReactNode
    onClick?: () => void
    icon?: ReactNode
    type?: "button" | "submit" | "reset"
    className?: string
    disabled?: boolean
}

export default function PrimaryButton({
    children,
    onClick,
    icon,
    type = "button",
    className = "",
    disabled = false,
}: PrimaryButtonProps) {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`
        px-6 py-2.5
        bg-[#70908B] text-white
        rounded-xl font-medium
        flex items-center gap-2
        shadow-lg shadow-[#70908B]/30
        transition-colors
        hover:bg-[#70908B]/90
        disabled:opacity-50 disabled:cursor-not-allowed
        ${className}
      `}
        >
            {icon && <span className="flex items-center">{icon}</span>}
            {children}
        </button>
    )
}
