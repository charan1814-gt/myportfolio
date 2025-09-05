import Navigation from "../components/layout/navigation";
import Hero from "../components/sections/hero";
import About from "../components/sections/about";
import Skills from "../components/sections/skills";
import Projects from "../components/sections/projects";
import Experience from "../components/sections/experience";
import Contact from "../components/sections/contact";
import Footer from "../components/layout/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}
