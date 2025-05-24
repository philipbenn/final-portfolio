/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from "react";
import { FontIcon } from "@fluentui/react/lib/Icon";
import "./styles/header.css";
import info from "../../data/user";
import { useLocation, useNavigate } from "react-router-dom";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme === "dark" : true;
  });

  const isProjectDetailPage = location.pathname.includes("/projects/");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.style.setProperty("--dark-color", "#15212C");
      root.style.setProperty("--white-color", "#f7f7f7");
    } else {
      root.style.setProperty("--dark-color", "#ffffff");
      root.style.setProperty("--white-color", "#000000");
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };

  const scrollToSection = (id: string, top?: number) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 85;
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: top ?? offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const handleNavClick = (sectionId: string, top?: number) => {
    if (!isProjectDetailPage) {
      scrollToSection(sectionId, top);
    } else {
      navigate(`/#${sectionId}`);
    }
  };

  return (
    <header className={isScrolled ? "scrolled" : ""}>
      <div className="header">
        <div className="header-wrap">
          <div className="header-inner">
            <ul className="nav">
              <li>
                <a onClick={() => handleNavClick("content", 0)}>
                  <span>01.</span>
                  {info.navbar.home}
                </a>
              </li>
              <li>
                <a onClick={() => handleNavClick("projects-section")}>
                  <span>02.</span>
                  {info.navbar.work}
                </a>
              </li>
              <li>
                <a onClick={() => handleNavClick("expertise")}>
                  <span>03.</span>
                  {info.navbar.xp}
                </a>
              </li>
              <li>
                <a onClick={() => handleNavClick("contact")}>
                  <span>04.</span>
                  {info.navbar.contact}
                </a>
              </li>
            </ul>
            <div className="theme-toggle-icon" onClick={toggleTheme}>
              <FontIcon iconName={"Light"} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;