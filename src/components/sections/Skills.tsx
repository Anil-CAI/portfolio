"use client";

import { motion } from "framer-motion";
import SectionHeader from "../ui/SectionHeader";
import { Code2, Gamepad2, Cpu, Globe, BrainCircuit, Hammer } from "lucide-react";

const skillCategories = [
  { title: "Robotics & Hardware", icon: <Cpu size={20} />, desc: "Building physical intelligence and autonomous systems.", tags: ["ROS2", "Gazebo", "Simulation"], kanji: "器" },
  { title: "Game Engine & 3D", icon: <Gamepad2 size={20} />, desc: "Creating immersive worlds and real-time visualizations.", tags: ["Unreal Engine 5", "C++", "Blender", "3D Modeling"], kanji: "画" },
  { title: "AI & Intelligence", icon: <BrainCircuit size={20} />, desc: "Implementing machine learning and computer vision.", tags: ["Computer Vision", "Automation", "Prompt Eng", "Python"], kanji: "智" },
  { title: "Software Engineering", icon: <Code2 size={20} />, desc: "Architecting clean, scalable, and performant codebases.", tags: ["C++", "Python", "System Design", "Git"], kanji: "工" },
  { title: "Web Technologies", icon: <Globe size={20} />, desc: "Developing modern, responsive, and interactive interfaces.", tags: ["Next.js", "React", "FastAPI", "Tailwind", "REST APIs"], kanji: "網" },
  { title: "Tools & Workflow", icon: <Hammer size={20} />, desc: "Optimizing development with modern industry tools.", tags: ["Docker", "Linux", "VS Code", "Figma"], kanji: "具" },
];

export default function Skills() {
  return (
    <section id="skills" className="textbook-page relative overflow-hidden bg-washi">
      {/* Chapter tab */}
      <div className="bg-washi-dark border-b-2 border-kitsune/30 px-6 md:px-8 py-2 flex items-center gap-3">
        <div className="chapter-stamp text-sm w-[32px] h-[32px]">2</div>
        <span className="text-[0.7rem] tracking-[0.3em] text-akane uppercase font-bold" style={{ fontFamily: "var(--font-noto-serif-jp)" }}>
          第二章 · Skills — 技術スキル
        </span>
        <span className="flex-1" />
        <span className="text-[0.65rem] text-mist tracking-wider hidden md:inline" style={{ fontFamily: "var(--font-jetbrains)" }}>pg. 2</span>
      </div>

      <div className="ruled-lines book-spine-shadow px-6 md:px-10 lg:px-14 py-8 md:py-10">
        <SectionHeader label="第二章 · Chapter 2" title="Technical Skills — 技術スキル" kanji="技" />

        {/* Skills grid — like reference HTML skill-tags but elevated */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="bg-washi-light border border-kitsune-pale p-5 relative group transition-all duration-300 hover:-translate-y-1 hover:shadow-md overflow-hidden"
            >
              {/* Left accent */}
              <div className="absolute top-0 left-0 w-[4px] h-full bg-akane opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Icon */}
              <div className="w-10 h-10 rounded-lg bg-akane text-kitsune-light flex items-center justify-center mb-3 group-hover:rotate-3 transition-transform">
                {cat.icon}
              </div>

              <h3 className="text-[1rem] font-bold text-sumi-light mb-1.5" style={{ fontFamily: "var(--font-noto-serif-jp)" }}>{cat.title}</h3>
              <p className="text-sumi-faded text-[0.82rem] leading-relaxed mb-4">{cat.desc}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {cat.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="badge text-[0.68rem]">{tag}</span>
                ))}
              </div>

              {/* Kanji watermark */}
              <div className="absolute -bottom-3 -right-2 text-[3.5rem] text-sakura opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none" style={{ fontFamily: "var(--font-noto-serif-jp)" }}>
                {cat.kanji}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Page footer */}
      <div className="bg-washi-dark border-t-2 border-kitsune/40 px-6 md:px-8 py-2 flex justify-between items-center">
        <span className="text-[0.65rem] text-mist tracking-wider" style={{ fontFamily: "var(--font-noto-serif-jp)" }}>ページ 3 / 5</span>
        <span className="text-[0.65rem] text-mist tracking-widest opacity-50">技術 · TECHNICAL MASTERY</span>
      </div>

      {/* Kanji watermark */}
      <div className="absolute left-[40%] bottom-[10%] text-[10rem] text-kitsune opacity-[0.03] pointer-events-none select-none hidden lg:block" style={{ fontFamily: "var(--font-noto-serif-jp)" }}>力</div>
    </section>
  );
}
