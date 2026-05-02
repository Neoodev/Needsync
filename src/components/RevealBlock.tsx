import { motion } from "framer-motion";
import type { RevealBlockProps } from "@/types";
import { useScrollReveal } from "../hooks/useScrollRevealHook";
import { fadeUp, EASE_OUT_EXPO } from "../variants/variant";

/**
 * Wraps children in a scroll-triggered fade-up animation.
 * Uses `useScrollReveal` internally so the parent doesn't need to wire refs.
 *
 * @example
 * <RevealBlock delay={0.1}>
 *   <h2>Hello</h2>
 * </RevealBlock>
 */
export function RevealBlock({
  children,
  delay = 0,
  className = "",
}: RevealBlockProps) {
  const [ref, inView] = useScrollReveal();

  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ duration: 0.65, delay, ease: EASE_OUT_EXPO }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
