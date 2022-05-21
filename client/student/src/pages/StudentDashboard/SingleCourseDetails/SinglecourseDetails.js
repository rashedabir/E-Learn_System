/* eslint-disable react-hooks/exhaustive-deps */
import CheckIcon from "@mui/icons-material/Check";
import CreateIcon from "@mui/icons-material/Create";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import TabContext from "@mui/lab/TabContext";
import TabPanel from "@mui/lab/TabPanel";
import {
  AppBar,
  Box,
  Button,
  Container,
  Grid,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import axios from "axios";
import PropTypes from "prop-types";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { GlobalState } from "../../../GlobalState";
import CourseDiscussion from "./discussion/CourseDiscussion";
import CourseLesson from "./lesson/CourseLesson";
import { useStyle } from "./styles";
import StudentTask from "./task/task";

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const SingleCourseDetails = () => {
  const classes = useStyle();
  const state = useContext(GlobalState);
  const [token] = state.token;
  const { courseId } = useParams();
  const [course, setCourse] = useState([]);
  const [lessons, setLessons] = useState([]);
  const [objective, setObjective] = useState([]);
  const [requirrements, setRequirrements] = useState([]);
  const [task, setTask] = useState([]);
  const [discussion, setDiscussion] = useState([]);
  const [loading, setLoading] = useState(false);
  const [list, setList] = state.userAPI.list;
  const history = useNavigate();

  const fetchList = async (list) => {
    await axios.patch(
      "https://e-learn-bd.herokuapp.com/api/course/enroll",
      { enrolled: list },
      {
        headers: { Authorization: token },
      }
    );
  };

  const getData = async () => {
    setLoading(true);
    await axios
      .get(`https://e-learn-bd.herokuapp.com/api/course_details/${courseId}`)
      .then((res) => {
        if (res.status === 200) {
          setCourse(res.data);
          setLessons(res.data.lessons);
          const { courseDetails, discussion } = res.data;
          setRequirrements(courseDetails?.requirements);
          setObjective(courseDetails?.objective);
          setTask(res.data.tasks);
          setDiscussion(discussion);
          setLoading(false);
        }
      });
  };

  useEffect(() => {
    if (courseId) {
      getData();
    }
  }, [courseId]);

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const removeCourse = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "to unenroll this course",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, unenroll it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        list.forEach((item, index) => {
          if (item.courseDetails._id === courseId) {
            list.splice(index, 1);
          }
        });
        setList([...list]);
        await fetchList(list);
        Swal.fire("Unenrolled!", "You unenroll in this course.", "success");
        history("/student_dashboard");
      }
    });
  };

  return (
    <div className={classes.root}>
      {loading ? (
        <div className="loading">Loading&#8230;</div>
      ) : (
        <Container className={classes.contains} maxWidth="xl">
          <div className={classes.actionBar}>
            <Button onClick={removeCourse} color="error">
              unenroll
            </Button>
            <Button
              component={Link}
              to={`/video-stream/${courseId}`}
              target="_blank"
              color="secondary"
            >
              join meet
            </Button>
          </div>
          <Grid container>
            <img
              src={course?.courseDetails?.banner.url}
              className={classes.banner}
              alt="..."
            />
          </Grid>
          <Grid className={classes.contains} container spacing={2}>
            <Grid item xs={12} md={7}>
              <Typography variant="h4">
                {" "}
                {course?.courseDetails?.title}
              </Typography>
              <Typography variant="h6">
                {course?.courseDetails?.category}
              </Typography>
            </Grid>
            <Grid item xs={12} md={5}>
              <Typography
                component="p"
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "15px",
                }}
              >
                <GroupsOutlinedIcon className={classes.icon} /> Total enrolled :{" "}
                {course?.courseDetails?.enrolled}+
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <h2>About </h2>
              <Typography component="p">
                {course?.courseDetails?.about}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <h2>What You’ll Learn</h2>
              <Grid className={classes.container} container spacing={3}>
                {objective &&
                  objective?.length > 0 &&
                  objective?.map((objective, i) => (
                    <Grid
                      item
                      xs={12}
                      md={6}
                      lg={6}
                      key={i}
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <Typography
                        component="p"
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        <CheckIcon className={classes.icon} />{" "}
                        {objective?.objective}
                      </Typography>
                    </Grid>
                  ))}
              </Grid>
            </Grid>

            <Grid item xs={12} sm={6}>
              <h2>Requirement</h2>
              <Grid className={classes.container} container spacing={3}>
                {requirrements &&
                  requirrements?.length > 0 &&
                  requirrements?.map((req, i) => (
                    <Grid item xs={12} md={6} lg={6} key={i}>
                      <Typography
                        component="p"
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        <CreateIcon className={classes.icon} />{" "}
                        {req?.requrement}
                      </Typography>
                    </Grid>
                  ))}
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <h2>Description</h2>
              <Typography component="p">
                {course?.courseDetails?.description}
              </Typography>
            </Grid>
            <Grid item xs={12} className={classes.instructor}>
              <h2>Instructor</h2>
              <Typography variant="h6">
                {course?.courseDetails?.instructor?.name}
              </Typography>
            </Grid>
          </Grid>
          {/* tab  */}
          <Box sx={{ width: "100%", typography: "body1" }}>
            <AppBar position="static">
              <Tabs
                value={value}
                onChange={handleChange}
                textColor="inherit"
                variant="fullWidth"
                className={classes.tabcontainer}
                aria-label="full width tabs example"
              >
                {lessons?.length > 0 && (
                  <Tab label="Lessons" value={0} {...a11yProps(0)} />
                )}
                {task?.length > 0 && (
                  <Tab label="Task" value={1} {...a11yProps(1)} />
                )}
                <Tab label="Discussion" value={2} {...a11yProps(2)} />
              </Tabs>
            </AppBar>

            <TabContext value={value}>
              {lessons?.length > 0 && (
                <TabPanel value={0} index={0}>
                  <CourseLesson lessons={lessons} />
                </TabPanel>
              )}
              {task?.length > 0 && (
                <TabPanel value={1} index={1}>
                  {task.map((task) => (
                    <StudentTask tasks={task} key={task._id} />
                  ))}
                </TabPanel>
              )}
              <TabPanel value={2} index={2}>
                <CourseDiscussion getData={getData} discussion={discussion} />
              </TabPanel>
            </TabContext>
          </Box>
        </Container>
      )}
    </div>
  );
};

export default SingleCourseDetails;
