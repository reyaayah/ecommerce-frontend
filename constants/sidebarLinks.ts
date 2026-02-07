import {
    LayoutDashboard,
    Box,
    ShoppingCart,
    Users,
    Settings,
    Layers,
} from "lucide-react"
export const links = [
    { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },

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
    { name: "Users", href: "/admin/users", icon: Users },
    { name: "Categories", href: "/admin/categories", icon: Layers },
    { name: "Settings", href: "/admin/settings", icon: Settings },
]
