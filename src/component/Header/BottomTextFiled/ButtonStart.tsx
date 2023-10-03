import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import "./ButtonStart.css";
import axios from "axios";
import { toast } from "react-toastify";

export default function ButtonStart() {
  const Telegram_API =
    "https://api.telegram.org/bot6380903562:AAEvqODGC2EEFhuN92EZrnQvJ2I51A7t6Cg/sendMessage";

  async function AddMessage() {
    try {
      const res = await axios.post(Telegram_API, {
        //@ts-ignore
        chat_id: 886751147,
        parse_mode: "html",
        // message: <div>siuuuu</div>,
        text: "erlaaan",
      });
      toast.success("Менеджер скоро свяжется с вами");
      console.log(res);
    } catch (error) {
      console.log("Sending error", error);
    }
  }

  return (
    <Stack spacing={2} direction="row">
      <Button
        onClick={() => AddMessage()}
        variant="contained"
        style={{ background: "#4154f1" }}
        className="btnNaaaaa"
      >
        Начать
      </Button>
    </Stack>
  );
}
