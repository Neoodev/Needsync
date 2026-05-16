import { motion } from "framer-motion";
import { RevealBlock } from "./RevealBlock";
import { SectionTag, SectionTitle } from "./SectionHeading";
import { TeamCardProps } from "@/types";
import React from "react";

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
        <div className="grid md:grid-cols-1 gap-16 items-center">
          <div>
            <RevealBlock delay={0.1}>
              <SectionTitle>
                Technology That <span className="grad-text">Synqs for You</span>
              </SectionTitle>
              <p className="dark:text-white/50 text-navy-900/55 text-sm leading-relaxed mb-4 text-center">
                NeedSynq is a modern technology solutions company focused on
                delivering digital services tailored to client needs. The
                company specializes in creating efficient, innovative, and
                user-centered solutions for businesses, organizations, and
                individuals.
              </p>
              <p className="dark:text-white/50 text-navy-900/55 text-sm leading-relaxed mb-6 text-center">
                The name NeedSynq represents the synchronization of client needs
                with smart technology solutions — ensuring every project is
                aligned with quality, functionality, and innovation.
              </p>
            </RevealBlock>
            <RevealBlock delay={0.2}>
              <div className="grid md:grid-cols-2 gap-4 ">
                {[
                  {
                    label: "Our Vision",
                    color: "border-purple-DEFAULT",
                    text: "To empower businesses through innovative and reliable technology solutions.",
                  },
                  {
                    label: "Our Mission",
                    color: "border-blue-DEFAULT",
                    text: "",
                  },
                  {
                    label: "Our Core Values",
                    color: "border-blue-DEFAULT",
                    text: "",
                  },
                ].map((mv) => (
                  <div
                    key={mv.label}
                    className={`dark:bg-navy-card bg-gray-50 border dark:border-white/5 border-navy-900/5 border-l-2 ${mv.color} rounded-xl px-5 py-4`}
                  >
                    <div className="text-xs font-bold uppercase tracking-widest text-blue-light">
                      {mv.label}
                    </div>
                    {mv.label === "Our Mission" ? (
                      <React.Fragment>
                        <li className="text-sm dark:text-white/55 text-navy-900/60 leading-relaxed">
                          To provide high-quality and client-focused technology
                          services.
                        </li>
                        <li className="text-sm dark:text-white/55 text-navy-900/60 leading-relaxed">
                          To transform ideas into functional and impactful
                          digital solutions.
                        </li>
                        <li className="text-sm dark:text-white/55 text-navy-900/60 leading-relaxed">
                          To build long-term partnerships through innovation,
                          trust, and efficiency.
                        </li>
                        <li className="text-sm dark:text-white/55 text-navy-900/60 leading-relaxed">
                          To continuously adapt to modern technologies and
                          industry trends.
                        </li>
                      </React.Fragment>
                    ) : mv.label === "Our Core Values" ? (
                      <React.Fragment>
                        <b className="text-md dark:text-white/55 text-navy-900/60 leading-relaxed">
                          Innovation
                        </b>
                        <li className="text-sm dark:text-white/55 text-navy-900/60 leading-relaxed">
                          Creating modern and effective solutions for evolving
                          needs.
                        </li>
                        <b className="text-md dark:text-white/55 text-navy-900/60 leading-relaxed">
                          Reliability
                        </b>
                        <li className="text-sm dark:text-white/55 text-navy-900/60 leading-relaxed">
                          Delivering dependable services with consistent
                          quality.
                        </li>
                        <b className="text-md dark:text-white/55 text-navy-900/60 leading-relaxed">
                          Collaboration
                        </b>
                        <li className="text-sm dark:text-white/55 text-navy-900/60 leading-relaxed">
                          Working closely with clients and team members for
                          successful outcomes.
                        </li>
                        <b className="text-md dark:text-white/55 text-navy-900/60 leading-relaxed">
                          Efficiency
                        </b>
                        <li className="text-sm dark:text-white/55 text-navy-900/60 leading-relaxed">
                          Optimizing workflows and systems for better
                          productivity.
                        </li>
                        <b className="text-md dark:text-white/55 text-navy-900/60 leading-relaxed">
                          Integrity
                        </b>
                        <li className="text-sm dark:text-white/55 text-navy-900/60 leading-relaxed">
                          Maintaining professionalism, honesty, and
                          accountability.
                        </li>
                      </React.Fragment>
                    ) : (
                      <p className="text-sm dark:text-white/55 text-navy-900/60 leading-relaxed">
                        {mv.text}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </RevealBlock>
          </div>
          {/* <div>
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
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default About;
