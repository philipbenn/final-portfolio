import "./styles/project.css";
import { Link } from "react-router-dom";

interface ProjectProps {
  project: {
    image: string;
    icon?: string;
    title: string;
    description: string;
    technologies: string[];
    deployLink?: string;
    githubLink?: string;
  };
  reversed?: boolean;
}

function Project({ project, reversed }: ProjectProps) {
  return (
    <div
      className={`project-card ${reversed ? "reversed" : ""}`}
      data-aos="zoom-in"
      data-aos-duration="800"
    >
      <div
        className="project-image"
        data-aos="fade-right"
        data-aos-duration="800"
      >
        <img src={project.image} alt={project.title} />
      </div>
      <div className="project-info">
        <div
          className="project-header"
          data-aos="fade-left"
          data-aos-duration="800"
        >
          {project.icon && (
            <img
              src={project.icon}
              alt={`${project.title} icon`}
              className="project-icon"
            />
          )}
          <h2>{project.title}</h2>
        </div>
        <p data-aos="fade-up" data-aos-duration="800">
          {project.description}
        </p>
        <div className="tech-stack" data-aos="fade-up" data-aos-duration="800">
          {project.technologies.map((tech, index) => (
            <span key={index} className="tech-item-project">
              {tech}
            </span>
          ))}
        </div>
        <div
          className="project-links"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <Link
            to={`/projects/${project.title.toLowerCase().replace(/\s+/g, "-")}`}
          >
            Show More
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Project;