import * as React from "react";
import { useEffect, useState } from "react";
import { Icon } from "@fluentui/react/lib/Icon";
import "./styles/backToTopWidget.css";

const BackToTopWidget: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    setIsVisible(window.scrollY > 100);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="back-to-top"
      onClick={scrollToTop}
      role="button"
      aria-label="Back to top"
      style={{
        opacity: isVisible ? 1 : 0,
        visibility: isVisible ? "visible" : "hidden",
        pointerEvents: isVisible ? "auto" : "none",
      }}
    >
      <Icon iconName="SkypeCircleArrow" />
    </div>
  );
};

export default BackToTopWidget;
