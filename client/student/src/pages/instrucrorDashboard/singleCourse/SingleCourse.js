/* eslint-disable react-hooks/exhaustive-deps */
import CheckIcon from "@mui/icons-material/Check";
import CreateIcon from "@mui/icons-material/Create";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Tab from "@mui/material/Tab";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { GlobalState } from "../../../GlobalState";
import CourseDiscussion from "./discussion/CourseDiscussion";
import Lesson from "./lessons/Lesson";
import { useStyle } from "./styles";
import Task from "./tasks/Task";

const SingleCourse = () => {
  const classes = useStyle();
  const state = useContext(GlobalState);
  const [token] = state.token;
  const { courseId } = useParams();
  const [course, setCourse] = useState([]);
  const [lessons, setLessons] = useState([]);
  const [objective, setObjective] = useState([]);
  const [req, setReq] = useState([]);
  const [task, setTask] = useState([]);
  const [discussion, setDiscussion] = useState([]);
  const [loading, setLoading] = useState(false);
  const history = useNavigate();

  const getData = async () => {
    setLoading(true);
    await axios
      .get(`https://e-learn-bd.herokuapp.com/api/course_details/${courseId}`)
      .then((res) => {
        if (res.status === 200) {
          setCourse(res.data);
          setLessons(res.data.lessons);
          setObjective(res.data.courseDetails.objective);
          setReq(res.data.courseDetails.requirements);
          setTask(res.data.tasks);
          setDiscussion(res.data.discussion);
          setLoading(false);
        }
      });
  };

  useEffect(() => {
    if (courseId) {
      getData();
    }
  }, [courseId]);

  const deleteCourse = async () => {
    Swal.fire({
      title: "Are you sure?",
      text: "to delete this course",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await axios
          .delete(
            `https://e-learn-bd.herokuapp.com/api/course_details/${courseId}`,
            {
              headers: { Authorization: token },
            }
          )
          .then((res) => {
            if (res.status === 200) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              history("/instructor_dashboard");
            } else {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
              });
            }
          });
      }
    });
  };
  const [value, setValue] = React.useState("lesson");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      {loading ? (
        <div className="loading">Loading&#8230;</div>
      ) : (
        <Container className={classes.contains} maxWidth="xl">
          {/* <h2>Course Name : {course?.courseDetails?.title}</h2> */}
          <div className={classes.top}>
            <span className={classes.link}>
              <h3 className={classes.linktxt}>
                <Button
                  style={{
                    textTransform: "none",
                  }}
                  onClick={deleteCourse}
                  color="error"
                >
                  Delete Course
                </Button>
              </h3>
            </span>

            <span className={classes.link}>
              <Link to={`/course_edit/${courseId}`}>
                <h3 className={classes.linktxt}>
                  <Button
                    style={{
                      textTransform: "none",
                    }}
                    color="secondary"
                  >
                    Edit Course
                  </Button>
                </h3>
              </Link>
            </span>
            <span className={classes.link}>
              <Link to={`/course_task/${courseId}`}>
                <h3 className={classes.linktxt}>
                  <Button
                    style={{
                      textTransform: "none",
                    }}
                    color="secondary"
                  >
                    Add Task
                  </Button>
                </h3>
              </Link>
            </span>
            <span className={classes.link}>
              <Link to={`/create_lesson/${courseId}`}>
                <h3 className={classes.linktxt}>
                  <Button
                    style={{
                      textTransform: "none",
                    }}
                    color="secondary"
                  >
                    Add Lesson
                  </Button>
                </h3>
              </Link>
            </span>
            <span className={classes.link}>
              <Link target="_blank" to={`/video-stream/${courseId}`}>
                <h3 className={classes.linktxt}>
                  <Button
                    style={{
                      textTransform: "none",
                    }}
                    color="secondary"
                  >
                    Start Meet
                  </Button>
                </h3>
              </Link>
            </span>
          </div>
          <Grid container>
            <img
              src={course?.courseDetails?.banner.url}
              className={classes.banner}
              alt="..."
            />
          </Grid>
          <Grid className={classes.contains} container spacing={2}>
            <Grid item xs={12} md={6}>
              <h2> {course?.courseDetails?.title}</h2>
              <Typography variant="h6" className={classes.pading}>
                Instructor : {course?.courseDetails?.instructor?.name}
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography
                component="p"
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "25px",
                }}
              >
                <GroupsOutlinedIcon className={classes.icon} /> Total enrolled :{" "}
                {course?.courseDetails?.enrolled}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <h2 className={classes.pading}>About </h2>
              <p className={classes.about}>{course?.courseDetails?.about}</p>
            </Grid>
            <Grid item xs={12} sm={6}>
              <h2>What You’ll Learn</h2>
              <Grid className={classes.container} container spacing={3}>
                {objective.map((objective) => (
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={6}
                    lg={6}
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <Typography
                      component="p"
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <CheckIcon className={classes.icon} />{" "}
                      {objective.objective}
                    </Typography>
                  </Grid>
                ))}
              </Grid>
            </Grid>

            <Grid item xs={6}>
              <h2>Requirement</h2>
              <Grid className={classes.container} container spacing={3}>
                {req.map((req) => (
                  <Grid item xs={12} md={6} lg={6}>
                    <Typography
                      component="p"
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <CreateIcon className={classes.icon} /> {req?.requrement}
                    </Typography>
                  </Grid>
                ))}
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <h2 className={classes.pading}>Description </h2>
              <p>{course?.courseDetails?.description}</p>
            </Grid>
          </Grid>

          {/* tab  */}
          {task.length !== 0 ? (
            <Box sx={{ width: "100%", typography: "body1" }}>
              <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <TabList
                    onChange={handleChange}
                    className={classes.tabcontainer}
                    TabIndicatorProps={{
                      style: { background: "red" },
                    }}
                  >
                    <Tab
                      label="Lessons"
                      value="lesson"
                      style={{ minWidth: "33%" }}
                    />
                    <Tab
                      label="Task"
                      value="task"
                      style={{ minWidth: "34%" }}
                    />
                    <Tab
                      label="Discussion"
                      value="discussion"
                      style={{ minWidth: "33%" }}
                    />
                  </TabList>
                </Box>
                <TabPanel value="lesson">
                  {/* map lesson  */}
                  <div className={classes.lessonWrapper}>
                    {lessons.map((lesson) => (
                      <Lesson
                        getData={getData}
                        lessons={lesson}
                        key={lesson._id}
                      />
                    ))}
                  </div>
                </TabPanel>
                <TabPanel value="task">
                  {/* all task  */}
                  {task.map((task) => (
                    <Task getData={getData} tasks={task} key={task._id} />
                  ))}
                </TabPanel>
                <TabPanel value="discussion">
                  {/* discussion lesson  */}
                  <CourseDiscussion getData={getData} discussion={discussion} />
                </TabPanel>
              </TabContext>
            </Box>
          ) : (
            <div className={classes.lessonWrapper}>
              {lessons.map((lesson) => (
                <Lesson lessons={lesson} key={lesson._id} />
              ))}
            </div>
          )}
        </Container>
      )}
    </div>
  );
};

export default SingleCourse;
