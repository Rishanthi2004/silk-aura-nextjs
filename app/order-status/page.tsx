"use client";

import React, { useState, useEffect, use } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, CheckCircle2, Clock, PackageCheck, Truck, ShieldAlert, ArrowLeft } from "lucide-react";
import { useShop, PlacedOrder } from "@/context/ShopContext";

interface OrderStatusPageProps {
  searchParams?: Promise<{
    id?: string;
  }>;
}

export default function OrderStatusPage({ searchParams }: OrderStatusPageProps) {
  const resolvedSearchParams = searchParams ? use(searchParams) : undefined;
  const initialId = resolvedSearchParams?.id || "";

  const { orders, getOrderByIdOrPhone } = useShop();
  const [searchQuery, setSearchQuery] = useState(initialId);
  const [selectedOrder, setSelectedOrder] = useState<PlacedOrder | null>(null);
  const [notFoundQuery, setNotFoundQuery] = useState(false);

  useEffect(() => {
    if (initialId) {
      const match = getOrderByIdOrPhone(initialId);
      if (match) {
        setSelectedOrder(match);
      } else {
        setNotFoundQuery(true);
      }
    } else if (orders.length > 0) {
      setSelectedOrder(orders[0]);
    }
  }, [initialId, orders, getOrderByIdOrPhone]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery) return;
    const match = getOrderByIdOrPhone(searchQuery);
    if (match) {
      setSelectedOrder(match);
      setNotFoundQuery(false);
    } else {
      setSelectedOrder(null);
      setNotFoundQuery(true);
    }
  };

  const statusSteps = [
    { label: "Placed", icon: Clock },
    { label: "Under Review", icon: ShieldAlert },
    { label: "Confirmed", icon: PackageCheck },
    { label: "Shipped", icon: Truck },
  ];

  const getStepIndex = (status: string) => {
    if (status === "Placed") return 0;
    if (status === "Under Review") return 1;
    if (status === "Confirmed") return 2;
    if (status === "Shipped" || status === "Delivered") return 3;
    return 0;
  };

  return (
    <div className="min-h-screen bg-[#faf7f2] py-8 sm:py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900">
            Track Your Order
          </h1>
          <p className="text-xs sm:text-sm text-gray-600">
            Enter your Order ID (e.g. SILK12456) or Registered Phone Number
          </p>
        </div>

        {/* Search Bar */}
        <div className="bg-white p-4 sm:p-6 rounded-2xl border border-[#ede5d8] shadow-xs">
          <form onSubmit={handleSearch} className="flex gap-2">
            <input
              type="text"
              placeholder="e.g. SILK12456 or 9840123456"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 px-4 py-2.5 text-xs sm:text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-[#0f172a] bg-[#faf7f2]"
            />
            <button
              type="submit"
              className="px-6 py-2.5 bg-[#0f172a] hover:bg-[#1e293b] text-white text-xs sm:text-sm font-semibold rounded-lg flex items-center gap-2 transition-colors"
            >
              <Search className="w-4 h-4 text-[#fde047]" />
              <span>Track</span>
            </button>
          </form>

          {notFoundQuery && (
            <div className="mt-4 p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-lg">
              No active order found matching &quot;{searchQuery}&quot;. Please verify the Order ID or phone number.
            </div>
          )}
        </div>

        {/* Order Details & Timeline */}
        {selectedOrder && (
          <div className="bg-white rounded-2xl border border-[#ede5d8] overflow-hidden shadow-xs space-y-6 p-6 sm:p-8">
            {/* Order Top Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-gray-100 gap-4">
              <div>
                <span className="text-[11px] text-gray-500 uppercase tracking-wider font-semibold">
                  Order Reference
                </span>
                <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#0f172a]">
                  #{selectedOrder.orderId}
                </h2>
                <span className="text-xs text-gray-500">Placed on {selectedOrder.date}</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="px-3 py-1 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full text-xs font-semibold">
                  Status: {selectedOrder.status}
                </span>
              </div>
            </div>

            {/* Visual Step Tracker */}
            <div className="py-4">
              <div className="grid grid-cols-4 relative">
                {/* Connecting bar */}
                <div className="absolute top-4 left-0 right-0 h-1 bg-gray-200 -z-0">
                  <div
                    className="h-full bg-[#0f172a] transition-all duration-500"
                    style={{
                      width: `${(getStepIndex(selectedOrder.status) / (statusSteps.length - 1)) * 100}%`,
                    }}
                  />
                </div>

                {statusSteps.map((step, idx) => {
                  const currentIdx = getStepIndex(selectedOrder.status);
                  const isDone = idx <= currentIdx;
                  const isCurrent = idx === currentIdx;
                  const Icon = step.icon;

                  return (
                    <div key={idx} className="flex flex-col items-center text-center z-10">
                      <div
                        className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center transition-all ${
                          isDone
                            ? "bg-[#0f172a] text-[#fde047] shadow-sm"
                            : "bg-gray-100 text-gray-400 border border-gray-300"
                        } ${isCurrent ? "ring-4 ring-[#c59b27]/30" : ""}`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      <span
                        className={`mt-2 text-[11px] sm:text-xs font-semibold ${
                          isDone ? "text-gray-900" : "text-gray-400"
                        }`}
                      >
                        {step.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Timeline details list */}
            <div className="bg-[#faf7f2] p-5 rounded-xl border border-[#ede5d8] space-y-4">
              <h3 className="font-semibold text-xs sm:text-sm text-gray-900 uppercase tracking-wider">
                Status History
              </h3>
              <div className="space-y-3">
                {selectedOrder.timeline.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-xs">
                    <div
                      className={`w-2 h-2 rounded-full mt-1.5 ${
                        item.done ? "bg-emerald-500" : "bg-gray-300"
                      }`}
                    />
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <span className={`font-semibold ${item.done ? "text-gray-900" : "text-gray-400"}`}>
                          {item.status}
                        </span>
                        <span className="text-[11px] text-gray-400">{item.date}</span>
                      </div>
                      <p className="text-gray-500 text-[11px] mt-0.5">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Items & Shipping summary */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-gray-100 text-xs">
              {/* Items */}
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900 uppercase tracking-wider">Ordered Items</h4>
                <div className="space-y-2">
                  {selectedOrder.items.map((item) => (
                    <div key={item.id} className="flex items-center gap-3 p-2 bg-white rounded border border-gray-100">
                      <div className="relative w-10 h-12 bg-gray-100 rounded overflow-hidden flex-shrink-0">
                        <Image
                          src={item.product.images[0]}
                          alt={item.product.name}
                          fill
                          sizes="40px"
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-gray-900 truncate">{item.product.name}</p>
                        <p className="text-[11px] text-gray-500">
                          {item.selectedColor} | Qty: {item.quantity}
                        </p>
                      </div>
                      <span className="font-bold text-gray-900">
                        ₹{(item.product.price * item.quantity).toLocaleString("en-IN")}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Delivery Address */}
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900 uppercase tracking-wider">
                  Delivery Address
                </h4>
                <div className="p-3 bg-white rounded border border-gray-100 space-y-1">
                  <p className="font-semibold text-gray-900">{selectedOrder.customer.fullName}</p>
                  <p className="text-gray-600">{selectedOrder.customer.address}</p>
                  <p className="text-gray-600">
                    {selectedOrder.customer.city}, {selectedOrder.customer.state} -{" "}
                    {selectedOrder.customer.pincode}
                  </p>
                  <p className="text-gray-600 pt-1">Phone: {selectedOrder.customer.phone}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
