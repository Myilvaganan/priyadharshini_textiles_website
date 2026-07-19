import Button from "../components/Button";
import Card from "../components/Card";
import Carousel from "../components/Carousel";
import HeroCarousel from "../components/HeroCarousel";
import Reveal from "../components/Reveal";
import StatCounter from "../components/StatCounter";
import IconFeature from "../components/IconFeature";
import { images } from "../data/images";
import { homeCarouselSlides } from "../data/carousel";
import { heroSlides as heroSlideImages } from "../data/heroSlides";
import { useContent } from "../context/ContentContext";
import { useProducts } from "../hooks/useProducts";
import {
  IconSpindle,
  IconFactory,
  IconShieldCheck,
  IconTruck,
  IconLeaf,
  IconAward,
} from "../components/icons";

const whyChooseUsIcons = [IconFactory, IconShieldCheck, IconTruck, IconSpindle, IconLeaf, IconAward];

export default function Home() {
  const { content } = useContent();
  const { home } = content;
  const products = useProducts();

  const heroSlides = heroSlideImages.map((slide, i) => ({
    ...slide,
    ...(home.hero.slides[i] || {}),
  }));

  return (
    <div>
      {/* Hero */}
      <HeroCarousel slides={heroSlides} />

      {/* Stats */}
      <section className="bg-brand-dark py-14">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 sm:grid-cols-4">
          {home.stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 100}>
              <StatCounter value={s.value} suffix={s.suffix} label={s.label} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* About teaser */}
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow">Home &gt; About Us</p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-brand-dark sm:text-4xl">
              {home.aboutTeaser.heading}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-brand-gray">
              {home.aboutTeaser.body}
            </p>
            <div className="mt-8">
              <Button to="/about/our-story" variant="secondary-dark">
                Our Story
              </Button>
            </div>
          </Reveal>
          <Reveal delay={150} className="grid grid-cols-2 gap-4">
            <img
              src={images.weaverLoomHands}
              alt="Weaver working on a loom"
              className="h-64 w-full rounded-xl object-cover shadow-md"
            />
            <img
              src={images.threadSpoolsWall}
              alt="Thread spools"
              className="mt-8 h-64 w-full rounded-xl object-cover shadow-md"
            />
          </Reveal>
        </div>
      </section>

      {/* Products */}
      <section className="bg-brand-offwhite py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="text-center">
            <p className="eyebrow">Home &gt; Products</p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-brand-dark sm:text-4xl">
              {home.productsIntro.heading}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-brand-gray">
              {home.productsIntro.body}
            </p>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
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

      {/* Why choose us */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="text-center">
            <p className="eyebrow">Why Priyadharshini</p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-brand-dark sm:text-4xl">
              {home.whyChooseUs.heading}
            </h2>
          </Reveal>
          <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {home.whyChooseUs.features.map((f, i) => {
              const Icon = whyChooseUsIcons[i % whyChooseUsIcons.length];
              return (
                <Reveal key={f.title} delay={(i % 3) * 100}>
                  <IconFeature icon={<Icon className="h-6 w-6" />} title={f.title} description={f.description} />
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Facility carousel */}
      <section className="bg-brand-offwhite py-20">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="text-center">
            <p className="eyebrow">Home &gt; Gallery</p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-brand-dark sm:text-4xl">
              {home.facilityIntro.heading}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-brand-gray">
              {home.facilityIntro.body}
            </p>
          </Reveal>
          <Reveal delay={150} className="mt-12">
            <Carousel slides={homeCarouselSlides} />
          </Reveal>
          <Reveal delay={250} className="mt-8 text-center">
            <Button to="/gallery" variant="secondary-dark">
              View Full Gallery
            </Button>
          </Reveal>
        </div>
      </section>

      {/* Infrastructure teaser */}
      <section
        className="relative bg-brand-dark bg-cover bg-center py-24"
        style={{
          backgroundImage: `linear-gradient(100deg, rgba(27,58,46,0.93), rgba(27,58,46,0.8)), url(${images.warehouseSteel})`,
        }}
      >
        <Reveal className="mx-auto max-w-7xl px-6 text-white">
          <p className="eyebrow">Home &gt; Infrastructure</p>
          <h2 className="mt-3 max-w-xl font-serif text-3xl font-bold sm:text-4xl">
            {home.infrastructureTeaser.heading}
          </h2>
          <p className="mt-5 max-w-xl text-white/80">{home.infrastructureTeaser.body}</p>
          <div className="mt-8">
            <Button to="/infrastructure" variant="secondary">
              View Infrastructure
            </Button>
          </div>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="bg-brand-green py-16">
        <Reveal className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 text-center sm:flex-row sm:text-left">
          <div>
            <h2 className="font-serif text-2xl font-bold text-white sm:text-3xl">
              {home.cta.heading}
            </h2>
            <p className="mt-2 text-white/80">{home.cta.body}</p>
          </div>
          <Button to="/contact" variant="primary">
            Send an Enquiry
          </Button>
        </Reveal>
      </section>
    </div>
  );
}
