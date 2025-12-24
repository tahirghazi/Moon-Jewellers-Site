import type { Product } from "@shared/schema";
import { motion } from "framer-motion";

interface ProductCardProps {
  product: Product;
  index: number;
}

export function ProductCard({ product, index }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group cursor-pointer"
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-secondary mb-4">
        {/* Placeholder for loading state could go here */}
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
        
        {/* Add to Cart Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
          <button className="w-full bg-white/95 backdrop-blur-sm text-foreground py-3 font-medium text-xs tracking-widest uppercase hover:bg-primary hover:text-white transition-colors">
            View Details
          </button>
        </div>
      </div>
      
      <div className="text-center space-y-1">
        <p className="text-xs text-muted-foreground uppercase tracking-wider font-light">
          {product.category}
        </p>
        <h3 className="font-serif text-lg text-foreground group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        <p className="text-primary font-medium tracking-wide">
          {product.price}
        </p>
      </div>
    </motion.div>
  );
}
