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
        name: "24K Gold Bars",
        description: "Pure 24 karat gold bars. Each bar weighs 10 grams of certified fine gold.",
        price: "Call for pricing",
        imageUrl: "https://images.unsplash.com/photo-1599643478518-17488fbbcd75?auto=format&fit=crop&q=80&w=800",
        category: "Gold Bars"
      },
      {
        name: "24K Gold Coins",
        description: "Authentic 24K gold coins, a timeless investment and collectible.",
        price: "Call for pricing",
        imageUrl: "https://images.unsplash.com/photo-1610884291255-76124c2852ba?auto=format&fit=crop&q=80&w=800",
        category: "Gold Coins"
      },
      {
        name: "24K Silver Bars",
        description: "High-purity 24 karat silver bars. Perfect for investors and collectors.",
        price: "Call for pricing",
        imageUrl: "https://images.unsplash.com/photo-1599643478518-17488fbbcd75?auto=format&fit=crop&q=80&w=800",
        category: "Silver Bars"
      },
      {
        name: "24K Silver Coins",
        description: "Pure 24K silver coins with superior shine and quality.",
        price: "Call for pricing",
        imageUrl: "https://images.unsplash.com/photo-1610884291255-76124c2852ba?auto=format&fit=crop&q=80&w=800",
        category: "Silver Coins"
      },
      {
        name: "22K Gold Jewelry Collection",
        description: "Exquisite 22K gold jewelry featuring traditional and contemporary designs.",
        price: "$2,500 - $8,000",
        imageUrl: "https://images.unsplash.com/photo-1599643478518-17488fbbcd75?auto=format&fit=crop&q=80&w=800",
        category: "Gold Jewelry"
      },
      {
        name: "Diamond Jewelry Sets",
        description: "Stunning diamond jewelry including rings, necklaces, and earrings.",
        price: "$5,000 - $50,000",
        imageUrl: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=800",
        category: "Diamond Jewelry"
      }
    ];

    seedData.forEach(p => {
      const id = this.currentId++;
      this.products.set(id, { ...p, id });
    });
  }
}

export const storage = new MemStorage();
