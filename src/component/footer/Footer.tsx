import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="conteiner">
        <div>
          &copy; Copyright
          <strong>
            <span style={{ marginLeft: "0.5rem" }}>conlybus</span>
          </strong>
          . All Rights Reserved
        </div>
        <div>Designed by J&A&J</div>
      </div>
    </footer>
  );
};

export default Footer;
