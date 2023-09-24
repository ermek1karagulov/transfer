import React from "react";
import TextFieldMessages from "./TextFieldMessages";
// @ts-ignore
import telegram from "./../img/telegram.svg";
// @ts-ignore
import mail from "./../img/mail.svg";
import "./AboutUs.css";
import { color } from "framer-motion";

const AboutUs = () => {
  return (
    <div className="mainConnection">
      <div className="miniConnection">
        <div className="themeSvyaz">
          <div>
            <h4 className="hfourConnection">СВЯЗАТЬСЯ</h4>
          </div>
          <div>
            <div className="divSvyazConnection">Свяжитесь с нами</div>
          </div>
        </div>
        <div className="threeDivs">
          <div className="mainTelegram">
            <div className="miniTelegram">
              <div>
                <img src={telegram} alt="" />
              </div>
              <div style={{ color: "#444444" }}>
                Напишите нам в <br /> Telegram
              </div>
            </div>
          </div>
          <div className="miniMail">
            <div>
              <img src={mail} alt="" />
            </div>
            <div>Напишите нам на почту</div>
            <div>karagulovermek0@gmail.com</div>
          </div>
          <div className="btnTo">
            <TextFieldMessages />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
