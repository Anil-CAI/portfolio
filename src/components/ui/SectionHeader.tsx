"use client";

import { motion } from "framer-motion";

export default function SectionHeader({ label, title, kanji }: { label: string; title: string; kanji?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-6"
    >
      {/* Chapter label */}
      <div className="text-[0.6rem] tracking-[0.4em] text-akane uppercase mb-1 font-medium" style={{ fontFamily: "var(--font-noto-serif-jp)" }}>
        {label}
      </div>
      {/* Title with gold underline */}
      <h2 className="font-serif-jp text-2xl md:text-3xl text-sumi-light font-bold leading-tight flex items-end gap-3 pb-2 border-b-2 border-kitsune">
        {title}
        {kanji && <span className="text-akane text-[1em] opacity-40 leading-none">{kanji}</span>}
      </h2>
    </motion.div>
  );
}
