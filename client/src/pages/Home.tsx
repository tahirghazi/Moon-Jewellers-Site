import { useProducts } from "@/hooks/use-products";
import { Navigation } from "@/components/Navigation";
import { ProductCard } from "@/components/ProductCard";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowRight, Star, Clock, Shield } from "lucide-react";

// Mock data as fallback for loading state or empty database
const MOCK_PRODUCTS = [
  {
    id: 1,
    name: "Ethereal Diamond Ring",
    price: "$5,400",
    category: "Rings",
    description: "A stunning solitaire diamond set in 18k gold.",
    imageUrl: "https://images.unsplash.com/photo-1605100804763-eb2fc631037f?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Pearl Drop Earrings",
    price: "$1,200",
    category: "Earrings",
    description: "Freshwater pearls suspended from gold chains.",
    imageUrl: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Golden Hour Necklace",
    price: "$3,800",
    category: "Necklaces",
    description: "Layered gold chains catching the light.",
    imageUrl: "https://images.unsplash.com/photo-1599643478518-17488fbbcd75?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 4,
    name: "Sapphire Royal Band",
    price: "$6,500",
    category: "Rings",
    description: "Deep blue sapphires embedded in platinum.",
    imageUrl: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?q=80&w=1000&auto=format&fit=crop"
  }
];

export default function Home() {
  const { data: products, isLoading } = useProducts();
  
  // Use DB products if available, otherwise fallback to mock for visuals
  const displayProducts = products && products.length > 0 ? products : MOCK_PRODUCTS;

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navigation />

      {/* HERO SECTION */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          {/* Unsplash image: Elegant woman wearing jewelry close up */}
          <img 
            src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=2000&auto=format&fit=crop" 
            alt="Hero Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center text-white">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-sm md:text-base uppercase tracking-[0.3em] mb-4 text-white/90"
          >
            Timeless Elegance Since 1985
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium mb-8 leading-tight"
          >
            Refined Luxury <br /> for Every Occasion
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a 
              href="#collections" 
              className="inline-flex items-center gap-3 border border-white px-8 py-4 text-sm tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-300"
            >
              Discover Collection
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* FEATURES BAR */}
      <div className="bg-secondary py-12 border-b border-border">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-border/50">
          <div className="flex flex-col items-center gap-3 p-4">
            <Star className="w-6 h-6 text-primary" />
            <h3 className="font-serif text-lg">Ethically Sourced</h3>
            <p className="text-sm text-muted-foreground">Conflict-free diamonds and recycled gold.</p>
          </div>
          <div className="flex flex-col items-center gap-3 p-4">
            <Shield className="w-6 h-6 text-primary" />
            <h3 className="font-serif text-lg">Lifetime Warranty</h3>
            <p className="text-sm text-muted-foreground">We stand behind our craftsmanship forever.</p>
          </div>
          <div className="flex flex-col items-center gap-3 p-4">
            <Clock className="w-6 h-6 text-primary" />
            <h3 className="font-serif text-lg">Custom Design</h3>
            <p className="text-sm text-muted-foreground">Bring your unique vision to life.</p>
          </div>
        </div>
      </div>

      {/* COLLECTIONS GRID */}
      <section id="collections" className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase mb-3 block">Our Selection</span>
            <h2 className="font-serif text-4xl md:text-5xl mb-6 text-foreground">Featured Collections</h2>
            <p className="text-muted-foreground leading-relaxed">
              Explore our meticulously curated selection of fine jewelry, designed to celebrate life's most precious moments.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {isLoading 
              ? Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="animate-pulse">
                    <div className="bg-secondary aspect-[3/4] mb-4" />
                    <div className="h-4 bg-secondary w-2/3 mx-auto mb-2" />
                    <div className="h-4 bg-secondary w-1/3 mx-auto" />
                  </div>
                ))
              : displayProducts.map((product, idx) => (
                  <ProductCard key={product.id} product={product} index={idx} />
                ))
            }
          </div>
          
          <div className="mt-16 text-center">
            <button className="text-foreground border-b border-foreground pb-1 hover:text-primary hover:border-primary transition-colors uppercase text-xs tracking-widest">
              View All Products
            </button>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-24 bg-secondary/30 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2 relative">
              <div className="aspect-[4/5] relative z-10 overflow-hidden">
                {/* Unsplash image: Artisan working on jewelry */}
                <img 
                  src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?q=80&w=1000&auto=format&fit=crop" 
                  alt="Craftsmanship" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative border offset */}
              <div className="absolute top-8 left-8 w-full h-full border border-primary/20 -z-0" />
            </div>
            
            <div className="w-full lg:w-1/2 space-y-8">
              <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase">The Atelier</span>
              <h2 className="font-serif text-4xl md:text-5xl text-foreground leading-tight">
                Crafting Beauty <br /> Through Generations
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Founded in 1985, Lumière began with a simple vision: to create jewelry that transcends trends and becomes part of your legacy. 
                Our master artisans combine traditional techniques with modern innovation, ensuring every piece is not just an accessory, but a work of art.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We believe in sustainable luxury. Every diamond is conflict-free, and every gram of gold is responsibly sourced. 
                When you choose Lumière, you choose integrity, beauty, and permanence.
              </p>
              <button className="bg-foreground text-white px-8 py-4 text-xs tracking-widest uppercase hover:bg-primary transition-colors">
                Read Our Story
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* VISIT US SECTION */}
      <section id="visit" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-border">
            {/* Info Side */}
            <div className="p-12 md:p-16 flex flex-col justify-center bg-secondary/10">
              <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase mb-4">Visit Our Boutique</span>
              <h2 className="font-serif text-4xl mb-8">New York Flagship</h2>
              
              <div className="space-y-8">
                <div>
                  <h4 className="font-serif text-lg mb-2">Location</h4>
                  <p className="text-muted-foreground">123 Luxury Avenue<br />SoHo, New York, NY 10012</p>
                </div>
                
                <div>
                  <h4 className="font-serif text-lg mb-2">Opening Hours</h4>
                  <ul className="text-muted-foreground space-y-1">
                    <li className="flex justify-between max-w-xs"><span>Mon - Fri</span> <span>10:00 AM - 7:00 PM</span></li>
                    <li className="flex justify-between max-w-xs"><span>Saturday</span> <span>11:00 AM - 6:00 PM</span></li>
                    <li className="flex justify-between max-w-xs"><span>Sunday</span> <span>Closed</span></li>
                  </ul>
                </div>
                
                <div className="pt-4">
                  <button className="border border-foreground px-8 py-3 text-xs tracking-widest uppercase hover:bg-foreground hover:text-white transition-colors">
                    Book Appointment
                  </button>
                </div>
              </div>
            </div>

            {/* Map Side */}
            <div className="h-[500px] lg:h-auto w-full bg-secondary relative grayscale hover:grayscale-0 transition-all duration-500">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00369368400567!3d40.72240177933185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2598854112519%3A0x8e8252077e62a225!2sSoHo%2C%20New%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1645564756836!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
                title="Google Maps Location"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
