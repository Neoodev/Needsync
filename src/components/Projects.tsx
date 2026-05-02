import { PROJECTS } from "../constants/data/index";
import { motion } from "framer-motion";
import { RevealBlock } from "./RevealBlock";
import { SectionTag, SectionTitle } from "./SectionHeading";
import { ProjectCardProps } from "@/types";

// ─── PROJECTS ─────────────────────────────────────────────────────────────────
function ProjectCard({
  tag,
  title,
  client,
  problem,
  solution,
  result,
  index,
}: ProjectCardProps) {
  return (
    <RevealBlock delay={index * 0.1}>
      <motion.div
        className="dark:bg-navy-card bg-white border dark:border-white/5 border-navy-900/5 rounded-2xl p-7 flex flex-col h-full cursor-default"
        whileHover={{
          y: -6,
          borderColor: "rgba(123,63,242,0.3)",
          transition: { duration: 0.25 },
        }}
      >
        <span className="inline-block text-xs font-bold tracking-widest uppercase text-purple-light bg-purple-DEFAULT/10 border border-purple-DEFAULT/20 px-3 py-1 rounded-full mb-4 w-fit">
          {tag}
        </span>
        <h3 className="font-syne font-bold text-lg dark:text-white text-navy-900 mb-5">
          {title}
        </h3>
        {[
          ["Client", client],
          ["Problem", problem],
          ["Solution", solution],
        ].map(([k, v]) => (
          <div key={k} className="flex gap-3 mb-2 text-sm">
            <span className="dark:text-white/35 text-navy-900/40 font-medium min-w-[72px]">
              {k}
            </span>
            <span className="dark:text-white/70 text-navy-900/70">{v}</span>
          </div>
        ))}
        <div className="mt-5 pt-5 border-t dark:border-white/5 border-navy-900/5 text-sm text-emerald-400 font-medium flex gap-2 items-start">
          <span className="text-base leading-none mt-0.5">↑</span>
          {result}
        </div>
      </motion.div>
    </RevealBlock>
  );
}

function Projects() {
  return (
    <section id="projects" className="dark:bg-navy-800 bg-gray-50/80">
      <div className="max-w-6xl mx-auto px-5 py-24">
        <RevealBlock>
          <SectionTag>Case Studies</SectionTag>
        </RevealBlock>
        <RevealBlock delay={0.1}>
          <SectionTitle>
            Work That <span className="grad-text">Delivers Results</span>
          </SectionTitle>
          <p className="dark:text-white/45 text-navy-900/50 text-base max-w-lg leading-relaxed mb-12">
            Real solutions built for real businesses, with measurable outcomes.
          </p>
        </RevealBlock>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={i} {...p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
export default Projects;
