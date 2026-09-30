export interface ProductColor {
  name: string;
  hex: string;
  image?: string;
}

export interface ProductReview {
  id: string;
  userName: string;
  rating: number;
  date: string;
  verified: boolean;
  comment: string;
  location: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  categorySlug: string;
  price: number;
  mrp: number;
  discount: number;
  rating: number;
  reviewsCount: number;
  images: string[];
  colors: ProductColor[];
  selectedColor?: string;
  fabric: string;
  zari: string;
  blousePiece: string;
  sareeLength: string;
  certification: string;
  occasion: string;
  borderStyle: string;
  inStock: boolean;
  isNewArrival?: boolean;
  isBestSeller?: boolean;
  isEditorPick?: boolean;
  description: string;
  specifications: {
    label: string;
    value: string;
  }[];
  reviews: ProductReview[];
}

export const PRODUCTS: Product[] = [
  {
    id: "kanchipuram-silk-saree-purple",
    slug: "kanchipuram-silk-saree",
    name: "Kanchipuram Silk Saree",
    category: "Sarees",
    categorySlug: "sarees",
    price: 8999,
    mrp: 12999,
    discount: 31,
    rating: 4.8,
    reviewsCount: 124,
    images: [
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=1000&q=80",
    ],
    colors: [
      { name: "Royal Purple", hex: "#6b21a8" },
      { name: "Rani Pink", hex: "#db2777" },
      { name: "Emerald Green", hex: "#047857" },
      { name: "Deep Navy", hex: "#1e3a8a" },
      { name: "Peacock Teal", hex: "#0d9488" },
    ],
    fabric: "Pure Kanchipuram Silk",
    zari: "Pure Gold & Silver Zari",
    blousePiece: "Included (Matching 0.8m)",
    sareeLength: "5.5 meters",
    certification: "Silk Mark Certified",
    occasion: "Bridal / Festive",
    borderStyle: "Korvai Temple Border",
    inStock: true,
    isNewArrival: true,
    isBestSeller: true,
    isEditorPick: true,
    description:
      "A beautiful Kanchipuram silk saree with traditional zari work, perfect for weddings and festive occasions. Handwoven by master artisans using pure mulberry silk and authentic zari embellishments that radiate timeless grandeur.",
    specifications: [
      { label: "Fabric", value: "Pure Kanchipuram Silk" },
      { label: "Zari", value: "Pure Gold & Silver Zari" },
      { label: "Blouse Piece", value: "Included" },
      { label: "Saree Length", value: "5.5 meters" },
      { label: "Certification", value: "Silk Mark Certified" },
      { label: "Weave Type", value: "Handloom Korvai" },
      { label: "Wash Care", value: "Dry Clean Only" },
      { label: "Origin", value: "Kanchipuram, Tamil Nadu" },
    ],
    reviews: [
      {
        id: "rev-1",
        userName: "Ananya Sundaram",
        rating: 5,
        date: "14 Sep 2026",
        verified: true,
        comment:
          "The saree is beyond stunning! The pure zari gleams with an authentic royal shine. Draped it for my sister's wedding and received non-stop compliments. Silk Mark tag verified.",
        location: "Chennai, Tamil Nadu",
      },
      {
        id: "rev-2",
        userName: "Pooja Hegde",
        rating: 5,
        date: "02 Sep 2026",
        verified: true,
        comment:
          "Exceptional quality silk! It has substantial weight without feeling stiff. Beautiful temple border work. Packaging was pristine and delivered in 3 days.",
        location: "Bangalore, Karnataka",
      },
      {
        id: "rev-3",
        userName: "Meera Krishnan",
        rating: 4.5,
        date: "28 Aug 2026",
        verified: true,
        comment:
          "Very rich purple hue with intricate pallu zari. The included blouse piece has matching borders too. Highly recommended for bridal events.",
        location: "Hyderabad, Telangana",
      },
    ],
  },
  {
    id: "mysore-silk-saree-green",
    slug: "mysore-silk-saree",
    name: "Mysore Silk Saree",
    category: "Sarees",
    categorySlug: "sarees",
    price: 6499,
    mrp: 9999,
    discount: 35,
    rating: 4.7,
    reviewsCount: 98,
    images: [
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1000&q=80",
    ],
    colors: [
      { name: "Emerald Green", hex: "#047857" },
      { name: "Ruby Red", hex: "#991b1b" },
      { name: "Mustard Gold", hex: "#d97706" },
      { name: "Royal Blue", hex: "#1e3a8a" },
    ],
    fabric: "Pure Crepe Mysore Silk",
    zari: "Gold Zari Border",
    blousePiece: "Included (Contrast 0.8m)",
    sareeLength: "5.5 meters",
    certification: "Silk Mark Certified (KSIC Grade)",
    occasion: "Festive / Temple",
    borderStyle: "Traditional Kasuti Border",
    inStock: true,
    isNewArrival: true,
    isBestSeller: true,
    description:
      "Crafted with pure crepe silk renowned for its fluid drape and butter-soft texture. Features delicate single-line gold zari borders that add effortless elegance to daytime pujas and evening celebrations.",
    specifications: [
      { label: "Fabric", value: "Pure Mysore Crepe Silk" },
      { label: "Zari", value: "Gold Zari Border" },
      { label: "Blouse Piece", value: "Included (0.8m)" },
      { label: "Saree Length", value: "5.5 meters" },
      { label: "Certification", value: "Silk Mark Certified" },
      { label: "Weight", value: "approx. 450 grams (Lightweight)" },
      { label: "Wash Care", value: "Dry Clean Only" },
    ],
    reviews: [
      {
        id: "rev-4",
        userName: "Shweta Rao",
        rating: 5,
        date: "10 Sep 2026",
        verified: true,
        comment:
          "Pure Mysore silk is so soft and lightweight. It holds pleats gracefully all day long without any fuss.",
        location: "Mysore, Karnataka",
      },
    ],
  },
  {
    id: "banarasi-silk-saree-red",
    slug: "banarasi-silk-saree",
    name: "Banarasi Silk Saree",
    category: "Sarees",
    categorySlug: "sarees",
    price: 7999,
    mrp: 11999,
    discount: 33,
    rating: 4.6,
    reviewsCount: 67,
    images: [
      "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=80",
    ],
    colors: [
      { name: "Crimson Red", hex: "#b91c1c" },
      { name: "Golden Amber", hex: "#b45309" },
      { name: "Wine Maroon", hex: "#831843" },
    ],
    fabric: "Katan Silk (Pure Banarasi)",
    zari: "Antique Gold Zari Brocade",
    blousePiece: "Included (Unstitched 0.8m)",
    sareeLength: "5.5 meters",
    certification: "Silk Mark Certified",
    occasion: "Bridal / Party",
    borderStyle: "Floral Jaal & Paisley Border",
    inStock: true,
    isBestSeller: true,
    isEditorPick: true,
    description:
      "A masterpiece of Varanasi craftsmanship adorned with intricate floral jaal and antique golden zari motifs. Perfect for bridal trousseau and festive grandeur.",
    specifications: [
      { label: "Fabric", value: "Katan Banarasi Silk" },
      { label: "Zari", value: "Antique Gold Zari" },
      { label: "Blouse Piece", value: "Included" },
      { label: "Saree Length", value: "5.5 meters" },
      { label: "Certification", value: "Silk Mark Certified" },
    ],
    reviews: [
      {
        id: "rev-5",
        userName: "Kavita Sharma",
        rating: 5,
        date: "05 Sep 2026",
        verified: true,
        comment: "The richness of the Banarasi weave is unparalleled. The red shade is majestic!",
        location: "Varanasi, UP",
      },
    ],
  },
  {
    id: "cotton-silk-saree-blue",
    slug: "cotton-silk-saree",
    name: "Cotton Silk Saree",
    category: "Sarees",
    categorySlug: "sarees",
    price: 4999,
    mrp: 7499,
    discount: 33,
    rating: 4.8,
    reviewsCount: 124,
    images: [
      "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1000&q=80",
    ],
    colors: [
      { name: "Peacock Blue", hex: "#0369a1" },
      { name: "Magenta Pink", hex: "#be185d" },
      { name: "Olive Green", hex: "#4d7c0f" },
    ],
    fabric: "Chanderi Cotton Silk Blend",
    zari: "Silver-Gold Zari",
    blousePiece: "Included (0.8m)",
    sareeLength: "5.5 meters",
    certification: "Silk Mark Certified Blend",
    occasion: "Office Wear / Everyday",
    borderStyle: "Minimal Zari Border",
    inStock: true,
    isNewArrival: true,
    description:
      "The perfect fusion of lightweight breathable cotton and lustrous natural silk. Ideal for long festive gatherings, formal office occasions, and comfortable all-day wear.",
    specifications: [
      { label: "Fabric", value: "Handloom Cotton Silk" },
      { label: "Zari", value: "Subtle Gold Border" },
      { label: "Blouse Piece", value: "Included" },
      { label: "Saree Length", value: "5.5 meters" },
    ],
    reviews: [
      {
        id: "rev-6",
        userName: "Deepika Verma",
        rating: 5,
        date: "18 Sep 2026",
        verified: true,
        comment: "So comfortable and classy for office functions! Highly breathable yet has a rich sheen.",
        location: "Pune, Maharashtra",
      },
    ],
  },
  {
    id: "tussar-silk-saree-rust",
    slug: "tussar-silk-saree",
    name: "Tussar Silk Saree",
    category: "Sarees",
    categorySlug: "sarees",
    price: 5999,
    mrp: 8999,
    discount: 33,
    rating: 4.5,
    reviewsCount: 76,
    images: [
      "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=80",
    ],
    colors: [
      { name: "Copper Rust", hex: "#9a3412" },
      { name: "Natural Beige", hex: "#d6c7a1" },
      { name: "Forest Green", hex: "#166534" },
    ],
    fabric: "Wild Tussar (Kosa) Silk",
    zari: "Antique Copper Zari",
    blousePiece: "Included (0.8m)",
    sareeLength: "5.5 meters",
    certification: "Silk Mark Certified",
    occasion: "Office Wear / Party",
    borderStyle: "Madhubani Printed Border",
    inStock: true,
    isBestSeller: true,
    description:
      "Celebrated for its rich organic texture and warm golden tone, this Tussar silk saree features artisanal hand block prints and copper zari weaving.",
    specifications: [
      { label: "Fabric", value: "Pure Wild Tussar Silk" },
      { label: "Zari", value: "Copper Zari" },
      { label: "Blouse Piece", value: "Included" },
      { label: "Saree Length", value: "5.5 meters" },
    ],
    reviews: [],
  },
  {
    id: "chettinad-cotton-silk-teal",
    slug: "chettinad-cotton-silk",
    name: "Chettinad Cotton Silk",
    category: "Sarees",
    categorySlug: "sarees",
    price: 4999,
    mrp: 7499,
    discount: 33,
    rating: 4.4,
    reviewsCount: 65,
    images: [
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1000&q=80",
    ],
    colors: [
      { name: "Peacock Teal", hex: "#0f766e" },
      { name: "Mustard Ochre", hex: "#ca8a04" },
      { name: "Ruby Maroon", hex: "#881337" },
    ],
    fabric: "Chettinad Handloom Cotton Silk",
    zari: "Traditional Temple Border",
    blousePiece: "Included (0.8m)",
    sareeLength: "5.5 meters",
    certification: "Handloom Mark",
    occasion: "Festive / Temple",
    borderStyle: "Traditional Temple Border",
    inStock: true,
    description:
      "Distinctive bold borders, rich heritage checks, and vibrant earthy shades make this Chettinad weave an iconic South Indian staple.",
    specifications: [
      { label: "Fabric", value: "Chettinad Handloom Cotton-Silk" },
      { label: "Border", value: "Temple Contrast Border" },
      { label: "Blouse Piece", value: "Included" },
      { label: "Saree Length", value: "5.5 meters" },
    ],
    reviews: [],
  },
  {
    id: "soft-silk-saree-red",
    slug: "soft-silk-saree",
    name: "Soft Silk Saree",
    category: "Sarees",
    categorySlug: "sarees",
    price: 6999,
    mrp: 10999,
    discount: 36,
    rating: 4.7,
    reviewsCount: 83,
    images: [
      "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=80",
    ],
    colors: [
      { name: "Scarlet Red", hex: "#dc2626" },
      { name: "Coral Peach", hex: "#f97316" },
      { name: "Lavender Violet", hex: "#7c3aed" },
    ],
    fabric: "Mulberry Soft Silk",
    zari: "Matte Gold Zari",
    blousePiece: "Included (0.8m)",
    sareeLength: "5.5 meters",
    certification: "Silk Mark Certified",
    occasion: "Party / Festive",
    borderStyle: "Floral Zari Border",
    inStock: true,
    isBestSeller: true,
    description:
      "Feather-light with high luster, our Soft Silk sarees give you the opulent look of a bridal pattu saree with incredible draping ease.",
    specifications: [
      { label: "Fabric", value: "Mulberry Soft Silk" },
      { label: "Zari", value: "Matte Finish Gold Zari" },
      { label: "Blouse Piece", value: "Included" },
      { label: "Saree Length", value: "5.5 meters" },
    ],
    reviews: [],
  },
  {
    id: "chanderi-silk-saree-gold",
    slug: "chanderi-silk-saree",
    name: "Chanderi Silk Saree",
    category: "Sarees",
    categorySlug: "sarees",
    price: 5499,
    mrp: 7999,
    discount: 31,
    rating: 4.6,
    reviewsCount: 42,
    images: [
      "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&w=1000&q=80",
    ],
    colors: [
      { name: "Mustard Gold", hex: "#d97706" },
      { name: "Mint Green", hex: "#10b981" },
    ],
    fabric: "Pure Chanderi Silk",
    zari: "Gold Buti Work",
    blousePiece: "Included",
    sareeLength: "5.5 meters",
    certification: "Handloom Certified",
    occasion: "Everyday / Office Wear",
    borderStyle: "Zari Buti Border",
    inStock: true,
    description:
      "Handcrafted in Madhya Pradesh, featuring shimmering zari butis across a sheer, lightweight gossamer silk fabric.",
    specifications: [
      { label: "Fabric", value: "Pure Chanderi Silk" },
      { label: "Work", value: "Gold Floral Butis" },
    ],
    reviews: [],
  },
  {
    id: "paithani-silk-saree-blue",
    slug: "paithani-silk-saree",
    name: "Paithani Silk Saree",
    category: "Sarees",
    categorySlug: "sarees",
    price: 11499,
    mrp: 16999,
    discount: 32,
    rating: 4.9,
    reviewsCount: 112,
    images: [
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1000&q=80",
    ],
    colors: [
      { name: "Royal Peacock Blue", hex: "#1e3a8a" },
      { name: "Parrot Green", hex: "#15803d" },
    ],
    fabric: "Pure Yeola Paithani Silk",
    zari: "Pure Gold Peacock Pallu",
    blousePiece: "Included",
    sareeLength: "5.5 meters",
    certification: "Silk Mark Certified",
    occasion: "Bridal / Festive",
    borderStyle: "Peacock & Lotus Pallu",
    inStock: true,
    isEditorPick: true,
    description:
      "The queen of Maharashtrian silks with an ornate oblique square design border and a grand pallu featuring kaleidoscopic peacock tapestries.",
    specifications: [
      { label: "Fabric", value: "Yeola Paithani Silk" },
      { label: "Pallu Work", value: "Handwoven Mor (Peacock) Motifs" },
    ],
    reviews: [],
  },
  {
    id: "embroidered-kurti-set-rust",
    slug: "embroidered-silk-kurti-set",
    name: "Embroidered Silk Kurti Set",
    category: "Kurti Sets",
    categorySlug: "kurti-sets",
    price: 4499,
    mrp: 6999,
    discount: 35,
    rating: 4.7,
    reviewsCount: 54,
    images: [
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1000&q=80",
    ],
    colors: [
      { name: "Rust Terracotta", hex: "#c2410c" },
      { name: "Bottle Green", hex: "#14532d" },
    ],
    fabric: "Chanderi Silk with Shantoon Lining",
    zari: "Gota Patti Work",
    blousePiece: "Kurti + Palazzo + Dupatta Set",
    sareeLength: "3 Piece Set",
    certification: "SilkAura Pure Blend",
    occasion: "Festive / Party",
    borderStyle: "Gota Patti Hemline",
    inStock: true,
    isNewArrival: true,
    description:
      "Opulent 3-piece Chanderi silk kurti set featuring detailed hand zardozi and gota patti embroidery around the neckline, paired with silk palazzo pants and organza dupatta.",
    specifications: [
      { label: "Fabric", value: "Chanderi Silk" },
      { label: "Set Contents", value: "Kurta, Pants, Dupatta" },
      { label: "Embroidery", value: "Hand Gota Patti & Zari" },
    ],
    reviews: [],
  },
  {
    id: "bridal-silk-lehenga-coral",
    slug: "bridal-silk-lehenga",
    name: "Royal Heritage Silk Lehenga",
    category: "Lehengas",
    categorySlug: "lehengas",
    price: 18999,
    mrp: 27999,
    discount: 32,
    rating: 4.9,
    reviewsCount: 89,
    images: [
      "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1000&q=80",
    ],
    colors: [
      { name: "Coral Orange", hex: "#ea580c" },
      { name: "Maroon Crimson", hex: "#881337" },
    ],
    fabric: "Raw Silk with Brocade Kalis",
    zari: "Heavy Zardozi & Resham Work",
    blousePiece: "Semi-Stitched Lehenga Set",
    sareeLength: "Lehenga Skirt + Blouse + Dupatta",
    certification: "SilkAura Heritage",
    occasion: "Bridal / Party",
    borderStyle: "Broad Scalloped Zari Border",
    inStock: true,
    isEditorPick: true,
    description:
      "A statement bridal lehenga crafted from lustrous raw silk with 16 flaring panels adorned with exquisite peacock and floral zardozi motifs.",
    specifications: [
      { label: "Fabric", value: "Pure Raw Silk" },
      { label: "Flare", value: "4.5 meters circular flare" },
      { label: "Dupatta", value: "Pure Organza with Cutwork Border" },
    ],
    reviews: [],
  },
  {
    id: "handcrafted-silk-blouse-maroon",
    slug: "handcrafted-silk-blouse",
    name: "Handcrafted Aari Silk Blouse",
    category: "Blouses",
    categorySlug: "blouses",
    price: 2999,
    mrp: 4499,
    discount: 33,
    rating: 4.8,
    reviewsCount: 63,
    images: [
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=80",
    ],
    colors: [
      { name: "Maroon Crimson", hex: "#881337" },
      { name: "Golden Mustard", hex: "#d97706" },
      { name: "Emerald Green", hex: "#047857" },
    ],
    fabric: "Raw Silk with Cotton Lining",
    zari: "Hand Aari & Maggam Work",
    blousePiece: "Readymade Blouse (Padded, Margin for Alteration)",
    sareeLength: "Sizes 34 to 44 Available",
    certification: "SilkAura Craft",
    occasion: "Bridal / Festive",
    borderStyle: "Maggam Neckline",
    inStock: true,
    isBestSeller: true,
    description:
      "Designer readymade raw silk blouse with heavy Maggam and Aari beadwork on back and elbow-length sleeves. Padded with 2-inch alteration margins.",
    specifications: [
      { label: "Fabric", value: "Pure Raw Silk" },
      { label: "Padding", value: "Removable Padded Cups" },
      { label: "Sleeve Length", value: "Elbow Length (11 inches)" },
    ],
    reviews: [],
  },
];
