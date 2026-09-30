import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Award, ShieldCheck, Users, HeartHandshake, Sparkles, CheckCircle2 } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#faf7f2] py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-5">
            <span className="text-[#c59b27] text-xs font-semibold uppercase tracking-widest">
              Our Legacy Since 1994
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Preserving India&apos;s Royal Weaving Heritage
            </h1>
            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
              At SilkAura, we believe a silk saree is more than six yards of fabric—it is a living
              tapestry of Indian culture, devotion, and centuries of ancestral artisan brilliance.
            </p>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Founded in the temple town of Kanchipuram, SilkAura bridges the direct connection
              between master handloom weavers and silk connoisseurs worldwide, eliminating
              middlemen to empower artisan families.
            </p>
          </div>

          <div className="lg:col-span-6 relative h-80 sm:h-96 rounded-2xl overflow-hidden shadow-lg border border-[#ede5d8]">
            <Image
              src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=85"
              alt="Silk weaving master artisan"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Pillars / Values */}
        <div className="space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-gray-900">
              The SilkAura Promise
            </h2>
            <div className="w-12 h-0.5 bg-[#c59b27] mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-[#ede5d8] shadow-xs space-y-3 text-center">
              <div className="w-12 h-12 rounded-full bg-[#f6eee3] text-[#c59b27] flex items-center justify-center mx-auto border border-[#e5d5c0]">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-gray-900">100% Silk Mark Purity</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Every single saree is lab-tested and certified by the Silk Mark Organisation of India (SMOI) to guarantee 100% pure Mulberry and Tussar silk threads.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#ede5d8] shadow-xs space-y-3 text-center">
              <div className="w-12 h-12 rounded-full bg-[#f6eee3] text-[#c59b27] flex items-center justify-center mx-auto border border-[#e5d5c0]">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-gray-900">Direct Artisan Fair-Trade</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                We work directly with over 450+ handloom artisan families across Kanchipuram, Varanasi, Mysore, and Dharmavaram, guaranteeing equitable livelihoods.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#ede5d8] shadow-xs space-y-3 text-center">
              <div className="w-12 h-12 rounded-full bg-[#f6eee3] text-[#c59b27] flex items-center justify-center mx-auto border border-[#e5d5c0]">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-gray-900">Pure Gold & Silver Zari</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Our heirloom collections use genuine electroplated silver and 24-karat gold dipped zari wires that never lose their regal luster over generations.
              </p>
            </div>
          </div>
        </div>

        {/* Certifications Banner */}
        <div className="bg-[#0f172a] text-white rounded-2xl p-8 sm:p-12 border border-[#1e293b]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <span className="text-[#fde047] text-xs font-semibold uppercase tracking-wider">
                Government Verified
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold">
                Silk Mark & Handloom Certified
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                We are proud official partners of the Central Silk Board of India. When you purchase from SilkAura, you are investing in genuine heritage backed by government-approved purity seals.
              </p>
            </div>

            <div className="space-y-3 bg-[#131c31] p-5 rounded-xl border border-gray-700 text-xs">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Silk Mark Organisation of India (SMOI) Membership #SM-94812</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>GI Tag (Geographical Indication) Registered Kanchipuram Weaves</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Handloom Board Authenticated Natural Dyes and Pure Zari</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
