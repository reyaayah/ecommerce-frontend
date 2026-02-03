import SalesChart from "@/components/SalesChart";
import StatCard from "@/components/StatCard";


export default function DashboardPage() {
    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold">Dashboard</h2>


            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <StatCard title="Revenue" value="$12,430" />
                <StatCard title="Orders" value="320" />
                <StatCard title="Products" value="85" />
                <StatCard title="Users" value="1,240" />
            </div>


            <SalesChart />
        </div>
    )
}