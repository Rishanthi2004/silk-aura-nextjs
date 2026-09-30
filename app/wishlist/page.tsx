"use client";

import React from "react";
import Link from "next/link";
import { Heart, ShoppingBag, ArrowRight } from "lucide-react";
import { useShop } from "@/context/ShopContext";
import { ProductCard } from "@/components/product/ProductCard";

export default function WishlistPage() {
  const { wishlist, wishlistCount } = useShop();

  return (
    <div className="min-h-screen bg-[#faf7f2] py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900">
              Your Saved Wishlist ({wishlistCount})
            </h1>
            <p className="text-xs text-gray-500 mt-1">
              Your favorite handwoven pieces saved for upcoming weddings and festivities.
            </p>
          </div>

          <Link
            href="/collections/sarees"
            className="text-xs font-semibold text-[#800020] hover:underline flex items-center gap-1"
          >
            <span>Continue Shopping</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {wishlist.length === 0 ? (
          <div className="bg-white rounded-2xl border border-[#ede5d8] p-12 text-center max-w-md mx-auto shadow-xs">
            <Heart className="w-16 h-16 text-gray-300 mx-auto mb-3 stroke-[1.5]" />
            <h2 className="font-serif text-xl font-bold text-gray-900 mb-1">
              Your Wishlist is Empty
            </h2>
            <p className="text-xs text-gray-500 mb-6">
              Save sarees you love by tapping the heart icon on any product card.
            </p>
            <Link
              href="/collections/sarees"
              className="inline-block px-5 py-2.5 bg-[#0f172a] text-white text-xs font-semibold rounded-lg hover:bg-[#1e293b]"
            >
              Explore Silk Sarees
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {wishlist.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
