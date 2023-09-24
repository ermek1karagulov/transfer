import React from "react";
import Navbar from "./component/Navbar/Navbar";
import Header from "./component/Header/Header";
import CurrantRate from "./component/currentRate/CurrantRate";
import Information from "./component/information/Information";
import Services from "./component/Services/Services";
import AboutUs from "./component/aboutUs/AboutUs";
import "./App.css";
import Footer from "./component/footer/Footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <CurrantRate />
      <Information />
      {/* <Services /> */}
      <AboutUs />
      <Footer />
    </div>
  );
}

export default App;
