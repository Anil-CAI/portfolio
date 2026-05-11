"use client";

import { motion } from "framer-motion";
import SectionHeader from "../ui/SectionHeader";
import { Award, Star, Trophy, Target } from "lucide-react";

const achievements = [
  {
    title: "Regional Hackathon Winner",
    org: "Innovate Tokyo",
    description: "Awarded first place for developing a low-latency ROS2 bridge for VR teleoperation.",
    icon: <Trophy size={20} className="text-sumi" />,
    kanji: "勝"
  },
  {
    title: "Academic Excellence Award",
    org: "University of Technology",
    description: "Recognized for maintaining a 9.2 GPA and contributing to robotics research.",
    icon: <Star size={20} className="text-sumi" />,
    kanji: "優秀"
  },
  {
    title: "Open Source Advocate",
    org: "Robotics Foundation",
    description: "Contributed core modules to multiple open-source simulation tools used by thousands.",
    icon: <Award size={20} className="text-sumi" />,
    kanji: "公"
  },
  {
    title: "Certified Technical Artist",
    org: "Epic Games / UE5",
    description: "Professional certification in high-fidelity simulation and real-time visualization.",
    icon: <Target size={20} className="text-sumi" />,
    kanji: "証"
  }
];

export default function Achievements() {
  return (
    <section id="achievements" className="bg-washi py-24 md:py-32">
      <div className="section-container">
        <SectionHeader 
          label="05 / Honors" 
          title="Recognition & Milestones" 
          kanji="誉" 
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-washi border border-border rounded-sm p-8 relative overflow-hidden group transition-all duration-300 hover:border-sakura-deep hover:-translate-y-1 hover:shadow-card"
            >
              <div className="w-12 h-12 rounded-full border border-border-strong flex items-center justify-center mb-6 group-hover:bg-sakura-pale group-hover:border-sakura-deep transition-colors duration-300">
                {item.icon}
              </div>
              
              <h3 className="font-mincho text-[1.05rem] font-medium text-sumi mb-1">{item.title}</h3>
              <div className="text-indigo-light text-[0.75rem] uppercase tracking-widest mb-4 font-medium">{item.org}</div>
              <p className="text-mist text-[0.8rem] leading-relaxed">{item.description}</p>
              
              <div className="absolute -bottom-4 -right-2 font-serif-jp text-[3.5rem] text-sakura opacity-0 group-hover:opacity-15 transition-opacity duration-500 pointer-events-none">
                {item.kanji}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
