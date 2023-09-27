import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import "./Accardion.css";

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function AccordionMy() {
  const [expanded, setExpanded] = React.useState<string | false>("panel1");

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <div
      style={{ marginTop: "4rem", display: "flex", flexDirection: "column" }}
    >
      <div className="faqq">FAQ</div>
      <div
        style={{
          maxWidth: "1200px",
          display: "flex",
          flexDirection: "column",
          margin: "0 auto",
        }}
      >
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography>Каким путём отправляются деньги?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Деньги из РФ отправляются через банки Кыргызстана и Казахстана.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography>Как быстро доходят деньги из РФ в Европу?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Обычно переводы доходят мгновенно. Но мы всегда ставим официальный
              срок в 1 час. За редкими случаями перевод может затянуться до 24-х
              часов.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography>
              Сколько времени занимает перевод из Европы в Россию?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Переводы из Европы также занимают 1 час времени.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel5"}
          onChange={handleChange("panel5")}
        >
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography>Какие комиссии?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Комиссия включена в курс обмена, дополнительные комиссии с нашей
              стороны вы не платите
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}
