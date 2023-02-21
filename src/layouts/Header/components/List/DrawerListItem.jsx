import PropTypes from "prop-types";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

const DrawerListItem = ({ text, icon }) => (
  <ListItem key={text} disablePadding>
    <ListItemButton>
      <ListItemIcon sx={{ color: "#1976d2" }}>{icon}</ListItemIcon>
      <ListItemText primary={text} />
    </ListItemButton>
  </ListItem>
);

export default DrawerListItem;

DrawerListItem.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired,
};
