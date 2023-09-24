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
        style={{ gap: "0.5rem", marginTop: "3rem" }}
      >
        <div>
          <div className="bgInfo" style={{ marginTop: "2rem" }}>
            <div
              style={{
                width: "100%",
                padding: "40px",
              }}
            >
              <h3 className="hthre">КТО МЫ?</h3>
              <h2 className="htwo">Сервис заботы о деньгах</h2>
              <p className="pInfo">
                Conlybus.com — это сервис заботы о Ваших деньгах и виртуальных
                активах. Надо ли Вам их перевести зарубеж, либо же оплатить за
                услуги, или же может быть обналичить их, мы с этим всем Вам
                поможем! Мы осуществляем переводы денег из стран СНГ во все
                страны Евросоюза и дальнего зарубежья. Будь то заплатить за
                счёт-фактуру либо же отправить деньги деньги на поддержку детей
                которые находятся на учёбе, со всем этим Вы попали в правильное
                место :)"
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
