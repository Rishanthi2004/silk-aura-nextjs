export interface Category {
  id: string;
  name: string;
  slug: string;
  image: string;
  itemCount: number;
  description: string;
  bannerImage: string;
}

export const CATEGORIES: Category[] = [
  {
    id: "sarees",
    name: "Sarees",
    slug: "sarees",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=600&q=80",
    itemCount: 184,
    description: "Explore our exquisite collection of silk sarees, crafted with tradition and elegance.",
    bannerImage: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "kurti-sets",
    name: "Kurti Sets",
    slug: "kurti-sets",
    image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=600&q=80",
    itemCount: 92,
    description: "Contemporary ethnic elegance with tailored pure silk kurtis, palazzos and dupattas.",
    bannerImage: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "lehengas",
    name: "Lehengas",
    slug: "lehengas",
    image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&w=600&q=80",
    itemCount: 48,
    description: "Royal bridal and festive silk lehengas with opulent zardozi handcrafting.",
    bannerImage: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "blouses",
    name: "Blouses",
    slug: "blouses",
    image: "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=600&q=80",
    itemCount: 65,
    description: "Readymade designer silk blouses adorned with intricate Aari, Maggam and Zari embroidery.",
    bannerImage: "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=1600&q=80",
  },
];
