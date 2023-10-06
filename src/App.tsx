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
import WhatAboutUs from "./component/whatAboutUs/WhatAboutUs";
import { Route, Routes } from "react-router-dom";
import TelegramPage from "./component/TelegramPage.tsx/TelegramPage";
import Mainroutes from "./component/TelegramPage.tsx/Mainroutes";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Mainroutes />} />
        <Route path="/toTelegram" element={<TelegramPage />} />
      </Routes>
      <div className="toastify">
        <ToastContainer
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "2rem",
          }}
        />
      </div>
    </>
  );
}

export default App;
