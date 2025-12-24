import { Instagram, Facebook, Twitter, MapPin, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div>
              <span className="font-serif text-2xl font-bold tracking-widest">LUMIÈRE</span>
              <p className="text-white/60 text-sm mt-4 leading-relaxed">
                Crafting timeless elegance since 1985. Every piece tells a story of luxury, passion, and unparalleled craftsmanship.
              </p>
            </div>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6">Collections</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li className="hover:text-primary cursor-pointer transition-colors">Engagement Rings</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Fine Necklaces</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Diamond Bracelets</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Luxury Watches</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Custom Design</li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6">Customer Care</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li className="hover:text-primary cursor-pointer transition-colors">Contact Us</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Book Appointment</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Shipping & Returns</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Jewelry Care</li>
              <li className="hover:text-primary cursor-pointer transition-colors">FAQ</li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span>123 Luxury Avenue, New York, NY 10012</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>+1 (212) 555-0199</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span>concierge@lumiere.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
          <p>© 2024 Lumière Jewelry. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
