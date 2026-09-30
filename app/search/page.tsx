"use client";

import React, { useState, useMemo, use } from "react";
import Link from "next/link";
import { Search, ChevronRight } from "lucide-react";
import { PRODUCTS, Product } from "@/data/products";
import { ProductCard } from "@/components/product/ProductCard";
import { FilterSidebar, FilterState } from "@/components/product/FilterSidebar";

interface SearchPageProps {
  searchParams?: Promise<{
    q?: string;
  }>;
}

export default function SearchPage({ searchParams }: SearchPageProps) {
  const resolvedSearchParams = searchParams ? use(searchParams) : undefined;
  const initialQuery = resolvedSearchParams?.q || "";

  const [query, setQuery] = useState(initialQuery);
  const [filters, setFilters] = useState<FilterState>({
    priceRanges: [],
    colors: [],
    occasions: [],
    fabrics: [],
    borderStyles: [],
    inStockOnly: false,
  });
  const [sortBy, setSortBy] = useState("popularity");

  const searchResults = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Query filter
      if (query.trim()) {
        const q = query.toLowerCase();
        const matchesQuery =
          product.name.toLowerCase().includes(q) ||
          product.category.toLowerCase().includes(q) ||
          product.fabric.toLowerCase().includes(q) ||
          product.occasion.toLowerCase().includes(q) ||
          product.description.toLowerCase().includes(q) ||
          product.colors.some((c) => c.name.toLowerCase().includes(q));
        if (!matchesQuery) return false;
      }

      // Price Filter
      if (filters.priceRanges.length > 0) {
        const matchesPrice = filters.priceRanges.some((range) => {
          if (range === "under-1000") return product.price < 1000;
          if (range === "1000-3000") return product.price >= 1000 && product.price <= 3000;
          if (range === "3000-5000") return product.price >= 3000 && product.price <= 5000;
          if (range === "5000-10000") return product.price >= 5000 && product.price <= 10000;
          if (range === "above-10000") return product.price > 10000;
          return false;
        });
        if (!matchesPrice) return false;
      }

      // Color Filter
      if (filters.colors.length > 0) {
        const matchesColor = product.colors.some((c) =>
          filters.colors.some((fc) => c.name.toLowerCase().includes(fc.toLowerCase()))
        );
        if (!matchesColor) return false;
      }

      // Occasion Filter
      if (filters.occasions.length > 0) {
        const matchesOccasion = filters.occasions.some((occ) =>
          product.occasion.toLowerCase().includes(occ.toLowerCase())
        );
        if (!matchesOccasion) return false;
      }

      // Fabric Filter
      if (filters.fabrics.length > 0) {
        const matchesFabric = filters.fabrics.some((f) =>
          product.fabric.toLowerCase().includes(f.toLowerCase())
        );
        if (!matchesFabric) return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === "price-low") return a.price - b.price;
      if (sortBy === "price-high") return b.price - a.price;
      if (sortBy === "rating") return b.rating - a.rating;
      return b.reviewsCount - a.reviewsCount;
    });
  }, [query, filters, sortBy]);

  return (
    <div className="min-h-screen bg-[#faf7f2] py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-1.5 text-xs text-gray-500">
          <Link href="/" className="hover:text-gray-900 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-gray-900 font-medium">Search</span>
        </nav>

        {/* Search Header Bar */}
        <div className="bg-white p-6 rounded-2xl border border-[#ede5d8] shadow-xs space-y-4">
          <h1 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900">
            Search Our Collections
          </h1>
          <div className="relative max-w-2xl">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by silk type, color, occasion, or name..."
              className="w-full pl-11 pr-4 py-3 bg-[#faf7f2] border border-gray-300 rounded-lg text-sm text-gray-900 focus:outline-none focus:border-[#0f172a]"
            />
          </div>
        </div>

        {/* Grid & Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Sidebar */}
          <div className="hidden lg:block lg:col-span-3">
            <FilterSidebar
              filters={filters}
              setFilters={setFilters}
              totalProductsCount={searchResults.length}
            />
          </div>

          {/* Results */}
          <div className="lg:col-span-9 space-y-6">
            <div className="flex items-center justify-between bg-white p-4 rounded-xl border border-[#ede5d8]">
              <span className="text-xs sm:text-sm text-gray-600">
                Found <strong className="text-gray-900">{searchResults.length}</strong> matching
                products
              </span>

              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-500">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-[#faf7f2] border border-[#ede5d8] rounded px-3 py-1 text-xs text-gray-800"
                >
                  <option value="popularity">Popularity</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Rating</option>
                </select>
              </div>
            </div>

            {searchResults.length === 0 ? (
              <div className="bg-white p-12 rounded-xl border border-[#ede5d8] text-center">
                <p className="font-serif text-lg text-gray-800 font-semibold mb-2">
                  No matching sarees found
                </p>
                <p className="text-xs text-gray-500">Try adjusting your keywords or clearing filters.</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                {searchResults.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
