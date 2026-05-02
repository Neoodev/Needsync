import { motion } from "framer-motion";
import { RevealBlock } from "./RevealBlock";
import { SectionTag, SectionTitle } from "./SectionHeading";
import { PROCESS_STEPS } from "../constants/data/index";

// ─── PROCESS ──────────────────────────────────────────────────────────────────
function Process() {
  return (
    <section id="process" className="dark:bg-navy-900 bg-white">
      <div className="max-w-6xl mx-auto px-5 py-24">
        <RevealBlock>
          <SectionTag>How We Work</SectionTag>
        </RevealBlock>
        <RevealBlock delay={0.1}>
          <SectionTitle>
            A Clear Path <span className="grad-text">From Idea to Launch</span>
          </SectionTitle>
          <p className="dark:text-white/45 text-navy-900/50 text-base max-w-lg leading-relaxed mb-12">
            Our proven process ensures every project is delivered on time and
            beyond expectations.
          </p>
        </RevealBlock>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {PROCESS_STEPS.map((p, i) => (
            <RevealBlock key={i} delay={i * 0.07}>
              <motion.div
                className="dark:bg-navy-card bg-gray-50 border dark:border-white/5 border-navy-900/5 rounded-2xl p-7 relative overflow-hidden group cursor-default"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <motion.div className="absolute top-0 left-0 right-0 h-0.5 grad-bg transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-400" />
                <div className="font-syne font-extrabold text-4xl grad-text opacity-30 mb-3 leading-none">
                  {p.num}
                </div>
                <h3 className="font-syne font-bold dark:text-white text-navy-900 mb-2">
                  {p.title}
                </h3>
                <p className="text-sm dark:text-white/45 text-navy-900/50 leading-relaxed">
                  {p.desc}
                </p>
              </motion.div>
            </RevealBlock>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Process;
