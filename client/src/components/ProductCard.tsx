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
      <div className="relative w-full overflow-hidden bg-gray-100 mb-4 rounded-md" style={{ paddingBottom: '133.33%' }}>
        <img
          src={product.imageUrl}
          alt={product.name}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-103"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
        
        {/* Details Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out bg-gradient-to-t from-black/70 to-transparent">
          <button className="w-full bg-primary hover:bg-accent text-white py-3 font-medium text-xs tracking-widest uppercase transition-colors">
            View Details
          </button>
        </div>
      </div>
      
      <div className="text-center space-y-2">
        <p className="text-xs text-gray-500 uppercase tracking-wider font-light">
          {product.category}
        </p>
        <h3 className="font-sans text-base font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
          {product.name}
        </h3>
        <p className="text-primary font-semibold text-sm">
          {product.price}
        </p>
      </div>
    </motion.div>
  );
}
