import { FAQS } from "../constants/data";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { RevealBlock } from "./RevealBlock";
import { SectionTag, SectionTitle } from "./SectionHeading";
import { FaqItemProps } from "@/types";

// ─── FAQ ──────────────────────────────────────────────────────────────────────
function FAQItem({ q, a, index }: FaqItemProps) {
  const [open, setOpen] = useState(false);
  return (
    <RevealBlock delay={index * 0.08}>
      <motion.div
        className={`dark:bg-navy-card bg-white border dark:border-white/5 border-navy-900/5 rounded-2xl overflow-hidden transition-colors duration-200 ${
          open ? "dark:border-blue-DEFAULT/30 border-blue-DEFAULT/20" : ""
        }`}
      >
        <button
          className="w-full text-left px-6 py-5 flex justify-between items-center gap-4"
          onClick={() => setOpen(!open)}
        >
          <span className="font-syne font-bold text-sm dark:text-white text-navy-900">
            {q}
          </span>
          <motion.span
            className="text-blue-light text-xl flex-shrink-0"
            animate={{ rotate: open ? 45 : 0 }}
            transition={{ duration: 0.25 }}
          >
            +
          </motion.span>
        </button>
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="px-6 pb-5 text-sm dark:text-white/50 text-navy-900/55 leading-relaxed">
                {a}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </RevealBlock>
  );
}

function FAQ() {
  return (
    <section id="faq" className="dark:bg-navy-800 bg-gray-50/80">
      <div className="max-w-3xl mx-auto px-5 py-24">
        <div className="text-center mb-10">
          <RevealBlock>
            <SectionTag>FAQ</SectionTag>
          </RevealBlock>
          <RevealBlock delay={0.1}>
            <SectionTitle center>
              Frequently Asked <span className="grad-text">Questions</span>
            </SectionTitle>
          </RevealBlock>
        </div>
        <div className="space-y-3">
          {FAQS.map((f, i) => (
            <FAQItem key={i} {...f} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
