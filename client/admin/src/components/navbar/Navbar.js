import React from "react";
import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { useStyle } from "./styles";
import LoginIcon from "@mui/icons-material/Login";

const Navbar = () => {
  const classes = useStyle();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Admin Dashboard
          </Typography>
          <Button color="inherit" component={Link} to="/admin/login">
            Login <LoginIcon sx={{ px: 1 }} />
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
