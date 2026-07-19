import { useLayoutEffect } from "react";

// Rendered as the first child inside the keyed <main>, so its layout effect
// (sibling order) resets scroll before any descendant's visibility checks run.
export default function ScrollToTop() {
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  return null;
}
