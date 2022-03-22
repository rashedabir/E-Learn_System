import { Button, Container, Grid, TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import ProfileLayout from "../ProfileLayout";
import SaveIcon from "@mui/icons-material/Save";
import SettingsIcon from "@mui/icons-material/Settings";
import { GlobalState } from "../../../GlobalState";
import axios from "axios";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const GeneralSetting = () => {
  const state = useContext(GlobalState);
  const [token] = state.token;
  const [user] = state.userAPI.user;
  const userName = user.userName;

  console.log(user);

  const [currentPassword, setCurrentPassword] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  const handleSubmit = async () => {
    if (user.type === "student") {
      axios
        .put(
          `https://e-learn-bd.herokuapp.com/api/student/update_password/${user._id}`,
          {
            userName: userName,
            currentPassword: currentPassword,
            password: password,
            rePassword: rePassword,
          },
          {
            headers: { Authorization: token },
          }
        )
        .then((res) => {
          if (res.status === 200) {
            Swal.fire("Good job!", "You change Your Password", "success");
          }
        })
        .catch((error) => {
          toast.error(error.response.data.msg);
        });
    } else if (user.type === "instructor") {
      axios
        .put(
          `https://e-learn-bd.herokuapp.com/api/instructor/update_password/${user._id}`,
          {
            userName: userName,
            currentPassword: currentPassword,
            password: password,
            rePassword: rePassword,
          },
          {
            headers: { Authorization: token },
          }
        )
        .then((res) => {
          if (res.status === 200) {
            Swal.fire("Good job!", "You change Your Password", "success");
          }
        })
        .catch((error) => {
          toast.error(error.response.data.msg);
        });
    }
    if (user.type === "parent") {
      axios
        .put(
          `https://e-learn-bd.herokuapp.com/api/parent/update_password/${user._id}`,
          {
            nid: user.nid,
            currentPassword: currentPassword,
            password: password,
            rePassword: rePassword,
          },
          {
            headers: { Authorization: token },
          }
        )
        .then((res) => {
          if (res.status === 200) {
            Swal.fire("Good job!", "You change Your Password", "success");
          }
        })
        .catch((error) => {
          toast.error(error.response.data.msg);
        });
    }
  };

  return (
    <ProfileLayout>
      <Container>
        <div
          style={{ color: "#645A53", display: "flex", alignItems: "center" }}
        >
          <SettingsIcon />
          <h2> Change Password</h2>
        </div>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Current Password"
              variant="outlined"
              color="warning"
              type="password"
              onChange={(e) => {
                setCurrentPassword(e.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="outlined-basic"
              label="New Password"
              variant="outlined"
              color="warning"
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Repeat New Password"
              variant="outlined"
              color="warning"
              type="password"
              onChange={(e) => {
                setRePassword(e.target.value);
              }}
            />
          </Grid>
        </Grid>

        <Button
          onClick={handleSubmit}
          fullWidth
          variant="contained"
          style={{
            backgroundColor: "#EA5252",
            textTransform: "none",
          }}
          sx={{ mt: 5 }}
        >
          <SaveIcon /> Update Password
        </Button>
      </Container>
    </ProfileLayout>
  );
};

export default GeneralSetting;
