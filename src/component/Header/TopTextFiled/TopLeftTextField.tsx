import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import react, { useState, useEffect } from "react";
import axios from "axios";

enum TransactionType {
  SELL = "SELL",
  BUY = "BUY",
}

enum CurrencyType {
  RUB = "RUB",
  USD = "USD",
  EUR = "EUR",
}

const currencies = {
  [TransactionType.SELL]: {
    [CurrencyType.RUB]: {
      value: "РУБ",
      label: "₽",
    },
  },
  [TransactionType.BUY]: {
    [CurrencyType.USD]: {
      value: "USD",
      label: "$",
    },
    [CurrencyType.EUR]: {
      value: "EUR",
      label: "€",
    },
  },
};

export default function TopLeftTextField() {
  const [rate, setRate] = useState({
    RUB: 0,
    USD: 0,
    EUR: 0,
  });

  return (
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
            // defaultValue={"15000"}
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="standard"
          />
          <MenuItem value={rate[CurrencyType.RUB]}>{CurrencyType.RUB}</MenuItem>
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
          >
            <MenuItem value={rate[CurrencyType.USD]}>
              {CurrencyType.USD}
            </MenuItem>
            <MenuItem value={rate[CurrencyType.EUR]}>
              {CurrencyType.EUR}
            </MenuItem>
          </TextField>
        </div>
      </Box>
    </div>
  );
}
