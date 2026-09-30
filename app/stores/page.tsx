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
                    <MessageCircle className="w-3.5 h-3.5 fill-current" />
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
