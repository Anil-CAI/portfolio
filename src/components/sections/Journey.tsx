"use client";

import { motion } from "framer-motion";
import SectionHeader from "../ui/SectionHeader";

const timelineData = [
  {
    period: "2023 - Present",
    role: "Robotics Lab Contributor",
    org: "KIET Robotics Lab",
    description: "Contributed to robotics-based development and experimentation. Assisted in developing robotics-related projects and helped create a robotics lab web platform. Supported development of AI assistant-related systems and worked on robotics software integration.",
    bullets: [
      "Contributed to robotics-based development and experimentation",
      "Assisted in developing robotics-related projects",
      "Helped create a robotics lab web platform",
      "Supported development of AI assistant-related systems",
      "Worked on robotics software integration and technical implementation"
    ]
  },
  {
    period: "Expected 2027",
    role: "B.Tech in Computer Science Engineering",
    org: "KIET (JNTUK)",
    description: "Specializing in Artificial Intelligence. Active participant in technical clubs and research initiatives.",
    type: "education",
    bullets: [
      "CGPA: 7.8",
      "AI Specialization",
      "Member of Technical Board"
    ]
  }
];

export default function Journey() {
  return (
    <section id="journey" className="textbook-page relative overflow-hidden bg-washi">
      {/* Chapter tab */}
      <div className="bg-washi-dark border-b-2 border-kitsune/30 px-6 md:px-8 py-2 flex items-center gap-3">
        <div className="chapter-stamp text-sm w-[32px] h-[32px]">4</div>
        <span className="text-[0.7rem] tracking-[0.3em] text-akane uppercase font-bold" style={{ fontFamily: "var(--font-noto-serif-jp)" }}>
          第四章 · Journey — 経験
        </span>
        <span className="flex-1" />
        <span className="text-[0.65rem] text-mist tracking-wider hidden md:inline" style={{ fontFamily: "var(--font-jetbrains)" }}>pg. 4</span>
      </div>

      <div className="ruled-lines margin-line-left book-spine-shadow px-6 md:px-10 lg:px-14 py-8 md:py-10">
        <SectionHeader label="第四章 · Chapter 4" title="Experience — 経験" kanji="歴" />

        <div className="max-w-3xl mx-auto md:ml-12 relative">
          {timelineData.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="mb-8"
            >
              {item.type === "education" ? (
                // Education Card (from reference HTML)
                <div className="bg-washi-light border border-kitsune-pale rounded p-5 relative overflow-hidden">
                  {/* Background Kanji */}
                  <div className="absolute right-4 bottom-2 text-akane opacity-5 text-6xl pointer-events-none font-serif-jp" style={{ fontFamily: "var(--font-noto-serif-jp)" }}>
                    学
                  </div>
                  
                  <div className="text-[0.6rem] text-akane tracking-[0.2em] uppercase font-medium mb-1">学歴 · Education</div>
                  <h3 className="font-serif-jp text-lg font-bold text-sumi-light mb-1">{item.org}</h3>
                  <div className="text-sm text-mist mb-3 font-medium">{item.role}</div>
                  
                  <div className="flex flex-wrap gap-2 mt-2">
                    <span className="inline-block px-2.5 py-1 border-[1.5px] border-akane rounded text-[0.65rem] text-akane tracking-wider font-medium">Expected: 2027</span>
                    <span className="inline-block px-2.5 py-1 border-[1.5px] border-akane rounded text-[0.65rem] text-akane tracking-wider font-medium">CGPA: 7.8</span>
                    <span className="inline-block px-2.5 py-1 border-[1.5px] border-akane rounded text-[0.65rem] text-akane tracking-wider font-medium">AI Specialization</span>
                  </div>
                </div>
              ) : (
                // Experience Entry (from reference HTML)
                <div className="bg-washi-light border border-kitsune-pale rounded p-5">
                  <h3 className="font-serif-jp text-lg font-bold text-sumi-light mb-1">{item.role}</h3>
                  <div className="text-[0.65rem] text-akane tracking-wider uppercase font-medium mb-3">
                    {item.org} &nbsp;·&nbsp; {item.period}
                  </div>
                  
                  <ul className="list-none p-0 m-0 space-y-1.5">
                    {item.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="text-sumi-faded text-[0.82rem] leading-relaxed relative pl-4">
                        <span className="absolute left-0 top-[3px] text-kitsune text-[0.55rem]">◆</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Page footer */}
      <div className="bg-washi-dark border-t-2 border-kitsune/40 px-6 md:px-8 py-2 flex justify-between items-center">
        <span className="text-[0.65rem] text-mist tracking-wider" style={{ fontFamily: "var(--font-noto-serif-jp)" }}>ページ 5 / 5</span>
        <span className="text-[0.65rem] text-mist tracking-widest opacity-50">経験 · ACADEMIC TIMELINE</span>
      </div>
    </section>
  );
}
