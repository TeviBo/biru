import Toolbar from "@mui/material/Toolbar";
import { useState } from "react";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import { AppBar, Box, Drawer, IconButton } from "@mui/material";
import Divider from "@mui/material/Divider";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import List from "@mui/material/List";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import MailIcon from "@mui/icons-material/Mail";
import { useTheme } from "@emotion/react";
import { HideOnScroll } from "./HideOnScroll";
import { DrawerHeader, drawerWidth } from "../nav-bar-styles";
import DrawerListItem from "../List/DrawerListItem";

const menuOptions = [
  {
    text: "Catalogo",
    icon: <MailIcon />,
  },
  {
    text: "Quienes Somos",
    icon: <InboxIcon />,
  },
  {
    text: "Ofertas",
    icon: <LocalOfferIcon />,
  },
];

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  return (
    <Box>
      <HideOnScroll>
        <AppBar open={open}>
          <Toolbar>
            <IconButton
              color='inherit'
              aria-label='open drawer'
              onClick={handleDrawerOpen}
              edge='start'
              sx={{ mr: 2, ...(open && { display: "none" }) }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant='h3' noWrap fontFamily="'Lato', monospace">
              Bīru
            </Typography>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant='persistent'
        anchor='left'
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {menuOptions.map(({ text, icon }, index) => (
            <DrawerListItem key={index} text={text} icon={icon} />
          ))}
        </List>
        <Divider />
        <List>
          {["All mail", "Trash", "Spam"].map((text, index) => (
            <DrawerListItem key={index} text={text} icon={<InboxIcon />} />
          ))}
        </List>
      </Drawer>
    </Box>
  );
};

export default NavBar;
