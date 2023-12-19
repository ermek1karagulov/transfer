import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import "./Navbar.css";
// @ts-ignore
import logo from "./../img/cashgoen-logo.png";
// @ts-ignore
import nazad from "./../img/nazad.svg";
// @ts-ignore
import logoPhone from "./../img/cashgoen logo circle.png";
import { useWindowSize } from "../../hooks/useWindowSize";

interface Props {
  window?: () => Window;
}

let style = {
  width: "100%",
};

const drawerWidth = style;
const navItems = [
  { label: "О нас", link: "#onas" },
  { label: "Услуги", link: "#uslugi" },
  { label: "FAQ", link: "#Fag" },
  { label: "Отзывы", link: "#otzyvy" },
  { label: "Связаться", link: "#svyaz" },
];

export default function Navbar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { width } = useWindowSize();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center", boxShadow: "none" }}
    >
      <Typography sx={{ my: 2 }} style={{ height: "20%", boxShadow: "none" }}>
        <a href="/" style={{ textDecoration: "none" }}>
          <span
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "2.5rem",
            }}
          >
            <img src={nazad} alt="" style={{ marginLeft: "2rem" }} />
            <img
              src={logoPhone}
              alt=""
              style={{
                width: "120px",
                height: "120px",
              }}
            />
            {/* sakam */}
          </span>
        </a>
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <a
            style={{
              textDecoration: "none",
              color: "rgb(1, 41, 112)",
            }}
            href={item.link}
          >
            <ListItem key={item.label} disablePadding>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText
                  primary={item.label}
                  style={{ marginTop: "1rem", fontWeight: "700" }}
                />
              </ListItemButton>
            </ListItem>
          </a>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <CssBaseline />
      <AppBar
        // color="primary"
        component="nav"
        style={{
          textDecoration: "none",
          background: "white",
          border: "none",
          height: "60px",
          boxShadow: "0px 1px 1px -1px black",
        }}
      >
        <Toolbar>
          <div style={{ flexGrow: 1 }} className="cshwww">
            <span className="ceshGoen" style={{ color: "blue" }}>
              {width > 600 ? (
                <a href="/">
                  <img
                    src={logo}
                    alt=""
                    style={{
                      width: "250px",
                      height: "250px",
                      marginTop: "5px",
                    }}
                  />
                </a>
              ) : (
                <a href="/">
                  <img
                    src={logoPhone}
                    alt=""
                    style={{
                      width: "110px",
                      height: "110px",
                      marginTop: "5px",
                      // marginLeft: "0px",
                    }}
                  />
                </a>
              )}
            </span>
          </div>
          <IconButton
            className="btnIcon"
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: -1, display: { sm: "none" } }}
          >
            <MenuIcon style={{ color: "black" }} />
          </IconButton>
          <Box
            sx={{ display: { xs: "none", sm: "block", marginRight: "2rem" } }}
          >
            {navItems.map((item) => (
              <a
                style={{
                  textDecoration: "none",
                  background:
                    item.label === "Связаться" ? "rgb(65, 84, 241)" : "",
                  paddingBottom: item.label === "Связаться" ? "2px" : "",
                  borderRadius: "5px",
                  textAlign: "center",
                }}
                href={item.link}
              >
                <Button
                  key={item.label}
                  sx={{
                    color:
                      item.label === "Связаться" ? "white" : "rgb(1, 41, 112)",
                  }}
                  style={{
                    width: item.label === "Связаться" ? "120px" : "",
                  }}
                >
                  {item.label}
                </Button>
              </a>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav
        style={{
          textDecoration: "none",
        }}
      >
        <Drawer
          style={{
            marginRight: "7rem",
            color: "blue",
          }}
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {/* <MenuIcon style={{ color: "black" }} /> */}
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}
