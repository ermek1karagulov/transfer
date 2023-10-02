import React from "react";
import "./Services.css";
// @ts-ignore
import currency from "./../img/currency.svg";
// @ts-ignore
import card from "./../img/card.svg";
// @ts-ignore
import dollar from "./../img/dollar.svg";
import { motion } from "framer-motion";

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

const Services = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.2, once: true }}
      className="mainService"
    >
      <div className="miniMainService">
        <motion.div
          className="themeService"
          custom={2}
          variants={animationScroll}
        >
          УСЛУГИ
        </motion.div>
        {/* <div> */}
        <motion.h2
          custom={3}
          variants={animationScroll}
          className="descriptionService"
        >
          Инструменты для ваших финансовых потребностей
        </motion.h2>
        {/* </div> */}
        {/* <div className="mainDivCard"> */}
        <div className="miniMainDivCard">
          <motion.div
            custom={4}
            variants={animationScroll}
            className="cardsServiceone"
          >
            <div className="bgCurrency">
              <img
                style={{ display: "flex", alignItems: "center" }}
                src={currency}
                alt=""
              />
            </div>
            <h4>Переводы</h4>
            <p className="pfaragraf">
              Сashgoen.com предоставляет возможность международных переводов
              денег между СНГ и Европой и делаем это мгновенно, без похода в
              физические отделения после регистрации на сайте которая занимает
              1-3 минуты.
            </p>
          </motion.div>
          <div>
            <motion.div
              custom={5}
              variants={animationScroll}
              className="cardsServicetwo"
            >
              <div className="bgCurrencyTwo">
                <img
                  style={{
                    display: "flex",
                    alignItems: "center",
                    // background: "#fde3c4",
                  }}
                  src={card}
                  alt=""
                />
              </div>
              <h4>Банковские карты</h4>
              <p className="pfaragraf">
                Эмитируем виртуальные/физические карты VISA с бесплатной
                доставкой по миру для оплаты услуг и товаров зарубежом с личным
                кабинетом на нашем сервисе и удобным пополнением по самому
                выгодному курсу!
              </p>
            </motion.div>
          </div>
          <div>
            <motion.div
              custom={6}
              variants={animationScroll}
              className="cardsServicethree"
            >
              <div className="bgCurrencyThree">
                <img
                  style={{ display: "flex", alignItems: "center" }}
                  src={dollar}
                  alt=""
                />
              </div>
              <h4>Обналичивание</h4>
              <p className="pfaragraf">
                Предоставляем услуги обналичивания криптовалют в фиатные деньги.
                На данный момент поддерживаем обналичивание USDT в евро с
                дальнейшим выводом на Ваш IBAN-счёт в Европе либо банковский
                счёт в США.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
    // </div>
  );
};

export default Services;
