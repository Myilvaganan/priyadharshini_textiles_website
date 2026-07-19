import { useEffect, useState } from "react";

export function useCarousel(length, intervalMs = 5000) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (length < 2) return;
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % length);
    }, intervalMs);
    return () => clearInterval(timer);
  }, [length, intervalMs]);

  const goTo = (i) => setIndex((i + length) % length);

  return { index, goTo };
}
