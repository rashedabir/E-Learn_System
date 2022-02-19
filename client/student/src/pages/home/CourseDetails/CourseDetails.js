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
  Box,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { useStyle } from "./styles";

import axios from "axios";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import BuildIcon from "@mui/icons-material/Build";
import FindInPageIcon from "@mui/icons-material/FindInPage";
import AllInclusiveIcon from "@mui/icons-material/AllInclusive";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import CreateIcon from "@mui/icons-material/Create";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import image from "../../../assets/react.png";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const CourseDetails = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const classes = useStyle();
  const { courseId } = useParams();
  const [course, setCourse] = useState([]);
  const [requirrements, setRequirrements] = useState([]);
  const [objective, setObjective] = useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    const getData = async () => {
      if (courseId) {
        await axios
          .get(
            `https://e-learn-bd.herokuapp.com/api/course_details/${courseId}`
          )
          .then((res) => {
            if (res.status === 200) {
              const { courseDetails } = res.data;
              setRequirrements(courseDetails?.requirements);
              setObjective(courseDetails?.objective);
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
            <Box sx={{ width: "100%" }}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  variant="fullWidth"
                  className={classes.tabcontainer}
                  TabIndicatorProps={{
                    style: {
                      backgroundColor: "#EA5252",
                    },
                  }}
                  aria-label="basic tabs example"
                >
                  <Tab label="Overview" {...a11yProps(0)} />
                  <Tab label="Instructor" {...a11yProps(1)} />
                  <Tab label="Resources" {...a11yProps(2)} />
                  <Tab label="Comment" {...a11yProps(3)} />
                </Tabs>
              </Box>
              <TabPanel value={value} index={0}>
                <Paper className={classes.paper}>
                  <Grid container>
                    <Grid item xs={12}>
                      <Typography variant="h4">
                        {course?.courseDetails?.title}
                      </Typography>
                      <Typography variant="h6">
                        {course?.courseDetails?.category}
                      </Typography>
                      <br></br>
                      <p>
                        <b>{course?.courseDetails?.enrolled}+</b> People
                        Enrolled This Course
                      </p>
                    </Grid>
                  </Grid>
                  <br></br>

                  <h2>About</h2>
                  <Typography component="p">
                    {course?.courseDetails?.about} --- Lorem ipsum dolor sit
                    amet consectetur adipisicing elit. Expedita voluptas laborum
                    asperiores modi quia aut velit cum. Iure iste officia
                    assumenda velit, deserunt accusamus recusandae explicabo
                    aliquid aperiam ut ipsam. dignissimos.
                  </Typography>
                  <br></br>
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
                  <h2>Objective</h2>
                  <Grid container className={classes.require} spacing={3}>
                    {objective &&
                      objective?.length > 0 &&
                      objective?.map((item, i) => (
                        <Grid item md={6} xs={12} key={i}>
                          <Typography className={classes.require2}>
                            <CreateIcon className={classes.icon2} />
                            {item?.objective}
                          </Typography>
                        </Grid>
                      ))}
                  </Grid>
                  <h2>Description</h2>
                  <Typography component="p">
                    {course?.courseDetails?.description} --- Lorem ipsum dolor
                    sit amet, consectetur adipisicing elit. Pariatur dolorum,
                    odio esse ipsum earum suscipit quo nostrum atque eos tempore
                    perferendis, cum dolor autem deleniti quidem, saepe est
                    quibusdam nobis et. Iure tempora reiciendis aliquam! Eveniet
                    placeat, in tempore, porro, perferendis saepe cum corporis
                    consequatur ab omnis animi nam similique?
                  </Typography>
                </Paper>
              </TabPanel>
              <TabPanel value={value} index={1}>
                <Paper className={classes.paper}>
                  <Grid container spacing={4} className={classes.tab2}>
                    <Grid item md={3} xs={12}>
                      <img src={image} alt="" className={classes.img} />
                    </Grid>
                    <Grid item md={9} xs={12} className={classes.tab2grid2}>
                      <b className={classes.instructor}>Name</b>
                      <Typography variant="h6">
                        {course?.courseDetails?.instructor?.name}
                      </Typography>
                      <br />
                      <b className={classes.instructor}>Mobile</b>{" "}
                      <Typography variant="h6">
                        {course?.courseDetails?.instructor?.mobile}
                      </Typography>
                      <br />
                      <b className={classes.instructor}>Address</b>{" "}
                      <Typography variant="h6">
                        {course?.courseDetails?.instructor?.address}
                      </Typography>
                      <br />
                    </Grid>
                  </Grid>
                </Paper>
              </TabPanel>
              <TabPanel value={value} index={2}>
                <Paper className={classes.paper}>This is Resource</Paper>
              </TabPanel>
              <TabPanel value={value} index={3}>
                <Paper className={classes.paper}>This is comment</Paper>
              </TabPanel>
            </Box>
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
                  Price : ${course?.courseDetails?.price}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  style={{
                    backgroundColor: "#EA5252",
                    padding: "18px 36px",
                    fontSize: "18px",
                    textTransform: "none",
                  }}
                  className={classes.button}
                  variant="contained"
                  onClick={() => {
                    navigate(`/enroll_page_student/${courseId}`);
                  }}
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
                  <BuildIcon className={classes.icon2} /> Assignment
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
