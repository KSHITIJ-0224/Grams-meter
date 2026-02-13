import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShoppingBag, Menu, X, Phone } from "lucide-react";
import Logo from "./Logo";
import { useCart } from "@/context/CartContext";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems, setIsCartOpen } = useCart();
  const location = useLocation();

  const links = [
    { to: "/", label: "Home" },
    { to: "/products", label: "Shop" },
    { to: "/products?category=shirting", label: "Shirting" },
    { to: "/products?category=suiting", label: "Suiting" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <>
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground text-center py-2 text-sm font-body tracking-wide">
        <span className="flex items-center justify-center gap-2">
          <Phone className="w-3 h-3" />
          Order via WhatsApp: +91 99675 55595
        </span>
      </div>

      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 flex items-center justify-between h-20">
          <Link to="/">
            <Logo size="small" dark={true} />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className={`font-body text-sm tracking-wider uppercase transition-colors hover:text-gold ${
                  location.pathname === link.to ? "text-gold border-b-2 border-gold pb-1" : "text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 transition-colors hover:text-gold"
            >
              <ShoppingBag className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-gold text-accent-foreground text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                  {totalItems}
                </span>
              )}
            </button>

            <button className="lg:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <nav className="lg:hidden bg-background border-t border-border animate-fade-in">
            {links.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className="block px-6 py-3 font-body text-sm tracking-wider uppercase border-b border-border hover:bg-secondary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}
      </header>
    </>
  );
};

export default Header;
