import "./styles/projectDetail.css";
import Header from "../common/header";
import Footer from "../common/footer";
import BackToTopWidget from "../widget/backToTopWidget";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useEffect } from "react";

function ProjectDetail({ project, onBack }: { project: any; onBack: () => void }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <div className="lottie-arrow-wrapper" data-aos="fade-right">
        <p className="go-back-text">Go Back</p>
        <div className="lottie-arrow" onClick={onBack}>
          <DotLottieReact
            src="https://lottie.host/5d129360-6f2a-4d34-80ab-8f128b70a153/8bfdtHa2uk.lottie"
            loop
            autoplay
          />
        </div>
      </div>
      <BackToTopWidget />
      <main className="project-detail" data-aos="fade-up">
        <h1>{project.title}</h1>
        <div className="tech-stack">
            {project.technologies.map((tech: string, index: number) => (
            <span key={index} className="tech-item-project">{tech}</span>
            ))}
        </div>
        <div className="project-content">
          <div className="description">
            <p>{project.longDescription}</p>
          </div>
          {(project.deployLink || project.githubLink) && (
            <div className="links-column">
              {project.deployLink && (
                <a href={project.deployLink} target="_blank" rel="noreferrer" className="deploy-link">Try Demo</a>
              )}
              {project.githubLink && (
                <a href={project.githubLink} target="_blank" rel="noreferrer" className="github-link">View Code</a>
              )}
            </div>
          )}
        </div>
        {project.allImages?.length > 0 && (
          <div className="project-images-detail">
            {project.allImages.map((image: string, index: number) => (
              <img key={index} src={image} alt="" className="project-image-detail" />
            ))}
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}


export default ProjectDetail;
