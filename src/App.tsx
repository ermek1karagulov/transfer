import React from "react";
import Navbar from "./component/Navbar/Navbar";
import Header from "./component/Header/Header";
import Information from "./component/information/Information";
import Services from "./component/Services/Services";
import AboutUs from "./component/aboutUs/AboutUs";
import "./App.css";
import AccordionMy from "./component/accardion/Accardion";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Information />
      <AccordionMy />
      {/* <Services /> */}
      <AboutUs />
    </div>
  );
}

export default App;
