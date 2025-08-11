import React, { useState, useEffect } from "react";
import "./styles/education.css";
import info from "../../data/user";
import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionPanel,
} from "@fluentui/react-components";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Education: React.FC = () => {
  const [openItems, setOpenItems] = useState<string[]>([]);

  useEffect(() => {
    setOpenItems(["0", "1"]);
  }, []);

  return (
    <div
      className="content-wrapper-education"
      id="education"
      data-aos="fade-left"
    >
      <div className="accordion-container-education">
        <div className="cv-title-wrapper">
          <p className="cv-title">Education</p>
        </div>
        <Accordion
          collapsible
          multiple
          openItems={openItems}
          onToggle={(event, data) => {
            setOpenItems(data.openItems as string[]);
          }}
        >
          {info.cv.education.map((edu, index) => (
            <AccordionItem value={index.toString()} key={index}>
              <AccordionHeader>
                <div className="edu-title">{edu.school || edu.title}</div>
              </AccordionHeader>
              <AccordionPanel>
                <div className="edu-details">
                  <div className="edu-degree">{edu.degree}</div>
                  <div className="edu-duration">{edu.duration}</div>
                  <div className="edu-description">{edu.description}</div>
                </div>
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <div className="cv-link-wrapper">
        <DotLottieReact
          src="https://lottie.host/5272d83b-3edc-4871-9288-987bb3d2dfb0/cYx94vQw2b.lottie"
          loop
          autoplay
          className="cv-arrow-lottie"
        />
        <a
          href="https://drive.google.com/file/d/1Dwhn54xdWVuUI-NfbCWkQr8utZ7fFBHt/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="cv-download-button"
        >
          View Full CV
        </a>
      </div>
    </div>
  );
};

export default Education;
