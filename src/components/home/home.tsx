import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import info from "../../data/user.js";
import "./styles/home.css";

function Home() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-text" data-aos="fade-up">
          <h1>{info.name}</h1>
          <p data-aos="fade-left">{info.description}</p>
          <div className="socials">
            <a
              href={info.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              data-aos="fade-right"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              href={info.socials.github}
              target="_blank"
              rel="noreferrer"
              data-aos="fade-right"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href={`mailto:${info.socials.email}`} data-aos="fade-right">
              <FontAwesomeIcon icon={faMailBulk} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
