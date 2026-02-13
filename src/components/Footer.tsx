import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <Logo size="small" />
            <p className="font-body text-sm text-primary-foreground/60 mt-4 leading-relaxed">
              Mumbai&apos;s exclusive destination for premium shirting and suiting fabrics since generations.
            </p>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold text-gold mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {["Home", "Shop", "About", "Contact"].map((link) => (
                <Link key={link} to={link === "Home" ? "/" : link === "Shop" ? "/products" : `/${link.toLowerCase()}`}
                  className="font-body text-sm text-primary-foreground/60 hover:text-gold transition-colors">
                  {link}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold text-gold mb-4">Categories</h4>
            <div className="flex flex-col gap-2">
              {["Shirting Fabrics", "Suiting Fabrics", "Linen Collection"].map((cat) => (
                <Link key={cat} to="/products" className="font-body text-sm text-primary-foreground/60 hover:text-gold transition-colors">
                  {cat}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold text-gold mb-4">Contact Us</h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-gold flex-shrink-0" />
                <span className="font-body text-sm text-primary-foreground/60">
                  3rd Floor, Shop No. 348, B Wing, Keval Industrial Estate, Senapati Bapat Marg, Lower Parel, Mumbai - 400 013
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                <span className="font-body text-sm text-primary-foreground/60">+91 99675 55595</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-gold flex-shrink-0" />
                <span className="font-body text-sm text-primary-foreground/60">gramsandmeters@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-6 text-center">
          <p className="font-body text-xs text-primary-foreground/40">
            © {new Date().getFullYear()} Grams & Meters. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
