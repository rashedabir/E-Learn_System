import React from "react";
import {
  Button,
  TextField,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useStyle } from "./styles";
import SendIcon from "@mui/icons-material/Send";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircle from "@mui/icons-material/AccountCircle";
import VisibilityIcon from "@mui/icons-material/Visibility";

const Login = () => {
  const classes = useStyle();

  return (
    <div className={classes.root}>
      <form className={classes.formWrapper}>
        <Typography variant="h4" className={classes.heading}>
          Login
        </Typography>
        <FormControl fullWidth sx={{ pb: 2 }}>
          <InputLabel color="success" id="demo-simple-select-label">
            Role
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Role"
            color="success"
          >
            <MenuItem value={"parent"}>Parent</MenuItem>
            <MenuItem value={"student"}>Student</MenuItem>
            <MenuItem value={"instructor"}>Instructor</MenuItem>
            <MenuItem value={"admin"}>Admin</MenuItem>
          </Select>
        </FormControl>
        <TextField
          fullWidth
          id="outlined-basic"
          label="User Name"
          variant="outlined"
          color="success"
          type="text"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
          sx={{ pb: 2 }}
        />
        <TextField
          fullWidth
          id="outlined-basic"
          label="Password"
          variant="outlined"
          color="success"
          type="password"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <VisibilityIcon />
              </InputAdornment>
            ),
          }}
          sx={{ pb: 2 }}
        />
        <Button
          color="success"
          className={classes.btn}
          fullWidth
          variant="contained"
          endIcon={<SendIcon />}
          sx={{ borderRadius: 15 }}
        >
          sign in
        </Button>
        <Typography className={classes.msg}>
          Forget Your Password?{" "}
          <Link className={classes.link} to="/forgetPassword">
            Click Here
          </Link>
        </Typography>
      </form>
    </div>
  );
};

export default Login;
