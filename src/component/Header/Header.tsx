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
    <motion.div initial="hidden" whileInView="visible" className="mainDiv">
      <div className="miniMainDiv">
        <div className="trrrr">
          <motion.h2 className="theme" custom={2} variants={textAnimation}>
            Мгновенные денежные переводы в Зарубеж:
          </motion.h2>
        </div>
        {/* <motion.div className="text" custom={2} variants={textAnimation}>
            Наш сервис предоставляет вам мгновенный доступ к переводам денег в
            Европу и США. Забудьте о сложных процедурах и высоких комиссиях.
            Отправьте деньги в любую точку мира легко и быстро!
          </motion.div> */}
        <motion.div
          custom={3}
          variants={textAnimation}
          className="textFieldHeader"
        >
          <div className="textFielder">
            <div>
              <div className="bottomTextFiled">
                <div>
                  <BottomLeftTextField />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Header;
