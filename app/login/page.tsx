"use client"

import { useState } from "react"
import { Eye, EyeOff, Mail, Lock, ArrowRight, CheckCircle2, ShoppingBag } from "lucide-react"
import { useRouter } from "next/navigation"


export default function LoginPage() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [showPassword, setShowPass] = useState(false)
    const [rememberMe, setRememberMe] = useState(false)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const router = useRouter()
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setError("")
        if (!email || !password) { setError("Please fill in all fields."); return }
        setLoading(true)
        await new Promise((r) => setTimeout(r, 1500))
        setLoading(false)
        router.push("/admin/dashboard")
    }

    const stats = [
        { value: "12.4k", label: "Orders/mo" },
        { value: "$98k", label: "Monthly GMV" },
        { value: "3.2k", label: "Products" },
    ]

    const recentOrders = [
        { id: "#ORD4821", product: "Wireless Headphones", amount: "$49.99", status: "Delivered" },
        { id: "#ORD4820", product: "Men's Sneakers", amount: "$89.00", status: "Pending" },
        { id: "#ORD4819", product: "Coffee Maker Pro", amount: "$79.99", status: "Shipped" },
    ]

    return (
        <div className="min-h-screen flex font-sans bg-[#f5f6fa]">

            {/* ── Left decorative panel ── */}
            <div
                className="hidden lg:flex lg:w-[52%] relative overflow-hidden flex-col"
                style={{ background: "linear-gradient(145deg, #1e3532 0%, #2d4a47 45%, #70908B 100%)" }}
            >
                {/* Background texture */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-[0.07]"
                        style={{ background: "radial-gradient(circle, #E0EFF6 0%, transparent 70%)" }} />
                    <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full opacity-[0.07]"
                        style={{ background: "radial-gradient(circle, #E0EFF6 0%, transparent 70%)" }} />
                    <div className="absolute inset-0 opacity-[0.04]"
                        style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
                    {/* Diagonal stripe accent */}
                    <div className="absolute top-0 left-0 w-full h-full opacity-[0.03]"
                        style={{ backgroundImage: "repeating-linear-gradient(45deg, #fff 0px, #fff 1px, transparent 1px, transparent 40px)" }} />
                </div>

                <div className="relative z-10 flex flex-col h-full px-12 py-10">
                    {/* Brand */}
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-white/15 rounded-2xl flex items-center justify-center border border-white/20 backdrop-blur-sm">
                            <ShoppingBag className="w-5 h-5 text-white" />
                        </div>
                        <div>
                            <span className="text-white font-black text-lg tracking-tight">ShopSphere</span>
                            <span className="block text-white/40 text-[10px] uppercase tracking-widest font-medium">Admin Console</span>
                        </div>
                    </div>

                    {/* Hero */}
                    <div className="mt-16">
                        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-4 py-1.5 mb-6 backdrop-blur-sm">
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                            <span className="text-white/70 text-xs font-medium">All systems operational</span>
                        </div>

                        <h1 className="text-[2.6rem] font-black text-white leading-[1.15] tracking-tight mb-5">
                            Your store.<br />
                            <span className="text-[#b8d4cf]">Your data.</span><br />
                            Full control.
                        </h1>
                        <p className="text-white/50 text-sm leading-relaxed max-w-xs">
                            Manage products, orders, customers and revenue — all from one powerful dashboard built for e-commerce teams.
                        </p>
                    </div>

                    {/* Stats */}
                    <div className="flex items-center gap-8 mt-10 pt-8 border-t border-white/10">
                        {stats.map((s, i) => (
                            <div key={i}>
                                <div className="text-2xl font-black text-white">{s.value}</div>
                                <div className="text-[11px] text-white/40 mt-0.5 font-medium">{s.label}</div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>

            {/* ── Right: login form ── */}
            <div className="flex-1 flex items-center justify-center px-8 py-12">
                <div className="w-full max-w-[400px]">

                    {/* Mobile brand */}
                    <div className="flex lg:hidden items-center gap-2.5 mb-10">
                        <div className="w-9 h-9 bg-[#70908B] rounded-xl flex items-center justify-center">
                            <ShoppingBag className="w-4 h-4 text-white" />
                        </div>
                        <div>
                            <span className="text-slate-800 font-black text-lg">ShopSphere</span>
                            <span className="block text-slate-400 text-[9px] uppercase tracking-widest">Admin Console</span>
                        </div>
                    </div>

                    {/* Heading */}
                    <div className="mb-8">
                        <h2 className="text-[1.9rem] font-black text-slate-800 tracking-tight leading-tight mb-2">
                            Sign in
                        </h2>
                        <p className="text-slate-500 text-sm">
                            Access your e-commerce admin panel.
                        </p>
                    </div>

                    {/* SSO buttons */}
                    <div className="grid grid-cols-2 gap-3 mb-6">
                        {[
                            { icon: "G", label: "Google", color: "text-red-500" },
                            { icon: "f", label: "Facebook", color: "text-blue-600 font-bold" },
                        ].map((btn) => (
                            <button
                                key={btn.label}
                                className="flex items-center justify-center gap-2 px-4 py-2.5 bg-white border border-[#C4C4C4]/30 rounded-xl text-sm font-medium text-slate-700 hover:bg-[#E0EFF6]/50 hover:border-[#70908B]/30 transition-all shadow-sm"
                            >
                                <span className={`text-base ${btn.color}`}>{btn.icon}</span>
                                {btn.label}
                            </button>
                        ))}
                    </div>

                    {/* Divider */}
                    <div className="flex items-center gap-3 mb-6">
                        <div className="flex-1 h-px bg-[#C4C4C4]/30" />
                        <span className="text-xs text-slate-400 font-medium px-1">or continue with email</span>
                        <div className="flex-1 h-px bg-[#C4C4C4]/30" />
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-4">

                        {/* Email */}
                        <div>
                            <label className="text-xs font-semibold text-slate-600 uppercase tracking-wide mb-1.5 block">
                                Email Address
                            </label>
                            <div className="relative">
                                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#C4C4C4]" />
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="admin@shopexample.com"
                                    className="w-full pl-10 pr-4 py-3 bg-white border border-[#C4C4C4]/30 rounded-xl text-sm text-slate-700 placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-[#70908B]/25 focus:border-[#70908B]/50 transition shadow-sm"
                                />
                            </div>
                        </div>

                        {/* Password */}
                        <div>
                            <div className="flex items-center justify-between mb-1.5">
                                <label className="text-xs font-semibold text-slate-600 uppercase tracking-wide">
                                    Password
                                </label>
                                <button type="button" className="text-xs text-[#70908B] hover:text-[#5a7a75] font-semibold hover:underline transition">
                                    Forgot password?
                                </button>
                            </div>
                            <div className="relative">
                                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#C4C4C4]" />
                                <input
                                    type={showPassword ? "text" : "password"}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Enter your password"
                                    className="w-full pl-10 pr-11 py-3 bg-white border border-[#C4C4C4]/30 rounded-xl text-sm text-slate-700 placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-[#70908B]/25 focus:border-[#70908B]/50 transition shadow-sm"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPass(!showPassword)}
                                    className="absolute right-3.5 top-1/2 -translate-y-1/2 p-0.5 rounded hover:bg-slate-100 transition"
                                >
                                    {showPassword
                                        ? <EyeOff className="w-4 h-4 text-slate-400" />
                                        : <Eye className="w-4 h-4 text-slate-400" />}
                                </button>
                            </div>
                        </div>

                        {/* Remember me */}
                        <div className="flex items-center gap-2.5 py-1">
                            <button
                                type="button"
                                onClick={() => setRememberMe(!rememberMe)}
                                className={`w-5 h-5 rounded-md border-2 flex items-center justify-center flex-shrink-0 transition-all ${rememberMe ? "bg-[#70908B] border-[#70908B]" : "border-[#C4C4C4]/50 hover:border-[#70908B]/40 bg-white"
                                    }`}
                            >
                                {rememberMe && <CheckCircle2 className="w-3 h-3 text-white" />}
                            </button>
                            <span
                                className="text-sm text-slate-500 cursor-pointer select-none"
                                onClick={() => setRememberMe(!rememberMe)}
                            >
                                Keep me signed in for 30 days
                            </span>
                        </div>

                        {/* Error */}
                        {error && (
                            <div className="flex items-center gap-2.5 bg-red-50 border border-red-200 text-red-600 text-sm px-4 py-3 rounded-xl">
                                <div className="w-4 h-4 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0">
                                    <span className="text-white text-[9px] font-black">!</span>
                                </div>
                                {error}
                            </div>
                        )}

                        {/* Submit */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full flex items-center justify-center gap-2 py-3.5 bg-[#70908B] hover:bg-[#5a7a75] active:scale-[0.98] text-white font-bold text-sm rounded-xl transition-all shadow-md hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed mt-1"
                        >
                            {loading ? (
                                <>
                                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                    Signing in…
                                </>
                            ) : (
                                <>
                                    Access Dashboard
                                    <ArrowRight className="w-4 h-4" />
                                </>
                            )}
                        </button>
                    </form>


                    <p className="text-center text-xs text-slate-300 mt-6">
                        © 2025 ShopSphere. Secure Admin Portal.
                    </p>
                </div>
            </div>
        </div>
    )
}