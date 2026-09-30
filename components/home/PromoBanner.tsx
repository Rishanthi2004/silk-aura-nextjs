"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export const PromoBanner: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="relative rounded-2xl overflow-hidden shadow-xl bg-gradient-to-r from-[#2c0b1e] via-[#4a102f] to-[#1a0612] text-white border border-[#581c3c]">
        {/* Decorative ambient lighting */}
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-[#c59b27]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
          {/* Text Content */}
          <div className="lg:col-span-6 p-8 sm:p-12 space-y-4 z-10">
            <span className="inline-block text-[#fde047] text-xs font-semibold tracking-widest uppercase">
              Heirloom Craftsmanship
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              Celebrate Tradition <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fef08a] via-[#fde047] to-[#eab308]">
                with Modern Grace
              </span>
            </h2>

            <p className="text-gray-300 text-sm sm:text-base font-light max-w-md">
              Authentic silk sarees for every occasion, woven with pure silk threads and gold zari
              by traditional generational weavers.
            </p>

            <div className="pt-3">
              <Link
                href="/collections/sarees"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#c59b27] hover:bg-[#d4af37] text-[#0f172a] font-semibold text-xs sm:text-sm uppercase tracking-wider rounded transition-all transform hover:translate-x-1 shadow-md"
              >
                <span>Explore Collection</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Banner Saree & Diya Image */}
          <div className="lg:col-span-6 relative h-64 sm:h-80 lg:h-96 w-full">
            <Image
              src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=85"
              alt="Folded Silk Sarees and Brass Diyas"
              fill
              className="object-cover object-center lg:object-right"
            />
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#2c0b1e] via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};
