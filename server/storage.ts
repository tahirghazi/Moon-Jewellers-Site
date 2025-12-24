import { products, type Product, type InsertProduct } from "@shared/schema";

export interface IStorage {
  getProducts(): Promise<Product[]>;
  getProduct(id: number): Promise<Product | undefined>;
}

export class MemStorage implements IStorage {
  private products: Map<number, Product>;
  private currentId: number;

  constructor() {
    this.products = new Map();
    this.currentId = 1;
    this.seed();
  }

  async getProducts(): Promise<Product[]> {
    return Array.from(this.products.values());
  }

  async getProduct(id: number): Promise<Product | undefined> {
    return this.products.get(id);
  }

  private seed() {
    const seedData: InsertProduct[] = [
      {
        name: "Diamond Solitaire Ring",
        description: "A stunning 1.5 carat diamond set in 18k white gold. Perfect for engagements.",
        price: "$3,500",
        imageUrl: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=800",
        category: "Rings"
      },
      {
        name: "Pearl Strand Necklace",
        description: "Classic freshwater pearls strung on silk. A timeless elegance.",
        price: "$450",
        imageUrl: "https://images.unsplash.com/photo-1599643478518-17488fbbcd75?auto=format&fit=crop&q=80&w=800",
        category: "Necklaces"
      },
      {
        name: "Gold Hoop Earrings",
        description: "Solid 14k gold hoops, lightweight and suitable for everyday wear.",
        price: "$280",
        imageUrl: "https://images.unsplash.com/photo-1635767798638-3e25234714d6?auto=format&fit=crop&q=80&w=800",
        category: "Earrings"
      },
      {
        name: "Sapphire Pendant",
        description: "Deep blue sapphire surrounded by a halo of diamonds.",
        price: "$1,200",
        imageUrl: "https://images.unsplash.com/photo-1617038224538-276361a49479?auto=format&fit=crop&q=80&w=800",
        category: "Necklaces"
      },
      {
        name: "Silver Charm Bracelet",
        description: "Sterling silver bracelet with customizable charms.",
        price: "$150",
        imageUrl: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=800",
        category: "Bracelets"
      }
    ];

    seedData.forEach(p => {
      const id = this.currentId++;
      this.products.set(id, { ...p, id });
    });
  }
}

export const storage = new MemStorage();
