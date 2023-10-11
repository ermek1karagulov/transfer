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

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <span className="ceshGoen">CashGoen</span>
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <a
            style={{
              textDecoration: "none",
              color: "black",
            }}
            href={item.link}
          >
            <ListItem key={item.label} disablePadding>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary={item.label} />
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
      bgcolor="red"
      sx={{
        display: "flex",
        background: "#fbfbfb",
      }}
    >
      <CssBaseline />
      <AppBar
        // color="primary"
        component="nav"
        style={{ textDecoration: "none", background: "white" }}
      >
        <Toolbar>
          <IconButton
            className="btnIcon"
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ ml: -2, display: { sm: "none" } }}
          >
            <MenuIcon style={{ color: "black" }} />
          </IconButton>

          <div style={{ flexGrow: 1 }} className="cshwww">
            <span className="ceshGoen" style={{ color: "blue" }}>
              CashGoen
            </span>
          </div>
          <Box
            sx={{ display: { xs: "none", sm: "block", marginRight: "2rem" } }}
          >
            {navItems.map((item) => (
              <a style={{ textDecoration: "none" }} href={item.link}>
                <Button key={item.label} sx={{ color: "black" }}>
                  {item.label}
                </Button>
              </a>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav style={{ textDecoration: "none" }}>
        <Drawer
          style={{ marginRight: "7rem", color: "blue" }}
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
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}
