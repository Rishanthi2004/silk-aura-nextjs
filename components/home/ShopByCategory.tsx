"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { CATEGORIES } from "@/data/categories";

export const ShopByCategory: React.FC = () => {
  return (
    <section id="categories" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
            Shop by Category
          </h2>
          <div className="w-12 h-0.5 bg-[#c59b27] mt-2" />
        </div>
        <Link
          href="/collections/sarees"
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-gray-700 hover:text-[#800020] transition-colors group"
        >
          <span>View All</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      {/* Categories Grid (4 cards matching screenshot) */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {CATEGORIES.map((cat) => (
          <Link
            key={cat.id}
            href={`/collections/${cat.slug}`}
            className="group flex flex-col bg-white rounded-xl border border-[#ede5d8] overflow-hidden shadow-xs hover:shadow-md transition-all duration-300"
          >
            <div className="relative aspect-[4/5] w-full bg-[#f4eee4] overflow-hidden">
              <Image
                src={cat.image}
                alt={cat.name}
                fill
                sizes="(max-width: 640px) 50vw, 25vw"
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="p-3.5 text-center bg-white border-t border-[#ede5d8]">
              <h3 className="font-medium text-sm text-gray-900 group-hover:text-[#800020] transition-colors">
                {cat.name}
              </h3>
              <p className="text-[11px] text-gray-400 mt-0.5">{cat.itemCount} Designs</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};
