"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { CheckCircle2, ShieldCheck, ArrowRight, ShoppingBag } from "lucide-react";
import { useShop, PlacedOrder } from "@/context/ShopContext";

export default function CheckoutPage() {
  const router = useRouter();
  const {
    cart,
    cartSubtotal,
    cartDiscount,
    cartTotal,
    appliedCoupon,
    applyCoupon,
    placeOrder,
  } = useShop();

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    state: "Tamil Nadu",
    pincode: "",
  });

  const [promoCode, setPromoCode] = useState("");
  const [promoMsg, setPromoMsg] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderCompleted, setOrderCompleted] = useState<PlacedOrder | null>(null);

  const indianStates = [
    "Tamil Nadu",
    "Karnataka",
    "Telangana",
    "Andhra Pradesh",
    "Maharashtra",
    "Kerala",
    "Delhi",
    "Gujarat",
    "West Bengal",
    "Rajasthan",
    "Uttar Pradesh",
    "Madhya Pradesh",
    "Punjab",
    "Haryana",
    "Bihar",
    "Odisha",
    "Assam",
    "Goa",
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!promoCode) return;
    const res = applyCoupon(promoCode);
    setPromoMsg(res.message);
  };

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone || !formData.address || !formData.city || !formData.pincode) {
      alert("Please fill all required delivery details.");
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      const newOrder = placeOrder(formData);
      setOrderCompleted(newOrder);
      setIsSubmitting(false);
    }, 600);
  };

  // Order Success Screen matching reference
  if (orderCompleted) {
    return (
      <div className="min-h-screen bg-[#faf7f2] py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="max-w-xl w-full bg-white rounded-2xl border border-[#ede5d8] p-8 sm:p-12 text-center shadow-lg space-y-6">
          <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <div className="space-y-2">
            <h1 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900">
              Your Order Placed Successfully!
            </h1>
            <p className="text-xs sm:text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
              Thank you for your order. Our team will review it and contact you shortly to confirm the details and payment.
            </p>
          </div>

          {/* Order Details Badge Card matching reference */}
          <div className="grid grid-cols-3 gap-3 p-4 bg-[#faf7f2] rounded-xl border border-[#ede5d8] text-center">
            <div>
              <span className="block text-[10px] text-gray-400 uppercase tracking-wider font-semibold">
                Order ID
              </span>
              <span className="font-bold text-xs sm:text-sm text-[#0f172a]">
                #{orderCompleted.orderId}
              </span>
            </div>
            <div>
              <span className="block text-[10px] text-gray-400 uppercase tracking-wider font-semibold">
                Order Date
              </span>
              <span className="font-medium text-xs sm:text-sm text-gray-800">
                {orderCompleted.date}
              </span>
            </div>
            <div>
              <span className="block text-[10px] text-gray-400 uppercase tracking-wider font-semibold">
                Total Amount
              </span>
              <span className="font-bold text-xs sm:text-sm text-emerald-600">
                ₹{orderCompleted.total.toLocaleString("en-IN")}
              </span>
            </div>
          </div>

          {/* Offline Payment Confirmation Box */}
          <div className="p-4 bg-[#f8f5ee] rounded-xl border border-[#e5d5c0] text-left text-xs text-gray-700 space-y-2">
            <div className="flex items-center gap-2 font-semibold text-gray-900">
              <ShieldCheck className="w-4 h-4 text-[#c59b27]" />
              <span>Next Steps: Offline Payment Verification</span>
            </div>
            <p className="text-[11px] text-gray-600 leading-relaxed">
              Our Silk Concierge will message or call you at <strong>{orderCompleted.customer.phone}</strong> to confirm any customization requests (blouse stitching, fall & edging) and provide UPI / Bank Transfer payment options.
            </p>
          </div>

          {/* Action Buttons matching screenshot */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <Link
              href="/collections/sarees"
              className="py-3 px-4 bg-white border border-[#0f172a] text-[#0f172a] text-xs font-semibold rounded-lg hover:bg-gray-50 transition-colors"
            >
              Continue Shopping
            </Link>
            <Link
              href={`/order-status?id=${orderCompleted.orderId}`}
              className="py-3 px-4 bg-[#0f172a] text-white text-xs font-semibold rounded-lg hover:bg-[#1e293b] transition-colors"
            >
              View Orders
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-[#faf7f2] py-16 text-center">
        <div className="max-w-md mx-auto bg-white p-8 rounded-2xl border border-[#ede5d8]">
          <ShoppingBag className="w-12 h-12 text-gray-300 mx-auto mb-3" />
          <h2 className="font-serif text-xl font-bold text-gray-900 mb-2">Your Bag is Empty</h2>
          <p className="text-xs text-gray-500 mb-6">
            Please add items to your cart before proceeding to checkout.
          </p>
          <Link
            href="/collections/sarees"
            className="px-5 py-2.5 bg-[#0f172a] text-white text-xs font-semibold rounded-lg hover:bg-[#1e293b]"
          >
            Browse Sarees
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#faf7f2] py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Checkout</h1>

        <form onSubmit={handleSubmitOrder}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Delivery Details Form */}
            <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-[#ede5d8] shadow-xs space-y-5">
              <h2 className="font-serif text-lg font-bold text-gray-900 pb-3 border-b border-gray-100">
                Delivery Details
              </h2>

              <div className="space-y-4 text-xs">
                {/* Full Name */}
                <div>
                  <label className="block font-medium text-gray-700 mb-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    placeholder="Enter your name"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-[#0f172a] bg-[#faf7f2]"
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block font-medium text-gray-700 mb-1">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="Enter phone number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-[#0f172a] bg-[#faf7f2]"
                  />
                </div>

                {/* Email (Optional) */}
                <div>
                  <label className="block font-medium text-gray-700 mb-1">
                    Email <span className="text-gray-400 font-normal">(Optional)</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter email address"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-[#0f172a] bg-[#faf7f2]"
                  />
                </div>

                {/* Delivery Address */}
                <div>
                  <label className="block font-medium text-gray-700 mb-1">
                    Delivery Address <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="address"
                    required
                    rows={3}
                    placeholder="House no., Street, Area"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-[#0f172a] bg-[#faf7f2]"
                  />
                </div>

                {/* City & State */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-medium text-gray-700 mb-1">
                      City <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="city"
                      required
                      placeholder="Enter city"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-[#0f172a] bg-[#faf7f2]"
                    />
                  </div>

                  <div>
                    <label className="block font-medium text-gray-700 mb-1">
                      State <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-[#0f172a] bg-[#faf7f2]"
                    >
                      {indianStates.map((state) => (
                        <option key={state} value={state}>
                          {state}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Pincode */}
                <div>
                  <label className="block font-medium text-gray-700 mb-1">
                    Pincode <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="pincode"
                    required
                    placeholder="Enter pincode"
                    value={formData.pincode}
                    onChange={handleInputChange}
                    className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-[#0f172a] bg-[#faf7f2]"
                  />
                </div>
              </div>
            </div>

            {/* Right Column: Order Summary matching screenshot */}
            <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-2xl border border-[#ede5d8] shadow-xs space-y-6">
              <h2 className="font-serif text-lg font-bold text-gray-900 pb-3 border-b border-gray-100">
                Order Summary
              </h2>

              {/* Items List */}
              <div className="space-y-3 divide-y divide-gray-100">
                {cart.map((item) => (
                  <div key={item.id} className="pt-3 first:pt-0 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="relative w-12 h-14 bg-gray-100 rounded overflow-hidden flex-shrink-0">
                        <Image
                          src={item.product.images[0]}
                          alt={item.product.name}
                          fill
                          sizes="50px"
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="text-xs font-semibold text-gray-900 line-clamp-1">
                          {item.product.name}
                        </h4>
                        <p className="text-[11px] text-gray-500">
                          {item.selectedColor} | Qty: {item.quantity}
                        </p>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-gray-900 whitespace-nowrap">
                      ₹{(item.product.price * item.quantity).toLocaleString("en-IN")}
                    </span>
                  </div>
                ))}
              </div>

              {/* Cost Breakdown */}
              <div className="border-t border-gray-100 pt-4 space-y-2.5 text-xs">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>₹ {cartSubtotal.toLocaleString("en-IN")}</span>
                </div>
                <div className="flex justify-between text-emerald-600">
                  <span>Discount</span>
                  <span>- ₹ {cartDiscount.toLocaleString("en-IN")}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span className="text-emerald-600 font-medium">FREE</span>
                </div>
                <div className="border-t border-gray-100 pt-3 flex justify-between text-base font-bold text-gray-900">
                  <span>Total</span>
                  <span>₹ {cartTotal.toLocaleString("en-IN")}</span>
                </div>
              </div>

              {/* Promo Code Input */}
              <div className="pt-2">
                <span className="block text-xs font-medium text-gray-700 mb-1.5">
                  Apply Promo Code
                </span>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Enter code"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    className="flex-1 px-3 py-2 text-xs border border-gray-300 rounded focus:outline-none focus:border-[#0f172a] bg-[#faf7f2]"
                  />
                  <button
                    type="button"
                    onClick={handleApplyPromo}
                    className="px-4 py-2 bg-[#0f172a] hover:bg-[#1e293b] text-white text-xs font-semibold rounded"
                  >
                    Apply
                  </button>
                </div>
                {promoMsg && <p className="text-[11px] text-emerald-600 mt-1">{promoMsg}</p>}
              </div>

              {/* Place Order Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 bg-[#0f172a] hover:bg-[#1e293b] text-white text-xs sm:text-sm font-semibold uppercase tracking-wider rounded-lg shadow-md flex items-center justify-center gap-2 transition-colors disabled:opacity-60"
                >
                  <span>
                    {isSubmitting ? "Processing Order..." : "Place Order (Offline Payment)"}
                  </span>
                </button>
                <p className="text-[10px] text-gray-400 text-center mt-2">
                  🔒 No online card details required. Concierge verifies order offline.
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
