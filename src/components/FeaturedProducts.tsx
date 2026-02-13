import { Link } from "react-router-dom";
import { products } from "@/data/products";
import ProductCard from "./ProductCard";

const FeaturedProducts = () => {
  const featured = products.slice(0, 4);

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <p className="font-accent text-gold tracking-[0.3em] uppercase text-sm mb-2">Handpicked For You</p>
          <h2 className="font-display text-4xl font-bold text-foreground">Featured Fabrics</h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/products"
            className="inline-flex items-center px-8 py-3 border-2 border-gold text-gold font-body font-bold tracking-wider uppercase text-sm rounded hover:bg-gold hover:text-accent-foreground transition-colors"
          >
            View All Fabrics
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
