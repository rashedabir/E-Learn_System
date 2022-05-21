import { Button, Container, Grid, TextField } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import ProfileLayout from "../ProfileLayout";
import SaveIcon from "@mui/icons-material/Save";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
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
  const [image, setImage] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleUpload = async (e) => {
    e.preventDefault();
    try {
      const file = e.target.files[0];
      let formData = new FormData();
      formData.append("file", file);
      setLoading(true);
      const res = await axios.post(
        "https://e-learn-bd.herokuapp.com/api/upload",
        formData,
        {
          headers: {
            "content-type": "multipart/form-data",
            Authorization: token,
          },
        }
      );
      setLoading(false);
      setImage(res.data);
    } catch (error) {
      toast.error(error.response.data.msg);
    }
  };

  const handleDestroy = async () => {
    try {
      setLoading(true);
      await axios.post(
        "https://e-learn-bd.herokuapp.com/api/destroy",
        { public_id: image.public_id },
        {
          headers: { Authorization: token },
        }
      );
      setLoading(false);
      setImage(false);
    } catch (err) {
      toast.error(err.response.data.msg);
    }
  };

  const styleUpload = {
    display: image ? "block" : "none",
  };

  const handleSubmit = async () => {
    if (user.type === "student") {
      axios
        .put(
          `https://e-learn-bd.herokuapp.com/api/student/update_profile/${user._id}`,
          {
            // userName: userName,
            name: name,
            mobile: mobile,
            address: address,
            image: image,
          },
          {
            headers: { Authorization: token },
          }
        )
        .then((res) => {
          if (res.status === 200) {
            Swal.fire("Good job!", "You Update Your Profile", "success");
          }
        })
        .catch((error) => {
          toast.error(error.response.data.msg);
        });
    } else if (user.type === "instructor") {
      axios
        .put(
          `https://e-learn-bd.herokuapp.com/api/instructor/update_profile/${user._id}`,
          {
            // userName: userName,
            name: name,
            mobile: mobile,
            address: address,
            image: image,
          },
          {
            headers: { Authorization: token },
          }
        )
        .then((res) => {
          if (res.status === 200) {
            Swal.fire("Good job!", "You Update Your Profile", "success");
          }
        })
        .catch((error) => {
          toast.error(error.response.data.msg);
        });
    } else if (user.type === "parent") {
      axios
        .put(
          `https://e-learn-bd.herokuapp.com/api/parent/update_profile/${user._id}`,
          {
            // userName: userName,
            name: name,
            mobile: mobile,
            address: address,
            image: image,
          },
          {
            headers: { Authorization: token },
          }
        )
        .then((res) => {
          if (res.status === 200) {
            Swal.fire("Good job!", "You Update Your Profile", "success");
          }
        })
        .catch((error) => {
          toast.error(error.response.data.msg);
        });
    }
  };

  useEffect(() => {
    if (user) {
      setName(user.name);
      setMobile(user.mobile);
      setAddress(user.address);
      setImage(user.image);
    } else {
      setName("");
      setMobile("");
      setAddress("");
      setImage(false);
    }
  }, [user]);

  return (
    <ProfileLayout
      handleUpload={handleUpload}
      loading={loading}
      image={image}
      styleUpload={styleUpload}
      handleDestroy={handleDestroy}
    >
      <Container>
        <div
          style={{ color: "#645A53", display: "flex", alignItems: "center" }}
        >
          <AccountCircleIcon />
          <h2> Profile</h2>
        </div>
        <Grid container spacing={4} alignItems="center">
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
              onChange={(e) => {
                setName(e.target.value);
              }}
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
              onChange={(e) => {
                setMobile(e.target.value);
              }}
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
              onChange={(e) => {
                setAddress(e.target.value);
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
          <SaveIcon /> Update Profile
        </Button>
      </Container>
    </ProfileLayout>
  );
};

export default GeneralInformation;
