"use client";

import Pagination from "../ui/Pagination.tsx";

interface Props {
    onSelect: (customer: any) => void;
}

const customers = [
    {
        id: "CUST001",
        name: "John Doe",
        phone: "+1234567890",
        orders: 25,
        spend: 3450,
        status: "Active",
    },
    {
        id: "CUST002",
        name: "Jane Smith",
        phone: "+1234567890",
        orders: 5,
        spend: 250,
        status: "Inactive",
    },
    {
        id: "CUST003",
        name: "Emily Davis",
        phone: "+1234567890",
        orders: 30,
        spend: 4600,
        status: "VIP",
    },
];

export default function CustomerTable({ onSelect }: Props) {
    const getStatusStyle = (status: string) => {
        if (status === "Active")
            return "bg-green-50 text-green-600";
        if (status === "VIP")
            return "bg-yellow-50 text-yellow-600";
        return "bg-red-50 text-red-600";
    };

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            {/* Table */}
            <div className="overflow-x-auto">
                <table className="w-full text-sm">
                    {/* Header */}
                    <thead className="bg-green-50 text-gray-600 text-xs uppercase tracking-wide">
                        <tr>
                            <th className="px-6 py-4 text-left">Customer Id</th>
                            <th className="px-6 py-4 text-left">Name</th>
                            <th className="px-6 py-4 text-left">Phone</th>
                            <th className="px-6 py-4 text-left">Orders</th>
                            <th className="px-6 py-4 text-left">Total Spend</th>
                            <th className="px-6 py-4 text-left">Status</th>
                        </tr>
                    </thead>

                    {/* Body */}
                    <tbody className="divide-y">
                        {customers.map((c) => (
                            <tr
                                key={c.id}
                                className="hover:bg-gray-50 cursor-pointer transition"
                                onClick={() => onSelect(c)}
                            >
                                <td className="px-6 py-4 font-medium text-gray-700">
                                    #{c.id}
                                </td>

                                <td className="px-6 py-4">{c.name}</td>

                                <td className="px-6 py-4 text-gray-500">
                                    {c.phone}
                                </td>

                                <td className="px-6 py-4">{c.orders}</td>

                                <td className="px-6 py-4 font-medium">
                                    ${c.spend.toLocaleString()}
                                </td>

                                <td className="px-6 py-4">
                                    <span
                                        className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusStyle(
                                            c.status
                                        )}`}
                                    >
                                        {c.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            <Pagination
                currentPage={1}
                totalPages={5}
                onPageChange={(page) => console.log("Go to page:", page)}
            />
        </div>
    );
}