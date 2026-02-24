export default function CustomerStats() {
    const stats = [
        { title: "Total Customers", value: "1,250" },
        { title: "Active Customers", value: "980" },
        { title: "VIP Customers", value: "120" },
        { title: "New This Month", value: "85" },
    ];

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat) => (
                <div
                    key={stat.title}
                    className="bg-white p-5 rounded-xl shadow-sm"
                >
                    <p className="text-sm text-gray-500">{stat.title}</p>
                    <h3 className="text-xl font-semibold mt-1">{stat.value}</h3>
                </div>
            ))}
        </div>
    );
}