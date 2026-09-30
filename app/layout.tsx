import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ShopProvider } from "@/context/ShopContext";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CartDrawer } from "@/components/cart/CartDrawer";
import { SearchModal } from "@/components/common/SearchModal";
import { WhatsAppFloatingButton } from "@/components/layout/WhatsAppFloatingButton";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SilkAura | Pure Handwoven Silk Sarees & Ethnic Heritage",
  description:
    "Explore authentic Kanchipuram, Mysore, Banarasi, and Tussar pure silk sarees with Silk Mark certification. Grace in every drape.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${jakarta.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#faf7f2] text-gray-900 font-sans selection:bg-[#c59b27] selection:text-white">
        <ShopProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <CartDrawer />
          <SearchModal />
          <WhatsAppFloatingButton />
        </ShopProvider>
      </body>
    </html>
  );
}
