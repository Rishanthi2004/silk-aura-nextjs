"use client";

import React from "react";
import { Award, Layers, ShieldCheck, Headphones } from "lucide-react";

export const TrustBadges: React.FC = () => {
  const badges = [
    {
      icon: Award,
      title: "Premium Quality",
      desc: "Authentic Silks",
    },
    {
      icon: Layers,
      title: "Wide Collection",
      desc: "Multiple Brands",
    },
    {
      icon: ShieldCheck,
      title: "Secure Packaging",
      desc: "Safe Delivery",
    },
    {
      icon: Headphones,
      title: "Customer Support",
      desc: "Always Here",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-8 relative z-30">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 bg-[#fbf9f5] p-4 sm:p-5 rounded-xl border border-[#ede5d8] shadow-sm">
        {badges.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="flex items-center gap-3 p-2 sm:p-3 rounded-lg hover:bg-white transition-colors"
            >
              <div className="w-10 h-10 rounded-full bg-[#f6eee3] text-[#c59b27] flex items-center justify-center flex-shrink-0 border border-[#e5d5c0]">
                <Icon className="w-5 h-5 stroke-[1.8]" />
              </div>
              <div className="min-w-0">
                <h4 className="text-xs sm:text-sm font-semibold text-gray-900 truncate">
                  {item.title}
                </h4>
                <p className="text-[11px] text-gray-500 truncate">{item.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
