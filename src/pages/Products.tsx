import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { products, categories } from "@/data/products";
import ProductCard from "@/components/ProductCard";

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get("category") || "all";
  const [sortBy, setSortBy] = useState("default");

  const filtered = useMemo(() => {
    let result = activeCategory === "all" ? products : products.filter((p) => p.category === activeCategory);
    if (sortBy === "price-low") result = [...result].sort((a, b) => a.price - b.price);
    if (sortBy === "price-high") result = [...result].sort((a, b) => b.price - a.price);
    return result;
  }, [activeCategory, sortBy]);

  return (
    <main className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <p className="font-accent text-gold-dark tracking-[0.3em] uppercase text-sm mb-2 font-bold">Our Collection</p>
          <h1 className="font-display text-4xl font-bold text-foreground">Premium Fabrics</h1>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSearchParams({})}
              className={`px-4 py-2 rounded font-body text-sm tracking-wider uppercase transition-colors ${
                activeCategory === "all" ? "bg-gold text-accent-foreground" : "bg-secondary text-foreground hover:bg-gold/20"
              }`}
            >
              All
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSearchParams({ category: cat.id })}
                className={`px-4 py-2 rounded font-body text-sm tracking-wider uppercase transition-colors ${
                  activeCategory === cat.id ? "bg-gold text-accent-foreground" : "bg-secondary text-foreground hover:bg-gold/20"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 border border-border rounded font-body text-sm bg-background"
          >
            <option value="default">Sort by</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center font-body text-muted-foreground py-20">No fabrics found in this category.</p>
        )}
      </div>
    </main>
  );
};

export default Products;
