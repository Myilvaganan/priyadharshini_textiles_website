import { useScrollProgress } from "../hooks/useScrollProgress";

export default function ScrollProgressBar() {
  const progress = useScrollProgress();

  return (
    <div className="h-1 w-full bg-black/20">
      <div
        className="h-full bg-brand-gold"
        style={{
          width: `${progress * 100}%`,
          transition: "width 100ms linear",
        }}
      />
    </div>
  );
}
