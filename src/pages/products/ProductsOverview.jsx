import PageHeaderBanner from "../../components/PageHeaderBanner";
import Card from "../../components/Card";
import Reveal from "../../components/Reveal";
import { images } from "../../data/images";
import { useProducts } from "../../hooks/useProducts";

export default function ProductsOverview() {
  const products = useProducts();

  return (
    <div>
      <PageHeaderBanner
        title="Products"
        breadcrumbItems={[{ label: "Products" }]}
        image={images.threadSpoolsWall}
      />

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="text-center">
            <p className="eyebrow">Home &gt; Products</p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-brand-dark sm:text-4xl">
              Our Product Range
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-brand-gray">
              An integrated production chain covering yarn, woven fabric, dyed & printed
              fabric, home textiles and technical textiles — engineered to buyer
              specification and delivered at scale.
            </p>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 100}>
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
