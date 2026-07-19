import { useCarousel } from "../hooks/useCarousel";
import { IconChevronLeft, IconChevronRight } from "./icons";

export default function Carousel({ slides, intervalMs = 5000 }) {
  const { index, goTo } = useCarousel(slides.length, intervalMs);

  return (
    <div className="relative overflow-hidden rounded-2xl shadow-lg">
      <div
        className="flex transition-transform duration-700 ease-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slides.map((slide, i) => (
          <div key={i} className="relative w-full flex-shrink-0">
            <img
              src={slide.src}
              alt={slide.alt}
              loading={i === 0 ? "eager" : "lazy"}
              className="h-[420px] w-full object-cover sm:h-[480px] lg:h-[560px]"
            />
            {slide.caption && (
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-dark/85 via-brand-dark/20 to-transparent p-6 sm:p-8">
                <p className="max-w-xl font-serif text-xl font-bold text-white sm:text-2xl">
                  {slide.caption}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      <button
        type="button"
        aria-label="Previous slide"
        onClick={() => goTo(index - 1)}
        className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-brand-dark shadow-md transition hover:bg-white"
      >
        <IconChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        aria-label="Next slide"
        onClick={() => goTo(index + 1)}
        className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-brand-dark shadow-md transition hover:bg-white"
      >
        <IconChevronRight className="h-5 w-5" />
      </button>

      <div className="absolute inset-x-0 bottom-4 flex justify-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => goTo(i)}
            className={`h-2.5 rounded-full transition-all ${
              i === index ? "w-6 bg-brand-gold" : "w-2.5 bg-white/60 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
