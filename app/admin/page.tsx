import SalesChart from "@/components/SalesChart"
import StatCard from "@/components/StatCard"
import { PRIMARY_COLOR } from "@/constants/colors"
import { TrendingUp, ShoppingBag, Package, Users } from "lucide-react"


export default function DashboardPage() {
    return (
        <div
            className="min-h-screen"
        >
            {/* Header */}
            <div className="mb-8">
                <h2
                    className="text-3xl font-bold mb-2"
                    style={{ color: PRIMARY_COLOR }}
                >
                    Dashboard
                </h2>
                <p className="text-slate-600">
                    Welcome back! Here's what's happening with your store today.
                </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <StatCard
                    title="Revenue"
                    value="$12,430"
                    icon={TrendingUp}
                    trend="+12.5%"
                    trendUp={true}
                />
                <StatCard
                    title="Orders"
                    value="320"
                    icon={ShoppingBag}
                    trend="+8.2%"
                    trendUp={true}
                />
                <StatCard
                    title="Products"
                    value="85"
                    icon={Package}
                    trend="+3.1%"
                    trendUp={true}
                />
                <StatCard
                    title="Users"
                    value="1,240"
                    icon={Users}
                    trend="+15.3%"
                    trendUp={true}
                />
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                    <SalesChart />
                </div>

                {/* Quick Stats Card */}
                <div className="bg-white rounded-2xl shadow-lg p-6 border border-slate-200/50">
                    <h3
                        className="text-lg font-bold mb-6"
                        style={{ color: PRIMARY_COLOR }}
                    >
                        Quick Stats
                    </h3>

                    <div className="space-y-4">
                        <div className="flex items-center justify-between pb-4 border-b border-[#E0EFF6]">
                            <span className="text-sm text-slate-600">
                                Pending Orders
                            </span>
                            <span
                                className="text-lg font-bold"
                                style={{ color: PRIMARY_COLOR }}
                            >
                                23
                            </span>
                        </div>

                        <div className="flex items-center justify-between pb-4 border-b border-[#E0EFF6]">
                            <span className="text-sm text-slate-600">
                                Low Stock Items
                            </span>
                            <span className="text-lg font-bold text-orange-500">
                                5
                            </span>
                        </div>

                        <div className="flex items-center justify-between pb-4 border-b border-[#E0EFF6]">
                            <span className="text-sm text-slate-600">
                                New Customers
                            </span>
                            <span
                                className="text-lg font-bold"
                                style={{ color: PRIMARY_COLOR }}
                            >
                                47
                            </span>
                        </div>

                        <div className="flex items-center justify-between">
                            <span className="text-sm text-slate-600">
                                Conversion Rate
                            </span>
                            <span className="text-lg font-bold text-green-500">
                                3.2%
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
