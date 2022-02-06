import { Container, Grid } from "@mui/material";
import React from "react";
import { useStyle } from "./styles";

const ProfileLayout = ({ children }) => {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          <Grid item md={3}>
            <div className={classes.profileleft}>
              <img
                className={classes.imag}
                src="https://media.istockphoto.com/photos/millennial-male-team-leader-organize-virtual-workshop-with-employees-picture-id1300972574?b=1&k=20&m=1300972574&s=170667a&w=0&h=2nBGC7tr0kWIU8zRQ3dMg-C5JLo9H2sNUuDjQ5mlYfo="
                alt=""
              />
              <h4>Name : Sohag Rah</h4>
            </div>
          </Grid>
          <Grid item md={9}>
            <div className={classes.profileright}>{children}</div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default ProfileLayout;
