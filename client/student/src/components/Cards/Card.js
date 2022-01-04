import React from 'react';
import Card from '@mui/material/Card';
import { Grid } from '@mui/material';
import { useStyle } from "./styles";
import StarRateIcon from '@mui/icons-material/StarRate';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';


const Cards = () => {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <Card sx={{ border: "none", boxShadow: "none", }}>
        <img className={classes.cardimg} width="100%" src="https://picsum.photos/800/600?random=2" alt="" />
        <button className={classes.tag}>Beginer</button>
        <h1 className={classes.heading}>Python and Django Full Stack Web Developer Bootcamp</h1>
        <div className={classes.flexitem}>
          <div className={classes.avatar}>
            <img className={classes.avatarimg} src="https://picsum.photos/800/600?random=2" alt="" />
          </div>
          <p className={classes.avatar}>Sohag Raha</p>
        </div>
        <Grid className={classes.gridcontainer} container spacing={2}>
          <Grid className={classes.flexitem} item xs={3}>
            <StarRateIcon className={classes.star} /> <span className={classes.startext}>4.6</span>
          </Grid>
          <Grid className={classes.flexitem} item xs={3}>
            <PeopleOutlineIcon className={classes.enroll} /> <span className={classes.enrolltxt}>1200+</span>
          </Grid>
          <Grid className={classes.flexitems} item xs={4}>
            <span className={classes.normal}><AttachMoneyIcon className={classes.dollar} /><span className={classes.pricetxt}>58.60</span></span>
          </Grid>
          {/* <Grid className={classes.flexitem} item xs={3}>
            <span className={classes.linecut}><AttachMoneyIcon className={classes.dollarcut} /><span className={classes.pricetxt}>58.60</span></span>
          </Grid> */}

        </Grid>

      </Card>
    </div>
  );
};

export default Cards;