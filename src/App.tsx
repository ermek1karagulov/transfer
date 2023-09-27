import React from "react";
import Header from "./component/Header/Header";
import Information from "./component/information/Information";
import AboutUs from "./component/aboutUs/AboutUs";
import "./App.css";
import AccordionMy from "./component/accardion/Accardion";

function App() {
  return (
    <div className="App">
      <div className="mainNaavbar">
        <div className="cashQoin">CashQoin</div>
        <div className="triDiv">
          <div className="oNAs">
            <a
              href="#onas"
              style={{ textDecoration: "none", color: "#012970" }}
            >
              О нас
            </a>
          </div>
          <div className="FAQtriDiv">
            <a href="#Fag" style={{ textDecoration: "none", color: "#012970" }}>
              FAQ
            </a>
          </div>
          <div className="svyaztri">
            <a
              href="#svyaz"
              style={{ textDecoration: "none", color: "#012970" }}
            >
              Связаться
            </a>
          </div>
          <div></div>
        </div>
      </div>
      <Header />
      <div id="onas">
        <Information />
      </div>
      <div id="Fag">
        <AccordionMy />
      </div>
      <div id="svyaz">
        <AboutUs />
      </div>
    </div>
  );
}

export default App;
