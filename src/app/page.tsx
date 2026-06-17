import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Journey from "@/components/sections/Journey";
import Contact from "@/components/sections/Contact";
import Navbar from "@/components/sections/Navbar";
import TextbookSpine from "@/components/ui/TextbookSpine";

export default function Home() {
  return (
    <main className="min-h-screen bg-washi selection:bg-sakura/40 selection:text-sumi relative">
      {/* Textbook Spine — fixed on left */}
      <TextbookSpine />

      {/* Textbook body (offset for spine) */}
      <div className="ml-0 md:ml-[28px] textbook-scroll">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Journey />
        <Contact />
      </div>
    </main>
  );
}
