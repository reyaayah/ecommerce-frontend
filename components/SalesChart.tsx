'use client'


import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'


const data = [
    { name: 'Mon', sales: 1200 },
    { name: 'Tue', sales: 2100 },
    { name: 'Wed', sales: 800 },
    { name: 'Thu', sales: 1600 },
    { name: 'Fri', sales: 2400 }
]


export default function SalesChart() {
    return (
        <div className="bg-white p-5 rounded-xl h-80">
            <h3 className="font-semibold mb-3">Weekly Sales</h3>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="sales" strokeWidth={3} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}