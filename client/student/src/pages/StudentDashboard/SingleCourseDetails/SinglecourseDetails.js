import React, { useState, useEffect } from "react";
import { useStyle } from "./styles";
import { Container, Grid, Typography, Tab, Box } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import CreateIcon from "@mui/icons-material/Create";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";

import { useParams } from "react-router-dom";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import axios from "axios";
import StudentLesson from "./lesson/lesson";
import StudentTask from "./task/task";

const SingleCourseDetails = () => {
  const classes = useStyle();

  const { courseId } = useParams();
  const [course, setCourse] = useState([]);
  const [lessons, setLessons] = useState([]);
  const [objective, setObjective] = useState([]);
  const [requirrements, setRequirrements] = useState([]);
  const [task, setTask] = useState([]);

  useEffect(() => {
    const getData = async () => {
      if (courseId) {
        await axios.get(`/api/course_details/${courseId}`).then((res) => {
          if (res.status === 200) {
            setCourse(res.data);
            setLessons(res.data.lessons);
            const { courseDetails } = res.data;
            setRequirrements(courseDetails?.requirements);
            setObjective(courseDetails?.objective);
            setTask(res.data.tasks);
          }
        });
      }
    };
    getData();
  }, [courseId]);

  const [value, setValue] = React.useState("lesson");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Container className={classes.contains} maxWidth="xl">
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
                      <CreateIcon className={classes.icon} /> {req?.requrement}
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
        {/* map lesson  */}
        {(task.length != 0) ?
          <Box sx={{ width: "100%", typography: "body1" }}>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList
                  onChange={handleChange}
                  TabIndicatorProps={{
                    style: {
                      backgroundColor: "#EA5252",
                    },
                  }}
                >
                  <Tab
                    label="Lessons"
                    value="lesson"
                    style={{ minWidth: "50%" }}
                  />
                  <Tab label="Task" value="task" style={{ minWidth: "50%" }} />
                </TabList>
              </Box>
              <TabPanel value="lesson">
                {/* map lesson  */}
                <div className={classes.lessonWrapper}>
                  {lessons.map((lesson) => (
                    <StudentLesson lessons={lesson} key={lesson._id} />
                  ))}
                </div>
              </TabPanel>
              <TabPanel value="task">
                {/* all task  */}
                {task.map((task) => (
                  <StudentTask tasks={task} key={task._id} />
                ))}
              </TabPanel>
            </TabContext>
          </Box> :
          <div className={classes.lessonWrapper}>
            {lessons.map((lesson) => (
              <StudentLesson lessons={lesson} key={lesson._id} />
            ))}
          </div>}
      </Container>
    </div>
  );
};

export default SingleCourseDetails;
