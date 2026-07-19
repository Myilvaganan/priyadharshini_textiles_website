import { useLayoutEffect, useRef, useState } from "react";

export function useInView() {
  const ref = useRef(null);
  // `immediate` means: already visible at mount, so Reveal should skip the
  // transition entirely rather than animate from a forced-reflow opacity:0.
  const [state, setState] = useState({ inView: false, immediate: false });

  useLayoutEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setState({ inView: true, immediate: true });
      return;
    }

    const rect = node.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setState({ inView: true, immediate: true });
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setState({ inView: true, immediate: false });
        observer.disconnect();
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return [ref, state.inView, state.immediate];
}
