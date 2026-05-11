"use client";

import SectionHeader from "../ui/SectionHeader";
import ProjectCard from "../ui/ProjectCard";

const projects = [
  {
    title: "VR Robot Teleoperation",
    description: "Developing a real-time VR interface for remote control of humanoid robots using ROS2 and Unity/UE5. Features low-latency visual feedback and haptic integration.",
    type: "ROBOTICS • VR",
    year: "2024",
    bgColor: "#e8f5e9", // Light Green
    pattern: "grid" as const,
    illustration: "🤖",
    videoUrl: "/assets/VR Controlling the robot.mp4",
    github: "#",
    titleHref: "https://www.linkedin.com/posts/anil3423_robotics-unitreego2-metaquest3-ugcPost-7446400472435036160-LV9A?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFJR49wBDxxAmNvjtggj7gmGvupP7EUgDiE"
  },
  {
    title: "UE5 Technical FPS",
    description: "A high-performance C++ based FPS in Unreal Engine 5 featuring a dynamic spawning system, online JSON data fetching for game state, and custom Niagara VFX.",
    type: "GAME DEV",
    year: "2023",
    bgColor: "#fce4ec", // Light Pink
    pattern: "dots" as const,
    illustration: "🎮",
    github: "#"
  },
  {
    title: "Autonomous Navigation",
    description: "LiDAR-based obstacle avoidance and path planning system for autonomous vehicles. Built with ROS2 and validated in Gazebo simulation environments.",
    type: "ROBOTICS",
    year: "2023",
    bgColor: "#fff9c4", // Light Yellow
    pattern: "lines" as const,
    illustration: "🏎️",
    github: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="bg-washi py-24 md:py-32">
      <div className="section-container">
        <SectionHeader 
          label="03 / Selected Work" 
          title="Innovative Creations" 
          kanji="作" 
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
