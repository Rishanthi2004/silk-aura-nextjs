export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  authorRole: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  tags: string[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "how-to-identify-pure-kanchipuram-silk-saree",
    title: "How to Identify a Pure Kanchipuram Silk Saree: The Ultimate Connoisseur's Guide",
    excerpt:
      "From checking the Silk Mark Certification to testing the burn characteristics of the thread and examining the Korvai interlocking weave, discover how to identify authentic Kanchipuram pattu.",
    author: "Gayathri Ramanathan",
    authorRole: "Head Textile Historian at SilkAura",
    date: "18 Sep 2026",
    readTime: "6 min read",
    category: "Heritage & Craft",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=80",
    tags: ["Kanchipuram", "Silk Mark", "Handloom", "Textile Care"],
    content: `
Kanchipuram silk sarees are known as the Queen of Silks for a reason. Woven with heavy mulberry silk threads and electroplated silver and gold zari wires, every authentic piece is an heirloom that lasts generations.

### 1. Look for the Official Silk Mark Tag
Always look for the Government of India certified Silk Mark tag with a unique QR code. SilkAura is 100% Silk Mark certified, guaranteeing that every single filament is pure unadulterated mulberry silk.

### 2. Check the Korvai Weaving Technique
In a genuine Kanchipuram saree, the border and pallu are woven separately and interlocked with the body using the traditional 'Korvai' joint. You can feel the slight zigzag seam where the contrasting colors meet.

### 3. The Pure Zari Test
Traditional Kanchipuram sarees use pure red silk thread wrapped with silver wire and dipped in 24k gold. When gently scratched or viewed under light, pure zari emits a warm antique glow rather than a harsh, plastic synthetic glitter.
    `,
  },
  {
    slug: "essential-silk-saree-care-and-storage-tips",
    title: "Essential Silk Saree Care: How to Preserve Your Heirlooms for Generations",
    excerpt:
      "Learn the best practices for airing, wrapping in muslin cloth, avoiding plastic covers, and folding rotation to ensure your silk sarees remain pristine forever.",
    author: "Radha Krishnan",
    authorRole: "Master Weaver & Fabric Specialist",
    date: "12 Sep 2026",
    readTime: "5 min read",
    category: "Care & Maintenance",
    image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1200&q=80",
    tags: ["Saree Care", "Silk Maintenance", "Dry Clean"],
    content: `
Silk is a natural protein fiber that breathes. Storing it properly prevents zari tarnishing and fabric creasing over decades.

### 1. Always Wrap in Pure Cotton or Muslin
Never store your expensive silk sarees in sealed plastic bags, which trap humidity and can lead to moisture damage. Instead, wrap them individually in breathable muslin or pure white cotton cloth.

### 2. Rotate Your Folds Periodically
Every 3 to 4 months, take out your silk sarees, air them in mild morning shade for 15 minutes, and refold them along different lines to avoid permanent crease marks along the zari.

### 3. Dry Cleaning Guidelines
Only opt for gentle, specialized petrol or dry cleaning from experienced silk dry cleaners. Never machine wash or soak your pure silk sarees at home.
    `,
  },
  {
    slug: "top-saree-draping-styles-for-festive-season",
    title: "Top 5 Royal Saree Draping Styles for Weddings & Festive Celebrations",
    excerpt:
      "Explore classic South Indian Nivi drape, royal Gujarati front pallu, Bengali box pleats, and modern belted drapes to stand out this festive season.",
    author: "Divya Nair",
    authorRole: "Fashion Stylist",
    date: "04 Sep 2026",
    readTime: "4 min read",
    category: "Styling Tips",
    image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=1200&q=80",
    tags: ["Draping Styles", "Styling", "Festive Fashion"],
    content: `
Draping an exquisite silk saree is an art form. Whether you choose the regal waterfall pleats or a sleek contemporary belt look, here are 5 ways to accentuate your silhouette with SilkAura sarees.
    `,
  },
];
