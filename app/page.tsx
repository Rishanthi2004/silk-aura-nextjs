import { HeroBanner } from "@/components/home/HeroBanner";
import { TrustBadges } from "@/components/home/TrustBadges";
import { ShopByCategory } from "@/components/home/ShopByCategory";
import { FeaturedCollections } from "@/components/home/FeaturedCollections";
import { PromoBanner } from "@/components/home/PromoBanner";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#faf7f2]">
      {/* Hero Carousel */}
      <HeroBanner />

      {/* Trust Badges Ribbon */}
      <TrustBadges />

      {/* Shop By Category */}
      <ShopByCategory />

      {/* Featured Collections with Tabs */}
      <FeaturedCollections />

      {/* Promotional Banner */}
      <PromoBanner />
    </div>
  );
}
