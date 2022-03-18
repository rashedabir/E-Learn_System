import React from "react";
import AddBoxIcon from "@mui/icons-material/AddBox";
import DashboardIcon from "@mui/icons-material/Dashboard";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { IconButton } from "@mui/material";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";

const listBox = [
  {
    name: "Dashboard",
    route: "/instructor_dashboard",
    icon: <DashboardIcon />,
  },
  { name: "Create Course", route: "/create_course", icon: <AddBoxIcon /> },
  { name: "Create Blog", route: "/create_blog", icon: <AddBoxIcon /> },
  { name: "Blogs", route: "/blog", icon: <AddBoxIcon /> },
];

const Sidebar = ({ toggleDrawer, drawer }) => {
  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {listBox.map((list, i) => (
          <ListItem component={Link} to={list.route} button key={i}>
            <ListItemIcon>{list.icon}</ListItemIcon>
            <ListItemText primary={list.name} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <div>
      <React.Fragment>
        <IconButton onClick={toggleDrawer("left", true)}>
          <MoreVertIcon />
        </IconButton>
        <Drawer
          anchor={"left"}
          open={drawer["left"]}
          onClose={toggleDrawer("left", false)}
        >
          {list("left")}
        </Drawer>
      </React.Fragment>
    </div>
  );
};

export default Sidebar;
