import React from "react";
import Navbar from "../navbar/Navbar";
import Header from "../Header/Header";
import Information from "../information/Information";
import Services from "../Services/Services";
import AccordionMy from "../accardion/Accardion";
import WhatAboutUs from "../whatAboutUs/WhatAboutUs";
import AboutUs from "../aboutUs/AboutUs";
import { ToastContainer } from "react-toastify";

const mainroutes = () => {
  return (
    <div className="Ap" style={{ display: "flex", flexDirection: "column" }}>
      <Navbar />
      <Header />
      <div id="onas">
        <Information />
      </div>
      <div id="uslugi">
        <Services />
      </div>
      <div id="Fag">
        <AccordionMy />
      </div>
      <div id="otzyvy">
        <WhatAboutUs />
      </div>
      <div id="svyaz">
        <AboutUs />
      </div>
    </div>
  );
};

export default mainroutes;
