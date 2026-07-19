import { useInView } from "../hooks/useInView";

export default function Reveal({ children, delay = 0, y = 24, className = "" }) {
  const [ref, inView, immediate] = useInView();

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transitionProperty: immediate ? "none" : "opacity, transform",
        transitionDuration: immediate ? "0ms" : "700ms",
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
        transitionDelay: immediate ? "0ms" : `${delay}ms`,
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : `translateY(${y}px)`,
        willChange: immediate ? undefined : "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}
