import { products, testimonials, type Product, type InsertProduct, type Testimonial, type InsertTestimonial } from "@shared/schema";

export interface IStorage {
  getProducts(): Promise<Product[]>;
  getProduct(id: number): Promise<Product | undefined>;
  getTestimonials(): Promise<Testimonial[]>;
}

export class MemStorage implements IStorage {
  private products: Map<number, Product>;
  private testimonials: Map<number, Testimonial>;
  private currentProductId: number;
  private currentTestimonialId: number;

  constructor() {
    this.products = new Map();
    this.testimonials = new Map();
    this.currentProductId = 1;
    this.currentTestimonialId = 1;
    this.seed();
  }

  async getProducts(): Promise<Product[]> {
    return Array.from(this.products.values());
  }

  async getProduct(id: number): Promise<Product | undefined> {
    return this.products.get(id);
  }

  async getTestimonials(): Promise<Testimonial[]> {
    return Array.from(this.testimonials.values());
  }

  private seed() {
    this.seedProducts();
    this.seedTestimonials();
  }

  private seedProducts() {
    const seedData: InsertProduct[] = [
      {
        name: "24K Gold Bars",
        description: "Pure 24 karat gold bars. Each bar weighs 10 grams of certified fine gold.",
        price: "Call for pricing",
        imageUrl: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=800&auto=format&fit=crop",
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
        imageUrl: "https://images.unsplash.com/photo-1624365235958-745ffe297f9f?q=80&w=800&auto=format&fit=crop",
        category: "Silver Bars"
      },
      {
        name: "24K Silver Coins",
        description: "Pure 24K silver coins with superior shine and quality.",
        price: "Call for pricing",
        imageUrl: "https://images.unsplash.com/photo-1599643478518-17488fbbcd75?q=80&w=800&auto=format&fit=crop",
        category: "Silver Coins"
      },
      {
        name: "22K Gold Jewelry Collection",
        description: "Exquisite 22K gold jewelry featuring traditional and contemporary designs.",
        price: "$2,500 - $8,000",
        imageUrl: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=800&auto=format&fit=crop",
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
      const id = this.currentProductId++;
      this.products.set(id, { ...p, id });
    });
  }

  private seedTestimonials() {
    const testimonialData: InsertTestimonial[] = [
      {
        name: "Sarah Martinez",
        title: "Investor & Collector",
        content: "I've been buying precious metals from Moon Jewelers for 5 years. Their authenticity and fair pricing are unmatched. Highly recommend!",
        rating: 5
      },
      {
        name: "James Chen",
        title: "Business Owner",
        content: "Purchased diamond jewelry for my wife's anniversary. The quality is exceptional and the staff was incredibly knowledgeable.",
        rating: 5
      },
      {
        name: "Patricia Williams",
        title: "Long-time Customer",
        content: "Over 20 years of trust with Moon Jewelers. They're the real deal when it comes to precious metals authentication.",
        rating: 5
      },
      {
        name: "Michael Rodriguez",
        title: "Estate Buyer",
        content: "Best prices for 24K gold and silver in Houston. Professional, honest, and transparent. Worth the visit!",
        rating: 5
      }
    ];

    testimonialData.forEach(t => {
      const id = this.currentTestimonialId++;
      this.testimonials.set(id, { ...t, id });
    });
  }
}

export const storage = new MemStorage();
