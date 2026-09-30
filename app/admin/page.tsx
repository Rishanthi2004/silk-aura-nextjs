"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  LayoutDashboard,
  Package,
  ShoppingBag,
  Users,
  FileText,
  Settings,
  LogOut,
  TrendingUp,
  ArrowUpRight,
  Clock,
  CheckCircle2,
  Truck,
  Eye,
  Search,
  Filter,
} from "lucide-react";
import { useShop } from "@/context/ShopContext";
import { PRODUCTS } from "@/data/products";

export default function AdminDashboardPage() {
  const { orders } = useShop();
  const [activeTab, setActiveTab] = useState<"dashboard" | "products" | "orders" | "customers">(
    "dashboard"
  );
  const [orderFilter, setOrderFilter] = useState("all");

  const statCards = [
    {
      title: "Total Revenue",
      value: "₹ 2,48,500",
      change: "+18%",
      isPositive: true,
    },
    {
      title: "Total Orders",
      value: "248",
      change: "+14%",
      isPositive: true,
    },
    {
      title: "Pending Orders",
      value: "18",
      change: "-3%",
      isPositive: false,
    },
    {
      title: "Total Products",
      value: "124",
      change: "+22%",
      isPositive: true,
    },
  ];

  const recentOrders = [
    {
      id: "#SILK12456",
      customer: "Priya Sundaram",
      items: "Kanchipuram Silk + Mysore Silk",
      amount: "₹ 13,498",
      status: "Confirmed",
      date: "24 Sep 2026",
    },
    {
      id: "#SILK12455",
      customer: "Ananya Iyer",
      items: "Banarasi Silk Saree",
      amount: "₹ 7,999",
      status: "Pending",
      date: "24 Sep 2026",
    },
    {
      id: "#SILK12454",
      customer: "Kavita Rao",
      items: "Royal Heritage Lehenga",
      amount: "₹ 18,999",
      status: "Shipped",
      date: "23 Sep 2026",
    },
    {
      id: "#SILK12453",
      customer: "Deepika Verma",
      items: "Cotton Silk Saree",
      amount: "₹ 4,999",
      status: "Delivered",
      date: "22 Sep 2026",
    },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Pending":
        return "bg-amber-100 text-amber-800 border border-amber-200";
      case "Confirmed":
        return "bg-blue-100 text-blue-800 border border-blue-200";
      case "Shipped":
        return "bg-purple-100 text-purple-800 border border-purple-200";
      case "Delivered":
        return "bg-emerald-100 text-emerald-800 border border-emerald-200";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-[#f1f5f9] flex">
      {/* Dark Sidebar matching reference */}
      <aside className="w-64 bg-[#0f172a] text-gray-300 flex flex-col justify-between hidden md:flex min-h-screen border-r border-slate-800">
        <div>
          {/* Logo */}
          <div className="p-6 border-b border-slate-800 flex items-center gap-2.5">
            <div className="w-7 h-7 rounded bg-gradient-to-tr from-[#c59b27] to-[#fef08a] flex items-center justify-center text-[#0f172a] font-serif font-bold text-sm">
              S
            </div>
            <span className="font-serif text-lg font-bold text-white tracking-wide">
              SilkAura Admin
            </span>
          </div>

          {/* Navigation */}
          <nav className="p-4 space-y-1.5 text-xs font-medium">
            <button
              onClick={() => setActiveTab("dashboard")}
              className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg transition-colors text-left ${
                activeTab === "dashboard"
                  ? "bg-[#1e293b] text-[#fde047] font-semibold"
                  : "hover:bg-slate-800 text-gray-400 hover:text-white"
              }`}
            >
              <LayoutDashboard className="w-4 h-4" />
              <span>Dashboard</span>
            </button>

            <button
              onClick={() => setActiveTab("products")}
              className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg transition-colors text-left ${
                activeTab === "products"
                  ? "bg-[#1e293b] text-[#fde047] font-semibold"
                  : "hover:bg-slate-800 text-gray-400 hover:text-white"
              }`}
            >
              <Package className="w-4 h-4" />
              <span>Products ({PRODUCTS.length})</span>
            </button>

            <button
              onClick={() => setActiveTab("orders")}
              className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg transition-colors text-left ${
                activeTab === "orders"
                  ? "bg-[#1e293b] text-[#fde047] font-semibold"
                  : "hover:bg-slate-800 text-gray-400 hover:text-white"
              }`}
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Orders ({recentOrders.length})</span>
            </button>

            <button
              onClick={() => setActiveTab("customers")}
              className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg transition-colors text-left ${
                activeTab === "customers"
                  ? "bg-[#1e293b] text-[#fde047] font-semibold"
                  : "hover:bg-slate-800 text-gray-400 hover:text-white"
              }`}
            >
              <Users className="w-4 h-4" />
              <span>Customers</span>
            </button>

            <div className="pt-4 border-t border-slate-800 mt-4">
              <Link
                href="/"
                className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg hover:bg-slate-800 text-gray-400 hover:text-white text-xs"
              >
                <Eye className="w-4 h-4" />
                <span>Customer Storefront</span>
              </Link>
            </div>
          </nav>
        </div>

        {/* Bottom User info */}
        <div className="p-4 border-t border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-slate-700 text-white flex items-center justify-center text-xs font-bold">
              AD
            </div>
            <div>
              <p className="text-xs font-semibold text-white">Store Admin</p>
              <p className="text-[10px] text-gray-400">admin@silkaura.com</p>
            </div>
          </div>
          <Link href="/" title="Exit Admin" className="text-gray-400 hover:text-white">
            <LogOut className="w-4 h-4" />
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto">
        {/* Top bar */}
        <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-lg font-bold text-gray-900 capitalize font-serif">
              {activeTab} Overview
            </h1>
            <p className="text-xs text-gray-500">SilkAura Offline Commerce Management</p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="px-3 py-1.5 bg-[#0f172a] text-white text-xs font-semibold rounded hover:bg-[#1e293b]"
            >
              View Live Store
            </Link>
          </div>
        </header>

        <div className="p-6 space-y-6 max-w-7xl mx-auto">
          {/* 4 Stat Cards matching reference */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {statCards.map((card, idx) => (
              <div
                key={idx}
                className="bg-white p-5 rounded-xl border border-gray-200 shadow-xs space-y-2"
              >
                <span className="text-xs text-gray-500 font-medium">{card.title}</span>
                <div className="flex items-baseline justify-between">
                  <span className="text-xl sm:text-2xl font-bold text-gray-900 font-serif">
                    {card.value}
                  </span>
                  <span
                    className={`text-xs font-semibold flex items-center ${
                      card.isPositive ? "text-emerald-600" : "text-amber-600"
                    }`}
                  >
                    {card.change}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {activeTab === "dashboard" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Sales Overview Chart (SVG) */}
              <div className="lg:col-span-7 bg-white p-6 rounded-xl border border-gray-200 shadow-xs space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="font-serif font-bold text-base text-gray-900">
                      Sales Overview
                    </h2>
                    <p className="text-xs text-gray-500">Monthly gross sales volume</p>
                  </div>
                  <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-1 rounded">
                    +24.5% YoY
                  </span>
                </div>

                {/* SVG Line Graph */}
                <div className="h-56 w-full pt-4">
                  <svg className="w-full h-full" viewBox="0 0 500 200">
                    <defs>
                      <linearGradient id="salesGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>

                    {/* Grid lines */}
                    <line x1="0" y1="40" x2="500" y2="40" stroke="#f1f5f9" strokeWidth="1" />
                    <line x1="0" y1="90" x2="500" y2="90" stroke="#f1f5f9" strokeWidth="1" />
                    <line x1="0" y1="140" x2="500" y2="140" stroke="#f1f5f9" strokeWidth="1" />

                    {/* Area fill */}
                    <path
                      d="M 10 160 Q 60 140, 100 120 T 180 130 T 260 80 T 340 100 T 420 50 T 490 60 L 490 190 L 10 190 Z"
                      fill="url(#salesGrad)"
                    />

                    {/* Stroke line */}
                    <path
                      d="M 10 160 Q 60 140, 100 120 T 180 130 T 260 80 T 340 100 T 420 50 T 490 60"
                      fill="none"
                      stroke="#0284c7"
                      strokeWidth="3"
                    />

                    {/* Points */}
                    <circle cx="260" cy="80" r="4" fill="#0284c7" />
                    <circle cx="420" cy="50" r="4" fill="#0284c7" />
                  </svg>
                  <div className="flex justify-between text-[11px] text-gray-400 pt-2 px-2">
                    <span>Jan</span>
                    <span>Mar</span>
                    <span>May</span>
                    <span>Jul</span>
                    <span>Sep</span>
                    <span>Nov</span>
                  </div>
                </div>
              </div>

              {/* Recent Orders Table matching reference */}
              <div className="lg:col-span-5 bg-white p-6 rounded-xl border border-gray-200 shadow-xs space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="font-serif font-bold text-base text-gray-900">Recent Orders</h2>
                  <button
                    onClick={() => setActiveTab("orders")}
                    className="text-xs text-[#0f172a] hover:underline font-semibold"
                  >
                    View All
                  </button>
                </div>

                <div className="divide-y divide-gray-100 text-xs">
                  {recentOrders.map((ord) => (
                    <div key={ord.id} className="py-3 flex items-center justify-between gap-2">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-gray-900">{ord.id}</span>
                          <span
                            className={`text-[10px] px-2 py-0.5 rounded-full font-semibold ${getStatusBadge(
                              ord.status
                            )}`}
                          >
                            {ord.status}
                          </span>
                        </div>
                        <p className="text-gray-500 text-[11px] mt-0.5">{ord.customer}</p>
                      </div>
                      <div className="text-right">
                        <span className="font-bold text-gray-900">{ord.amount}</span>
                        <p className="text-[10px] text-gray-400">{ord.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === "products" && (
            <div className="bg-white rounded-xl border border-gray-200 p-6 space-y-4">
              <h2 className="font-serif font-bold text-base text-gray-900">Product Inventory</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left">
                  <thead className="bg-gray-50 text-gray-600 uppercase border-y border-gray-200">
                    <tr>
                      <th className="p-3">Product</th>
                      <th className="p-3">Category</th>
                      <th className="p-3">Price</th>
                      <th className="p-3">Discount</th>
                      <th className="p-3">Fabric</th>
                      <th className="p-3">Stock Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {PRODUCTS.map((p) => (
                      <tr key={p.id} className="hover:bg-gray-50">
                        <td className="p-3 font-semibold text-gray-900">{p.name}</td>
                        <td className="p-3 text-gray-600">{p.category}</td>
                        <td className="p-3 font-bold text-gray-900">
                          ₹{p.price.toLocaleString("en-IN")}
                        </td>
                        <td className="p-3 text-red-600 font-semibold">{p.discount}% OFF</td>
                        <td className="p-3 text-gray-600">{p.fabric}</td>
                        <td className="p-3">
                          <span className="px-2 py-0.5 bg-emerald-50 text-emerald-700 rounded-full font-semibold text-[10px]">
                            In Stock
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === "orders" && (
            <div className="bg-white rounded-xl border border-gray-200 p-6 space-y-4">
              <h2 className="font-serif font-bold text-base text-gray-900">All Customer Orders</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left">
                  <thead className="bg-gray-50 text-gray-600 uppercase border-y border-gray-200">
                    <tr>
                      <th className="p-3">Order ID</th>
                      <th className="p-3">Customer</th>
                      <th className="p-3">Items</th>
                      <th className="p-3">Amount</th>
                      <th className="p-3">Date</th>
                      <th className="p-3">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {recentOrders.map((o) => (
                      <tr key={o.id} className="hover:bg-gray-50">
                        <td className="p-3 font-bold text-gray-900">{o.id}</td>
                        <td className="p-3 text-gray-800 font-medium">{o.customer}</td>
                        <td className="p-3 text-gray-600">{o.items}</td>
                        <td className="p-3 font-bold text-gray-900">{o.amount}</td>
                        <td className="p-3 text-gray-500">{o.date}</td>
                        <td className="p-3">
                          <span
                            className={`px-2 py-0.5 rounded-full font-semibold text-[10px] ${getStatusBadge(
                              o.status
                            )}`}
                          >
                            {o.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === "customers" && (
            <div className="bg-white rounded-xl border border-gray-200 p-6 space-y-4">
              <h2 className="font-serif font-bold text-base text-gray-900">Customer Directory</h2>
              <p className="text-xs text-gray-500">
                Offline concierge contacts and high-value buyers.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { name: "Priya Sundaram", phone: "+91 98401 23456", city: "Chennai", orders: 3 },
                  { name: "Ananya Iyer", phone: "+91 98401 23457", city: "Bangalore", orders: 2 },
                  { name: "Kavita Rao", phone: "+91 98401 23458", city: "Hyderabad", orders: 5 },
                ].map((c, idx) => (
                  <div key={idx} className="p-4 bg-gray-50 rounded-lg border border-gray-200 text-xs">
                    <p className="font-bold text-gray-900">{c.name}</p>
                    <p className="text-gray-600">{c.phone}</p>
                    <p className="text-gray-500">{c.city}</p>
                    <p className="text-emerald-700 font-semibold mt-2">{c.orders} Orders Placed</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
