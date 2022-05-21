import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import StarRateIcon from "@mui/icons-material/StarRate";
import { Grid, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useStyle } from "./styles";

const Cards = ({ item, type }) => {
  const classes = useStyle();
  const [rating, setRating] = useState(0);

  useEffect(() => {
    if (item?.comments?.length > 0) {
      const getRating = () => {
        const ratings = item?.comments.map((rating) => rating.rating);
        const total = ratings
          .reduce((acc, item) => (acc += item), 0)
          .toFixed(1);
        const rating = total / ratings.length;
        if (rating > 0) {
          setRating(rating);
        } else {
          setRating(0);
        }
      };
      getRating();
    }
  }, [item]);

  return (
    <div className={classes.root}>
      <Card
        className={classes.cardmain}
        sx={{ border: "none", boxShadow: "none", height: "10%" }}
      >
        <img
          className={classes.cardimg}
          width="100%"
          src={
            item?.banner?.url ??
            "https://www.pulsecarshalton.co.uk/wp-content/uploads/2016/08/jk-placeholder-image.jpg"
          }
          alt=""
        />
        <button className={classes.tag}>{item?.category}</button>
        <h1 className={classes.heading}>
          <Typography component={Link} to={`/${type}/${item?._id}`}>
            {item?.title}
          </Typography>
        </h1>
        <div className={classes.flexitem}>
          <div className={classes.avatar}>
            <img
              className={classes.avatarimg}
              src="https://monstar-lab.com/global/wp-content/uploads/sites/11/2019/04/male-placeholder-image.jpeg"
              alt=""
            />
          </div>
          <p className={classes.avatar}>{item?.instructor?.name}</p>
        </div>
        <Grid className={classes.gridcontainer} container spacing={2}>
          <Grid className={classes.flexitem} item xs={4}>
            <StarRateIcon className={classes.star} />{" "}
            <span className={classes.startext}>{rating ? rating : "0"}+</span>
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
    </div>
  );
};

export default Cards;
