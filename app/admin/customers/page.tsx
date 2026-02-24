"use client";

import CustomerOverviewChart from "@/components/charts/CustomerChart";
import CustomerProfile from "@/components/modals/CustomerProfile";
import StatCard from "@/components/StatCard";
import CustomerTable from "@/components/table/CustomerTable";
import PageHeader from "@/components/ui/PageHeader";
import { MoreVertical } from "lucide-react";
import { useState } from "react";

export default function CustomersPage() {
    const [selectedCustomer, setSelectedCustomer] = useState<any>(null);
    const [searchQuery, setSearchQuery] = useState("")
    const [page, setPage] = useState(1)
    return (
        <div className="min-h-screen ">
            {/* Header */}
            <PageHeader
                title="Customers"
                searchValue={searchQuery}
                onSearchChange={setSearchQuery}
                showSearch
                showBell
                showFilter
            />

            {/* Top Section */}
            <div className="grid grid-cols-12 gap-6 mb-6">
                {/* Left Stats */}
                <div className="col-span-3 space-y-6">
                    <StatCard
                        title="Total Customers"
                        value="11,040"
                    />
                    <StatCard
                        title="New Customers"
                        value="2,370"
                    />
                    <StatCard
                        title="Visitor"
                        value="250K"
                    />
                </div>

                {/* Customer Overview Chart Placeholder */}
                <div className="col-span-9 ">


                    <CustomerOverviewChart />
                </div>
            </div>


            <div className="">
                <h1 className="text-2xl font-semibold mb-6">Customer Details</h1>

                <div className="grid grid-cols-12 gap-6">
                    {/* Left Table */}
                    <div className="col-span-12 lg:col-span-8 ">
                        <CustomerTable onSelect={setSelectedCustomer} />
                    </div>

                    {/* Right Profile */}
                    <div className="col-span-12 lg:col-span-4">
                        <CustomerProfile customer={selectedCustomer} />
                    </div>
                </div>
            </div>
        </div>
    );
}