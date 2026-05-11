"use client";

import { motion } from "framer-motion";
import SectionHeader from "../ui/SectionHeader";

const timelineData = [
  {
    year: "2024 — Present",
    role: "Technical Creative Engineer",
    org: "Self-Directed Innovation Lab",
    description: "Leading R&D in VR teleoperation systems for humanoid robots. Integrating ROS2 with real-time game engines for high-fidelity control loops."
  },
  {
    year: "2023 — 2024",
    role: "Robotics System Developer",
    org: "Engineering Research Group",
    description: "Architected autonomous navigation stacks for multi-sensor robot platforms. Implemented LiDAR SLAM and dynamic obstacle avoidance."
  },
  {
    year: "2022 — 2023",
    role: "Full Stack AI Developer",
    org: "Tech Solutions Intern",
    description: "Developed cloud-native applications with integrated ML models. Optimized data pipelines for real-time analytics and user feedback."
  },
  {
    year: "2021 — 2022",
    role: "Simulation Engineer",
    org: "University Projects",
    description: "Created high-fidelity physical simulations in Unreal Engine 5 to test robotic control algorithms before hardware deployment."
  }
];

export default function Journey() {
  return (
    <section id="journey" className="bg-washi-dark py-24 md:py-32 border-y border-border">
      <div className="section-container">
        <SectionHeader 
          label="04 / Experience" 
          title="Professional Journey" 
          kanji="道" 
        />

        <div className="relative pl-8 md:pl-12 ml-4">
          {/* Vertical Line */}
          <div className="absolute left-0 top-2 bottom-2 w-[1px] bg-border-strong"></div>

          <div className="space-y-12">
            {timelineData.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="relative grid grid-cols-1 md:grid-cols-[160px_1fr] gap-6 md:gap-12"
              >
                {/* Dot */}
                <div className="absolute -left-[36px] md:-left-[52px] top-2 w-[10px] h-[10px] bg-sakura-deep rounded-full border-[2px] border-washi-dark z-10 shadow-sm"></div>
                
                {/* Year */}
                <div className="font-mincho text-[0.85rem] text-mist pt-1 uppercase tracking-widest">
                  {item.year}
                </div>

                {/* Content Card */}
                <div className="bg-washi border border-border rounded-sm p-6 shadow-sm transition-all duration-300 hover:border-sakura-deep hover:shadow-card">
                  <h3 className="font-mincho text-[1.1rem] font-medium text-sumi mb-1">{item.role}</h3>
                  <div className="text-indigo-light text-[0.85rem] mb-4 font-medium">{item.org}</div>
                  <p className="text-mist text-[0.82rem] leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
