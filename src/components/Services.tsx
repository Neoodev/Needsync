import { SERVICES } from "../constants/data/index";
import { useScrollReveal } from "../hooks/useScrollRevealHook";
import { fadeUp, staggerContainer } from "../variants/variant";
import { motion } from "framer-motion";
import { GradientButton } from "./GradientButton";
import { RevealBlock } from "./RevealBlock";
import { SectionTag, SectionTitle } from "./SectionHeading";
import { ServiceCardProps } from "@/types";

// ─── SERVICES ─────────────────────────────────────────────────────────────────
function ServiceCard({ icon, title, desc, index }: ServiceCardProps) {
  return (
    <motion.div
      variants={fadeUp}
      transition={{
        duration: 0.55,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      className="dark:bg-navy-card bg-white border dark:border-white/5 border-navy-900/5 rounded-2xl p-7 group cursor-default relative overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background:
            "linear-gradient(135deg, rgba(59,110,248,0.04), rgba(123,63,242,0.04))",
        }}
      />
      <motion.div className="absolute top-0 left-0 right-0 h-px grad-bg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="w-12 h-12 rounded-xl dark:bg-blue-DEFAULT/10 bg-blue-DEFAULT/5 border dark:border-blue-DEFAULT/20 border-blue-DEFAULT/10 flex items-center justify-center text-xl mb-5">
        {icon}
      </div>
      <h3 className="font-syne font-bold text-base dark:text-white text-navy-900 mb-2">
        {title}
      </h3>
      <p className="text-sm dark:text-white/45 text-navy-900/50 leading-relaxed">
        {desc}
      </p>
    </motion.div>
  );
}

function Services() {
  const [ref, inView] = useScrollReveal();
  return (
    <section id="services" className="dark:bg-navy-800 bg-gray-50/80">
      <div className="max-w-6xl mx-auto px-5 py-24">
        <RevealBlock>
          <SectionTag>What We Do</SectionTag>
        </RevealBlock>
        <RevealBlock delay={0.1}>
          <SectionTitle>
            Services Built <span className="grad-text">Around Your Needs</span>
          </SectionTitle>
          <p className="dark:text-white/45 text-navy-900/50 text-base max-w-lg leading-relaxed mb-12">
            From custom systems to mobile apps, we turn your ideas into powerful
            digital solutions.
          </p>
        </RevealBlock>
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {SERVICES.map((s, i) => (
            <ServiceCard key={i} {...s} index={i} />
          ))}
          {/* CTA card */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.55, delay: 0.5 }}
            className="rounded-2xl p-px grad-bg sm:col-span-2 lg:col-span-1"
          >
            <div className="dark:bg-navy-card bg-white rounded-[15px] p-7 h-full flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl grad-bg flex items-center justify-center text-xl mb-5">
                  🚀
                </div>
                <h3 className="font-syne font-bold text-base dark:text-white text-navy-900 mb-2">
                  Ready to start?
                </h3>
                <p className="text-sm dark:text-white/45 text-navy-900/50 leading-relaxed">
                  Every great solution starts with a conversation. Let's talk
                  about what you need.
                </p>
              </div>
              <div className="mt-6">
                <GradientButton href="#contact" className="w-full text-center">
                  Get in Touch →
                </GradientButton>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
export default Services;
