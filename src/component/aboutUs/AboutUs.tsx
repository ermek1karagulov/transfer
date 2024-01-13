import React from "react";
import TextFieldMessages from "./TextFieldMessages";
// @ts-ignore
import telegram from "./../img/telegram.svg";
// @ts-ignore
import mail from "./../img/mail.svg";
import "./AboutUs.css";
import { motion } from "framer-motion";

const AboutUs = () => {
  const textAnimation = {
    hidden: {
      x: 10,
      opacity: 0,
    },
    visible: (custom: number) => ({
      x: 0,
      opacity: 1,
      transition: { delay: custom * 0.3 },
    }),
  };
  kkoolll;
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      className="mainConnection"
      style={{ marginBottom: "2rem" }}
      viewport={{ amount: 0.2, once: true }}
    >
      <div className="miniConnection">
        <motion.div className="themeSvyaz">
          <motion.div custom={2} variants={textAnimation}>
            <div
              className="divSvyazConnection"
              style={{ color: "rgb(1, 41, 112)" }}
            >
              Свяжитесь с нами
            </div>
          </motion.div>
        </motion.div>
        <div className="threeDivs">
          <a
            href="https://web.telegram.org/a/#882687201"
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <motion.div
              className="mainTelegram"
              custom={3}
              variants={textAnimation}
            >
              <div className="miniTelegram">
                <div>
                  <img src={telegram} alt="" />
                </div>
                <div style={{ color: "#444444" }}>
                  Напишите нам в <br /> Telegram
                </div>
              </div>
            </motion.div>
          </a>
          <a
            href="mailto: cashgoen@gmail.com"
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <motion.div
              custom={4}
              variants={textAnimation}
              className="miniMail"
            >
              <div>
                <img src={mail} />
              </div>
              <div>Напишите нам на почту</div>
              <div>cashgoen@gmail.com</div>
            </motion.div>
          </a>

          <motion.div custom={5} variants={textAnimation} className="btnTo">
            <TextFieldMessages />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutUs;
