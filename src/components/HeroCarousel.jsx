import { useCarousel } from "../hooks/useCarousel";
import Button from "./Button";
import { IconChevronLeft, IconChevronRight } from "./icons";

export default function HeroCarousel({ slides, intervalMs = 6000 }) {
  const { index, goTo } = useCarousel(slides.length, intervalMs);
  const active = slides[index];

  return (
    <section className="relative flex min-h-[620px] items-center overflow-hidden bg-brand-dark">
      {slides.map((slide, i) => (
        <div
          key={i}
          aria-hidden={i !== index}
          className={`absolute inset-0 bg-brand-dark bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `linear-gradient(110deg, rgba(27,58,46,0.94) 25%, rgba(27,58,46,0)), url(${slide.image})`,
          }}
        />
      ))}

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24">
        <p className="eyebrow">{active.eyebrow}</p>
        <h1 className="mt-4 max-w-2xl font-serif text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
          {active.heading}
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80">{active.quote}</p>
        <div className="mt-9 flex flex-wrap gap-4">
          <Button to="/products" variant="primary">
            Explore Products
          </Button>
          <Button to="/contact" variant="secondary">
            Get in Touch
          </Button>
        </div>
      </div>

      <button
        type="button"
        aria-label="Previous slide"
        onClick={() => goTo(index - 1)}
        className="absolute left-4 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition hover:bg-white/25 sm:left-6"
      >
        <IconChevronLeft className="h-6 w-6" />
      </button>
      <button
        type="button"
        aria-label="Next slide"
        onClick={() => goTo(index + 1)}
        className="absolute right-4 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition hover:bg-white/25 sm:right-6"
      >
        <IconChevronRight className="h-6 w-6" />
      </button>

      <div className="absolute inset-x-0 bottom-8 z-10 flex justify-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => goTo(i)}
            className={`h-2.5 rounded-full transition-all ${
              i === index ? "w-6 bg-brand-gold" : "w-2.5 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
