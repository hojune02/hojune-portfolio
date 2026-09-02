import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import CustomCursor from "./components/CustomCursor";
import ScrollProgress from "./components/ScrollProgress";
import Starfield from "./components/Starfield";

export default function App() {
  return (
<div className="relative min-h-screen overflow-x-clip bg-page">
      {/* Shared background */}
      <div
        className="pointer-events-none fixed inset-10 z-0 overflow-hidden"
        aria-hidden="true"
      >
        <Starfield />
      </div>

      {/* Website content */}
      <div className="relative z-10">
        <ScrollProgress />
        <Navbar />

        <main>
          <Hero />
          <About />
          <TechStack />
          <Projects />
          <Contact />
        </main>

        <Footer />
      </div>

      <CustomCursor />
    </div>
  );
}