"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, X, ArrowRight, Tag } from "lucide-react";
import { useShop } from "@/context/ShopContext";
import { PRODUCTS } from "@/data/products";

export const SearchModal: React.FC = () => {
  const { isSearchOpen, setIsSearchOpen } = useShop();
  const [query, setQuery] = useState("");

  const filteredProducts = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return PRODUCTS.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.fabric.toLowerCase().includes(q) ||
        p.occasion.toLowerCase().includes(q) ||
        p.colors.some((c) => c.name.toLowerCase().includes(q))
    ).slice(0, 6);
  }, [query]);

  if (!isSearchOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-xs transition-opacity"
        onClick={() => setIsSearchOpen(false)}
      />

      <div className="min-h-screen px-4 text-center flex items-start justify-center pt-20">
        <div className="inline-block w-full max-w-2xl bg-[#faf7f2] rounded-xl text-left overflow-hidden shadow-2xl transform transition-all border border-[#ede5d8] relative z-10">
          {/* Search Input Bar */}
          <div className="p-4 bg-[#0f172a] text-white flex items-center gap-3">
            <Search className="w-5 h-5 text-[#fde047]" />
            <input
              type="text"
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by silk variety (Kanchipuram, Banarasi, Mysore, Tussar)..."
              className="w-full bg-transparent text-white placeholder-gray-400 text-sm focus:outline-none"
            />
            {query && (
              <button onClick={() => setQuery("")} className="text-gray-400 hover:text-white">
                <X className="w-4 h-4" />
              </button>
            )}
            <button
              onClick={() => setIsSearchOpen(false)}
              className="text-gray-300 hover:text-white p-1 rounded hover:bg-white/10"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick tags */}
          <div className="px-5 py-3 bg-[#f5efe6] border-b border-[#ede5d8] flex items-center gap-2 overflow-x-auto text-xs">
            <span className="text-gray-500 font-medium whitespace-nowrap flex items-center gap-1">
              <Tag className="w-3.5 h-3.5 text-[#800020]" /> Popular:
            </span>
            {["Kanchipuram", "Banarasi", "Mysore Silk", "Bridal", "Cotton Silk", "Lehengas"].map(
              (tag) => (
                <button
                  key={tag}
                  onClick={() => setQuery(tag)}
                  className="px-2.5 py-1 bg-white hover:bg-[#800020] hover:text-white rounded-full text-gray-700 border border-gray-200 transition-colors whitespace-nowrap text-[11px]"
                >
                  {tag}
                </button>
              )
            )}
          </div>

          {/* Results Area */}
          <div className="p-5 max-h-[60vh] overflow-y-auto">
            {query.trim() === "" ? (
              <div className="py-8 text-center text-gray-400 text-xs">
                Type keywords like &quot;Kanchipuram&quot;, &quot;Bridal&quot;, or &quot;Green&quot; to discover handwoven masterpieces.
              </div>
            ) : filteredProducts.length === 0 ? (
              <div className="py-8 text-center text-gray-500">
                <p className="font-serif text-base text-gray-700 font-medium">No matches found for &quot;{query}&quot;</p>
                <p className="text-xs text-gray-400 mt-1">
                  Try checking the spelling or browse our full collections catalogue.
                </p>
                <Link
                  href="/collections/sarees"
                  onClick={() => setIsSearchOpen(false)}
                  className="inline-block mt-4 text-xs font-semibold text-[#800020] hover:underline"
                >
                  Browse all Sarees →
                </Link>
              </div>
            ) : (
              <div className="space-y-3">
                <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">
                  Found {filteredProducts.length} results
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {filteredProducts.map((product) => (
                    <Link
                      key={product.id}
                      href={`/collections/${product.categorySlug}/products/${product.slug}`}
                      onClick={() => setIsSearchOpen(false)}
                      className="flex items-center gap-3 p-2.5 bg-white rounded-lg border border-[#ede5d8] hover:border-[#800020] hover:shadow-xs transition-all group"
                    >
                      <div className="relative w-14 h-16 bg-gray-100 rounded overflow-hidden flex-shrink-0">
                        <Image
                          src={product.images[0]}
                          alt={product.name}
                          fill
                          sizes="60px"
                          className="object-cover group-hover:scale-105 transition-transform"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-xs font-semibold text-gray-900 truncate group-hover:text-[#800020]">
                          {product.name}
                        </h4>
                        <p className="text-[11px] text-gray-500 truncate">{product.fabric}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-xs font-bold text-gray-900">
                            ₹{product.price.toLocaleString("en-IN")}
                          </span>
                          <span className="text-[10px] text-gray-400 line-through">
                            ₹{product.mrp.toLocaleString("en-IN")}
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>

                <div className="pt-2 text-center">
                  <Link
                    href={`/search?q=${encodeURIComponent(query)}`}
                    onClick={() => setIsSearchOpen(false)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#800020] hover:underline"
                  >
                    <span>View all matching products</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
