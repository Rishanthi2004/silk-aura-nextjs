"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, Heart, ShoppingBag, Menu, X, Sparkles } from "lucide-react";
import { useShop } from "@/context/ShopContext";

export const Header: React.FC = () => {
  const pathname = usePathname();
  const { cartCount, wishlistCount, setIsCartDrawerOpen, setIsSearchOpen } = useShop();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Check if admin page is active
  if (pathname.startsWith("/admin")) {
    return null;
  }

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/collections/sarees" },
    { name: "Categories", href: "/#categories" },
    { name: "Occasions", href: "/collections/sarees?occasion=Bridal" },
    { name: "New Arrivals", href: "/collections/sarees?sort=new" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#0f172a] text-white border-b border-[#1e293b] shadow-md">
      {/* Top Announcement Bar */}
      <div className="bg-[#1e1b4b] text-[#fef08a] text-[11px] sm:text-xs py-1.5 px-4 text-center tracking-wider font-medium flex items-center justify-center gap-2 border-b border-[#312e81]">
        <Sparkles className="w-3.5 h-3.5 text-[#fbbf24] animate-pulse" />
        <span>FESTIVE SPECIAL: Enjoy Free Express Insured Shipping Across India on All Orders</span>
        <Sparkles className="w-3.5 h-3.5 text-[#fbbf24] animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#c59b27] via-[#fef08a] to-[#c59b27] flex items-center justify-center text-[#0f172a] font-serif font-bold text-lg shadow-sm">
              S
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#fef08a] via-[#fde047] to-[#eab308]">
                SilkAura
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm tracking-wide transition-colors duration-200 hover:text-[#fde047] ${
                    isActive ? "text-[#fde047] font-semibold" : "text-gray-200"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Icons */}
          <div className="flex items-center space-x-3 sm:space-x-5">
            {/* Search Trigger */}
            <button
              onClick={() => setIsSearchOpen(true)}
              aria-label="Search"
              className="p-2 text-gray-300 hover:text-[#fde047] transition-colors rounded-full hover:bg-white/5"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Wishlist Link */}
            <Link
              href="/wishlist"
              aria-label="Wishlist"
              className="relative p-2 text-gray-300 hover:text-[#fde047] transition-colors rounded-full hover:bg-white/5"
            >
              <Heart className="w-5 h-5" />
              {wishlistCount > 0 && (
                <span className="absolute top-1 right-1 bg-[#dc2626] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-sm">
                  {wishlistCount}
                </span>
              )}
            </Link>

            {/* Cart Trigger */}
            <button
              onClick={() => setIsCartDrawerOpen(true)}
              aria-label="Cart"
              className="relative p-2 text-gray-300 hover:text-[#fde047] transition-colors rounded-full hover:bg-white/5"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute top-1 right-1 bg-[#c59b27] text-[#0f172a] text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-sm">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-300 hover:text-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0f1d] border-b border-[#1e293b] px-4 pt-3 pb-6 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-gray-200 hover:text-[#fde047] border-b border-white/5"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-2 flex flex-col gap-2">
            <Link
              href="/stores"
              onClick={() => setMobileMenuOpen(false)}
              className="text-xs text-gray-400 hover:text-[#fde047]"
            >
              📍 Find Our Stores
            </Link>
            <Link
              href="/order-status"
              onClick={() => setMobileMenuOpen(false)}
              className="text-xs text-gray-400 hover:text-[#fde047]"
            >
              📦 Track Order Status
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
