import React from "react";
import Typography from "@mui/material/Typography";
import { useStyle } from "./styles";
import { Card, CardContent, Grid, Container } from "@mui/material";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import PersonIcon from "@mui/icons-material/Person";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
const JobView = () => {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <h1 className={classes.heading}>Available Jobs</h1>
      <Container>
        <Grid container>
          <Grid item xs={12}>
            <Card className={classes.card}>
              <h2 className={classes.title}>Web Developer</h2>
              <CardContent className={classes.section}>
                <BusinessCenterIcon className={classes.icon} />
                <Typography className={classes.items} component="p">
                  {" "}
                  Category1
                </Typography>
                <PersonIcon className={classes.icon} />{" "}
                <Typography className={classes.items} component="p">
                  {" "}
                  2
                </Typography>
                <LocationOnIcon className={classes.icon} />
                <Typography className={classes.items} component="p">
                  {" "}
                  Bangladesh
                </Typography>
                <AttachMoneyIcon className={classes.icon} />
                <Typography className={classes.items} component="p">
                  {" "}
                  2k-5k/monthly
                </Typography>
                <ArrowForwardIosIcon
                  className={classes.icon2}
                  fontSize="small"
                />
              </CardContent>
              <div>
                <span className={classes.status}>Full Time</span>
              </div>
              <br />
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default JobView;
