import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import react, { useState, useEffect } from "react";
import axios from "axios";
import { API } from "../../../api";

enum TransactionType {
  SELL = "SELL",
  BUY = "BUY",
}

enum CurrencyType {
  RUB = "RUB",
  USD = "USD",
  EUR = "EUR",
}

const currencies = [
  {
    value: "USD",
    label: "$",
  },
  {
    value: "EUR",
    label: "€",
  },
  {
    value: "РУБ",
    label: "₽",
  },
];

export default function TopLeftTextField() {
  const [rate, setRate] = useState({
    RUB: 0,
    USD: 0,
    EUR: 0,
  });

  const [selectedBuyCurrency, setSelectedBuyCarrency] = useState(
    CurrencyType.USD
  );

  const [inputData, setInputData] = useState({
    sell: 1,
    buy: 96,
  });

  useEffect(() => {
    API.get("").then((v) => {
      const optima_bank = v.data.find((bank: any) => bank.slug === "optima");
      console.log(optima_bank);

      setRate({
        RUB: +optima_bank.rates[0].buy_rub,
        USD: +optima_bank.rates[0].sell_usd,
        EUR: +optima_bank.rates[0].sell_eur,
      });
      setInputData({
        sell: +optima_bank.rates[0].buy_rub,
        buy: +optima_bank.rates[0].sell_usd,
      });
    });
  }, []);
  console.log(rate);

  return (
    <div>
      <div style={{ display: "flex" }}>
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
              id="standard-number"
              label="Отправляете"
              // type="number"
              InputLabelProps={{
                shrink: true,
              }}
              value={inputData.sell}
              onChange={(e) => {
                //@ts-ignore
                if (!/\d+/.test(Number(e.target.value))) return;
                const som = Number(e.target.value) * rate[CurrencyType.RUB];
                console.log(som);

                setInputData((v) => ({
                  ...v,
                  sell: Number(e.target.value),
                  buy: som ? Number(som) / rate[selectedBuyCurrency] : 0,
                }));
              }}
              variant="standard"
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
              id="standard-select-currency"
              label="валюта"
              select
              variant="standard"
              value={CurrencyType.RUB}
            >
              <MenuItem value={CurrencyType.RUB}>{CurrencyType.RUB}</MenuItem>
            </TextField>
          </div>
        </Box>
      </div>
      <div style={{ display: "flex" }}>
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
              id="standard-number"
              label="Получает"
              // defaultValue={"15000"}
              InputLabelProps={{
                shrink: true,
              }}
              variant="standard"
              value={inputData.buy}
              onChange={(e) => {
                //@ts-ignore
                if (!/\d+/.test(Number(e.target.value))) return;

                setInputData((v) => ({
                  ...v,
                  buy: +e.target.value,
                  sell: e.target.value
                    ? rate[selectedBuyCurrency] * Number(e.target.value)
                    : 0,
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
              id="standard-select-currency"
              label="валюта"
              select
              defaultValue="РУБ"
              variant="standard"
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
              <MenuItem value={CurrencyType.USD}>{CurrencyType.USD}</MenuItem>
              <MenuItem value={CurrencyType.EUR}>{CurrencyType.EUR}</MenuItem>
            </TextField>
          </div>
        </Box>
      </div>
    </div>
  );
}
