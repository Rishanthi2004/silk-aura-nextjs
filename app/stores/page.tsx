"use client";

import React from "react";
import Image from "next/image";
import { MapPin, Phone, Clock, Navigation, MessageCircle, Store as StoreIcon } from "lucide-react";
import { STORES } from "@/data/stores";

export default function StoresPage() {
  return (
    <div className="min-h-screen bg-[#faf7f2] py-10 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Title */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="text-[#c59b27] text-xs font-semibold uppercase tracking-widest">
            Experience the Touch of Pure Silk
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-gray-900">
            Our Heritage Showrooms & Boutiques
          </h1>
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
            Visit our experiential boutiques across South India. Touch the genuine Mulberry silk,
            examine pure gold zari under specialized lighting, and consult our bridal draping specialists.
          </p>
        </div>

        {/* Stores Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {STORES.map((store) => (
            <div
              key={store.id}
              className="bg-white rounded-2xl border border-[#ede5d8] overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="relative h-56 sm:h-64 w-full bg-gray-100">
                <Image
                  src={store.image}
                  alt={store.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute top-3 left-3 bg-[#0f172a]/90 backdrop-blur-xs text-[#fef08a] px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1.5">
                  <StoreIcon className="w-3.5 h-3.5" />
                  <span>{store.city} Showroom</span>
                </div>
              </div>

              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="font-serif text-lg font-bold text-gray-900">{store.name}</h3>

                  <div className="space-y-2 text-xs text-gray-600 pt-1">
                    <div className="flex items-start gap-2.5">
                      <MapPin className="w-4 h-4 text-[#800020] flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-800">{store.address}</p>
                        <p className="text-gray-500 text-[11px]">Landmark: {store.landmark}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2.5">
                      <Clock className="w-4 h-4 text-[#c59b27] flex-shrink-0" />
                      <span>{store.timings}</span>
                    </div>

                    <div className="flex items-center gap-2.5">
                      <Phone className="w-4 h-4 text-gray-500 flex-shrink-0" />
                      <span>{store.phone}</span>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="grid grid-cols-2 gap-3 pt-4 border-t border-gray-100">
                  <a
                    href={store.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-4 bg-[#faf7f2] border border-[#ede5d8] hover:bg-gray-100 text-[#0f172a] text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 transition-colors text-center"
                  >
                    <Navigation className="w-3.5 h-3.5 text-[#800020]" />
                    <span>Get Directions</span>
                  </a>

                  <a
                    href={`https://wa.me/${store.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(
                      `Hello SilkAura! I would like to book a showroom consultation at your ${store.name} location.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-4 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 transition-colors text-center shadow-xs"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.979-.275-.1-.475-.15-.675.15-.2.301-.776.979-.951 1.18-.175.2-.351.226-.652.075-.301-.15-1.272-.469-2.423-1.496-.895-.798-1.5-1.785-1.675-2.086-.176-.301-.019-.464.132-.614.136-.135.301-.351.451-.527.151-.175.201-.3.301-.501.101-.2.051-.376-.025-.527-.075-.15-.675-1.63-.925-2.23-.244-.587-.492-.508-.675-.517-.175-.009-.376-.01-.577-.01-.2 0-.526.075-.802.376-.276.301-1.053 1.028-1.053 2.508s1.078 2.91 1.228 3.11c.151.201 2.122 3.24 5.141 4.544.718.31 1.28.495 1.718.634.722.23 1.379.197 1.898.12.578-.087 1.78-.727 2.031-1.43.25-.702.25-1.304.175-1.43-.075-.125-.276-.2-.576-.35zm-5.419 7.422a9.71 9.71 0 0 1-4.965-1.356l-.356-.211-3.69 1.015 1.014-3.597-.232-.369a9.718 9.718 0 0 1-1.493-5.184c0-5.385 4.382-9.767 9.771-9.767 2.61 0 5.064 1.017 6.91 2.863a9.714 9.714 0 0 1 2.86 6.904c0 5.388-4.382 9.77-9.819 9.77zM20.52 3.48A11.934 11.934 0 0 0 12.053 0C5.405 0 .004 5.401.004 12.05c0 2.124.555 4.198 1.611 6.027L0 24l6.096-1.6c1.768.964 3.766 1.472 5.808 1.472h.005c6.647 0 12.048-5.402 12.048-12.052 0-3.22-1.254-6.246-3.437-8.34z" />
                    </svg>
                    <span>WhatsApp Store</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
