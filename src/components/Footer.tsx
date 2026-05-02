// ─── FOOTER ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="dark:bg-navy-800 bg-gray-50 border-t dark:border-white/5 border-navy-900/5 px-6 md:px-10 py-7 flex flex-wrap items-center justify-between gap-4">
      <div className="font-syne font-extrabold text-lg">
        <span className="dark:text-white text-navy-900">NEED</span>
        <span className="grad-text">SYNQ</span>
      </div>
      <p className="text-xs dark:text-white/30 text-navy-900/35">
        © 2026 NeedSynq. All rights reserved. · Philippines
      </p>
      <div className="flex gap-5">
        {["Services", "Work", "About", "Contact"].map((l) => (
          <a
            key={l}
            href={`#${l.toLowerCase()}`}
            className="text-xs dark:text-white/30 text-navy-900/35 dark:hover:text-white/70 hover:text-navy-900/70 transition-colors duration-200"
          >
            {l}
          </a>
        ))}
      </div>
    </footer>
  );
}

export default Footer;
