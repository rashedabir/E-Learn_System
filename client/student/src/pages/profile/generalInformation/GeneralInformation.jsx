import { Button, Container, Grid, TextField } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import ProfileLayout from "../ProfileLayout";
import SaveIcon from "@mui/icons-material/Save";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { GlobalState } from "../../../GlobalState";
import axios from "axios";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const GeneralInformation = () => {
  const state = useContext(GlobalState);
  const [token] = state.token;
  const [user] = state.userAPI.user;

  // const [userName, setUserName] = useState("");
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");


  const handleSubmit = async () => {
    if (user.type === "student") {
      axios.put(`https://e-learn-bd.herokuapp.com/api/student/update_profile/${user._id}`,
        {
          // userName: userName,
          name: name,
          mobile: mobile,
          address: address,
        },
        {
          headers: { Authorization: token },
        })
        .then((res) => {
          if (res.status === 200) {
            Swal.fire("Good job!", "You Update Your Profile", "success");
          }
        })
        .catch((error) => {
          toast.error(error.response.data.msg);
        });
    }
    else if (user.type === "instructor") {
      axios.put(`https://e-learn-bd.herokuapp.com/api/instructor/update_profile/${user._id}`,
        {
          // userName: userName,
          name: name,
          mobile: mobile,
          address: address,
        },
        {
          headers: { Authorization: token },
        })
        .then((res) => {
          if (res.status === 200) {
            Swal.fire("Good job!", "You Update Your Profile", "success");
          }
        })
        .catch((error) => {
          toast.error(error.response.data.msg);
        });
    }
    else if (user.type === "parent") {
      axios.put(`https://e-learn-bd.herokuapp.com/api/parent/update_profile/${user._id}`,
        {
          // userName: userName,
          name: name,
          mobile: mobile,
          address: address,
        },
        {
          headers: { Authorization: token },
        })
        .then((res) => {
          if (res.status === 200) {
            Swal.fire("Good job!", "You Update Your Profile", "success");
          }
        })
        .catch((error) => {
          toast.error(error.response.data.msg);
        });
    }
  }

  useEffect(() => {
    if (user) {
      setName(user.name)
      setMobile(user.mobile)
      setAddress(user.address)
    }
    else {
      setName("")
      setMobile("")
      setAddress("")
    }
  }, [user])

  return (
    <ProfileLayout>
      <Container>
        <div style={{ color: "#645A53", display: "flex", alignItems: "center" }}>
          <AccountCircleIcon />
          <h2> Profile</h2>
        </div>
        <Grid container spacing={4} alignItems="center" >
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="outlined-basic"
              label="username"
              variant="outlined"
              color="warning"
              value="rashed"
              disabled={true}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Full Name"
              variant="outlined"
              color="warning"
              value={name}
              onChange={(e) => { setName(e.target.value) }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Mobile Number"
              variant="outlined"
              color="warning"
              value={mobile}
              onChange={(e) => { setMobile(e.target.value) }}

            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Address"
              variant="outlined"
              color="warning"
              value={address}
              onChange={(e) => { setAddress(e.target.value) }}

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
          <SaveIcon /> Update Profile
        </Button>

      </Container>
    </ProfileLayout>
  );
};

export default GeneralInformation;
