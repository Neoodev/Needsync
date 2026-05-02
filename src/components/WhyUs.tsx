import { motion } from "framer-motion";
import { RevealBlock } from "./RevealBlock";
import { SectionTag, SectionTitle } from "./SectionHeading";
import { WHY_ITEMS } from "../constants/data/index";

// ─── WHY US ───────────────────────────────────────────────────────────────────
function WhyUs() {
  return (
    <section id="why" className="dark:bg-navy-900 bg-white">
      <div className="max-w-6xl mx-auto px-5 py-24">
        <RevealBlock>
          <SectionTag>Why NeedSynq</SectionTag>
        </RevealBlock>
        <RevealBlock delay={0.1}>
          <SectionTitle>
            Built Different, <span className="grad-text">Delivered Better</span>
          </SectionTitle>
        </RevealBlock>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
          {WHY_ITEMS.map((w, i) => (
            <RevealBlock key={i} delay={i * 0.08}>
              <motion.div
                className="dark:bg-navy-card bg-gray-50 border dark:border-white/5 border-navy-900/5 rounded-2xl p-5 flex gap-4 items-start cursor-default"
                whileHover={{
                  borderColor: "rgba(59,110,248,0.3)",
                  y: -3,
                  transition: { duration: 0.2 },
                }}
              >
                <div className="w-8 h-8 rounded-lg bg-emerald-400/10 border border-emerald-400/20 flex items-center justify-center text-emerald-400 text-sm flex-shrink-0 mt-0.5">
                  ✓
                </div>
                <p className="text-sm dark:text-white/75 text-navy-900/70 leading-relaxed">
                  {w}
                </p>
              </motion.div>
            </RevealBlock>
          ))}
        </div>
      </div>
    </section>
  );
}
export default WhyUs;
