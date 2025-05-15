import info from "../../data/user.js";
import Project from "./project";
import "./styles/allProjects.css";

function AllProjects({ onProjectClick }: { onProjectClick: (id: string) => void }) {
  return (
    <section className="projects-section" id="work">
      {info.projects.data.map((project, index) => (
        <Project
          key={project.title}
          project={project}
          reversed={index % 2 === 1}
          onClick={() => onProjectClick(project.title.toLowerCase().replace(/\s+/g, "-"))}
        />
      ))}
    </section>
  );
}


export default AllProjects;
