import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import react, { useState, useEffect } from "react";
import axios from "axios";
import { API } from "../../../const";

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

  const [selectedBuyCarrency, setSelectedBuyCarrency] = useState(
    CurrencyType.USD
  );

  const [inputData, setInputData] = useState({
    sell: 1,
    buy: 96,
  });

  useEffect(() => {
    axios.get(API).then((v) => {
      console.log(v.data);

      setRate({
        RUB: 1,
        USD: v.data.Valute.USD.Value,
        EUR: v.data.Valute.EUR.Value,
      });
    });
  }, []);
  console.log(inputData);

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
                console.log(rate[selectedBuyCarrency] / Number(e.target.value));

                setInputData((v) => ({
                  ...v,
                  sell: Number(e.target.value),
                  buy: e.target.value
                    ? Number(e.target.value) / rate[selectedBuyCarrency]
                    : 0,
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
              onChange={(e) =>
                setInputData((v) => ({
                  ...v,
                  buy: +e.target.value,
                  sell: e.target.value
                    ? rate[selectedBuyCarrency] * Number(e.target.value)
                    : 0,
                }))
              }
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
              value={selectedBuyCarrency}
              onChange={(e) =>
                setSelectedBuyCarrency(e.target.value as CurrencyType)
              }
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
