export default function CategoryGrid() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

            {/* Highlight card */}
            <div className="bg-[#b7b7b7] rounded-xl h-56 flex flex-col items-center justify-center text-white">
                <h2 className="text-2xl font-serif mb-4">Bedroom</h2>
                <button className="px-6 py-2 bg-white text-[#0b3d3a] rounded-md text-sm">
                    Explore
                </button>
            </div>

            {/* Other placeholders */}
            {[...Array(5)].map((_, i) => (
                <div
                    key={i}
                    className="bg-[#e0e0df] rounded-xl h-56"
                />
            ))}
        </div>
    )
}
