import * as React from "react";
import pic from "../../assets/images/mypic.jpg";
import { Grid, Button, Typography, Avatar, TextField } from "@mui/material";
import Navbar from "../navbar/Navbar";
import { useStyles } from "./styles";
import { Item } from "./styles";

export default function InstructorInfo() {
  const classes = useStyles();
  return (
    <Navbar>
      <Grid container spacing={3} padding={5}>
        <Grid item sm={12} md={4} className={classes.items}>
          <Item>
            <Avatar
              src={pic}
              alt=""
              sx={{ width: 120, height: 120 }}
              className={classes.avatar}
            />
            <div className={classes.intro}>
              <Typography variant="h4">Intesarul</Typography>
              <Typography variant="body2">Full Stack Developer</Typography>
            </div>
            <div className={classes.intro}>
              <Typography variant="subtitle2">Address</Typography>
              <Typography variant="body2">
                F11, Avenue Ganesh, Near Osia plex, opposit Apex Tower, New
                York, USA
              </Typography>
            </div>
            <Button
              variant="contained"
              color="secondary"
              sx={{ marginLeft: "16px" }}
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
              />
              <TextField
                className={classes.form}
                id="outlined-basic"
                label="Name"
                variant="outlined"
                margin="normal"
              />
              <TextField
                className={classes.form}
                id="outlined-basic"
                label="Mobile"
                variant="outlined"
                margin="normal"
              />
              <TextField
                className={classes.form}
                id="outlined-basic"
                label="Address"
                variant="outlined"
                margin="normal"
              />
              <TextField
                className={classes.form}
                id="outlined-basic"
                label="Status"
                variant="outlined"
                margin="normal"
              />
              <Button variant="contained" color="secondary" sx={{ mt: 2 }}>
                Update
              </Button>
            </form>
          </Item>
        </Grid>
      </Grid>
    </Navbar>
  );
}
