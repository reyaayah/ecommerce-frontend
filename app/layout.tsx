import { Toaster } from "react-hot-toast";
import "./globals.css";

export const metadata = {
  title: "Next E-commerce",
  description: "Modern ecommerce with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Toaster position="top-right" reverseOrder={false} />
        {children}
      </body>
    </html>
  );
}
