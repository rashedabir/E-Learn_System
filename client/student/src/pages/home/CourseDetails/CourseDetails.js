import React, { useEffect, useState } from "react";
import {
  Container,
  Grid,
  Paper,
  Typography,
  Card,
  CardActions,
  CardContent,
  Button,
} from "@mui/material";
import { useParams } from "react-router-dom";
import { useStyle } from "./styles";

import axios from "axios";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import BuildIcon from "@mui/icons-material/Build";
import FindInPageIcon from "@mui/icons-material/FindInPage";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";

import CreateIcon from "@mui/icons-material/Create";

const CourseDetails = () => {
  const classes = useStyle();
  const { courseId } = useParams();
  const [course, setCourse] = useState([]);
  const [requirrements, setRequirrements] = useState([]);

  console.log(requirrements);

  useEffect(() => {
    const getData = async () => {
      if (courseId) {
        await axios
          .get(`/api/course_details/${courseId}`)
          .then((res) => {
            if (res.status === 200) {
              console.log("*****", res.data);
              const { courseDetails } = res.data;
              setRequirrements(courseDetails?.requirements);
              setCourse(res.data);
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    };
    getData();
  }, [courseId]);

  return (
    <div>
      <Container maxWidth="xl" className={classes.root}>
        <Grid container spacing={3}>
          <Grid item md={9}>
            <Paper className={classes.paper}>
              <Grid container>
                <Grid item xs={6}>
                  <Typography>
                    <h2>Course Name : {course?.courseDetails?.title}</h2>
                  </Typography>
                  <Typography component="p">
                    Category : {course?.courseDetails?.title}
                  </Typography>
                  <br></br>
                  <p>
                    <b>1000</b> People Enrolled This Course
                  </p>
                </Grid>
                <Grid item xs={6}>
                  <Typography>
                    <h2>
                      Instructor: {course?.courseDetails?.instructor?.name}
                    </h2>
                  </Typography>
                </Grid>
              </Grid>
              <br></br>

              <h2>About</h2>
              <Typography component="p">
                {course?.courseDetails?.about} --- Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Expedita voluptas laborum
                asperiores modi quia aut velit cum. Iure iste officia assumenda
                velit, deserunt accusamus recusandae explicabo aliquid aperiam
                ut ipsam. dignissimos.
              </Typography>
              <h2>Description</h2>
              <Typography component="p">
                {course?.courseDetails?.description} --- Lorem ipsum dolor sit
                amet, consectetur adipisicing elit. Pariatur dolorum, odio esse
                ipsum earum suscipit quo nostrum atque eos tempore perferendis,
                cum dolor autem deleniti quidem, saepe est quibusdam nobis et.
                Iure tempora reiciendis aliquam! Eveniet placeat, in tempore,
                porro, perferendis saepe cum corporis consequatur ab omnis animi
                nam similique?
              </Typography>
              <h2>Requirements</h2>
              <Grid container className={classes.require} spacing={3}>
                {requirrements &&
                  requirrements?.length > 0 &&
                  requirrements?.map((item, i) => (
                    <Grid item md={6} xs={12} key={i}>
                      <Typography className={classes.require2}>
                        <CreateIcon className={classes.icon2} />
                        {item?.requrement}
                      </Typography>
                    </Grid>
                  ))}
              </Grid>
            </Paper>
          </Grid>
          <Grid item md={3} xs={12}>
            <Card>
              <img
                src={course?.courseDetails?.banner?.url}
                className={classes.banner}
                alt="banner"
              />
              <CardContent>
                <Typography align="center" variant="h5">
                  Price : {course?.courseDetails?.price} Taka
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  style={{
                    backgroundColor: "#EA5252",
                    padding: "18px 36px",
                    fontSize: "18px",
                    textTransform: "none"
                  }}
                  className={classes.button}
                  variant="contained"
                  onClick={() => { }}
                >
                  Enroll
                </Button>
              </CardActions>
              <div className={classes.section}>
                <Typography component="p">This course includes</Typography>
                <p className={classes.section2}>
                  <FindInPageIcon className={classes.icon2} /> 1 article
                </p>
                <p className={classes.section2}>
                  <AllInclusiveIcon className={classes.icon2} /> Full lifetime
                  access
                </p>
                <p className={classes.section2}>
                  <PhoneAndroidIcon className={classes.icon2} /> Access on
                  mobile and TV
                </p>
                <p className={classes.section2}>
                  <BuildIcon className={classes.icon2} /> SkillsFuture Credit
                  eligible
                </p>
                <p className={classes.section2}>
                  <VerifiedUserIcon className={classes.icon2} /> Certificate of
                  Completion
                </p>
              </div>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default CourseDetails;
