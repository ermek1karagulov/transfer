import React from "react";
import Header from "./component/Header/Header";
import Information from "./component/information/Information";
import AboutUs from "./component/aboutUs/AboutUs";
import "./App.css";
import AccordionMy from "./component/accardion/Accardion";
import Navbar from "./component/navbar/Navbar";
import Services from "./component/Services/Services";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <div id="onas">
        <Information />
      </div>
      <div>
        <Services />
      </div>
      <div id="Fag">
        <AccordionMy />
      </div>
      <div id="svyaz">
        <AboutUs />
      </div>
      <div className="toastify"></div>
    </div>
  );
}

export default App;
