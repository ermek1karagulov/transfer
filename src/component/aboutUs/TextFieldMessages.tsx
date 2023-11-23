import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "./TextFieldMessages.css";
import react, { useState } from "react";
import axios from "axios";

const Telegram_API =
  "https://api.telegram.org/bot6380903562:AAEvqODGC2EEFhuN92EZrnQvJ2I51A7t6Cg/sendMessage";

export default function TextFieldMessages() {
  const [state, setState] = useState({
    name: "",
    email: "",
    theme: "",
    description: "",
  });

  async function AddMessage() {
    try {
      const res = await axios.post(Telegram_API, {
        //@ts-ignore
        chat_id: 886751147,
        parse_mode: "html",
        text: "erlaaan",
      });
      console.log(res);
    } catch (error) {
      console.log("Sending error", error);
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
          label="Ваше сообщение"
          style={{ width: "96%" }}
          className="textFieldTwo"
          id="outlined-multiline-static"
          multiline
          value={state.description}
          onChange={(e) => setState({ ...state, description: e.target.value })}
          rows={6}
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <button className="btnBottom" onClick={() => AddMessage()}>
          Отправить сообщение
        </button>
      </div>
    </Box>
  );
}
