"use client";

import React, { useState } from "react";
import Image from "next/image";

interface ProductGalleryProps {
  images: string[];
  productName: string;
}

export const ProductGallery: React.FC<ProductGalleryProps> = ({ images, productName }) => {
  const [selectedImage, setSelectedImage] = useState(images[0] || "");

  return (
    <div className="flex flex-col-reverse sm:flex-row gap-3">
      {/* Thumbnails list (vertical on desktop) */}
      <div className="flex sm:flex-col gap-2 overflow-x-auto sm:overflow-y-auto sm:w-20 flex-shrink-0">
        {images.map((img, idx) => {
          const isSelected = selectedImage === img;
          return (
            <button
              key={idx}
              onClick={() => setSelectedImage(img)}
              className={`relative w-16 sm:w-20 aspect-[3/4] rounded-md overflow-hidden border-2 transition-all flex-shrink-0 ${
                isSelected
                  ? "border-[#0f172a] shadow-xs scale-102"
                  : "border-gray-200 hover:border-gray-400 opacity-70 hover:opacity-100"
              }`}
            >
              <Image
                src={img}
                alt={`${productName} thumbnail ${idx + 1}`}
                fill
                sizes="80px"
                className="object-cover"
              />
            </button>
          );
        })}
      </div>

      {/* Main Image */}
      <div className="relative flex-1 aspect-[3/4] rounded-xl overflow-hidden bg-[#f4eee4] border border-[#ede5d8] group">
        <Image
          src={selectedImage}
          alt={productName}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover object-top transition-transform duration-500 group-hover:scale-105 cursor-zoom-in"
        />
        <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-xs text-white text-[10px] px-2.5 py-1 rounded font-medium">
          Silk Mark Certified 🇮🇳
        </div>
      </div>
    </div>
  );
};
