import * as React from "react";
import "./styles/footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>
          &copy; {new Date().getFullYear()} Philips Portfolio. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
