import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Menu, X, Phone, Mail } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#visit", label: "Visit Us" },
  ];

  return (
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-300 border-b",
        scrolled 
          ? "bg-background/95 backdrop-blur-md border-border py-3 shadow-sm" 
          : "bg-transparent border-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="z-50 group">
          <div className="flex flex-col items-center cursor-pointer">
            <span className={cn(
              "font-sans text-xl md:text-2xl font-bold tracking-wider transition-colors duration-300",
              scrolled ? "text-primary" : "text-primary md:text-white"
            )}>
              MOON JEWELERS
            </span>
            <span className={cn(
              "text-[0.6rem] uppercase tracking-[0.3em] font-light mt-1",
              scrolled ? "text-muted-foreground" : "text-white/80"
            )}>
              Since 1992
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6 mr-4 border-r pr-6 border-border/50">
            <a href="tel:713-952-6660" className={cn(
              "flex items-center gap-2 text-sm transition-colors hover:text-primary",
              scrolled ? "text-foreground" : "text-white"
            )}>
              <Phone className="w-4 h-4" />
              713-952-6660
            </a>
            <a href="mailto:Themoonjewelers@gmail.com" className={cn(
              "flex items-center gap-2 text-sm transition-colors hover:text-primary",
              scrolled ? "text-foreground" : "text-white"
            )}>
              <Mail className="w-4 h-4" />
              Themoonjewelers@gmail.com
            </a>
          </div>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={cn(
                "text-sm font-medium tracking-wide transition-colors hover:text-primary relative group",
                scrolled ? "text-foreground" : "text-white/90"
              )}
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            "md:hidden z-50 p-2",
            scrolled || isOpen ? "text-foreground" : "text-white"
          )}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-0 left-0 w-full bg-background border-b border-border shadow-xl md:hidden flex flex-col pt-24 pb-10 px-6 gap-6"
            >
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-serif text-foreground hover:text-primary transition-colors text-center"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex flex-col items-center gap-4 mt-4 pt-6 border-t border-border">
                <a href="tel:713-952-6660" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
                  <Phone className="w-5 h-5" />
                  713-952-6660
                </a>
                <a href="mailto:Themoonjewelers@gmail.com" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
                  <Mail className="w-5 h-5" />
                  Themoonjewelers@gmail.com
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
