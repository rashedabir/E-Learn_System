import React from "react";
import Card from "@mui/material/Card";
import { Grid, Typography } from "@mui/material";
import { useStyle } from "./styles";
import { Link } from "react-router-dom";
import StarRateIcon from "@mui/icons-material/StarRate";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

const Cards = ({ item, type }) => {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <Card className={classes.cardmain} sx={{ border: "none", boxShadow: "none", height: "10%" }}>
        <img
          className={classes.cardimg}
          width="100%"
          src={item?.banner?.url || "https://picsum.photos/800/600?random=2"}
          alt=""
        />
        <button className={classes.tag}>{item?.category}</button>
        <h1 className={classes.heading}>
          <Typography
            component={Link}
            to={`/${type}/${item?._id}`}
          >
            {item?.title}
          </Typography>
        </h1>
        <div className={classes.flexitem}>
          <div className={classes.avatar}>
            <img
              className={classes.avatarimg}
              src="https://picsum.photos/800/600?random=2"
              alt=""
            />
          </div>
          <p className={classes.avatar}>{item?.instructor?.name}</p>
        </div>
        <Grid className={classes.gridcontainer} container spacing={2}>
          <Grid className={classes.flexitem} item xs={4}>
            <StarRateIcon className={classes.star} />{" "}
            <span className={classes.startext}>4.6</span>
          </Grid>
          <Grid className={classes.flexitem} item xs={4}>
            <PeopleOutlineIcon className={classes.enroll} />{" "}
            <span className={classes.enrolltxt}>{item?.enrolled}+</span>
          </Grid>
          <Grid className={classes.flexitems} item xs={4}>
            <span className={classes.normal}>
              <AttachMoneyIcon className={classes.dollar} />
              <span className={classes.pricetxt}>{item?.price}</span>
            </span>
          </Grid>
        </Grid>
      </Card>
    </div >
  );
};

export default Cards;
