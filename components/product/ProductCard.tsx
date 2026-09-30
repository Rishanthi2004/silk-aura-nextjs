"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Heart, Star, ShoppingBag } from "lucide-react";
import { Product } from "@/data/products";
import { useShop } from "@/context/ShopContext";

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { toggleWishlist, isInWishlist, addToCart } = useShop();
  const inWishlist = isInWishlist(product.id);

  return (
    <div className="group flex flex-col bg-white rounded-lg border border-[#ede5d8] overflow-hidden shadow-xs hover:shadow-md transition-all duration-300">
      {/* Product Image Container */}
      <div className="relative aspect-[3/4] w-full bg-[#f6f2eb] overflow-hidden">
        <Link
          href={`/collections/${product.categorySlug}/products/${product.slug}`}
          className="block w-full h-full"
        >
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
          {product.images[1] && (
            <Image
              src={product.images[1]}
              alt={`${product.name} alternate view`}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="object-cover object-top transition-opacity duration-500 opacity-0 group-hover:opacity-100"
            />
          )}
        </Link>

        {/* Wishlist Button Top Right */}
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleWishlist(product);
          }}
          aria-label={inWishlist ? "Remove from wishlist" : "Add to wishlist"}
          className="absolute top-2.5 right-2.5 z-10 w-8 h-8 rounded-full bg-white/90 backdrop-blur-xs flex items-center justify-center text-gray-700 hover:text-red-500 shadow-xs hover:scale-110 transition-transform"
        >
          <Heart
            className={`w-4 h-4 transition-colors ${
              inWishlist ? "fill-[#dc2626] text-[#dc2626]" : "text-gray-600"
            }`}
          />
        </button>

        {/* Quick Add Overlay on Hover */}
        <div className="absolute inset-x-2 bottom-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 hidden sm:block">
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              addToCart(product, 1);
            }}
            className="w-full py-2 bg-[#0f172a]/95 hover:bg-[#0f172a] text-white text-xs font-semibold rounded shadow-md flex items-center justify-center gap-1.5 backdrop-blur-xs transition-colors"
          >
            <ShoppingBag className="w-3.5 h-3.5 text-[#fde047]" />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>

      {/* Product Details */}
      <div className="p-3.5 flex flex-col flex-1 justify-between bg-white">
        <div>
          <Link
            href={`/collections/${product.categorySlug}/products/${product.slug}`}
            className="block"
          >
            <h3 className="text-xs sm:text-sm font-medium text-gray-900 line-clamp-1 hover:text-[#800020] transition-colors">
              {product.name}
            </h3>
          </Link>

          {/* Price Row */}
          <div className="flex items-baseline flex-wrap gap-1.5 mt-1.5">
            <span className="text-xs sm:text-sm font-bold text-gray-900">
              ₹ {product.price.toLocaleString("en-IN")}
            </span>
            {product.mrp > product.price && (
              <>
                <span className="text-[11px] text-gray-400 line-through">
                  ₹{product.mrp.toLocaleString("en-IN")}
                </span>
                <span className="text-[10px] sm:text-[11px] font-bold text-[#dc2626]">
                  {product.discount}% OFF
                </span>
              </>
            )}
          </div>
        </div>

        {/* Rating Row */}
        <div className="flex items-center gap-1 mt-2 text-[11px] text-gray-500">
          <div className="flex items-center text-amber-500">
            <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
            <span className="font-semibold ml-1 text-gray-800">{product.rating}</span>
          </div>
          <span className="text-gray-400">({product.reviewsCount})</span>
        </div>
      </div>
    </div>
  );
};
