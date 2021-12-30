import React from "react";
import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
import { Grid } from "@mui/material";
import { useStyle } from "./styles";
import StarRateIcon from "@mui/icons-material/StarRate";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

const Cards = () => {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <Card>
        <img
          width="100%"
          height="100%"
          src="https://picsum.photos/800/600?random=2"
          alt=""
        />
        <h1 className={classes.heading}>Shrimp and Chorizo Paella</h1>
        <div className={classes.flexitem}>
          <div className={classes.avatar}>
            <Avatar>
              <img
                width="100%"
                height="100%"
                src="https://picsum.photos/800/600?random=2"
                alt=""
              />
            </Avatar>
          </div>
          <p className={classes.avatar}>Sohag Raha</p>
        </div>
        <hr />
        <Grid className={classes.gridcontainer} container spacing={2}>
          <Grid className={classes.flexitem} item xs={3}>
            <StarRateIcon /> 4.6
          </Grid>
          <Grid className={classes.flexitem} item xs={3}>
            <PeopleOutlineIcon /> 1200+
          </Grid>
          <Grid className={classes.flexitem} item xs={6}>
            <AttachMoneyIcon /> 58.60{" "}
            <span className={classes.linecut}>
              <AttachMoneyIcon /> 58.60
            </span>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
};

export default Cards;
