import Sidebar from "@/components/SideBar";



export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex min-h-screen bg-slate-100">
            <Sidebar />
            <div className="flex-1">
                {/* <Topbar /> */}
                <main className="p-6">{children}</main>
            </div>
        </div>
    )
}