import { useState, useEffect } from "react";
import About from "./components/About";
import WorkExperience from "./components/WorkExperience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Publications from "./components/Publications";
import Teaching from "./components/Teaching";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    sections.forEach((el, i) => {
      el.classList.add("scroll-section");
      // First section starts visible immediately
      if (i === 0) el.classList.add("visible");
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target;
          if (entry.isIntersecting) {
            el.classList.remove("exit-top");
            el.classList.add("visible");
          } else {
            const above = entry.boundingClientRect.top < 0;
            el.classList.remove("visible");
            if (above) {
              el.classList.add("exit-top");
            } else {
              el.classList.remove("exit-top");
            }
          }
        });
      },
      { threshold: 0.12 }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="app">
      <Navbar scrolled={scrolled} />
      <About />
      <WorkExperience />
      <Projects />
      <Skills />
      <Publications />
      <Teaching />
      <Achievements />
      <Education />
      <Certifications />
      <Contact />
      <footer className="footer">
        <p>© 2026 Zikry Adjie Nugraha · Built with React</p>
      </footer>
    </div>
  );
}

export default App;
