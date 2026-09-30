"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Star,
  Heart,
  ShoppingBag,
  Truck,
  RotateCcw,
  ShieldCheck,
  Plus,
  Minus,
  Check,
  ChevronRight,
  UserCheck,
} from "lucide-react";
import { Product, PRODUCTS } from "@/data/products";
import { ProductGallery } from "@/components/product/ProductGallery";
import { ProductCard } from "@/components/product/ProductCard";
import { useShop } from "@/context/ShopContext";

interface ProductDetailViewProps {
  product: Product;
}

export const ProductDetailView: React.FC<ProductDetailViewProps> = ({ product }) => {
  const { addToCart, toggleWishlist, isInWishlist, addRecentlyViewed } = useShop();
  const [selectedColor, setSelectedColor] = useState<string>(
    product.colors[0]?.name || "Standard"
  );
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<
    "description" | "specifications" | "reviews" | "related"
  >("description");

  // Track review form state
  const [newReview, setNewReview] = useState({
    name: "",
    rating: 5,
    location: "",
    comment: "",
  });
  const [submittedReview, setSubmittedReview] = useState(false);
  const [allReviews, setAllReviews] = useState(product.reviews || []);

  const inWishlist = isInWishlist(product.id);

  useEffect(() => {
    addRecentlyViewed(product);
  }, [product, addRecentlyViewed]);

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReview.name || !newReview.comment) return;
    const addedReview = {
      id: `rev-${Date.now()}`,
      userName: newReview.name,
      rating: newReview.rating,
      date: "Just now",
      verified: true,
      comment: newReview.comment,
      location: newReview.location || "Verified Buyer",
    };
    setAllReviews([addedReview, ...allReviews]);
    setSubmittedReview(true);
    setNewReview({ name: "", rating: 5, location: "", comment: "" });
  };

  const relatedProducts = PRODUCTS.filter(
    (p) => p.id !== product.id && p.categorySlug === product.categorySlug
  ).slice(0, 4);

  const youMayAlsoLike = PRODUCTS.filter((p) => p.id !== product.id).slice(0, 2);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
      {/* Breadcrumbs matching reference: Home > Sarees > Kanchipuram Silk Saree */}
      <nav className="flex items-center gap-1.5 text-xs text-gray-500 mb-6">
        <Link href="/" className="hover:text-gray-900 transition-colors">
          Home
        </Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <Link
          href={`/collections/${product.categorySlug}`}
          className="hover:text-gray-900 transition-colors"
        >
          {product.category}
        </Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="text-gray-900 font-medium truncate">{product.name}</span>
      </nav>

      {/* Main Top Section: Gallery (Left) & Info (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-14">
        {/* Left Gallery */}
        <div className="lg:col-span-6">
          <ProductGallery images={product.images} productName={product.name} />
        </div>

        {/* Right Info */}
        <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            {/* Title */}
            <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="flex items-center bg-amber-50 px-2.5 py-1 rounded text-xs border border-amber-200">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <span className="font-bold ml-1 text-gray-900">{product.rating}</span>
              </div>
              <span className="text-xs text-gray-500">
                ({product.reviewsCount} reviews)
              </span>
            </div>

            {/* Price Row */}
            <div className="flex items-baseline gap-3 pt-1">
              <span className="text-2xl sm:text-3xl font-bold text-gray-900">
                ₹ {product.price.toLocaleString("en-IN")}
              </span>
              {product.mrp > product.price && (
                <>
                  <span className="text-sm text-gray-400 line-through">
                    ₹{product.mrp.toLocaleString("en-IN")}
                  </span>
                  <span className="text-xs font-bold text-[#dc2626] bg-red-50 px-2 py-0.5 rounded border border-red-200">
                    {product.discount}% OFF
                  </span>
                </>
              )}
            </div>

            {/* Attribute Badges */}
            <div className="flex flex-wrap gap-2 pt-1">
              <span className="px-3 py-1 bg-white border border-[#ede5d8] text-xs font-medium text-gray-700 rounded-full">
                ✨ {product.fabric.split(" ")[0]} Silk
              </span>
              <span className="px-3 py-1 bg-white border border-[#ede5d8] text-xs font-medium text-gray-700 rounded-full">
                🏛️ {product.name.split(" ")[0]}
              </span>
              <span className="px-3 py-1 bg-white border border-[#ede5d8] text-xs font-medium text-gray-700 rounded-full">
                📏 {product.sareeLength}
              </span>
            </div>

            {/* Short Description */}
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed pt-1">
              {product.description}
            </p>

            {/* Color Selection */}
            {product.colors && product.colors.length > 0 && (
              <div className="pt-2 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-gray-900">
                    Color: <span className="text-gray-600 font-normal">{selectedColor}</span>
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  {product.colors.map((c) => {
                    const isSelected = selectedColor === c.name;
                    return (
                      <button
                        key={c.name}
                        onClick={() => setSelectedColor(c.name)}
                        title={c.name}
                        className={`w-7 h-7 rounded-full border transition-all flex items-center justify-center ${
                          isSelected
                            ? "ring-2 ring-offset-2 ring-[#0f172a] scale-110"
                            : "border-gray-200 hover:scale-105"
                        }`}
                        style={{ backgroundColor: c.hex }}
                      >
                        {isSelected && <Check className="w-3.5 h-3.5 text-white drop-shadow-sm" />}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Quantity Selector */}
            <div className="pt-2 space-y-2">
              <span className="text-xs font-semibold text-gray-900">Quantity:</span>
              <div className="flex items-center border border-gray-300 rounded-md w-32 bg-white">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-2 text-gray-600 hover:bg-gray-100 transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="flex-1 text-center font-semibold text-sm text-gray-800">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-2 text-gray-600 hover:bg-gray-100 transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
              <button
                onClick={() => addToCart(product, quantity, selectedColor)}
                className="w-full py-3.5 px-6 bg-[#0f172a] hover:bg-[#1e293b] text-white font-semibold text-xs sm:text-sm uppercase tracking-wider rounded-lg shadow-md flex items-center justify-center gap-2 transition-colors"
              >
                <ShoppingBag className="w-4 h-4 text-[#fde047]" />
                <span>Add to Cart</span>
              </button>

              <button
                onClick={() => toggleWishlist(product)}
                className={`w-full py-3.5 px-6 border font-semibold text-xs sm:text-sm uppercase tracking-wider rounded-lg flex items-center justify-center gap-2 transition-colors ${
                  inWishlist
                    ? "bg-red-50 border-red-300 text-red-600"
                    : "bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
                }`}
              >
                <Heart
                  className={`w-4 h-4 ${inWishlist ? "fill-red-600 text-red-600" : "text-gray-500"}`}
                />
                <span>{inWishlist ? "In Wishlist" : "Add to Wishlist"}</span>
              </button>
            </div>
          </div>

          {/* Trust ribbon */}
          <div className="grid grid-cols-3 gap-2 p-3.5 bg-white rounded-lg border border-[#ede5d8] text-center">
            <div className="flex flex-col items-center">
              <Truck className="w-4 h-4 text-[#c59b27] mb-1" />
              <span className="text-[11px] font-semibold text-gray-900">Free Shipping</span>
              <span className="text-[10px] text-gray-400">(Orders above ₹5,000)</span>
            </div>
            <div className="flex flex-col items-center border-x border-gray-100 px-1">
              <RotateCcw className="w-4 h-4 text-[#c59b27] mb-1" />
              <span className="text-[11px] font-semibold text-gray-900">7 Days Return</span>
              <span className="text-[10px] text-gray-400">(Conditions Apply)</span>
            </div>
            <div className="flex flex-col items-center">
              <ShieldCheck className="w-4 h-4 text-[#c59b27] mb-1" />
              <span className="text-[11px] font-semibold text-gray-900">100% Authentic</span>
              <span className="text-[10px] text-gray-400">(Guaranteed)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs & You May Also Like Row */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8 border-t border-[#ede5d8]">
        {/* Left Side: Tabs */}
        <div className="lg:col-span-8 space-y-6">
          {/* Tab Navigation */}
          <div className="flex items-center gap-4 sm:gap-8 border-b border-[#ede5d8] overflow-x-auto text-xs sm:text-sm font-semibold">
            {[
              { id: "description", label: "Description" },
              { id: "specifications", label: "Specifications" },
              { id: "reviews", label: `Reviews (${allReviews.length || product.reviewsCount})` },
              { id: "related", label: "Related Products" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`pb-3 transition-colors relative whitespace-nowrap ${
                  activeTab === tab.id
                    ? "text-[#0f172a] border-b-2 border-[#c59b27]"
                    : "text-gray-400 hover:text-gray-700"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="bg-white p-6 rounded-xl border border-[#ede5d8] shadow-xs">
            {activeTab === "description" && (
              <div className="space-y-4 text-xs sm:text-sm text-gray-700 leading-relaxed">
                <p>{product.description}</p>
                <h4 className="font-semibold text-gray-900 pt-2 font-serif text-base">
                  Artisanal Craftsmanship & Silk Mark Guarantee
                </h4>
                <p>
                  Every saree in our boutique is meticulously handwoven by generational weavers who
                  have preserved the centuries-old art of authentic Indian weaving. We ensure that
                  every thread adheres to the strictest purity standards, certified by the Silk
                  Mark Organisation of India.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="p-3 bg-[#faf7f2] rounded border border-[#ede5d8]">
                    <span className="font-semibold text-gray-900 block text-xs">
                      Complimentary Fall & Pico
                    </span>
                    <span className="text-[11px] text-gray-500">
                      Standard stitched fall and edging included for ready-to-wear elegance.
                    </span>
                  </div>
                  <div className="p-3 bg-[#faf7f2] rounded border border-[#ede5d8]">
                    <span className="font-semibold text-gray-900 block text-xs">
                      Silk Mark Security Tag
                    </span>
                    <span className="text-[11px] text-gray-500">
                      Authentic QR verification tag attached directly to the pallu.
                    </span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "specifications" && (
              <div className="divide-y divide-gray-100 text-xs sm:text-sm">
                {product.specifications.map((spec, idx) => (
                  <div key={idx} className="grid grid-cols-3 py-3">
                    <span className="font-medium text-gray-500">{spec.label}</span>
                    <span className="col-span-2 font-semibold text-gray-900">{spec.value}</span>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "reviews" && (
              <div className="space-y-6">
                {/* Reviews List */}
                <div className="space-y-4">
                  {allReviews.map((rev) => (
                    <div
                      key={rev.id}
                      className="p-4 bg-[#faf7f2] rounded-lg border border-[#ede5d8] space-y-2"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-xs sm:text-sm text-gray-900">
                            {rev.userName}
                          </span>
                          {rev.verified && (
                            <span className="flex items-center gap-0.5 text-[10px] text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full font-medium">
                              <UserCheck className="w-3 h-3" /> Verified Buyer
                            </span>
                          )}
                        </div>
                        <span className="text-[11px] text-gray-400">{rev.date}</span>
                      </div>
                      <div className="flex items-center text-amber-500">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3.5 h-3.5 ${
                              i < rev.rating
                                ? "fill-amber-400 text-amber-400"
                                : "fill-gray-200 text-gray-200"
                            }`}
                          />
                        ))}
                        <span className="text-[11px] text-gray-500 ml-2">{rev.location}</span>
                      </div>
                      <p className="text-xs text-gray-700 leading-relaxed">{rev.comment}</p>
                    </div>
                  ))}
                </div>

                {/* Submit a review */}
                <div className="pt-4 border-t border-gray-100">
                  <h4 className="font-semibold text-sm text-gray-900 mb-3">Write a Customer Review</h4>
                  {submittedReview ? (
                    <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs rounded">
                      ✓ Thank you! Your review has been submitted and published.
                    </div>
                  ) : (
                    <form onSubmit={handleReviewSubmit} className="space-y-3">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <input
                          type="text"
                          required
                          placeholder="Your Name *"
                          value={newReview.name}
                          onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                          className="px-3 py-2 text-xs border border-gray-300 rounded focus:outline-none focus:border-[#0f172a]"
                        />
                        <input
                          type="text"
                          placeholder="City, State"
                          value={newReview.location}
                          onChange={(e) => setNewReview({ ...newReview, location: e.target.value })}
                          className="px-3 py-2 text-xs border border-gray-300 rounded focus:outline-none focus:border-[#0f172a]"
                        />
                      </div>
                      <div className="flex items-center gap-2 text-xs">
                        <span className="text-gray-600">Rating:</span>
                        <select
                          value={newReview.rating}
                          onChange={(e) =>
                            setNewReview({ ...newReview, rating: Number(e.target.value) })
                          }
                          className="px-2 py-1 text-xs border border-gray-300 rounded bg-white"
                        >
                          <option value="5">5 Stars - Outstanding</option>
                          <option value="4">4 Stars - Very Good</option>
                          <option value="3">3 Stars - Good</option>
                          <option value="2">2 Stars - Fair</option>
                          <option value="1">1 Star - Poor</option>
                        </select>
                      </div>
                      <textarea
                        required
                        rows={3}
                        placeholder="Share details about the silk texture, zari luster, and draping comfort..."
                        value={newReview.comment}
                        onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                        className="w-full px-3 py-2 text-xs border border-gray-300 rounded focus:outline-none focus:border-[#0f172a]"
                      />
                      <button
                        type="submit"
                        className="px-5 py-2 bg-[#0f172a] text-white text-xs font-semibold rounded hover:bg-[#1e293b] transition-colors"
                      >
                        Submit Review
                      </button>
                    </form>
                  )}
                </div>
              </div>
            )}

            {activeTab === "related" && (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {relatedProducts.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Right Side: You May Also Like */}
        <div className="lg:col-span-4 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-serif text-lg font-bold text-gray-900">You May Also Like</h3>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
            {youMayAlsoLike.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
