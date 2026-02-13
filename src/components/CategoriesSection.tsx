import { Link } from "react-router-dom";
import categoryShirting from "@/assets/category-shirting.jpg";
import categorySuiting from "@/assets/category-suiting.jpg";
import categoryLinen from "@/assets/category-linen.jpg";

const cats = [
  { id: "shirting", name: "Shirting Fabrics", desc: "Premium cottons, oxfords & blends", image: categoryShirting },
  { id: "suiting", name: "Suiting Fabrics", desc: "Fine wool, worsted & blended fabrics", image: categorySuiting },
  { id: "linen", name: "Linen Collection", desc: "Pure linen for all seasons", image: categoryLinen },
];

const CategoriesSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <p className="font-accent text-gold-dark tracking-[0.3em] uppercase text-sm mb-2 font-bold">Our Collections</p>
          <h2 className="font-display text-4xl font-bold text-foreground">Shop by Category</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cats.map((cat) => (
            <Link
              key={cat.id}
              to={`/products?category=${cat.id}`}
              className="group relative h-80 rounded-lg overflow-hidden shadow-elegant"
            >
              <img src={cat.image} alt={cat.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-display text-2xl font-bold text-primary-foreground mb-1">{cat.name}</h3>
                <p className="font-body text-sm text-primary-foreground/70">{cat.desc}</p>
                <span className="inline-block mt-3 text-gold text-sm font-body tracking-wider uppercase border-b border-gold pb-0.5 group-hover:text-gold-light transition-colors">
                  Explore →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
