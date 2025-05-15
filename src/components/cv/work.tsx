import React, { useState, useEffect } from "react";
import "./styles/work.css";
import info from "../../data/user";
import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionPanel,
} from "@fluentui/react-components";

const Work: React.FC = () => {
  const [openItems, setOpenItems] = useState<string[]>([]);

  useEffect(() => {
    setOpenItems(["0", "1"]);
  }, []);

  return (
    <div className="content-wrapper-cv" id="expertise" data-aos="fade-right">
      <div className="accordion-container">
        <div className="cv-title-wrapper">
          <p className="cv-title">Work Experience</p>
        </div>
        <Accordion
          collapsible
          multiple
          openItems={openItems}
          onToggle={(event, data) => {
            setOpenItems(data.openItems as string[]);
          }}
        >
          {info.cv.work.map((job, index) => (
            <AccordionItem value={index.toString()} key={index}>
              <AccordionHeader>
                <div className="cv-job-title">{job.title}</div>
              </AccordionHeader>
              <AccordionPanel>
                <div className="work">
                  <img
                    src={job.image}
                    alt={job.subtitle}
                    className="cv-image"
                  />
                  <div className="cv-details">
                    <div className="cv-subtitle">{job.subtitle}</div>
                    <div className="cv-duration">{job.duration}</div>
                    <div className="cv-description">{job.description}</div>
                    {job.techstack && job.techstack.length > 0 && (
                      <div className="cv-technologies">
                        <p className="cv-technologies-title">
                          Technologies used:
                        </p>
                        <div className="cv-tech-row">
                          {job.techstack.map((tech, techIndex) => (
                            <div key={techIndex} className="cv-tech-item">
                              {tech}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default Work;
