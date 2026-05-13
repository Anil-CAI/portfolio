"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  label: string;
  title: string;
  kanji?: string;
}

export default function SectionHeader({ label, title, kanji }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-12"
    >
      <div className="font-serif-jp text-[0.68rem] tracking-[0.5em] text-mist uppercase mb-2.5">
        {label}
      </div>
      <h2 className="font-mincho text-3xl md:text-4xl text-sumi leading-tight flex items-end gap-3">
        {title}
        {kanji && <span className="text-sakura-deep text-[1.1em] opacity-60 font-serif-jp leading-none">{kanji}</span>}
      </h2>
    </motion.div>
  );
}
