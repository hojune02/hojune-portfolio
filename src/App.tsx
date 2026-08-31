import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";

export default function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  );
}