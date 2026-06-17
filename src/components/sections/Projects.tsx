"use client";

import SectionHeader from "../ui/SectionHeader";
import ProjectCard from "../ui/ProjectCard";

const projects = [
  {
    title: "VR Robot Teleoperation",
    description: "Developing a real-time VR interface for remote control of humanoid robots using ROS2 and Unity/UE5. Features low-latency visual feedback and haptic integration.",
    type: "ROBOTICS • VR",
    year: "2024",
    illustration: "🤖",
    videoUrl: "/assets/VR Controlling the robot.mp4",
    github: "#",
    titleHref: "https://www.linkedin.com/posts/anil3423_robotics-unitreego2-metaquest3-ugcPost-7446400472435036160-LV9A?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFJR49wBDxxAmNvjtggj7gmGvupP7EUgDiE",
    tech: "Unity · Python · WebRTC · VR/XR · Networking · Unitree SDK"
  },
  {
    title: "UE5 Technical FPS",
    description: "A high-performance C++ based FPS in Unreal Engine 5 featuring a dynamic spawning system, online JSON data fetching for game state, and custom Niagara VFX.",
    type: "GAME DEV",
    year: "2023",
    illustration: "🎮",
    github: "#",
    tech: "Unreal Engine 5 · C++ · Niagara VFX · JSON"
  },
  {
    title: "Autonomous Navigation",
    description: "LiDAR-based obstacle avoidance and path planning system for autonomous vehicles. Built with ROS2 and validated in Gazebo simulation environments.",
    type: "ROBOTICS",
    year: "2023",
    illustration: "🏎️",
    github: "#",
    tech: "ROS2 · Gazebo · LiDAR · Path Planning"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="textbook-page relative overflow-hidden bg-washi">
      {/* Chapter tab */}
      <div className="bg-washi-dark border-b-2 border-kitsune/30 px-6 md:px-8 py-2 flex items-center gap-3">
        <div className="chapter-stamp text-sm w-[32px] h-[32px]">3</div>
        <span className="text-[0.7rem] tracking-[0.3em] text-akane uppercase font-bold" style={{ fontFamily: "var(--font-noto-serif-jp)" }}>
          第三章 · Projects — プロジェクト
        </span>
        <span className="flex-1" />
        <span className="text-[0.65rem] text-mist tracking-wider hidden md:inline" style={{ fontFamily: "var(--font-jetbrains)" }}>pg. 3</span>
      </div>

      <div className="ruled-lines book-spine-shadow px-6 md:px-10 lg:px-14 py-8 md:py-10">
        <SectionHeader label="第三章 · Chapter 3" title="Projects — プロジェクト" kanji="作" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} {...project} index={idx} />
          ))}
        </div>
      </div>

      {/* Page footer */}
      <div className="bg-washi-dark border-t-2 border-kitsune/40 px-6 md:px-8 py-2 flex justify-between items-center">
        <span className="text-[0.65rem] text-mist tracking-wider" style={{ fontFamily: "var(--font-noto-serif-jp)" }}>ページ 4 / 5</span>
        <span className="text-[0.65rem] text-mist tracking-widest opacity-50">作品 · SELECTED WORKS</span>
      </div>
    </section>
  );
}
