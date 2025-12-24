import { MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-white pt-16 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div className="space-y-4">
            <span className="font-sans text-2xl font-bold tracking-wider">MOON JEWELERS</span>
            <p className="text-white/70 text-sm leading-relaxed">
              Trusted source for precious metals and fine jewelry since 1917. Specializing in authentic 24K gold, silver, and diamonds.
            </p>
          </div>

          <div>
            <h4 className="font-sans text-lg font-semibold mb-6">Contact Information</h4>
            <ul className="space-y-4 text-sm text-white/70">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>Hilcroft Shopping Center, Houston, TX 77057</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>Call for pricing and inquiries</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span>Professional consultations available</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-xs text-white/40">
          <p>© 2024 Moon Jewelers. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
