import info from "../../data/user.js";
import Project from "./project";
import "./styles/allProjects.css";

function AllProjects() {
  return (
    <section className="projects-section" id="work">
      {info.projects.data.map((project, index) => (
        <Project
          key={index}
          project={project}
          reversed={index % 2 !== 0}
          data-aos="fade-up"
          data-aos-delay={`${index * 100}`}
        />
      ))}
    </section>
  );
}

export default AllProjects;