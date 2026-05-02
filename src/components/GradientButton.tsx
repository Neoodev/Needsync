import { motion } from "framer-motion";
import type { GradientButtonProps } from "@/types";

/**
 * Reusable CTA button with two variants:
 * - `outline={false}` (default) → solid blue→purple gradient fill
 * - `outline={true}`            → transparent with subtle border
 *
 * Can render as an anchor (`href` prop) or a plain button (`onClick` / `type`).
 *
 * @example
 * <GradientButton href="#contact">Start a Project →</GradientButton>
 * <GradientButton outline onClick={handleSubmit}>Cancel</GradientButton>
 */
export function GradientButton({
  children,
  href,
  onClick,
  outline = false,
  className = "",
  type = "button",
}: GradientButtonProps) {
  const base = `
    font-syne font-bold text-sm px-6 py-3 rounded-xl
    transition-all duration-200 inline-block cursor-pointer
    ${className}
  `;

  const solidCls = `
    ${base}
    grad-bg text-white
    shadow-lg shadow-blue-DEFAULT/30
    hover:shadow-blue-DEFAULT/50
  `;

  const outlineCls = `
    ${base}
    bg-transparent
    border dark:border-white/10 border-navy-900/10
    dark:text-white text-navy-900
    dark:hover:bg-white/5 hover:bg-navy-900/5
  `;

  const motionProps = {
    className: outline ? outlineCls : solidCls,
    whileHover: { y: -2, scale: 1.02 } as const,
    whileTap: { scale: 0.97 } as const,
  };

  if (href) {
    return (
      <a href={href}>
        <motion.span {...motionProps}>{children}</motion.span>
      </a>
    );
  }

  return (
    <motion.button {...motionProps} type={type} onClick={onClick}>
      {children}
    </motion.button>
  );
}
