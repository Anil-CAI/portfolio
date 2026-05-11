"use client";

import { motion } from "framer-motion";
import SectionHeader from "../ui/SectionHeader";
import { Code2, Gamepad2, Cpu, Globe, BrainCircuit, Hammer } from "lucide-react";

const skillCategories = [
  {
    title: "Robotics & Hardware",
    icon: <Cpu size={28} />,
    color: "#00C853", // Vibrant Green
    bg: "#E8F5E9",
    desc: "Building physical intelligence and autonomous systems.",
    tags: ["ROS2", "Gazebo", "Simulation"],
    kanji: "器"
  },
  {
    title: "Game Engine & 3D",
    icon: <Gamepad2 size={28} />,
    color: "#FF4081", // Vibrant Pink
    bg: "#FCE4EC",
    desc: "Creating immersive worlds and real-time visualizations.",
    tags: ["Unreal Engine 5", "C++", "Blender", "3D Modeling"],
    kanji: "画"
  },
  {
    title: "AI & Intelligence",
    icon: <BrainCircuit size={28} />,
    color: "#00B0FF", // Vibrant Blue
    bg: "#E1F5FE",
    desc: "Implementing machine learning and computer vision.",
    tags: ["Computer Vision", "Automation", "Prompt Eng", "Python"],
    kanji: "智"
  },
  {
    title: "Software Engineering",
    icon: <Code2 size={28} />,
    color: "#FFAB00", // Vibrant Orange
    bg: "#FFF8E1",
    desc: "Architecting clean, scalable, and performant codebases.",
    tags: ["C++", "Python", "System Design", "Git"],
    kanji: "工"
  },
  {
    title: "Web Technologies",
    icon: <Globe size={28} />,
    color: "#AA00FF", // Vibrant Purple
    bg: "#F3E5F5",
    desc: "Developing modern, responsive, and interactive interfaces.",
    tags: ["Next.js", "React", "FastAPI", "Tailwind", "REST APIs"],
    kanji: "網"
  },
  {
    title: "Tools & Workflow",
    icon: <Hammer size={28} />,
    color: "#546E7A", // Vibrant Slate
    bg: "#ECEFF1",
    desc: "Optimizing development with modern industry tools.",
    tags: ["Docker", "Linux", "VS Code", "Figma"],
    kanji: "具"
  }
];

export default function Skills() {
  return (
    <section id="skills" className="bg-washi-dark border-y border-border py-24 md:py-32">
      <div className="section-container">
        <SectionHeader 
          label="02 / Skills" 
          title="Technical Mastery" 
          kanji="技" 
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-washi border border-border rounded-xl p-8 relative overflow-hidden group transition-all duration-300 hover:border-sakura-deep hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Left accent line */}
              <div 
                className="absolute top-0 left-0 w-[4px] h-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{ backgroundColor: category.color }}
              ></div>
              
              {/* Colored Icon Container */}
              <div 
                className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:rotate-6 shadow-sm`}
                style={{ color: "white", backgroundColor: category.color }}
              >
                {category.icon}
              </div>
              
              <h3 className="font-mincho text-[1.2rem] font-bold text-sumi mb-2">{category.title}</h3>
              <p className="text-mist text-[0.88rem] leading-relaxed mb-6">{category.desc}</p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {category.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="text-[0.72rem] font-bold px-3 py-1 bg-white border border-border rounded-lg text-indigo-light tracking-wide transition-all group-hover:border-sakura/50 hover:bg-sakura-pale">
                    {tag}
                  </span>
                ))}
              </div>
              
              {/* Decorative Kanji background */}
              <div className="absolute -bottom-4 -right-4 font-serif-jp text-[4.5rem] text-sakura opacity-0 group-hover:opacity-15 transition-opacity duration-500 pointer-events-none">
                {category.kanji}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
