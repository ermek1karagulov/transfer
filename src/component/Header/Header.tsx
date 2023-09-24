import { motion } from "framer-motion";

import React from "react";
import "../Header/Header.css";
import TopLeftTextField from "./TopTextFiled/TopLeftTextField";
import TopRightTextFiled from "./TopTextFiled/TopRightTextFiled";
import BottomLeftTextField from "./BottomTextFiled/BottomLeftTextFiled";
import BottomRightTextFiled from "./BottomTextFiled/BottomRightTextFiled";
//@ts-ignore
import arrow from "./../img/arrow.svg";

const textAnimation = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: (custom: number) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 },
  }),
};

const Header = () => {
  return (
    <motion.div initial="hidden" whileInView="visible" className="mainDiv">
      <div className="miniMainDiv">
        <div className="trrrr">
          <div>
            <motion.h2 className="theme" custom={1} variants={textAnimation}>
              Переводите деньги зарубеж легко и просто!
            </motion.h2>
          </div>
          <motion.div className="text" custom={2} variants={textAnimation}>
            Мгновенные, дещёвые и надеженые переводы денег между СНГ и Европой.
          </motion.div>
        </div>
        <motion.div
          custom={3}
          variants={textAnimation}
          className="textFieldHeader"
        >
          <div className="textFielder">
            <div>
              {/* <div className="topTextFiled">
                <div>
                  <TopLeftTextField />
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <img src={arrow} />
              </div> */}
              <div className="bottomTextFiled">
                <div>
                  <BottomLeftTextField />
                </div>
              </div>
              <div className="pharagraf">
                *Минимальная сумма для перевода денег состовляет 16000 RUB.
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Header;
