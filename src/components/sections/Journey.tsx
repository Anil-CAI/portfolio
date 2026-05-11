"use client";

import { motion } from "framer-motion";
import SectionHeader from "../ui/SectionHeader";

const timelineData = [
  {
    year: "2023",
    title: "Game Engine Foundations",
    company: "Self-Directed Learning",
    description: "Started deep-diving into Unreal Engine. Explored software features, visual scripting, and C++ foundations to build interactive virtual environments.",
    tags: ["Unreal Engine", "Game Dev", "C++"]
  },
  {
    year: "2024 (Early)",
    title: "B.Tech Computers - Year 2",
    company: "University",
    description: "Started B.Tech in Computer Science as a 2nd-year student, focusing on core engineering principles and software architecture.",
    tags: ["Academic", "CS"]
  },
  {
    year: "2024 (Mid)",
    title: "Robotics Club - The Spark",
    company: "Robotics Society",
    description: "Joined the university robotics club. Spent the 3-1 semester mastering robotics basics and transitioning to advanced robot control systems.",
    tags: ["Robotics", "Hardware", "Control Systems"]
  },
  {
    year: "2024 (Late)",
    title: "VR Developer & Teleoperator",
    company: "Robotics Innovation Lab",
    description: "Appointed as VR Developer during the 3-2 semester. Tasked with the challenge of teleoperating the Unitree Go2 (robo dog) via VR.",
    tags: ["VR", "Teleoperation", "Unitree Go2"]
  },
  {
    year: "Present",
    title: "Meta Hub Deployment",
    company: "XR Robotics",
    description: "Developed a Unity app for real-time camera feed and steering control of the robo dog. Successfully published to Meta Developer Hub (Testing Phase). Discovered deep knowledge in WebRTC, Servers, and ROS-TCP.",
    tags: ["Unity", "WebRTC", "ROS-TCP", "Meta Quest"]
  }
];

export default function Journey() {
  return (
    <section id="journey" className="bg-washi py-24 md:py-32 relative overflow-hidden">
      <div className="section-container">
        <SectionHeader 
          label="04 / Evolution" 
          title="Professional Journey" 
          kanji="路" 
        />

        <div className="relative mt-20">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[1px] bg-border-strong opacity-30 -translate-x-1/2"></div>

          <div className="space-y-24">
            {timelineData.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.1 }}
                className={`relative flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-start md:items-center gap-8 md:gap-0`}
              >
                {/* Content */}
                <div className={`w-full md:w-[42%] ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className="font-serif-jp text-xs tracking-widest text-sakura-deep mb-2 uppercase font-bold">
                    {item.year}
                  </div>
                  <h3 className="font-mincho text-xl font-bold text-sumi mb-2">{item.title}</h3>
                  <div className="text-[0.7rem] uppercase tracking-wider text-mist mb-4 font-medium">{item.company}</div>
                  <p className="text-indigo-light text-[0.85rem] leading-relaxed mb-6 max-w-lg mx-auto md:mx-0">
                    {item.description}
                  </p>
                  <div className={`flex flex-wrap gap-2 ${idx % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                    {item.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="px-2.5 py-0.5 bg-washi-dark border border-border text-[0.65rem] text-mist rounded-full uppercase tracking-tighter">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Dot */}
                <div className="absolute left-0 md:left-1/2 w-3 h-3 rounded-full bg-sakura-deep border-4 border-washi z-10 -translate-x-1/2 scale-110 shadow-[0_0_0_4px_rgba(232,160,176,0.1)]"></div>

                {/* Spacer */}
                <div className="hidden md:block w-[42%]"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute right-0 bottom-0 font-serif-jp text-[12rem] text-sakura opacity-[0.03] pointer-events-none select-none translate-x-1/4 translate-y-1/4">
        道
      </div>
    </section>
  );
}
