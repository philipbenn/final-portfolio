import React from "react";
import "./styles/contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import info from "../../data/user";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faMailBulk } from "@fortawesome/free-solid-svg-icons";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="contact" data-aos="fade-up">
      <p id="contact-text">{info.contact.description}</p>
      <div className="buttom-contact-container">
        <div className="social-links-contact">
          <a
            href={info.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a href={info.socials.email} aria-label="Email">
            <FontAwesomeIcon icon={faMailBulk} size="2x" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
