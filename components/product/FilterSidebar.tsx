"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp, RotateCcw } from "lucide-react";

export interface FilterState {
  priceRanges: string[];
  colors: string[];
  occasions: string[];
  fabrics: string[];
  borderStyles: string[];
  inStockOnly: boolean;
}

interface FilterSidebarProps {
  filters: FilterState;
  setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
  totalProductsCount: number;
}

export const FilterSidebar: React.FC<FilterSidebarProps> = ({
  filters,
  setFilters,
  totalProductsCount,
}) => {
  const [openSections, setOpenSections] = useState({
    price: true,
    color: true,
    occasion: true,
    fabric: true,
    border: true,
    availability: true,
  });

  const toggleSection = (section: keyof typeof openSections) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const handlePriceChange = (range: string) => {
    setFilters((prev) => ({
      ...prev,
      priceRanges: prev.priceRanges.includes(range)
        ? prev.priceRanges.filter((r) => r !== range)
        : [...prev.priceRanges, range],
    }));
  };

  const handleColorChange = (color: string) => {
    setFilters((prev) => ({
      ...prev,
      colors: prev.colors.includes(color)
        ? prev.colors.filter((c) => c !== color)
        : [...prev.colors, color],
    }));
  };

  const handleOccasionChange = (occ: string) => {
    setFilters((prev) => ({
      ...prev,
      occasions: prev.occasions.includes(occ)
        ? prev.occasions.filter((o) => o !== occ)
        : [...prev.occasions, occ],
    }));
  };

  const handleFabricChange = (fabric: string) => {
    setFilters((prev) => ({
      ...prev,
      fabrics: prev.fabrics.includes(fabric)
        ? prev.fabrics.filter((f) => f !== fabric)
        : [...prev.fabrics, fabric],
    }));
  };

  const handleBorderChange = (border: string) => {
    setFilters((prev) => ({
      ...prev,
      borderStyles: prev.borderStyles.includes(border)
        ? prev.borderStyles.filter((b) => b !== border)
        : [...prev.borderStyles, border],
    }));
  };

  const resetAllFilters = () => {
    setFilters({
      priceRanges: [],
      colors: [],
      occasions: [],
      fabrics: [],
      borderStyles: [],
      inStockOnly: false,
    });
  };

  const hasActiveFilters =
    filters.priceRanges.length > 0 ||
    filters.colors.length > 0 ||
    filters.occasions.length > 0 ||
    filters.fabrics.length > 0 ||
    filters.borderStyles.length > 0 ||
    filters.inStockOnly;

  const colorPalette = [
    { name: "Purple", hex: "#6b21a8" },
    { name: "Pink", hex: "#db2777" },
    { name: "Green", hex: "#047857" },
    { name: "Blue", hex: "#1e3a8a" },
    { name: "Red", hex: "#b91c1c" },
    { name: "Gold", hex: "#d97706" },
    { name: "Teal", hex: "#0d9488" },
    { name: "Orange", hex: "#ea580c" },
    { name: "Maroon", hex: "#881337" },
    { name: "Beige", hex: "#d6c7a1" },
  ];

  return (
    <aside className="w-full bg-white p-5 rounded-xl border border-[#ede5d8] shadow-xs space-y-5">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-gray-100">
        <h3 className="font-semibold text-sm text-gray-900 uppercase tracking-wider">Filters</h3>
        {hasActiveFilters && (
          <button
            onClick={resetAllFilters}
            className="text-[11px] text-[#800020] hover:underline flex items-center gap-1 font-medium"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Reset All</span>
          </button>
        )}
      </div>

      {/* Price Range */}
      <div className="border-b border-gray-100 pb-4">
        <button
          onClick={() => toggleSection("price")}
          className="w-full flex items-center justify-between text-xs font-semibold text-gray-900 mb-2.5"
        >
          <span>Price Range</span>
          {openSections.price ? (
            <ChevronUp className="w-3.5 h-3.5 text-gray-500" />
          ) : (
            <ChevronDown className="w-3.5 h-3.5 text-gray-500" />
          )}
        </button>

        {openSections.price && (
          <div className="space-y-2 text-xs text-gray-700 pt-1">
            {[
              { label: "Under ₹1,000", value: "under-1000" },
              { label: "₹1,000 - ₹3,000", value: "1000-3000" },
              { label: "₹3,000 - ₹5,000", value: "3000-5000" },
              { label: "₹5,000 - ₹10,000", value: "5000-10000" },
              { label: "₹10,000+", value: "above-10000" },
            ].map((range) => (
              <label
                key={range.value}
                className="flex items-center gap-2 cursor-pointer hover:text-gray-900"
              >
                <input
                  type="checkbox"
                  checked={filters.priceRanges.includes(range.value)}
                  onChange={() => handlePriceChange(range.value)}
                  className="rounded border-gray-300 text-[#0f172a] focus:ring-[#c59b27] h-3.5 w-3.5 accent-[#0f172a]"
                />
                <span className="text-xs">{range.label}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Color Swatches */}
      <div className="border-b border-gray-100 pb-4">
        <button
          onClick={() => toggleSection("color")}
          className="w-full flex items-center justify-between text-xs font-semibold text-gray-900 mb-2.5"
        >
          <span>Color</span>
          {openSections.color ? (
            <ChevronUp className="w-3.5 h-3.5 text-gray-500" />
          ) : (
            <ChevronDown className="w-3.5 h-3.5 text-gray-500" />
          )}
        </button>

        {openSections.color && (
          <div className="grid grid-cols-5 gap-2 pt-1">
            {colorPalette.map((c) => {
              const isSelected = filters.colors.includes(c.name);
              return (
                <button
                  key={c.name}
                  onClick={() => handleColorChange(c.name)}
                  title={c.name}
                  className={`w-6 h-6 rounded-full border transition-all ${
                    isSelected
                      ? "ring-2 ring-offset-2 ring-[#0f172a] scale-110"
                      : "border-gray-200 hover:scale-105"
                  }`}
                  style={{ backgroundColor: c.hex }}
                />
              );
            })}
          </div>
        )}
      </div>

      {/* Occasion */}
      <div className="border-b border-gray-100 pb-4">
        <button
          onClick={() => toggleSection("occasion")}
          className="w-full flex items-center justify-between text-xs font-semibold text-gray-900 mb-2.5"
        >
          <span>Occasion</span>
          {openSections.occasion ? (
            <ChevronUp className="w-3.5 h-3.5 text-gray-500" />
          ) : (
            <ChevronDown className="w-3.5 h-3.5 text-gray-500" />
          )}
        </button>

        {openSections.occasion && (
          <div className="space-y-2 text-xs text-gray-700 pt-1">
            {["Bridal", "Festive / Temple", "Office Wear", "Party", "Everyday"].map((occ) => (
              <label
                key={occ}
                className="flex items-center gap-2 cursor-pointer hover:text-gray-900"
              >
                <input
                  type="checkbox"
                  checked={filters.occasions.includes(occ)}
                  onChange={() => handleOccasionChange(occ)}
                  className="rounded border-gray-300 text-[#0f172a] focus:ring-[#c59b27] h-3.5 w-3.5 accent-[#0f172a]"
                />
                <span className="text-xs">{occ}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Fabric Type */}
      <div className="border-b border-gray-100 pb-4">
        <button
          onClick={() => toggleSection("fabric")}
          className="w-full flex items-center justify-between text-xs font-semibold text-gray-900 mb-2.5"
        >
          <span>Fabric Type</span>
          {openSections.fabric ? (
            <ChevronUp className="w-3.5 h-3.5 text-gray-500" />
          ) : (
            <ChevronDown className="w-3.5 h-3.5 text-gray-500" />
          )}
        </button>

        {openSections.fabric && (
          <div className="space-y-2 text-xs text-gray-700 pt-1">
            {["Kanchipuram Silk", "Mysore Crepe Silk", "Banarasi Katan", "Tussar Silk", "Cotton Silk"].map(
              (fabric) => (
                <label
                  key={fabric}
                  className="flex items-center gap-2 cursor-pointer hover:text-gray-900"
                >
                  <input
                    type="checkbox"
                    checked={filters.fabrics.includes(fabric)}
                    onChange={() => handleFabricChange(fabric)}
                    className="rounded border-gray-300 text-[#0f172a] focus:ring-[#c59b27] h-3.5 w-3.5 accent-[#0f172a]"
                  />
                  <span className="text-xs">{fabric}</span>
                </label>
              )
            )}
          </div>
        )}
      </div>

      {/* Border Style */}
      <div className="border-b border-gray-100 pb-4">
        <button
          onClick={() => toggleSection("border")}
          className="w-full flex items-center justify-between text-xs font-semibold text-gray-900 mb-2.5"
        >
          <span>Border Style</span>
          {openSections.border ? (
            <ChevronUp className="w-3.5 h-3.5 text-gray-500" />
          ) : (
            <ChevronDown className="w-3.5 h-3.5 text-gray-500" />
          )}
        </button>

        {openSections.border && (
          <div className="space-y-2 text-xs text-gray-700 pt-1">
            {["Temple Border", "Gold Zari Border", "Floral Jaal", "Minimal Border"].map(
              (border) => (
                <label
                  key={border}
                  className="flex items-center gap-2 cursor-pointer hover:text-gray-900"
                >
                  <input
                    type="checkbox"
                    checked={filters.borderStyles.includes(border)}
                    onChange={() => handleBorderChange(border)}
                    className="rounded border-gray-300 text-[#0f172a] focus:ring-[#c59b27] h-3.5 w-3.5 accent-[#0f172a]"
                  />
                  <span className="text-xs">{border}</span>
                </label>
              )
            )}
          </div>
        )}
      </div>

      {/* Availability */}
      <div>
        <button
          onClick={() => toggleSection("availability")}
          className="w-full flex items-center justify-between text-xs font-semibold text-gray-900 mb-2.5"
        >
          <span>Availability</span>
          {openSections.availability ? (
            <ChevronUp className="w-3.5 h-3.5 text-gray-500" />
          ) : (
            <ChevronDown className="w-3.5 h-3.5 text-gray-500" />
          )}
        </button>

        {openSections.availability && (
          <div className="pt-1">
            <label className="flex items-center gap-2 cursor-pointer text-xs text-gray-700 hover:text-gray-900">
              <input
                type="checkbox"
                checked={filters.inStockOnly}
                onChange={(e) =>
                  setFilters((prev) => ({ ...prev, inStockOnly: e.target.checked }))
                }
                className="rounded border-gray-300 text-[#0f172a] focus:ring-[#c59b27] h-3.5 w-3.5 accent-[#0f172a]"
              />
              <span>In Stock Only ({totalProductsCount})</span>
            </label>
          </div>
        )}
      </div>
    </aside>
  );
};
