import { useParams, useNavigate } from "react-router-dom";
import info from "../../data/user.js";
import "./styles/projectDetail.css";
import Header from "../common/header";
import Footer from "../common/footer";
import BackToTopWidget from "../widget/backToTopWidget";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useEffect } from "react";

function ProjectDetail() {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const project = info.projects.data.find(
    (p) => p.title.toLowerCase().replace(/\s+/g, "-") === projectId
  );

  if (!project) {
    return (
      <>
        <Header />
        <main className="project-detail" data-aos="fade-up">
          <h1>Project not found.</h1>
        </main>
        <Footer />
      </>
    );
  }

  const handleArrowClick = () => {
    navigate("/");
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 0);
  };

  return (
    <>
      <Header />
      <div
        className="lottie-arrow-wrapper"
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        <p className="go-back-text">Go Back</p>
        <div className="lottie-arrow" onClick={handleArrowClick}>
          <DotLottieReact
            src="https://lottie.host/5d129360-6f2a-4d34-80ab-8f128b70a153/8bfdtHa2uk.lottie"
            loop
            autoplay
          />
        </div>
      </div>
      <BackToTopWidget />
      <main
        className="project-detail"
        data-aos="fade-up"
        data-aos-duration="1200"
      >
        <h1>{project.title}</h1>
        <div className="tech-stack" data-aos="fade-left" data-aos-delay="200">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="tech-item-project"
              data-aos="zoom-in"
              data-aos-delay={300 + index * 100}
            >
              {tech}
            </span>
          ))}
        </div>
        <div
          className="project-content"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div className="description">
            <p>{project.longDescription}</p>
          </div>
          {(project.deployLink || project.githubLink) && (
            <div
              className="links-column"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              {project.deployLink && (
                <a
                  href={project.deployLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="deploy-link"
                >
                  Try Demo
                </a>
              )}
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-link"
                >
                  View Code
                </a>
              )}
            </div>
          )}
        </div>

        {project.allImages && project.allImages.length > 0 && (
          <div
            className="project-images-detail"
            data-aos="fade-up"
            data-aos-delay="800"
          >
            {project.allImages.map((image, index) => (
              // eslint-disable-next-line
              <img
                key={index}
                src={image}
                alt="No image available"
                className="project-image-detail"
                data-aos="zoom-in"
                data-aos-delay={900 + index * 150}
              />
            ))}
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}

export default ProjectDetail;