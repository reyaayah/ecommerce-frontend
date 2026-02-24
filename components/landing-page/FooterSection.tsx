export default function Footer() {
    return (
        <footer className="bg-[#f5f6f4] pt-12 pb-6">
            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-10 text-sm">
                <div>
                    <h3 className="font-semibold text-teal-900 mb-3">INWOOD</h3>
                    <p className="text-gray-600">
                        21st Street, NY <br />
                        United States
                    </p>
                </div>

                <div>
                    <h4 className="font-semibold text-teal-900 mb-3">My Account</h4>
                    <ul className="space-y-2 text-gray-600">
                        <li>Sign in</li>
                        <li>Register</li>
                        <li>Order Status</li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-semibold text-teal-900 mb-3">Help</h4>
                    <ul className="space-y-2 text-gray-600">
                        <li>Shipping</li>
                        <li>Returns</li>
                        <li>Sizing</li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-semibold text-teal-900 mb-3">Shop</h4>
                    <ul className="space-y-2 text-gray-600">
                        <li>All Products</li>
                        <li>Bedroom</li>
                        <li>Dining Room</li>
                    </ul>
                </div>
            </div>

            <p className="text-center text-gray-500 text-xs mt-10">
                © 2026 INWOOD. All rights reserved.
            </p>
        </footer>
    )
}
