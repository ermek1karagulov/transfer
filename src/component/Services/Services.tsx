import React from "react";
import "./Services.css";
// @ts-ignore
import currency from "./../img/currency.svg";
// @ts-ignore
import card from "./../img/card.svg";
// @ts-ignore
import dollar from "./../img/dollar.svg";

const Services = () => {
  return (
    <div className="mainService">
      <div className="miniMainService">
        <div className="themeService">УСЛУГИ</div>
        <div>
          <h2 className="descriptionService">
            Инструменты для ваших финансовых потребностей
          </h2>
        </div>
        {/* <div className="mainDivCard"> */}
        <div className="miniMainDivCard">
          <div className="cardsServiceone">
            <div className="bgCurrency">
              <img
                style={{ display: "flex", alignItems: "center" }}
                src={currency}
                alt=""
              />
            </div>
            <h4>Переводы</h4>
            <p className="pfaragraf">
              Мы предоставляем возможность международных переводов денег между
              СНГ и Европой и делаем это мгновенно, с самым лучшим курсом
              обмена, без похода в физические отделения после регистрации на
              сайте которая занимает 1-3 минуты.
            </p>
          </div>
          <div>
            <div className="cardsServicetwo">
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
            </div>
          </div>
          <div>
            <div className="cardsServicethree">
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
            </div>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Services;
