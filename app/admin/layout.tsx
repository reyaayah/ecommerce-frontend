import Sidebar from "@/components/SideBar";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex h-screen bg-slate-100 overflow-hidden">
            <Sidebar />

            <div className="flex-1 h-screen overflow-y-auto no-scrollbar">
                <main className="p-6">
                    {children}
                </main>
            </div>

        </div>
    )
}
