import Image from "next/image"

export default function TestimonialSection() {
    return (
        <section className="bg-[#f5f6f4] py-16">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <h2 className="text-3xl font-serif text-teal-900">Testimonials</h2>
                <p className="text-gray-500 mt-2 mb-10">
                    Over 15,000 happy customers.
                </p>

                <div className="grid md:grid-cols-2 gap-10 items-center text-left">
                    <div className="relative w-full h-[260px] rounded-xl overflow-hidden">
                        <Image
                            src="/customer.png"
                            alt="Customer"
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div>
                        <p className="text-teal-900 text-lg leading-relaxed">
                            “My experience with Mark is a complete success, from customer
                            service, wide range of products, clean store, purchasing
                            experience, the newsletter. Thank you.”
                        </p>

                        <div className="mt-6">
                            <h4 className="font-semibold text-teal-900">Lena Paul</h4>
                            <p className="text-sm text-gray-500">CEO of Flashcom</p>
                        </div>

                        <div className="mt-8 h-[2px] bg-teal-700 w-full"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}
