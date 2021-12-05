import React from "react";
import TextField from "@mui/material/TextField";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useStyle } from "./styles";

const Login = () => {
  const classes = useStyle();

  return (
    <div className={classes.root}>
      <form className={classes.formWrapper}>
        <Typography variant="h4" className={classes.heading}>
          Login
        </Typography>
        <FormControl fullWidth sx={{ pb: 2 }}>
          <InputLabel color="warning" id="demo-simple-select-label">
            Role
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Role"
            color="warning"
          >
            <MenuItem value={"parent"}>Parent</MenuItem>
            <MenuItem value={"student"}>Student</MenuItem>
            <MenuItem value={"instructor"}>Instructor</MenuItem>
          </Select>
        </FormControl>
        <TextField
          fullWidth
          id="outlined-basic"
          label="User Name"
          variant="outlined"
          color="warning"
          type="text"
          sx={{ pb: 2 }}
        />
        <TextField
          fullWidth
          id="outlined-basic"
          label="Password"
          variant="outlined"
          color="warning"
          type="password"
          sx={{ pb: 2 }}
        />
        <Button
          color="warning"
          className={classes.btn}
          fullWidth
          variant="contained"
        >
          sign in
        </Button>
        <Typography className={classes.msg}>
          Don't have an account?{" "}
          <Link className={classes.link} to="/registration">
            Sign Up
          </Link>
        </Typography>
      </form>
    </div>
  );
};

export default Login;
