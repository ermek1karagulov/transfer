import { motion } from "framer-motion";

import React from "react";
import "../Header/Header.css";
import BottomLeftTextField from "./BottomTextFiled/BottomLeftTextFiled";
//@ts-ignore
import arrow from "./../img/arrow.svg";

const textAnimation = {
  hidden: {
    x: 800,
    opacity: 0,
  },
  visible: (custom: number) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.3 },
  }),
};

const Header = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      className="mainDiv"
      viewport={{ amount: 0.2, once: true }}
    >
      <div className="miniMainDiv">
        <div className="trrrr">
          <motion.h2
            className="theme"
            style={{ color: "rgb(23 44 212)" }}
            custom={4}
            variants={textAnimation}
          >
            Мгновенные денежные переводы в Зарубеж!
          </motion.h2>
          <motion.div
            className="text"
            style={{ color: "#012970" }}
            custom={5}
            variants={textAnimation}
          >
            {/* Наш сервис предоставляет вам мгновенный доступ к переводам денег в
            Европу и США. Забудьте о сложных процедурах и высоких комиссиях. */}
            Отправьте деньги в любую точку мира легко и быстро!
          </motion.div>
        </div>

        <motion.div
          custom={6}
          variants={textAnimation}
          className="textFieldHeader"
        >
          <div className="bottomTextFiled">
            <BottomLeftTextField />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Header;
