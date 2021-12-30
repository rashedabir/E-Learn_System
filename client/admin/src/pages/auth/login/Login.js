import React from "react";
import { Button, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useStyle } from "./styles";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const Login = () => {
  const classes = useStyle();
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/home");
  };
  return (
    <div className={classes.root}>
      <form className={classes.formWrapper}>
        <Typography variant="h4" className={classes.heading}>
          Login
        </Typography>
        <TextField
          fullWidth
          id="outlined-basic"
          autoComplete={false}
          label="User Name"
          variant="outlined"
          color="warning"
          type="text"
          autoFocus
          sx={{ pb: 2 }}
        />
        <FormControl sx={{ width: "100%" }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password" color="warning">
            Password
          </InputLabel>
          <OutlinedInput
            fullWidth
            id="outlined-adornment-password"
            autoComplete={false}
            color="warning"
            type={values.showPassword ? "text" : "password"}
            value={values.password}
            onChange={handleChange("password")}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        <Button
          color="warning"
          className={classes.btn}
          fullWidth
          variant="contained"
          sx={{ my: 3 }}
          onClick={() => {
            handleClick();
          }}
        >
          sign in
        </Button>
      </form>
    </div>
  );
};

export default Login;
