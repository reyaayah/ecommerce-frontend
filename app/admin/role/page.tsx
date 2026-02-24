"use client";

import { useState, useRef, useCallback } from "react";
import {
    Search, Bell, Settings, Pencil, Share2, Copy, Plus,
    Eye, EyeOff, ChevronDown, Calendar, Camera, X,
    ImagePlus, Maximize2, AlertCircle, CheckCircle2,
} from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";

const DEFAULT_AVATAR = "https://randomuser.me/api/portraits/men/32.jpg";

export default function AdminProfile() {
    const [searchQuery, setSearchQuery] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [avatarSrc, setAvatarSrc] = useState(DEFAULT_AVATAR);
    const [showUploadModal, setShowUploadModal] = useState(false);
    const [dragOver, setDragOver] = useState(false);
    const [uploadPreview, setUploadPreview] = useState<string | null>(null);
    const [uploadFileName, setUploadFileName] = useState<string>("");
    const [uploadError, setUploadError] = useState<string>("");
    const [uploadSuccess, setUploadSuccess] = useState(false);
    const modalFileInputRef = useRef<HTMLInputElement>(null);

    const ACCEPTED_TYPES = ["image/jpeg", "image/png", "image/gif", "image/webp"];
    const MAX_SIZE_MB = 5;

    const processFile = (file: File) => {
        setUploadError("");
        if (!ACCEPTED_TYPES.includes(file.type)) {
            setUploadError("Only JPG, PNG, GIF, or WEBP images are allowed.");
            return;
        }
        if (file.size > MAX_SIZE_MB * 1024 * 1024) {
            setUploadError(`File size must be under ${MAX_SIZE_MB}MB.`);
            return;
        }
        const reader = new FileReader();
        reader.onload = (e) => {
            setUploadPreview(e.target?.result as string);
            setUploadFileName(file.name);
        };
        reader.readAsDataURL(file);
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) processFile(file);
        e.target.value = "";
    };

    const handleDrop = useCallback((e: React.DragEvent) => {
        e.preventDefault();
        setDragOver(false);
        const file = e.dataTransfer.files?.[0];
        if (file) processFile(file);
    }, []);

    const handleConfirmUpload = () => {
        if (uploadPreview) {
            setAvatarSrc(uploadPreview);
            setUploadSuccess(true);
            setTimeout(() => {
                setShowUploadModal(false);
                setUploadPreview(null);
                setUploadFileName("");
                setUploadSuccess(false);
            }, 1200);
        }
    };

    const handleDelete = () => setAvatarSrc(DEFAULT_AVATAR);

    const openModal = () => {
        setUploadPreview(null);
        setUploadFileName("");
        setUploadError("");
        setUploadSuccess(false);
        setShowUploadModal(true);
    };

    return (
        <div className="min-h-screen bg-[#f5f6fa] font-sans">
            <PageHeader
                title="Admin Profile"
                searchValue={searchQuery}
                onSearchChange={setSearchQuery}
                showSearch
                showBell
                showFilter
            />

            {/* Page Title */}
            <div className="px-8 py-5">
                <h1 className="text-lg font-semibold text-gray-800">About section</h1>
            </div>

            {/* Main Content */}
            <div className="px-8 pb-10 grid grid-cols-[280px_1fr] gap-6">
                {/* Left Column */}
                <div className="space-y-4">

                    {/* Profile Card */}
                    <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-sm font-semibold text-gray-700">Profile</span>
                            <div className="flex gap-2">
                                <button className="p-1 hover:bg-gray-100 rounded transition">
                                    <Pencil className="w-4 h-4 text-gray-400" />
                                </button>
                                <button className="p-1 hover:bg-gray-100 rounded transition">
                                    <Share2 className="w-4 h-4 text-gray-400" />
                                </button>
                            </div>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <img
                                src={avatarSrc}
                                alt="Wade Warren"
                                className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-md mb-3"
                            />
                            <h2 className="font-semibold text-gray-800">Wade Warren</h2>
                            <div className="flex items-center gap-1 mt-1">
                                <span className="text-xs text-gray-400">wade.warren@example.com</span>
                                <button className="p-0.5 hover:bg-gray-100 rounded">
                                    <Copy className="w-3 h-3 text-gray-400" />
                                </button>
                            </div>
                            <p className="text-xs text-gray-400 mt-3 mb-2">Linked with Social media</p>
                            <div className="flex items-center gap-2">
                                <div className="flex items-center gap-1 bg-gray-50 rounded-full px-2 py-1 border border-gray-200">
                                    <span className="text-xs">▶</span>
                                    <span className="text-xs text-gray-500">Linked</span>
                                </div>
                                <div className="flex items-center gap-1 bg-gray-50 rounded-full px-2 py-1 border border-gray-200">
                                    <span className="text-xs text-blue-600 font-bold">f</span>
                                    <span className="text-xs text-gray-500">Linked</span>
                                </div>
                                <div className="flex items-center gap-1 bg-gray-50 rounded-full px-2 py-1 border border-gray-200">
                                    <span className="text-xs font-bold">𝕏</span>
                                    <span className="text-xs text-gray-500">Linked</span>
                                </div>
                            </div>
                            <button className="mt-3 flex items-center gap-1.5 text-xs text-gray-500 hover:text-gray-700 transition">
                                <Plus className="w-3.5 h-3.5" />
                                Social media
                            </button>
                        </div>
                    </div>

                    {/* Change Password Card */}
                    <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-sm font-semibold text-gray-700">Change Password</span>
                            <button className="text-xs text-emerald-600 hover:underline">Need help ⓘ</button>
                        </div>
                        <div className="space-y-3">
                            <div>
                                <label className="text-xs text-gray-500 mb-1 block">Current Password</label>
                                <div className="relative">
                                    <input type="password" placeholder="Enter password" className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition pr-10" />
                                    <button className="absolute right-3 top-2.5"><Eye className="w-4 h-4 text-gray-400" /></button>
                                </div>
                                <button className="text-xs text-emerald-600 hover:underline mt-1">Forgot Current Password? Click here</button>
                            </div>
                            <div>
                                <label className="text-xs text-gray-500 mb-1 block">New Password</label>
                                <div className="relative">
                                    <input type="password" placeholder="Enter password" className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition pr-10" />
                                    <button className="absolute right-3 top-2.5"><Eye className="w-4 h-4 text-gray-400" /></button>
                                </div>
                            </div>
                            <div>
                                <label className="text-xs text-gray-500 mb-1 block">Re-enter Password</label>
                                <div className="relative">
                                    <input type="password" placeholder="Enter password" className="w-full text-sm border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition pr-10" />
                                    <button className="absolute right-3 top-2.5"><Eye className="w-4 h-4 text-gray-400" /></button>
                                </div>
                            </div>
                            <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-medium py-2.5 rounded-xl transition mt-1">
                                Save Change
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right Column */}
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                    <div className="flex items-center justify-between mb-5">
                        <h2 className="text-sm font-semibold text-gray-700">Profile Update</h2>
                        <button className="flex items-center gap-1.5 text-sm text-emerald-600 hover:text-emerald-700 font-medium transition">
                            <Pencil className="w-4 h-4" />
                            Edit
                        </button>
                    </div>

                    {/* Avatar Upload */}
                    <div className="flex items-center gap-3 mb-6">
                        <div className="relative group">
                            <img
                                src={avatarSrc}
                                alt="avatar"
                                className="w-14 h-14 rounded-full object-cover border-4 border-white shadow"
                            />
                            <button
                                onClick={openModal}
                                className="absolute inset-0 rounded-full bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center"
                            >
                                <Camera className="w-5 h-5 text-white" />
                            </button>
                        </div>
                        <button
                            onClick={openModal}
                            className="bg-emerald-500 hover:bg-emerald-600 active:scale-95 text-white text-sm font-medium px-4 py-2 rounded-xl transition"
                        >
                            Upload New
                        </button>
                        <button
                            onClick={handleDelete}
                            className="border border-gray-200 text-gray-600 text-sm px-4 py-2 rounded-xl hover:bg-red-50 hover:border-red-200 hover:text-red-500 active:scale-95 transition"
                        >
                            Delete
                        </button>
                    </div>

                    {/* Form Grid */}
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="text-xs text-gray-500 mb-1.5 block">First Name</label>
                            <input defaultValue="Wade" className="w-full text-sm border border-gray-200 rounded-xl px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition" />
                        </div>
                        <div>
                            <label className="text-xs text-gray-500 mb-1.5 block">Last Name</label>
                            <input defaultValue="Warren" className="w-full text-sm border border-gray-200 rounded-xl px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition" />
                        </div>
                        <div>
                            <label className="text-xs text-gray-500 mb-1.5 block">Password</label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    defaultValue="password1234"
                                    className="w-full text-sm border border-gray-200 rounded-xl px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition pr-10"
                                />
                                <button className="absolute right-3 top-2.5" onClick={() => setShowPassword(!showPassword)}>
                                    {showPassword ? <EyeOff className="w-4 h-4 text-gray-400" /> : <Eye className="w-4 h-4 text-gray-400" />}
                                </button>
                            </div>
                        </div>
                        <div>
                            <label className="text-xs text-gray-500 mb-1.5 block">Phone Number</label>
                            <div className="flex">
                                <div className="flex items-center gap-1 border border-r-0 border-gray-200 rounded-l-xl px-2.5 bg-gray-50">
                                    <span className="text-base">🇺🇸</span>
                                    <ChevronDown className="w-3 h-3 text-gray-400" />
                                </div>
                                <input defaultValue="(406) 555-0120" className="flex-1 text-sm border border-gray-200 rounded-r-xl px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition" />
                            </div>
                        </div>
                        <div>
                            <label className="text-xs text-gray-500 mb-1.5 block">E-mail</label>
                            <input defaultValue="wade.warren@example.com" className="w-full text-sm border border-gray-200 rounded-xl px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition" />
                        </div>
                        <div>
                            <label className="text-xs text-gray-500 mb-1.5 block">Date of Birth</label>
                            <div className="relative">
                                <input defaultValue="12- January- 1999" className="w-full text-sm border border-gray-200 rounded-xl px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition pr-10" />
                                <button className="absolute right-3 top-2.5">
                                    <Calendar className="w-4 h-4 text-gray-400" />
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="mt-4">
                        <label className="text-xs text-gray-500 mb-1.5 block">Location</label>
                        <input defaultValue="2972 Westheimer Rd. Santa Ana, Illinois 85486" className="w-full text-sm border border-gray-200 rounded-xl px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition" />
                    </div>

                    <div className="mt-4">
                        <label className="text-xs text-gray-500 mb-1.5 block">Credit Card</label>
                        <div className="flex items-center border border-gray-200 rounded-xl px-3 py-2.5">
                            <div className="flex mr-2">
                                <div className="w-6 h-6 bg-red-500 rounded-full opacity-90"></div>
                                <div className="w-6 h-6 bg-yellow-400 rounded-full -ml-3 opacity-90"></div>
                            </div>
                            <span className="text-sm text-gray-700 flex-1">843-4359-4444</span>
                            <ChevronDown className="w-4 h-4 text-gray-400" />
                        </div>
                    </div>

                    <div className="mt-4">
                        <label className="text-xs text-gray-500 mb-1.5 block">Biography</label>
                        <div className="relative">
                            <textarea
                                placeholder="Enter a biography about you"
                                rows={3}
                                className="w-full text-sm border border-gray-200 rounded-xl px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition resize-none"
                            />
                            <div className="absolute bottom-2 right-2 flex gap-1.5">
                                <button className="p-1 hover:bg-gray-100 rounded transition">
                                    <Pencil className="w-4 h-4 text-gray-400" />
                                </button>
                                <button className="p-1 hover:bg-gray-100 rounded transition">
                                    <Maximize2 className="w-4 h-4 text-gray-400" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Upload Modal */}
            {showUploadModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
                    <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md mx-4 overflow-hidden animate-in">
                        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
                            <h3 className="font-semibold text-gray-800">Upload Profile Photo</h3>
                            <button
                                onClick={() => setShowUploadModal(false)}
                                className="p-1.5 hover:bg-gray-100 rounded-lg transition text-gray-400 hover:text-gray-600"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        <div className="p-6 space-y-4">
                            <div
                                onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
                                onDragLeave={() => setDragOver(false)}
                                onDrop={handleDrop}
                                onClick={() => modalFileInputRef.current?.click()}
                                className={`relative border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-all
                  ${dragOver
                                        ? "border-emerald-400 bg-emerald-50 scale-[1.01]"
                                        : "border-gray-200 hover:border-emerald-300 hover:bg-gray-50"
                                    }`}
                            >
                                <input
                                    ref={modalFileInputRef}
                                    type="file"
                                    accept="image/jpeg,image/png,image/gif,image/webp"
                                    className="hidden"
                                    onChange={handleFileChange}
                                />
                                {uploadPreview ? (
                                    <div className="flex flex-col items-center gap-3">
                                        <img
                                            src={uploadPreview}
                                            alt="Preview"
                                            className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-lg ring-2 ring-emerald-400"
                                        />
                                        <span className="text-sm text-gray-500 truncate max-w-[200px]">{uploadFileName}</span>
                                        <span className="text-xs text-emerald-600 font-medium">Click or drag to replace</span>
                                    </div>
                                ) : (
                                    <div className="flex flex-col items-center gap-3">
                                        <div className="w-14 h-14 bg-emerald-50 rounded-full flex items-center justify-center">
                                            <ImagePlus className="w-7 h-7 text-emerald-500" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium text-gray-700">
                                                Drop your photo here, or <span className="text-emerald-600">browse</span>
                                            </p>
                                            <p className="text-xs text-gray-400 mt-1">JPG, PNG, GIF, WEBP up to 5MB</p>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {uploadError && (
                                <div className="flex items-center gap-2 bg-red-50 border border-red-200 text-red-600 text-sm px-3 py-2.5 rounded-xl">
                                    <AlertCircle className="w-4 h-4 shrink-0" />
                                    {uploadError}
                                </div>
                            )}

                            {uploadSuccess && (
                                <div className="flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-600 text-sm px-3 py-2.5 rounded-xl">
                                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                                    Photo updated successfully!
                                </div>
                            )}

                            <div className="flex gap-3 pt-1">
                                <button
                                    onClick={() => setShowUploadModal(false)}
                                    className="flex-1 border border-gray-200 text-gray-600 text-sm font-medium py-2.5 rounded-xl hover:bg-gray-50 active:scale-95 transition"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={handleConfirmUpload}
                                    disabled={!uploadPreview || uploadSuccess}
                                    className={`flex-1 text-white text-sm font-medium py-2.5 rounded-xl active:scale-95 transition
                    ${uploadPreview && !uploadSuccess
                                            ? "bg-emerald-500 hover:bg-emerald-600"
                                            : "bg-gray-200 text-gray-400 cursor-not-allowed"
                                        }`}
                                >
                                    {uploadSuccess ? "Saved!" : "Save Photo"}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}