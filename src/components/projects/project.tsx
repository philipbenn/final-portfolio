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

function Project({ project, reversed, onClick }: ProjectProps & { onClick: () => void }) {
  return (
    <div className={`project-card ${reversed ? "reversed" : ""}`} data-aos="zoom-in">
      <div className="project-image" data-aos="fade-right">
        <img src={project.image} alt={project.title} />
      </div>
      <div className="project-info">
        <div className="project-header" data-aos="fade-left">
          {project.icon && <img src={project.icon} alt="" className="project-icon" />}
          <h2>{project.title}</h2>
        </div>
        <p>{project.description}</p>
        <div className="tech-stack">
          {project.technologies.map((tech, index) => (
            <span key={index} className="tech-item-project">{tech}</span>
          ))}
        </div>
        <div className="project-links">
          <a onClick={onClick} className="show-more-btn">Show More</a>
        </div>
      </div>
    </div>
  );
}


export default Project;
