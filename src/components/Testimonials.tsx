import { TESTIMONIALS } from "../constants/data";
import { motion } from "framer-motion";
import { RevealBlock } from "./RevealBlock";
import { SectionTag, SectionTitle } from "./SectionHeading";

// ─── TESTIMONIALS ─────────────────────────────────────────────────────────────
function Testimonials() {
  return (
    <section id="testimonials" className="dark:bg-navy-800 bg-gray-50/80">
      <div className="max-w-6xl mx-auto px-5 py-24">
        <RevealBlock>
          <SectionTag>Testimonials</SectionTag>
        </RevealBlock>
        <RevealBlock delay={0.1}>
          <SectionTitle>
            What Our <span className="grad-text">Clients Say</span>
          </SectionTitle>
        </RevealBlock>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
          {TESTIMONIALS.map((t, i) => (
            <RevealBlock key={i} delay={i * 0.1}>
              <motion.div
                className="dark:bg-navy-card bg-white border dark:border-white/5 border-navy-900/5 rounded-2xl p-7 cursor-default"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="text-yellow-400 tracking-widest mb-4 text-sm">
                  ★★★★★
                </div>
                <blockquote className="text-sm dark:text-white/75 text-navy-900/70 leading-relaxed italic mb-6">
                  "{t.quote}"
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full border dark:border-white/10 border-navy-900/10 flex items-center justify-center text-base">
                    👤
                  </div>
                  <div>
                    <div className="font-syne font-bold text-sm dark:text-white text-navy-900">
                      {t.name}
                    </div>
                    <div className="text-xs dark:text-white/35 text-navy-900/40">
                      {t.role}
                    </div>
                  </div>
                </div>
              </motion.div>
            </RevealBlock>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Testimonials;
