// components/home/BenefitsSection.tsx
import { CreditCard, RotateCcw, Headphones } from "lucide-react"

const benefits = [
    {
        icon: CreditCard,
        title: "Payment Method",
        desc: "We offer flexible payment options, for your ease.",
    },
    {
        icon: RotateCcw,
        title: "Return policy",
        desc: "You can return a product within 30 days.",
    },
    {
        icon: Headphones,
        title: "Customer Support",
        desc: "Our customer support is 24/7.",
    },
]

export default function BenefitsSection() {
    return (
        <section className="bg-[#c9dde0] py-16">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <h2 className="text-2xl font-serif text-teal-900 mb-10">
                    Benefits for your expediency
                </h2>

                <div className="grid md:grid-cols-3 gap-10">
                    {benefits.map((item, index) => {
                        const Icon = item.icon
                        return (
                            <div key={index} className="flex flex-col items-center">
                                <div className="bg-white p-4 rounded-xl shadow-sm mb-4">
                                    <Icon className="text-teal-700" size={28} />
                                </div>
                                <h4 className="font-semibold text-teal-900">{item.title}</h4>
                                <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
