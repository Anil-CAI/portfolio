"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import FallingParticles from "../ui/FallingParticles";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="textbook-page relative min-h-screen flex flex-col overflow-hidden bg-washi">
      {/* Textbook header bar */}
      <div className="w-full bg-akane flex items-center gap-4 px-6 md:px-8 py-3">
        <div className="hanko-seal w-[36px] h-[36px] text-[8px]">ア<br />ニル</div>
        <div>
          <h1 className="text-lg md:text-xl font-bold text-kitsune-light tracking-wider" style={{ fontFamily: "var(--font-noto-serif-jp)" }}>
            Anil Kumar
          </h1>
          <div className="text-[0.6rem] text-kitsune-light/80 tracking-wider mt-0.5 uppercase">
            Technical Creative Engineer
          </div>
        </div>
      </div>

      {/* Main hero content — full-width ruled page */}
      <div className="flex-1 flex items-center justify-center relative ruled-lines book-spine-shadow py-12 md:py-16">
        <FallingParticles count={15} />

        {/* Seigaiha subtle background */}
        <div className="absolute inset-0 seigaiha-bg opacity-10 pointer-events-none" />

        {/* Manga Panel Layout */}
        <div className="w-full max-w-6xl mx-auto px-6 md:px-12 relative z-10">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4 md:grid-rows-[220px_200px]">
            
            {/* Panel 1: Main Title & Action Lines (Spans 8 cols) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="md:col-span-8 min-h-[260px] md:min-h-0 bg-washi-light border-2 border-sumi-light/80 p-8 md:p-10 relative overflow-hidden flex flex-col justify-center shadow-[4px_4px_0px_rgba(59,34,6,0.1)]"
            >
              {/* Manga action lines SVG background */}
              <svg className="absolute inset-0 w-full h-full opacity-5" preserveAspectRatio="none">
                <defs>
                  <pattern id="action-lines" patternUnits="userSpaceOnUse" width="100" height="100" patternTransform="rotate(15)">
                    <line x1="0" y1="0" x2="0" y2="100" stroke="#000" strokeWidth="1" />
                    <line x1="20" y1="0" x2="20" y2="100" stroke="#000" strokeWidth="0.5" />
                    <line x1="50" y1="0" x2="50" y2="100" stroke="#000" strokeWidth="2" />
                    <line x1="80" y1="0" x2="80" y2="100" stroke="#000" strokeWidth="1" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#action-lines)" />
              </svg>

              <div className="relative z-10">
                <div className="inline-block bg-sumi-light text-washi px-3 py-1 text-[0.7rem] tracking-[0.2em] uppercase font-bold mb-4" style={{ fontFamily: "var(--font-jetbrains)" }}>
                  主人公 · Protagonist
                </div>
                <h2 className="text-4xl md:text-6xl font-bold text-sumi leading-tight mb-2" style={{ fontFamily: "var(--font-noto-serif-jp)" }}>
                  B. Anil Kumar
                </h2>
                <p className="text-sumi-faded text-sm md:text-base max-w-lg mt-2 leading-relaxed">
                  Building intelligent systems combining AI, robotics, simulation, and real-time graphics.
                </p>
              </div>
              
              {/* Decorative manga sound effect text */}
              <div className="absolute -right-4 -bottom-6 text-[8rem] text-akane opacity-10 font-bold select-none rotate-[-10deg]" style={{ fontFamily: "var(--font-noto-serif-jp)" }}>
                ゴゴゴ
              </div>
            </motion.div>

            {/* Panel 2: Table of Contents (Spans 4 cols, 2 rows) */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={mounted ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:col-span-4 md:row-span-2 min-h-[320px] md:min-h-0 bg-washi border-2 border-sumi-light/80 p-6 relative flex flex-col shadow-[4px_4px_0px_rgba(59,34,6,0.1)]"
            >
              {/* Halftone dots background */}
              <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(#000 1px, transparent 1px)", backgroundSize: "8px 8px" }} />
              
              <div className="relative z-10 flex-1 flex flex-col">
                <div className="flex items-center gap-2 mb-6 border-b-2 border-sumi-light/30 pb-3">
                  <div className="w-3 h-3 bg-akane rounded-full" />
                  <h3 className="text-sm tracking-[0.2em] font-bold text-sumi-light uppercase" style={{ fontFamily: "var(--font-noto-serif-jp)" }}>
                    目次 · Index
                  </h3>
                </div>
                
                <div className="space-y-4 flex-1 flex flex-col justify-center">
                  {[
                    { ch: "第1章", label: "About", sub: "自己紹介", href: "#about" },
                    { ch: "第2章", label: "Skills", sub: "技術スキル", href: "#skills" },
                    { ch: "第3章", label: "Projects", sub: "プロジェクト", href: "#projects" },
                    { ch: "第4章", label: "Journey", sub: "経験", href: "#journey" },
                    { ch: "第5章", label: "Contact", sub: "連絡先", href: "#contact" },
                  ].map((item, idx) => (
                    <a
                      key={idx}
                      href={item.href}
                      className="group flex items-center gap-3 text-sumi-light no-underline"
                    >
                      <div className="text-akane font-bold text-xs w-[40px] shrink-0 border border-akane text-center py-1 group-hover:bg-akane group-hover:text-washi transition-colors">
                        {item.ch}
                      </div>
                      <div className="flex flex-col">
                        <span className="font-bold text-[0.85rem] tracking-wide group-hover:translate-x-1 transition-transform">{item.label}</span>
                        <span className="text-[0.6rem] text-sumi-faded">{item.sub}</span>
                      </div>
                      <div className="ml-auto text-[0.7rem] font-mono opacity-40 group-hover:opacity-100 transition-opacity" style={{ fontFamily: "var(--font-jetbrains)" }}>
                        0{idx + 1}
                      </div>
                    </a>
                  ))}
                </div>

                <div className="mt-6 text-right" style={{ fontFamily: "var(--font-caveat)", transform: "rotate(-3deg)" }}>
                  <span className="text-akane text-xl">↓ Start reading!</span>
                </div>
              </div>
            </motion.div>

            {/* Panel 3: Abstract Graphic / Element (Spans 4 cols) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="md:col-span-4 min-h-[140px] md:min-h-0 bg-akane text-kitsune-light border-2 border-sumi-light/80 p-6 relative overflow-hidden flex items-center justify-center shadow-[4px_4px_0px_rgba(59,34,6,0.1)]"
            >
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 10px, #fff 10px, #fff 20px)" }} />
              
              <div className="relative z-10 text-center">
                <div className="text-4xl mb-2">🤖</div>
                <div className="text-[0.65rem] tracking-[0.2em] font-bold uppercase" style={{ fontFamily: "var(--font-jetbrains)" }}>
                  Robotics & XR
                </div>
              </div>
            </motion.div>

            {/* Panel 4: Quick Details (Spans 4 cols) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={mounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="md:col-span-4 bg-washi-dark border-2 border-sumi-light/80 p-6 flex flex-col justify-between shadow-[4px_4px_0px_rgba(59,34,6,0.1)]"
            >
              <div>
                <div className="text-[0.6rem] text-sumi-faded uppercase tracking-widest mb-1">Status</div>
                <div className="text-sm font-bold text-sumi-light">Available for roles</div>
              </div>
              <div className="mt-4 pt-4 border-t-2 border-sumi-light/20">
                <div className="text-[0.6rem] text-sumi-faded uppercase tracking-widest mb-1">Location</div>
                <div className="text-sm font-bold text-sumi-light">Pondicherry, IN</div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>

      {/* Page footer */}
      <div className="bg-washi-dark border-t-2 border-kitsune/30 px-6 md:px-8 py-2 flex justify-between items-center">
        <span className="text-[0.65rem] text-mist tracking-wider" style={{ fontFamily: "var(--font-noto-serif-jp)" }}>ページ 1 / 5</span>
        <span className="text-[0.65rem] text-mist tracking-widest opacity-60">PORTFOLIO · 2026</span>
      </div>
    </section>
  );
}
