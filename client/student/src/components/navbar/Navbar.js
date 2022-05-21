/* eslint-disable no-unused-vars */
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { Fragment, useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GlobalState } from "../../GlobalState";
import AccountMenu from "../account_menu/AccountMenu";
import Sidebar from "../sidebar/Sidebar";
import { useStyle } from "./styles";

const Navbar = () => {
  const classes = useStyle();
  const state = useContext(GlobalState);
  const [isLogged, setIsLogged] = state.userAPI.isLogged;
  const [search, setSearch] = state.courseAPI.search;
  const [user] = state.userAPI.user;
  const history = useNavigate();

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  // const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  // const handleOpenUserMenu = (event) => {
  //   setAnchorElUser(event.currentTarget);
  // };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null);
  // };

  const logOut = async () => {
    await axios.get("https://e-learn-bd.herokuapp.com/api/logout");
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

  const handleChange = (e) => {
    history("/courses");
    setSearch(e.target.value);
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
                  <Typography
                    className={classes.menubutton}
                    color="inherit"
                    to="/courses"
                    component={Link}
                  >
                    All Courses
                  </Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography
                    textAlign="start"
                    className={classes.menubutton}
                    color="inherit"
                    to="/blogs"
                    component={Link}
                  >
                    Blogs
                  </Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography
                    textAlign="center"
                    className={classes.menubutton}
                    color="inherit"
                  >
                    Jobs
                  </Typography>
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
              {/* <Link to="/">
                <img src={logo} alt="logo" />
              </Link> */}
              <Typography
                className={classes.menubutton}
                color="red"
                fontWeight="700"
                fontSize="25px"
                fontFamily="URW Chancery L, cursive"
                to="/"
                component={Link}
              >
                E-Learn
              </Typography>
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
                  onChange={handleChange}
                />
              </div>
              <Typography
                className={classes.menubutton}
                color="inherit"
                to="/blogs"
                component={Link}
              >
                Blogs
              </Typography>
              {/*<Typography
                // className={classes.menubutton}
                color="inherit"
                component={Link}
                to="/job_view"
              >
                Jobs
              </Typography>*/}
            </Box>
            {/* <Sidebar drawer={drawer} toggleDrawer={toggleDrawer} /> */}

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
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default Navbar;
