"use client";

import React, { useState, useMemo, use } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, SlidersHorizontal, ChevronLeft, ArrowUpDown } from "lucide-react";
import { CATEGORIES } from "@/data/categories";
import { PRODUCTS, Product } from "@/data/products";
import { ProductCard } from "@/components/product/ProductCard";
import { FilterSidebar, FilterState } from "@/components/product/FilterSidebar";

interface PageProps {
  params: Promise<{
    category: string;
  }>;
  searchParams?: Promise<{
    occasion?: string;
    sort?: string;
  }>;
}

export default function CategoryPage({ params, searchParams }: PageProps) {
  const resolvedParams = use(params);
  const resolvedSearchParams = searchParams ? use(searchParams) : undefined;
  const categorySlug = resolvedParams.category;

  const currentCategory =
    CATEGORIES.find((c) => c.slug === categorySlug) || {
      id: categorySlug,
      name: categorySlug.charAt(0).toUpperCase() + categorySlug.slice(1).replace("-", " "),
      slug: categorySlug,
      image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=80",
      itemCount: 120,
      description: "Explore our exquisite collection of authentic silk ensembles, crafted with tradition and elegance.",
      bannerImage: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1600&q=80",
    };

  // Initial Filter State
  const initialOccasion = resolvedSearchParams?.occasion;
  const [filters, setFilters] = useState<FilterState>({
    priceRanges: [],
    colors: [],
    occasions: initialOccasion ? [initialOccasion] : [],
    fabrics: [],
    borderStyles: [],
    inStockOnly: false,
  });

  const [sortBy, setSortBy] = useState<string>(resolvedSearchParams?.sort === "new" ? "newest" : "popularity");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const itemsPerPage = 9;

  // Filter and Sort Products
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Category match
      if (categorySlug !== "all" && product.categorySlug !== categorySlug && categorySlug !== "sarees") {
        if (product.categorySlug !== categorySlug) return false;
      }

      // Price Range Filter
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

      // Colors Filter
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

      // Border Style Filter
      if (filters.borderStyles.length > 0) {
        const matchesBorder = filters.borderStyles.some((b) =>
          product.borderStyle.toLowerCase().includes(b.toLowerCase())
        );
        if (!matchesBorder) return false;
      }

      // In Stock
      if (filters.inStockOnly && !product.inStock) {
        return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === "price-low") return a.price - b.price;
      if (sortBy === "price-high") return b.price - a.price;
      if (sortBy === "rating") return b.rating - a.rating;
      if (sortBy === "newest") return (b.isNewArrival ? 1 : 0) - (a.isNewArrival ? 1 : 0);
      // Popularity (default)
      return b.reviewsCount - a.reviewsCount;
    });
  }, [categorySlug, filters, sortBy]);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage) || 1;
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="min-h-screen bg-[#faf7f2] pb-16">
      {/* Category Banner matching screenshot */}
      <div className="relative bg-[#111827] text-white py-12 px-6 sm:px-12 overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <Image
            src={currentCategory.bannerImage}
            alt={currentCategory.name}
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d131f] via-[#0d131f]/90 to-transparent" />

        <div className="relative max-w-7xl mx-auto z-10 space-y-2">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-xs text-gray-400">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-500" />
            <span className="text-[#fde047] font-medium">{currentCategory.name}</span>
          </nav>

          <h1 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-white">
            {currentCategory.name}
          </h1>

          <p className="text-xs sm:text-sm text-gray-300 max-w-xl font-light">
            {currentCategory.description}
          </p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Desktop Filter Sidebar (Left 3 cols) */}
          <div className="hidden lg:block lg:col-span-3 sticky top-24">
            <FilterSidebar
              filters={filters}
              setFilters={setFilters}
              totalProductsCount={filteredProducts.length}
            />
          </div>

          {/* Product Grid & Controls (Right 9 cols) */}
          <div className="lg:col-span-9 space-y-6">
            {/* Top Toolbar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-3.5 rounded-xl border border-[#ede5d8] shadow-xs">
              <div className="flex items-center justify-between sm:justify-start gap-4">
                <span className="text-xs sm:text-sm text-gray-600 font-medium">
                  Showing <span className="font-bold text-gray-900">{filteredProducts.length}</span>{" "}
                  products
                </span>

                {/* Mobile Filter Trigger */}
                <button
                  onClick={() => setMobileFiltersOpen(true)}
                  className="lg:hidden flex items-center gap-1.5 px-3 py-1.5 bg-[#f5efe6] text-xs font-semibold text-gray-800 rounded border border-[#ede5d8]"
                >
                  <SlidersHorizontal className="w-3.5 h-3.5 text-[#c59b27]" />
                  <span>Filters</span>
                </button>
              </div>

              {/* Sort By Dropdown */}
              <div className="flex items-center gap-2 self-end sm:self-auto">
                <span className="text-xs text-gray-500 whitespace-nowrap">Sort by:</span>
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="bg-[#faf7f2] border border-[#ede5d8] rounded-md px-3 py-1.5 text-xs text-gray-800 focus:outline-none focus:border-[#0f172a] font-medium pr-8 cursor-pointer"
                  >
                    <option value="popularity">Popularity</option>
                    <option value="newest">New Arrivals</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Customer Rating</option>
                  </select>
                </div>
              </div>
            </div>

            {/* 3-Column Product Grid */}
            {paginatedProducts.length === 0 ? (
              <div className="bg-white rounded-xl border border-[#ede5d8] p-12 text-center">
                <p className="font-serif text-lg text-gray-800 font-semibold mb-2">
                  No sarees matched your current filter criteria
                </p>
                <p className="text-xs text-gray-500 mb-6">
                  Try clearing some filters or check other collections.
                </p>
                <button
                  onClick={() =>
                    setFilters({
                      priceRanges: [],
                      colors: [],
                      occasions: [],
                      fabrics: [],
                      borderStyles: [],
                      inStockOnly: false,
                    })
                  }
                  className="px-5 py-2.5 bg-[#0f172a] text-white text-xs font-semibold rounded hover:bg-[#1e293b]"
                >
                  Clear All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                {paginatedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}

            {/* Pagination Controls matching screenshot: < 1 2 3 4 5 > */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-1.5 pt-6">
                <button
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="w-8 h-8 rounded border border-[#ede5d8] bg-white flex items-center justify-center text-gray-600 disabled:opacity-40 hover:bg-gray-50"
                  aria-label="Previous page"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                {Array.from({ length: totalPages }).map((_, idx) => {
                  const pageNum = idx + 1;
                  const isActive = currentPage === pageNum;
                  return (
                    <button
                      key={pageNum}
                      onClick={() => setCurrentPage(pageNum)}
                      className={`w-8 h-8 rounded text-xs font-semibold transition-colors ${
                        isActive
                          ? "bg-[#0f172a] text-white shadow-xs"
                          : "bg-white border border-[#ede5d8] text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      {pageNum}
                    </button>
                  );
                })}

                <button
                  onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  className="w-8 h-8 rounded border border-[#ede5d8] bg-white flex items-center justify-center text-gray-600 disabled:opacity-40 hover:bg-gray-50"
                  aria-label="Next page"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Filters Drawer */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-50 lg:hidden overflow-hidden">
          <div
            className="fixed inset-0 bg-black/60"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
            <div className="w-screen max-w-xs bg-[#faf7f2] p-4 overflow-y-auto">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-serif font-bold text-base text-gray-900">Filters</h3>
                <button
                  onClick={() => setMobileFiltersOpen(false)}
                  className="text-xs px-3 py-1 bg-[#0f172a] text-white rounded"
                >
                  Apply
                </button>
              </div>
              <FilterSidebar
                filters={filters}
                setFilters={setFilters}
                totalProductsCount={filteredProducts.length}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
