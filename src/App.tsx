import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import CloudTransition from "./components/CloudTransition";
import CustomCursor from "./components/CustomCursor";
import ScrollProgress from "./components/ScrollProgress";

export default function App() {
  return (
    <>
      <ScrollProgress />  
      <CustomCursor />  
      <Navbar />

      <main>
        <Hero />
        <CloudTransition />
        <About />
        <TechStack />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  );
}