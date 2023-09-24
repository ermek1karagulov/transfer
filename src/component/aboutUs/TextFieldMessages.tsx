import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "./TextFieldMessages.css";
import react, { useState } from "react";
import axios from "axios";
import { API } from "../../const";

export default function TextFieldMessages() {
  const [state, setState] = useState({
    name: "",
    email: "",
    theme: "",
    description: "",
  });

  function addMessages() {
    try {
      // const res = axios.post(`${API}`);
      console.log(" ghbdtn", 1111);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div className="twoTextFiled" style={{ display: "flex" }}>
        <div>
          <TextField
            id="outlined-textarea"
            label="Имя"
            multiline
            value={state.name}
            onChange={(e) => setState({ ...state, name: e.target.value })}
          />
        </div>
        <div>
          <TextField
            id="outlined-textarea"
            label="Ваш Email"
            multiline
            value={state.email}
            onChange={(e) => setState({ ...state, email: e.target.value })}
          />
        </div>
      </div>
      <div>
        <TextField
          className="textFieldOne"
          style={{ width: "96%" }}
          id="outlined-textarea"
          label="Тема сообщения"
          multiline
          value={state.theme}
          onChange={(e) => setState({ ...state, theme: e.target.value })}
        />
      </div>
      <div>
        <TextField
          style={{ width: "96%" }}
          className="textFieldTwo"
          id="outlined-multiline-static"
          // label="Multiline"
          multiline
          value={state.description}
          onChange={(e) => setState({ ...state, description: e.target.value })}
          rows={4}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <button className="btnBottom" onClick={() => addMessages()}>
          Отправить сообщение
        </button>
      </div>
    </Box>
  );
}
