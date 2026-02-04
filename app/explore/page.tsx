import CategoryGrid from "@/components/explore/CategoryGrid";
import CategorySidebar from "@/components/explore/CategorySidebar";


export default function ExplorePage() {
    return (
        <main className="bg-[#faf9f6] min-h-screen px-6 md:px-12 py-20">
            <h1 className="text-center text-3xl md:text-4xl font-serif font-semibold text-[#0b3d3a] mb-16">
                Explore by Category
            </h1>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[280px_1fr] gap-10">
                <CategorySidebar />
                <CategoryGrid />
            </div>
        </main>
    )
}
