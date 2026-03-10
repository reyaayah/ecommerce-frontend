"use client"

import { useState } from "react"
import { X } from "lucide-react"
import { PRIMARY_COLOR, SECONDARY_COLOR } from "@/constants/colors"
import { loginUser, registerUser } from "@/services/auth"
import toast from "react-hot-toast"

interface Props {
    isOpen: boolean
    onClose: () => void
}

export default function AuthModal({ isOpen, onClose }: Props) {
    const [isLogin, setIsLogin] = useState(true)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [loading, setLoading] = useState(false)

    if (!isOpen) return null

    const handleRegister = async () => {
        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        try {
            setLoading(true);
            await registerUser({ name, email, password });
            toast.success("Account created successfully!");
            setIsLogin(true);
        } catch (error: any) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    const handleLogin = async () => {
        try {
            setLoading(true);
            const data = await loginUser({ email, password });
            toast.success("Logged in successfully!");
            console.log("Login response:", data);
            onClose();

        } catch (error: any) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="fixed inset-0 z-50 flex justify-end items-start bg-black/30">

            <div className="w-full max-w-sm bg-white shadow-lg m-4 rounded-lg p-6 relative animate-slideDown">
                <button onClick={onClose} className="absolute right-4 top-4">
                    <X size={18} />
                </button>

                <h2 className="text-lg font-semibold mb-4">
                    {isLogin ? "Welcome Back" : "Create Account"}
                </h2>

                {isLogin ? (
                    <>
                        <div className="mb-4">
                            <label className="text-sm font-medium">Email</label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full border-b py-2 outline-none"
                            />
                        </div>

                        {/* Password */}
                        <div className="mb-4">
                            <label className="text-sm font-medium">Password</label>
                            <input
                                type="password"
                                placeholder="Enter password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}

                                className="w-full border-b py-2 outline-none"
                            />
                        </div>

                        <p className="text-sm mb-4">
                            Don’t have an account?{" "}
                            <button
                                onClick={() => setIsLogin(false)}
                                className="underline"
                            >
                                Sign up
                            </button>
                        </p>

                        <button
                            onClick={handleLogin}
                            disabled={loading}
                            style={{ backgroundColor: PRIMARY_COLOR }}
                            className="w-full text-white py-3 rounded"
                        >
                            {loading ? "Logging in..." : "Login"}
                        </button>
                    </>
                ) : (
                    <>
                        {/* SIGNUP FORM */}

                        {/* Name */}
                        <div className="mb-4">
                            <label className="text-sm font-medium">Full Name</label>
                            <input
                                type="text"
                                placeholder="John Doe"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full border-b py-2 outline-none"
                            />
                        </div>

                        {/* Email */}
                        <div className="mb-4">
                            <label className="text-sm font-medium">Email</label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full border-b py-2 outline-none"
                            />
                        </div>

                        {/* Role */}
                        {/* <div className="mb-4">
                            <label className="text-sm font-medium">Role</label>
                            <select className="w-full border-b py-2 outline-none bg-transparent">
                                <option value="customer">Customer</option>
                                <option value="seller">Seller</option>
                            </select>
                        </div> */}

                        {/* Password */}
                        <div className="mb-4">
                            <label className="text-sm font-medium">Password</label>
                            <input
                                type="password"
                                placeholder="Create password"
                                value={password}
                                onChange={(e) => { setPassword(e.target.value) }}
                                className="w-full border-b py-2 outline-none"
                            />
                        </div>

                        {/* Confirm Password */}
                        <div className="mb-4">
                            <label className="text-sm font-medium">Confirm Password</label>
                            <input
                                type="password"
                                placeholder="Confirm password"
                                value={confirmPassword}
                                onChange={(e) => { setConfirmPassword(e.target.value) }}
                                className="w-full border-b py-2 outline-none"
                            />
                        </div>

                        <p className="text-sm mb-4">
                            Already have an account?{" "}
                            <button
                                onClick={() => setIsLogin(true)}
                                className="underline"
                            >
                                Login
                            </button>
                        </p>
                        <button
                            onClick={handleRegister}
                            disabled={loading}
                            style={{ backgroundColor: PRIMARY_COLOR }}
                            className="w-full text-white py-3 rounded"
                        >
                            {loading ? "Creating..." : "Sign Up"}
                        </button>
                    </>
                )}
            </div>

            {/* Animation */}
            <style jsx>{`
        .animate-slideDown {
          animation: slideDown 0.2s ease;
        }
        @keyframes slideDown {
          from {
            transform: translateY(-10px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
        </div>
    )
}
