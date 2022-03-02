import React from "react";
import Typography from "@mui/material/Typography";
import { useStyle } from "./styles";
import { Card, Grid, Container } from "@mui/material";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import PersonIcon from "@mui/icons-material/Person";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useNavigate } from "react-router-dom";

const JobView = () => {
  const classes = useStyle();
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/job_details");
  };
  return (
    <div className={classes.root}>
      <h1 className={classes.heading}>Available Jobs</h1>
      <Container>
        <Card className={classes.card}>
          <h2
            className={classes.title}
            onClick={() => {
              handleClick();
            }}
          >
            Web Developer
          </h2>
          <Grid container>
            <Grid item md={11} xs={11} className={classes.section}>
              <BusinessCenterIcon className={classes.icon} fontSize="small" />
              <Typography className={classes.items} component="p">
                {" "}
                Category1
              </Typography>
              <PersonIcon className={classes.icon} fontSize="small" />{" "}
              <Typography className={classes.items} component="p">
                {" "}
                2
              </Typography>
              <LocationOnIcon className={classes.icon} fontSize="small" />
              <Typography className={classes.items} component="p">
                {" "}
                Bangladesh
              </Typography>
              <AttachMoneyIcon className={classes.icon} fontSize="small" />
              <Typography className={classes.items} component="p">
                {" "}
                2k-5k/monthly
              </Typography>
            </Grid>
            <Grid item md={1} xs={1}>
              <ArrowForwardIosIcon
                className={classes.icon2}
                fontSize="small"
                onClick={() => {
                  handleClick();
                }}
              />
            </Grid>
          </Grid>
          <div>
            <span className={classes.status}>Full Time</span>
          </div>
          <br />
        </Card>
      </Container>
    </div>
  );
};

export default JobView;
