import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";

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
  {
    value: "JPY",
    label: "¥",
  },
];

export default function BottomRightTextFiled() {
  return (
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
          label="валюта"
          id="standard-select-currency"
          select
          defaultValue="EUR"
          variant="standard"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </Box>
  );
}
