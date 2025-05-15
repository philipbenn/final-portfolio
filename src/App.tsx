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
import { useEffect, useState } from "react";
import BackToTopWidget from "./components/widget/backToTopWidget";
import CustomCursor from "./components/customCursor/customCursor";
import ProjectDetail from "./components/projects/projectDetail";
import info from "./data/user";

initializeIcons();

function App() {
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(
    null
  );

  useEffect(() => {
    AOS.init({
      duration: 800,
      disable: () => window.innerWidth < 768,
      offset: 200,
    });
  }, []);

  const handleProjectClick = (projectId: string) => {
    setSelectedProjectId(projectId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBack = () => {
    setSelectedProjectId(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const selectedProject = info.projects.data.find(
    (p) => p.title.toLowerCase().replace(/\s+/g, "-") === selectedProjectId
  );

  return (
    <div id="page" className="site">
      <CustomCursor />
      {selectedProject ? (
        <ProjectDetail project={selectedProject} onBack={handleBack} />
      ) : (
        <>
          <Header
            onNavClick={(id) => {
              const el = document.getElementById(id);
              if (el) {
                const offset =
                  el.getBoundingClientRect().top + window.scrollY - 85;
                window.scrollTo({ top: offset, behavior: "smooth" });
              }
            }}
          />
          <div id="content" className="site-content">
            <div className="content-wrapper">
              <section className="landing-section">
                <Home />
                <Widget />
                <BackToTopWidget />
              </section>
              <section className="project-section" id="projects-section">
                <AllProjects onProjectClick={handleProjectClick} />
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
      )}
    </div>
  );
}

export default App;
