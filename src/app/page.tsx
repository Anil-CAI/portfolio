import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Journey from "@/components/sections/Journey";
import Contact from "@/components/sections/Contact";
import Divider from "@/components/ui/Divider";
import Navbar from "@/components/sections/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-sakura selection:text-sumi">
      {/* 
        Note: The Navbar is kept for navigation on scroll, 
        but the Hero section provides its own visual nav as per the user's reference image.
      */}
      <Navbar />
      <Hero />
      <Divider text1="The Journey" text2="About • Evolution • Identity" />
      <About />
      <Divider text1="Technical Lab" text2="Skills • Projects • Journey" />
      <Skills />
      <Projects />
      <Journey />
      <Divider text1="Connect" text2="Network • Collaborate • Build" />
      <Contact />
    </main>
  );
}
