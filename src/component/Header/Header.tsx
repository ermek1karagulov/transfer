import { motion } from "framer-motion";

import React from "react";
import "../Header/Header.css";
import BottomLeftTextField from "./BottomTextFiled/BottomLeftTextFiled";
//@ts-ignore
import arrow from "./../img/arrow.svg";

const textAnimation = {
  hidden: {
    x: 10,
    opacity: 0,
  },
  visible: (custom: number) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.4 },
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
            style={{ color: "#012970" }}
            custom={2}
            variants={textAnimation}
          >
            Мгновенные денежные переводы в зарубеж!
          </motion.h2>
          <motion.div
            className="text"
            style={{ color: "#444444" }}
            custom={3}
            variants={textAnimation}
          >
            {/* Наш сервис предоставляет вам мгновенный доступ к переводам денег в
            Европу и США. Забудьте о сложных процедурах и высоких комиссиях. */}
            Отправьте деньги в любую точку мира легко и быстро!
          </motion.div>
        </div>

        <motion.div
          custom={4}
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
