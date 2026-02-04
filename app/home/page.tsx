export default function Hero() {
    return (
        <section className="relative bg-[#d6d6d4] rounded-b-[2.5rem] overflow-hidden">
            {/* Navbar space compensation */}
            <div className="max-w-7xl mx-auto px-6 md:px-12 pt-28 pb-32">
                <div className="max-w-xl">
                    <h1 className="text-4xl md:text-5xl font-serif font-semibold text-[#0b3d3a] leading-tight">
                        Exclusive Deals of <br />
                        Furniture Collection
                    </h1>

                    <p className="mt-6 text-[#0b3d3a]/80">
                        Explore different categories. Find the best deals.
                    </p>

                    <button className="mt-8 px-6 py-3 bg-[#6f8f88] text-white rounded-md hover:bg-[#5e7d76] transition">
                        Shop Now
                    </button>
                </div>
            </div>
        </section>
    )
}
