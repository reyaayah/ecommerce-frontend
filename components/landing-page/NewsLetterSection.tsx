import Image from "next/image"

export default function NewsletterSection() {
    return (
        <section className="grid md:grid-cols-2">
            <div className="relative h-[320px]">
                <Image
                    src="/newsletter.png"
                    alt="Newsletter"
                    fill
                    className="object-cover"
                />
            </div>

            <div className="bg-[#b8d1cc] flex items-center px-10 py-12">
                <div className="max-w-md">
                    <h2 className="text-3xl font-serif text-teal-900">
                        Join Our Newsletter
                    </h2>
                    <p className="text-gray-700 mt-3 mb-6">
                        Receive exclusive deals, discounts and many offers.
                    </p>

                    <div className="flex gap-3">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 px-4 py-3 rounded-md border outline-none"
                        />
                        <button className="bg-teal-700 text-white px-6 py-3 rounded-md">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
