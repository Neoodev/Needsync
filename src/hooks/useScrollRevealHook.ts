import { useRef } from "react";
import { useInView } from "framer-motion";

/**
 * Returns a [ref, isInView] tuple.
 * Attach `ref` to any DOM element; `isInView` flips true once
 * the element enters the viewport (fires once — `once: true`).
 */
export function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return [ref, isInView] as const;
}
