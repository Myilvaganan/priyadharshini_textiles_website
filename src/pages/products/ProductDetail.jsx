import { useParams, Navigate } from "react-router-dom";
import PageHeaderBanner from "../../components/PageHeaderBanner";
import Button from "../../components/Button";
import Card from "../../components/Card";
import Reveal from "../../components/Reveal";
import { useProducts } from "../../hooks/useProducts";

export default function ProductDetail() {
  const { slug } = useParams();
  const products = useProducts();
  const product = products.find((p) => p.slug === slug);

  if (!product) return <Navigate to="/products" replace />;

  const related = products.filter((p) => p.slug !== product.slug).slice(0, 3);

  return (
    <div>
      <PageHeaderBanner
        title={product.name}
        breadcrumbItems={[{ label: "Products", to: "/products" }, { label: product.name }]}
        image={product.image}
      />

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <Reveal>
              <img
                src={product.image}
                alt={product.name}
                className="h-96 w-full rounded-xl object-cover shadow-lg"
              />
              <div className="mt-4 grid grid-cols-3 gap-4">
                {product.gallery.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`${product.name} detail ${i + 1}`}
                    className="h-24 w-full rounded-lg object-cover transition-transform duration-300 ease-out hover:scale-105"
                  />
                ))}
              </div>
            </Reveal>

            <Reveal delay={150}>
              <p className="eyebrow">
                Home &gt; Products &gt; {product.name}
              </p>
              <h2 className="mt-3 font-serif text-3xl font-bold text-brand-dark">
                {product.name}
              </h2>
              <p className="mt-2 text-brand-gold font-semibold">{product.tagline}</p>
              <p className="mt-5 leading-relaxed text-brand-gray">{product.description}</p>

              <div className="mt-8 overflow-hidden rounded-xl border border-brand-dark/10">
                {product.specs.map((spec, i) => (
                  <div
                    key={spec.label}
                    className={`flex justify-between px-5 py-3 text-sm ${
                      i % 2 === 0 ? "bg-brand-offwhite" : "bg-white"
                    }`}
                  >
                    <span className="font-semibold text-brand-dark">{spec.label}</span>
                    <span className="text-right text-brand-gray">{spec.value}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button to="/contact" variant="primary">
                  Request a Quote
                </Button>
                <Button to="/products" variant="secondary-dark">
                  Back to Products
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-brand-offwhite py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <h2 className="font-serif text-2xl font-bold text-brand-dark">Related Products</h2>
          </Reveal>
          <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {related.map((p, i) => (
              <Reveal key={p.slug} delay={i * 100}>
                <Card
                  image={p.image}
                  title={p.name}
                  description={p.tagline}
                  to={`/products/${p.slug}`}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
