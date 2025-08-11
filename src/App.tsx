import "./App.css";
import Footer from "./components/common/footer";
import Header from "./components/common/header";
import Home from "./components/home/home";
import Widget from "./components/widget/widget";
import Work from "./components/cv/work";
import { initializeIcons } from "@fluentui/font-icons-mdl2";
import TechStack from "./components/techstack/techstack";
import Education from "./components/cv/education";
import AllProjects from "./components/projects/allProjects";
import Contact from "./components/contact/contact";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import BackToTopWidget from "./components/widget/backToTopWidget";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import ProjectDetail from "./components/projects/projectDetail";

initializeIcons();

function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/" && location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        const headerOffset = 85;
        const y =
          el.getBoundingClientRect().top + window.pageYOffset - headerOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  }, [location]);

  return null;
}

function MainContent() {
  return (
    <>
      <ScrollToHash />
      <Header />
      <div id="content" className="site-content">
        <div className="content-wrapper">
          <section className="landing-section">
            <Home />
            <Widget />
            <BackToTopWidget />
          </section>
          <section className="project-section" id="projects-section">
            <AllProjects />
            <TechStack />
          </section>
          <section id="cv-section" className="cv-section">
            <Work />
            <Education />
          </section>
          <Contact />
        </div>
        <Footer />
      </div>
    </>
  );
}

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      disable: () => window.innerWidth < 768,
      offset: 200,
    });
  }, []);

  return (
    <div id="page" className="site">
      <Router>
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/projects/:projectId" element={<ProjectDetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;