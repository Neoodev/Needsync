import { motion } from "framer-motion";
import { RevealBlock } from "./RevealBlock";
import { SectionTag, SectionTitle } from "./SectionHeading";
import { TeamCardProps } from "@/types";

// ─── ABOUT ────────────────────────────────────────────────────────────────────
function TeamCard({ initials, name, role, desc, index }: TeamCardProps) {
  return (
    <RevealBlock delay={index * 0.1}>
      <motion.div
        className="dark:bg-navy-card bg-white border dark:border-white/5 border-navy-900/5 rounded-2xl p-5 cursor-default"
        whileHover={{
          borderColor: "rgba(59,110,248,0.3)",
          y: -3,
          transition: { duration: 0.2 },
        }}
      >
        <div className="w-11 h-11 rounded-full grad-bg flex items-center justify-center font-syne font-extrabold text-sm text-white mb-3">
          {initials}
        </div>
        <div className="font-syne font-bold dark:text-white text-navy-900 text-sm">
          {name}
        </div>
        <div className="text-xs text-blue-light font-medium mb-2">{role}</div>
        <p className="text-xs dark:text-white/40 text-navy-900/45 leading-relaxed">
          {desc}
        </p>
      </motion.div>
    </RevealBlock>
  );
}

function About() {
  const team = [
    {
      initials: "JD",
      name: "John Doe",
      role: "Founder / Lead Dev",
      desc: "Leads development and ensures high-quality system architecture.",
    },
    {
      initials: "JS",
      name: "Jane Smith",
      role: "UI/UX Designer",
      desc: "Designs intuitive, user-friendly interfaces for all projects.",
    },
    {
      initials: "MC",
      name: "Michael Cruz",
      role: "Backend Developer",
      desc: "Handles server-side logic, databases, and system performance.",
    },
    {
      initials: "AR",
      name: "Anna Reyes",
      role: "Project Manager",
      desc: "Ensures projects are delivered on time and aligned with expectations.",
    },
  ];

  return (
    <section id="about" className="dark:bg-navy-900 bg-white">
      <div className="max-w-6xl mx-auto px-5 py-24">
        <RevealBlock>
          <SectionTag>About Us</SectionTag>
        </RevealBlock>
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <RevealBlock delay={0.1}>
              <SectionTitle>
                Technology That <span className="grad-text">Works for You</span>
              </SectionTitle>
              <p className="dark:text-white/50 text-navy-900/55 text-sm leading-relaxed mb-4">
                NeedSynq is a technology solutions company focused on helping
                businesses transform their ideas into efficient digital systems.
                We specialize in custom software aligned perfectly with our
                clients' needs.
              </p>
              <p className="dark:text-white/50 text-navy-900/55 text-sm leading-relaxed mb-6">
                We're a startup-friendly team with a passion for clean code,
                thoughtful design, and measurable outcomes.
              </p>
            </RevealBlock>
            <RevealBlock delay={0.2}>
              <div className="space-y-3">
                {[
                  {
                    label: "Our Mission",
                    color: "border-blue-DEFAULT",
                    text: "To empower businesses through innovative and reliable technology solutions.",
                  },
                  {
                    label: "Our Vision",
                    color: "border-purple-DEFAULT",
                    text: "To become a trusted partner for businesses seeking digital transformation.",
                  },
                ].map((mv) => (
                  <div
                    key={mv.label}
                    className={`dark:bg-navy-card bg-gray-50 border dark:border-white/5 border-navy-900/5 border-l-2 ${mv.color} rounded-xl px-5 py-4`}
                  >
                    <div className="text-xs font-bold uppercase tracking-widest text-blue-light mb-1">
                      {mv.label}
                    </div>
                    <p className="text-sm dark:text-white/55 text-navy-900/60 leading-relaxed">
                      {mv.text}
                    </p>
                  </div>
                ))}
              </div>
            </RevealBlock>
          </div>
          <div>
            <RevealBlock delay={0.15}>
              <p className="text-xs font-bold uppercase tracking-widest dark:text-white/30 text-navy-900/35 mb-4">
                Our Team
              </p>
            </RevealBlock>
            <div className="grid grid-cols-2 gap-3">
              {team.map((t, i) => (
                <TeamCard key={i} {...t} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
