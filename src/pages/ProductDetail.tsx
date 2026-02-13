import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ChevronLeft, Minus, Plus } from "lucide-react";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import ProductCard from "@/components/ProductCard";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const [meters, setMeters] = useState(1);
  const { addToCart } = useCart();

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="font-display text-2xl">Product not found</h1>
        <Link to="/products" className="text-gold underline mt-4 inline-block">Back to shop</Link>
      </div>
    );
  }

  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);

  const whatsappMsg = encodeURIComponent(
    `Hi, I'm interested in: ${product.name}\nQuantity: ${meters} meters\nPrice: ₹${product.price * meters}\n\nPlease confirm availability.`
  );

  return (
    <main className="py-8">
      <div className="container mx-auto px-4">
        <Link to="/products" className="inline-flex items-center gap-1 font-body text-sm text-muted-foreground hover:text-gold mb-6">
          <ChevronLeft className="w-4 h-4" /> Back to shop
        </Link>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="aspect-[4/5] rounded-lg overflow-hidden bg-secondary">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          </div>

          <div className="flex flex-col justify-center">
            <p className="font-body text-xs tracking-wider uppercase text-gold mb-2">{product.category}</p>
            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">{product.name}</h1>
            
            <div className="flex items-baseline gap-3 mb-6">
              <span className="font-display text-3xl font-bold text-foreground">₹{product.price}</span>
              <span className="font-body text-muted-foreground">/meter</span>
              {product.originalPrice && (
                <span className="font-body text-lg text-muted-foreground line-through">₹{product.originalPrice}</span>
              )}
            </div>

            <p className="font-body text-muted-foreground leading-relaxed mb-8">{product.description}</p>

            {/* Details */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                ["Fabric", product.fabric],
                ["Width", product.width],
                ["Weight", product.weight],
                ["Min Order", product.minOrder],
              ].map(([label, value]) => (
                <div key={label} className="border border-border rounded p-3">
                  <p className="font-body text-xs text-muted-foreground uppercase tracking-wider">{label}</p>
                  <p className="font-body text-sm font-semibold">{value}</p>
                </div>
              ))}
            </div>

            {/* Quantity */}
            <div className="flex items-center gap-4 mb-6">
              <span className="font-body text-sm text-muted-foreground">Meters:</span>
              <div className="flex items-center border border-border rounded">
                <button onClick={() => setMeters(Math.max(0.5, meters - 0.5))} className="p-3 hover:bg-secondary transition-colors">
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-6 font-body font-bold">{meters}</span>
                <button onClick={() => setMeters(meters + 0.5)} className="p-3 hover:bg-secondary transition-colors">
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <span className="font-body font-bold text-lg ml-auto">₹{product.price * meters}</span>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => addToCart(product, meters)}
                className="flex-1 py-4 bg-gold text-accent-foreground font-body font-bold tracking-wider uppercase text-sm rounded hover:bg-gold-dark transition-colors"
              >
                Add to Cart
              </button>
              <a
                href={`https://wa.me/919967555595?text=${whatsappMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-4 bg-[#25D366] text-accent-foreground font-body font-bold tracking-wider uppercase text-sm rounded hover:bg-[#20bd5a] transition-colors"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Buy via WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <section className="mt-20">
            <h2 className="font-display text-2xl font-bold text-foreground mb-8">You May Also Like</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
};

export default ProductDetail;
