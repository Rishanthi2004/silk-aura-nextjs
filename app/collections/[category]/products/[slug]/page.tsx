import { notFound } from "next/navigation";
import { PRODUCTS } from "@/data/products";
import { ProductDetailView } from "@/components/product/ProductDetailView";

interface ProductPageProps {
  params: Promise<{
    category: string;
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    category: product.categorySlug,
    slug: product.slug,
  }));
}

export default async function ProductPage({ params }: ProductPageProps) {
  const resolvedParams = await params;
  const product = PRODUCTS.find((p) => p.slug === resolvedParams.slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#faf7f2]">
      <ProductDetailView product={product} />
    </div>
  );
}
