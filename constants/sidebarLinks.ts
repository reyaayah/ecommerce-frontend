import {
    LayoutDashboard,
    Box,
    ShoppingCart,
    Users,
    Settings,
    Layers,
    PanelsTopLeft,
} from "lucide-react"
export const links = [
    { name: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },

    {
        name: "Products",
        href: "/admin/products/add",
        icon: Box,
        children: [
            { name: "Add Products", href: "/admin/products/add" },
            { name: "Product Media", href: "/admin/products/media" },
            { name: "Product List", href: "/admin/products/list" },
            { name: "Product Reviews", href: "/admin/products/reviews" },
        ],
    },

    { name: "Orders", href: "/admin/orders", icon: ShoppingCart },
    { name: "Customers", href: "/admin/customers", icon: Users },
    { name: "Categories", href: "/admin/categories", icon: Layers },
    {
        name: "Admin", href: "/admin/role", icon: PanelsTopLeft, children: [
            { name: "Admin Role", href: "/admin/role" },
            { name: "Admin List", href: "/admin/admins/list" },
        ]
    },
    { name: "Transactions", href: "/admin/transactions", icon: ShoppingCart },
    { name: "Settings", href: "/admin/settings", icon: Settings },
]
