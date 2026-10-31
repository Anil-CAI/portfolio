"use client";

import SectionHeader from "../ui/SectionHeader";
import ProjectCard from "../ui/ProjectCard";

const projects = [
  {
    title: "VR Teleoperation & VLA Training for Unitree G1",
    description:
      "Building a VR teleoperation system for the Unitree G1 humanoid, controlled from a Meta Quest 3 through ROS 2 and the Unitree SDK. Collecting teleoperation demonstrations through a Python pipeline and training a Vision-Language-Action model on them; the model is now in training and testing.",
    type: "ROBOTICS • VLA",
    year: "2025 – Now",
    illustration: "🤖",
    tech: "Unity · C# · Meta Quest 3 · ROS 2 · Unitree SDK · Python · VLA Models",
  },
  {
    title: "VR Teleoperation System for Unitree Go2",
    description:
      "A Unity (C#) VR app for Meta Quest 3 that streams a Go2 quadruped's live camera feed into a first-person telepresence view. Controller-based locomotion maps steering and forward/backward movement to robot commands. Connected to a Python server over WebRTC on local Wi-Fi, and tested on Quest 3 with the physical robot.",
    type: "ROBOTICS • VR",
    year: "2024 – 25",
    illustration: "🎮",
    videoUrl: "/assets/VR Controlling the robot.mp4",
    github: "https://github.com/Anil-CAI",
    titleHref:
      "https://www.linkedin.com/posts/anil3423_robotics-unitreego2-metaquest3-ugcPost-7446400472435036160-LV9A?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAFJR49wBDxxAmNvjtggj7gmGvupP7EUgDiE",
    tech: "Unity · C# · Meta Quest 3 · WebRTC · Python · Unitree SDK",
  },
  {
    title: "AR/VR Drawing Environment",
    description:
      "An immersive XR drawing app where users draw in 3D space on a virtual canvas. Drawings persist across sessions, so users can reopen and continue their work. The experience runs in the browser, so no app install is needed.",
    type: "XR • WEB",
    year: "2025",
    illustration: "🎨",
    tech: "Unity · C# · VR/XR · Spatial Interaction · Web-based XR",
  },
  {
    title: "KIET Robotics Lab Website",
    description:
      "Designed and built the lab's website end to end, with interactive 3D elements, project pages and a member directory. I still build and maintain the lab's web platform.",
    type: "WEB • LAB",
    year: "KIET Lab",
    illustration: "🏫",
    demo: "https://kietroboticslab.netlify.app",
    tech: "Web Development · Interactive 3D · Netlify",
  },
  {
    title: "Web VR Teleoperation for a ROS 2 Robot",
    description:
      "A web app with a WebXR mode that streams a robot's camera feed and lets users drive it. Uses a Node.js HTTPS server and WebSockets, with a Python (Flask, OpenCV) camera pipeline and ROS 2 navigation.",
    type: "ROBOTICS • WEB XR",
    year: "Web",
    illustration: "🛰️",
    github: "https://github.com/Anil-CAI/tele_vr_robot",
    tech: "WebXR · ROS 2 · Node.js · WebSockets · Flask · OpenCV",
  },
  {
    title: "Galaxy Cinema VR",
    description:
      "A browser VR cinema with a procedural star field and live video textures. It runs in any browser and on Meta Quest 3.",
    type: "WEB XR • GAME DEV",
    year: "Web",
    illustration: "🌌",
    github: "https://github.com/Anil-CAI/vr_theater",
    tech: "Three.js · WebXR · Vite · Meta Quest 3",
  },
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
            <ProjectCard key={project.title} {...project} index={idx} />
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
