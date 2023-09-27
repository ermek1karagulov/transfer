import { motion } from "framer-motion";
import React from "react";
import "./Information.css";

const animationScroll = {
  hidden: {
    y: 200,
    opacity: 0,
  },
  visible: (custom: number) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 },
  }),
};

const Information = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: true }}
      id="onas"
    >
      <motion.div
        custom={2}
        variants={animationScroll}
        className="miniInfoDiv"
        style={{ gap: "0.5rem", marginTop: "0rem" }}
      >
        <div>
          <div className="bgInfo" style={{ marginTop: "1rem" }}>
            <div
              className="divvvvvv"
              style={{
                width: "90%",
                padding: "20px",
              }}
            >
              <h3 className="hthre">КТО МЫ?</h3>
              <p className="pInfo">
                <span style={{ fontWeight: "700" }}>cashqoin.com</span> - ваш
                надежный партнер в мире международных финансовых операций. Нашей
                миссией является обеспечение быстрой и удобной передачи средств
                в Европу и США. Независимо от того, нужно ли вам отправить
                средства семье за границей, оплатить образование или
                инвестировать в международные проекты - мы делаем это просто и
                надежно.
              </p>
            </div>
          </div>
        </div>
        <div>
          <img
            className="imageKolleges"
            src="https://gazeta.spb.ru/wp-content/uploads/2019/03/ofis-1024x646.jpg"
            alt="коллеги"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Information;
