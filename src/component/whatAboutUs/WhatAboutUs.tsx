import React from "react";
import "./WhatAboutUs.css";
import { motion } from "framer-motion";

const WhatAboutUs = () => {
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
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      className="mainConnection"
      style={{ marginBottom: "2rem" }}
      viewport={{ amount: 0.2, once: true }}
    >
      <motion.div className="mainAboutUs" custom={3} variants={textAnimation}>
        <div className="otzyvy">Отзывы</div>
        <div className="whatAboutUs">Что про нас говорят</div>
        <a
          href="https://www.trustpilot.com/review/conlybus.com?utm_medium=trustbox&utm_source=MicroReviewCount"
          style={{ textDecoration: "none" }}
          target="_blak"
        >
          <div
            className="seeOur"
            style={{ textAlign: "center", display: "flex" }}
          >
            See our 26 reviews on⠀
            <span>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Trustpilot_Logo_%282022%29.svg/1280px-Trustpilot_Logo_%282022%29.svg.png"
                style={{ width: "60px", height: "16px", alignItems: "center" }}
              />
            </span>
          </div>
        </a>
      </motion.div>
    </motion.div>
  );
};

export default WhatAboutUs;
