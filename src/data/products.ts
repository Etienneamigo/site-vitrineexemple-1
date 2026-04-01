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
    tagline: "Engineered elegance, from the studio to the street.",
    description:
      "A refined studio jacket designed for movement without compromise. La Veste Studio merges technical performance fabrics with an unmistakably Parisian silhouette — because discipline deserves beauty.",
    longDescription:
      "Born from the conviction that activewear should never sacrifice style, La Veste Studio is the embodiment of the ÉLUA philosophy. Its sculpted cut follows the natural lines of the body while allowing complete freedom of motion through articulated seams and four-way stretch construction. The brushed interior provides a soft-touch warmth ideal for pre- and post-session layering, while the water-resistant outer shell handles light rain and studio-to-café transitions with quiet confidence. Every detail — from the concealed magnetic closure to the laser-cut ventilation panels along the back yoke — has been considered, refined, and reconsidered. This is not merely a jacket. It is a statement of intent.",
    features: [
      "Four-way stretch technical fabric",
      "Concealed magnetic front closure",
      "Laser-cut ventilation panels",
      "Brushed soft-touch interior lining",
      "Water-resistant outer shell",
      "Articulated seams for unrestricted movement",
      "Two hidden zip pockets",
      "Thumbhole cuffs for secure layering",
    ],
    materials:
      "78% recycled polyamide, 22% elastane. Lining: 100% recycled polyester microfibre. OEKO-TEX Standard 100 certified.",
    care: "Machine wash cold at 30°C on a gentle cycle. Do not tumble dry. Hang to dry away from direct sunlight. Do not iron directly on fabric. Do not dry clean.",
    colors: [
      {
        id: "black",
        name: "Noir Absolu",
        hex: "#0A0A0A",
        images: [
          "/products/jacket/black/1.jpg",
          "/products/jacket/black/2.jpg",
          "/products/jacket/black/3.jpg",
          "/products/jacket/black/4.jpg",
        ],
      },
      {
        id: "pink",
        name: "Rose Poudré",
        hex: "#D4A0A0",
        images: [
          "/products/jacket/pink/1.jpg",
          "/products/jacket/pink/2.jpg",
          "/products/jacket/pink/3.jpg",
          "/products/jacket/pink/4.jpg",
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
    tagline: "Move with intention. Dress with purpose.",
    description:
      "A high-waisted studio pant that bridges the gap between technical performance and effortless allure. Le Pantalon Flow is designed for those who refuse to choose between form and function.",
    longDescription:
      "Le Pantalon Flow was conceived during countless hours observing the fluid, deliberate movements of Pilates practice — the way fabric should follow the body, never fight it. The result is a pant with a second-skin fit through the hip and thigh that releases into a slightly wider leg below the knee, creating a silhouette that is as striking in stillness as it is in motion. The proprietary high-rise waistband sits flat without rolling, offering genuine support through deep core work while maintaining an elegant line under any top. Invisible flat-locked seams eliminate friction entirely, and a discreet back pocket holds essentials without disrupting the clean aesthetic. Pair with La Veste Studio for a complete look that moves seamlessly from reformer to rendez-vous.",
    features: [
      "Proprietary no-roll high-rise waistband",
      "Four-way stretch with compressive support",
      "Invisible flat-locked seam construction",
      "Slightly flared leg below the knee",
      "Discreet back pocket with hidden zip",
      "Moisture-wicking and quick-dry finish",
      "UPF 40+ sun protection",
      "Squat-proof opacity guaranteed",
    ],
    materials:
      "72% recycled polyamide, 28% elastane. Waistband: 80% polyamide, 20% elastane. OEKO-TEX Standard 100 certified.",
    care: "Machine wash cold at 30°C on a gentle cycle. Do not tumble dry. Lay flat to dry. Do not iron. Do not use fabric softener — it degrades elastane over time.",
    colors: [
      {
        id: "black",
        name: "Noir Absolu",
        hex: "#0A0A0A",
        images: [
          "/products/pants/black/1.jpg",
          "/products/pants/black/2.jpg",
          "/products/pants/black/3.jpg",
          "/products/pants/black/4.jpg",
        ],
      },
      {
        id: "pink",
        name: "Rose Poudré",
        hex: "#D4A0A0",
        images: [
          "/products/pants/pink/1.jpg",
          "/products/pants/pink/2.jpg",
          "/products/pants/pink/3.jpg",
          "/products/pants/pink/4.jpg",
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
