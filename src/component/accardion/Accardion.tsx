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
import { motion } from "framer-motion";

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `0px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.8rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: (theme.palette.mode = "light"),
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
  const animationScroll = {
    hidden: {
      y: 10,
      opacity: 0,
    },
    visible: (custom: number) => ({
      y: 0,
      opacity: 1,
      transition: { delay: custom * 0.2 },
    }),
  };
  const [expanded, setExpanded] = React.useState<string | false>("panel1");

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.9, once: true }}
    >
      <motion.div
        custom={3}
        variants={animationScroll}
        style={{
          marginTop: "4rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: "2rem",
        }}
      >
        <div className="faqq" style={{ color: "rgb(1, 41, 112)" }}>
          FAQ
        </div>
        <div
          style={{
            maxWidth: "1000px",
            display: "flex",
            flexDirection: "column",
            margin: "0 auto",
          }}
        >
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <Typography style={{ fontSize: "1rem", fontWeight: "500" }}>
                Каким путём отправляются деньги?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography style={{ fontSize: "0.8rem", fontWeight: "400" }}>
                Деньги из РФ отправляются через банки Кыргызстана и Казахстана.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <AccordionSummary
              aria-controls="panel3d-content"
              id="panel3d-header"
            >
              <Typography style={{ fontSize: "1rem", fontWeight: "500" }}>
                Как быстро доходят деньги из РФ в Европу?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography style={{ fontSize: "0.8rem", fontWeight: "400" }}>
                Обычно переводы доходят мгновенно. Но мы всегда ставим
                официальный срок в 1 час. За редкими случаями перевод может
                затянуться до 24-х часов.
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
          >
            <AccordionSummary
              aria-controls="panel3d-content"
              id="panel3d-header"
            >
              <Typography style={{ fontSize: "1rem", fontWeight: "500" }}>
                Сколько времени занимает перевод из Европы в Россию?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography style={{ fontSize: "0.8rem", fontWeight: "400" }}>
                Переводы из Европы также занимают 1 час времени.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel5"}
            onChange={handleChange("panel5")}
          >
            <AccordionSummary
              aria-controls="panel3d-content"
              id="panel3d-header"
            >
              <Typography style={{ fontSize: "1rem", fontWeight: "500" }}>
                Какие комиссии?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography style={{ fontSize: "0.8rem", fontWeight: "400" }}>
                Комиссия включена в курс обмена, дополнительные комиссии с нашей
                стороны вы не платите
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </motion.div>
    </motion.div>
  );
}
