"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";
import { FAQS_DATA } from "@/data/faqs";

export default function FAQsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = [
    "All",
    "Authenticity & Quality",
    "Ordering & Payment",
    "Shipping & Delivery",
    "Returns & Exchanges",
    "Care & Maintenance",
  ];

  const filteredFaqs =
    activeCategory === "All"
      ? FAQS_DATA
      : FAQS_DATA.filter((f) => f.category === activeCategory);

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="min-h-screen bg-[#faf7f2] py-10 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header */}
        <div className="text-center space-y-3 max-w-xl mx-auto">
          <span className="text-[#c59b27] text-xs font-semibold uppercase tracking-widest">
            Frequently Asked Questions
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900">
            How Can We Assist You?
          </h1>
          <p className="text-xs sm:text-sm text-gray-600">
            Everything you need to know about Silk Mark authentication, our offline order process,
            custom blouse stitching, and saree maintenance.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 justify-start sm:justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setOpenIndex(null);
              }}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-colors ${
                activeCategory === cat
                  ? "bg-[#0f172a] text-white shadow-xs"
                  : "bg-white text-gray-700 border border-[#ede5d8] hover:bg-gray-50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordions */}
        <div className="space-y-3">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl border border-[#ede5d8] overflow-hidden shadow-xs transition-colors"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 hover:bg-gray-50/50"
                >
                  <span className="font-medium text-xs sm:text-sm text-gray-900">
                    {faq.question}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-[#c59b27] flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-gray-400 flex-shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-gray-600 border-t border-gray-100 bg-[#faf7f2]/40 leading-relaxed">
                    <p>{faq.answer}</p>
                    <span className="inline-block mt-3 text-[10px] text-[#c59b27] font-semibold uppercase">
                      Category: {faq.category}
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
