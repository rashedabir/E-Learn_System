import AllInclusiveIcon from "@mui/icons-material/AllInclusive";
import BuildIcon from "@mui/icons-material/Build";
import CreateIcon from "@mui/icons-material/Create";
import FindInPageIcon from "@mui/icons-material/FindInPage";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  FormLabel,
  Grid,
  Paper,
  Rating,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import axios from "axios";
import PropTypes from "prop-types";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { GlobalState } from "../../../GlobalState";
import { useStyle } from "./styles";

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
  const state = useContext(GlobalState);
  const [token] = state.token;
  const [course, setCourse] = useState([]);
  const [requirrements, setRequirrements] = useState([]);
  const [objective, setObjective] = useState([]);
  const [isLogging] = state.userAPI.isLogged;

  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const submitReview = async () => {
    try {
      await axios.put(
        `https://e-learn-bd.herokuapp.com/api/course/review/${courseId}`,
        {
          rating: rating,
          comment: review,
        },
        {
          headers: { Authorization: token },
        }
      );
      toast.success("Successfully Comment");
      setRating(0);
      setReview("");
    } catch (error) {
      toast.error(error.response.data.msg);
    }
  };

  useEffect(() => {
    const getData = async () => {
      if (courseId) {
        setLoading(true);
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
              setLoading(false);
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
      {loading ? (
        <div className="loading">Loading&#8230;</div>
      ) : (
        <Container maxWidth="xl" className={classes.root}>
          <Grid container spacing={3}>
            <Grid item md={9} sm={12} xs={12}>
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
                    <Tab label="Comment" {...a11yProps(2)} />
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
                      amet consectetur adipisicing elit. Expedita voluptas
                      laborum asperiores modi quia aut velit cum. Iure iste
                      officia assumenda velit, deserunt accusamus recusandae
                      explicabo aliquid aperiam ut ipsam. dignissimos.
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
                      odio esse ipsum earum suscipit quo nostrum atque eos
                      tempore perferendis, cum dolor autem deleniti quidem,
                      saepe est quibusdam nobis et. Iure tempora reiciendis
                      aliquam! Eveniet placeat, in tempore, porro, perferendis
                      saepe cum corporis consequatur ab omnis animi nam
                      similique?
                    </Typography>
                  </Paper>
                </TabPanel>
                <TabPanel value={value} index={1}>
                  <Paper className={classes.paper}>
                    <Grid container spacing={4} className={classes.tab2}>
                      <Grid item md={3} xs={12}>
                        <img
                          src={
                            course?.instructor?.image
                              ? course?.instructor?.image?.url
                              : "https://monstar-lab.com/global/wp-content/uploads/sites/11/2019/04/male-placeholder-image.jpeg"
                          }
                          alt=""
                          className={classes.img}
                        />
                      </Grid>
                      <Grid item md={9} xs={12} className={classes.tab2grid2}>
                        <b className={classes.instructor}>Name</b>
                        <Typography variant="h6">
                          {course?.instructor?.name}
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
                  <Paper className={classes.paper}>
                    {isLogging && (
                      <Box>
                        <Box
                          sx={{ display: "flex", alignItems: "center", mb: 3 }}
                        >
                          <FormLabel sx={{ mr: 5 }}>Give Rating: </FormLabel>
                          <Rating
                            name="simple-controlled"
                            value={rating}
                            onChange={(event, newValue) => {
                              setRating(newValue);
                            }}
                          />
                        </Box>
                        <FormLabel>Give Review:</FormLabel>
                        <TextareaAutosize
                          color="warning"
                          minRows={4}
                          aria-label="maximum height"
                          placeholder="Give Review"
                          value={review}
                          style={{ width: "100%", marginTop: "10px" }}
                          onChange={(e) => {
                            setReview(e.target.value);
                          }}
                        />
                        <Button
                          sx={{
                            background: "#eb5252",
                            ":hover": {
                              background: "#eb5252",
                            },
                          }}
                          variant="contained"
                          onClick={submitReview}
                        >
                          Submit
                        </Button>
                      </Box>
                    )}
                    <Box>
                      {course?.courseDetails?.comments &&
                        course?.courseDetails?.comments?.length > 0 &&
                        course?.courseDetails?.comments?.map((item, i) => (
                          <Box
                            key={item?._id}
                            sx={{
                              border: "1px solid #eee",
                              padding: "10px",
                              margin: "15px 0",
                            }}
                          >
                            <Box sx={{ display: "flex" }}>
                              <Avatar src="/broken-image.jpg" sx={{ mr: 3 }} />
                              <Typography sx={{ fontSize: "20px", mr: 3 }}>
                                {item?.author}
                              </Typography>
                              <Rating
                                name="read-only"
                                value={item?.rating}
                                readOnly
                              />
                            </Box>
                            <Typography sx={{ pl: 8 }}>
                              {item?.comment}
                            </Typography>
                          </Box>
                        ))}
                    </Box>
                  </Paper>
                </TabPanel>
              </Box>
            </Grid>

            <Grid item md={3} xs={12} sm={12}>
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
                    <VerifiedUserIcon className={classes.icon2} /> Certificate
                    of Completion
                  </p>
                </div>
              </Card>
            </Grid>
          </Grid>
        </Container>
      )}
    </div>
  );
};

export default CourseDetails;
