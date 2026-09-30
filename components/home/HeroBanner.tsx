"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

interface Slide {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  ctaText: string;
  ctaLink: string;
  tag: string;
  imagePosition?: string;
}

const SLIDES: Slide[] = [
  {
    id: 1,
    title: "Timeless Elegance in Every Thread",
    subtitle: "Premium Silk Sarees • Kurti Sets • Lehengas • More",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1600&q=85",
    ctaText: "Shop Now",
    ctaLink: "/collections/sarees",
    tag: "Handwoven Masterpieces",
    imagePosition: "object-[center_top] sm:object-[80%_20%] md:object-[82%_25%]",
  },
  {
    id: 2,
    title: "Royal Banarasi & Kanchipuram Grandeur",
    subtitle: "Pure Zari Weaves Crafted for Unforgettable Weddings",
    image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1600&q=85",
    ctaText: "Explore Bridal Silk",
    ctaLink: "/collections/sarees?occasion=Bridal",
    tag: "Silk Mark Certified",
    imagePosition: "object-[center_top] sm:object-[80%_15%] md:object-[85%_20%]",
  },
  {
    id: 3,
    title: "Bespoke Festive & Party Elegance",
    subtitle: "Pure Crepe Mysore Silks & Embroidered Lehengas",
    image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1600&q=85",
    ctaText: "View Festive Edit",
    ctaLink: "/collections/sarees?occasion=Festive",
    tag: "Festive Collection 2026",
    imagePosition: "object-[center_top] sm:object-[75%_20%] md:object-[80%_25%]",
  },
];

export const HeroBanner: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  };

  const slide = SLIDES[currentSlide];

  return (
    <div className="relative w-full h-[480px] sm:h-[540px] lg:h-[600px] bg-[#0c1220] overflow-hidden">
      {/* Background and Slide Content */}
      <div className="relative w-full h-full">
        {SLIDES.map((item, index) => (
          <div
            key={item.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            {/* Background Image with Dark Gradient Overlay */}
            <div className="absolute inset-0">
              <Image
                src={item.image}
                alt={item.title}
                fill
                priority={index === 0}
                className={`object-cover ${item.imagePosition || "object-center"}`}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0c1220] via-[#0c1220]/80 md:via-[#0c1220]/60 to-transparent w-full md:w-[60%]" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c1220]/80 via-transparent to-transparent" />
            </div>

            {/* Slide Content Box */}
            <div className="relative z-20 h-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col justify-center">
              <div className="max-w-xl text-left space-y-4">
                <span className="inline-block px-3 py-1 bg-[#c59b27]/20 border border-[#c59b27]/40 text-[#fef08a] text-[11px] uppercase tracking-widest font-semibold rounded-full">
                  {item.tag}
                </span>

                <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
                  {item.title}
                </h1>

                <p className="text-sm sm:text-base text-gray-200 font-light max-w-md">
                  {item.subtitle}
                </p>

                <div className="pt-2">
                  <Link
                    href={item.ctaLink}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#c59b27] hover:bg-[#d4af37] text-[#0c1220] font-semibold text-xs sm:text-sm uppercase tracking-wider rounded transition-all transform hover:translate-x-1 shadow-lg"
                  >
                    <span>{item.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Slide Navigation Controls */}
      <button
        onClick={prevSlide}
        aria-label="Previous slide"
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-black/40 hover:bg-[#c59b27] text-white hover:text-[#0c1220] flex items-center justify-center backdrop-blur-xs transition-all"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button
        onClick={nextSlide}
        aria-label="Next slide"
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-black/40 hover:bg-[#c59b27] text-white hover:text-[#0c1220] flex items-center justify-center backdrop-blur-xs transition-all"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Slide Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
        {SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`transition-all rounded-full ${
              idx === currentSlide ? "w-6 h-2 bg-[#c59b27]" : "w-2 h-2 bg-white/50 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </div>
  );
};
