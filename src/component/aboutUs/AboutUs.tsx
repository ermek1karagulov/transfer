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
          <a
            href="https://web.telegram.org/a/#882687201"
            target="_blank"
            style={{ textDecoration: "none" }}
          >
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
          </a>
          <a
            href="mailto: cashgoen@gmail.com"
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <div className="miniMail">
              <div>
                <img src={mail} alt="" />
              </div>
              <div>Напишите нам на почту</div>
              <div>cashgoen@gmail.com</div>
            </div>
          </a>

          <div className="btnTo">
            <TextFieldMessages />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
