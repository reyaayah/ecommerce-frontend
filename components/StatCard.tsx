import { PRIMARY_COLOR } from "@/constants/colors"
import { LucideIcon } from "lucide-react"

interface StatCardProps {
    title: string
    value: string
    icon?: LucideIcon
    trend?: string
    trendUp?: boolean
}

export default function StatCard({
    title,
    value,
    icon: Icon,
    trend,
    trendUp,
}: StatCardProps) {
    return (
        <div className="bg-white rounded-2xl shadow-lg border border-[#C4C4C4]/20 p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-start justify-between mb-4">
                <div>
                    <p className="text-sm text-slate-600 font-medium mb-1">
                        {title}
                    </p>
                    <h3
                        className="text-3xl font-bold"
                        style={{ color: PRIMARY_COLOR }}
                    >
                        {value}
                    </h3>
                </div>

                {Icon && (

                    <Icon color={PRIMARY_COLOR} size={24} />

                )}
            </div>

            {trend && (
                <div className="flex items-center gap-1">
                    <span
                        className={`text-sm font-semibold ${trendUp ? "text-green-500" : "text-red-500"
                            }`}
                    >
                        {trend}
                    </span>
                    <span className="text-xs text-slate-500">
                        from last month
                    </span>
                </div>
            )}
        </div>
    )
}
