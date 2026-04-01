export interface ProductColor {
  id: "black" | "pink";
  name: string;
  hex: string;
  images: string[];
}

export interface Product {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  features: string[];
  materials: string;
  care: string;
  colors: ProductColor[];
  price: string;
  category: string;
  relatedProduct: string;
}

export const products: Record<string, Product> = {
  jacket: {
    slug: "jacket",
    name: "La Veste Studio",
    tagline: "Structured grace, from first breath to last pose.",
    description:
      "A refined studio jacket that merges technical precision with Parisian allure. Sculpted seams follow the body's natural architecture while four-way stretch construction allows complete freedom of movement.",
    longDescription:
      "La Veste Studio was born from a simple conviction: that activewear should never ask you to choose between beauty and function. Its silhouette draws from couture construction — darted, shaped, finished — yet every panel is engineered for unrestricted motion. The brushed interior cocoons you in softness during warm-ups, while laser-cut ventilation ensures you stay cool when intensity rises. A concealed magnetic closure creates a seamless front line. Thumbhole cuffs anchor sleeves during inversions. Two hidden zip pockets secure your essentials without disrupting the clean aesthetic. This is not simply a jacket. It is a statement of intent — the belief that discipline deserves beauty, and that every movement is an opportunity for elegance.",
    features: [
      "Four-way stretch technical fabric with sculpted fit",
      "Concealed magnetic front closure for seamless lines",
      "Laser-cut ventilation panels along the back yoke",
      "Brushed soft-touch interior for warmth and comfort",
      "Water-resistant outer shell for studio-to-street transitions",
      "Articulated seams engineered for unrestricted movement",
      "Two hidden zip pockets for secure storage",
      "Thumbhole cuffs for stable layering",
    ],
    materials:
      "78% recycled polyamide, 22% elastane. Lining: 100% recycled polyester microfibre. OEKO-TEX Standard 100 certified. Designed in Paris, crafted in Portugal.",
    care: "Machine wash cold at 30°C on a gentle cycle. Do not tumble dry. Hang to dry away from direct sunlight. Do not iron directly on fabric.",
    colors: [
      {
        id: "black",
        name: "Noir Absolu",
        hex: "#1A1715",
        images: [
          "/images/products/jacket/jacket-black-front.avif",
          "/images/products/jacket/jacket-black-back.avif",
          "/images/outfits/outfit-black-front.png",
        ],
      },
      {
        id: "pink",
        name: "Rose Poudré",
        hex: "#D4A0A0",
        images: [
          "/images/products/jacket/jacket-rose-front.avif",
          "/images/products/jacket/jacket-rose-back.avif",
          "/images/outfits/outfit-rose-front.png",
          "/images/outfits/outfit-rose-back.png",
        ],
      },
    ],
    price: "€285",
    category: "Outerwear",
    relatedProduct: "pants",
  },
  pants: {
    slug: "pants",
    name: "Le Pantalon Flow",
    tagline: "Fluid precision, from studio to world.",
    description:
      "A high-waisted studio pant that bridges technical performance and effortless allure. Second-skin fit through the hip, a gentle release below the knee — a silhouette as striking in stillness as in motion.",
    longDescription:
      "Le Pantalon Flow emerged from hundreds of hours observing Pilates in motion — the way fabric should follow the body like water, never resisting, never bunching, always flowing. The result is a pant that fits like a whisper through the hip and thigh, then releases into a slightly wider leg below the knee, creating a silhouette that photographs beautifully and performs impeccably. The proprietary high-rise waistband sits flat without rolling, providing genuine core support while maintaining an elegant line under any top. Invisible flat-locked seams eliminate friction entirely. A discreet back pocket holds a key or card without disrupting the clean aesthetic. Pair with La Veste Studio for a complete ÉLUA silhouette — one that moves from reformer to rendez-vous with quiet confidence.",
    features: [
      "Proprietary no-roll high-rise waistband",
      "Four-way stretch with targeted compression zones",
      "Invisible flat-locked seam construction",
      "Gently flared leg below the knee for fluid silhouette",
      "Discreet back pocket with hidden zip closure",
      "Advanced moisture-wicking and quick-dry finish",
      "UPF 40+ sun protection for outdoor practice",
      "Squat-proof opacity — tested and guaranteed",
    ],
    materials:
      "72% recycled polyamide, 28% elastane. Waistband: 80% polyamide, 20% elastane. OEKO-TEX Standard 100 certified. Designed in Paris, crafted in Portugal.",
    care: "Machine wash cold at 30°C on a gentle cycle. Do not tumble dry. Lay flat to dry. Do not iron. Avoid fabric softener — it degrades elastane over time.",
    colors: [
      {
        id: "black",
        name: "Noir Absolu",
        hex: "#1A1715",
        images: [
          "/images/outfits/outfit-black-front.png",
          "/images/products/jacket/jacket-black-back.avif",
        ],
      },
      {
        id: "pink",
        name: "Rose Poudré",
        hex: "#D4A0A0",
        images: [
          "/images/outfits/outfit-rose-front.png",
          "/images/outfits/outfit-rose-back.png",
          "/images/products/jacket/jacket-rose-front.avif",
        ],
      },
    ],
    price: "€195",
    category: "Bottoms",
    relatedProduct: "jacket",
  },
};

export function getProduct(slug: string): Product | undefined {
  return products[slug];
}

export function getAllProducts(): Product[] {
  return Object.values(products);
}
