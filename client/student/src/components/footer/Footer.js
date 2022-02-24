import { Container, Grid, Link, Typography } from "@mui/material";
import React from "react";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import PinterestIcon from "@mui/icons-material/Pinterest";
import { useStyle } from "./styles";

const Footer = () => {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <div className={classes.footers}>
        <Container maxWidth="xl">
          <Grid container spacing={6}>
            <Grid className={classes.branding} item xs={12} md={5}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography
                    className={classes.menubutton}
                    color="red"
                    style={{ textDecoration: 'none' }}
                    fontWeight="700"
                    fontSize="25px"
                    fontFamily="URW Chancery L, cursive"
                    to="/"
                    component={Link}
                  >
                    E-Learn
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Gravida viverra sodales nibh quisque tincidunt. Dolor
                  elementum elementum non vitae turpis mauris adipiscing.
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={6} md={2}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <p className={classes.heading}>Useful Links</p>
                  <Link underline="none" component="button">
                    About us
                  </Link>
                  <br />
                  <Link underline="none" component="button">
                    Work with us
                  </Link>
                  <br />
                  <Link underline="none" component="button">
                    Love Mondays
                  </Link>
                  <br />
                  <Link underline="none" component="button">
                    For developers
                  </Link>
                  <Link underline="none" component="button">
                    Press office
                  </Link>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={6} md={2}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <p className={classes.heading}>Courses</p>
                  <Link underline="none" component="button">
                    Find a course
                  </Link>
                  <br />
                  <Link underline="none" component="button">
                    Career guides
                  </Link>
                  <br />
                  <Link underline="none" component="button">
                    Discount courses
                  </Link>
                  <br />
                  <Link underline="none" component="button">
                    Online courses
                  </Link>
                  <Link underline="none" component="button">
                    Free courses
                  </Link>
                  <Link underline="none" component="button">
                    Discount codes
                  </Link>
                  <Link underline="none" component="button">
                    On Demand Terms
                  </Link>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={3}>
              Contact US
              <p className={classes.contact}>
                <LocalPhoneIcon className={classes.ico} /> +00 123 456 789
              </p>
              <p className={classes.contact}>
                <MailOutlineIcon className={classes.ico} /> info@elearn.inc
              </p>
              <p className={classes.contact}>
                <AddLocationIcon className={classes.ico} /> lorem ipsum Road,
                London, United Kingdom
              </p>
              <div className={classes.icons}>
                <FacebookIcon className={classes.icon} />
                <TwitterIcon className={classes.icon} />
                <InstagramIcon className={classes.icon} />
                <YouTubeIcon className={classes.icon} />
                <PinterestIcon className={classes.icon} />
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
      <div className={classes.footer}>
        <Container maxWidth="xl">
          <Grid container spacing={2}>
            <Grid item xs={12} md={7}>
              <Grid container spacing={2}>
                <Grid item xs={6} md={3}>
                  Secuirity
                </Grid>
                <Grid item xs={6} md={3}>
                  Privacy
                </Grid>
                <Grid item xs={6} md={3}>
                  Cookie setting
                </Grid>
                <Grid item xs={6} md={3}>
                  Terms & condition
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={5}>
              COPYRIGHT © elearn.com 2021
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
};

export default Footer;
