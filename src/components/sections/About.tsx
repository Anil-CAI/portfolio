"use client";

import { motion } from "framer-motion";
import SectionHeader from "../ui/SectionHeader";
import Image from "next/image";
import SectionBackground from "../ui/SectionBackground";

export default function About() {
  return (
    <SectionBackground backgroundImage="/assets/backgrounds/bg.jpg" overlayOpacity={0.7} blur={true} priority={true}>
      <section id="about" className="py-24 md:py-32 relative overflow-hidden">
        <div className="section-container">
          <SectionHeader 
            label="01 / Profile" 
            title="The Mind Behind the Machine" 
            kanji="心" 
          />
          
        <div className="grid md:grid-cols-[1fr_1.2fr] gap-12 md:gap-20 items-start relative z-10">
          {/* Left: Identity & Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Profile Frame with Glass Blur Effect */}
            <div className="relative w-[280px] h-[360px] mx-auto md:mx-0">
              {/* Zen Circle (Enso) Decoration */}
              <div className="absolute -inset-10 border-[1px] border-sakura-deep/20 rounded-full pointer-events-none -z-10 animate-[spin_20s_linear_infinite] hidden md:block"></div>
              
              <div className="relative w-full h-full border border-border-strong rounded-sm bg-washi overflow-hidden shadow-soft group z-10">
                <div className="w-full h-full relative">
                  {/* Main Image */}
                  <Image 
                    src="/assets/anil.jpg" 
                    alt="Anil Kumar" 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 280px"
                  />
                  
                  {/* Glass Overlay (Blur Effect) */}
                  <div className="absolute inset-0 bg-white/5 backdrop-blur-[1px] transition-all duration-700 group-hover:backdrop-blur-0 group-hover:bg-transparent"></div>
                  
                  {/* Subtle Gradient for depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-sumi/40 via-transparent to-transparent opacity-60"></div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-mincho text-3xl text-sumi leading-tight">
                Anil Kumar
              </h3>
              <div className="font-serif-jp text-lg font-light text-mist tracking-[0.5em]">
                技術者
              </div>
              <p className="text-sumi/80 text-[0.95rem] leading-[1.8] font-light italic border-l-2 border-sakura-deep pl-4">
                "Building intelligent systems combining AI, robotics, simulation, and real-time graphics."
              </p>
            </div>
          </motion.div>

          {/* Right: Detailed Bio & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div className="space-y-6 text-sumi/80 text-[1rem] leading-[1.9] font-light">
              <p>
                I am an engineering student with a deep passion for <span className="text-sumi font-medium">robotics and simulation</span>. 
                My journey began with a curiosity about how things work, which evolved into a focused pursuit of building intelligent interactive systems.
              </p>
              
              <p>
                I specialize in <span className="text-sumi font-medium">Unreal Engine 5</span> for real-time visualization and <span className="text-sumi font-medium">ROS2</span> for robotic navigation. 
                Whether it's developing C++ gameplay systems or training machine learning models, I strive for clean architecture and performant code.
              </p>

              <p>
                Currently, I am exploring the intersection of <span className="text-sakura-deep font-medium">human-robot interaction</span> and aesthetic technology, believing that the future of robotics lies not just in function, but in the beauty of seamless integration.
              </p>
            </div>

            {/* Stats Cards (from old About) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <StatCard kanji="年" num="4+" unit="Years" label="Learning Path" />
              <StatCard kanji="項" num="15+" unit="Projects" label="Developed" />
              <StatCard kanji="技" num="8" unit="Core" label="Technologies" />
              <StatCard kanji="学" num="7.8" unit="GPA" label="Academic Excellence" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background Decorative Symbols */}
      <div className="absolute right-[10%] top-[20%] font-serif-jp text-[8rem] text-sakura opacity-[0.08] pointer-events-none select-none hidden lg:block">
        夢
      </div>
      <div className="absolute left-[30%] bottom-[15%] font-serif-jp text-[6rem] text-matcha opacity-[0.08] pointer-events-none select-none hidden lg:block">
        力
      </div>
      <div className="absolute right-[40%] top-[40%] font-serif-jp text-[12rem] text-indigo opacity-[0.03] pointer-events-none select-none hidden lg:block">
        志
      </div>

      {/* Decorative vertical text */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 -rotate-90 origin-center font-serif-jp text-[0.6rem] tracking-[0.4em] text-border-strong whitespace-nowrap hidden lg:block opacity-40">
        TECHNICAL CREATIVE ENGINEER • ROBOTICS • AI
      </div>
      </section>
    </SectionBackground>
  );
}

function StatCard({ kanji, num, unit, label }: { kanji: string; num: string; unit: string; label: string }) {
  return (
    <motion.div
      whileHover={{ y: -4, boxShadow: "0 4px 24px rgba(100,80,60,0.08)" }}
      className="bg-washi-dark border border-border rounded-sm p-6 relative overflow-hidden transition-all duration-300"
    >
      <div className="absolute -top-2.5 -right-2.5 font-serif-jp text-[4rem] text-sakura opacity-20 pointer-events-none select-none">
        {kanji}
      </div>
      <div className="font-mincho text-[2rem] font-bold text-sumi">
        {num}
        <span className="text-xs font-sans text-mist font-normal ml-1 uppercase tracking-widest">{unit}</span>
      </div>
      <div className="text-[0.78rem] text-mist mt-1 uppercase tracking-wider">{label}</div>
    </motion.div>
  );
}
