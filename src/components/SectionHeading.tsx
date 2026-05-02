import type { SectionTagProps, SectionTitleProps } from "@/types";

/**
 * Small labelled pill above section headings.
 * e.g. "What We Do", "Case Studies"
 */
export function SectionTag({ children }: SectionTagProps) {
  return (
    <span
      className="
      inline-block text-xs font-semibold tracking-widest uppercase
      text-blue-light
      bg-blue-DEFAULT/10
      border border-blue-DEFAULT/20
      px-3 py-1 rounded-full mb-3
    "
    >
      {children}
    </span>
  );
}

/**
 * Large section heading.
 * Pass JSX children so gradient words can be nested inside.
 *
 * @example
 * <SectionTitle>
 *   Services Built <span className="grad-text">Around Your Needs</span>
 * </SectionTitle>
 */
export function SectionTitle({ children, center = false }: SectionTitleProps) {
  return (
    <h2
      className={`
        font-syne font-extrabold tracking-tight leading-tight
        text-3xl md:text-4xl lg:text-5xl mb-4
        dark:text-white text-navy-900
        ${center ? "text-center" : ""}
      `}
    >
      {children}
    </h2>
  );
}
