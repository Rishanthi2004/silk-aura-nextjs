"use client";

import React, { useState } from "react";
import { ProductCard } from "@/components/product/ProductCard";
import { PRODUCTS } from "@/data/products";

type TabType = "new" | "bestseller" | "editors";

export const FeaturedCollections: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>("new");

  const filteredProducts = PRODUCTS.filter((p) => {
    if (activeTab === "new") return p.isNewArrival;
    if (activeTab === "bestseller") return p.isBestSeller;
    if (activeTab === "editors") return p.isEditorPick;
    return true;
  }).slice(0, 4);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
      {/* Title & Tabs */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
            Featured Collections
          </h2>
          <div className="w-12 h-0.5 bg-[#c59b27] mt-2" />
        </div>

        {/* Tab Buttons */}
        <div className="flex items-center gap-2 bg-[#f4eee4] p-1 rounded-lg border border-[#ede5d8] self-start sm:self-auto">
          <button
            onClick={() => setActiveTab("new")}
            className={`px-3 sm:px-4 py-1.5 text-xs font-semibold rounded-md transition-all ${
              activeTab === "new"
                ? "bg-[#0f172a] text-white shadow-xs"
                : "text-gray-700 hover:text-gray-900"
            }`}
          >
            New Arrivals
          </button>
          <button
            onClick={() => setActiveTab("bestseller")}
            className={`px-3 sm:px-4 py-1.5 text-xs font-semibold rounded-md transition-all ${
              activeTab === "bestseller"
                ? "bg-[#0f172a] text-white shadow-xs"
                : "text-gray-700 hover:text-gray-900"
            }`}
          >
            Best Sellers
          </button>
          <button
            onClick={() => setActiveTab("editors")}
            className={`px-3 sm:px-4 py-1.5 text-xs font-semibold rounded-md transition-all ${
              activeTab === "editors"
                ? "bg-[#0f172a] text-white shadow-xs"
                : "text-gray-700 hover:text-gray-900"
            }`}
          >
            Editor&apos;s Picks
          </button>
        </div>
      </div>

      {/* 4 Product Grid matching reference */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};
