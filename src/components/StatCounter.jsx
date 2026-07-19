import { useEffect, useRef, useState } from "react";

export default function StatCounter({ value, suffix = "", label, dark = true }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const target = Number(value) || 0;

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        const duration = 1200;
        const start = performance.now();

        const tick = (now) => {
          const progress = Math.min((now - start) / duration, 1);
          setCount(Math.round(target * (1 - Math.pow(1 - progress, 3))));
          if (progress < 1) requestAnimationFrame(tick);
        };

        requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="text-center">
      <div
        className={`font-serif text-4xl font-bold sm:text-5xl ${
          dark ? "text-brand-gold" : "text-brand-dark"
        }`}
      >
        {count}
        {suffix}
      </div>
      <p
        className={`mt-2 text-sm font-medium uppercase tracking-wide ${
          dark ? "text-white/80" : "text-brand-gray"
        }`}
      >
        {label}
      </p>
    </div>
  );
}
