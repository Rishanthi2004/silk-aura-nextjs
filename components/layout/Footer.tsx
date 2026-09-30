"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Send, CheckCircle2, ChevronUp } from "lucide-react";

export const Footer: React.FC = () => {
  const pathname = usePathname();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  // Hide on admin
  if (pathname.startsWith("/admin")) {
    return null;
  }

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#090e1a] text-gray-300 border-t border-[#1e293b] pb-6 md:pb-8">
      {/* Amazon-style Back to Top Bar */}
      <button
        onClick={scrollToTop}
        className="w-full bg-[#131c31] hover:bg-[#1a253e] active:bg-[#202c48] text-gray-300 hover:text-white py-2.5 sm:py-3 text-xs font-medium tracking-wide flex items-center justify-center gap-1.5 border-b border-[#1e293b] transition-colors cursor-pointer"
        aria-label="Back to top"
      >
        <ChevronUp className="w-3.5 h-3.5 text-[#c59b27]" />
        <span>Back to top</span>
      </button>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 md:pt-14">
        {/* Main Grid: Compact 2-column on mobile, 4-column on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 mb-6 md:mb-12">
          {/* Col 1: Brand Info */}
          <div className="space-y-2.5 md:space-y-4 flex flex-col items-center md:items-start text-center md:text-left">
            <Link href="/" className="inline-flex items-center justify-center">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-gradient-to-tr from-[#c59b27] to-[#fef08a] flex items-center justify-center text-[#090e1a] font-serif font-bold text-base md:text-lg shadow-sm">
                  S
                </div>
                <span className="font-serif text-xl md:text-2xl font-bold text-white tracking-wide">
                  SilkAura
                </span>
              </div>
            </Link>
            <p className="text-[11px] md:text-xs italic text-[#fde047] font-serif">Grace in every drape</p>
            <p className="text-[11px] md:text-xs text-gray-400 leading-relaxed max-w-sm md:max-w-none">
              Curating authentic handwoven silk sarees, bridal ensembles, and traditional ethnic
              wear since 1994. Every weave carries Silk Mark purity certification and the soul of
              Indian master artisans.
            </p>
          </div>

          {/* Links Section: 2 Columns on Mobile, Distributed on Desktop */}
          <div className="grid grid-cols-2 gap-4 md:contents">
            {/* Col 2: Quick Links */}
            <div className="space-y-2 md:space-y-3">
              <h3 className="text-xs md:text-sm font-semibold text-white uppercase tracking-wider">
                Quick Links
              </h3>
              <ul className="space-y-1.5 md:space-y-2 text-[11px] md:text-xs">
                <li>
                  <Link href="/" className="hover:text-[#fde047] transition-colors py-0.5 inline-block">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/collections/sarees" className="hover:text-[#fde047] transition-colors py-0.5 inline-block">
                    Shop
                  </Link>
                </li>
                <li>
                  <Link href="/#categories" className="hover:text-[#fde047] transition-colors py-0.5 inline-block">
                    Categories
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-[#fde047] transition-colors py-0.5 inline-block">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-[#fde047] transition-colors py-0.5 inline-block">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/stores" className="hover:text-[#fde047] transition-colors py-0.5 inline-block">
                    Store Locations
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 3: Customer Service */}
            <div className="space-y-2 md:space-y-3">
              <h3 className="text-xs md:text-sm font-semibold text-white uppercase tracking-wider">
                Customer Service
              </h3>
              <ul className="space-y-1.5 md:space-y-2 text-[11px] md:text-xs">
                <li>
                  <Link href="/faqs" className="hover:text-[#fde047] transition-colors py-0.5 inline-block">
                    Shipping
                  </Link>
                </li>
                <li>
                  <Link href="/faqs" className="hover:text-[#fde047] transition-colors py-0.5 inline-block">
                    Returns
                  </Link>
                </li>
                <li>
                  <Link href="/faqs" className="hover:text-[#fde047] transition-colors py-0.5 inline-block">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/order-status" className="hover:text-[#fde047] transition-colors py-0.5 inline-block">
                    Track Order
                  </Link>
                </li>
                <li>
                  <Link href="/blogs" className="hover:text-[#fde047] transition-colors py-0.5 inline-block">
                    Silk Care Journal
                  </Link>
                </li>
                <li>
                  <Link href="/faqs" className="hover:text-[#fde047] transition-colors py-0.5 inline-block">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Col 4: Newsletter & Social */}
          <div className="space-y-3 md:space-y-4 pt-2 md:pt-0 border-t border-[#1e293b] md:border-none flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-xs md:text-sm font-semibold text-white uppercase tracking-wider">
              Connect With Us
            </h3>
            <div className="flex items-center justify-center md:justify-start space-x-3 text-gray-400">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#c59b27] hover:text-[#090e1a] transition-all"
                aria-label="Instagram"
              >
                <svg className="w-3.5 h-3.5 md:w-4 md:h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#c59b27] hover:text-[#090e1a] transition-all"
                aria-label="Facebook"
              >
                <svg className="w-3.5 h-3.5 md:w-4 md:h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#c59b27] hover:text-[#090e1a] transition-all"
                aria-label="YouTube"
              >
                <svg className="w-3.5 h-3.5 md:w-4 md:h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>

            <div className="pt-1 w-full max-w-xs md:max-w-sm">
              <p className="text-[11px] md:text-xs text-gray-400 mb-1.5 md:mb-2">Subscribe to our newsletter</p>
              <form onSubmit={handleSubscribe} className="flex w-full">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="bg-[#131c31] text-[11px] md:text-xs text-white px-2.5 py-1.5 md:px-3 md:py-2 rounded-l border border-gray-700 focus:outline-none focus:border-[#c59b27] flex-1"
                />
                <button
                  type="submit"
                  className="bg-[#1e293b] hover:bg-[#c59b27] hover:text-[#090e1a] text-gray-200 text-xs px-3 py-1.5 md:py-2 rounded-r border border-l-0 border-gray-700 transition-colors flex items-center justify-center cursor-pointer"
                  aria-label="Subscribe"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
              {subscribed && (
                <p className="text-[10px] md:text-[11px] text-emerald-400 mt-1.5 flex items-center justify-center md:justify-start gap-1">
                  <CheckCircle2 className="w-3 h-3" /> Thank you for subscribing!
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar: Compact copyright & metadata */}
        <div className="border-t border-[#1e293b] pt-4 md:pt-6 flex flex-col sm:flex-row items-center justify-between text-[10px] md:text-[11px] text-gray-500 gap-2 sm:gap-3 text-center sm:text-left">
          <p>© 2026 SilkAura. All rights reserved.</p>
          <div className="flex items-center flex-wrap justify-center gap-2 sm:gap-4">
            <span>Silk Mark Certified 🇮🇳</span>
            <span>•</span>
            <span>Handloom Protected</span>
            <span>•</span>
            <Link href="/admin" className="hover:text-gray-400 text-gray-600">
              Admin Portal
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
