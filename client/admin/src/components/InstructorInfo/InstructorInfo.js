import React, { useState, useContext, useEffect } from "react";
import user from "../../assets/images/user.jpg";
import {
  Grid,
  Button,
  Typography,
  Avatar,
  TextField,
  Select,
  MenuItem,
} from "@mui/material";
import Navbar from "../navbar/Navbar";
import { useStyles } from "./styles";
import { Item } from "./styles";
import { useParams, useNavigate } from "react-router-dom";
import { GlobalState } from "../../GlobalState";
import { toast } from "react-toastify";
import axios from "axios";

export default function InstructorInfo() {
  const classes = useStyles();
  const navigate = useNavigate();
  const { id } = useParams();
  const state = useContext(GlobalState);
  const [token] = state.token;
  const [instructors] = state.instructorAPI.instructors;
  const [callback, setCallback] = state.instructorAPI.callback;
  const [_id, setId] = useState("");
  const [userName, setUserName] = useState("");
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [status, setStatus] = useState("");
  const [image, setImage] = useState(false);

  useEffect(() => {
    if (id) {
      instructors.forEach((instructor) => {
        if (instructor._id === id) {
          setId(instructor._id);
          setUserName(instructor.userName);
          setName(instructor.name);
          setMobile(instructor.mobile);
          setAddress(instructor.address);
          setStatus(instructor.status);
          setImage(instructor.image);
        }
      });
    } else {
      setId("");
      setUserName("");
      setName("");
      setMobile("");
      setAddress("");
      setStatus("");
      setImage(false);
    }
  }, [id, instructors]);

  const updateInstructor = async () => {
    try {
      if (window.confirm("Do you want to Approve this Instructor?")) {
        await axios.put(
          `https://e-learn-bd.herokuapp.com/api/admin/instructor/${_id}`,
          { status: status },
          { headers: { Authorization: token } }
        );
      }
      setCallback(!callback);
      toast.info("Updated");
    } catch (error) {
      toast.error(error.response.data.msg);
    }
  };

  const handleDelete = async () => {
    try {
      if (window.confirm("Do you want to Delete this Instructor?")) {
        await axios.delete(
          `https://e-learn-bd.herokuapp.com/api/admin/instructor/${_id}`,
          { headers: { Authorization: token } }
        );
      }
      setCallback(!callback);
      toast.info("Deleted");
      navigate("/instructor");
    } catch (error) {
      toast.error(error.response.data.msg);
    }
  };

  return (
    <Navbar>
      <Grid container spacing={3} padding={5}>
        <Grid item sm={12} md={4} className={classes.items}>
          <Item>
            <Avatar
              src={image ? image?.url : user}
              alt=""
              sx={{ width: 120, height: 120 }}
              className={classes.avatar}
            />
            <div className={classes.intro}>
              <Typography variant="h4">{name}</Typography>
              <Typography variant="body2">Full Stack Developer</Typography>
            </div>
            <div className={classes.intro}>
              <Typography variant="subtitle2">Address</Typography>
              <Typography variant="body2">{address}</Typography>
            </div>
            <Button
              variant="contained"
              color="secondary"
              sx={{ marginLeft: "16px" }}
              type="button"
              onClick={handleDelete}
            >
              Delete Account
            </Button>
          </Item>
        </Grid>

        <Grid item sm={12} md={8} className={classes.items}>
          <Item>
            <Typography variant="h6">Edit Details</Typography>
            <form>
              <TextField
                className={classes.form}
                id="outlined-basic"
                label="Username"
                variant="outlined"
                margin="normal"
                value={userName}
                disabled
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
              />
              <TextField
                className={classes.form}
                id="outlined-basic"
                label="Name"
                variant="outlined"
                margin="normal"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                disabled
              />
              <TextField
                className={classes.form}
                id="outlined-basic"
                label="Mobile"
                variant="outlined"
                margin="normal"
                value={mobile}
                onChange={(e) => {
                  setMobile(e.target.value);
                }}
                disabled
              />
              <TextField
                className={classes.form}
                id="outlined-basic"
                label="Address"
                variant="outlined"
                margin="normal"
                value={address}
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
                disabled
              />
              <Select
                sx={{ mt: 1 }}
                className={classes.form}
                id="demo-simple-select-autowidth"
                fullWidth
                value={status}
                onChange={(e) => {
                  setStatus(e.target.value);
                }}
              >
                <MenuItem value={true}>Active</MenuItem>
                <MenuItem value={false}>Pending</MenuItem>
              </Select>
              <Button
                onClick={updateInstructor}
                variant="contained"
                color="secondary"
                sx={{ mt: 2 }}
              >
                Update
              </Button>
            </form>
          </Item>
        </Grid>
      </Grid>
    </Navbar>
  );
}
