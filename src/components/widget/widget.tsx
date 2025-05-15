import { useState, useEffect } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import "./styles/widget.css";

function Widget() {
  const [isScrolling, setIsScrolling] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolling(true);
    } else {
      setIsScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToExpertise = () => {
    const expertiseSection = document.getElementById("work");
    if (expertiseSection) {
      const offset = 100;
      const topPos =
        expertiseSection.getBoundingClientRect().top +
        window.pageYOffset -
        offset;
      window.scrollTo({ top: topPos, behavior: "smooth" });
    }
  };

  return (
    <div
      className={`widget ${isScrolling ? "hidden" : ""}`}
      onClick={scrollToExpertise}
    >
      <DotLottieReact
        src="https://lottie.host/620bef63-417e-481b-9cd9-30ed85702b53/Kd3cVrAiCJ.lottie"
        loop
        autoplay
        speed={1.5}
      />
    </div>
  );
}

export default Widget;
