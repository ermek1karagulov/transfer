import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import "./ButtonStart.css";

export default function ButtonStart() {
  return (
    <Stack spacing={2} direction="row">
      <Button
        variant="contained"
        style={{ background: "rgb(25, 118, 210)" }}
        className="btnNaaaaa"
      >
        Начать
      </Button>
    </Stack>
  );
}
