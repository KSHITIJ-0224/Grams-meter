import { Link } from "react-router-dom";
import { Product } from "@/data/products";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Link to={`/product/${product.id}`} className="group block">
      <div className="relative aspect-[4/5] overflow-hidden rounded-lg mb-4 bg-secondary">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {product.originalPrice && (
          <span className="absolute top-3 left-3 bg-gold text-accent-foreground text-xs font-bold px-3 py-1 rounded">
            {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
          </span>
        )}
        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300" />
      </div>
      <div>
        <p className="font-body text-xs tracking-wider uppercase text-muted-foreground mb-1">{product.category}</p>
        <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-gold transition-colors">{product.name}</h3>
        <div className="flex items-center gap-2 mt-1">
          <span className="font-body font-bold text-foreground">₹{product.price}/m</span>
          {product.originalPrice && (
            <span className="font-body text-sm text-muted-foreground line-through">₹{product.originalPrice}/m</span>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
