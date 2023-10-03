import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import react, { useState, useEffect } from "react";
import axios from "axios";
import { API } from "../../../api";
import "./BottomLeftTextField.css";
import ButtonStart from "./ButtonStart";
// @ts-ignore
import russia from "./../../img/russia.svg";
// @ts-ignore
import usa from "./../../img/usa.svg";
// @ts-ignore
import euro from "./../../img/euro.svg";

enum TransactionType {
  SELL = "SELL",
  BUY = "BUY",
}

enum CurrencyType {
  RUB = "RUB",
  USD = "USD",
  EUR = "EUR",
}

const DEFAULT_SELL_COUNT = 16000;

export default function BottomLeftTextField() {
  const [rate, setRate] = useState({
    RUB: 0,
    USD: 0,
    EUR: 0,
  });

  const [selectedBuyCurrency, setSelectedBuyCarrency] = useState(
    CurrencyType.EUR
  );

  const [inputData, setInputData] = useState({
    sell: 0,
    buy: 0,
  });

  useEffect(() => {
    API.get("").then((v) => {
      const optima_bank = v.data.find((bank: any) => bank.slug === "optima");
      // console.log(optima_bank);

      setRate({
        RUB: +optima_bank.rates[0].buy_rub,
        USD: +optima_bank.rates[0].sell_usd,
        EUR: +optima_bank.rates[0].sell_eur,
      });

      const som = DEFAULT_SELL_COUNT * +optima_bank.rates[0].buy_rub;
      const converted = som ? Number(som) / +optima_bank.rates[0].sell_eur : 0;
      setInputData((v) => ({
        ...v,
        sell: DEFAULT_SELL_COUNT,
        buy: converted - (converted / 100) * 5,
      }));

      // setInputData({
      //   sell: +optima_bank.rates[0].buy_rub,
      //   buy: +optima_bank.rates[0].sell_usd,
      // });
    });
  }, []);
  // console.log(rate);

  return (
    <div className="mainTextFieldDiv">
      <div style={{ display: "flex", padding: "1rem 1rem 0rem 0rem" }}>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "20ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField
              id="outlined-basic"
              label="Вы отправляете"
              variant="outlined"
              style={{ width: "100%" }}
              InputLabelProps={{
                shrink: true,
              }}
              value={inputData.sell}
              onChange={(e) => {
                //@ts-ignore
                if (!/\d+/.test(Number(e.target.value))) return;
                const som = Number(e.target.value) * rate[CurrencyType.RUB];
                const converted = som
                  ? Number(som) / rate[selectedBuyCurrency]
                  : 0;
                setInputData((v) => ({
                  ...v,
                  sell: Number(e.target.value),
                  buy: converted - (converted / 100) * 5,
                }));
              }}
            />
          </div>
        </Box>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "10ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField
              style={{ width: "90%" }}
              id="standard-select-currency"
              label="валюта"
              select
              variant="outlined"
              value={CurrencyType.RUB}
            >
              <MenuItem value={CurrencyType.RUB}>
                <img src={russia} />
                <span>⠀</span>
                {CurrencyType.RUB}
              </MenuItem>
            </TextField>
          </div>
        </Box>
      </div>

      <div style={{ display: "flex", padding: "1rem 1rem 0rem 0rem" }}>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "20ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField
              style={{ width: "100%" }}
              id="outlined-basic"
              label="Вы получаете"
              defaultValue="Вы получаете"
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
              value={inputData.buy.toFixed(2)}
              // onChange={(e) => {
              //   //@ts-ignore
              //   if (!/\d+/.test(Number(e.target.value))) return;

              //   const som = Number(e.target.value) * rate[selectedBuyCurrency];
              //   const converted = som
              //     ? Number(som) / rate[CurrencyType.RUB]
              //     : 0;

              //   setInputData((v) => ({
              //     ...v,
              //     buy: +e.target.value,
              //     sell: converted + (converted / 100) * 5,
              //   }));
              // }}
            />
          </div>
        </Box>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "10ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField
              style={{ width: "90%" }}
              id="outlined-select-currency-native"
              select
              label="валюта"
              defaultValue="РУБ"
              variant="outlined"
              value={selectedBuyCurrency}
              onChange={(e) => {
                setSelectedBuyCarrency(e.target.value as CurrencyType);
                setInputData((v) => ({
                  ...v,
                  buy: rate[e.target.value as CurrencyType],
                  sell: rate[CurrencyType.RUB],
                }));
              }}
            >
              <MenuItem value={CurrencyType.USD}>
                <img src={usa} />
                <span>⠀</span>
                {CurrencyType.USD}
              </MenuItem>
              <MenuItem value={CurrencyType.EUR}>
                <img src={euro} />
                <span>⠀</span>
                {CurrencyType.EUR}
              </MenuItem>
            </TextField>
          </div>
        </Box>
      </div>
      <div style={{ marginTop: "1rem", marginLeft: "0.5rem" }}>
        <TextField
          style={{ width: "95%" }}
          id="outlined-multiline-flexible"
          label="Telegram"
          multiline
          maxRows={4}
        />
      </div>
      <div className="centerText" style={{ padding: "1rem 1rem 0rem 0rem" }}>
        {/* <div className="komission">
          Комиссия за перевод:
          <span
            style={{ fontWeight: "700", color: "black", marginLeft: "5px" }}
          >
            5.00%
          </span>
        </div> */}
        <div className="minimalSum">
          *Минимальная сумма перевода:
          <span
            style={{
              fontWeight: "600",
              color: "black",
              marginLeft: "5px",
              marginRight: "3px",
              flexWrap: "wrap",
            }}
          >
            16000
          </span>
          RUB
        </div>
        <div className="bottomText">
          <div className="btnDivv">
            <div
              // href="#svyaz"
              style={{
                textDecoration: "none",
                // paddingTop: "10px",
                width: "100%",
              }}
            >
              <ButtonStart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
