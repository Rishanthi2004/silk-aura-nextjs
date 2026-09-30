"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { X, Trash2, Plus, Minus, ArrowRight, ShoppingBag } from "lucide-react";
import { useShop } from "@/context/ShopContext";

export const CartDrawer: React.FC = () => {
  const {
    cart,
    cartCount,
    cartSubtotal,
    cartDiscount,
    cartTotal,
    isCartDrawerOpen,
    setIsCartDrawerOpen,
    updateQuantity,
    removeFromCart,
  } = useShop();

  if (!isCartDrawerOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={() => setIsCartDrawerOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#faf7f2] shadow-2xl flex flex-col border-l border-[#ede5d8]">
          {/* Header */}
          <div className="p-4 bg-[#0f172a] text-white flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#fde047]" />
              <h2 className="text-base font-medium">Your Bag ({cartCount})</h2>
            </div>
            <button
              onClick={() => setIsCartDrawerOpen(false)}
              className="p-1.5 text-gray-300 hover:text-white rounded-md hover:bg-white/10"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart items list */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 text-gray-500">
                <ShoppingBag className="w-16 h-16 text-gray-300 mb-3 stroke-[1.5]" />
                <p className="font-serif text-lg text-gray-700 font-medium">Your bag is empty</p>
                <p className="text-xs text-gray-400 mt-1 max-w-xs">
                  Discover our timeless handwoven silk sarees and festive collections.
                </p>
                <button
                  onClick={() => setIsCartDrawerOpen(false)}
                  className="mt-5 px-6 py-2 bg-[#0f172a] text-white text-xs font-semibold rounded hover:bg-[#1e293b] transition-colors"
                >
                  Explore Sarees
                </button>
              </div>
            ) : (
              cart.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-3 bg-white p-3 rounded-lg border border-[#ede5d8] shadow-xs"
                >
                  <div className="relative w-20 h-24 bg-gray-100 rounded overflow-hidden flex-shrink-0">
                    <Image
                      src={item.product.images[0]}
                      alt={item.product.name}
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  </div>

                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start">
                        <Link
                          href={`/collections/${item.product.categorySlug}/products/${item.product.slug}`}
                          onClick={() => setIsCartDrawerOpen(false)}
                          className="text-xs font-semibold text-gray-900 hover:text-[#800020] line-clamp-1"
                        >
                          {item.product.name}
                        </Link>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-gray-400 hover:text-red-500 transition-colors p-1"
                          aria-label="Remove"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <p className="text-[11px] text-gray-500 mt-0.5">
                        Color: {item.selectedColor || "Standard"}
                      </p>
                    </div>

                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center border border-gray-200 rounded text-xs bg-gray-50">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="px-2 py-1 text-gray-600 hover:bg-gray-200 transition-colors"
                          aria-label="Decrease"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2.5 font-medium text-gray-800">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="px-2 py-1 text-gray-600 hover:bg-gray-200 transition-colors"
                          aria-label="Increase"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <div className="text-right">
                        <span className="text-xs font-bold text-gray-900">
                          ₹{(item.product.price * item.quantity).toLocaleString("en-IN")}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Summary */}
          {cart.length > 0 && (
            <div className="p-4 bg-white border-t border-[#ede5d8] space-y-3">
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>₹{cartSubtotal.toLocaleString("en-IN")}</span>
                </div>
                {cartDiscount > 0 && (
                  <div className="flex justify-between text-emerald-600 font-medium">
                    <span>Discount</span>
                    <span>-₹{cartDiscount.toLocaleString("en-IN")}</span>
                  </div>
                )}
                <div className="flex justify-between text-gray-600">
                  <span>Insured Shipping</span>
                  <span className="text-emerald-600 font-medium">FREE</span>
                </div>
                <div className="border-t border-gray-100 pt-2 flex justify-between font-bold text-sm text-gray-900">
                  <span>Estimated Total</span>
                  <span className="text-[#800020]">₹{cartTotal.toLocaleString("en-IN")}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-2">
                <Link
                  href="/cart"
                  onClick={() => setIsCartDrawerOpen(false)}
                  className="w-full text-center py-2.5 px-3 bg-white border border-[#0f172a] text-[#0f172a] text-xs font-semibold rounded hover:bg-gray-50 transition-colors"
                >
                  View Full Cart
                </Link>
                <Link
                  href="/checkout"
                  onClick={() => setIsCartDrawerOpen(false)}
                  className="w-full text-center py-2.5 px-3 bg-[#0f172a] hover:bg-[#1e293b] text-white text-xs font-semibold rounded flex items-center justify-center gap-1.5 transition-colors shadow-sm"
                >
                  <span>Checkout</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#fde047]" />
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
