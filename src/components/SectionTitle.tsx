import { SectionTitleProps } from "@/types";

// SectionTitle
function SectionTitle({ children, center = false }: SectionTitleProps) {
  return (
    <h2
      className={`font-syne text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-4 dark:text-white text-navy-900 ${
        center ? "text-center" : ""
      }`}
    >
      {children}
    </h2>
  );
}

export default SectionTitle;
