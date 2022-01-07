import React, { useState } from "react";
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
import axios from "axios";
import { toast } from "react-toastify";

import { useStyle } from "./styles";

const Login = () => {
  const classes = useStyle();

  const [role, setRole] = useState("student");
  const [userName, setUserName] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (role === "student") {
        await axios.post("/api/student/login", {
          userName: userName,
          password: password,
        });
        window.location.href = "/";
      } else if (role === "parent") {
        await axios.post("/api/parent/login", {
          mobile: mobile,
          password: password,
        });
        window.location.href = "/";
      } else if (role === "instructor") {
        await axios.post("/api/instructor/login", {
          userName: userName,
          password: password,
        });
        window.location.href = "/";
      }
    } catch (error) {
      toast.error(error.response.data.msg);
    }
  };

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
            onChange={(e) => {
              setRole(e.target.value);
            }}
            value={role}
          >
            <MenuItem value={"student"}>Student</MenuItem>
            <MenuItem value={"parent"}>Parent</MenuItem>
            <MenuItem value={"instructor"}>Instructor</MenuItem>
          </Select>
        </FormControl>
        {role === "parent" ? (
          <TextField
            fullWidth
            id="outlined-basic"
            label="Mobile Number"
            variant="outlined"
            color="warning"
            type="text"
            value={mobile}
            onChange={(e) => {
              setMobile(e.target.value);
            }}
            sx={{ pb: 2 }}
          />
        ) : (
          <TextField
            fullWidth
            id="outlined-basic"
            label="User Name"
            variant="outlined"
            color="warning"
            type="text"
            value={userName}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            sx={{ pb: 2 }}
          />
        )}

        <TextField
          fullWidth
          id="outlined-basic"
          label="Password"
          variant="outlined"
          color="warning"
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          sx={{ pb: 2 }}
        />
        <Button
          color="warning"
          className={classes.btn}
          fullWidth
          onClick={handleSubmit}
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
