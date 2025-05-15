import React from "react";
import info from "../../data/user";
import "./styles/techStack.css";

const TechStack: React.FC = () => {
  const duplicatedSkills = [...info.techstack.skills, ...info.techstack.skills];

  return (
    <section id="techstack" className="techstack">
      <div className="content-wrapper-techstack">
        <div className="tech-stack-container">
          <h2 className="techstack-title-wrapper">
            <span className="techstack-title">Tech Stack</span>
          </h2>
          <div className="tech-stack-wrapper">
            {duplicatedSkills.map((tech, index) => (
              <div key={index} className="tech-item">
                <img src={tech.imgSrc} alt={tech.name} className="tech-icon" />
                <span className="tech-name">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
