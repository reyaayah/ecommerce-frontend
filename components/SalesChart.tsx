"use client"

import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
} from 'chart.js';
import { PRIMARY_COLOR } from '@/constants/colors';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

export default function SalesChart() {
    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                label: 'Sales',
                data: [3000, 4500, 3200, 5100, 4900, 6000, 5500, 7200, 6800, 8100, 7500, 9000],
                borderColor: PRIMARY_COLOR,
                backgroundColor: 'rgba(112, 144, 139, 0.1)',
                tension: 0.4,
                fill: true,
                pointBackgroundColor: PRIMARY_COLOR,
                pointBorderColor: '#fff',
                pointBorderWidth: 2,
                pointRadius: 5,
                pointHoverRadius: 7,
            }
        ]
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                backgroundColor: PRIMARY_COLOR,
                padding: 12,
                titleColor: '#fff',
                bodyColor: '#E0EFF6',
                borderColor: '#E0EFF6',
                borderWidth: 1,
                displayColors: false,
                callbacks: {
                    label: (context: any) => `$${context.parsed.y.toLocaleString()}`
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    color: '#E0EFF6',
                    drawBorder: false,
                },
                ticks: {
                    color: '#C4C4C4',
                    callback: (value: any) => `$${value / 1000}k`
                }
            },
            x: {
                grid: {
                    display: false,
                },
                ticks: {
                    color: '#C4C4C4'
                }
            }
        }
    };

    return (
        <div className="bg-white rounded-2xl shadow-lg border border-[#C4C4C4]/20 p-6">
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h3 className={`text-lg font-bold text-[${PRIMARY_COLOR}]`}>Sales Overview</h3>
                    <p className="text-sm text-slate-600 mt-1">Monthly revenue trends</p>
                </div>
                <div className="flex gap-2">
                    <button className={`px-4 py-2 text-sm font-medium text-white bg-[${PRIMARY_COLOR}] rounded-lg hover:bg-[${PRIMARY_COLOR}]/90 transition-colors`}>
                        This Year
                    </button>
                    <button className="px-4 py-2 text-sm font-medium text-slate-600 bg-[#E0EFF6] rounded-lg hover:bg-[#E0EFF6]/80 transition-colors">
                        Last Year
                    </button>
                </div>
            </div>

            <div className="h-80">
                <Line data={data} options={options} />
            </div>
        </div>
    );
}