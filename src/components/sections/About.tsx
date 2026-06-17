"use client";

import { motion } from "framer-motion";
import SectionHeader from "../ui/SectionHeader";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="textbook-page relative overflow-hidden bg-washi">
      {/* Chapter tab header */}
      <div className="bg-washi-dark border-b-2 border-kitsune/30 px-6 md:px-8 py-2 flex items-center gap-3">
        <div className="chapter-stamp text-sm w-[32px] h-[32px]">1</div>
        <span className="text-[0.7rem] tracking-[0.3em] text-akane uppercase font-bold" style={{ fontFamily: "var(--font-noto-serif-jp)" }}>
          第一章 · About Me — 自己紹介
        </span>
        <span className="flex-1" />
        <span className="text-[0.65rem] text-mist tracking-wider hidden md:inline" style={{ fontFamily: "var(--font-jetbrains)" }}>pg. 1</span>
      </div>

      {/* Page content with ruled lines */}
      <div className="ruled-lines margin-line-left book-spine-shadow px-6 md:px-10 lg:px-14 py-8 md:py-12">
        <SectionHeader label="第一章 · Chapter 1" title="About Me — 自己紹介" kanji="心" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start max-w-6xl mx-auto">
          {/* Left: Profile Image & Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 flex flex-col items-center lg:items-start w-full"
          >
            {/* Photo taped in */}
            <div className="relative w-full max-w-[340px]">
              <div className="absolute -top-3 left-10 w-[60px] h-[16px] bg-kitsune-light/80 -rotate-3 z-20 rounded-sm shadow-sm" />
              <div className="absolute -top-2 right-12 w-[50px] h-[16px] bg-kitsune-light/80 rotate-2 z-20 rounded-sm shadow-sm" />
              <div className="relative bg-washi-light p-3 shadow-md rotate-[1deg] hover:rotate-0 transition-transform duration-500 border border-kitsune-pale">
                <div className="relative w-full h-[380px] overflow-hidden bg-washi-dark">
                  <Image src="/assets/anil.jpg" alt="Anil Kumar" fill className="object-cover blur-[1.5px] contrast-95 saturate-90" sizes="(max-width: 768px) 100vw, 340px" />
                </div>
                <div className="mt-2 text-center text-sumi-faded text-[0.85rem]" style={{ fontFamily: "var(--font-caveat)" }}>
                  Anil Kumar, 2026
                </div>
              </div>
            </div>

            {/* Info cards */}
            <div className="grid grid-cols-2 gap-3 w-full max-w-[340px]">
              <div className="bg-washi-light border border-kitsune-pale rounded-sm p-3.5 shadow-sm">
                <div className="text-[0.65rem] text-akane tracking-widest uppercase font-bold mb-1">名前 · Name</div>
                <div className="text-[0.85rem] text-sumi-light font-medium">B. Anil Kumar</div>
              </div>
              <div className="bg-washi-light border border-kitsune-pale rounded-sm p-3.5 shadow-sm">
                <div className="text-[0.65rem] text-akane tracking-widest uppercase font-bold mb-1">役割 · Role</div>
                <div className="text-[0.85rem] text-sumi-light font-medium">Technical Engineer</div>
              </div>
            </div>
          </motion.div>

          {/* Right: Bio + Stats */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-4 text-sumi-faded text-[0.95rem] leading-[1.8]">
              <p>
                I am an engineering student with a deep passion for <span className="text-sumi font-semibold">robotics and simulation</span>.
                My journey began with a curiosity about how things work, which evolved into a focused pursuit of building intelligent interactive systems.
              </p>
              <p>
                I specialize in <span className="text-sumi font-semibold">Unreal Engine 5</span> for real-time visualization and <span className="text-sumi font-semibold">ROS2</span> for robotic navigation.
                Whether it&apos;s developing C++ gameplay systems or training machine learning models, I strive for clean architecture and performant code.
              </p>
              <p>
                Currently, I am exploring the intersection of <span className="px-1.5 py-0.5 bg-highlight-pink/60 rounded-sm">human-robot interaction</span> and aesthetic technology, believing that the future of robotics lies not just in function, but in the beauty of seamless integration.
              </p>
            </div>
            
            <p className="text-sumi-light text-[0.95rem] leading-[1.7] italic border-l-[3px] border-akane pl-5 py-1 bg-gradient-to-r from-akane/5 to-transparent">
              &ldquo;Building intelligent systems combining AI, robotics, simulation, and real-time graphics.&rdquo;
            </p>

            {/* Sticky note */}
            <div className="sticky-note max-w-[360px] shadow-md">
              <div className="font-bold text-[0.9rem] mb-1 opacity-80 uppercase tracking-wider" style={{ fontFamily: "var(--font-jetbrains)" }}>Note:</div>
              Key focus areas: VR Teleoperation, Autonomous Systems, and Real-time 3D Graphics ✨
            </div>

            {/* Stats table */}
            <table className="textbook-table shadow-sm">
              <thead>
                <tr>
                  <th>指標 · Metric</th>
                  <th>Value</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="font-semibold">Experience</td><td className="text-akane font-bold text-lg">4+</td><td className="text-sumi-faded text-sm">Years Learning Path</td></tr>
                <tr><td className="font-semibold">Projects</td><td className="text-akane font-bold text-lg">15+</td><td className="text-sumi-faded text-sm">Developed & Shipped</td></tr>
                <tr><td className="font-semibold">Technologies</td><td className="text-akane font-bold text-lg">8</td><td className="text-sumi-faded text-sm">Core Competencies</td></tr>
                <tr><td className="font-semibold">GPA</td><td className="text-akane font-bold text-lg">7.8</td><td className="text-sumi-faded text-sm">Academic Excellence</td></tr>
              </tbody>
            </table>
          </motion.div>
        </div>
      </div>

      {/* Page footer */}
      <div className="bg-washi-dark border-t-2 border-kitsune/40 px-6 md:px-8 py-2 flex justify-between items-center">
        <span className="text-[0.65rem] text-mist tracking-wider" style={{ fontFamily: "var(--font-noto-serif-jp)" }}>ページ 2 / 5</span>
        <span className="text-[0.65rem] text-mist tracking-widest opacity-50">KIET · JNTUK · 2027</span>
      </div>

      {/* Decorative kanji watermarks */}
      <div className="absolute right-8 top-[30%] text-[8rem] text-sakura opacity-[0.05] pointer-events-none select-none hidden lg:block" style={{ fontFamily: "var(--font-noto-serif-jp)" }}>夢</div>
    </section>
  );
}
