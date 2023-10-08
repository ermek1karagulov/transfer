import React from "react";
import "./TelegramPage.css";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import react, { useState, useEffect } from "react";
import axios from "axios";
import { API } from "../../api";
import "./TelegramPage.css";
// @ts-ignore
import russia from "./../../component/img/russia.svg";
// @ts-ignore
import usa from "./../../component/img/usa.svg";
// @ts-ignore
import euro from "./../../component/img/euro.svg";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
// import "./ButtonStart.css";
import { toast } from "react-toastify";
import Navbar from "../navbar/Navbar";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Navb from "./Navb";

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

const TelegramPage = () => {
  const Telegram_API =
    "https://api.telegram.org/bot6380903562:AAEvqODGC2EEFhuN92EZrnQvJ2I51A7t6Cg/sendMessage";

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
  // console.log(rate);\

  const [value, setValue] = React.useState("female");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  const [valuet, setValuet] = React.useState("render");
  const handleChanger = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValuet((event.target as HTMLInputElement).value);
  };

  const [telegramState, telegramSetState] = useState("");
  const [error, setError] = useState("");

  async function AddMessage() {
    setError("");
    if (inputData.sell === 0 || inputData.buy === 0 || !telegramState) {
      return setError("Введите значение!!!");
    }
    try {
      const res = await axios.post(Telegram_API, {
        //@ts-ignore
        chat_id: 886751147,
        parse_mode: "html",
        // message: <div>siuuuu</div>,
        text: {
          sell: `${inputData.sell}${CurrencyType.RUB}`,
          buy: `${inputData.buy}${selectedBuyCurrency}`,
          telegram: `${telegramState}`,
          byUsing: `${value}`,
          karta: `${valuet}`,
        },
      });
      setInputData({
        buy: 0,
        sell: 0,
      });
      telegramSetState("");
      toast.success("Менеджер скоро свяжется с вами");
      console.log(res);
    } catch (error) {
      console.log("Sending error", error);
    }
  }
  return (
    <div>
      <div>
        <Navb />
      </div>
      <div className="mainTextFieldDivv">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              //   padding: "0rem 0rem 0rem 0rem",
              justifyContent: "center",
              width: "100%",
              // padding: "1rem 1rem 0rem 0rem",
            }}
          >
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "20ch" },
              }}
              noValidate
              autoComplete="off"
            >
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
            </Box>
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "14ch" },
              }}
              noValidate
              autoComplete="off"
            >
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
            </Box>
          </div>

          <div
            className="divUf"
            style={{
              display: "flex",
              justifyContent: "center",
              // padding: "1rem 1rem 0rem 0rem",
            }}
          >
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "20ch" },
              }}
              noValidate
              autoComplete="off"
            >
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
            </Box>
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "14ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
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
            </Box>
          </div>
          <div className="formTop">
            <FormControl>
              {/* <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel> */}
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={value}
                onChange={handleChange}
              >
                <FormControlLabel
                  value="Сбербанк"
                  control={<Radio />}
                  label="Сбербанк"
                />
                <FormControlLabel
                  style={{ fontSize: "5px" }}
                  value="🏦Остальные банки (+Тинькофф до 100тыс.)"
                  control={<Radio />}
                  label="Остальные 🏦(+Тиньк.. до 100т.)"
                />
              </RadioGroup>
            </FormControl>
          </div>

          <div className="divtelega">
            <TextField
              style={{ width: "100%" }}
              className="telegrammm"
              id="outlined-textarea"
              label="Ваш Telegram"
              placeholder="@sergey"
              multiline
              maxRows={4}
              value={telegramState}
              onChange={(e) => telegramSetState(e.target.value)}
            />
          </div>

          <div className="formBottom">
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={valuet}
                onChange={handleChanger}
              >
                <FormControlLabel
                  style={{ fontSize: "5px" }}
                  value="По номеру карты"
                  control={<Radio />}
                  label="По номеру карты"
                  // 💳
                />
              </RadioGroup>
            </FormControl>
          </div>

          <div
            className="centerTextt"
            style={{ padding: "0rem 1rem 0rem 0rem" }}
          >
            <div className="minimalSumm">
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
            <div className="bottomTextt">
              <div
                style={{
                  // background: "yellow",
                  color: "red",
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: "1rem",
                }}
              >
                {error}
              </div>
              <Stack spacing={2} direction="row">
                <Button
                  onClick={() => AddMessage()}
                  variant="contained"
                  style={{ background: "#4154f1" }}
                  className="btnNaaaaa"
                >
                  Отправить
                </Button>
              </Stack>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TelegramPage;
