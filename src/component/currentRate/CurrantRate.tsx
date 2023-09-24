import { motion } from "framer-motion";

import React from "react";
import "./CurrentRate.css";
import TableCurrentRate from "../tableCurrentRate/TableCurrentRate";

const animationScroll = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: (custom: number) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 },
  }),
};

const CurrantRate = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.9, once: true }}
      className="miniCurrentDiv"
    >
      <motion.div custom={2} variants={animationScroll}>
        <div className="themeCurrenRate">КУРСЫ ОБМЕНА ВАЛЮТ</div>
        <div className="informationCurrentRate">
          Наш курс валют на данный момент
        </div>
        <div className="tableCurrentRate" style={{ marginTop: "2rem" }}>
          <TableCurrentRate />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CurrantRate;
