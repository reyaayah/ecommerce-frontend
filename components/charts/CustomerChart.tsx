"use client"

import { Line } from "react-chartjs-2"
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend,
    Filler,
} from "chart.js"
import { PRIMARY_COLOR } from "@/constants/colors"

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend,
    Filler
)

export default function CustomerOverviewChart() {
    const labels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

    const data = {
        labels,
        datasets: [
            {
                label: "Customers",
                data: [22000, 38000, 36000, 25409, 45000, 30000, 42000],
                borderColor: PRIMARY_COLOR,
                backgroundColor: (context: any) => {
                    const chart = context.chart
                    const { ctx, chartArea } = chart
                    if (!chartArea) return null

                    const gradient = ctx.createLinearGradient(
                        0,
                        chartArea.top,
                        0,
                        chartArea.bottom
                    )
                    gradient.addColorStop(0, "rgba(112,144,139,0.35)")
                    gradient.addColorStop(1, "rgba(112,144,139,0.05)")
                    return gradient
                },
                tension: 0.4,
                fill: true,
                pointRadius: 0,
                pointHoverRadius: 6,
                pointBackgroundColor: PRIMARY_COLOR,
            },
        ],
    }

    const options: any = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
            tooltip: {
                backgroundColor: PRIMARY_COLOR,
                padding: 10,
                titleColor: "#fff",
                bodyColor: "#E0EFF6",
                displayColors: false,
                callbacks: {
                    label: (context: any) =>
                        `${context.parsed.y.toLocaleString()} Customers`,
                },
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    color: "#E0EFF6",
                    drawBorder: false,
                },
                ticks: {
                    color: "#94a3b8",
                    callback: (value: any) => `${value / 1000}k`,
                },
            },
            x: {
                grid: { display: false },
                ticks: {
                    color: "#94a3b8",
                },
            },
        },
    }

    return (
        <div className="bg-white rounded-2xl shadow-lg border border-[#C4C4C4]/20 p-6">
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-slate-800">
                    Customer Overview
                </h3>

                <div className="flex gap-2">
                    <button
                        className="px-4 py-2 text-sm font-medium text-white rounded-lg transition-colors"
                        style={{ backgroundColor: PRIMARY_COLOR }}
                    >
                        This week
                    </button>
                    <button className="px-4 py-2 text-sm font-medium text-slate-600 bg-[#E0EFF6] rounded-lg hover:bg-[#E0EFF6]/80 transition-colors">
                        Last week
                    </button>
                </div>
            </div>

            <div className="h-72">
                <Line data={data} options={options} />
            </div>
        </div>
    )
}