import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product4 from "@/assets/product-4.jpg";
import product5 from "@/assets/product-5.jpg";
import product6 from "@/assets/product-6.jpg";
import product7 from "@/assets/product-7.jpg";

export interface Product {
  id: string;
  name: string;
  category: "shirting" | "suiting" | "linen";
  price: number;
  originalPrice?: number;
  image: string;
  description: string;
  fabric: string;
  width: string;
  weight: string;
  minOrder: string;
  colors: string[];
  inStock: boolean;
}

export const products: Product[] = [
  {
    id: "gm-001",
    name: "Premium White Cotton Shirting",
    category: "shirting",
    price: 450,
    originalPrice: 550,
    image: product1,
    description: "Ultra-fine 2-ply 100% Egyptian cotton shirting fabric. Perfect for formal and business shirts with a crisp, smooth finish.",
    fabric: "100% Egyptian Cotton",
    width: "58 inches",
    weight: "120 GSM",
    minOrder: "1 meter",
    colors: ["White", "Off-White"],
    inStock: true,
  },
  {
    id: "gm-002",
    name: "Navy Blue Pinstripe Suiting",
    category: "suiting",
    price: 1200,
    originalPrice: 1500,
    image: product2,
    description: "Classic navy blue pinstripe suiting fabric. Premium wool blend with elegant drape, ideal for business suits.",
    fabric: "Wool Blend (80% Wool, 20% Polyester)",
    width: "60 inches",
    weight: "280 GSM",
    minOrder: "1.5 meters",
    colors: ["Navy Blue"],
    inStock: true,
  },
  {
    id: "gm-003",
    name: "Charcoal Grey Wool Suiting",
    category: "suiting",
    price: 1350,
    image: product4,
    description: "Rich charcoal grey pure wool suiting fabric with subtle herringbone pattern. Perfect for evening and formal wear.",
    fabric: "100% Pure Wool",
    width: "60 inches",
    weight: "300 GSM",
    minOrder: "1.5 meters",
    colors: ["Charcoal Grey"],
    inStock: true,
  },
  {
    id: "gm-004",
    name: "Sky Blue Oxford Shirting",
    category: "shirting",
    price: 380,
    originalPrice: 450,
    image: product5,
    description: "Premium sky blue oxford weave shirting fabric. Soft, breathable and perfect for casual-formal shirts.",
    fabric: "100% Cotton Oxford",
    width: "58 inches",
    weight: "140 GSM",
    minOrder: "1 meter",
    colors: ["Sky Blue", "Royal Blue"],
    inStock: true,
  },
  {
    id: "gm-005",
    name: "Natural Cream Linen",
    category: "linen",
    price: 680,
    image: product6,
    description: "Premium natural cream linen fabric with beautiful texture. Ideal for summer suits, trousers and casual blazers.",
    fabric: "100% Pure Linen",
    width: "56 inches",
    weight: "200 GSM",
    minOrder: "1 meter",
    colors: ["Cream", "Natural"],
    inStock: true,
  },
  {
    id: "gm-006",
    name: "Burgundy Velvet Suiting",
    category: "suiting",
    price: 1800,
    originalPrice: 2200,
    image: product7,
    description: "Luxurious burgundy velvet suiting fabric. Rich, deep color with plush texture for statement evening wear.",
    fabric: "Velvet (Cotton-Silk Blend)",
    width: "54 inches",
    weight: "320 GSM",
    minOrder: "1.5 meters",
    colors: ["Burgundy", "Wine"],
    inStock: true,
  },
];

export const categories = [
  { id: "shirting", name: "Shirting Fabrics", description: "Premium cotton & blended fabrics for shirts" },
  { id: "suiting", name: "Suiting Fabrics", description: "Wool, worsted & blended fabrics for suits" },
  { id: "linen", name: "Linen Collection", description: "Pure linen fabrics for all occasions" },
] as const;
