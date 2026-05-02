import { useTheme } from "../context/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ThemeToggle } from "./ThemeToggle";

// ─── NAVBAR ───────────────────────────────────────────────────────────────────
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { dark } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["Services", "Process", "Projects", "About", "Contact"];

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 transition-all duration-300
      ${
        scrolled
          ? "dark:bg-navy-900/90 bg-white/90 backdrop-blur-xl border-b dark:border-white/5 border-navy-900/5 shadow-xl shadow-black/10"
          : "bg-transparent"
      }`}
        style={{ height: 68 }}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Logo */}
        <a href="#" className="font-syne font-extrabold text-xl tracking-tight">
          <span className="dark:text-white text-navy-900">NEED</span>
          <span className="grad-text">SYNQ</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-7 list-none">
          {links.map((l) => (
            <li key={l}>
              <a
                href={`#${l.toLowerCase()}`}
                className="dark:text-white/50 text-navy-900/50 dark:hover:text-white hover:text-navy-900 text-sm font-medium transition-colors duration-200"
              >
                {l}
              </a>
            </li>
          ))}
        </ul>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <a href="#contact" className="hidden md:block">
            <motion.button
              className="grad-bg text-white font-syne font-bold text-sm px-5 py-2.5 rounded-lg shadow-md shadow-blue-DEFAULT/30"
              whileHover={{ y: -1, scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Start a Project
            </motion.button>
          </a>
          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-1"
            onClick={() => setOpen(!open)}
          >
            <motion.span
              className="block w-6 h-0.5 dark:bg-white bg-navy-900 rounded"
              animate={{ rotate: open ? 45 : 0, y: open ? 7 : 0 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="block w-6 h-0.5 dark:bg-white bg-navy-900 rounded"
              animate={{ opacity: open ? 0 : 1 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="block w-6 h-0.5 dark:bg-white bg-navy-900 rounded"
              animate={{ rotate: open ? -45 : 0, y: open ? -7 : 0 }}
              transition={{ duration: 0.2 }}
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed top-[68px] left-0 right-0 z-40 dark:bg-navy-900/97 bg-white/97 backdrop-blur-xl border-b dark:border-white/5 border-navy-900/5 px-6 py-5 flex flex-col gap-4 md:hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
          >
            {links.map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                className="dark:text-white/80 text-navy-900/80 text-base font-medium py-2 border-b dark:border-white/5 border-navy-900/5"
                onClick={() => setOpen(false)}
              >
                {l}
              </a>
            ))}
            <a
              href="#contact"
              className="grad-bg text-white text-center font-syne font-bold py-3 rounded-lg mt-1"
              onClick={() => setOpen(false)}
            >
              Start a Project
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
