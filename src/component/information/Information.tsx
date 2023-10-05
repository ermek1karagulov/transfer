import { motion } from "framer-motion";
import React from "react";
import "./Information.css";

const animationScroll = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: (custom: number) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.3 },
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
      <motion.div custom={3} variants={animationScroll} className="miniInfoDiv">
        <div className="bgInfo" style={{ marginTop: "1rem" }}>
          <div
            className="divvvvvv"
            style={{
              padding: "20px",
            }}
          >
            <h3 className="hthre" style={{ color: "rgb(23 44 212)" }}>
              КТО МЫ?
            </h3>
            <p className="pInfo">
              <span style={{ fontWeight: "600" }}>Cashgoen.com</span> - Ваш
              надежный партнер в мире международных финансовых операций. Нашей
              миссией является обеспечение быстрой и удобной передачи средств в
              Европу и США. Независимо от того, нужно ли вам отправить средства
              семье за границей, оплатить образование или инвестировать в
              международные проекты - мы делаем это просто и надежно.
            </p>
          </div>
        </div>
        <div style={{ marginLeft: "5px" }}>
          <img
            className="imageKolleges"
            src="https://cdn.dribbble.com/users/1726973/screenshots/6539903/men-shaking-hands_4x.jpg?compress=1&resize=400x300"
            // src="https://fotomelia.com/wp-content/uploads/edd/2016/01/banque-d-images-et-photos-gratuites-libres-de-droits-t%C3%A9l%C3%A9chargement-gratuits-197-1560x1560.jpg"
            alt="коллеги"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Information;
