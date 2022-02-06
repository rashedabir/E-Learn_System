import { Button, Container, Grid, TextField } from "@mui/material";
import React from "react";
import ProfileLayout from "../ProfileLayout";
import SaveIcon from "@mui/icons-material/Save";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const GeneralInformation = () => {
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
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Mobile Number"
              variant="outlined"
              color="warning"

            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Address"
              variant="outlined"
              color="warning"

            />
          </Grid>
        </Grid>
        <Button
          // onClick={handleSubmit}
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
