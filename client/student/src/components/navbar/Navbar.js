import React, { Fragment, useContext, useState } from "react";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { GlobalState } from "../../GlobalState";

import { useStyle } from "./styles";
import axios from "axios";
import AccountMenu from "../account_menu/AccountMenu";
import Sidebar from "../sidebar/Sidebar";

const Navbar = () => {
  const classes = useStyle();
  const state = useContext(GlobalState);
  const [isLogged, setIsLogged] = state.userAPI.isLogged;
  const [user] = state.userAPI.user;

  console.log(user);

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const logOut = async () => {
    await axios.get("/api/logout");
    localStorage.clear();
    setIsLogged(false);
    window.location.href = "/";
    // closeMobileMenu();
  };

  const [drawer, setDrawer] = useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setDrawer({ ...drawer, [anchor]: open });
  };

  return (
    <div className={classes.root}>
      <AppBar elevation={0} color="inherit" position="static">
        <Container className={classes.root} maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">All Category</Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Udemy Business</Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Tech on Udemy</Typography>
                </MenuItem>
              </Menu>
            </Box>
            <Box
              sx={{
                flexGrow: 1,
                alignItems: "center",
                display: { xs: "none", md: "flex" },
              }}
            >
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>
              <Typography
                className={classes.menubutton}
                color="inherit"
                to="/courses"
                component={Link}
              >
                All Courses
              </Typography>

              <div className={classes.serach}>
                <InputBase
                  className={classes.hints}
                  placeholder="Search Here"
                />
              </div>
              <Typography
                className={classes.menubutton}
                color="inherit"
                to="/login"
                component={Link}
              >
                Udemy Business
              </Typography>
              <Typography
                // className={classes.menubutton}
                color="inherit"
                component={Link}
                to="/login"
              >
                Tech on Udemy
              </Typography>
            </Box>

            {isLogged ? (
              <Fragment>
                <AccountMenu logOut={logOut} />
                {user.type === "instructor" && user.status === true ? (
                  <Sidebar drawer={drawer} toggleDrawer={toggleDrawer} />
                ) : null}
              </Fragment>
            ) : (
              <Box
                className={classes.signin}
                sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
              >
                <Button color="inherit" component={Link} to="/login">
                  Sign In
                </Button>
                <Button
                  className={classes.signup}
                  color="inherit"
                  component={Link}
                  to="/registration"
                >
                  Sign Up
                </Button>
              </Box>
            )}
            <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Profile</Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Account</Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Dashboard</Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Logout</Typography>
                </MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default Navbar;
