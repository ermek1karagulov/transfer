import React from "react";

const Navb = () => {
  return (
    <div
      style={{
        backgroundColor: "#1976d2",
        display: "flex",
        justifyContent: "center",
        height: "60px",
      }}
    >
      <a
        href="/"
        style={{ textDecoration: "none", color: "white", paddingTop: "12px" }}
        className="ceshGoen"
      >
        Cashgoen
      </a>
    </div>
  );
};

export default Navb;
