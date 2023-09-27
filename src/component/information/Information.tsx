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
              <h2 className="htwo">Сервис заботы о деньгах</h2>
              <p className="pInfo">
                <div>
                  <span style={{ fontWeight: "700" }}>
                    Быстрота и надежность:
                  </span>
                  Мы понимаем, что время - деньги, поэтому мы гарантируем
                  быструю обработку и надежную доставку ваших средств. Ваши
                  деньги попадут в нужное место в точное время.Прозрачность и
                  доступность:
                </div>
                <div>
                  <span style={{ fontWeight: "700" }}>
                    Глобальное присутствие:
                  </span>
                  Наша сеть охватывает Европу, США и ряд других стран, что
                  позволяет нам предоставлять услуги в самых разных частях мира.
                  Независимо от вашего местоположения, мы всегда рядом, чтобы
                  помочь вам сделать финансовые операции легкими и удобными.
                </div>
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
