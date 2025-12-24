import { useProducts } from "@/hooks/use-products";
import { useQuery } from "@tanstack/react-query";
import { Navigation } from "@/components/Navigation";
import { ProductCard } from "@/components/ProductCard";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Star } from "lucide-react";
import type { Testimonial } from "@shared/schema";

export default function Home() {
  const { data: products } = useProducts();
  const displayProducts = products || [];
  
  const { data: testimonials = [] } = useQuery<Testimonial[]>({
    queryKey: ['/api/testimonials'],
    queryFn: async () => {
      const res = await fetch('/api/testimonials');
      return res.json();
    },
  });

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* HERO SECTION */}
      <section className="relative min-h-[550px] flex items-center justify-center pt-20 pb-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=2000&auto=format&fit=crop" 
            alt="Hero Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/35" />
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center text-white">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-2 leading-tight">
              MOON JEWELERS
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Precious Metals & Fine Jewelry Since 1992. Authentic 24K gold, silver, and diamonds.
            </p>
            <a 
              href="#products" 
              className="inline-block bg-primary hover:bg-accent text-white px-8 py-3 text-sm font-semibold transition-colors"
            >
              Explore Collections
            </a>
          </motion.div>
        </div>
      </section>

      {/* PRODUCTS SECTION */}
      <section id="products" className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Collections</h2>
            <p className="text-gray-600 text-lg">
              Explore our curated selection of precious metals and fine jewelry
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayProducts.map((product, idx) => (
              <ProductCard key={product.id} product={product} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-20 md:py-28 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Our Heritage</h2>
            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>
                Founded in 1992, we have been Houston's trusted source for precious metals and fine jewelry for over 30 years. 
                Located in the heart of Hilcroft Shopping Center, our family-owned business is built on principles of authenticity, quality, and integrity.
              </p>
              <p>
                We specialize in:
              </p>
              <ul className="space-y-3 ml-6">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span><strong>24K Gold Bars & Coins</strong> - Pure investment-grade precious metals</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span><strong>24K Silver Bars & Coins</strong> - Authentic and certified for collectors and investors</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span><strong>22K Gold Jewelry</strong> - Traditional and contemporary designs</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold mt-1">•</span>
                  <span><strong>Diamond Jewelry</strong> - Certified gemstones and bespoke pieces</span>
                </li>
              </ul>
              <p>
                Every item is carefully authenticated and meets the highest standards of purity. 
                When you choose us, you're choosing over a century of trust and expertise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section id="testimonials" className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Customer Testimonials</h2>
            <p className="text-gray-600 text-lg">
              Trusted by customers for over 100 years
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="border border-gray-200 rounded-lg p-8 bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* VISIT SECTION */}
      <section id="visit" className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Visit Us</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Info Side */}
            <div className="space-y-8">
              <div className="flex gap-6">
                <MapPin className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Location</h3>
                  <p className="text-gray-600 text-lg">
                    Hilcroft Shopping Center<br />
                    Houston, TX 77057
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <Clock className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Hours</h3>
                  <div className="text-gray-600 text-lg space-y-1">
                    <div className="flex justify-between max-w-xs">
                      <span>Monday - Friday</span>
                      <span>10:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between max-w-xs">
                      <span>Saturday</span>
                      <span>10:00 AM - 5:00 PM</span>
                    </div>
                    <div className="flex justify-between max-w-xs">
                      <span>Sunday</span>
                      <span>12:00 PM - 5:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-6">
                <Phone className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Contact</h3>
                  <p className="text-gray-600 text-lg">
                    Call for pricing and inquiries<br />
                    Professional consultations available
                  </p>
                </div>
              </div>
            </div>

            {/* Map Side */}
            <div className="h-[400px] md:h-[500px] rounded-lg overflow-hidden border border-gray-200">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3465.0102296679024!2d-95.50311782500219!3d29.719462933896196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c24aee6177c7%3A0x8ea4136d669768a2!2sMoon%20Jewelers!5e0!3m2!1sen!2s!4v1766577857410!5m2!1sen!2s" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Moon Jewelers Location"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
