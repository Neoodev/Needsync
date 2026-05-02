import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";

/**
 * Animated pill toggle for dark / light mode.
 * Reads and writes theme state via `useTheme()`.
 */
export function ThemeToggle() {
  const { dark, toggle } = useTheme();

  return (
    <motion.button
      onClick={toggle}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      title={dark ? "Switch to light mode" : "Switch to dark mode"}
      className="
        relative w-12 h-6 rounded-full flex items-center
        border dark:border-white/10 border-navy-900/15
        dark:bg-navy-card bg-gray-100
        transition-colors duration-300
        focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-DEFAULT
      "
      whileTap={{ scale: 0.95 }}
    >
      {/* Sliding thumb */}
      <motion.div
        className="
          absolute w-4 h-4 rounded-full grad-bg shadow-md
          flex items-center justify-center text-white text-[9px]
        "
        animate={{ x: dark ? 26 : 4 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      >
        {dark ? "🌙" : "☀️"}
      </motion.div>
    </motion.button>
  );
}
