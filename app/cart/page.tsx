"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag, Tag, Check, ShieldCheck } from "lucide-react";
import { useShop } from "@/context/ShopContext";

export default function CartPage() {
  const {
    cart,
    cartCount,
    cartSubtotal,
    cartDiscount,
    appliedCoupon,
    applyCoupon,
    removeCoupon,
    cartTotal,
    updateQuantity,
    removeFromCart,
  } = useShop();

  const [couponInput, setCouponInput] = useState("");
  const [couponMessage, setCouponMessage] = useState<{ text: string; isError: boolean } | null>(
    null
  );

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (!couponInput) return;
    const res = applyCoupon(couponInput);
    setCouponMessage({ text: res.message, isError: !res.success });
  };

  return (
    <div className="min-h-screen bg-[#faf7f2] py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {cart.length === 0 ? (
          <div className="bg-white rounded-2xl border border-[#ede5d8] p-12 text-center max-w-lg mx-auto shadow-xs">
            <ShoppingBag className="w-16 h-16 text-gray-300 mx-auto mb-4 stroke-[1.5]" />
            <h2 className="font-serif text-2xl font-bold text-gray-900 mb-2">
              Your Cart is Empty
            </h2>
            <p className="text-xs text-gray-500 mb-6">
              Looks like you haven&apos;t added any silk treasures to your bag yet.
            </p>
            <Link
              href="/collections/sarees"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#0f172a] text-white text-xs font-semibold rounded-lg hover:bg-[#1e293b] transition-colors"
            >
              <span>Explore Silk Sarees</span>
              <ArrowRight className="w-4 h-4 text-[#fde047]" />
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Cart Items List */}
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center justify-between pb-2">
                <h1 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900">
                  Your Cart ({cartCount} {cartCount === 1 ? "item" : "items"})
                </h1>
              </div>

              <div className="space-y-4">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-white p-4 sm:p-5 rounded-xl border border-[#ede5d8] shadow-xs"
                  >
                    {/* Item Image + Details */}
                    <div className="flex items-center gap-4 w-full sm:w-auto">
                      <div className="relative w-20 h-24 sm:w-24 sm:h-28 bg-[#f4eee4] rounded-lg overflow-hidden flex-shrink-0">
                        <Image
                          src={item.product.images[0]}
                          alt={item.product.name}
                          fill
                          sizes="100px"
                          className="object-cover"
                        />
                      </div>
                      <div className="space-y-1">
                        <Link
                          href={`/collections/${item.product.categorySlug}/products/${item.product.slug}`}
                          className="font-semibold text-sm sm:text-base text-gray-900 hover:text-[#800020] transition-colors"
                        >
                          {item.product.name}
                        </Link>
                        <p className="text-xs text-gray-500">
                          {item.selectedColor || "Standard"} | Free Size (5.5m + 0.8m)
                        </p>
                        <p className="text-xs font-bold text-gray-900 pt-1">
                          ₹ {item.product.price.toLocaleString("en-IN")}
                        </p>
                      </div>
                    </div>

                    {/* Quantity + Remove */}
                    <div className="flex items-center justify-between w-full sm:w-auto sm:gap-6 border-t sm:border-t-0 pt-3 sm:pt-0 border-gray-100">
                      {/* Quantity Controls */}
                      <div className="flex items-center border border-gray-300 rounded-md bg-white">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="px-2.5 py-1.5 text-gray-600 hover:bg-gray-100 transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="px-3 text-xs font-semibold text-gray-900">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="px-2.5 py-1.5 text-gray-600 hover:bg-gray-100 transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {/* Remove Button */}
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="p-2 text-gray-400 hover:text-red-600 transition-colors rounded-full hover:bg-red-50"
                        aria-label="Delete item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Delivery Guarantee note */}
              <div className="p-4 bg-[#f6eee3] rounded-xl border border-[#ede5d8] flex items-center gap-3 text-xs text-gray-700">
                <ShieldCheck className="w-5 h-5 text-[#c59b27] flex-shrink-0" />
                <span>
                  All sarees undergo multi-point Silk Mark testing and handloom inspection before
                  tamper-proof packaging.
                </span>
              </div>
            </div>

            {/* Right Column: Price Details Card matching reference */}
            <div className="lg:col-span-4 bg-white p-6 rounded-2xl border border-[#ede5d8] shadow-xs space-y-6">
              <h2 className="font-serif text-lg font-bold text-gray-900 pb-3 border-b border-gray-100">
                Price Details
              </h2>

              <div className="space-y-3 text-xs sm:text-sm">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span className="font-semibold text-gray-900">
                    ₹ {cartSubtotal.toLocaleString("en-IN")}
                  </span>
                </div>

                <div className="flex justify-between text-emerald-600">
                  <span>Discount</span>
                  <span className="font-semibold">- ₹ {cartDiscount.toLocaleString("en-IN")}</span>
                </div>

                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span className="font-semibold text-emerald-600">FREE</span>
                </div>

                <div className="border-t border-gray-100 pt-3 flex justify-between text-base font-bold text-gray-900">
                  <span>Total</span>
                  <span className="text-gray-900">₹ {cartTotal.toLocaleString("en-IN")}</span>
                </div>
              </div>

              {/* Coupon Code Section */}
              <div className="pt-2">
                {appliedCoupon ? (
                  <div className="flex items-center justify-between p-2.5 bg-emerald-50 border border-emerald-200 rounded-lg text-xs text-emerald-800">
                    <div className="flex items-center gap-1.5">
                      <Tag className="w-3.5 h-3.5" />
                      <span className="font-semibold">{appliedCoupon}</span> applied!
                    </div>
                    <button
                      onClick={removeCoupon}
                      className="text-red-600 hover:underline text-[11px] font-medium"
                    >
                      Remove
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleApplyCoupon} className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Enter coupon code"
                      value={couponInput}
                      onChange={(e) => setCouponInput(e.target.value)}
                      className="flex-1 px-3 py-2 text-xs border border-gray-300 rounded focus:outline-none focus:border-[#0f172a] bg-[#faf7f2]"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2 bg-[#0f172a] hover:bg-[#1e293b] text-white text-xs font-semibold rounded transition-colors"
                    >
                      Apply
                    </button>
                  </form>
                )}

                {couponMessage && (
                  <p
                    className={`text-[11px] mt-1.5 ${
                      couponMessage.isError ? "text-red-500" : "text-emerald-600"
                    }`}
                  >
                    {couponMessage.text}
                  </p>
                )}
              </div>

              {/* Checkout CTA */}
              <div className="space-y-3 pt-2">
                <Link
                  href="/checkout"
                  className="w-full py-3.5 bg-[#0f172a] hover:bg-[#1e293b] text-white text-xs sm:text-sm font-semibold uppercase tracking-wider rounded-lg shadow-md flex items-center justify-center gap-2 transition-colors text-center"
                >
                  <span>Proceed to Checkout</span>
                  <ArrowRight className="w-4 h-4 text-[#fde047]" />
                </Link>

                <div className="text-center">
                  <Link
                    href="/collections/sarees"
                    className="text-xs text-gray-500 hover:text-gray-900 hover:underline transition-colors"
                  >
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
