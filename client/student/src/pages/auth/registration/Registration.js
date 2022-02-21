import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Button, Grid, MenuItem, Select, Typography } from "@mui/material";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import { Link } from "react-router-dom";
import { useStyle } from "./styles";
import axios from "axios";
import { toast } from "react-toastify";

const Registration = () => {
  const classes = useStyle();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [mobile, setMobile] = useState("");
  const [nid, setNid] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [role, setRole] = useState("student");
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (role === "student") {
        await axios
          .post("https://e-learn-bd.herokuapp.com/api/student/register", {
            userName: userName,
            nid: nid,
            name: `${firstName} ${lastName}`,
            mobile: mobile,
            password: password,
            rePassword: rePassword,
            address: `${region}, ${country}`,
          })
          .then((res) => {
            if (res.status === 200) {
              const { data } = res;
              window.location.href = "/student_dashboard";
              localStorage.setItem("AUTH", JSON.stringify(data));
              toast.success("Registration Complete");
            }
          });
      } else if (role === "parent") {
        await axios
          .post("https://e-learn-bd.herokuapp.com/api/parent/register", {
            nid: nid,
            name: `${firstName} ${lastName}`,
            mobile: mobile,
            password: password,
            rePassword: rePassword,
            address: `${region}, ${country}`,
          })
          .then((res) => {
            if (res.status === 200) {
              const { data } = res;
              window.location.href = "/parent_dashboard";
              localStorage.setItem("AUTH", JSON.stringify(data));
              toast.success("Registration Complete");
            }
          });
      } else if (role === "instructor") {
        await axios
          .post("https://e-learn-bd.herokuapp.com/api/instructor/register", {
            userName: userName,
            name: `${firstName} ${lastName}`,
            mobile: mobile,
            password: password,
            rePassword: rePassword,
            address: `${region}, ${country}`,
          })
          .then((res) => {
            if (res.status === 200) {
              const { data } = res;
              window.location.href = "/";
              localStorage.setItem("AUTH", JSON.stringify(data));
              toast.success("Registration Complete");
            }
          });
      }
    } catch (error) {
      toast.error(error.response.data.msg);
    }
  };

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
          <MenuItem value={"student"}>Student</MenuItem>
          <MenuItem value={"parent"}>Parent</MenuItem>
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
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              value={firstName}
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
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              value={lastName}
              type="text"
              sx={{ pb: 2 }}
            />
          </Grid>
        </Grid>
        {role === "student" ? (
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
        ) : null}
        {role === "instructor" ? (
          <TextField
            fullWidth
            id="outlined-basic"
            label="User Name"
            variant="outlined"
            color="warning"
            value={userName}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            type="text"
            sx={{ pb: 2 }}
          />
        ) : null}
        {role === "parent" ? (
          <TextField
            fullWidth
            id="outlined-basic"
            label="NID"
            variant="outlined"
            value={nid}
            onChange={(e) => {
              setNid(e.target.value);
            }}
            color="warning"
            type="text"
            sx={{ pb: 2 }}
          />
        ) : null}
        {role === "student" ? (
          <TextField
            fullWidth
            id="outlined-basic"
            label="Parents NID"
            variant="outlined"
            value={nid}
            onChange={(e) => {
              setNid(e.target.value);
            }}
            color="warning"
            type="text"
            sx={{ pb: 2 }}
          />
        ) : null}
        <TextField
          fullWidth
          id="outlined-basic"
          label={role === "student" ? "Parents Mobile" : "Mobile Number"}
          variant="outlined"
          color="warning"
          onChange={(e) => {
            setMobile(e.target.value);
          }}
          value={mobile}
          type="text"
          sx={{ pb: 2 }}
        />

        <TextField
          fullWidth
          id="outlined-basic"
          label="Password"
          variant="outlined"
          color="warning"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          value={password}
          type="password"
          sx={{ pb: 2 }}
        />
        <TextField
          fullWidth
          id="outlined-basic"
          label="Repeat Password"
          variant="outlined"
          color="warning"
          onChange={(e) => {
            setRePassword(e.target.value);
          }}
          value={rePassword}
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
          style={{
            backgroundColor: "#EA5252",
            padding: "18px 36px",
            fontSize: "18px",
          }}
          className={classes.btn}
          fullWidth
          variant="contained"
          onClick={handleSubmit}
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
