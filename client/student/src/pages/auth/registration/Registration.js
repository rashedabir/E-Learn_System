import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Button, Grid, MenuItem, Select, Typography } from "@mui/material";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import { Link } from "react-router-dom";
import { useStyle } from "./styles";

const Registration = () => {
  const classes = useStyle();
  const [role, setRole] = useState("student");
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");
  return (
    <div className={classes.root}>
      <form className={classes.formWrapper}>
        <Typography variant="h4" className={classes.heading}>
          Sign Up
        </Typography>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          color="warning"
          fullWidth
          sx={{ mb: 2 }}
          onChange={(e) => {
            setRole(e.target.value);
          }}
          value={role}
        >
          <MenuItem value={"parent"}>Parent</MenuItem>
          <MenuItem value={"student"}>Student</MenuItem>
          <MenuItem value={"instructor"}>Instructor</MenuItem>
        </Select>
        <Grid container spacing={2}>
          <Grid item md={6} sm={12}>
            <TextField
              fullWidth
              id="outlined-basic"
              label="First Name"
              variant="outlined"
              color="warning"
              type="text"
              sx={{ pb: 2 }}
            />
          </Grid>
          <Grid item md={6} sm={12}>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Last Name"
              variant="outlined"
              color="warning"
              type="text"
              sx={{ pb: 2 }}
            />
          </Grid>
        </Grid>
        {role === "student" && (
          <TextField
            fullWidth
            id="outlined-basic"
            label="User Name"
            variant="outlined"
            color="warning"
            type="text"
            sx={{ pb: 2 }}
          />
        )}
        {role === "parent" && (
          <>
            <TextField
              fullWidth
              id="outlined-basic"
              label="NID"
              variant="outlined"
              color="warning"
              type="text"
              sx={{ pb: 2 }}
            />
            <TextField
              fullWidth
              id="outlined-basic"
              label="Mobile Number"
              variant="outlined"
              color="warning"
              type="text"
              sx={{ pb: 2 }}
            />
          </>
        )}
        <TextField
          fullWidth
          id="outlined-basic"
          label="Password"
          variant="outlined"
          color="warning"
          type="password"
          sx={{ pb: 2 }}
        />
        <TextField
          fullWidth
          id="outlined-basic"
          label="Repeat Password"
          variant="outlined"
          color="warning"
          type="password"
          sx={{ pb: 2 }}
        />
        <CountryDropdown
          id="demo-simple-select"
          labelId="demo-simple-select-label"
          value={country}
          onChange={(val) => setCountry(val)}
          className={classes.option}
        />
        <RegionDropdown
          className={classes.option}
          country={country}
          value={region}
          onChange={(val) => setRegion(val)}
        />
        <Button
          color="warning"
          className={classes.btn}
          fullWidth
          variant="contained"
        >
          sign up
        </Button>
        <Typography className={classes.msg}>
          Allready have an account?{" "}
          <Link className={classes.link} to="/login">
            Sign in
          </Link>
        </Typography>
      </form>
    </div>
  );
};

export default Registration;
