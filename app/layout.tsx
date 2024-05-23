import type { Metadata } from "next";
import { Allerta_Stencil } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Toaster } from "sonner";

const allerta = Allerta_Stencil({
  weight: ["400"],
  subsets: ["latin"],
  preload: false,
});

export const metadata: Metadata = {
  title: "Missing",
  description: "Missing Persons App",
  icons: {
    icon: ["/favicon.ico?v=4"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${allerta.className} bg-gray-200 relative `}>
        <Toaster position="bottom-right" />
        <Navbar />
        <main className="text-cream relative overflow-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
